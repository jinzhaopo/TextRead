function initPage(){
	var main = document.getElementById("main");
	var library = document.getElementById("library");
	var bookshelf=document.getElementById("bookshelf");
	
	var bookLi=document.getElementsByClassName("bookLi");
	
	main.addEventListener("tap",function () {
		 mui.openWindow({
      		url:'index.html',
      		id:'main',
      		createNew:false
      	})
	});
	library.addEventListener("tap",function () {
		 mui.openWindow({
      		url:'Library.html',
      		id:'library',
      		styles:{
      			top:"50px",
      			bottom:"51px",
      			height:"600px"
      		},
      		createNew:false
      	})
	});
	bookshelf.addEventListener("tap",function () {
		 mui.openWindow({
      		url:'bookshelf.html',
      		id:'bookshelf',
      		styles:{
      			top:"50px",
      			bottom:"51px",
      			height:"600px"
      		},
      		createNew:false
      	})
	});
	for(i=0;i<bookLi.length;i++){
		bookLi[i].addEventListener("tap",function () {
			location.href="pullrefresh_main.html"
			 /*mui.openWindow({
	      		url:'pullrefresh_main.html',
	      		id:'pullrefresh_main',
	      		createNew:false
	      	})*/
		});
	}
	
	
}
