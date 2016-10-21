// Login
// =====
$(document).ready(function () {
    $('.input-login').focusin(function () {
        $(this).parent().addClass('focus-login');
        $(this).parent().find('.user').attr('src', '../images/login/user-hover.png');
        $(this).parent().find('.pass').attr('src', '../images/login/pass-hover.png');
    });
    $('.input-login').focusout(function () {
        $(this).parent().removeClass('focus-login');
        $(this).parent().find('.user').attr('src', '../images/login/user.png');
        $(this).parent().find('.pass').attr('src', '../images/login/pass.png');
    })
});


// Sidebar: Setup metisMenu
// ========================
$(document).ready(function () {
    $('#sidebar-menu').metisMenu({
        activeClass: 'active'
    });
});

// Setup NiceScroll plugin
// =======================
$(document).ready(function () {
    $('html').niceScroll({
        cursorcolor: 'rgba(33, 119, 86 , 0.6)',
        cursorborder: 'none',
        scrollspeed: 30,
        mousescrollstep: 50
    });
    $('.sidebar-nav').niceScroll({
        cursorcolor: 'rgba(238, 238, 238 , 0.2)',
        cursorborder: 'none'
    });
});

// Setup datePicker plugin
// ======================
$(document).ready(function () {
    $('.cp-card-date').datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true
    });
});

// Setup Bootstrap Input File plugin
// =================================
$(document).ready(function () {
    $(".cp-upimage").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        showDrag: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<span style="font-size: 16px;">Browse...</span>',
        removeIcon: '<i class="cp-icn-disable"></i>',
        fileActionSettings: {
            zoomIcon: '<i class="cp-icn-zoom"></i>',
            zoomClass: 'btn cp-btn-trans'
        },
        removeTitle: 'Cancel or reset changes',
        browseClass: 'btn cp-btn cp-btn-upload',
        previewSettings: {image: {width: "100%", height: "auto"}},
        previewZoomSettings: {image: {width: "auto", height: "100%"}},
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="../images/upimage-wide.png" alt="Your Image" style="width: 200px">',
        layoutTemplates: {main2: '{preview} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"],
        elPreviewContainer: '.cp-upimage-container'
    });
});

// Trigger button "Add New Address"
// ================================
$(document).ready(function () {
    $("#add-new-address").on('click', function () {
        $("#cp-old-address").css("display", "block");
        $("#cp-old-address").addClass("animated fadeIn");
    });
    $("#edit-address").on('click', function () {
        $("#cp-old-address").css("display", "block");
        $("#cp-old-address").addClass("animated fadeIn");
    })
});

// Set position of foobar
// ======================
$(document).ready(function () {
    var windowHeight = $(window).height();
    var contentHeight = $(".cp-float-container").height();
    var minHeight = windowHeight - 155;
    if (contentHeight < minHeight) {
        $("#foobar").addClass("cp-set-bottom");
    }
});

// Setup Bootstrap Tooltips
// ======================
$(document).ready(function () {
    $('[data-hover="tooltip"]').tooltip();
});

// Setup Alert
// ===========
$(document).ready(function () {
    $('.cp-alert').hide();
    $('#cp-btn-alert-success').click(function showAlert() {
        $('.cp-alert-success').alert();
        $('.cp-alert-success').fadeTo(3000, 500).fadeOut(500);
    });
    $('#cp-btn-alert-warning').click(function showAlert() {
        $('.cp-alert-warning').alert();
        $('.cp-alert-warning').fadeTo(3000, 500).fadeOut(500);
    });
    $('#cp-btn-alert-danger').click(function showAlert() {
        $('.cp-alert-error').alert();
        $('.cp-alert-error').fadeTo(3000, 500).fadeOut(500);
    });
    $('.cp-btn-close').click(function () {
        $('.cp-alert').hide();
    })
});
