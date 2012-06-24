/// <reference path="../jquery-1.4.1-vsdoc.js" />


$(document).ready(function () {


    $('.maincontainer .searcharea .searchbox .searchinput').focus();




    $("input[name='option']").change(function () {


        $('.maincontainer .searcharea .searchbox .searchinput').focus();

        if ($("input[name='option']:checked").val() == 'QA') {
            $(".maincontainer .searcharea .searchbox .addbutton").fadeOut(200);
            $(".maincontainer .searcharea .addedEntitiesBox ").fadeOut(200, function () {
                $(".maincontainer .searcharea .addedEntitiesBox .title").text("");
            });
        }
        else if ($("input[name='option']:checked").val() == 'compare') {
            if ($(".maincontainer .searcharea .addedEntitiesBox .title").html() != "compare between") {
                $(".maincontainer .searcharea .searchbox .addbutton").fadeIn(200);

                $(".maincontainer .searcharea .addedEntitiesBox .title").fadeOut(200, function () {
                    $(".maincontainer .searcharea .addedEntitiesBox .title").text("Compare between");
                    $(".maincontainer .searcharea .addedEntitiesBox").fadeIn(200);
                    $(".maincontainer .searcharea .addedEntitiesBox .title").fadeIn(200);
                });
            }
        }

        else if ($("input[name='option']:checked").val() == 'relate') {
            if ($(".maincontainer .searcharea .addedEntitiesBox .title").html() != "Relate between") {
                $(".maincontainer .searcharea .searchbox .addbutton").fadeIn();
                $(".maincontainer .searcharea .addedEntitiesBox").fadeIn();
                $(".maincontainer .searcharea .addedEntitiesBox .title").fadeOut(200, function () {
                    $(".maincontainer .searcharea .addedEntitiesBox .title").text("Relate between");
                    $(".maincontainer .searcharea .addedEntitiesBox .title").fadeIn(200);

                });

            }
        }

    });
});


























function enable() {
    if ($(".maincontainer .searcharea .searchbox .searchinput").val() == "")
        return false;
    return true;
}

function addObject() {
    if (enable() == true) {
        var objectName = $(".maincontainer .searcharea .searchbox .searchinput").val();
        $(".maincontainer .searcharea .searchbox .searchinput").val("");
        var x = $(".maincontainer .searcharea .addedEntitiesBox");
        x.append("<span class='addedEntity'><span class='text'> " + objectName + " </span><a href='#' class='closeIcon'><img src='img/closeIcon.png'/></a><a href='#' class='closeIconHover'><img src='img/closeIconHover.png'/></a></span>");
        $("a.closeIconHover").hide();
        $(".addedEntity").hover(
  			function () {
  			    $(this).children('a.closeIcon').hide();
  			    $(this).children('a.closeIconHover').show();

  			},
  			function () {
  			    $(this).children('a.closeIconHover').hide();
  			    $(this).children('a.closeIcon').show();

  			});
    };

    $("a.closeIconHover").click(function () {
        $(this).parent().fadeOut(250, function () {

            $(this).remove();
            $('.maincontainer .searcharea .searchbox .searchinput').focus();

        });

    });
}

$(document).ready(function () {

    $(".maincontainer .searcharea .searchbox .addbutton").css("opacity", ".3");
    $(".maincontainer .searcharea .searchbox .searchinput").keyup(function () {
        if ($(".maincontainer .searcharea .searchbox .searchinput").val() == "") {
            $(".maincontainer .searcharea .searchbox .addbutton").css("opacity", ".3");
        }
        else {
            $(".maincontainer .searcharea .searchbox .addbutton").css("opacity", "1");
        }
    });


    $(".maincontainer .searcharea .searchbox .addbutton").click(function () {
        addObject();
        $(".maincontainer .searcharea .searchbox .addbutton").css("opacity", ".3");
        return false;
    });


    $('.maincontainer .searcharea .searchbox .searchinput').bind('keypress', function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            // Enter pressed... do anything here...
            if ($("input[name='option']:checked").val() != 'QA') {

                addObject();
            }
            return false;
        }



    });
});