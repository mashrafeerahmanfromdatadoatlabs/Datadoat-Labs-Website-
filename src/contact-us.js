const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit_btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("massage");

const public_key = "CZ73ratrIglvcYGxU";
const services_Id = "service_nyjys43";
const template_Id = "template_16ufplj";

emailjs.init(public_key);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.innerText = "Sending...";

  const inputFields = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  emailjs.send(services_Id, template_Id, inputFields).then(() => {
    submitBtn.innerText = "Send Success";
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  });
});
