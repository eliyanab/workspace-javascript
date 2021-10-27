//update link address - all go to google
$('a').each(function(){
    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href', "https://www.google.com");
});
//update all the image address
$('img').each(function(){
    var imgaddress = $(this).attr('src');
    $(this).attr('src', "img/"+imgaddress);
});

$('p').css("color", "red");