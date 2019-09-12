
//var txt1 = document.getElementById("txt-1").value;
var output = localStorage.getItem("namn"); 
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var p = document.getElementById("t");
    p.innerHTML = output;

// kollar om det finns ett värde i localstorage isånna fall så visas ränsa knappen
// annars inte
if (localStorage.length != 0) {
    btn2.style.display = "block"; 
}else {
    btn2.style.display = "none"; 
}

// knapp för lägga in värdet i storage
btn1.addEventListener("click", function() {
    var input = document.getElementById("txt-1").value;
    localStorage.setItem("namn", input);
    btn2.style.display = "block"; 
    location.reload();
});

// ränsar storage
btn2.addEventListener("click", function() {
    localStorage.clear();
    btn2.style.display = "none";
    location.reload();
});


