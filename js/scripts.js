

var verifiMenuBurger = true;

function abreMenu() {

    var menuInt = document.getElementById("menuBurgerID");
    
    if (verifiMenuBurger == true) {
        menuInt.style.display = "block";
        verifiMenuBurger = false;
    } else {
        menuInt.style.display = "none";
        verifiMenuBurger = true;
    }
}

