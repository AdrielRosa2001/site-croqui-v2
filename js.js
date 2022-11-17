const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


$(function(){
    $('.slider-principal').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next'
    });
});
$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    if (id == '#inicio') {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 68
        }, 1000);

    }else if (id == '#nossas-lojas') {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 68
        }, 1000);
    }else if (id == '#servicos') {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset  - 123
        }, 1000);
    }else if (id == '#quem-somos') {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
            targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 68
        }, 1000);
    }else {
        window.location = "../index.html"
    }
});

$('#plotagem').click(function(e){
    e.preventDefault();
    window.location = "/pages/plotagem.html"
});
$('#escaneamento').click(function(e){
    e.preventDefault();
    window.location = "/pages/escaneamento.html"
});
$('#imagem').click(function(e){
    e.preventDefault();
    window.location = "/pages/imagem.html"
});
$('#plastificacao').click(function(e){
    e.preventDefault();
    window.location = "/pages/plastificacao.html"
});
$('#placas').click(function(e){
    e.preventDefault();
    window.location = "/pages/placas.html"
});


$('.dock-lista ul li a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    if (id == '#plotagem') {
        window.location.href = "/pages/plotagem.html"
    } else if (id == '#escaneamento') {
        window.location.href = "/pages/escaneamento.html"
    }else if (id == '#imagem') {
        window.location.href = "/pages/imagem.html"
    }else if (id == '#impressao') {
        window.location.href = "/pages/impressao.html"
    }else if (id == '#plastificacao') {
        window.location.href = "/pages/plastificacao.html"
    }else if (id == '#placas') {
        window.location.href = "/pages/placas.html"
    }
});
