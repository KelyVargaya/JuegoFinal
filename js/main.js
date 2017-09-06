
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], //flechas
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

// JS-CATALOGO
var contenedorImg = document.getElementById('contenedorIMGGLOBAL');
contenedorImg.onclick=function(){
	var x=event.target.src;
	var img=document.getElementById("modalIMG");
	img.setAttribute("src",x);
}


