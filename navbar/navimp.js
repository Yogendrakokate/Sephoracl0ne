function navimp(){
    return `
    <div style="color: rgb(207,17,53);" id="top"><a id="topcode" onclick="codefreeship()" >Enjoy free shipping on all with code <b>FRESSSHIP</b>.see terms</a><i class="fa-solid fa-caret-right"></i></div>
    <div id="navbtm">
        <div id="btm1">
            <div id="search">
            
                <div id="logo"><a href="/index.html"><img src="https://www.sephora.com/img/ufe/logo.svg" alt=""></a></div></div>
                <div class="nosubmit">
                    <input class="nosubmit" type="search" placeholder="Search">
                </div>

                <div id="store"><div><img src="https://www.sephora.com/img/ufe/icons/stores-active.svg" alt=""></div>
              <div> <div >STores & Services</div>
                <div >choose Your store</div></div> </div>

                <div id="store"><div><img src="https://www.sephora.com/img/ufe/icons/community.svg" alt=""></div>
                <div id="com"> Community</div> </div>
                <div id="store"><div><img src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt=""></div>
                <div id="sign" onclick="signupfun()" > Sign in</div> </div>
                <div id="icons">
                <div><span class="css-79elbk"><svg width="24" height="24" fill="none" class="css-13o7eu2">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z" fill="currentColor"></path><path d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor"></path><path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path></g></svg></span></div>
                        <div id="like"><a href="shoipnglist.html"><i class="fa-regular fa-heart"></i></a></div>

                        <div id="basket"><a href="/Newfile/basket.html">
                            <i class="fa-solid fa-basket-shopping" ></i>
                        </a></div>
                    </div>
        </div>   
                
                    <div id="btm2">
                    <div id="btm2menu">
                        <div onmouseover="newm(this)" onmouseleave="newmn(this) id="new"><a href="/makeup/new.html">New</a></div>
                        <div onmouseover="newb(this)" onmouseleave="newmn(this) id="brands"><a href="/sephoraproject/brands.html">Brands</a></div>
                        <div id="makeup" onmouseover="newmakeup(this)"><a href="/makeup/makeup.html">Makeup</a></div>
                        <div id="skincare" onmouseover="newskin(this)"><a href="">Skincare</a></div>
                        <div id="hair"><a href="">Hair</a></div>
                        <div id="fragrance"><a href="">Fragrance</a></div>
                        <div id="Tools"><a href="">Tools & Brushes</a></div>
                        <div id="bath" onmouseover="bath(this)"><a href="">Bath & Body</a></div>
                        <div id="mini" onmouseover="mini(this)"><a href="">Mini Size</a></div>
                        <div id="gifts"><a href="">Gifts</a></div>
                        <div id="beauty"onmouseover="under(this)" ><a href="">Beauty Under $20</a></div>
                        <div id="sales" onmouseover="sale(this)"><a href="">Sales & Offers</a></div>
                    </div>
                </div>
                <div id="newm" onmouseleave="newmn(this)"></div>
               
    </div>
    <div id="ubody"></div>
    `;
}
function footimp(){
    return `
    <div style="color: black;" id="top"><a id="bcode" onclick="feedback()" >website feedback? <b>Let us Know</b></a><i class="fa-solid fa-caret-right"></i></div>
<div id="mainbtm">
    <div id="mainbtm1">
       <div><div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA6lJREFUSEu1Vlko7G8YfsaWPUuZYRAXsl2IlAtXliJlKSJKIheUuEWSpWQp4QZlu6EISZYo4cJWtosp3AgRsodsMafn/TfzP8ycc+ao89ZcfL9ved7veZ/3+UYBQIt/GIrvAigUCpibm+P9/R1a7a9z/GsACwsLuLm5ISgoCIGBgdjf38f6+jqur6/x9vZmwIXJAMyWh9fW1iIrKwvW1tbye3l5wd3dHUZHR1FVVYWHh4dPICYBkI6AgAD09/cjNDT0lxXb2tpCUlISjo+P9WtMAlAqlWhra0Nqaqrw/rtYXFxEZmYmTk9PZZnC1tZWm5aWBnd3d6P7uIFZ19XVwcnJSb/m6uoKl5eXsLe3h1qt1n9/enpCTU0NmpqaRAAKpVKpbWhowPz8PG5vbw1Adnd3ZUN6errMfXx8YGZmBmVlZQJgZ2eHxsZGJCcnyzwVNT4+jry8PCm8wsPDQ9vR0YGJiQkp1tdYW1vD2NgYQkJCZOrs7AwxMTHY2dnRyzM8PBxdXV36NVRVbm4uNBoNFGq1WsvD9/b2wOt9jYqKCpGhSqWSqYODA/j6+n5a5uLigt7eXikwg2cVFhZiYWHhzwCkb3h4GMHBwbL58PAQfn5+nzTP+vX09CA+Pl7WbG5uIj8/H1SVnqLJyUmjNdjY2EBzczMSExNl8/39PYqLi9HX1ydjS0tLybyzsxOurq7ybXp6Wig6Pz//7wZDQ0PgQY+PjwYUzc3NISoqCqWlpTAzM5P5i4sLyXh1dVUUVlRUBNKkE0F3dzcKCgpEEHIDNtDS0pJBF3IDm4aaJsdeXl4GCXz9QOWw02dnZ0UECpVKpWV29fX1ohBj4ezsLBmnpKT8EWBlZQXR0dF4fn6WtUYBKDs2io+Pj55TXS0cHR1/CxIZGYnl5WX9GqMAVAO9h/3BTBISEoR/KkPXUF9RyPfg4CCys7Olg3VhEkBOTo5Y9MjICFh03c1+BmHHx8XF4ejo6BO2yQD+/v5i1ZQru9bBwUF/EH2pvLxcpPv6+vo9AFJWXV0tm+lDFIaVlZUc2N7eDlrK1NSUgd2YfAMdAGvCTm5tbRVKWFC6MQ2vsrJSOv3n+BaAp6cnIiIipKCkht5D2viiGQDExsZqaUx0zJubGwEPCwsDD2HL852le3I8MDAgYx5OG6Ate3t7yztRUlKClpYWbG9v4+Tk5H8VaTQaLTuUMtP9O6C/UJZ8bxnkmi+Zzm05JhDdkrrnW21jYyN/ADIyMsSmdfEDFLklIlqF7VUAAAAASUVORK5CYII=" alt=""></div><a href=""><div><div>Find a store</div><div>Choose Your store</div></div>
            </a>  </div>
            <div><div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAz1JREFUSEu1VUsotGEYPZ/LmMXEjNCIbNwylIWFlVDjUjLJGIlcFnaMInc7ymXhUiQzGwsZ5dJEZiM7ESaSpMTYKCSJlFyG7+95NOoz87v8M/+7/b73Oec9z/OcIwAQ8R+P8B2AXC5HYWEhkpOTERsbi7e3NxweHsLhcGB5eRmPj49f0vMIIJPJEB8fj7q6OuTk5OD29hZ2u52L+vn5QaPRICUlBUqlEqurqxgdHcXx8TFeXl7cwNwAgoODUVVVxaw3NzcxPz+Po6MjPD8/Sy4TicTERFRUVPDrbDYbpqencX9/L/lPAkBy9PX1Qa1WY2JiAuvr63A6nV9KEBAQgMzMTNTW1uLi4gKdnZ0S2SQAY2NjSEhIQE1NDf8sij/rP8kWGRmJyclJ7OzsoKOj44MUAwiCgPLycv6g1WpxeXn5T3MVFxcHq9WK3t5ezMzMcA0GiImJwcjICKampvgHb05RURHKysrQ1NSE8/PzdwCdTsdNbW5uxt3dnTf1oVKpeKpmZ2extLQEQS6Xi93d3Tg7O8P4+DheX1+9AvD390d9fT1CQ0NZKkGpVIoDAwNYWFjAysqKV8Vdl/Pz80FStbe3QwgPDxeHhoZAE7S1teUTABrb6upqtLS0QFCr1SI1uL+/H3t7ez4BSEtL4yY3NjZCCAsLEwcHB2EymbCxseETALKXkpIStLW1QQgJCRGJPa06mZcvDk1kXl4eb7Ugk8nE1tZW9prh4WGPhvUb0KCgIC58fX3NU8l7QGiVlZVoaGjAzc3Nb+q5/RsREcFy0+Csra29A9DMms1mtl4yOW9OdHQ016Klpdz4MLvc3FzewNLSUuzv7//Y6D6ToU2mns7NzTFhiZuSRMXFxejq6uKd+M6qPb2UekDTQz0gqSQAgYGBbNUEQl5isVjw9PT0pWJUsKCgAAqFAru7uzg4OGCzy8jIeN/kz5lMAZKVlYWenh62bZqs7e1tt+ylcCKLp6Chl5JJpqam8p3T01NERUXBYDC4A7jokpZGo5F7QoFCsXlycsJMk5KSQBZ/dXXFBBYXF5kAfcvOzuYXkV3o9fq/A7iAKHvT09M5sajow8MDM6TEoynxFPR0l8AoEf8AXfJqSgo4vF4AAAAASUVORK5CYII=" alt=""></div><a href=""><div><div>Live Beauty Help</div><div>Avilable</div></div>
                </a>  </div>
         <div><div>
            <img src="https://www.sephora.com/img/ufe/icons/app.svg" alt=""></div><a href=""><div><div>Get the App</div><div>Text "APP"to 36681</div></div>
                    </a>  </div>
          <div><div>
         <img src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" alt=""></div><a href=""><div><div>Get Sephora Text Alerts</div><div>Sign up Now</div></div>
             </a></div>
 <div><div>
    <img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" alt=""></div><a href=""><div><div>Sephora Credit Card Program</div><div>want 25% off youSephora purchase?<span style="text-decoration: underline;">DETAILS</DETAILS></span></div></div>
        </a></div>
        
    </div>
    
</div>
<hr class="btmhr"/>
<div id="btmm">
    <div><a href="" style="font-weight: 1000;">About Sephora</a><a href="">About Sephora</a>
        <a href="">Newsroom</a><a href="">Carrers</a><a href="">Sephora social impact</a><a href="">supply cahin transparency</a><a href="">Afiiliates</a><a href="">Sephora Events</a><a href="">Gift Cards</a><a href="">Sephora Global Sites</a><a href="">Diversity and Inclussion</a><a href="">Chekout on Instagram</a><a href="">Sephora Accelarate</a><a href="">Report A vulnerability</a></div>
    <div><a href=""style="font-weight: 1000;">My Sephora</a><a href="">Beauty Insider</a><a href="">Sephora Credit Card</a><a href="">Community Profile</a><a href="">Order Status</a><a href="">Purcahse History</a><a href="">Account Settings</a><a href="">Beauty Advisor Recomendations</a><a href="">Beauty Offers</a><a href="">Quizzes & Buying Guides</a><a href="">Rewards Bazzar</a><a href="">Loves</a><a href="">Book a Reservation</a></div>
    <div><a href="" style="font-weight: 1000;">Help</a><a href="">Customer service</a>
        <a href="">Returns & Exchangses</a><a href="">Delivery And Pickup Options</a><a href="">Shipping</a><a href="">Billing</a><a href="">International Shipments</a><a href="">Beauty Services FAQ</a><a href="">Sephora at Kohl's</a><a href="">Sephora Inside JCPenny</a><a href="">Store Locations</a><a href="">Online ordering</a><a href="">Klama</a><a href="">Accessibilty</a></div>
    <div ><h1 style="margin-left:10px;">Region & languages</h1>
        <div class="lang"><img src="https://www.sephora.com/img/ufe/flags/us.svg" alt=""><a href="">United States-English</a></div>
        <div class="lang"><img src="https://www.sephora.com/img/ufe/flags/ca.svg" alt=""><a href="">Canada-English</a></div>
            <div class="lang"><img src="https://www.sephora.com/img/ufe/flags/ca.svg" alt=""><a href="">Canada-français</a></div></div>
    <div >
        <p id="beautiful">We Belong To <br>Something Beautiful</p>
        <div id="sopheremail"><h1 style="font-weight: 900;">Sign up for Sephora emails</h1>
        <input type="text" id="sophere" placeholder="Enter your email address"><input id="submit" type="submit" placeholder="signup"></div>
    </div>
    <hr class="btmhr"/>
</div>
<hr class="btmhr"/>
<div id="footersocial">
    <div><p>© 2022 Sephora USA, Inc. All rights reserved.</p>
  <a href="">Privacy policy</a><a href="">Terms of Use</a><a href=""></a>Accessibilty<a href="">Sitemap</a><a href="">CA-Do Not Sell My Personal Infromation</a>
  <p>1-877-7374672    TTY  1-888-866-9845</p></div>
  <div><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook-square"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-snapchat"></i><i class="fa-brands fa-tiktok"></i></div>
   
</div>
    `
}
export {navimp,footimp}
