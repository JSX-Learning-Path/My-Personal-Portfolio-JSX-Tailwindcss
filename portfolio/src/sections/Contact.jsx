import { Send } from "lucide-react";
import Button from "../components/Button";
function Contact() {
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
            <form className="space-y-6">
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
                  className="w-full px-4 py-3 bg-surface rounded-xl  border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <Button className="w-full type=submit"  size="lg">
                Send Message
                <Send />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
