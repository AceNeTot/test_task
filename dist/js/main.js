//validaion
const validity = $('.auth__form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
        }

    },
    messages: {
        email: {
            required: 'Email is mandatory!',
            email: "Your email address must be in the format of name@domain.com"
        },
        password: {
            required: "Password required",
        }
    }
});


const logData = ([...tags], event) => {

    let errorClass = '.error';
    [...tags].forEach((element) => {
        if ($(element).hasClass(errorClass)) {
            throw Error('Inputs are not validated');
            return;
        }
    });

    let output = '';
    [...tags].forEach((tag) => {
        let inputVal = $(`${tag}`).val();
        output += inputVal + `\n`;
    })

    console.log(output);
    event.preventDefault();
}



$('.auth__form').on('submit',  (e) => {
    console.log();
    if (Object.keys(validity.invalid).length == 0) {
        logData(['.auth__input_email', '.auth__input_password'], e);
    } else {
        return;
    }
});



