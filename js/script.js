$(document).ready(function() {

    $('.jsLabelForRadioButton').on('click', function (){
        $(this).parent().find('.jsRadioButton').prop('checked', true);
    })


});


/**
 * Открывает модальное окно
 */


$(document).on('click', '.jsButtonModalOpen', function (e) {
    var $this, id, showModal;

    e.preventDefault();

    $this = $(this);
    id = $this.data('id');

    showModal = function () {
        $('#' + id).addClass('open');
        $('body').addClass('hidden');
    };

    showModal();
});


/**
 * Закрывает модальное окно
 */
$(document).on("click", ".jsButtonModalClose", function (e) {
    $(".jsModal").removeClass("open");
    $('body').removeClass('hidden');
});


$(document).mouseup(function (e) {
    var popup = $('.jsDropdown');
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        popup.removeClass('open');
        $('body').removeClass('hidden');
    }
});