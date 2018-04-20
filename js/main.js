$(function() {
  
  var link = $('#navbar a.dot');

  // Move to specific section when click on menu link
  link.on('click', function(e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });

  // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();//頁面在滾動距離
    $('section').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-1,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
          //滾動距離要大於上一個頁面距離
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
});


// 商品一覽外掛程式
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
});



// scrolltop
// $(document).ready(function () {

//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//           $('.scroll-top').fadeIn();
//       } else {
//           $('.scroll-top').fadeOut();
//       }
//   });

//   $('.scroll-top').click(function () {
//       $("html, body").animate({
//           scrollTop: 0
//       }, 100);
//       return false;
//   });

// });





// scroll to Top
if ($('#back-to-top').length) {
  var scrollTrigger = 50, // px
      backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop >= scrollTrigger) {
            // console.log('A');
              $('#back-to-top').addClass('show');
              // $('#back-to-top').css('opacity','1');
          } else {
            // console.log('B');
              $('#back-to-top').removeClass('show');
              // $('#back-to-top').css('opacity','0');
          }
      };
  backToTop();
  $(window).on('scroll', function () {
      backToTop();
  });
  $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 2000);
  });
}
  



/*
  form （Registration Form）
*/

$(document).ready(function(){
  $('div.wrapper').addClass('js');
  //先消失
  $('.personalSame').slideUp();

  var $tab = $('li.js-navbars-title'),
      $tabPanel = $('.tabpanel'),
      activeClass = "on";

  $tab.eq(0).addClass(activeClass);

  $tab.each(function(index,element){
      var $tabTrigger = $(this),
          tabPosition = index;

      $tabTrigger.click(function(e){
          e.preventDefault();
          // $tab.removeClass(activeClass);
          $(this).addClass(activeClass);
          $tabPanel.hide();
          $tabPanel.each(function(index,element){
              var tabPanelPosition = index;
              if(tabPosition === tabPanelPosition){
                  $(this).show();
              }
          });
      });
  });
}); // ready


  