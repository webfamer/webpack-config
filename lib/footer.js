import $ from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;
$(function(){
    $(".pageFoot").html(`
    <div style="background: #F8F8F8;">
    <div class="footer">
        <div class="foot-l">
             <h3>Cooperation</h3>
             <ul>
                 <li>Paytm</li>
                 <li>Mpurse</li>
                 <li>UPI</li>
             </ul>
        </div>
        <div class="foot-r">
         <h3>Contact us</h3>
          <ul>
              <li><i></i> <span>8527006114</span></li>
              <li><i class="msg"></i> <span>rptalksservice@gmail.com</span></li>
              <li><i class="serve"></i> <span>Monday to Friday</span><span> ：</span><span>am 8:30~11:30&emsp;&emsp;&emsp;&emsp;pm 13:00~17:30 </span></li>
          </ul>
     </div>
     <p class="copy">Copyright  © 2020</p>
    </div>
    </div>
    `)
})