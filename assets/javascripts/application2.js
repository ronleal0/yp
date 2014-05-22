// This is a manifest file that'll be compiled into application2.js, which will include all the files
// listed below.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// require jquery_1_6_2.min
//= require jquery_1_8_3.min
//= require jquery.eypRailsAds.js
//



$(document).ready(function() {

//filter search option load
$('#search-filter').load('/business-search-filter', function() {
});
// end
//category search option load
$('#category-filter').load('/business-category', function() {
});
//end

//start claim your business interim
$('.claim-user').live("click", function() {
    var permalink = $('#claim_permalink').val();
      $.fancybox(
          {
              
              'type': 'ajax',
              'href': '/claim-business/claim-user?permalink='+permalink,
              helpers : {
                          overlay : {closeClick: false}
                        }
          });
  });


$('.claim-form').live("click", function() {
      var business_id = $('#claim_business_id').val();
      var permalink = $('#claim_permalink').val();
      if (business_id > 0){
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/claim-form?business_id=' + business_id + '&permalink='+ permalink,
              helpers : {
                overlay : {closeClick: false}
              },
              'afterClose':function () {        
                $.ajax({  
                  type: "GET",  
                  url: "/claim-business/claim-checker?business_id="+business_id,
                  success: function(data) {  
                    if (data == "with_claim_link"){
                      $('#claim-business-link').hide();
                      $('#claim_business_id').val('');
                      $('#claim_permalink').val('');
                    }
                  }  
                }); 
              }
          });
      }else{
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/claim-form',
              helpers : {
                overlay : {closeClick: false}
              }
          });
      }
  });



$('.claim-signup').live("click", function() {
      var business_id = $('#claim_business_id').val();
      var permalink = $('#claim_permalink').val();
      if (business_id > 0){
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/claim-signup?business_id=' + business_id + '&permalink='+ permalink,
              helpers : {
                overlay : {closeClick: false}
              }
              // ,
              // 'afterClose':function () {        
              //   $.ajax({  
              //     type: "GET",  
              //     url: "/claim-business/claim-checker?business_id="+business_id,
              //     success: function(data) {  
              //       if (data == "with_claim_link"){
              //         $('#claim-business-link').hide();
              //         $('#claim_business_id').val('');
              //         $('#claim_permalink').val('');
              //       }
              //     }  
              //   }); 
              // }
          });
      }else{
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/claim-signup',
              helpers : {
                overlay : {closeClick: false}
              }
          });
      }
  });


$('#post_create_claim').live("click", function() {
      $(".img_loader").show();
      $("#post_create_claim").hide();
      setTimeout(function () {
          $("#frm_claim_business").submit();
      }, 2000);
});

//end
//correct this
$('#post_correct_this').live("click", function() {
    $(".img_loader").show();
    $("#post_correct_this").hide();
    setTimeout(function () {
        $("#frm_create_correct_this").submit();
    }, 2000);
});

//Add more business
$('#post_create_new_business').live("click", function() {
      $(".img_loader").show();
      $("#post_create_new_business").hide();
      setTimeout(function () {
          $("#frm_create_new_business").submit();
      }, 2000);
});

$('.new-business').live("click", function() {
      $.fancybox(
          {
              'type': 'ajax',
              'href': '/business/new_business'
          });
  });

$('.closed_business_badge').live("mouseover", function() {
    var closed_biz_href = $('.closed_business_badge').attr('href');

    $.fancybox(
    {
        'type': 'ajax',
        'href': closed_biz_href
    });
});

$('#post_create_claim_business').live("click", function() {
      $(".img_loader").show();
      $("#post_create_claim_business").hide();
      setTimeout(function () {
          $("#frm_claim_business").submit();
      }, 2000);
});

$('.claim-business').live("click", function() {
    $.fancybox(
      {
          'type': 'ajax',
          'href': '/claim-business/index',
          helpers : {
            overlay : {closeClick: false}
          }
      });
  });

$('.claim-business2').live("click", function() {
      var business_id = $('#business_id').val();
      var permalink = $('#permalink').val();
      if (business_id > 0){
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/index?business_id=' + business_id + '&permalink='+ permalink,
              helpers : {
                overlay : {closeClick: false}
              },
              'afterClose':function () {        
                $.ajax({  
                  type: "GET",  
                  url: "/claim-business/claim-checker?business_id="+business_id,
                  success: function(data) {  
                    if (data == "with_claim_link"){
                      $('#claim-business-link').hide();
                      $('#business_id').val('');
                      $('#permalink').val('');
                    }
                  }  
                }); 
              }
          });
      }else{
        $.fancybox(
          {
              'type': 'ajax',
              'href': '/claim-business/index',
              helpers : {
                overlay : {closeClick: false}
              }
          });
      }
  });

$('.add-business-login').live("click", function() {
    location = '/user/login';
});


 $('#biz-province').live("change", function() {
        var province_id = $(this).val();
        if (province_id == 0) {
          var htmlStr = '\
          <select id="biz-city" class="biz-select" name="business[location_id]">\
          <option value="">- Choose a City -</option>\
          </select>\
          ';
          $("#biz-city").each(function(){
            $(this).html(htmlStr);
          });
          return false;
        }

        $.ajax({
            type: "GET",
            url: "/business/dynamic_city/" + province_id,
            success: function(item_results) {
                $('#biz-city').html('');
                $('#biz-city').html(item_results);
            },
                    error: function () {
                        alert("error");
                    }

        });

  });

//end

    $('#feedback_feedback_type_id').live("change", function() {
        var type = $("#feedback_feedback_type_id").val();

        if (type == 3) {
        $.fancybox(
            {
                'type': 'ajax',
                'href': '/business/add_business'
            });
        }
    });

  $('#sorting_option').change(function() {
        this.form.submit();
    });

  //button banners
  $('#button-banners').load('/ads', function() {
    $('.tower-banner').show().delay(4000);
  });

  //Post feedback
  $('#post_feedback').live("click", function() {
      var feedback = $("#feedback_feedback").val();
         //if($.trim(feedback) != ""){
            $(".img_loader").show();
            $("#post_feedback").hide();
            setTimeout(function () {
                $("#frm_feedback").submit();
            }, 2000);
        /*}else{
            $("#feedback_feedback").val("");
            alert("Your feedback is empty.");
        }*/
  });

  //Post add a business
  $('#post_create_business').live("click", function() {
      $(".img_loader").show();
      $("#post_create_business").hide();
      setTimeout(function () {
          $("#frm_create_business").submit();
      }, 2000);
  });

  $('.add-business').live("click", function() {
      $.fancybox(
          {
              'type': 'ajax',
              'href': '/business/choose_owner'
          });
  });

  $('.radio-owner').live("click", function() {
      var owner = $(this).val();

      if(owner == 'yes'){
          $.fancybox(
              {
                  'type': 'ajax',
                  'href': '/business/new_business'
              });
      }else if(owner == 'no'){
          $.fancybox(
              {
                  'type': 'ajax',
                  'href': '/business/add_business'
              });
      }
  });

  $('#business_province_id').live("change", function() {
        var province_id = $(this).val();
        $.ajax({
            type: "GET",
            url: "/business/dynamic_city/" + province_id,
            success: function(item_results) {
                $('#business_location_id').html('');
                $('#business_location_id').html(item_results);
            }
        });
  });

  //button banners
  $('#load-related-business').load('/related-business');

  //location filter
  $('#location-filter').load('/business-location', function() {
  });

  //dup location filter
  $('#moreLocations').load('/business-location-dup', function() {
  });

  //autocomplete
  $('#search-what-search-top').autocomplete('/autocomplete_keyword', {
      cacheLength:0, 
      matchContains:0, 
      matchSubset:0, 
      minChars:1, 
      loadingClass: "autocomplete_indicator",
      selectOnly:false,
      selectFirst:false,
      onItemSelect: function(item) {
        $('#search-what-search-top').focus();
        $('#search-what-search-bottom').val($('#search-what-search-top').val());
      }
  });
  $('#search-what-search-bottom').autocomplete('/autocomplete_keyword', {
      cacheLength:0, 
      matchContains:0, 
      matchSubset:0, 
      minChars:1, 
      loadingClass: "autocomplete_indicator",
      selectOnly:false,
      selectFirst:false,
      onItemSelect: function(item) {
        $('#search-what-search-bottom').focus();
        $('#search-what-search-top').val($('#search-what-search-bottom').val());
      }
  })

  $('#search-where-search-top').autocomplete('/location', {
      cacheLength:0, 
      matchContains:0, 
      matchSubset:0, 
      minChars:1, 
      loadingClass: "autocomplete_indicator",
      selectOnly:false,
      selectFirst:false,
      onItemSelect: function(item) {
        $('#search-where-search-top').focus();
        $('#search-where-search-bottom').val($('#search-where-search-top').val());
      }
  });
  $('#search-where-search-bottom').autocomplete('/location', {
      cacheLength:0, 
      matchContains:0, 
      matchSubset:0, 
      minChars:1, 
      loadingClass: "autocomplete_indicator",
      selectOnly:false,
      selectFirst:false,
      onItemSelect: function(item) {
        $('#search-where-search-bottom').focus();
        $('#search-where-search-top').val($('#search-where-search-bottom').val());
      }
  })

  //sticky navigation
  // grab the initial top offset of the navigation 
  var stickyNavTop = $('#leftrailsbox,#rightrailsbox').offset().top;
  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop(); // our current vertical position from the top    
      // if we've scrolled more than the banners, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) { 
          $('#leftrailsbox,#rightrailsbox').addClass('sticky');
      } else {
          $('#leftrailsbox,#rightrailsbox').removeClass('sticky'); 
      }
  };
  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });

  //Sticky Form
  var stickFormToTop = function() {
    // Get the Height from the top most up to the bottom of 'Find It' button.
    var contentHeader = $('body.results .content.header');
    var stickyFormTop = contentHeader.offset().top;
    var stickyFormHeight = contentHeader.height();
    var stickyFormTotal = stickyFormTop + stickyFormHeight - 30;

    // Get Scroll distance from top to the current scroll position
    var scrollTop2 = $(window).scrollTop();

    function resetForm() {
      // Reset Content Header Position
      contentHeader.height('auto');
      contentHeader.removeClass('stickyForm');
      contentHeader.css('padding-bottom', 0);
      $('.rails-box').css('top', '');

      // Reset Rails Position
      $('.rails-box.sticky').css('top', '');
    }

    if($(window).width() < 1281) {

      // Add class if Scrolling distance is greater than
      // the distance of Find It button.
      if (scrollTop2 > stickyFormTotal) {
        contentHeader.height(stickyFormHeight);
        if (!contentHeader.hasClass('stickyForm')) {
          contentHeader.addClass('stickyForm');
        }
        var fixedHeight = $('.content.header.stickyForm > .container.row').height();
        contentHeader.css('padding-bottom', fixedHeight);

        // Adjust Rails position
        $('.rails-box.sticky').css('top', fixedHeight);
      } else {
        resetForm();
      }
    } else {
      resetForm();
    }
  };

  stickFormToTop();
  $(window).scroll(function() {
    stickFormToTop();
  });
  $(window).resize(function() {
    stickFormToTop();
  });

  //pop-up
  $("a.fancybox").fancybox({
    closeClick: false,
    fitToView : true,
    padding: 8,
    openEffect : 'elastic',
    closeEffect : 'elastic',
    nextSpeed: 0, //important
    prevSpeed: 0, //important
    helpers : {
      overlay : {closeClick: false}
    }
  });

  //   $(".fancypdf").fancybox({
  //     'frameWidth': 950,
  //     'frameHeight':495,
  //     'overlayShow':true,
  //     'hideOnContentClick':false,
  //     'type':'iframe'
  // });

$(".fancypdf").click(function(){
 $.fancybox({
   type: 'html',
   autoSize: false,
   content: '<embed src="'+this.href+'#nameddest=self&page=1&view=FitH,0&zoom=90,0,0" type="application/pdf" height="99%" width="100%" />',
   beforeClose: function() {
     $(".fancybox-inner").unwrap();
   }
 }); //fancybox
 return false;
}); //click

  //infinite scroll
  /*var $container = $('#image_container');
  $container.infinitescroll({
    navSelector  : '#page-nav',    // selector for the paged navigation
    nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
    itemSelector : '.photo-list',     // selector for all items you'll retrieve
    loading: {
      finishedMsg: 'No more images to load.',
      img: '/assets/ajax-loader.gif'
    }
  },
  // trigger Masonry as a callback
  function( newElements ) {
    // hide new items while they are loading
    var $newElems = $( newElements ).css({ opacity: 0 });
    // ensure that images load before adding to masonry layout
    $newElems.imagesLoaded(function(){
      // show elems now they're ready
      $newElems.animate({ opacity: 1 });
      $container.masonry( 'appended', $newElems, true );
    });
  });*/

  //geobytes ip locator
  $('#where_ip_location').val(sGeobytesCity);
})

//Google Banner
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function() {
  //banner ads
  googletag.defineSlot('/9180372/EYP_Search_Top_728x90', [728, 90], 'div-gpt-ad-1333355885097-3').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Test_Tower-160x600', [160, 600], 'div-gpt-ad-1368700377153-0').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Home_Bottom_728x90', [728, 90], 'div-gpt-ad-1368781081400-0').addService(googletag.pubads());
  //rails ads
  googletag.defineSlot('/9180372/EYP_Search_Rails_Left-1_127x650', [127, 650], 'div-gpt-ad-1372736803593-0').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Search_Rails_Left-2_127x650', [127, 650], 'div-gpt-ad-1372736803593-1').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Search_Rails_Left-3_127x650', [127, 650], 'div-gpt-ad-1372736803593-2').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Search_Rails_Right-1_127x650', [127, 650], 'div-gpt-ad-1372736803593-3').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Search_Rails_Right-2_127x650', [127, 650], 'div-gpt-ad-1372736803593-4').addService(googletag.pubads());
  googletag.defineSlot('/9180372/EYP_Search_Rails_Right-3_127x650', [127, 650], 'div-gpt-ad-1372736803593-5').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

//fb variables
if (document.domain == "localhost"){
  var fbappID = "433387216759793";
  var domainURL = document.domain + ":8888";
}else if (document.domain == "ken-beta.yellow-pages.ph"){
  var fbappID = "433387216759793";
  var domainURL = document.domain;
}else{
  var fbappID = "148166465371080";
  var domainURL = document.domain;
}

//FB snippet
window.fbAsyncInit = function() {
  FB.init({
    appId      : fbappID, // App ID
    channelUrl : '//'+domainURL+'/', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });
  FB.Event.subscribe('auth.logout', function (response) {
      $('.login-link,.auth-user').html('<div style="margin-right:10px;"><img src="/assets/ac_indicator.gif" /> Logging out to Facebook...</div>');
      $.ajax({
          url: '/fb/logout',
          cache: false,
          success: function(data){
            //alert(data);
          }
        })
      window.location.href="http://" + domainURL + "/user/logout"
  });
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    if (response.status === 'connected') {
      fbAPI();
    } else if (response.status === 'not_authorized') {
      $.ajax({
          url: '/fb/logout',
          cache: false,
          success: function(data){
            //alert(data);
          }
        })
      FB.login();
    } else {
      $.ajax({
          url: '/fb/logout',
          cache: false,
          success: function(data){
            //alert(data);
          }
        })
      FB.login();
    }
  });
  };
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

  function doLogin(){
    FB.login();
  }

  function fbAPI() {
    FB.api('/me', function(response) {
        //if( !isValidEmailAddress(response.email) ) {
      $('div#rr_result').html('<div id="overlay" style=" width: 100%;position: relative;"><img src="/assets/ac_indicator.gif" class="loading_circle" alt="loading" /></div>');
      $('.login-link,.signup-link').html('');
      $('.login-link').html('<div style="margin-right:10px;"><img src="/assets/ac_indicator.gif" style="margin-right:3px;" /> Validating in Facebook...</div>');
      if (response || !response.error){
        if (response.email != "undefined") {
          $.ajax({
            url: '/fb/create?email='+response.email+'&first_name='+response.first_name+'&last_name='+response.last_name+'&fb_id='+response.id,
            cache: false,
            success: function(data){
              if (data != "undefined"){
                $('.login-link').html('<span class="auth-user"><strong><a id="bt-panel-trigger" class="biz-tools-link" href="">'+data+'</a></strong></span>');
                if ($('#fb_status').val() == 1){
                  location.reload(true);
                }
              }else{
                $('.login-link').html('<a href="http://localhost:3200/user/login">Login</a> <span class="divider">&#092;</span>');
                $('.signup-link').html('<a href="http://localhost:3200/user/login">Sign Up</a> <span class="divider"></span>');
                
              }
            }
          })
        }
      }else{
        $('.login-link').html('<a href="http://localhost:3200/user/login">Login</a> <span class="divider">&#092;</span>');
        $('.signup-link').html('<a href="http://localhost:3200/user/login">Sign Up</a> <span class="divider"></span>');
      }
        $('.login-link,.signup-link').html('');
        $('.login-link').html('<div style="margin-right:10px;"><img src="/assets/ac_indicator.gif" style="margin-right:3px;" /> Connecting to Facebook...</div>');
        $.ajax({
          url: '/fb/create?email='+response.email+'&first_name='+response.first_name+'&last_name='+response.last_name+'&fb_id='+response.id,
          cache: false,
          success: function(data){
            if (data){
                $('.login-link').html('<span class="auth-user"><strong><a id="bt-panel-trigger" class="biz-tools-link" href="">'+data+'</a></strong></span>');
                if ($('#fb_status').val() == 1){
                  location.reload(true);
                }
            }else{

                $('.login-link').html('<span class="auth-user"><strong><a id="bt-panel-trigger" class="biz-tools-link" href="">'+data+'</a></strong></span>');
                if ($('#fb_status').val() == 1){
                  location.reload(true);
                }
            }

          }
        })
       

        

    });
  }

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : ''
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

//TechOps Banners & Rails
$(window).load(function() {
    var railsAdParams = {
      'interval'     : 5000,
      'fadeDuration' : 500,
      'railsWidth'   : 127
    }
    $('#leftrailsbox,#rightrailsbox').eypRailsAds(railsAdParams);
});

// RESPONSIVE SCRIPTS 2014-01-XX
  // Click function for responsive dropdown menu
  $('a.top-burger-menu').click(function() {
    var topnav = $(this).parents('.top-burger-menu-cont').next('nav.top-left.nav-top');
    if(topnav.css('display') == 'none') {
      topnav.stop(true, true).show();
      $(this).parents('.top-burger-menu-cont').addClass('active');
    } else {
      // Hide dropdown and remove active class
      topnav.stop(true, true).hide();
      $(this).parents('.top-burger-menu-cont').removeClass('active');
    }
    return false;
  });

  $(window).load(function() {
    // Where and What as placeholders
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

    $('#sorting_option').change(function() {
      this.form.submit();
    });

    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
    if ($.browser.device == true) {
      $('body').addClass('not-desktop');

      // Change the 'Results By' select option to Nearby on mobile
      $('[name=i_sort_order]').val(1);
    }


    /**
     * Hide Where textbox on size 481px width.
     * Show Where textbox when What textbox is filled
     */
    function showHideWhere() {
      if (!$('body.results .content.header').hasClass('stickyForm')) {
        if($('.header_forms .yp-what-where > li.where-wrap .input-label').css('display') == 'none') {
          if ($('#search-where-search-top').val() == '' && $('#search-what-search-top').val() != '') {
            $('#search-where-search-top').parents('li.where-wrap').hide();
          }
        }
      }
    };
    showHideWhere();
    $(window).resize(function() {
      showHideWhere();
    });
    $('#search-what-search-top').keyup(function() {
      if (!$('body.results .content.header').hasClass('stickyForm')) {
        if ($(this).val() != '') {
          if ($('#search-where-search-top').parents('li.where-wrap').css('display') == 'none') {
            $('#search-where-search-top').parents('li.where-wrap').show();
          }
        } else {
          if ($('#search-where-search-top').val() == '') {
            $('#search-where-search-top').parents('li.where-wrap').hide();
          }
        }
      }
    });
    $('#search-where-search-top').blur(function() {
      if (!$('body.results .content.header').hasClass('stickyForm')) {
        var whatVal = $('#search-what-search-top').val();
        var whereVal = $('#search-where-search-top').val();
        if (whatVal == '' && whereVal == '') {
          $('#search-where-search-top').parents('li.where-wrap').hide();
        }
      }
    });
    $(window).scroll(function() {
      var whatVal2 = $('#search-what-search-top').val();
      var whereVal2 = $('#search-where-search-top').val();
      if (whatVal2 == '' && whereVal2 == '') {
        $('#search-where-search-top').parents('li.where-wrap').hide();
      } else {
        $('#search-where-search-top').parents('li.where-wrap').show();
      }
    });
    /**** end show hide where textbox ****/

    /* Refine Results sidebar slide */
    $('.refine-btn').click(function() {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.top_results .threecol-left').stop(true, true).animate({left: "+=240px"}, 200);
        $('.content.main.top_results > .row').stop(true, true).animate({left: "+=240px"}, 200);
      } else {
        $('.top_results .threecol-left').stop(true, true).animate({left: "-=240px"}, 200);
        $('.content.main.top_results > .row').stop(true, true).animate({left: "-=240px"}, 200);
        $(this).removeClass('active');
      }
      return false;
    });
    function closeRefineSidebar() {
      $('.top_results .threecol-left').stop(true, true).animate({left: "-=240px"}, 200);
      $('.content.main.top_results > .row').stop(true, true).animate({left: "-=240px"}, 200);
      $('.refine-btn').removeClass('active');
    }
    $('.close-sidebar').on('click', function() {
      closeRefineSidebar();
      return false;
    });
    $('html').click(function() {
      if ($('#refineSidebar').css('left') == '-240px') {
        closeRefineSidebar();
      }
    });
    $('#refineSidebar').click(function(event){
      event.stopPropagation();
    });

    /* Swipe function to hide refineSidebar on mobile */
    if($('#refineSidebar')[0]) {
      $('#refineSidebar').swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          //This only fires when the user swipes left
          if ($(this).css('left') == '-240px') { closeRefineSidebar(); }
        }
      }, 100);
    }

    $navTitle = $('body.rantsraves .rr_tabs .nav-tabs-custom .nav-title');
    $navTitle.on('click', function() {
      if ($(this).next('ul').css('display') == 'none') {
        $(this).addClass('expand');
        $(this).next('ul').stop('true', 'true').slideDown(200);
      } else {
        $(this).removeClass('expand');
        $(this).next('ul').stop('true', 'true').slideUp(200);
      }
    });

    function getTabTitle() {
      var tabElement = $('body.rantsraves .rr_tabs .nav-tabs-custom a.active span');
      var tabNewTitle = tabElement.text();
      tabElement.parents('ul').prev('.nav-title').children('.nav-title-value').text(tabNewTitle);
    };
    getTabTitle();
    $(window).resize(function() {
      getTabTitle();
    });
    $('body.rantsraves .rr_tabs .nav-tabs-custom a').on('click', function() {
      $(this).parents('ul').prev('.nav-title').removeClass('expand');
      $(this).parents('ul').stop('true', 'true').slideUp(200);
      $('.nav-tabs-custom .nav-title .nav-title-value').text($(this).children('span').text());
    });

  });
// END RESPONSIVE SCRIPTS
