// import '../lib/header'
// import '../lib/footer'
import '../sass/index.scss'
import '../sass/header.scss'
import '../css/reset.css'
import 'animate.css'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css/swiper.min.css';
// import {WOW} from 'wowjs';
// new WOW({live: false}).init();

//页面轮播图
var swiper = new Swiper(".swiper-container", {
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el:'.swiper-pagination',
  },
});


//WOW动画初始化
// $(function(){
//     new WOW().init();
// })
$(function(){
  $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if(scrollTop==0){
        $(".header").attr("class","header")
      }else if(scrollTop>0&&scrollTop<1180){
        $(".header").attr("class","header scroll_banner")
      }else if(scrollTop>1180){
        $(".header").attr("class","header scroll_main")
      }
  });
  $(".more").click(function(){
    $(".header").attr("class","header scroll_main")
  })
})