import { useState } from "react";
import { Send } from "lucide-react";
import Button from "../components/Button";
import emailJs from "@emailjs/browser";
import contactInfo from "../data/contact";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service configuration is missing");
      }
      console.log({ serviceId, templateId, publicKey, formData });
      await emailJs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message is sent successfully! I'll get back to you soon.",
      });
    } catch (err) {
      console.error("Email sending error:", err);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-5 rounded-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h64 bg-highlight/5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/*Header Section */}
        <div className=" text-center mx-w-3xl mx-auto mb-16">
          <span className=" text-secondary-foreground text-sm font-medium">
            {" "}
            Get in touch{" "}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Let's build something great together
          </h2>
          <p className="text-gray-500 mt-5 lg:text-2xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's connect!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl  border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl  border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message:
                </label>
                <textarea
                  rows={5}
                  id="message"
                  type="text"
                  required
                  placeholder=" Place Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl  border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <Button
                className="w-full type=submit cursor-pointer"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 ml-2 animate-bounce " />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <p
                  className={`mt-4 text-center ${
                    submitStatus.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
          <div className="glass rounded-3xl p-8 border-primary/30">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            {contactInfo.map((contact, index) => {
              return (
                <div key={index} className="flex items-center mt-16 space-x-4 ">
                  <contact.icon className="h-12 w-12 text-primary p-2  bg-muted rounded" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {contact.label}
                    </p>
                    <a href={contact.href} className="text-sm text-white">
                      {contact.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
