$(document).ready(function(){$("#post_contact_us").live("click",function(){$("#post_contact_us").hide(),$(".img_loader").show(),setTimeout(function(){$("#frm_contact_us").submit()},2e3)}),$("#contact_feedback_type_id").live("change",function(){var e=$("#contact_feedback_type_id").val();8==e&&($(".span1").show(),$(".span2, .span3").hide()),(10==e||11==e)&&($(".span2").show(),$(".span1, .span3").hide()),(7==e||13==e||14==e)&&($(".span3").show(),$(".span1, .span2").hide())})});