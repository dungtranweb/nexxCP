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
        cursorborder: 'none'
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
