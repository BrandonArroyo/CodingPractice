//prevent spoilers
//reveal if wanted
// hide spoiler
$(".spoiler span").hide();
//add button
$(".spoiler ").append("<button>reveal spoiler</button>")
    //add button interaction
$("button").click(function(){
    $(this).prev().show()
    

    $(this).remove();
});
    //show spoiler
    //remove button
