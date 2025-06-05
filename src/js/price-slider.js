$(".js-price-slider").ionRangeSlider({
    grid: true,
    min: 10,
    max: 120,
    from: 60,
    step: 10,
    grid_snap: true,
    from_fixed: false,
    to_fixed: false,
    skin: "round",
    onChange: function (data) {
      let month = data.from / 10;
      let slider = data.input[0].closest('.price-slider');
      $(slider).find('.js-price_slider_month').html(month);
      $(slider).find('.js-price_slider_cost').html(data.from);
    },
});
