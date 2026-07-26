import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.14_0.04_275)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={logo} alt="CodeSwipe" className="h-8 w-auto brightness-0 invert opacity-90" />
            <p className="mt-6 text-2xl font-display font-semibold leading-tight">
              From idea to launch — <span className="text-gradient">we build products that drive growth.</span>
            </p>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest text-white/50">Newsletter</label>
              <form className="mt-2 flex overflow-hidden rounded-full bg-white/10 backdrop-blur">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 outline-none"
                />
                <button className="bg-brand px-4 text-sm font-medium">Subscribe →</button>
              </form>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary-glow">About</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-glow">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-primary-glow">Careers</Link></li>
              <li><Link to="/blogs" className="hover:text-primary-glow">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Services</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>UI / UX Design</li>
              <li>Backend & API</li>
              <li>Cloud Solutions</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Reach</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@codeswipe.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Remote Worldwide</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full bg-brand p-2 text-white hover:opacity-90 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} CodeSwipe IT Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
