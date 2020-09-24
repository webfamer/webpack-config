import $ from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;
$(function(){
    $(".pageHead").html(`
    <div style="background: #f0f2f5;">
    <div class="header">
      <div class="logo">
      <a href="/index.html">
        <img src="../img/logo-30.png" alt="" />
        <span>RP Talks</span>
        </a>
      </div>
      <ul class="guide">
        <li><a href="/index.html">HOME</a></li>
        <li><a href="/product.html">PRODUCT</a></li>
        <li><a href="/aboutUs.html">ABOUT US</a></li>
        <li><a href="/provacy.html">PROVINCE POLICY</a></li>
      </ul>
    </div>
  </div>
    `)
  $('.guide').children().children().each(function(){
    if(this.href == this.baseURI){
      console.log(this)
      $(this).parent().addClass('active');
    }
  })
})

$('.guide').children().click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})
