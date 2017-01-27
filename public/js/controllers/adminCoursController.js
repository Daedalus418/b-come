function adminCoursController() {

    $("#boutonSaison").click(function() {
        $("#modifSaison").toggle("slow");
        $("#modifFormation").hide();
    });
    $("#boutonFormation").click(function() {
        $("#modifFormation").toggle("slow");
        $("#modifSaison").hide();
    });

}
