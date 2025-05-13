$(document).ready(function() {
  $(".js-phone-mask").inputmask("+7(999) 999 99 99",{"clearIncomplete": true, showMaskOnHover: false});
  $(".js-email-mask").inputmask({ alias: "email", showMaskOnHover: false});

  $('.js-decimal-mask').inputmask({
    alias: "decimal",
    rightAlign: false,
    groupSeparator: " ",
    radixPoint: ",",
    autoGroup: true,
    integerDigits: 13,
    digitsOptional: true,
    digits: 2,
    allowPlus: false,
    allowMinus: false,
    onBeforeWrite: function (event, buffer, caretPos, opts) {
        if (buffer.indexOf(',') != -1) {
            buffer[buffer.indexOf(',')] = '.';
        }
    }
});
});
