

function setFooterDate() {
    var year = new Date().getFullYear();
    document.getElementById("footer").innerHTML = 
        "Created by Zelenyy -- Copyright www.Hipwhale.info 2016 - " + 
        year.toString() + 
        "&copy;";
}

window.onload = function(){setFooterDate()};

