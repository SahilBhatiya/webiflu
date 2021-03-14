var footer = document.getElementById("DateAtFooter");

function ShowFooterData() {
    var CrrDate = new Date();
    var CrrYear = CrrDate.getFullYear();

    footer.innerHTML = "© " + CrrYear + " <a href='https://webiflu.com/' class='smooth-transition-normal'>Webiflu</a>, All Rights Reserved";
}