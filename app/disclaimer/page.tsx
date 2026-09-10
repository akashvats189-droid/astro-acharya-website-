import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">अस्वीकरण (डिस्क्लेमर)</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">महत्वपूर्ण नोटिस</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-foreground font-semibold">
                  यह वेबसाइट केवल शैक्षणिक और आध्यात्मिक सलाह के उद्देश्य के लिए है। 
                  ज्योतिष विज्ञान विश्वास और अनुभव पर आधारित है, 100% सटीक परिणाम की गारंटी नहीं है।
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">परामर्श की प्रकृति</h2>
              <p className="text-muted-foreground leading-relaxed">
                आचार्य आकाश शास्त्री द्वारा प्रदान किए गए सभी परामर्श केवल सलाह के उद्देश्य के लिए हैं। 
                ये कानूनी, चिकित्सा, वित्तीय या पेशेवर सलाह का प्रतिस्थापन नहीं हैं। 
                आपको किसी भी महत्वपूर्ण निर्णय लेने से पहले उचित योग्य पेशेवरों (वकील, डॉक्टर, वित्तीय सलाहकार, आदि) 
                से परामर्श लेना चाहिए।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">परिणाम की कोई गारंटी नहीं</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम किसी विशेष परिणाम की गारंटी नहीं दे सकते। ज्योतिष एक प्राचीन विज्ञान है जो 
                मानव जीवन और ब्रह्मांडीय ऊर्जा के बीच के संबंध पर आधारित है। परिणाम व्यक्ति के कर्मों, 
                विश्वास और जीवन के अन्य कारकों पर निर्भर करते हैं।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">व्यक्तिगत जिम्मेदारी</h2>
              <p className="text-muted-foreground leading-relaxed">
                आप अपने जीवन के निर्णयों के लिए पूरी तरह से जिम्मेदार हैं। 
                किसी भी परामर्श पर अमल करना या न करना आपका व्यक्तिगत निर्णय है। 
                हम किसी भी निर्णय या उसके परिणामों के लिए कोई दायित्व स्वीकार नहीं करते।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">वेबसाइट की सामग्री</h2>
              <p className="text-muted-foreground leading-relaxed">
                वेबसाइट पर प्रदान की गई सभी जानकारी "जैसे है" आधार पर दी जाती है। 
                हम सामग्री की सटीकता, पूर्णता या उपयोगिता के लिए कोई वारंटी नहीं देते।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">चिकित्सा और कानूनी सलाह</h2>
              <p className="text-muted-foreground leading-relaxed">
                यदि आप चिकित्सा समस्या, मानसिक स्वास्थ्य संबंधी समस्या, या कानूनी मामले से जूझ रहे हैं, 
                तो कृपया योग्य पेशेवरों से परामर्श लें। ज्योतिष परामर्श इन समस्याओं के समाधान के लिए 
                पेशेवर सहायता का विकल्प नहीं है।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">तीसरे पक्ष की जिम्मेदारी</h2>
              <p className="text-muted-foreground leading-relaxed">
                वेबसाइट में तीसरे पक्ष की वेबसाइटों के लिंक हो सकते हैं। हम उन वेबसाइटों की सामग्री, 
                सटीकता या नीतियों के लिए जिम्मेदार नहीं हैं।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">परिवर्तन का अधिकार</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम बिना किसी नोटिस के किसी भी समय यह अस्वीकरण संशोधित कर सकते हैं। 
                वेबसाइट का निरंतर उपयोग नए अस्वीकरण को स्वीकार करने का अर्थ है।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">संपर्क जानकारी</h2>
              <p className="text-muted-foreground leading-relaxed">
                यदि आपके पास इस अस्वीकरण के बारे में कोई प्रश्न हैं:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">ईमेल:</strong> akashvats189@gmail.com</p>
                <p><strong className="text-foreground">फोन:</strong> +91 89588 92468</p>
              </div>
            </section>

            <section>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded mt-8">
                <p className="text-foreground font-semibold">
                  "ज्योतिष मार्गदर्शन प्रदान करता है, लेकिन भाग्य निर्धारित नहीं करता। 
                  आपके कर्म और निर्णय आपके जीवन का आकार तय करते हैं।"
                </p>
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
