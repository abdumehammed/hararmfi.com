import { LanguageOption } from '../types';
import { Service } from '../types';
import {BarChart4,PiggyBank,Landmark,BadgePercent,HandCoins,UsersRound 
} from 'lucide-react';

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: 'Us' },
  { code: 'am', name: 'አማርኛ', flag: 'አማ' },
  { code: 'om', name: 'Afaan Oromoo', flag: 'Or' },
  { code: 'hr', name: 'Harari', flag: 'ህረ' },
];

export const translations = {
  en: {
    //institution's Name
    institutionTitle: 'Harar Microfinance',
    institutionTitle2: 'Institute',

    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',

    // Home page
    aboutus: 'About Us',
    aboutusparagraph1: 'Harar Credit and Saving Institution S.C was established in 2005 G.C. with the mission of supporting micro and small-scale businesses in Harari Regional State. Founded by Harari Regional State along with seven other visionary shareholders, the institution started with an initial capital of 1,000,000 birr and officially began operations in September 2005',
    aboutusparagraph2: 'Since its inception, the institution has expanded its services, opening three branch offices. Initially offering two loan products Group Loans and MSE Loans the institution now provides more than Twenty one diversified loan products, responding to the growing demand for its services.',
    aboutusparagraph3: 'We have 18 years of operation and a well-established customer base of more than 14,160 active customers. We manages a substantial asset value of 429 million and boasts a paid-up capital of 302 million. Our company operates with a skilled workforce of over 45 employees across 4 branches, contributing to its continued growth and success',
    more:'More',
    /* Features section*/
    whyus:'Why Us',
    feature1_title:' Trusted Company',
    feature1_paragraph:'We are a trusted institute with a proven track record of providing reliable financial services to our clients. Our commitment to transparency and integrity ensures that you can trust us with your financial needs.',
    feature2_title:' Operational Excellence',
    feature2_paragraph:' We deliver financial solutions with speed and ease. Our streamlined processes ensure that you receive prompt, hassle-free service tailored to your needs, making your financial management straightforward and accessible.',
    feature3_title:' Flexible Plans',
    feature3_paragraph:'We offer diversified financial plans tailored to the diverse needs of our customers. As a trusted institution, and we are committed to helping clients achieve self-sustainability with solutions that adapt to their unique circumstances.',
    feature4_title:' Modern Technology', 
    feature4_paragraph:'we utilize the latest core banking Solution which allows us to serve you with innovative and efficient way. Our modern tools and systems ensure seamless service to enhance your financial experience.',


    servicesTitle: 'Products & Services',
    servicesSubtitle: 'Financial solutions tailored to your needs',
    service_title1:' Saving Products',
    service1_paragraph1:'we offer different types of savings products designed to help clients build financial security with flexible terms and competitive interest rates. Whether for short-term needs or long-term goal',

    service2_title:' Loan Products',
    service2_paragraph:' We provide tailored loan solutions to empower businesses and individuals with flexible repayment options and competitive rates. Our loans are designed to support your growth.',

    service3_title:' Islamic Products',
    service3_paragraph:'Our Sharia-compliant products ensure ethical and halal methods for both saving and loans by offering interest-free solutions to meet your financial needs while strictly adhering to Islamic law.',

    service4_title:' Modern Technology',
    service4_paragraph:'we utilize the latest core banking Solution which allows us to serve you with innovative and efficient way. Our modern tools and systems ensure seamless service to enhance your financial experience.',
    // Services section

    // About section
    aboutTitle: 'About Us',
    aboutSubtitle: 'Our mission and vision',
    ourMission: 'Our Mission',
    missionText: 'We are committed to providing financial services to underserved communities, fostering economic growth and financial inclusion.',
    ourVision: 'Our Vision',
    visionText: 'A world where everyone has access to fair and transparent financial services to improve their lives and communities.',
    ourValues: 'Our Values',


    // Blog section
    blogTitle: 'Latest News',
    blogSubtitle: 'Stay updated with our latest news and insights',
    readMore: 'Read More',

    // Contact section
    contactTitle: 'Get in Touch',
    contactSubtitle: 'We\'d love to hear from you',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',

    // Footer
    quickLinks:'Quick Links',
    contactUs:'Contact Us',
    location:'Charleville Ave., Harar',
    Country:'Ethiopia',
    copyright: ' Harar Microfinance Institution. All rights reserved.',
    footerparagraph1:'Empowering communities through accessible financial services since 2005 ',
    workingHours:'Working Hours',
    mondayToFriday:' Monday To Friday',
    morningHours:'Morning: 8:00 AM – 12:00 PM', 
    afternoonHours:'Afternoon: 2:00 PM – 5:30 PM',
    Saturday:' Saturday',
    saturdayHours:'Morning: 8:00 AM – 12:00 PM', 
    
    servicests:[
      {
        id: '1',
        title: 'Microloans',
        description: 'Small loans designed to help entrepreneurs start or grow their businesses and individuals meet their financial needs.',
        icon: 'HandCoins'
      },
      {
        id: '2',
        title: 'Savings Accounts',
        description: 'Secure savings accounts with competitive interest rates to help you build financial security for the future.',
        icon: 'PiggyBank'
      },
      {
        id: '3',
        title: 'Financial Education',
        description: 'Workshops and resources designed to improve financial literacy and money management skills.',
        icon: 'BarChart4'
      },
      {
        id: '4',
        title: 'Group Lending',
        description: 'Collaborative lending programs that leverage community bonds to provide access to capital.',
        icon: 'UsersRound'
      },
      {
        id: '5',
        title: 'Insurance Products',
        description: 'Affordable insurance options to protect your family, health, and business against unexpected events.',
        icon: 'Landmark'
      },
      {
        id: '6',
        title: 'Credit Building',
        description: 'Programs designed to help establish and improve your credit history for better financial opportunities.',
        icon: 'BadgePercent'
      }
    ],
    // Blog posts
    BlogPosts: [
      {
        id: '1',
        title: 'New Microloan Program Launches for Rural Entrepreneurs',
        slug: 'new-microloan-program-launches',
        excerpt: 'Our institution is proud to announce a new microloan program specifically designed for rural entrepreneurs.',
        content: `
          <p>Our institution is proud to announce a new microloan program specifically designed for rural entrepreneurs. This initiative aims to bridge the financial gap that many rural business owners face when trying to access capital.</p>
          
          <p>The program offers loans ranging from $500 to $5,000 with flexible repayment terms and competitive interest rates. What makes this program unique is its focus on agricultural enterprises and rural crafts, recognizing the specific challenges these sectors face.</p>
          
          <p>In addition to financial support, loan recipients will have access to business coaching and networking opportunities to help ensure their success. Our team has worked diligently to design a program that addresses not only the financial needs but also the educational and community support aspects necessary for sustainable business growth.</p>
          
          <p>Applications for the first round of funding will open next month. Interested entrepreneurs can attend one of our upcoming information sessions to learn more about eligibility requirements and the application process.</p>
          
          <p>This program represents our ongoing commitment to financial inclusion and economic development in underserved communities. We believe that by empowering rural entrepreneurs, we can help build stronger, more resilient local economies.</p>
        `,
        date: '2025-05-15',
        imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Maria Johnson'
      },
      {
        id: '2',
        title: 'Financial Literacy Workshop Series Reaches 1,000 Participants',
        slug: 'financial-literacy-workshop-milestone',
        excerpt: 'Our financial literacy workshop series has now reached the milestone of educating 1,000 community members.',
        content: `
          <p>We are thrilled to announce that our financial literacy workshop series has now reached the milestone of educating 1,000 community members. This achievement represents a significant step in our mission to promote financial inclusion and empowerment.</p>
          
          <p>The workshop series, which began two years ago, covers essential topics such as budgeting, saving, credit management, and investment basics. Designed to be accessible to people of all educational backgrounds, our workshops use practical examples and interactive exercises to make financial concepts easy to understand and apply.</p>
          
          <p>Feedback from participants has been overwhelmingly positive, with many reporting improved confidence in managing their finances and making financial decisions. Several participants have gone on to start savings accounts, establish emergency funds, or launch small businesses with the knowledge gained from our workshops.</p>
          
          <p>The success of this program highlights the critical need for financial education in our communities. Moving forward, we plan to expand the workshop series to reach even more individuals and families, with new modules on digital banking, retirement planning, and entrepreneurial finance.</p>
          
          <p>We extend our sincere thanks to our dedicated facilitators, community partners, and all the participants who have made this milestone possible. Together, we are building a more financially literate and empowered community.</p>
        `,
        date: '2025-04-22',
        imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'David Chen'
      },
      {
        id: '3',
        title: 'Impact Study Shows Positive Results of Our Microfinance Programs',
        slug: 'impact-study-positive-results',
        excerpt: 'A recent independent study has confirmed the positive impact of our microfinance programs on local communities.',
        content: `
          <p>A recent independent study has confirmed the positive impact of our microfinance programs on local communities. The comprehensive assessment, conducted over the past year, evaluated the economic and social outcomes for program participants compared to similar non-participants.</p>
          
          <p>The study found that our microfinance clients experienced an average income increase of 27% over the two-year period following their first loan. Additionally, 68% of clients reported being able to invest in education for their children, 55% improved their housing conditions, and 73% felt more confident about their financial future.</p>
          
          <p>Beyond the direct economic benefits, the study highlighted several important social impacts. These included increased community engagement, higher rates of female empowerment in households where women were the primary borrowers, and stronger local business networks among program participants.</p>
          
          <p>The research also identified areas for improvement, including the need for more targeted support for specific industry sectors and enhanced financial literacy training. We are already working to implement these recommendations in our program updates.</p>
          
          <p>We are immensely proud of these results, which validate our approach and the hard work of our clients. This study reinforces our commitment to continually refine our programs to maximize positive impact and address the evolving needs of the communities we serve.</p>
        `,
        date: '2025-03-10',
        imageUrl: 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Sarah Nguyen'
      },
      {
        id: '4',
        title: 'Partnership with Local Government Expands Access to Financial Services',
        slug: 'partnership-local-government',
        excerpt: 'We\'ve established a new partnership with the local government to bring financial services to underserved areas.',
        content: `
          <p>We are excited to announce a groundbreaking partnership with the local government aimed at expanding access to financial services in underserved areas. This collaboration will enable us to reach communities that have historically had limited access to banking and credit facilities.</p>
          
          <p>The initiative includes the establishment of new service points in five rural districts, mobile banking units that will visit remote villages on a weekly schedule, and a digital banking platform specifically designed for users with limited technological access or experience.</p>
          
          <p>This partnership represents a significant commitment from both our institution and the local government to address financial exclusion. The government is providing infrastructure support and regulatory facilitation, while we bring our financial expertise, products, and services tailored to the needs of these communities.</p>
          
          <p>Community response to the announcement has been enthusiastic, with local leaders expressing optimism about the potential economic benefits. Many residents in the target areas currently rely on informal financial systems or must travel long distances to access banking services.</p>
          
          <p>We believe this model of public-private partnership has the potential to create lasting positive change in financial inclusion. If successful, it could serve as a template for similar initiatives in other regions facing similar challenges.</p>
        `,
        date: '2025-02-18',
        imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: 'Robert Kimani'
      }

    ],
    title: 'Loan Calculator',
    amount: 'Loan Amount (ETB)',
    interest: 'Annual Interest Rate (%)',
    term: 'Loan Term (Years)',
    calculate: 'Calculate',
    monthlyPayment: 'Estimated Monthly Payment',
    schedule: 'Repayment Schedule',
    month: 'Month',
    payment: 'Payment',
    interestPaid: 'Interest',
    principalPaid: 'Principal',
    balance: 'Balance',

    // Chatbot
    chatbotTitle: 'How can we help you?',
    chatbotPlaceholder: 'Type your question...',
    chatbotWelcome: 'Hello! I\'m here to help. Please select an option below or type your question.',
    selectOption: 'Select an option',
    backToMenu: 'Back to menu',
    chatbotDefaultResponse: 'I\'m sorry, I don\'t have information on that specific topic. Please select one of the available options from the menu.',


  // FactsStats English

  // atAGlance: 'At a Glance',
  labelAactiveCustomers: 'Active Customers',
  valueAactiveCustomers: 14160 ,
  AactiveCustomerssuffix: ' +',

  labelTotalCapital: 'Paid Capital ',
  valueTotalCapital: 302,
  TotalCapitalsuffix: ' M +',

  labelBranches: 'Branches',
  valueBranches: 4,
  Branchessuffix: '  +',

  labelYearsOfOperation: 'Years of Operation',
  valueYearsOfOperation: 18,
  suffix: '+',
  },
  am: {
    //institution's Name
    institutionTitle: 'ሐረር ብድርና ቁጠባ',
    institutionTitle2: 'ተቋም ',
    
    // Navigation
    home: 'መነሻ',
    about: 'ስለ እኛ',
    services: 'አገልግሎቶች',
    blog: 'ዜና',
    contact: 'ያግኙን',

    // Home page
    aboutus: 'ስለ  እኛ',
    aboutusparagraph1: 'የሐረር ብድርና ቁጠባ ተቋም አማ በ ፩፱፱፯ አም በጥቃቅንና አነስተኛ ስራዎች ላይ ለተሰማሩ የክልሉ ና የ አካባቢው የህብረተሰብ ክፍሎችን በፋይናንስ ለማገዝ በማለም በ ክልሉ መንግስት እና በ ፯ ባለ ራዕይ ሼርሆልደሮች  የተቋቋመ ተቋም ነው ። ተቋማችን በ ፩ ሚ ብር መነሻ ካፒታል ለህብረተሰቡ ተደራሽ የሆነ  የፋይናንስ አማራጭ በማቅረብ በ ፩፱፱፯ ስራውን ሀ ብሎ ጀምሯል ',
    aboutusparagraph2: 'ከተቋቋመበት ጊዜ ኣንስቶ ትቋሙ ኣገልግሎቱንና ተደራሽነቱን በማስፋት ተጨማኢ ፫ ቅርንጫፎጭን መክፈት ችሏል ።በተጨማሪም ተቋሙ ይሰጣቸው ከነበሩ የማህበር ና የጥቃቅንና አነስተኛ ብድሮች ተጨማሪ ሌሎች የብደርና ተቀማጭ አገልግሎቶችን በማከል ከሀያ አንድ በላይ አገልግሎቶችን በማቅረብ ላይ ይገኛል',
    more:'ተጨማሪ',
    aboutusparagraph3: 'የሐረር ብድርና ቁጠባ ተቋም አማ በ ፩፱፱፯ አም በጥቃቅንና አነስተኛ ስራዎች ላይ ለተሰማሩ የክልሉ ና የ አካባቢው የህብረተሰብ ክፍሎችን በፋይናንስ ለማገዝ በማለም በ ክልሉ መንግስት እና በ ፯ ባለ ራዕይ ሼርሆልደሮች  የተቋቋመ ተቋም ነው ። ተቋማችን በ ፩ ሚ ብር መነሻ ካፒታል ለህብረተሰቡ ተደራሽ የሆነ  የፋይናንስ አማራጭ በማቅረብ በ ፩፱፱፯ ስራውን ሀ ብሎ ጀምሯል ',

      /* Features section*/
    whyus:'ለምን ይመርጡናል',
    feature1_title:' ታማኝ ተቋም',
    feature1_paragraph:'ለደንበኞቻችን አስተማማኝ የፋይናንስ አገልግሎት በመስጠት ረገድ የተረጋገጠ ልምድ ያለን ታማኝ ተቋም ስለሆንን እንዲሁም ለተለያዩ የፋይናንስ ፍላጎቶ አስተማማኝ የሆነ በግልጽነት እና ታማኝነት ላይ የተመሰረተ ግልጋሎቶችን ስለምንሰጥ',
    feature2_title:'የላቀ አገልግሎት',
    feature2_paragraph:'ያልወሳሰበ ፣ ተደራሽ ፣ ቀላል እና ፈጣን  የፋይናንስ አገልግሎቶችን  እናቀርባለን።የፋይናንስ አገልግሎትን በፍጥነት እና በቀላል እናቀርባለን። ያልተወሳሰበና  የተስተካከሉ የፋይናንስ  ሂደቶች በመከተል ለፍላጎቶችዎ  ፈጣን፣ ቀላል ና ምቹ አገልግሎችን እንዲያገኙ በማድረግ የፋይናንስ አስተዳደርን ቀጥተኛ እና ተደራሽ በማድረግ',
    feature3_title:' የተለያዩ አማራጮች',
    feature3_paragraph:'በደንበኞች ምርጫ ላይ ተመርኩዘን የተለያዩ ተለዋዋጭ የፋይናንስ እቅዶችን  እናቀርባለን።የተለያዩ የፋይናንስ  አማራጮችን  በማዘጋጀት ከደንበኞች የግል ሁኔታ ጋር  የሚጣጣሙ መፍትሄዎችን በመስጠት ደንበኞቻችን በማቋቋም ተደራሽ የሆነ የፋይናንስ ስርዐት ኢንዲኖር በማድረግ ላይ ስለምንገኝ',    
    feature4_title:' ዘመናዊ ቴክኖሎጂ',
    feature4_paragraph:'ዘመኑ በደረሰበት የ ኮር ባንኪንግ ቴክኖሎጂ በመታገዝ ደንበኞቻችንን ቀልጣፋና አስተማማን በሆነ መንገደ በማገልገል ላይ እንገኛለን። የምንጠቀማቸው  ዘመናዊ መሳሪያዎች እና ሲስተሞች የእርስዎን የፋይናንስ ተሞክሮ ለማሻሻል እና እንከን አልባ አገልግሎትን ለመስጠት ያስችሉናል።',


    // Services section

    servicesTitle: 'አገልግሎቶች',
    servicesSubtitle: ' ፍላጎቶን የተመረኮዙ የተለያዩ የፋይናንስ አማራጮች',
    service_title1:' የቁጠባ አገልግሎቶች',
    service1_paragraph1:'የተለያዩ የቁጠባ አይነቶችን እናቀርባለን ። የቁጠባ አይነቶቻችን የደንበኞቻችንን የተጠቃሚነት የሚያረጋግጥ እንዲሁም ለፍላጎታቸው የተሰናዳ ነው ። በምናቀርበው ተወዳዳሪ የወለድ መጠን መሰረት ቁጠባዎን በፈለጉት መልኩ በረጅምም ሆነ በ አጭር ጊዜ ማስቀመጥ ያስችሎታል',

    service2_title:' የብድር አገልግሎቶች',
    service2_paragraph:' ለርሶ የንግድ ስራ እንዲሁም የግል ፍላጎት ተስማሚ የሆኑ የብድር አማራጮችን እናቀርባለን። በተለያዩ የክፍያ አማራጮችን በማቅረብ የርሶን እድገት ለመደገፍ እንሰራለን::',

    service3_title:' ከወለድ ነጻ አገልግሎቶች',
    service3_paragraph:'ከወለድ ነጻ  እንዲሁም የሸሪዓ መርህ  የተከተሉ የተለያዩ የቁጠባና የብድር አማራጮችን እናቀርባለን ። ወለድ የማይጠቀሙ ደንበኞችን ያማከለ ልዩ ከወለድ ነጻ ግልጋሎቶችን እኛ ጋር ያገኛሉ::',


    // About section
    aboutTitle: 'ስለ እኛ',
    aboutSubtitle: 'TRANSLATION NEEDED',
    ourMission: 'TRANSLATION NEEDED',
    missionText: 'TRANSLATION NEEDED',
    ourVision: 'TRANSLATION NEEDED',
    visionText: 'TRANSLATION NEEDED',
    ourValues: 'TRANSLATION NEEDED',

    // Blog section
    blogTitle: 'TRANSLATION NEEDED',
    blogSubtitle: 'TRANSLATION NEEDED',
    readMore: 'TRANSLATION NEEDED',

    // Contact section
    contactTitle: 'TRANSLATION NEEDED',
    contactSubtitle: 'TRANSLATION NEEDED',
    yourName: 'TRANSLATION NEEDED',
    yourEmail: 'TRANSLATION NEEDED',
    subject: 'TRANSLATION NEEDED',
    message: 'TRANSLATION NEEDED',
    send: 'TRANSLATION NEEDED',


  // Footer
    quickLinks:'ወደ',
    contactUs:'ያግኙን',
    location:'Charleville Ave., ሐረር ',
    Country:'ኢትዮጵያ',
    copyright: ' ሐረር ብድርና ቁጠባ ተቋም ። መብቱ በህግ የተጠበቀ ነው። ',
    footerparagraph1:'Empowering communities through accessible financial services since 2005 ',
    workingHours:'የስራ ሰዓት',
    mondayToFriday:' ከሰኞ እስከ አርብ',
    morningHours:'ጠዋት: 2:00  – 6:00', 
    afternoonHours:'ከሰአት: 8:00  – 11:30',
    Saturday:' ቅዳሜ',
    saturdayHours:'ጠዋት: 2:00 – 6:00 ',


    // Chatbot
    chatbotTitle: 'TRANSLATION NEEDED',
    chatbotPlaceholder: 'TRANSLATION NEEDED',
    chatbotWelcome: 'TRANSLATION NEEDED',
    selectOption: 'TRANSLATION NEEDED',
    backToMenu: 'TRANSLATION NEEDED',
    chatbotDefaultResponse: 'TRANSLATION NEEDED',
     
    // FactsStats
      labelAactiveCustomers: 'ደንበኞች',
      valueAactiveCustomers: 14160 ,
      AactiveCustomerssuffix: ' +',

      labelTotalCapital: 'የተከፈለ ካፒታል',
      valueTotalCapital: 302,
      TotalCapitalsuffix: ' ሚ +',

      labelBranches: 'ቅርንጫፎች',
      valueBranches: 4,
      Branchessuffix: ' +',

      labelYearsOfOperation: 'የሥራ ዓመታት',
      valueYearsOfOperation: 18,
      suffix: ' +',
  },
  om: {
    institutionTitle: 'waldaa liqii qusannaa  ',
    institutionTitle2: 'Harar',
    // Navigation
    home: 'Bakka',
    about: 'Nuufaa',
    services: 'Tajaajiloota',
    blog: 'Blogger',
    contact: 'Nu qunnami',

    // Home page
    slideTitle1: 'TRANSLATION NEEDED',
    slideSubtitle1: 'TRANSLATION NEEDED',
    slideTitle2: '',
    slideSubtitle2: '',
    slideTitle3: '',
    slideSubtitle3: '',
    aboutus: 'ስለ እኛ',
    aboutusparagraph1: 'የሐረር የማይክሮ ፋይናንስ ተቋም አማ ፣የኢኮኖሚ ዕድገትን እና የፋይናንስ ዘላቂነትን ለማጎልበት ቁርጠኛ የሆነ ተቋም ነው ስለሆነም ይህን ለማሳለጥ  በገጠርም ሆነ በከተማ ውስጥ ያሉ ግለሰቦች እና ኢንተርፕራይዞች አስፈላጊ እና ተደራሽ የሆነ የፋይናንስ አገልግሎት በመስጠት  ላይ ነው።ዝቅተኛ ገቢ ባላቸው የህብረተሰብ ክፍሎች ላይ በማነጣጠር ደንበኞቻችን የፋይናንስ ነጻነት እንዲያረጋግጡ ና  የኑሮ ሁኔታቸውን በማሻሻል ለማህበረሰባቸው ልማት በንቃት እንዲሳተፉ እናደርጋለን',
    aboutusparagraph2: 'TRANSLATION NEEDED',
     more:'Translation needed',
    // Services section
    servicesTitle: 'Tajaajiloota',
    servicesSubtitle: 'TRANSLATION NEEDED',
    servicesDescription: 'TRANSLATION NEEDED',
    service1: 'TRANSLATION NEEDED',
    service2: 'TRANSLATION NEEDED',
    service3: 'TRANSLATION NEEDED',
    service4: 'TRANSLATION NEEDED',
    service5: 'TRANSLATION NEEDED',
    service6: 'TRANSLATION NEEDED',
    service7: 'TRANSLATION NEEDED',

    // About section
    aboutTitle: 'Nuufaa',
    aboutSubtitle: 'TRANSLATION NEEDED',
    ourMission: 'TRANSLATION NEEDED',
    missionText: 'TRANSLATION NEEDED',
    ourVision: 'TRANSLATION NEEDED',
    visionText: 'TRANSLATION NEEDED',
    ourValues: 'TRANSLATION NEEDED',

    // Blog section
    blogTitle: 'TRANSLATION NEEDED',
    blogSubtitle: 'TRANSLATION NEEDED',
    readMore: 'TRANSLATION NEEDED',

    // Contact section
    contactTitle: 'Nu qunnami',
    contactSubtitle: 'TRANSLATION NEEDED',
    yourName: 'TRANSLATION NEEDED',
    yourEmail: 'TRANSLATION NEEDED',
    subject: 'TRANSLATION NEEDED',
    message: 'TRANSLATION NEEDED',
    send: 'TRANSLATION NEEDED',

    // Footer
    copyright: 'TRANSLATION NEEDED',
    privacy: 'TRANSLATION NEEDED',
    terms: 'TRANSLATION NEEDED',
    footerparagraph1:'Empowering communities through accessible financial services since 2005 ',


    // Chatbot
    chatbotTitle: 'TRANSLATION NEEDED',
    chatbotPlaceholder: 'TRANSLATION NEEDED',
    chatbotWelcome: 'TRANSLATION NEEDED',
    selectOption: 'TRANSLATION NEEDED',
    backToMenu: 'TRANSLATION NEEDED',
    chatbotDefaultResponse: 'TRANSLATION NEEDED',
  },
  hr: {
    institutionTitle: 'ሐረር ሊቂህ ዋ ቂሊ ቂሊ  ',
    institutionTitle2: 'ታእሲስ',
    // Navigation
    home: 'Bakka',
    about: 'Nuufaa',
    services: 'Tajaajiloota',
    blog: 'Blogger',
    contact: 'Nu qunnami',
    // Home page
    slideTitle1: 'TRANSLATION NEEDED',
    slideSubtitle1: 'TRANSLATION NEEDED',
    slideTitle2: '',
    slideSubtitle2: '',
    slideTitle3: '',
    slideSubtitle3: '',
    aboutus: 'TRANSLATION NEEDED',
    aboutusparagraph1: 'TRANSLATION NEEDED',
    aboutusparagraph2: 'TRANSLATION NEEDED',
    more:'TRANSLATION NEEDED',
    // Services section
    servicesTitle: 'አገልግሎቶች',
    servicesSubtitle: 'የገንዘብ መፍትሔዎች ወደ ወደፊት ይመራሉ', // Review this translation
    servicesDescription: 'የገንዘብ መፍትሔዎች ወደ ወደፊት ይመራሉ', // Review this translation
    service1: 'TRANSLATION NEEDED',
    service2: 'TRANSLATION NEEDED',
    service3: 'TRANSLATION NEEDED',
    service4: 'TRANSLATION NEEDED',
    service5: 'TRANSLATION NEEDED',
    service6: 'TRANSLATION NEEDED',
    service7: 'TRANSLATION NEEDED',
    // About section
    aboutTitle: 'Nuufaa',
    aboutSubtitle: 'TRANSLATION NEEDED',
    ourMission: 'TRANSLATION NEEDED',
    missionText: 'TRANSLATION NEEDED',
    ourVision: 'TRANSLATION NEEDED',
    visionText: 'TRANSLATION NEEDED',
    ourValues: 'TRANSLATION NEEDED',
    // Blog section
    blogTitle: 'TRANSLATION NEEDED',
    blogSubtitle: 'TRANSLATION NEEDED',
    readMore: 'TRANSLATION NEEDED',
    // Contact section
    contactTitle: 'Nu qunnami',
    contactSubtitle: 'TRANSLATION NEEDED',
    yourName: 'TRANSLATION NEEDED',
    yourEmail: 'TRANSLATION NEEDED',
    subject: 'TRANSLATION NEEDED',
    message: 'TRANSLATION NEEDED',
    send: 'TRANSLATION NEEDED',
    // Footer
    copyright: 'TRANSLATION NEEDED',
    privacy: 'TRANSLATION NEEDED',
    terms: 'TRANSLATION NEEDED',
    footerparagraph1:'Empowering communities through accessible financial services since 2005 ',

    // Chatbot
    chatbotTitle: 'TRANSLATION NEEDED',
    chatbotPlaceholder: 'TRANSLATION NEEDED',
    chatbotWelcome: 'TRANSLATION NEEDED',
    selectOption: 'TRANSLATION NEEDED',
    backToMenu: 'TRANSLATION NEEDED',
    chatbotDefaultResponse: 'TRANSLATION NEEDED',
  },
};





export const services: Service[] = [
  {
    id: '1',
    title: 'Microloans',
    description: 'Small loans designed to help entrepreneurs start or grow their businesses and individuals meet their financial needs.',
    icon: 'HandCoins'
  },
  {
    id: '2',
    title: 'Savings Accounts',
    description: 'Secure savings accounts with competitive interest rates to help you build financial security for the future.',
    icon: 'PiggyBank'
  },
  {
    id: '3',
    title: 'Financial Education',
    description: 'Workshops and resources designed to improve financial literacy and money management skills.',
    icon: 'BarChart4'
  },
  {
    id: '4',
    title: 'Group Lending',
    description: 'Collaborative lending programs that leverage community bonds to provide access to capital.',
    icon: 'UsersRound'
  },
  {
    id: '5',
    title: 'Insurance Products',
    description: 'Affordable insurance options to protect your family, health, and business against unexpected events.',
    icon: 'Landmark'
  },
  {
    id: '6',
    title: 'Credit Building',
    description: 'Programs designed to help establish and improve your credit history for better financial opportunities.',
    icon: 'BadgePercent'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'HandCoins':
      return HandCoins;
    case 'PiggyBank':
      return PiggyBank;
    case 'BarChart4':
      return BarChart4;
    case 'UsersRound':
      return UsersRound;
    case 'Landmark':
      return Landmark;
    case 'BadgePercent':
      return BadgePercent;
    default:
      return HandCoins;
  }
};