// import "./style.css"
// // import aboutUsPhoto from "../../assets/aboutUsPhoto.jpeg"
// import skinCleaning from "../../assets/tratamentocorporal.jpg"
// import pindasMassage from "../../assets/massageWithPindas.jpg"
// import clientNicolae from "../../assets/clientNicolae.png"
// import clientDebora from "../../assets/clientDebora.png.jpg"
// import clientClaudia from "../../assets/clientClaudia.jpeg"
// import clientSilvana from "../../assets/clientSilvana.jpeg"
// import bodyCare from "../../assets/bodyCare.jpg"
// import inspireCouture from "../../assets/LOGO-INSPIRECOUTURE.png"
// import logo from '../../assets/inspireSpaLogo.png'

// import emailjs from '@emailjs/browser';
// import {
//     Clock,
//     Envelope,
//     FacebookLogo,
//     MapPinLine,
//     PhoneCall,
//     WhatsappLogo,
//     Star
// } from "@phosphor-icons/react"

// import {
//     InstagramLogo
// } from "@phosphor-icons/react/dist/ssr"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// // import "swiper/css";
// import 'swiper/swiper-bundle.css'

// export const Home = () => {
//     // estado para o formulário
//     const [form, setForm] = useState({
//         name: "",
//         telefone: "",
//         email: "",
//         message: ""
//     })

//     // função para enviar o email via emailjs
//     async function handleSendEmails() {

//         if (!form.name || !form.telefone || !form.message) {
//             alert("Por favor, preencha os campos obrigatórios.");
//             return;
//         }

//         try {
//             await emailjs.send('service_myx56qs', 'template_8ex3moj', form, {
//                 publicKey: 'CYWYvbaJ0_7IeaVEK',
//             });

//             setForm({
//                 name: "",
//                 telefone: "",
//                 email: "",
//                 message: ""
//             });
//             alert("Mensagem enviada com sucesso!");
//         } catch (error) {
//             console.error("Erro ao enviar e-mail:", error);
//             alert("Ocorreu um erro. Tente novamente.");
//         }
//     }


// }


// Inicializa o Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Envio do formulário com validação simples
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const date = form.date.value;
    const message = form.message.value.trim();

    if (!name || !email || !phone || !service || !date) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exemplo simples de validação de email e telefone
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    const phonePattern = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Por favor, insira um telefone válido.');
        return;
    }

    // Aqui você pode implementar o envio para o backend via fetch/AJAX
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

    form.reset();
});























