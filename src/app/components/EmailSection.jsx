"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsAppIcon from "../../../public/whatsapp-icon.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      createdAt: new Date(), // Marca a data e hora
    };

    try {
      // Adiciona a mensagem ao Firestore
      await addDoc(collection(db, "messages"), data);
      console.log("Mensagem enviada com sucesso!");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar a mensagem: ", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Vamos conectar</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Atualmente, estou procurando por novas oportunidades, minha caixa de
          entrada está sempre aberta. Se você tiver alguma dúvida ou apenas
          quiser dizer oi, eu farei o meu melhor para responder!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Marinhoon">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/vitor-marinho-a3a177297/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://wa.me/5571996359649">
            <Image src={WhatsAppIcon} alt="WhatsApp Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            E-mail enviado com sucesso!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu e-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="seuemail@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Apenas dizendo oi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className={`${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary-500 hover:bg-primary-600"
              } text-white font-medium py-2.5 px-5 rounded-lg w-full`}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;


// "use client";
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import WhatsAppIcon from "../../../public/whatsapp-icon.svg"

// import Link from "next/link";
// import Image from "next/image";

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">Vamos conectar</h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           Atualmente, estou procurando por novas oportunidades, minha caixa de
//           entrada está sempre aberta. Se você tiver alguma dúvida ou apenas
//           quiser dizer oi, eu farei o meu melhor para responder!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="https://github.com/Marinhoon">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/vitor-marinho-a3a177297/">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//           <Link href="https://wa.me/5571996359649">
//             <Image src={WhatsAppIcon} alt="WhatsApp Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             E-mail enviado com sucesso!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Seu e-mail
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="seuemail@email.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Assunto
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Apenas dizendo oi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Mensagem
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Vamos falar sobre..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Enviar mensagem
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
