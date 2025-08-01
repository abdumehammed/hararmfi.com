import { ChatbotOption } from '../types';

export const getChatbotOptions = (language: string): ChatbotOption[] => {
  const options = {
    en: [
      {
        id: '1',
        label: 'How do I apply for a loan?',
        response: 'To apply for a loan, you need to visit our nearest branch with your ID, proof of address, and proof of income. Alternatively, you can start your application online through our website. Our team will guide you through the process and help you choose the right loan product for your needs.'
      },
      {
        id: '2',
        label: 'What are your interest rates?',
        response: 'Our interest rates vary depending on the loan product, amount, term, and your credit profile. For microloans, our rates typically range from 12% to 18% annually. For savings accounts, we offer competitive rates starting from 4% annually. Please contact our customer service or visit a branch for personalized rate information.'
      },
      {
        id: '3',
        label: 'How long does loan approval take?',
        response: "Once you've submitted a complete application with all required documents, the approval process typically takes 2-3 business days for most loans. For smaller microloans, you may receive approval within 24 hours. After approval, fund disbursement usually happens within 1-2 additional business days."
      },
      {
        id: '4',
        label: 'What financial education resources do you offer?',
        response: 'We offer a variety of financial education resources including free workshops, one-on-one financial coaching, online courses, and printed materials on topics like budgeting, saving, credit management, and business planning. Check our events calendar for upcoming workshops or speak with an advisor to schedule a personalized session.'
      },
      {
        id: '5',
        label: 'How can I open a savings account?',
        response: 'Opening a savings account is simple. You can visit any of our branches with your identification documents and an initial deposit (minimum amount varies by account type). You can also start the process online and finish at a branch. We offer various savings products designed for different goals and needs.'
      }
    ],
    am: [
      {
        id: '1',
        label: 'እንዴት ብድር ማመልከት እችላለሁ?',
        response: 'ብድር ለማመልከት የመታወቂያ ካርድዎን፣ የአድራሻ ማረጋገጫ እና የገቢ ማረጋገጫ ይዘው ወደ ቅርብ ቅርንጫፋችን መምጣት ይኖርብዎታል። በአማራጭ በድረ-ገጻችን በኩል የመስመር ላይ ማመልከቻዎን መጀመር ይችላሉ። ቡድናችን በሂደቱ ውስጥ ይመራዎታል እና ለፍላጎትዎ ተስማሚ የሆነውን የብድር ምርት እንዲመርጡ ይረዳዎታል።'
      },
      {
        id: '2',
        label: 'የወለድ መጠኖችዎ ምን ያህል ናቸው?',
        response: 'የወለድ መጠኖቻችን በብድር ምርት፣ መጠን፣ ጊዜ እና የብድር መገለጫዎ ላይ በመመርኮዝ ይለያያሉ። ለጥቃቅን ብድሮች፣ መጠኖቻችን በተለምዶ በዓመት ከ12% እስከ 18% ይደርሳሉ። ለቁጠባ ሂሳቦች፣ ከ4% በዓመት ጀምሮ ተወዳዳሪ መጠኖችን እናቀርባለን። እባክዎ የደንበኛ አገልግሎታችንን ያነጋግሩ ወይም ለግላዊ የመጠን መረጃ ቅርንጫፍ ይጎብኙ።'
      },
      {
        id: '3',
        label: 'የብድር ማጽደቅ ምን ያህል ጊዜ ይወስዳል?',
        response: 'ሁሉንም የሚያስፈልጉ ሰነዶች ያካተተ ሙሉ ማመልከቻ ካቀረቡ በኋላ፣ የማጽደቅ ሂደቱ ለአብዛኛዎቹ ብድሮች በተለምዶ 2-3 የስራ ቀናት ይወስዳል። ለትናንሽ ጥቃቅን ብድሮች፣ በ24 ሰዓት ውስጥ ማጽደቅ ሊያገኙ ይችላሉ። ከማጽደቅ በኋላ፣ የገንዘብ ማሰራጨት በተለምዶ በተጨማሪ 1-2 የስራ ቀናት ውስጥ ይከሰታል።'
      },
      {
        id: '4',
        label: 'ምን የፋይናንስ ትምህርት ሀብቶችን ታቀርባላችሁ?',
        response: 'ነጻ ወርክሾፖች፣ አንድ ለአንድ የፋይናንስ ኮቺንግ፣ የመስመር ላይ ኮርሶች እና እንደ በጀት ማውጣት፣ ቁጠባ፣ የብድር አስተዳደር እና የንግድ እቅድ ባሉ ርዕሶች ላይ የታተሙ ቁሳቁሶችን ጨምሮ የተለያዩ የፋይናንስ ትምህርት ሀብቶችን እናቀርባለን። ለመጪዎቹ ወርክሾፖች የዝግጅቶች ካላንዳራችንን ይመልከቱ ወይም ግላዊ ክፍለ ጊዜ ለማዘጋጀት አማካሪ ያነጋግሩ።'
      },
      {
        id: '5',
        label: 'እንዴት የቁጠባ ሂሳብ መክፈት እችላለሁ?',
        response: 'የቁጠባ ሂሳብ መክፈት ቀላል ነው። የመታወቂያ ሰነዶችዎን እና የመጀመሪያ ተቀማጭ ገንዘብ (ዝቅተኛ መጠን በሂሳብ አይነት ይለያያል) ይዘው ወደ ማንኛውም ቅርንጫፋችን መምጣት ይችላሉ። ሂደቱን በመስመር ላይ ጀምሮ በቅርንጫፍ መጨረስ ይችላሉ። ለተለያዩ ግቦች እና ፍላጎቶች የተነደፉ የተለያዩ የቁጠባ ምርቶችን እናቀርባለን።'
      }
    ],
    om: [
      {
        id: '1',
        label: 'Akkamitti liqii gaafachuu danda\'a?',
        response: 'Liqii gaafachuuf ragaa eenyummaa keessan, ragaa teessoo fi ragaa galii keessan qabattanii gara mana hojii keenya dhihaatti argamu dhufuu qabdu. Filannoo biraan karaa marsariitii keenyaatiin gaafannoo keessan jalqabuu dandeessu. Gareen keenya adeemsa keessatti isin qajeelchaa fi oomisha liqii fedhii keessaniif mijatu filachuuf isin gargaara.'
      },
      {
        id: '2',
        label: 'Dhalaan keessan hammam?',
        response: 'Dhalaan keenya oomisha liqii, hamma, yeroo fi seenaa liqii keessan irratti hundaa\'uudhaan garaagarummaa qaba. Liqii xixiqqaaf, dhalaan keenya akkaataa idileetti waggaatti %12 hanga %18 ta\'a. Herregaa qusannaaf, waggaatti %4 irraa jalqabuun dhalaa dorgommii qabnu dhiyeessina. Maaloo tajaajila maamilaa keenya quunnamaa ykn odeeffannoo dhalaa dhuunfaa argachuuf damee daawwadha.'
      },
      {
        id: '3',
        label: 'Mirkanaa\'inni liqii yeroo hammam fudhata?',
        response: 'Gaafannoo guutuu ragaalee barbaachisan hunda of keessaa qabu erga dhiyeessitanii booda, adeemsi mirkanaa\'inaa akkaataa idileetti liqii baay\'eedhaaf guyyoota hojii 2-3 fudhata. Liqii xixiqqaa xiqqaaf, sa\'aatii 24 keessatti mirkanaa\'ina argachuu dandeessu. Mirkanaa\'ina booda, raabsi maallaqaa akkaataa idileetti guyyoota hojii 1-2 dabalataa keessatti ta\'a.'
      },
      {
        id: '4',
        label: 'Qabeenya barnoota maallaqaa akkamii dhiyeessu?',
        response: 'Warshaalee bilisaa, gorsa maallaqaa nama tokkoof tokko, koorsii toora interneetii fi meeshaalee maxxanfaman mata dureewwan akka baajata, qusannaa, bulchiinsa liqii fi karoora daldalaa irratti dabalatee qabeenya barnoota maallaqaa adda addaa dhiyeessina. Warshaalee dhufuuf kaalaandarii taateewwan keenya ilaalaa ykn gorsitoota waliin dubbachuun qophii dhuunfaa qindeessaa.'
      },
      {
        id: '5',
        label: 'Akkamitti herregaa qusannaa banuu danda\'a?',
        response: 'Herregaa qusannaa banuun salphaa dha. Ragaalee eenyummaa keessanii fi kaffaltii jalqabaa (hamma gadi aanaa gosa herregaatiin garaagarummaa qaba) qabattanii gara damee keenya kamiyyuu dhufuu dandeessu. Adeemsa toora interneetii irratti jalqabdanii damee irratti xumuruus dandeessu. Galma fi fedhii adda addaaf qophaa\'an oomisha qusannaa adda addaa dhiyeessina.'
      }
    ],
    hr: [
      {
        id: '1',
        label: 'እንዴት ብድር ማመልከት እችላለሁ?',
        response: 'ብድር ለማመልከት የመታወቂያ ካርድዎን፣ የአድራሻ ማረጋገጫ እና የገቢ ማረጋገጫ ይዘው ወደ ቅርብ ቅርንጫፋችን መምጣት ይኖርብዎታል። በአማራጭ በድረ-ገጻችን በኩል የመስመር ላይ ማመልከቻዎን መጀመር ይችላሉ። ቡድናችን በሂደቱ ውስጥ ይመራዎታል እና ለፍላጎትዎ ተስማሚ የሆነውን የብድር ምርት እንዲመርጡ ይረዳዎታል።'
      },
      {
        id: '2',
        label: 'የወለድ መጠኖችዎ ምን ያህል ናቸው?',
        response: 'የወለድ መጠኖቻችን በብድር ምርት፣ መጠን፣ ጊዜ እና የብድር መገለጫዎ ላይ በመመርኮዝ ይለያያሉ። ለጥቃቅን ብድሮች፣ መጠኖቻችን በተለምዶ በዓመት ከ12% እስከ 18% ይደርሳሉ። ለቁጠባ ሂሳቦች፣ ከ4% በዓመት ጀምሮ ተወዳዳሪ መጠኖችን እናቀርባለን። እባክዎ የደንበኛ አገልግሎታችንን ያነጋግሩ ወይም ለግላዊ የመጠን መረጃ ቅርንጫፍ ይጎብኙ።'
      },
      {
        id: '3',
        label: 'የብድር ማጽደቅ ምን ያህል ጊዜ ይወስዳል?',
        response: 'ሁሉንም የሚያስፈልጉ ሰነዶች ያካተተ ሙሉ ማመልከቻ ካቀረቡ በኋላ፣ የማጽደቅ ሂደቱ ለአብዛኛዎቹ ብድሮች በተለምዶ 2-3 የስራ ቀናት ይወስዳል። ለትናንሽ ጥቃቅን ብድሮች፣ በ24 ሰዓት ውስጥ ማጽደቅ ሊያገኙ ይችላሉ። ከማጽደቅ በኋላ፣ የገንዘብ ማሰራጨት በተለምዶ በተጨማሪ 1-2 የስራ ቀናት ውስጥ ይከሰታል።'
      },
      {
        id: '4',
        label: 'ምን የፋይናንስ ትምህርት ሀብቶችን ታቀርባላችሁ?',
        response: 'ነጻ ወርክሾፖች፣ አንድ ለአንድ የፋይናንስ ኮቺንግ፣ የመስመር ላይ ኮርሶች እና እንደ በጀት ማውጣት፣ ቁጠባ፣ የብድር አስተዳደር እና የንግድ እቅድ ባሉ ርዕሶች ላይ የታተሙ ቁሳቁሶችን ጨምሮ የተለያዩ የፋይናንስ ትምህርት ሀብቶችን እናቀርባለን። ለመጪዎቹ ወርክሾፖች የዝግጅቶች ካላንዳራችንን ይመልከቱ ወይም ግላዊ ክፍለ ጊዜ ለማዘጋጀት አማካሪ ያነጋግሩ።'
      },
      {
        id: '5',
        label: 'እንዴት የቁጠባ ሂሳብ መክፈት እችላለሁ?',
        response: 'የቁጠባ ሂሳብ መክፈት ቀላል ነው። የመታወቂያ ሰነዶችዎን እና የመጀመሪያ ተቀማጭ ገንዘብ (ዝቅተኛ መጠን በሂሳብ አይነት ይለያያል) ይዘው ወደ ማንኛውም ቅርንጫፋችን መምጣት ይችላሉ። ሂደቱን በመስመር ላይ ጀምሮ በቅርንጫፍ መጨረስ ይችላሉ። ለተለያዩ ግቦች እና ፍላጎቶች የተነደፉ የተለያዩ የቁጠባ ምርቶችን እናቀርባለን።'
      }
    ]
  };

  return options[language as keyof typeof options] || options.en;
};

// Keep the original export for backward compatibility
export const chatbotOptions = getChatbotOptions('en');