/*UDIB.html переход на Main/html*/
$('#btn-newGroup').click(function () {
    location.replace("Main.html");
});
//modal//

// Get the modal
var settings = document.getElementById('settings');

// Get the button that opens the modal
var btn = document.getElementById("btnSettings");
var btnOk = document.getElementById("btnOk");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var highlightCoross = document.getElementsByClassName("cross");

var btnDelete = document.getElementById("btnDelete");

btnDelete.onclick = function () {
    for (var i = 0; i < highlightCoross.length; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            if (highlightCoross[i].parentNode) {
                highlightCoross[i].parentNode.removeChild(highlightCoross[i]);
            }
        }
    }
};

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function () {
    for (var i = 0; i < highlightCoross.length; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            document.getElementById("groupsCrossroads").appendChild(highlightCoross[i].cloneNode(true));
        }
    }
}

// When the user clicks the button, open the settings
btn.onclick = function () {
    settings.style.display = "block";
    btn.style.display = "none";
    //сделать возможным выделения определённого дива при нажатии 
    for (var i = 0; i < highlightCoross.length; i++) {
        highlightCoross[i].onclick = function () {
            this.style.border = "4px solid #0e2442";
        };
    }
};

btnOk.onclick = function () {
    settings.style.display = "none";
    btn.style.display = "block";
    btn.style.marginLeft = "31%";
    //убрать выделения 
    for (var i = 0; i < highlightCoross.length; i++) {
        highlightCoross[i].style.border = "none";
    };
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

function overNewGroupFunction() {
    var popup = document.getElementById("span-newGroup");
    popup.classList.toggle("show");
}

function normalOverNewGroupFunction() {
    var popup = document.getElementById("span-newGroup");
    popup.classList.toggle("show");
}

function overSettingsFunction() {
    var popup = document.getElementById("span-settings");
    popup.classList.toggle("show");
}

function normalOverSettingsFunction() {
    var popup = document.getElementById("span-settings");
    popup.classList.toggle("show");
}

function overMoveFunction() {
    var popup = document.getElementById("span-move");
    popup.classList.toggle("show");
}

function normalOverMoveFunction() {
    var popup = document.getElementById("span-move");
    popup.classList.toggle("show");
}

function overCopyFunction() {
    var popup = document.getElementById("span-copy");
    popup.classList.toggle("show");
}

function normalOverCopyFunction() {
    var popup = document.getElementById("span-copy");
    popup.classList.toggle("show");
}

function overGroupsFunction() {
    var popup = document.getElementById("span-groups");
    popup.classList.toggle("show");
}

function normalOverGroupsFunction() {
    var popup = document.getElementById("span-groups");
    popup.classList.toggle("show");
}

function overOkFunction() {
    var popup = document.getElementById("span-ok");
    popup.classList.toggle("show");
}

function normalOverOkFunction() {
    var popup = document.getElementById("span-ok");
    popup.classList.toggle("show");
}
