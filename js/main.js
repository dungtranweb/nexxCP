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
})


// Sidebar: Setup metisMenu
// ========================
$(document).ready(function () {
    $('#sidebar-menu').metisMenu({
        activeClass: 'active'
    });
})

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
})

// Setup datePicker plugin
// ======================
$(document).ready(function () {
    $('.cp-card-date').datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight: true,
        autoclose: true
    });
})

// Setup Bootstrap Input File plugin
// =================================
$(document).ready(function () {
    $(".cp-upimage").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<span style="font-size: 16px;">Browse...</span>',
        removeIcon: '<i class="cp-icn-disable"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="../images/upimage-wide.png" alt="Your Image" style="width: 200px">',
        layoutTemplates: {main2: '{preview} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"],
        elPreviewContainer: '.cp-upimage-container'
    });
})

// Trigger button "Add New Address"
// ================================
$(document).ready(function () {
    $("#add-new-address").on('click', function () {
        $("#cp-old-address").css("display", "block");
        $("#cp-old-address").addClass("animated fadeIn");
    })
})

// Set position of foobar
// ======================
$(document).ready(function () {
    var windowHeight = $(window).height();
    var contentHeight = $(".cp-float-container").height();
    var minHeight = windowHeight - 155;
    if (contentHeight < minHeight) {
        $("#foobar").addClass("cp-set-bottom");
    }
})