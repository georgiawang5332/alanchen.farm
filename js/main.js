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

// Magnific Popup jQuery Lightbox Gallery Settings
$('.gallery-link').magnificPopup({
  type: 'image',
  gallery: {
      enabled: true
  },
  image: {
      titleSrc: 'title'
  }
});

