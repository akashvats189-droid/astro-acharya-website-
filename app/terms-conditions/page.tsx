import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">शर्तें और शर्तें</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">स्वागत</h2>
              <p className="text-muted-foreground leading-relaxed">
                आचार्य आकाश शास्त्री की वेबसाइट का उपयोग करके, आप इन शर्तों और शर्तों से सहमत हो रहे हैं। 
                यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया वेबसाइट का उपयोग न करें।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">सेवाओं का विवरण</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम निम्नलिखित ज्योतिष सेवाएं प्रदान करते हैं:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>कुंडली विश्लेषण और पठन</li>
                <li>कुंडली मिलान (विवाह मिलान)</li>
                <li>वास्तु परामर्श</li>
                <li>करियर और वित्तीय मार्गदर्शन</li>
                <li>पूजा और अनुष्ठान</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">सेवा की शर्तें</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
                <li>सभी परामर्श केवल सलाह के उद्देश्य के लिए हैं।</li>
                <li>ज्योतिष विज्ञान पर विश्वास और व्याख्या व्यक्तिगत है।</li>
                <li>हमें आपके जीवन के निर्णयों के लिए जिम्मेदार नहीं माना जा सकता।</li>
                <li>सभी परामर्श गोपनीयता के साथ दिए जाते हैं।</li>
                <li>आचार्य द्वारा दिए गए परामर्श पर अमल करना या न करना आपका निर्णय है।</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">भुगतान और रिफंड</h2>
              <p className="text-muted-foreground leading-relaxed">
                सभी सेवाओं के लिए भुगतान अग्रिम किया जाना चाहिए। वैध कारणों से रिफंड उपलब्ध हो सकता है, 
                लेकिन यह मामला-दर-मामला आधार पर निर्धारित किया जाता है। बुकिंग रद्द करने के 7 दिन के भीतर 
                रिफंड अनुरोध स्वीकार किए जाते हैं।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">रद्दीकरण नीति</h2>
              <p className="text-muted-foreground leading-relaxed">
                यदि आप परामर्श रद्द करना चाहते हैं, तो निर्धारित तारीख से कम से कम 48 घंटे पहले 
                ईमेल या फोन के माध्यम से सूचित करें।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">बौद्धिक संपत्ति अधिकार</h2>
              <p className="text-muted-foreground leading-relaxed">
                वेबसाइट पर सभी सामग्री (पाठ, छवियां, आदि) आचार्य आकाश शास्त्री की संपत्ति है। 
                बिना अनुमति के कोई भी पुनरुत्पादन या वितरण निषिद्ध है।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">उपयोगकर्ता की जिम्मेदारी</h2>
              <p className="text-muted-foreground leading-relaxed">
                आप वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए करने के लिए सहमत हो रहे हैं। 
                किसी भी अवैध, अपमानजनक या हानिकारक गतिविधि में संलग्न न हों।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">देयता की सीमा</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान के लिए जिम्मेदार नहीं होंगे 
                जो वेबसाइट के उपयोग से या अन्यथा हो सकता है।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">संशोधन</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम किसी भी समय बिना सूचना के इन शर्तों को संशोधित कर सकते हैं। 
                वेबसाइट का निरंतर उपयोग नई शर्तों का स्वीकार माना जाएगा।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">संपर्क करें</h2>
              <p className="text-muted-foreground leading-relaxed">
                यदि आपके पास इन शर्तों के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">ईमेल:</strong> akashvats189@gmail.com</p>
                <p><strong className="text-foreground">फोन:</strong> +91 89588 92468</p>
              </div>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
                अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
