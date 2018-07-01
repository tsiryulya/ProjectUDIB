/*UDIB.html переход на Main/html*/
$('#btn-entry').click(function () {
    location.replace("Main.html");
});

/*Main.html переход на Statistics.html*/
$('#btn-statistics').click(function () {
    location.replace("Statistics.html");
});

//modal//

// Get the modal
var modal = document.getElementById('modalHistory');

// Get the button that opens the modal
var btn = document.getElementById("btn-history");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//listCross//

var listCross = document.getElementById('listCross');
var 
