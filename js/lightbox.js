//***********************************************************************************************************
//                                            LightBox                                                      *
//***********************************************************************************************************
//***********************************************************************************************************
//Problem:  When a user clicks on an image, it takes the them to the image source and can be annoying       *
//          to navigate back to the main site.  Creats a poor user experience, esp. on mobile.              *
//                                                                                                          *
//Solution: create  an overlay with the large image - aka lightbox that can be easily exited by clicking    *
//          on the overlay.  This image will also have a caption that is equal to the images alt text       *
//          in the elements source.                                                                         *
//***********************************************************************************************************
//
//$ in the var name reminds us that it is a javascript var, this is best practices but not required
//These variables are a JavaScript representation of an object, this is why we use $ in side the function
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//
// An image to overlay
$overlay.append($image);
//
//caption an overlay
$overlay.append($caption);
//
// Add overlay
$("body").append($overlay);
//
//l30   capture the link event on the link to an image
//l31   this prevents the browser from following the link to the picture
//l32   this sets the href to a variable to the value of this(what we are clicking)
$("#imageGallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
//  
// Update overlay with the image from the link
    $image.attr("src", imageLocation);
//
// Show the overlay
    $overlay.show();
//
// Get childs alt atribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});
//
// Hide overlay when clicked
$overlay.click(function () {
    $overlay.hide();
});