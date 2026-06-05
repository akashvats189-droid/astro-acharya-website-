import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "होम" },
  { href: "#services", label: "सेवाएं" },
  { href: "#about", label: "परिचय" },
  { href: "#testimonials", label: "समीक्षा" },
  { href: "#contact", label: "संपर्क" },
]

const services = [
  "कुंडली विश्लेषण",
  "कुंडली मिलान",
  "वास्तु परामर्श",
  "करियर मार्गदर्शन",
  "पूजा / अनुष्ठान",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl">ॐ</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">आचार्य आकाश शास्त्री</h3>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              वैदिक ज्योतिष की प्राचीन बुद्धिमत्ता से आपके जीवन को सही दिशा देने का मार्गदर्शन।
            </p>
            <div className="space-y-2">
              <a href="tel:+918958892468" className="flex items-center gap-2 text-background/70 hover:text-primary text-sm">
                <Phone className="h-4 w-4" />
                +91 89588 92468
              </a>
              <a href="mailto:akashvats189@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-primary text-sm">
                <Mail className="h-4 w-4" />
                akashvats189@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">सेवाएं</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing */}
          <div>
            <h4 className="font-semibold mb-4">परामर्श समय</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>सोमवार - शनिवार</p>
              <p className="text-primary font-medium">सुबह 9:00 - रात 9:00</p>
              <p className="mt-4">रविवार</p>
              <p className="text-primary font-medium">सुबह 10:00 - शाम 6:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} आचार्य आकाश शास्त्री. सर्वाधिकार सुरक्षित।
            </p>
            <p className="text-background/60 text-sm">
              || शुभ लाभ ||
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
