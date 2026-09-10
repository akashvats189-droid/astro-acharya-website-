"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,80,40,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(180,80,40,0.03),transparent_50%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-20 h-20 border border-primary/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-primary/10 rounded-full hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">10+ वर्षों का अनुभव</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-primary">आचार्य आकाश शास्त्री</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">वैदिक ज्योतिष विशेषज्ञ</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              ग्रहों की चाल समझें, भविष्य की दिशा जानें। कुंडली विश्लेषण, विवाह मिलान, 
              वास्तु परामर्श और करियर मार्गदर्शन के लिए आज ही संपर्क करें।
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {["सटीक भविष्यवाणी", "गोपनीय परामर्श", "समाधान गारंटी"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Link href="#contact">निःशुल्क परामर्श बुक करें</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                <a href="tel:+918958892468">अभी कॉल करें</a>
              </Button>
            </div>
          </div>

          {/* Stats & Image Section */}
          <div className="relative">
            {/* Zodiac Circle Decoration */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              
              {/* Center Image Placeholder */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl md:text-7xl text-primary">ॐ</span>
                  <p className="text-sm text-muted-foreground mt-2">शुभ लाभ</p>
                </div>
              </div>

              {/* Floating Zodiac Signs */}
              {["मेष", "वृष", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"].map((sign, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180)
                const radius = 140
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <div
                    key={sign}
                    className="absolute w-8 h-8 rounded-full bg-background border border-primary/30 flex items-center justify-center text-xs text-primary font-medium shadow-sm"
                    style={{
                      left: `calc(50% + ${x}px - 16px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                    }}
                  >
                    {sign.charAt(0)}
                  </div>
                )
              })}
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-4">
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-bold text-xl text-foreground">5000+</span>
                </div>
                <p className="text-xs text-muted-foreground">संतुष्ट जातक</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-bold text-xl text-foreground">4.9/5</span>
                </div>
                <p className="text-xs text-muted-foreground">रेटिंग</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
