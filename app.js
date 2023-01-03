let manuBtn = document.getElementById("manuBtn")
let sideNav = document.getElementById("sideNav")
let manu = document.getElementById("manu")

sideNav.style.right = "-250px";
manuBtn.onclick = function()  {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
       manu.src = "Barber_Shop_img/close.png";
    }
    else{
        sideNav.style.right = "-250px";
        manu.src = "Barber_Shop_img/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});
