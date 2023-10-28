
const contactForm = document.querySelector("#contact__form");
const partnerNumber = document.querySelector("#partner__number")
const userName = document.querySelector("#user__name");
const userEmail = document.querySelector("#user__email");
const phoneNumber = document.querySelector("#numero__celular");
const message = document.querySelector("#message");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {
        service_id:"service_zfe3wae",
        template_id:"template_qovxv6k",
        user_id:"V1IL12LSBNGhBdfgG",
        template_params: {
            "from_name": userName.value,
            "partner_number": partnerNumber.value,
            "from_email": userEmail.value,
            "phone_number": phoneNumber.value,
            "message": message.value,
        }
    };
    try {
        const reponse = await sendEmail(body);
        console.log(reponse);
            if(reponse && reponse.includes("OK")) {
                Swal.fire({
                    icon:"succes",
                    title:"Exito",
                    text:"El correo electronico se ha enviado correctamente"
                });

                userName.value = "";
                userEmail.value = "";
                message.value = "";

            } else{
                showErrorAlert();
            }
        }catch(error){
            showErrorAlert();
        }
    });

    const showErrorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
        });
    };

    const sendEmail = async (body) => {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
        const data = await response.text();
        return data;
    };















//     sendEmail(body)
//         .then(response => console.log(response()))
//         .catch(error => {
//             console.log(error);
//         })
// });
// const sendEmail = async (body) => {
//     const settings = {
//         method: "POST",
//         headers: {
//             "ContentType": "application/Json"
//         },
//         body: JSON.stringify(body)
//     }
//     const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
//     const data = await response.json();

//     return data;
// }