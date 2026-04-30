import Link from "next/link";
import Image from "next/image";
import footerlogo from "@/assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-[#050B2B] dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={footerlogo}
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200 "
              />
              <h2 className="text-xl font-semibold tracking-tight text-white hover:text-purple-500 dark:text-white">
                Pro Coder BD
              </h2>
            </div>

            <p className="text-sm font-medium leading-relaxed text-white hover:text-purple-500 dark:text-gray-400 max-w-xs">
              Empowering learners worldwide with industry-leading skills. Our
              mission is to provide accessible, high-quality education led by
              expert mentors to help you bridge the gap between dreams and
              career success.
            </p>
          </div>

          {/* contact */}

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-white hover:text-purple-500">
              Contact Us
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded bg-white  hover:bg-purple-500 border-white/20  outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded  hover:bg-purple-500 bg-white border-white/20 outline-none"
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 rounded  hover:bg-purple-500 bg-white border-white/20 outline-none"
              />

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 rounded  hover:bg-purple-500 bg-white border-white/20 outline-none"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-2 rounded  hover:bg-purple-500 bg-white border-white/20 outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-blue-700 transition p-2 rounded font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Link */}

          <div className="flex flex-col gap-6 text-white text-2xl">
            <div>
              <h2 className="text-3xl font-bold hover:text-purple-500 text-white">
                Social Links
              </h2>
            </div>

            <div className="border border-gray-500 w-10 h-10 hover:bg-purple-500 rounded-full flex items-center justify-center">
              <a href="https://www.facebook.com/share/1GvPsfzZAk/" target="_blank">
                <FaFacebook />
              </a>
            </div>

            <div className="border border-gray-500 w-10 h-10 hover:bg-purple-700 rounded-full flex items-center justify-center">
              <a href="https://instagram.com/yourusername" target="_blank">
                <FaInstagram />
              </a>
            </div>

            <div className="border border-gray-500 w-10 h-10 hover:bg-purple-700 rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/in/sahidul-islam-/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
            <div className="border border-gray-500 w-10 h-10 hover:bg-purple-700 rounded-full flex items-center justify-center">
              <a href="https://twitter.com/yourusername" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <div className="border border-gray-500 w-10 h-10 hover:bg-purple-700 rounded-full flex items-center justify-center">
              <a href="https://github.com/sahidul-dev-47" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="hover:text-purple-500 text-white font-semibold mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-purple-500 text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-purple-500 text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="hover:text-purple-500 text-white"
                  >
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund"
                    className="hover:text-purple-500 text-white"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="hover:text-purple-500 text-white font-semibold mb-3">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/help" className=" hover:text-purple-500 text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-purple-500 text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-purple-500 text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className=" hover:text-purple-500 text-white"
                  >
                    Live Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm hover:text-purple-500 text-white ">
          © {new Date().getFullYear()} Pro Coder BD .Built with ❤️ for better
          web experience.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
