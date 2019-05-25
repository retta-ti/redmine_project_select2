function replaceProjectSelect() {
    $("#project_quick_jump_box").select2({
        width:"resolve",
        placeholder: "",
        allowClear: true
    });
}

(function($) {
    replaceProjectSelect();

    $(document).ajaxComplete(function(event) {
        replaceProjectSelect();
    });

    $(window).load(function() {
        replaceProjectSelect();
    });

    $(document).change(function(event) {
        replaceProjectSelect();
    });
} (jQuery));