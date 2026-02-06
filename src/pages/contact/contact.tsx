import { useRef } from "react";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            alert("Message Sent Successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error("Failed", error.text);
            alert("Failed to send message. Please try again.");
          },
        );
    }
  };

  return (
    <div className="flex flex-col bg-[#8a0000] h-172 px-4">
      <h1 className="text-center text-white py-6 text-3xl text-shadow-lg/100 font-bold">
        Contact
      </h1>

      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full max-w-md border-2 border-black bg-[#121212] text-white items-center py-6 px-4 gap-4 rounded-2xl text-lg"
        >
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="First & Last Name"
            required
            className="w-full border-2 py-2 px-3 rounded-xl bg-transparent"
          />
          <label>Email:</label>
          <input
            type="text"
            name="user_email"
            placeholder="Enter a valid email address"
            required
            className="w-full border-2 py-2 px-3 rounded-xl bg-transparent"
          />
          <label htmlFor="">Message:</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            required
            className="w-full border-2 py-2 px-3 rounded-xl bg-transparent h-32 resize-none"
          ></textarea>

          <button
            type="submit"
            value="Send"
            className="w-full border-2 rounded-2xl hover:bg-green-600 bg-red-600 py-2 font-bold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
