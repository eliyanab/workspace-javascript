//event - click
function changeStyle(e){
    // this ---> represent the element
    // e ---> event triggered
    e.preventDefault();
    this.setAttribute('class', 'answer selected');
}

//change style of the checkbox when clicked
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click', changeStyle, false);
}