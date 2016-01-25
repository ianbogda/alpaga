$(document).ready(function() {
  $.simpleWeather({
    woeid: '622534', //2357536
    location: '',
    unit: 'c',
    success: function(weather) {
      html = '&nbsp;&nbsp;<i class="wi wi-yahoo-'+weather.code+'"></i>&nbsp;'+weather.temp+'&deg;'+weather.units.temp;
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+erreur+'</p>');
    }
  });
  
  
/*----------------------------/
  /* CAROUSEL
  /*---------------------------*/
    //PORTFOLIO ITEMS SLIDER //
  $(".owl-carousel").each(function() {
    $(this).owlCarousel ({
      autoPlay: 3000,
      navigationText: ["", ""],
      navigation: true,
      pagination: false,
      itemsCustom: [
        [0, 1],
        [768, 4]
      ]
    });
  });
  
  /*--- AGENDA --*/
    if($('div').hasClass('pagelevel-0')){
        $('.agenda').addClass('homeAgendaAbsolute');
        $('.news').addClass('homeNewsAbsolute');
        var bullet = $('<div/>').addClass('bullet');
        $('.homeNewsList').each(function(){
            //console.log('a');
            var container = $(this);
            bullets = container.children('.bullets');
            var maxWidth = (parseInt($(this).children('.item').length))*235;
            var nbPerPage =  Math.ceil(maxWidth / (container.parent().width()+20))
            //console.log(maxWidth)
            container.css('width', maxWidth+235+'px');

            for(var i=0; i<nbPerPage; i++) {
                bullet.clone()
                    .click(homeNewsTime)
                    .prependTo(bullets);
            }

            bullets.children('.bullet:first').trigger('click');
        });
    }
});
