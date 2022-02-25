window.onload = function(){
    var fadeOut = document.getElementById('fadeOut');
    
    function fadeOutOnScroll(element) {
      if (!element) {
        return;
      }
      
      var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
      var elementHeight = element.offsetHeight;
      var scrollTop = document.documentElement.scrollTop;
      
      var opacity = 1;
      
      if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      }
      
      if (opacity >= 0) {
        element.style.opacity = opacity;
      }
    }
    
    function scrollHandler() {
      fadeOutOnScroll(fadeOut);
    }
    
    window.addEventListener('scroll', scrollHandler);
}