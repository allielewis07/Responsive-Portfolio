$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('clicked button')
        var name = $('.firstname').val()
        var LastName = $('.lastName').val()
        var email = $('.email').val()
        var message = $('.subject').val()
        statusElm.empty()
        if (name.length >= 2) {
            statusElm.append('<div>Subject is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }
        if (message.length >= 10) {
            statusElm.append('<div>Message is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})