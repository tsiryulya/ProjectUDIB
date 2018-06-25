/*UDIB.html переход на Main/html*/
$('#btn-add').click(function () {
    location.replace("Main.html");
});
//modal//

// Get the modal
var settings = document.getElementById('settings');

// Get the button that opens the modal
var btn = document.getElementById("btn-settings");
var btn_ok = document.getElementById("btn-ok");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the settings
btn.onclick = function () {
    settings.style.display = "block";
    btn.style.display = "none";
};

btn_ok.onclick = function () {
    settings.style.display = "none";
    btn.style.display = "block";
};

/*pop-up*/

function overDeleteFunction() {
    var popup = document.getElementById("span-delete");
    popup.classList.toggle("show");
}

function normalOverDeleteFunction() {
    var popup = document.getElementById("span-delete");
    popup.classList.toggle("show");
}
