$(document).ready(function() {

    $('#post_contact_us').live("click", function() {
        $("#post_contact_us").hide();
        $(".img_loader").show();
        setTimeout(function () {
            $("#frm_contact_us").submit();
        }, 2000);
    });

    $('#contact_feedback_type_id').live("change", function() {
        var subject_type = $("#contact_feedback_type_id").val();

        if(subject_type == 8){
            $(".span1").show();
            $(".span2, .span3").hide();
        }

        if(subject_type == 10 || subject_type == 11){
            $(".span2").show();
            $(".span1, .span3").hide();
        }

        if(subject_type == 7 || subject_type == 13 || subject_type == 14){
            $(".span3").show();
            $(".span1, .span2").hide();
        }
    });

});

