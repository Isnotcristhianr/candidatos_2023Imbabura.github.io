$(function () {
    $("#IbarraCand").hide();
    $("#AtuntaquiCand").hide();
    $("#UrcuquiCand").hide();
    $("#CotacachiCand").hide();
    $("#OtavaloCand").hide();
    $("#PimampiroCand").hide();


});

$(document).ready(function () {
    $('select').change(function () {
        if (this.value == 0) {
            $("#IbarraCand").hide();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").hide();
        }
        else if (this.value == 1) {
            $("#IbarraCand").show();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").hide();
        }
        else if (this.value == 2) {
            $("#IbarraCand").hide();
            $("#AtuntaquiCand").show();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").hide();
        }
        else if (this.value == 3) {
            $("#IbarraCand").hide();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").show();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").hide();
        }
        else if (this.value == 4) {

            $("#IbarraCand").hide();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").show();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").hide();
        }

        else if (this.value == 5) {
            $("#IbarraCand").hide();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").show();
            $("#PimampiroCand").hide();
        }
        else if (this.value == 6) {
            $("#IbarraCand").hide();
            $("#AtuntaquiCand").hide();
            $("#UrcuquiCand").hide();
            $("#CotacachiCand").hide();
            $("#OtavaloCand").hide();
            $("#PimampiroCand").show();
        }
    })
});

//mostrar scroll bar 
$(document).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
}
);