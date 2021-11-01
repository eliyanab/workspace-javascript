// key up ---> display key code
function showkeyCode(e){
    console.log("in keycode");
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "Last key in ASCII code :" + e.keyCode;
    window.alert("you pressed " + e.key);
}

// bind the action
$('#message').keyup(showkeyCode);

// press s key ---> move the + symbol
var posX = 100;
var posY = 10;
function moveit(e){
    if (e.key="s"){
        // animation
        $('img').animate({left:"400px"},500,'linear');
    }
    /*
    else if(e.key="ArrowUp"){
        $('img').animate({up:"50px"},500,'linear');
    }*/
}
// bind the action
document.addEventListener('keydown', moveit);

// click ---> show the position
function showMouse(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "position (" + e.pageX + ", " + e.pageY + ")";
}
document.addEventListener('click', showMouse);