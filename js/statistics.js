/*UDIB.html переход на Main/html*/
$('#btn-newGroup').click(function () {
    location.replace("Main.html");
});

var settings = document.getElementById('settings');
var btn = document.getElementById("btnSettings");
var btnOk = document.getElementById("btnOk");
var highlightCoross = document.getElementsByClassName("cross");



var modal = document.getElementById('modalStatistics');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < highlightCoross.length; i++) {
    highlightCoross[i].onclick = function () {
        var dCross = this.cloneNode(true);
        //появляется модальное окно
        modal.style.display = "block";
        $(".modal-contentStatistics").append(dCross);
        dCross.id = "modalCross";
    };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $("#modalCross").remove();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#modalCross").remove();
    }
}

var btnDelete = document.getElementById("btnDelete");
btnDelete.onclick = function () {
    for (var i = 0; i < highlightCoross.length; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            highlightCoross[i].remove();
            i--;
        }
    }
};

var btnCopy = document.getElementById("btnCopy");
//var hCount = highlightCoross.length;

btnCopy.onclick = function () {
    for (var i = 0; i < highlightCoross.length; i++) {
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

var btnGroups = document.getElementById("btnGroups");

btnGroups.onclick = function () {
    /*    var hNew = document.getElementsByClassName("new");
        var countNew = 0;
        for (var i = 0; i < hNew.length; i++) {
            if (hNew[i].style.border === "4px solid rgb(14, 36, 66)") {
                btnGroups.disabled = true;
                countNew++;
                return;
            }
        }
        if (countNew === 0) {
            btnGroups.disabled = false;
        }*/
    for (var i = 0; i < highlightCoross.length; i++) {
        var parentCross = $(highlightCoross[i]).parent().attr("class");
        if (parentCross === "newCross" && highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)" ) {
            btnGroups.disable = true;
            return;
        } else
            btnGroups.disable = false;
    }

    var hCross = [];
    for (var i = 0; i < highlightCoross.length; i++) {
        if (highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
            highlightCoross[i].style.border = "";

            hCross.push(highlightCoross[i]);

        }
    }

    $(hCross).wrapAll("<div class='new' />");
    $(".new:last").prepend('<div class = "nameGroup"><input type="text" placeholder="NameGroup" id = "groupTitle"/></div>');
    var lastItem = document.getElementsByClassName("new").length - 1;
    document.getElementsByClassName("new")[lastItem].style.border = "4px solid rgb(14, 36, 66)";
    $(hCross).wrapAll("<div class='newCross' />");

    // var newList = document.getElementsByClassName("new");
    // newList[0].style.background = "rgb(14, 36, 66)";
    // newList[1].style.background = "rgb(14, 36, 66)";
    // $(hCross).wrapAll('<div class="group">');
};

// When the user clicks the button, open the settings
btn.onclick = function () {
    settings.style.display = "block";
    btn.style.display = "none";
    modal.style.display = "none";
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
    for (var i = 0; i < highlightCoross.length; i++) {
        highlightCoross[i].style.border = "";
        highlightCoross[i].onclick = function () {
            var dCross = this.cloneNode(true);
            //появляется модальное окно
            modal.style.display = "block";
            $(".modal-contentStatistics").append(dCross);
            dCross.id = "modalCross";
        };
    }
    /*//убрать выделения 
    for (var i = 0; i < highlightCoross.length; i++) {
        highlightCoross[i].style.border = "";
    };*/
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
