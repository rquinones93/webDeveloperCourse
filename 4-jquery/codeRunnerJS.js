// jQuery Code

/**
 * On hover on of the toggleButton change the background color,
 * revert back on hover off.
 */
$(".toggleButton").hover(function() {
                
  $(this).addClass("highlightedButton");
  
}, function() {
  
  $(this).removeClass("highlightedButton");
  
});
