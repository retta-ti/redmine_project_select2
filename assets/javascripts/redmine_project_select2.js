function replaceProjectSelect() {
    $("#project_quick_jump_box, #issue_project_id").select2({
        width: "340px",
        placeholder: "",
        allowClear: true
    });
}

(function ($) {
    replaceProjectSelect();

    $(document).ajaxComplete(function (event) {
        replaceProjectSelect();
    });

    $(window).load(function () {
        replaceProjectSelect();
    });

}(jQuery));