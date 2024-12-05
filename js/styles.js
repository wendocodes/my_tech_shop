
$(function () {
    $('#viewCartButton').css({
        'position': 'fixed',
        'top': '20px',
        'right': '20px',
        'z-index': '1000',
        'padding': '10px 20px',
        'background-color': '#087b2d',
        'color': 'white',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '16px'
    });

    $('#viewCartButton').hover(
        function () {
            $(this).css('background-color', '#0056b3');
        },
        function () {
            $(this).css('background-color', '#087b2d');
        }
    );

    $("#viewCartButton").on("click", function () {
        const cartDiv = $("#cartDiv");
        cartDiv.toggle();
        if (cartDiv.is(":visible")) {
            showCart();
        }
    });
    
});

