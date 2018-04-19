function ativaScroll(seletor){
    
    $(seletor).click(function(e){
        event.preventDefault();
        let target = $(this).attr("href");
        
        target = $(target).offset().top;
    
        $('html').animate({
            scrollTop: target+"px"
        }, 1000);
    });
}

ativaScroll('a[href*=secao-sobre]');
ativaScroll('a[href*=secao-palestrantes]');
ativaScroll('a[href*=secao-formulario]');

