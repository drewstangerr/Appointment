$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var FullName = $("input#FullName").val();
    var Date = $("input#Date").val();
    var StartTime= $("input#StartTime").val();
    var Endtime = $("input#Endtime").val();

    $(".FullName").text(FullNameInput);
    $(".Date").text(DateInput);
    $(".StartTime").text(StartTime);
    $(".Endtime").text(Endtime);

    $("#story").show();

    event.preventDefault();
  });
});
