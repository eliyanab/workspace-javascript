//event - click
function changestyle(e){
    // this ---> represent the element
    // e ---> event triggered
    e.preventDefault();
    // if the class is answer, change to answer selected
    //else change back to answer
    var currentclass = this.getAttribute('class');
    if(currentclass == "answer"){
        this.setAttribute('class', 'answer selected');
        this.children[0].children[0].checked = true;
        this.animate([{transform: 'scale(1,1)'},{transform:'scale(1.5, 1.5)'}], {duration: 3000, fill:"forwards"});

    }
    else{
        this.setAttribute('class', 'answer');
        this.children[0].children[0].checked = false;
        this.animate([{transform: 'scale(1.5,1.5)'},{transform:'scale(1, 1)'}], {duration: 0, fill:"forwards"});
    }
}

// change style of the checkbox when clicked
var elist = document.getElementsByClassName('answer');
for(var i=0; i<elist.length; i++){
    elist[i].addEventListener('click', changestyle);
}