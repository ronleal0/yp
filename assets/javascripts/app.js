$(document).ready(function() {
  // replace placeholder with When and What on size 481px width;
  var pholders = [];
  var labels = [];
  $('.yp-what-where > li').each(function() {
    pholders.push($(this).find('.input-text').attr('placeholder'));
    labels.push($(this).children('span.input-label').text());
  });
  function changePholders() {
    var ctr = 0;
    $('.yp-what-where > li').each(function() {
      if ($(this).children('span.input-label').css('position') == 'absolute') {
        $(this).find('.input-text').attr('placeholder', labels[ctr]);
      } else {
        if ($(this).find('.input-text').attr('placeholder') != pholders[ctr]) {
          $(this).find('.input-text').attr('placeholder', pholders[ctr]);
        }
      }
    ctr++;
    });
  }
  changePholders();
  $(window).resize(function() {
    changePholders();
  });
});



$(window).load(function() {
	$('.flexslider').flexslider({
		//animation: "slide",
		controlsContainer: ".flex-container"
	});

	/* Replaced flexslider with rslides for a better reponsive slideshow */
	  if($('.rslides')[0]) {
	    $('.rslides').responsiveSlides({
	      auto: true,             // Boolean: Animate automatically, true or false
	      speed: 500,            // Integer: Speed of the transition, in milliseconds
	      timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	      pager: true,           // Boolean: Show pager, true or false
	      nav: true,             // Boolean: Show navigation, true or false
	      random: false,          // Boolean: Randomize the order of the slides, true or false
	      pause: false,           // Boolean: Pause on hover, true or false
	      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	      prevText: "Previous",   // String: Text for the "previous" button
	      nextText: "Next",       // String: Text for the "next" button
	      maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	      manualControls: "",     // Selector: Declare custom pager navigation
	      namespace: "rslides",   // String: Change the default namespace used
	      before: function(){},   // Function: Before callback
	      after: function(){}     // Function: After callback
	    });
	  }

	  /* Keep the slideshow content/copy vertically centered. */
	  function centerSlideText(){
	    $('.home-slider .slide-text').css('margin-top', function() {
	      var stp_height = $(this).parent('li.slide').height();
	      var this_height = $(this).height();
	      return (this_height/2) * -1;
	    });
	  }
	  centerSlideText();
	  $(window).resize(function() {
	    centerSlideText();
	  });

	  /* Swipe Functions for sliders */
	  if($('.rslides')[0]) {
	    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
	    if($.browser.device == true) {
	      $('.rslides .slide-img a').click(function() {
	        return false;
	      });
	    }
	    $('.rslides').swipe({
	      swipeLeft:function(event, direction, distance, duration, fingerCount) {
	      //This only fires when the user swipes left
	        $('.rslides_nav.next').trigger( "click" );
	        return false;
	      },
	      swipeRight:function(event, direction, distance, duration, fingerCount) {
	      //This only fires when the user swipes right
	        $('.rslides_nav.prev').trigger( "click" );
	        return false;
	      },
	      excludedElements:"button, input, select, textarea, .noSwipe"
	    });
	  }

	  /* Click function to show and hide top menu */
	  $('a.top-burger-menu').click(function() {
	    topnav = $(this).parents('.top-burger-menu-cont').next('.top-left.nav-top');
	    if(topnav.css('display') == 'none') {
	      topnav.stop(true, true).show();
	      $(this).parents('.top-burger-menu-cont').addClass('active');
	    } else {
	      topnav.stop(true, true).hide();
	      $(this).parents('.top-burger-menu-cont').removeClass('active');
	    }

	    // Close the Business Profile dropdown
	    $('#user-switch-tri, #user-switch').css({ display: 'none', opacity: '0' }, 400);

	    return false;
	  });
	  function closeDropdown() {
	    topnav = $('a.top-burger-menu').parents('.top-burger-menu-cont').next('.top-left.nav-top');
	    if(topnav.css('display') != 'none') {
	      topnav.stop(true, true).hide();
	      $('a.top-burger-menu').parents('.top-burger-menu-cont').removeClass('active');
	    }
	  }
	  $('html').click(function() {
	    closeDropdown();
	  });
	  $('#bt-panel-trigger').click(function() {
	    closeDropdown();
	  });


	  mb = $('#mapButton');
	  mbh = $('#mapButtonHover');
	  $(window).scroll(function() {
	    var sd = $(window).scrollTop();
	    if ( sd > 200 )
	      mb.fadeIn(600);
	    else
	      mb.fadeOut(400);
	  });
	  mb.hover(function() {
	    $(mbh, this).stop().animate({
	      'opacity': 1
	    }, 600, 'linear');
	  }, function() {
	    $(mbh, this).stop().animate({
	      'opacity': 0
	    }, 700, 'linear');
	  });

	$('[data-twist]').each(function(k,v) {
		$(v).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			var $e = $(e.currentTarget);
			$e.toggleClass('twist-open');
			var $tgt = $($e.data('twist'));
			if ($e.hasClass('twist-open')) {
				$tgt.slideDown(100);
			} else {
				$tgt.slideUp(100);
			}
		});
	});

	$('[data-fadein]').each(function(k,v) {
		$(v).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			var $e = $(e.currentTarget);
			$($e.data('fadein')).fadeIn(100);
		});
	});
	$('[data-fadeout]').each(function(k,v) {
		$(v).click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			var $e = $(e.currentTarget);
			$($e.data('fadeout')).fadeOut(100);
		});
	});
	$('#where_ip_location').val(sGeobytesCity);
	if ($('#search-where-home-top').val == ""){
		$('#search-where-home-top').val(sGeobytesCity);
	}

	//qtip
   $('a[tooltip],div[tooltip],input[tooltip],li[tooltip]').each(function()
   {
      $(this).qtip({
         content: $(this).attr('tooltip'), // Use the tooltip attribute of the element for the content
         position: {
            corner: {
               tooltip: 'topMiddle',
               target: 'bottomMiddle'
            },
            adjust: {
               resize: false,
               scroll: false
            }
         },
         show: { effect: { type: 'slide', length: 0 } },
         hide: { delay: 200 },
         style: {
         	textAlign: 'center',
         	/*padding: 5,
	      	background: '#FAF7AA',
	      	color: 'black',
	      	textAlign: 'center',
	      	border: {
	        	width: 7,
	         	radius: 5,
	         	color: '#F8C52E'
	      	},*/
	      	border: {
	      		width:4,
	      		radius:4
	      	},
            name: 'cream',
            tip: true // Give them tips with auto corner detection
         }
      });
   });

   function applyMouseover(){
    $('#homepage-yellow-bar,span.viewall a,#categories-location-links').mouseover(function() {
      if ($(window).width() > 1280) {
        $('#categories-location-links').show().css('height',105).slideDown(1000);
      }
    });
     $('#homepage-yellow-bar,#categories-location-links').mouseout(function() {
      $('#categories-location-links').hide().css('height',0).slideUp(1000);
    });
  }
  $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
  if ($.browser.device == false) {
    applyMouseover();
    $(window).resize(function() {
      applyMouseover();
    });
  } else {
    $('body').addClass('not-desktop');
  }

  // UI To Top Button

  $().UItoTop({
      text: 'To Top',
      min: 200,
      inDelay:600,
      outDelay:400,
      containerID: 'toTop',
      containerHoverID: 'toTopHover',
      scrollSpeed: 300,
      easingType: 'linear'
  });

  //association
  $('.adv-tabs-close').click(function () {
    $(this).closest('.adv-tab').hide();
    $(".nav_adv").find(".active").removeClass("active");
  });

  //see more/less business location
  $( "#see-more-location" ).click(function() {
    if($(".see-more-location").is(":visible"))
    {
      $('div.see-more-location').show().slideUp();
      $('#see-more-location').html('<img src="http://static3.yellow-pages.ph/assets/arrow_down-21b36eb9cd8b5dab0609e371395a22c3.png" class="see-more-arrow"/> VIEW MORE');
      $('html,body').animate({
        scrollTop: $("#infoA").offset().top},
        'slow');
    }     
    else
    {
      $('div.see-more-location').hide().slideDown();
      $('#see-more-location').html('<img src="http://static0.yellow-pages.ph/assets/arrow_up-f8a3bfee80b49d15ef700850f600fa44.png" class="see-more-arrow"/> VIEW LESS');
    }
});


});
function showPosition(position) {
	if (position.coords.latitude != ""){
  	$.ajax({ url:'http://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true',
      success: function(data){
        var arrAddress = data.results[0].address_components;
  			// iterate through address_component array
  			$.each(arrAddress, function (i, address_component) {
  		    if (address_component.types[0] == "locality") // locality type
  		    	$('#search-where-home-top').val(address_component.long_name);
  		  });
  		  $('#search-where-home-top').val($('#search-where-home-top').val().replace('Lungsod ng','').replace('Maynila','Manila'));
     	  //if ($('#search-where-home-top').val() == ""){
     	 	  //$('#search-where-home-top').val(sGeobytesCity);
     	  //}

        /**
         * Hide Where textbox on size 481px width.
         * Show Where textbox when What textbox is filled
         */
        function showHideWhere() {
          if($('.header_forms .yp-what-where > li.where-wrap .input-label').css('display') == 'none') {
            if ($('#search-where-home-top').val() == '' && ('#search-what-home-top').val() != '') {
              $('#search-where-home-top').parents('li.where-wrap').hide();
            }
          }
        };
        showHideWhere();
        $(window).resize(function() {
          showHideWhere();
        });
        $('#search-what-home-top').keyup(function() {
          if ($(this).val() != '') {
            if ($('#search-where-home-top').parents('li.where-wrap').css('display') == 'none') {
              $('#search-where-home-top').parents('li.where-wrap').show();
            }
          } else {
            if ($('#search-where-home-top').val() == '') {
              $('#search-where-home-top').parents('li.where-wrap').hide();
            }
          }
        });
        $('#search-where-home-top').blur(function() {
          var whatVal = $('#search-what-home-top').val();
          var whereVal = $('#search-where-home-top').val();
          if (whatVal == '' && whereVal == '') {
            $('#search-where-home-top').parents('li.where-wrap').hide();
          }
        });
        /**** end show hide where textbox ****/

      }
	  });
	} else{
		$('#search-where-home-top').val(sGeobytesCity);
	}

  //alert($('.yp-what-where > li.where-wrap').find('.input-text').val());
}
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : ''
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}
  
