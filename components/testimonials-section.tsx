"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "राजेश कुमार",
    location: "दिल्ली",
    rating: 5,
    text: "आचार्य जी ने मेरी कुंडली का बहुत सटीक विश्लेषण किया। उनके बताए उपाय से मेरी नौकरी की समस्या हल हो गई। बहुत धन्यवाद!",
  },
  {
    name: "प्रिया शर्मा",
    location: "जयपुर",
    rating: 5,
    text: "विवाह के लिए कुंडली मिलान कराया था। आचार्य जी ने बहुत विस्तार से समझाया और सही मुहूर्त भी बताया। अब मेरा वैवाहिक जीवन सुखी है।",
  },
  {
    name: "अमित वर्मा",
    location: "लखनऊ",
    rating: 5,
    text: "व्यापार में लगातार नुकसान हो रहा था। वास्तु परामर्श लिया और बताए गए उपाय किए। अब व्यापार में अच्छी तरक्की हो रही है।",
  },
  {
    name: "सुनीता देवी",
    location: "पटना",
    rating: 5,
    text: "बेटे के करियर को लेकर चिंतित थी। आचार्य जी ने कुंडली देखकर सही दिशा बताई। आज बेटा अच्छी कंपनी में काम कर रहा है।",
  },
  {
    name: "विकास गुप्ता",
    location: "मुंबई",
    rating: 5,
    text: "ग्रह दशा खराब चल रही थी। आचार्य जी ने पूजा करवाई और उपाय बताए। अब सब कुछ ठीक है। बहुत अनुभवी और विश्वसनीय हैं।",
  },
  {
    name: "मीना अग्रवाल",
    location: "भोपाल",
    rating: 5,
    text: "पहली बार ऑनलाइन ज्योतिष परामर्श लिया। आचार्य जी ने बहुत धैर्य से सुना और सही सलाह दी। 100% संतुष्ट हूं।",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">समीक्षाएं</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            जातकों के अनुभव
          </h2>
          <p className="text-muted-foreground text-lg">
            हजारों संतुष्ट जातकों ने अपने जीवन में सकारात्मक बदलाव अनुभव किया
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
