// Global Page elements
var mainNavigation = '<nav class="navbar navbar-expand-lg navbar-top"><div class=navbar-brand id=userInfo><div class="fas fa-user-circle"></div>Hi Demo, you currently have <span class=headerPoints>64,500</span> points!</div><button aria-controls=navbarNav aria-expanded=false aria-label="Toggle navigation"class=navbar-toggler data-target=#navbarNav data-toggle=collapse type=button></button><span></span><div class="collapse navbar-collapse"id=navbarNav></div><ul class="ml-auto navbar-nav navbar-top-navigation"><li class=nav-item><a class=nav-link href=/v5/myaccount_withGrid.html><span class="fas fa-cogs"></span>My Account</a><li class=nav-item><a class=nav-link href=/v5/contact.html><span class="fas fa-mobile-alt"></span>Contact Us</a><li class=nav-item><a class=nav-link href=/v5/about.html><span class="fas fa-info-circle"></span>About</a></ul></nav><nav class="navbar mainNavigation navbar-expand-xl"><a class=navbar-brand href=/v5/login.html>NewV5</a> <button aria-controls=navbarSupportedContent aria-expanded=false aria-label="Toggle navigation"class=navbar-toggler data-target=#navbarSupportedContent data-toggle=collapse type=button><span class="fa fa-bars"></span></button><div class="collapse navbar-collapse"id=navbarSupportedContent><ul class="ml-auto navbar-nav"><li class="nav-item active"><a class=nav-link href=/v5/welcome.html>Welcome <span class=sr-only>(current)</span></a><li class=nav-item><a class=nav-link href=/v5/profile.html>Profile</a><li class=nav-item><a class=nav-link href=/v5/quickPoints.html>QuickPoints</a><li class=nav-item><a class=nav-link href=/v5/learning.html>Learning</a><li class=nav-item><a class=nav-link href=/v5/shopping.html>Shopping</a><li class=nav-item><a class=nav-link href=performanceTracking.html>Performance Tracking</a><li class=nav-item><a class=nav-link href=/v5/submitAsale.html>Submit A Sale</a><li class=nav-item><a class=nav-link href=/v5/totalrecognitionsuite.html>Total Recognition Suite</a><li class=nav-item><a class=nav-link href=/v5/leaderboard.html>Leaderboard</a></ul></div></nav>';

var footerNavigation = '<div id=bottomNavigation><ul class="justify-content-center nav"><li class=nav-item><a class="nav-link active"href=/v5/faq.html>FAQ</a><li class=nav-item><a class=nav-link href=/v5/about.html>About</a><li class=nav-item><a class=nav-link href=/v5/rules.html>Rules</a><li class=nav-item><a class=nav-link href=/v5/terms.html>Terms</a><li class=nav-item><a class=nav-link href=/v5/privacy.html>Privacy</a><li class=nav-item><a class=nav-link href=/v5/login.html>Logout</a></ul></div><div id=copyright><p>Copyright © 2018 | RewardTrax - Reaching New Heights</div>';

// Output Navigation;
$('header').append(mainNavigation);
$('footer').append(footerNavigation);

// Grid/List View
var elements = document.getElementsByClassName('col-md-4');

var i;

function listView(){
  for (i=0; i < elements.length; i++){
    elements[i].classList.add('listView');

  }
}


function gridView(){
  for (i=0; i < elements.length; i++){
    elements[i].classList.remove('listView');

  }
}
				

// For the Back button
function goBack() {
    window.history.back();
}
