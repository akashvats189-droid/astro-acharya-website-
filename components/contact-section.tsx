"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "फोन नंबर",
    value: "+91 89588 92468",
    href: "tel:+918958892468",
    action: "कॉल करें",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 89588 92468",
    href: "https://wa.me/918958892468?text=नमस्कार, मुझे ज्योतिष परामर्श चाहिए",
    action: "मैसेज करें",
  },
  {
    icon: Mail,
    title: "ईमेल",
    value: "akashvats189@gmail.com",
    href: "mailto:akashvats189@gmail.com",
    action: "ईमेल करें",
  },
  {
    icon: Clock,
    title: "समय",
    value: "सुबह 9 बजे - रात 9 बजे",
    href: null,
    action: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">संपर्क करें</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            अभी परामर्श लें
          </h2>
          <p className="text-muted-foreground text-lg">
            अपनी समस्या बताएं, समाधान पाएं। पहला परामर्श निःशुल्क।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              संपर्क जानकारी
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <Card key={info.title} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                          <div className="font-medium text-foreground text-sm truncate">{info.value}</div>
                          {info.href && (
                            <a 
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-primary text-sm hover:underline mt-1 inline-block"
                            >
                              {info.action}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-800 mb-2">WhatsApp पर तुरंत बात करें</h4>
                <p className="text-sm text-green-700 mb-4">
                  सबसे तेज़ जवाब के लिए WhatsApp पर मैसेज करें
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <a 
                    href="https://wa.me/918958892468?text=नमस्कार, मुझे ज्योतिष परामर्श चाहिए" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp पर मैसेज करें
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-xl">परामर्श फॉर्म</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">धन्यवाद!</h4>
                  <p className="text-muted-foreground">
                    आपका संदेश प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    नया संदेश भेजें
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      नाम <span className="text-destructive">*</span>
                    </label>
                    <Input
                      required
                      placeholder="आपका नाम"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      फोन नंबर <span className="text-destructive">*</span>
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      सेवा चुनें
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">सेवा चुनें</option>
                      <option value="kundli">कुंडली / जन्म पत्रिका</option>
                      <option value="matchmaking">कुंडली मिलान</option>
                      <option value="vastu">वास्तु परामर्श</option>
                      <option value="career">करियर मार्गदर्शन</option>
                      <option value="puja">पूजा / अनुष्ठान</option>
                      <option value="other">अन्य</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      संदेश
                    </label>
                    <textarea
                      placeholder="अपनी समस्या या प्रश्न लिखें..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "भेज रहे हैं..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        संदेश भेजें
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
