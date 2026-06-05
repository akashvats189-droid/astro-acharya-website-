"use client"

import { Award, BookOpen, Users, Clock } from "lucide-react"

const stats = [
  { icon: Clock, value: "10+", label: "वर्षों का अनुभव" },
  { icon: Users, value: "5000+", label: "संतुष्ट जातक" },
  { icon: BookOpen, value: "15000+", label: "कुंडली विश्लेषण" },
  { icon: Award, value: "100%", label: "गोपनीयता" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              
              {/* Main Content Box */}
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-serif text-5xl text-primary">ॐ</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    आचार्य आकाश शास्त्री
                  </h3>
                  <p className="text-primary font-medium">वैदिक ज्योतिष विशेषज्ञ</p>
                </div>

                {/* Credentials */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Award className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">ज्योतिष शास्त्री</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">वास्तु विशारद</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Users className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">कर्मकांड विशेषज्ञ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">परिचय</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              मेरे बारे में
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                नमस्कार! मैं <strong className="text-foreground">आचार्य आकाश शास्त्री</strong>, 
                पिछले 10+ वर्षों से वैदिक ज्योतिष के क्षेत्र में कार्यरत हूं। मैंने ज्योतिष शास्त्र का गहन अध्ययन किया है।
              </p>
              <p>
                मेरा उद्देश्य प्राचीन वैदिक ज्ञान को आधुनिक जीवन की समस्याओं के समाधान में लागू करना है। 
                मैं कुंडली विश्लेषण, विवाह मिलान, वास्तु परामर्श, करियर मार्गदर्शन और ग्रह शांति पूजा में विशेषज्ञ हूं।
              </p>
              <p>
                हजारों लोगों ने मेरे मार्गदर्शन से अपने जीवन में सकारात्मक बदलाव अनुभव किया है। 
                <strong className="text-foreground"> आपकी समस्या का समाधान मेरी प्राथमिकता है।</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center p-4 bg-secondary/50 rounded-xl">
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
