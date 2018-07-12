/*UDIB.html переход на Main/html*/
$('#btn-newGroup').click(function () {
    location.replace("Main.html");
});
 
var settings = document.getElementById('settings');
var btn = document.getElementById("btnSettings");
var btnOk = document.getElementById("btnOk");
var highlightCoross = document.getElementsByClassName("cross");

if (localStorage.getItem("groupsCrossroads") != "null") {
 $(".cross").remove();
   var divGroups = document.getElementById("groupsCrossroads");
    var divGroupsNew = JSON.parse(localStorage.getItem("groupsCrossroads"));
    $(".groupsCrossroads").append(divGroupsNew);
//   divGroups.push(divGroupsNew);
   localStorage.setItem("groupsCrossroads", null);
} 


var modal = document.getElementById('modalStatistics');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < highlightCoross.length; i++) {
    highlightCoross[i].onclick = function () {
        var dCross = this.cloneNode(true);
        //появляется модальное окно
        modal.style.display = "block";
        $(".contentModal").append(dCross);
        dCross.id = "modalCross";
    };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $("#modalCross").remove();
}

// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#modalCross").remove();
    }
}*/

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
        if (parentCross === "newCross" && highlightCoross[i].style.border === "4px solid rgb(14, 36, 66)") {
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

    $(hCross).wrapAll("<div  class='new' id = 'new' />");
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
            $(".contentModal").append(dCross);
            dCross.id = "modalCross";
        };
    }
    var date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    var dateCreate = date.toLocaleString("ru", options);
    var groups = document.getElementById("groupsCrossroads").outerHTML;
    localStorage.setItem("dateCreate", dateCreate.toString());
    localStorage.setItem("groupsCrossroads", JSON.stringify(groups));
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

//graphic

google.charts.load('current', {
    packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Dogs');
    data.addColumn('number', 'Cats');
    data.addColumn('number', 'Lynx');

    data.addRows([
            [0, 0, 0, 0],
            [1, 10, 5, 2],
            [2, 23, 15, 6],
            [3, 17, 9, 13],
            [4, 18, 10, 15],
            [5, 9, 5, 5],
            [6, 11, 3, 2],
            [7, 27, 19, 1],
            [8, 33, 25, 25],
            [9, 40, 32, 26],
            [10, 32, 24, 27],
            [11, 35, 27, 28],
            [12, 30, 22, 29],
            [13, 40, 32, 30],
            [14, 42, 34, 32],
            [15, 47, 39, 36],
            [16, 44, 36, 38],
            [17, 48, 40, 41],
            [18, 52, 44, 48],
            [19, 54, 46, 50],
            [20, 42, 34, 60],
            [21, 55, 47, 63],
            [22, 56, 48, 69],
            [23, 57, 49, 80],
            [24, 60, 52, 100],
            [25, 50, 42, 90],
            [26, 52, 44, 80],
            [27, 51, 43, 70],
            [28, 49, 41, 65],
            [29, 53, 45, 50],
            [30, 55, 47, 45],
            [31, 60, 52, 40],
            [32, 61, 53, 39],
            [33, 59, 51, 50],
            [34, 62, 54, 37],
            [35, 65, 57, 36],
            [36, 62, 54, 35],
            [37, 58, 50, 32],
            [38, 55, 47, 30],
            [39, 61, 53, 29],
            [40, 64, 56, 28],
            [41, 65, 57, 25],
            [42, 63, 55, 23],
            [43, 66, 58, 20],
            [44, 67, 59, 19],
            [45, 69, 61, 18],
            [46, 69, 61, 17],
            [47, 70, 62, 16],
            [48, 72, 64, 15],
            [49, 68, 60, 14],
            [50, 66, 58, 13],
            [51, 65, 57, 12],
            [52, 67, 59, 11],
            [53, 70, 62, 10],
            [54, 71, 63, 9],
            [55, 72, 64, 8],
            [56, 73, 65, 7],
            [57, 75, 67, 6],
            [58, 70, 62, 5],
            [59, 68, 60, 4],
            [60, 64, 56, 3],
            [61, 60, 52, 2],
            [62, 65, 57, 1],
            [63, 67, 59, 10],
            [64, 68, 60, 12],
            [65, 69, 61, 14],
            [66, 70, 62, 18],
            [67, 72, 64, 20],
            [68, 75, 67, 27],
            [69, 80, 72, 30]
        ]);

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        },
        series: {
            1: {
                curveType: 'function'
            }
        },

        'width': 400,
        'height': 241

    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

//ModalType

// Get the modal
var modalType = document.getElementById('modalType');

// Get the button that opens the modal
var chartType = document.getElementById("chartType");

// Get the <span> element that closes the modal
var spanType = document.getElementsByClassName("closeType")[0];

// When the user clicks the button, open the modal 
chartType.onclick = function () {
    modalType.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
spanType.onclick = function () {
    modalType.style.display = 'none';
}


//ModalPeriod

// Get the modal
var modalPeriod = document.getElementById('modalPeriod');

// Get the button that opens the modal
var chartPeriod = document.getElementById("chartPeriod");

// Get the <span> element that closes the modal
var spanPeriod = document.getElementsByClassName("closePeriod")[0];

// When the user clicks the button, open the modal 
chartPeriod.onclick = function () {
    modalPeriod.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
spanPeriod.onclick = function () {
    modalPeriod.style.display = 'none';
}
