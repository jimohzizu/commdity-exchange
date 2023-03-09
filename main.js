const contactForm = document.getElementById('contact-form'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message')
   
    

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if ( contactEmail.value === '') {

          // Show message
            contactMessage.textContent = 'Write an email address'

        // Add and remove color
        
        contactMessage.style.color="red"

    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_vtdg574', 'template_nr4fmqe', '#contact-form', 'TLO4h-9utrVkIDHyF')
            .then(() => {
                // Show message and add color
                contactMessage.style.color="blue"
                contactMessage.textContent = 'Message sent ✔️'
                

                // Remove message after two seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                    contactEmail.value = ''
                }, 2000)
            }, (error) => {
                alert('SOMETHING HAS FAILED...', error)
            })
    }

}
contactForm.addEventListener('submit', sendEmail)



