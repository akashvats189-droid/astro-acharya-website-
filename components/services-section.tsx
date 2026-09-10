"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Heart, Home, Briefcase, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "कुंडली / जन्म पत्रिका",
    titleEn: "Kundli Reading",
    description: "आपकी जन्म कुंडली का विस्तृत विश्लेषण। ग्रहों की स्थिति, दशा-महादशा, और जीवन के विभिन्न पहलुओं की जानकारी।",
    price: "₹1,100",
    features: ["जन्म कुंडली विश्लेषण", "ग्रह दशा फल", "वार्षिक राशिफल"],
  },
  {
    icon: Heart,
    title: "कुंडली मिलान",
    titleEn: "Match Making",
    description: "विवाह के लिए वर-वधू की कुंडली का गुण मिलान। 36 गुणों का विस्तृत विश्लेषण और मांगलिक दोष परीक्षण।",
    price: "₹2,100",
    features: ["36 गुण मिलान", "मांगलिक दोष जांच", "विवाह मुहूर्त"],
  },
  {
    icon: Home,
    title: "वास्तु परामर्श",
    titleEn: "Vastu Consultation",
    description: "घर और कार्यस्थल का वास्तु विश्लेषण। नकारात्मक ऊर्जा को दूर करने और सकारात्मकता लाने के उपाय।",
    price: "₹3,500",
    features: ["घर का वास्तु", "ऑफिस वास्तु", "दोष निवारण उपाय"],
  },
  {
    icon: Briefcase,
    title: "करियर मार्गदर्शन",
    titleEn: "Career Guidance",
    description: "कुंडली के आधार पर सही करियर चुनाव। नौकरी, व्यापार, विदेश यात्रा और आर्थिक उन्नति के योग।",
    price: "₹1,800",
    features: ["करियर विश्लेषण", "व्यापार योग", "विदेश यात्रा योग"],
  },
  {
    icon: Sparkles,
    title: "पूजा / अनुष्ठान",
    titleEn: "Puja & Rituals",
    description: "ग्रह शांति पूजा, नवग्रह पूजा, सत्यनारायण कथा और अन्य विशेष अनुष्ठान। समस्याओं के समाधान हेतु।",
    price: "₹2,500+",
    features: ["ग्रह शांति पूजा", "नवग्रह पूजा", "विशेष अनुष्ठान"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">हमारी सेवाएं</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            ज्योतिष सेवाएं
          </h2>
          <p className="text-muted-foreground text-lg">
            वैदिक ज्योतिष की प्राचीन विद्या से आपकी समस्याओं का समाधान
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.title} 
                className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{service.titleEn}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground">शुरू से</span>
                      <p className="text-xl font-bold text-primary">{service.price}</p>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      <Link href="#contact" className="flex items-center gap-1">
                        बुक करें <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">कोई भी समस्या हो, समाधान मिलेगा</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">अभी परामर्श लें</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
