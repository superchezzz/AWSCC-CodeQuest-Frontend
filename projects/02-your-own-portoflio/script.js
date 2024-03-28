document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll-trigger element
    var scrollTrigger = document.getElementById('scroll-trigger');
    
    // Add a scroll event listener
    window.addEventListener('scroll', function() {
        // Get the scroll position
        var scrollPosition = window.scrollY;
        
        // Get the offset top position of the skills section
        var skillsOffsetTop = document.getElementById('skills').offsetTop;
        
        // Check if the scroll position is greater than or equal to the skills section offset top
        if (scrollPosition >= skillsOffsetTop) {
            // Apply black background to .about-page
            document.querySelector('.about-page').style.backgroundColor != 'black';
        } else {
            // Apply white background to .about-page
            document.querySelector('.about-page').style.backgroundColor != 'white';
        }
    });
});
