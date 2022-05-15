function openNav() {
    var x = document.getElementById("navbar-menu");
    if (x.className === "navbar-menu"){
        x.className += " menujs";
    } else {
        x.className = "navbar-menu"
    }

}