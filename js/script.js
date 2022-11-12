$(document).ready(function() {

    function checkChange(){
        if ($('.jsButtonStatusThemeDark').prop('checked')){
            $('.jsPage').addClass('page--theme--dark');
        } else {
            $('.jsPage').removeClass('page--theme--dark');
        }
    }

    // клик по лейбл тоже активирует радио кнопку
    $('.jsLabelForRadioButton').on('click', function (){
        $(this).parent().find('.jsRadioButton').prop('checked', true);
        checkChange()
    })

    $(document).on('change', '.jsButtonStatusTheme', function (){
        checkChange()
    });

    $('.jsButtonSave').on('click', function (){
        if ($('.jsButtonStatusThemeDark').prop('checked')) {
            localStorage.setItem("darkTheme", true);
        }
        else {
            localStorage.setItem("darkTheme", false);
        }
    })

    if (localStorage.getItem("darkTheme") === "true") {
        $(".jsPage").addClass("page--theme--dark");
        $('.jsButtonStatusThemeDark').prop('checked', true);
        $('.jsButtonStatusThemeLight').prop('checked', false);
    } else {
        $(".jsPage").removeClass("page--theme--dark");
        $('.jsButtonStatusThemeLight').prop('checked', true);
    }

    // кастомизирует селект
    $('.jsSelect').styler();
});


