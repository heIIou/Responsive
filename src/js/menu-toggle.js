export default function() {
    const $container = $('.globalWrapper');
    if (!$container.length) {
        return;
    }

    let isHasClassActive = false;
    let button = $('.js-button-activation');
    let navigationList = $('.navigation__list');

    button.click(function() {

        if (!isHasClassActive) {
            navigationList.addClass('active');
            isHasClassActive = true;
        }

        else {
            navigationList.removeClass('active');
            isHasClassActive = false;
        }
    });

    $(window).resize(function() {
        let absoluteWidth = $(document).width();
        if ((absoluteWidth > 640) && (isHasClassActive === true)) {
            navigationList.removeClass('active');
            isHasClassActive = false;
        }
    });


}
