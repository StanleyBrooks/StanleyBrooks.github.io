//jQuery to show contents of div by clicking button
//showHtmlDef
$("#showHtmlDef").click(function () {
    $("#showHtmlDef").toggleClass("btn-primary");
    $("#htmlDefContent").toggle("slow", function () {
    });
});
//
//showElements
$('#showElements').click(function () {
    $("#showElements").toggleClass("btn-primary");
    $("#htmlDefaultImg").addClass( "hideImg" );
    $("#elementsContent").toggle("slow", function () {
    });
});
//
//show Reserved Characters
$("#showResChar").click(function () {
    $("#showResChar").toggleClass("btn-primary");
    $("#resCharContent").toggle("slow", function () {
    });
});

//show Accessability
$("#showAccessContent").click(function () {
    $("#showAccessContent").toggleClass("btn-primary");
    $("#AccessContent").toggle("slow", function () {
    });
});

//showDocumentation
$("#showDocContent").click(function () {
    $("#showDocContent").toggleClass("btn-primary");
    $("#docContent").toggle("slow", function () {
    });
});
//
//
//Click Button

//Hide image - add hidden class to img

//show div by removing hidden class