$(document).ready(function() {
    var form = $('#form-buying-product');

    function basketUpdating(product_id, nmb, is_delete) {
        var data = {};
        data.product_id = product_id;
        data.nmb = nmb;
        var csrf_token = $('#form-buying-product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;

        if (is_delete) {
            data["is_delete"] = true;
        }

        var url = form.attr("action");

        console.log(data);
        $.ajax ({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log('OK');
                console.log(data.products_total_nmb);
                if (data.products_total_nmb || data.products_total_nmb == 0) {
                    $('#basket_total_nmb').text(data.products_total_nmb);
                    $('.basket-items ul').html("");
                    $.each(data.products, function (index, obj) {
                        $('.basket-items ul').append('<li><p>' +
                            obj.name + '</p><p>' + obj.nmb + ' шт по ' + obj.product_price + ' р' +'</p>' +
                            '<a class="recycle-item" href="" data-product_id="' + obj.id +'"></a>' +
                        '</li>');
                    })
                }
            },
            error: function () {
                console.log("error");
            }
        });
    }


    form.on('submit', function (event) {
        event.preventDefault(); //отменяет стандартное действие ивента (в данном случае отправка формы при клике)
        var submitBtn = $('#submit_btn');
        var product_id = submitBtn.data("product_id");
        var name = submitBtn.data("name");
        var price = submitBtn.data("price");
        var productImg = submitBtn.data("product_img");
        var nmb = $('#number-of-products').val();

        basketUpdating(product_id, nmb, is_delete=false);
    });

    function showingElement(element) {
        $(element).removeClass('hidden-element');
    }

    function hiddingElement(element) {
        $(element).addClass('hidden-element');
    }

    $('.basket-card').on('click', function (event) {
        event.preventDefault();
        showingElement('.basket-items');
    });

    $('.basket-items').mouseleave(function() {
        hiddingElement('.basket-items');
    });
    
    $(document).on('click', '.recycle-item', function (event) {
        event.preventDefault();
        product_id = $(this).data("product_id");
        nmb = 0;
        basketUpdating(product_id, nmb, is_delete=true);
    })
});