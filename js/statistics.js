/*UDIB.html переход на Main/html*/
$('#btn-newGroup').click(function () {
    location.replace("Main.html");
});

var settings = document.getElementById('settings');
var btn = document.getElementById("btnSettings");
var btnOk = document.getElementById("btnOk");
var highlightCoross = document.getElementsByClassName("cross");


var btnDelete = document.getElementById("btnDelete");

//for (var i = 0; i < highlightCoross.length; i++) {
//    highlightCoross[i].onclick = function () {
//        //появляется модальное окно
 //       modal.style.display = "block";
 //       var dCross = highlightCoross[i].cloneNode(true);
 //       document.getElementById("modalContentStatistics").appendChild(dCross);
//       
//    };
//}

btnDelete.onclick = function () {
    for (var i = 0; i < highlightCoross.length; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            highlightCoross[i].remove();
            i--;
        }
    }
};

var btnCopy = document.getElementById("btnCopy");
var hCount = highlightCoross.length;

btnCopy.onclick = function () {
    for (var i = 0; i < hCount; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            highlightCoross[i].style.border = "";
            var hCross = highlightCoross[i].cloneNode(true);
            document.getElementById("groupsCrossroads").appendChild(hCross);
            highlightCoross[highlightCoross.length - 1].onclick = function () {
                if (this.style.border === "")
                    this.style.border = "4px solid #0e2442";
                else
                    this.style.border = "";
            }
            // $(".groupsCrossroads").append("<div class = 'column'>wetwet</div>");

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
            if (this.style.border === "")
                this.style.border = "4px solid #0e2442";
            else
                this.style.border = "";
        }
    };
}

btnOk.onclick = function () {
    settings.style.display = "";
    btn.style.display = "block";
    btn.style.marginLeft = "31%";
    //убрать выделения 
    for (var i = 0; i < highlightCoross.length; i++) {
        highlightCoross[i].style.border = "";
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
