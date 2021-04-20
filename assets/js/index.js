
$(document).ready(function () {

    $("#name").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
            $("#err1").show()

        } else {
            $("#err1").hide()

        }
        var text1 = $(this).val()
        if (/^[a-zA-Z]+$/.test(text1) == false) {
            $("#err2").show()

        } else {
            $("#err2").hide()

        }
    })

    $("#email").blur(function () {

        var inputvalues = $(this).val()
        if (/^[a-zA-Z0-9-.]+\@[a-zA-Z]+\.[a-zA-Z0-9]+$/.test(inputvalues) == false) {
            $("#err2").show()

        } else {
            $("#err2").hide()

        }
    })

})
