var oTop=document.getElementById("top")
var oTopspan=document.getElementById("top-span");
var oTopimg=document.getElementById("top-img");
var oNavhover=document.getElementsByClassName("nav-hover")[0];
var oNaverji=document.getElementsByClassName("nav-erji")[0];
var oCityspan=document.getElementById("city-span");
var oLi=oCityspan.getElementsByTagName("a")[0]



oTopspan.onclick=function(){
	oTop.style.display="none";
}

//for (var i=0;i<oNavhover.length;i++){
//	oNavhover[i].onmousemove=function(){
//	console.log(2)
//	oNaverji.style.display="block";
//	oNavhover.style.backgroundColor="#FFFFFF"
//
//}
//oNavhover[i].onmouseout=function(){
//	console.log(2)
//	oNaverji.style.display="none";
//	oNavhover.style.backgroundColor="#e3e4e5"
//}
//}


//logo
	var _shopping=document.getElementById("shoppingcar");
	var _shoppingCar1=document.getElementById("shoppingcar1")
	_shopping.onmousemove=function(){
		_shoppingCar1.style.display="block";		
	}
	_shopping.onmouseout=function(){
		_shoppingCar1.style.display="none";	
	}
//banner
	var _bannerLeft1=document.getElementById("banner-left1");
	var _blp=_bannerLeft1.getElementsByTagName("p");	
	var _big=document.getElementById("big");
	var _bigspan=_big.getElementsByTagName("span");
	var _bigh=_big.getElementsByTagName("h4");
	for (var i=0;i<_blp.length;i++){
		_blp[i].onmouseover=function(){
			this.style.backgroundColor="#999395"
			_big.style.display="block";
			_big.style.zIndex="333";
					
		}
		_blp[i].onmouseout=function(){
				this.style.backgroundColor="#6e6568"				
				_big.style.display="none";	
			}
		_big.onmouseover=function(){
			
			_big.style.display="block";	
			_big.style.zIndex="333";
		}
		_big.onmouseout=function(){
							
				_big.style.display="none";	
		}

	}
for (var j=0;j<_bigspan.length;j++){
	_bigspan[j].onmousemove=function(){
		this.style.color="red";	
	}
	_bigspan[j].onmouseout=function(){
		this.style.color="#afafaf";	
	}
}

for (var m=0;m<_bigh.length;m++){
	_bigh[m].onmousemove=function(){
		this.style.color="red";	
	}
	_bigh[m].onmouseout=function(){
		this.style.color="#afafaf";	
	}
}

//轮播图
function lunbo (){
	
	var _lunbo=document.getElementById("banner-ct").children[0];
	var _circle=document.getElementById("circle");
	var _timer=0;
	var _opacity=Number((_lunbo.currentStyle||window.getComputedStyle(_lunbo,null))["opacity"]);
	var _arrow=document.getElementById("arrow");
	var _left=document.getElementById("left");
	var _right=document.getElementById("right");
	var m=0;

	function change (){
		clearTimeout(_timer);
		_opacity+=0.02;
		_lunbo.style.opacity=_opacity;
		if (_opacity<1){			
		 _timer=setTimeout(change,30);
		}else{
			setTimeout(function(){
				var _src=_lunbo.src;
				var _index=parseInt(_src.match(/\d+\.jpg$/g)[0])				
				m=_index;
				
				if(_index<10){
					_lunbo.src="img/"+(_index+1)+".jpg";
					for ( m=0;m<_circle.children.length;m++){
					_circle.children[m].className="";					
					_circle.children[_index-2].className="circle-span";
				}
				}else{
					_lunbo.src="img/3.jpg";	
					
				}
				_opacity=0.3;
					change();
					
			},200)			
		}	
	}
	change();	
	
	function move(){
		
		for(var n=0;n<_circle.children.length;n++){
			_circle.children[n].index=n;
			_circle.children[n].onmousemove=function(){
				_lunbo.src="img/"+(this.index+3)+".jpg";
				for ( m=0;m<_circle.children.length;m++){
					_circle.children[m].className="";					
					this.className="circle-span";
				}
			}
		}		
	}
	
	move();
		
	_left.onclick=function(){
		var _src=_lunbo.src;
		var _index=parseInt(_src.match(/\d+\.jpg$/g)[0])
		if(_index>3){
			_lunbo.src="img/"+(_index-1)+".jpg";
				for ( m=0;m<_circle.children.length;m++){			
					_circle.children[m].className="";					
					_circle.children[_index-4].className="circle-span";
				}
				
		}else{
			_index=10;
			_lunbo.src="img/"+(_index-1)+".jpg";
		}
		console.log(_index)
	
	}
	
	_right.onclick=function(){
		var _src=_lunbo.src;
		var _index=parseInt(_src.match(/\d+\.jpg$/g)[0])
		if(_index<10){
			_lunbo.src="img/"+(_index+1)+".jpg";
			for ( m=0;m<_circle.children.length;m++){			
					_circle.children[m].className="";					
					_circle.children[_index-2].className="circle-span";
				}
			console.log(_index)
		}else{
			_index=3;
			_lunbo.src="img/"+(_index+1)+".jpg";
		}	
	}
	//---------------------------促销划过------------------------------------------
	var _bannerrc=document.getElementById("banner-rc");
	var _bannerrc1=document.getElementById("banner-rc1");
	var _bannerspan=_bannerrc1.getElementsByTagName("span");
	var _cuxiao=_bannerrc.getElementsByTagName("div");
	var _line=document.getElementById("line");
	for (var a=0;a<_bannerspan.length-1;a++){
		_bannerspan[a].index=a;
		_bannerspan[a].onmouseover=function(){
			for (var b=0;b<_bannerspan.length-1;b++){				
				_cuxiao[b].className="";				
			}		
			_line.style.transform="translateX("+40*(this.index)+"px)";
			_line.style.transition="1s"
			_cuxiao[this.index].className="cuxiao";
		}		
	}

}

lunbo ()

//---------------------------------------倒计时-----------------------------------------------------
var _hours=document.getElementById("hours");
var _minutes=document.getElementById("minute");
var _seconds=document.getElementById("second");
time();
var timer=setInterval(time,1000);
function time(){
	var _endTime=new Date("2017/3/26 22:48:50");
	var _startTime=new Date();
	var time=_endTime.getTime()-_startTime.getTime();						
	var hours=parseInt(time/1000/60/60);
	var minutes=parseInt(time/1000/60%60);
	var seconds=parseInt(time/1000%60);
	if(time<0){
		clearInterval(timer)
	}
	function twoTo (n){
				if (n<10){
					n="0"+n;
				}
				return n;
			}
			_hours.innerHTML=twoTo(hours);
			_minutes.innerHTML=twoTo(minutes);
			_seconds.innerHTML=twoTo(seconds);
}


//--------------------------------------发现好货右-------------------------------------------------
var _frul=document.getElementById("fr-bottom");
var _frli=_frul.getElementsByTagName("li");
var _fri=_frul.getElementsByTagName("i")[0];
var _product=document.getElementById("product");
var _pro=_product.getElementsByTagName("ul");

//console.log(_pro.length)
for (var c=0;c<_frli.length;c++){
	_frli[c].index=c;
	_frli[c].onmouseover=function(){
		_fri.style.transform="translateX("+77*(this.index)+"px)";
		_fri.style.transition="500ms";
		this.children[0].style.color="red";
		for (var d=0;d<_frli.length;d++){			
			_pro[d].className="";					
		}
		_pro[this.index].className="fr-product";
	}
	_frli[c].onmouseout=function(){			
			this.children[0].style.color="";
	}
}






































