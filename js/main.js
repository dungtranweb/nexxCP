// Nexx Control Panel Javascript
// =============================
$(document).ready(function () {

// Checking size of image
// ======================
    var image56 = $('.cp-image-rec56').children();
    if (image56.width() > image56.height()) {
        image56.css({'width': 'auto', 'height': '100%'});
    }

    var image90 = $('.cp-image-rec90').children();
    if (image90.width() > image90.height()) {
        image90.css({'width': 'auto', 'height': '100%'});
    }

    var imageCircle = $('.cp-image-circle').children();
    if (imageCircle.width() > imageCircle.height()) {
        imageCircle.css({'width': 'auto', 'height': '100%'});
    }


// Login
// =====
    $('.input-login').focusin(function () {
        $(this).parent().addClass('focus-login');
        $(this).parent().find('.user').attr('src', '../images/login/user-hover.png');
        $(this).parent().find('.pass').attr('src', '../images/login/pass-hover.png');
    });
    $('.input-login').focusout(function () {
        $(this).parent().removeClass('focus-login');
        $(this).parent().find('.user').attr('src', '../images/login/user.png');
        $(this).parent().find('.pass').attr('src', '../images/login/pass.png');
    });

// Sidebar: Setup metisMenu
// ========================;
    $('#sidebar-menu').metisMenu({
        activeClass: 'active'
    });

// Setup NiceScroll plugin
// =======================
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

// Setup datePicker plugin
// ======================
//     $('.cp-card-date').datepicker({
//         format: 'dd/mm/yyyy',
//         todayHighlight: true,
//         autoclose: true
//     });

// Setup Bootstrap Input File plugin
// =================================
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
        defaultPreviewContent: '<img src="../images/upimage-wide.png" alt="Your Image" style="width: 160px">',
        layoutTemplates: {main2: '{preview} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"],
        elPreviewContainer: '.cp-upimage-container',
        previewZoomButtonIcons: {
            prev: '<i class="cp-icn-prev"></i>',
            next: '<i class="cp-icn-next"></i>',
            toggleheader: '<i class="cp-icn-toggle-header"></i>',
            fullscreen: '<i class="cp-icn-fullscreen"></i>',
            borderless: '<i class="cp-icn-borderless"></i>',
            close: '<i class="cp-icn-close"></i>'
        },
        previewZoomButtonClasses: {
            prev: 'btn cp-btn-trans',
            next: 'btn cp-btn-trans',
            toggleheader: 'btn cp-btn-trans',
            fullscreen: 'btn cp-btn-trans',
            borderless: 'btn cp-btn-trans',
            close: 'btn cp-btn-trans'
        }
    });

// Trigger button "Add New Address"
// ================================
    $("#add-new-address").on('click', function () {
        $("#cp-old-address").css("display", "block");
        $("#cp-old-address").addClass("animated fadeIn");
    });
    $("#edit-address").on('click', function () {
        $("#cp-old-address").css("display", "block");
        $("#cp-old-address").addClass("animated fadeIn");
    });

// Set position of foobar
// ======================
    var windowHeight = $(window).height();
    var contentHeight = $(".cp-content").height();
    var minHeight = windowHeight - 155;
    if (contentHeight < minHeight) {
        $("#foobar").addClass("cp-set-bottom");
    };

// Setup Bootstrap Tooltips
// ========================
    $('[data-hover="tooltip"]').tooltip();

// Setup Alert
// ===========
    $('.cp-alert').hide();
    $('.cp-alert').fadeTo(3000, 500).fadeOut(500);
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
    });

// Setup Switch Button
// ===================
    $('#switch-sidebar').change(function () {
        if ($(this).is(':checked')) {
            // console.log('true');
            // $('#sidebar').css('display', 'none');
            // $('#sidebar').fadeIn(500);
            $('#sidebar').removeClass('animated fadeOutLeft');
            $('#sidebar').addClass('animated fadeInLeft');
            $('.cp-right-block').css('padding-left', '190px');
            // $('#topbar').css({'width': '100%', 'transition': 'width 1s'});
            // $('.cp-float-container').css({'width': '100%', 'transition': 'width 1s'});
            // $('.cp-breadcrumb').css({'width': '97.36842%', 'transition': 'width 1s'});
            // $('.cp-float-item-s2').css({'margin-left': '30px', 'transition': 'margin-left 1s'});
            // $('.cp-float-item-11').css({'width': '100% !important', 'transition': 'width 1s'});
        } else {
            // console.log('false');
            // $('#sidebar').css('display', 'block');
            // $('#sidebar').fadeOut(500);
            $('#sidebar').removeClass('animated fadeInLeft');
            $('#sidebar').addClass('animated fadeOutLeft');
            $('.cp-right-block').css('padding-left', '0');
            // $('#topbar').css({'width': '115%', 'transition': 'width 1s'});
            // $('.cp-float-container').css({'width': '121.5%', 'transition': 'width 1s'});
            // $('.cp-breadcrumb').css({'width': '118.36842%', 'transition': 'width 1s'});
            // $('.cp-float-item-s2').css({'margin-left':'38px', 'transition': 'margin-left 1s'});
            // $('.cp-float-item-11').css({'width': '97.5% !important', 'transition': 'width 1s'});
        }
    });

// End Nexx Control Panel Javascript
// =================================
});