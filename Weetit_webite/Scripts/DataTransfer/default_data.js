/// <reference path="../jquery-1.4.1-vsdoc.js" />
/// <reference path="../json2.js" />


$(document).ready(function () {

    $.ajax({
        type: "POST",
        url: "Default.aspx/submit",
        data: "{'type':'q&a','data':'who is the son of hosni mubarak'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            console.log(msg.d);

        }
    });

});