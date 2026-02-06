import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    if (loading) return;
    setLoading(true);

    const toastId = toast.loading("Sending Message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message Send Successfully! 🚀", {
          id: toastId,
        });
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Email Failed", error);

        toast.error("Failed to Send Message 😢", {
          id: toastId,
        });
      })
      .finally(() => {
        setLoading(false);
      });
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
            disabled={loading}
            className={`w-full border-2 rounded-2xl hover:bg-green-600 bg-red-600 py-2 font-bold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600"}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
