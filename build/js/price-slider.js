$("#price_slider").ionRangeSlider({
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
      console.log(data);
      let month = data.from / 10;
      $('#price_slider_month').html(month);
      $('#price_slider_cost').html(data.from);
    },
});
