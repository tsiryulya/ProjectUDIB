/*UDIB.html переход на Main/html*/
$('#btn-entry').click(function () {
    location.replace("Main.html");
});

/*Main.html переход на Statistics.html*/
$('#btn-statistics').click(function () {
    localStorage.setItem("groupsCrossroads", null);
    location.replace("Statistics.html");
});

/*constructor cross*/
function CrossClass(imageCross, contCross) {
    this.imageCross = imageCross;
    this.contCross = contCross;
};

function DateCross(dateCross) {
    this.dateCross = dateCross;
};


//modal//

// Get the modal
var modal = document.getElementById('modalHistory');

// Get the button that opens the modal
var btn = document.getElementById("btn-history");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var listHistory = document.getElementsByClassName("listHistory");

for (var i = 0; i < listHistory.length; i++) {
    listHistory[i].onclick = function () {
        var droups = localStorage.getItem("groupsCrossroads");
        location.replace("Statistics.html");
    };
}

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = 'block';
    var str = localStorage.getItem("groupsCrossroads");
    var event = JSON.parse(str, function (key, value) {
        if (key == 'dateCross') return new DateCross(value);
        return value;
    });

    $(".listHistory").append('<p>- ' + date + '</p>');
    /* if (localStorage.dateCreate) {
         localStorage.dateCreate += '<p>New Appended item</p>';
     } else {
         localStorage.dateCreate = '<p>Appended item</p>';
     } */

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
