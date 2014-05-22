(function ($) {
    $.fn.eypRailsAds = function (options) {
        //defaults
        var O = $.extend({
            'interval'     : 5000,
            'fadeDuration' : 500,
            'railsWidth:'  : 127
        }, options);
        
        return this.each(function () {
            //declare vars
            var rails_ul      = $(this).find('ul');
            var ad_count      = $(this).find('li').length;
            var current_slide = 0;
            
            //remove margin-left spacer on first child
            $('.init-rails-spacer').css('margin','0px');
            $('.init-rails-spacer').removeClass('init-rails-spacer');

            //fadeTo bugfix for IE
            jQuery.fn.fadeTo = function (speed, to, callback) {
                return this.animate({
                    opacity: to
                }, speed, function () {
                    if (to == 1 && jQuery.browser.msie) this.style.removeAttribute('filter');
                    if (jQuery.isFunction(callback)) callback();
                });
            };

            if($(rails_ul).length && (ad_count > 1)){
                var totalImages = ($(rails_ul).find("li").length) ,
                    imageWidth = Number(O.railsWidth),
                    totalWidth = imageWidth * totalImages,
                    visibleImages = Math.round($(this).width() / imageWidth),
                    visibleWidth = visibleImages * imageWidth,
                    stopPosition = (visibleWidth - totalWidth);

                    $(rails_ul).width(totalWidth);

                    function moveAd(){                            
                            if(current_slide < (ad_count-1)){
                               current_slide++;
                            }else{
                               current_slide = 0;
                            }

                            $(rails_ul).css('left', -(O.railsWidth * current_slide) + "px");
                            $(rails_ul).find('li:nth-child(' + (current_slide + 1) + ')').stop().fadeTo(0, .2).stop().fadeTo(O.fadeDuration, 1);
                    }

                var myVar=setInterval(function(){
                    myTimer();
                    },Number(O.interval));

                function myTimer(){
                    moveAd();
                }
            }
            
        });
    };
})(jQuery);