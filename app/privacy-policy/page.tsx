import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">गोपनीयता नीति</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">परिचय</h2>
              <p className="text-muted-foreground leading-relaxed">
                आचार्य आकाश शास्त्री द्वारा संचालित इस वेबसाइट पर आपकी गोपनीयता हमारे लिए सर्वोच्च प्राथमिकता है। 
                यह गोपनीयता नीति स्पष्ट करती है कि हम आपके व्यक्तिगत डेटा को कैसे एकत्र, उपयोग, संरक्षित और साझा करते हैं।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">हम कौन सी जानकारी एकत्र करते हैं?</h2>
              <p className="text-muted-foreground leading-relaxed">
                जब आप हमसे संपर्क करते हैं या परामर्श बुक करते हैं, तो हम निम्नलिखित जानकारी एकत्र कर सकते हैं:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>आपका पूरा नाम</li>
                <li>ईमेल पता</li>
                <li>फोन नंबर</li>
                <li>जन्म तारीख और समय (ज्योतिष परामर्श के लिए)</li>
                <li>जन्म स्थान</li>
                <li>परामर्श संबंधित अन्य प्रासंगिक जानकारी</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">जानकारी का उपयोग</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>ज्योतिष परामर्श और सेवाएं प्रदान करने के लिए</li>
                <li>आपके साथ संचार के लिए</li>
                <li>आपके परामर्श रिकॉर्ड बनाए रखने के लिए</li>
                <li>वेबसाइट सुधार के लिए</li>
                <li>आपके अनुरोध और पूछताछ का जवाब देने के लिए</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">डेटा सुरक्षा</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं। 
                आपकी जानकारी केवल प्राधिकृत व्यक्तियों तक पहुंच योग्य है और सुरक्षित तरीके से संग्रहीत है।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">तीसरे पक्ष के साथ साझाकरण</h2>
              <p className="text-muted-foreground leading-relaxed">
                हम आपकी व्यक्तिगत जानकारी तीसरे पक्ष को बिना आपकी सहमति के साझा नहीं करते हैं, 
                सिवाय कानूनी आवश्यकताओं के या यदि ऐसा करना आवश्यक हो।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">कुकीज</h2>
              <p className="text-muted-foreground leading-relaxed">
                हमारी वेबसाइट कुकीज का उपयोग कर सकती है आपके अनुभव को बेहतर बनाने के लिए। 
                आप अपने ब्राउजर सेटिंग्स में कुकीज को अक्षम कर सकते हैं।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">आपके अधिकार</h2>
              <p className="text-muted-foreground leading-relaxed">
                आपको अपनी व्यक्तिगत जानकारी का अनुरोध, संशोधन या हटाने का अधिकार है। 
                किसी भी अनुरोध के लिए हमसे संपर्क करें।
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">संपर्क करें</h2>
              <p className="text-muted-foreground leading-relaxed">
                यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">ईमेल:</strong> akashvats189@gmail.com</p>
                <p><strong className="text-foreground">फोन:</strong> +91 89588 92468</p>
              </div>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
                यह नीति अंतिम अपडेट की गई थी: {new Date().toLocaleDateString('hi-IN')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
