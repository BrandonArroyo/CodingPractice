//problem: user doesnt want to go to dead end
//solution: create overlay with large image - lightbox


//2. add overlay
    //2.1 image
    //2.2 caption
var $overlay = $('<div id = "overlay"> </div>');
var $image = $('<img>');
var $caption = $('<p></p>')
$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);
//1.click capture on link
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    var altLocation = $(this).attr("alt");
    $image.attr("src",imageLocation);

    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});
$overlay.click(function(){
    $overlay.hide();

});
    //1.1 show overlay
    //1.2 update overlay with image
    //1.3 get child alt attribute and set caption

//3. hide overlay
