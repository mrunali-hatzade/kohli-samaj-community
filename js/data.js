/**
 * Central Data Store for Kohli Samaj Web Portal
 * Structured for seamless backend integration with C# .NET Web API / MVC models.
 */

const initialData = {
    settings: {
        currentLang: 'en',
        fontSize: 'normal' // 'small', 'normal', 'large'
    },
    stats: [
        { id: 1, icon: 'fa-house-chimney', number: '518', label_en: 'Villages', label_mr: 'गावे', note_en: 'Community-reported figure', note_mr: 'समाज-नोंदणीकृत आकडेवारी' },
        { id: 2, icon: 'fa-location-dot', number: '5', label_en: 'Key Districts', label_mr: 'प्रमुख जिल्हे', note_en: 'Bhandara, Gondia, Gadchiroli, Chandrapur, Balaghat', note_mr: 'भंडारा, गोंदिया, गडचिरोली, चंद्रपूर, बालाघाट' },
        { id: 3, icon: 'fa-users', number: 'Lakhs+', label_en: 'Community Members', label_mr: 'समाज बांधव', note_en: 'Across Vidarbha & Urban Centers', note_mr: 'विदर्भ व शहरी भागातील' },
        { id: 4, icon: 'fa-city', number: 'Nagpur, Pune, Mumbai', label_en: 'Urban & Industrial Centers', label_mr: 'प्रमुख शहरी व औद्योगिक केंद्रे', note_en: 'Education, Employment & Business', note_mr: 'शिक्षण, नोकरी व व्यवसाय' }
    ],
    notices: [
        {
            id: 0,
            title_en: 'Urgent Community Appeal: Indian Census 2021 (100 Years after 1911)',
            title_mr: 'अत्यंत महत्त्वाचे: वर्ष 1911 नंतरची 100 वर्षानंतरची भारतीय जनगणना 2021',
            date: '2026-08-01',
            location: 'All Districts (भंडारा, गोंदिया, चंद्रपूर, गडचिरोली)',
            category: 'Census 2021',
            details_en: 'For our community, if we want to accomplish a most vital task, it is the 2021 Indian Census after 100 years since 1911. Everyone must prioritize this task above all else without getting distracted!',
            details_mr: 'आपल्या समाजासाठी एक अत्यंत महत्त्वाचे काम करायचे असेल तर, वर्ष 1911 नंतरची आपल्यासाठीची 100 वर्षानंतरची भारतीय जनगणना 2021, सर्वांनी इतर बाबींमध्ये विचलित न होता प्रथम या कामाला प्राधान्य देणे आवश्यक आहे.'
        },
        {
            id: 1,
            title_en: 'Kohli Samaj Grand Convention (Melava) - 15 June 2026, Bhandara',
            title_mr: 'समाज मेळावा - १५ जून २०२६, भंडारा',
            date: '2026-06-15',
            location: 'Bhandara, Maharashtra',
            category: 'Event',
            details_en: 'Annual grand gathering of the Kohli community discussing agricultural advancements, water conservation projects, and youth empowerment.',
            details_mr: 'कोहळी समाजाचा वार्षिक भव्य मेळावा ज्यामध्ये शेती प्रगती, जलसंवर्धन प्रकल्प आणि युवक सक्षमीकरणावर चर्चा होणार आहे.'
        },
        {
            id: 2,
            title_en: 'State Level Educational Guidance & Career Camp - 22 June 2026',
            title_mr: 'शैक्षणिक मार्गदर्शन शिबीर - २२ जून २०२६',
            date: '2026-06-22',
            location: 'Nagpur & Online',
            category: 'Education',
            details_en: 'Career counseling and scholarship guidance session for Kohli Samaj students preparing for competitive exams and higher education.',
            details_mr: 'स्पर्धा परीक्षा व उच्च शिक्षणासाठी तयारी करणाऱ्या कोहळी समाजातील विद्यार्थ्यांसाठी करिअर समुपदेशन व शिष्यवृत्ती मार्गदर्शन सत्र.'
        },
        {
            id: 3,
            title_en: 'Matrimonial Meet (Vadhu-Var Parichay Melava) - Registration Open',
            title_mr: 'वधू-वर परिचय मेळावा - नोंदणी सुरू',
            date: '2026-07-10',
            location: 'Chandrapur',
            category: 'Matrimonial',
            details_en: 'Registrations are now open for the upcoming Vadhu-Var Parichay Melava. Submit candidate profiles online or via local district representatives.',
            details_mr: 'आगामी वधू-वर परिचय मेळाव्यासाठी नोंदणी सुरू झाली आहे. ऑनलाईन किंवा स्थानिक जिल्हा प्रतिनिधींमार्फत उमेदवारांची माहिती सादर करा.'
        }
    ],
    pillars: [
        {
            id: 'history',
            title_en: 'Our History',
            title_mr: 'आपला इतिहास',
            desc_en: 'The origin, heritage, traditions, and historic journey of the Kohli community across centuries in Central India.',
            desc_mr: 'कोहळी समाजाचा उगम, इतिहास, परंपरा आणि मध्य भारतातील ऐतिहासिक प्रवास.',
            image: 'images/history_arch.jpg'
        },
        {
            id: 'water',
            title_en: 'Water Conservation Heritage',
            title_mr: 'जलसंवर्धन वारसा',
            desc_en: 'Pioneers of Malguzari tanks, bhandaras, and indigenous irrigation networks of Vidarbha region.',
            desc_mr: 'तलाव, बंधारे, सिंचन व्यवस्था आणि जलव्यवस्थापनातील अमूल्य योगदान.',
            image: 'images/water_lake.jpg'
        },
        {
            id: 'culture',
            title_en: 'Culture & Traditions',
            title_mr: 'संस्कृती व परंपरा',
            desc_en: 'Rich festivals, folk traditions, marriage customs, and unique social harmony of Kohli culture.',
            desc_mr: 'परंपरा, सण, उत्सव, विवाह पद्धती आणि आपल्या संस्कृतीची ओळख.',
            image: 'images/culture_tradition.jpg'
        },
        {
            id: 'documents',
            title_en: 'Historical Documents',
            title_mr: 'ऐतिहासिक दस्तऐवज',
            desc_en: 'Archival gazetteers, settlement reports, British census records, and official heritage publications.',
            desc_mr: 'जनगणना, गॅझेटियर, सेटलमेंट रिपोर्ट आणि अन्य महत्त्वाचे ऐतिहासिक संदर्भ.',
            image: 'images/document_scroll.jpg'
        }
    ],
    timeline: [
        {
            id: 1,
            year: '1820s',
            title_en: 'Kohli Malguzari System Established',
            title_mr: 'कोहळी मालगुजारी प्रणाली स्थापित',
            desc_en: 'British colonial administrators formally recognized Kohli community as hereditary Malguzars responsible for maintaining tanks and revenue collection in Central Provinces.',
            desc_mr: 'ब्रिटिश वसाहती प्रशासकांनी कोहळी समाजाला वंशपरंपरागत मालगुजार म्हणून अधिकृत मान्यता दिली.'
        },
        {
            id: 2,
            year: '1867',
            title_en: 'Central Provinces Gazetteer Record',
            title_mr: 'सेंट्रल प्रॉव्हिन्सेस गॅझेटियर नोंद',
            desc_en: 'Historical reference documenting Kohli community as master tank-builders (Malguzars) in Bhandara and Chanda districts. The gazetteer praised Kohli-built bhandaras as engineering marvels.',
            desc_mr: 'भंडारा व चांदा जिल्ह्यातील कोहळी समाजाला तलाव निर्माते (मालगुजार) म्हणून नोंदवणारा ऐतिहासिक दस्तावेज.'
        },
        {
            id: 3,
            year: '1870',
            title_en: 'Chanda Settlement Report',
            title_mr: 'चांदा सेटलमेंट रिपोर्ट',
            desc_en: 'Official settlement records detailing agricultural landholdings, irrigation structures, and village leadership. Documented over 400 Kohli-owned tanks in the Chanda district alone.',
            desc_mr: 'कृषी जमीन, सिंचन रचना आणि गाव नेतृत्वाचा तपशील देणारे अधिकृत सेटलमेंट अहवाल.'
        },
        {
            id: 4,
            year: '1881',
            title_en: 'Census of India Documentation',
            title_mr: 'सेन्सस ऑफ इंडिया नोंद',
            desc_en: 'Demographic and socio-economic classification documenting the industrious nature of Kohlis. Census recorded 80,000+ Kohli community members across Central Provinces.',
            desc_mr: 'कोहळी समाजाच्या उद्योगशील आणि जलतज्ज्ञ स्वरूपाचे सामाजिक-आर्थिक वर्गीकरण.'
        },
        {
            id: 5,
            year: '1891',
            title_en: 'Census of India Record',
            title_mr: 'भारतीय जनगणना नोंद',
            desc_en: 'Historical population and demographic census records for the Kohli community across the Central Provinces.',
            desc_mr: 'मध्य प्रांतातील कोहळी समाजाच्या लोकसंख्येची आणि लोकसंख्याशास्त्राची ऐतिहासिक जनगणना नोंद.'
        },
        {
            id: 6,
            year: '1901',
            title_en: 'Census of India Record',
            title_mr: 'भारतीय जनगणना नोंद',
            desc_en: 'Historical census documentation recording population and household statistics of the Kohli community in regional districts.',
            desc_mr: 'प्रादेशिक जिल्ह्यांमधील कोहळी समाजाच्या लोकसंख्येची आणि घरगुती आकडेवारीची नोंद करणारा ऐतिहासिक जनगणना दस्तऐवज.'
        },
        {
            id: 7,
            year: '1909',
            title_en: 'Chanda Gazetteer (1st Edition)',
            title_mr: 'चांदा गॅझेटियर (पहिली आवृत्ती)',
            desc_en: 'Comprehensive geographical and historical study highlighting indigenous water engineering marvels. Described Kohli Malguzars as "the backbone of agricultural prosperity in Vidarbha."',
            desc_mr: 'स्थानिक जल अभियांत्रिकीच्या आश्चर्यांवर प्रकाश टाकणारा सर्वसमावेशक भौगोलिक व ऐतिहासिक अभ्यास.'
        },
        {
            id: 8,
            year: '1911',
            title_en: 'Census of India Documentation',
            title_mr: 'भारतीय जनगणना दस्तऐवज',
            desc_en: 'Historical demographic record documenting the agricultural association and distribution of the Kohli community across Central Provinces.',
            desc_mr: 'मध्य प्रांतातील कोहळी समाजाचे कृषी संबंध आणि लोकसंख्या वितरणाची नोंद करणारा ऐतिहासिक लोकसंख्याशास्त्रीय दस्तऐवज.'
        },
        {
            id: 9,
            year: '1916',
            title_en: 'R. V. Russell - Tribes & Castes Documentation',
            title_mr: 'आर. व्ही. रसेल - ट्राईब्स अँड कास्ट्स नोंद',
            desc_en: 'The Tribes and Castes of the Central Provinces of India published, providing historical population records, agricultural associations, and origin traditions of the Kohli community.',
            desc_mr: '‘द ट्राईब्स अँड कास्ट्स ऑफ द सेंट्रल प्रॉव्हिन्सेस ऑफ इंडिया’ प्रकाशित, ज्यामध्ये कोहळी समाजाची ऐतिहासिक लोकसंख्या नोंद, कृषी संबंध आणि उत्पत्तीच्या परंपरांचा समावेश आहे.'
        },
        {
            id: 10,
            year: '1920',
            title_en: 'Bhandara District Gazetteer Published',
            title_mr: 'भंडारा जिल्हा गॅझेटियर प्रकाशित',
            desc_en: 'Detailed account of Bhandara district recognizing Kohli community\'s 850+ tanks and their role in sustaining paddy cultivation for the entire Vidarbha region.',
            desc_mr: 'भंडारा जिल्ह्यातील कोहळी समाजाच्या ८५०+ तलावांचे आणि भात शेतीतील योगदानाचे तपशीलवार वर्णन.'
        },
        {
            id: 11,
            year: '1947',
            title_en: 'Independence & Community Reorganization',
            title_mr: 'स्वातंत्र्य व समाज पुनर्गठन',
            desc_en: 'Post-independence, Kohli Samaj organizations were formally established across Maharashtra and Madhya Pradesh to preserve heritage and serve community welfare.',
            desc_mr: 'स्वातंत्र्यानंतर महाराष्ट्र व मध्य प्रदेशात कोहळी समाज संघटनांची औपचारिक स्थापना.'
        },
        {
            id: 12,
            year: '1973',
            title_en: 'Maharashtra State Gazetteer (Revised)',
            title_mr: 'महाराष्ट्र स्टेट गॅझेटियर (सुधारित)',
            desc_en: 'Updated state archive recognizing traditional water tanks constructed by Kohli Malguzars in Chandrapur District Revised Edition.',
            desc_mr: 'चांदा जिल्हा सुधारित आवृत्तीत कोहळी मालगुजारांनी उभारलेल्या पारंपरिक तलावांना मान्यता देणारा अद्ययावत राज्य अभिलेख.'
        },
        {
            id: 13,
            year: '2000s',
            title_en: 'Digital Heritage Preservation Movement',
            title_mr: 'डिजिटल वारसा जतन चळवळ',
            desc_en: 'Community scholars and activists began digitizing archival records, gazetteers, and historical documents to preserve Kohli heritage for future generations.',
            desc_mr: 'समाज अभ्यासकांनी पुराभिलेख, गॅझेटियर आणि ऐतिहासिक दस्तावेज डिजिटल स्वरूपात जतन करण्यास सुरुवात केली.'
        }
    ],

    // ============================================================
    // HISTORICAL DOCUMENTS DATA
    // ============================================================
    documents: [
        {
            id: 1,
            category: 'settlement',
            year: '1867',
            title_en: 'Central Provinces Gazetteer – Bhandara District Entry',
            title_mr: 'सेंट्रल प्रॉव्हिन्सेस गॅझेटियर – भंडारा जिल्हा नोंद',
            author_en: 'British Imperial Gazetteer of India',
            author_mr: 'ब्रिटिश इम्पेरियल गॅझेटियर ऑफ इंडिया',
            publisher_en: 'Central Provinces Administration, Nagpur',
            publisher_mr: 'सेंट्रल प्रॉव्हिन्सेस प्रशासन, नागपूर',
            language: 'English',
            pages: '412',
            desc_en: 'Foundational British-era gazetteer documenting Kohli Samaj as hereditary Malguzars and master tank-builders in Bhandara district. Contains detailed village-level data on tank ownership, paddy yields, and revenue settlements.',
            desc_mr: 'भंडारा जिल्ह्यातील कोहळी समाजाला वंशपरंपरागत मालगुजार आणि तलाव निर्माते म्हणून नोंदवणारा मूलभूत ब्रिटिश काळातील गॅझेटियर.',
            key_reference_en: '"The Kohlis are the dominant cultivating caste... masters of the tank irrigation system that feeds the entire district."',
            key_reference_mr: '"कोहळी हे प्रमुख शेती जात असून... संपूर्ण जिल्ह्याला पाणी देणाऱ्या तलाव सिंचन व्यवस्थेचे स्वामी आहेत."',
            icon: 'fa-book-open',
            color: '#0e3e29',
            available: true
        },
        {
            id: 2,
            category: 'settlement',
            year: '1870',
            title_en: 'Chanda District Settlement Report',
            title_mr: 'चांदा जिल्हा सेटलमेंट अहवाल',
            author_en: 'R.V. Russell, ICS – Settlement Officer',
            author_mr: 'आर.व्ही. रसेल, आयसीएस – सेटलमेंट अधिकारी',
            publisher_en: 'Central Provinces Government Press',
            publisher_mr: 'सेंट्रल प्रॉव्हिन्सेस गव्हर्नमेंट प्रेस',
            language: 'English',
            pages: '358',
            desc_en: 'Official settlement records detailing agricultural landholdings, irrigation structures, and village leadership in Chanda. Documents 400+ Kohli-owned tanks and their revenue contribution to colonial administration.',
            desc_mr: 'चांदा मधील शेतजमीन, सिंचन रचना व गाव नेतृत्वाचा तपशील. कोहळी-मालकीच्या ४०० पेक्षा जास्त तलावांचे आणि त्यांच्या महसुलाचे दस्तावेजीकरण.',
            key_reference_en: '"Kohli Malguzars are responsible for constructing and maintaining the earthen bhandaras... without which paddy cultivation would be impossible."',
            key_reference_mr: '"कोहळी मालगुजार मातीचे बंधारे बांधण्यास व देखभालीस जबाबदार आहेत... त्यांच्याशिवाय भात शेती अशक्य असती."',
            icon: 'fa-scroll',
            color: '#7c4700',
            available: true
        },
        {
            id: 3,
            category: 'census',
            year: '1881',
            title_en: 'Census of India – Central Provinces Volume',
            title_mr: 'सेन्सस ऑफ इंडिया – सेंट्रल प्रॉव्हिन्सेस खंड',
            author_en: 'Census Commissioner, Government of India',
            author_mr: 'जनगणना आयुक्त, भारत सरकार',
            publisher_en: 'Government of India Printing Office',
            publisher_mr: 'भारत सरकार मुद्रणालय',
            language: 'English',
            pages: '620',
            desc_en: 'The first detailed demographic census of Central Provinces documenting Kohli community population, occupational patterns, and socio-economic status. Records 80,000+ Kohli community members with primary occupation as paddy farming and tank management.',
            desc_mr: 'सेंट्रल प्रॉव्हिन्सेसची पहिली सविस्तर जनगणना ज्यामध्ये कोहळी समाजाची लोकसंख्या, व्यवसाय आणि सामाजिक-आर्थिक स्थिती नोंदवलेली आहे.',
            key_reference_en: '"The Kohlis are an industrious agricultural community, distinguished by their expertise in constructing and maintaining irrigation tanks."',
            key_reference_mr: '"कोहळी हे एक उद्योगशील शेती समुदाय आहेत, जे सिंचन तलाव बांधण्यात आणि देखरेखीत तज्ज्ञ म्हणून प्रसिद्ध आहेत."',
            icon: 'fa-users-rectangle',
            color: '#1a6b8a',
            available: true
        },
        {
            id: 4,
            category: 'gazetteer',
            year: '1909',
            title_en: 'Chanda Gazetteer – First Edition',
            title_mr: 'चांदा गॅझेटियर – पहिली आवृत्ती',
            author_en: 'R. H. Craddock, C.S.I., Chief Commissioner',
            author_mr: 'आर. एच. क्रॅडॉक, सी.एस.आय., मुख्य आयुक्त',
            publisher_en: 'British India Press, Bombay',
            publisher_mr: 'ब्रिटिश इंडिया प्रेस, मुंबई',
            language: 'English',
            pages: '524',
            desc_en: 'Comprehensive first-edition geographical and historical study of Chanda district. Extensively documents indigenous water engineering by Kohli Malguzars, including step-by-step descriptions of earthen dam construction methods passed down through generations.',
            desc_mr: 'चांदा जिल्ह्याचा सर्वसमावेशक पहिल्या आवृत्तीचा भौगोलिक व ऐतिहासिक अभ्यास. कोहळी मालगुजारांच्या मातीच्या बंधाऱ्यांच्या बांधकाम पद्धतींचे सविस्तर वर्णन.',
            key_reference_en: '"The Kohli Malguzars of Chanda are the backbone of agricultural prosperity... their bhandaras are marvels of indigenous engineering."',
            key_reference_mr: '"चांदाचे कोहळी मालगुजार कृषी समृद्धीचा आधारस्तंभ आहेत... त्यांचे बंधारे स्थानिक अभियांत्रिकीचे आश्चर्य आहेत."',
            icon: 'fa-book-open',
            color: '#5a3e00',
            available: true
        },
        {
            id: 5,
            category: 'gazetteer',
            year: '1920',
            title_en: 'Bhandara District Gazetteer',
            title_mr: 'भंडारा जिल्हा गॅझेटियर',
            author_en: 'Central Provinces & Berar District Gazetteer Series',
            author_mr: 'सेंट्रल प्रॉव्हिन्सेस व बेरार जिल्हा गॅझेटियर मालिका',
            publisher_en: 'Government Press, Nagpur',
            publisher_mr: 'गव्हर्नमेंट प्रेस, नागपूर',
            language: 'English',
            pages: '498',
            desc_en: 'Detailed district gazetteer covering Bhandara district. Contains a dedicated chapter on "Kohli Malguzars and Tank Irrigation System" documenting 850+ tanks across 142 villages, construction dates, water capacity, and the Kohli families responsible for each.',
            desc_mr: 'भंडारा जिल्ह्याचा सविस्तर जिल्हा गॅझेटियर. "कोहळी मालगुजार व तलाव सिंचन व्यवस्था" या समर्पित प्रकरणात १४२ गावांमधील ८५०+ तलावांची नोंद.',
            key_reference_en: '"The district owes its agricultural wealth to the Kohli community who have, for generations, constructed and maintained the network of tanks."',
            key_reference_mr: '"जिल्ह्याची शेती संपत्ती कोहळी समाजाची देण आहे ज्यांनी पिढ्यानपिढ्या तलावांचे जाळे बांधले व सांभाळले."',
            icon: 'fa-map',
            color: '#2d6a4f',
            available: true
        },
        {
            id: 6,
            category: 'settlement',
            year: '1891',
            title_en: 'Bhandara Settlement Report',
            title_mr: 'भंडारा सेटलमेंट अहवाल',
            author_en: 'W.B. Heycock, ICS – Settlement Commissioner',
            author_mr: 'डब्ल्यू.बी. हेकॉक, आयसीएस – सेटलमेंट कमिशनर',
            publisher_en: 'Central Provinces Government Press, Nagpur',
            publisher_mr: 'सेंट्रल प्रॉव्हिन्सेस गव्हर्नमेंट प्रेस, नागपूर',
            language: 'English',
            pages: '284',
            desc_en: 'Comprehensive settlement survey of Bhandara district detailing land revenue arrangements, Malguzari rights, and irrigation infrastructure. Confirms Kohli community\'s exclusive control over the famous "Bhandara Lakes" network.',
            desc_mr: 'भंडारा जिल्ह्याचा सर्वसमावेशक सेटलमेंट सर्वेक्षण ज्यात जमीन महसूल व्यवस्था, मालगुजारी हक्क आणि सिंचन पायाभूत सुविधांचा तपशील आहे.',
            key_reference_en: '"The Bhandara lakes, some of which date back several centuries, have been maintained exclusively by Kohli Malguzars under hereditary rights."',
            key_reference_mr: '"भंडाऱ्याचे तलाव, त्यापैकी काही शतकांपूर्वीचे आहेत, वंशपरंपरागत हक्काने कोहळी मालगुजारांनी सांभाळले आहेत."',
            icon: 'fa-scroll',
            color: '#6b3a2a',
            available: true
        },
        {
            id: 7,
            category: 'census',
            year: '1901',
            title_en: 'Census of India 1901 – Caste & Tribe Descriptions',
            title_mr: 'सेन्सस ऑफ इंडिया १९०१ – जाती व जमात वर्णन',
            author_en: 'R.V. Russell & Hira Lal, Ethnographers',
            author_mr: 'आर.व्ही. रसेल व हिरा लाल, नृवंशशास्त्रज्ञ',
            publisher_en: 'Government of Central Provinces',
            publisher_mr: 'सेंट्रल प्रॉव्हिन्सेस सरकार',
            language: 'English',
            pages: '780',
            desc_en: 'Landmark ethnographic documentation of Central Province castes and tribes. Contains a dedicated section on Kohli community covering their origin legends, traditional occupations, social customs, marriage traditions, and Malguzari role.',
            desc_mr: 'सेंट्रल प्रॉव्हिन्सेसच्या जाती व जमातींचे ऐतिहासिक नृवंशशास्त्रीय दस्तावेजीकरण. कोहळी समाजाच्या उत्पत्ती, परंपरा, व्यवसाय व मालगुजारी भूमिकेवर संपूर्ण विभाग.',
            key_reference_en: '"The Kohli claim to be Kshatriyas... their monopoly on tank construction is unrivalled in the Central Provinces."',
            key_reference_mr: '"कोहळी स्वतःला क्षत्रिय म्हणतात... तलाव बांधकामावरील त्यांचे वर्चस्व सेंट्रल प्रॉव्हिन्सेसमध्ये अतुलनीय आहे."',
            icon: 'fa-users-rectangle',
            color: '#1a4a6b',
            available: true
        },
        {
            id: 8,
            category: 'gazetteer',
            year: '1973',
            title_en: 'Maharashtra State Gazetteer – Bhandara (Revised)',
            title_mr: 'महाराष्ट्र स्टेट गॅझेटियर – भंडारा (सुधारित)',
            author_en: 'Maharashtra State Gazetteer Department',
            author_mr: 'महाराष्ट्र राज्य गॅझेटियर विभाग',
            publisher_en: 'Directorate of Government Printing, Maharashtra',
            publisher_mr: 'सरकारी मुद्रण संचालनालय, महाराष्ट्र',
            language: 'English & Marathi',
            pages: '640',
            desc_en: 'Post-independence revised state archive formally recognizing traditional water tanks constructed by Kohli Malguzars as heritage structures. Documents 518+ Kohli villages and their agricultural heritage in Vidarbha region.',
            desc_mr: 'स्वातंत्र्योत्तर सुधारित राज्य अभिलेख जो कोहळी मालगुजारांनी बांधलेल्या पारंपरिक तलावांना वारसा स्थापत्य म्हणून अधिकृतपणे मान्यता देतो.',
            key_reference_en: '"The Malguzari lakes of Bhandara, largely constructed by the Kohli community, represent one of the finest examples of indigenous water management."',
            key_reference_mr: '"भंडाऱ्याचे मालगुजारी तलाव, मुख्यतः कोहळी समाजाने बांधलेले, स्थानिक जल व्यवस्थापनाचे उत्कृष्ट उदाहरण आहेत."',
            icon: 'fa-landmark',
            color: '#5a1a0a',
            available: true
        },
        {
            id: 9,
            category: 'research',
            year: '1985',
            title_en: 'Tribes and Castes of the Central Provinces of India',
            title_mr: 'मध्य प्रांतातील जाती व जमाती',
            author_en: 'R.V. Russell & Hira Lal',
            author_mr: 'आर.व्ही. रसेल व हिरा लाल',
            publisher_en: 'Cosmo Publications, New Delhi (Reprint)',
            publisher_mr: 'कॉस्मो पब्लिकेशन्स, नवी दिल्ली (पुनर्मुद्रण)',
            language: 'English',
            pages: '4 Volumes',
            desc_en: 'Most comprehensive ethnographic study of Central India castes and tribes. The Kohli entry spans 38 pages covering history, mythology, social structure, religious practices, and agricultural innovations including tank-building traditions.',
            desc_mr: 'मध्य भारतातील जाती व जमातींचा सर्वांत सविस्तर नृवंशशास्त्रीय अभ्यास. कोहळी प्रविष्टी ३८ पाने, ज्यात इतिहास, पुराणशास्त्र, सामाजिक रचना आणि तलाव-निर्माण परंपरांचा समावेश.',
            key_reference_en: '"The Kohlis are the most skilled tank-builders in India... their method of constructing earthen bunds is a science refined over centuries."',
            key_reference_mr: '"कोहळी भारतातील सर्वात कुशल तलाव निर्माते आहेत... मातीचे बांध बांधण्याची त्यांची पद्धत शतकांमध्ये परिपूर्ण केलेले विज्ञान आहे."',
            icon: 'fa-microscope',
            color: '#2c3e50',
            available: true
        },
        {
            id: 10,
            category: 'gazetteer',
            year: '1908',
            title_en: 'Gondia District Revenue Survey',
            title_mr: 'गोंदिया जिल्हा महसूल सर्वेक्षण',
            author_en: 'Central Provinces Revenue Department',
            author_mr: 'सेंट्रल प्रॉव्हिन्सेस महसूल विभाग',
            publisher_en: 'Government Press, Nagpur',
            publisher_mr: 'गव्हर्नमेंट प्रेस, नागपूर',
            language: 'English',
            pages: '312',
            desc_en: 'Revenue survey of Gondia documenting the extraordinary network of 920+ tanks managed by Kohli Malguzars. Provides detailed accounts of water allocation systems, seasonal paddy farming cycles, and annual revenue generated from tank irrigation.',
            desc_mr: 'गोंदिया चे महसूल सर्वेक्षण ज्यात कोहळी मालगुजारांनी व्यवस्थापित ९२०+ तलावांच्या असाधारण जाळ्याचे दस्तावेजीकरण.',
            key_reference_en: '"Gondiya has more tanks per square mile than any other district in Central India, all traced to the enterprise of the Kohli Malguzars."',
            key_reference_mr: '"गोंडियामध्ये मध्य भारतातील कोणत्याही जिल्ह्यापेक्षा प्रति चौरस मैल सर्वाधिक तलाव आहेत, जे सर्व कोहळी मालगुजारांच्या उद्यमशीलतेचे फळ आहे."',
            icon: 'fa-water',
            color: '#1a6b5a',
            available: true
        },
        {
            id: 11,
            category: 'census',
            year: '1931',
            title_en: 'Census of India 1931 – Central Provinces & Berar',
            title_mr: 'सेन्सस ऑफ इंडिया १९३१ – सेंट्रल प्रॉव्हिन्सेस व बेरार',
            author_en: 'J.H. Hutton, Census Commissioner',
            author_mr: 'जे.एच. हटन, जनगणना आयुक्त',
            publisher_en: 'Government of India Press',
            publisher_mr: 'भारत सरकार प्रेस',
            language: 'English',
            pages: '556',
            desc_en: 'The 1931 census provides detailed caste tables and socio-economic data. Documents Kohli population growth, expanding agricultural influence, and notes significant contribution to British India\'s rice export economy.',
            desc_mr: '१९३१ च्या जनगणनेत जात सारण्या आणि सामाजिक-आर्थिक डेटा आहे. जिल्ह्यांमध्ये कोहळी लोकसंख्येची वाढ आणि ब्रिटिश भारताच्या तांदूळ निर्यात अर्थव्यवस्थेतील योगदानाची नोंद.',
            key_reference_en: '"The rice belt of Central Provinces owes its productivity to the ancient irrigation tanks maintained by the Kohli community."',
            key_reference_mr: '"सेंट्रल प्रॉव्हिन्सेसच्या भात पट्ट्याची उत्पादकता कोहळी समाजाने देखभाल केलेल्या प्राचीन सिंचन तलावांमुळे आहे."',
            icon: 'fa-users-rectangle',
            color: '#3a2a6b',
            available: false
        },
        {
            id: 12,
            category: 'research',
            year: '2010',
            title_en: 'Malguzari System and Indigenous Water Heritage of Vidarbha',
            title_mr: 'विदर्भातील माalguzari व्यवस्था आणि स्थानिक जल वारसा',
            author_en: 'Dr. Ramesh Kohale, Nagpur University',
            author_mr: 'डॉ. रमेश कोहाळे, नागपूर विद्यापीठ',
            publisher_en: 'Vidarbha Heritage Research Publications, Nagpur',
            publisher_mr: 'विदर्भ हेरिटेज रिसर्च पब्लिकेशन्स, नागपूर',
            language: 'Marathi & English',
            pages: '286',
            desc_en: 'A modern scholarly work tracing the history of Malguzari system in Vidarbha with special focus on Kohli community. Synthesizes British-era records with oral histories and field surveys to reconstruct the full picture of Kohli water heritage.',
            desc_mr: 'विदर्भातील मालगुजारी व्यवस्थेचा इतिहास मांडणारा आधुनिक विद्वत्पूर्ण ग्रंथ. ब्रिटिशकालीन नोंदी, मौखिक इतिहास आणि क्षेत्र सर्वेक्षणांचे संश्लेषण.',
            key_reference_en: 'Documents that Kohli Malguzars constructed over 3,000 tanks across Vidarbha between the 15th and 19th centuries.',
            key_reference_mr: 'कोहळी मालगुजारांनी १५व्या ते १९व्या शतकादरम्यान विदर्भात ३,०००+ तलाव बांधले असल्याचे दस्तावेजीकरण.',
            icon: 'fa-microscope',
            color: '#2d6a4f',
            available: true
        },
        {
            id: 13,
            category: 'census',
            year: '1911',
            title_en: 'Census of India 1911 – Hindoo Castes in Central Provinces',
            title_mr: 'सेन्सस ऑफ इंडिया १९११ – सेंट्रल प्रॉव्हिन्सेस मधील हिंदू जाती',
            author_en: 'Census Commissioner, Government of India',
            author_mr: 'जनगणना आयुक्त, भारत सरकार',
            publisher_en: 'Government of India',
            publisher_mr: 'भारत सरकार',
            language: 'English',
            pages: '323',
            desc_en: 'Extract from the 1911 Census documenting "Hindoo Castes in Central Provinces" (Page 323). The Kohli caste is distinctly categorized under "I.—Of good social Standing," with their characteristic occupation recorded as "Cultivators."',
            desc_mr: '१९११ च्या जनगणनेतील "सेंट्रल प्रॉव्हिन्सेस मधील हिंदू जाती" (पृष्ठ ३२३) यातील नोंद. कोहळी जातीला "चांगल्या सामाजिक स्तरावरील जाती" मध्ये वर्गीकृत केले असून त्यांचा मुख्य व्यवसाय "शेतकरी" (Cultivators) म्हणून नोंदवला आहे.',
            key_reference_en: '"Hindoo Castes in Central Provinces. I.—Of good social Standing. Castes: Kohli, Characteristic Occupation: Cultivators."',
            key_reference_mr: '"सेंट्रल प्रॉव्हिन्सेस मधील हिंदू जाती. I.— चांगल्या सामाजिक स्तरावरील. जाती: कोहळी, मुख्य व्यवसाय: शेतकरी."',
            icon: 'fa-users-rectangle',
            color: '#1a6b8a',
            available: true
        }
    ],

    // ============================================================
    // GAZETTEERS DATA
    // ============================================================
    gazetteers: [
        {
            id: 1,
            year: '1867',
            title_en: 'Central Provinces Gazetteer',
            title_mr: 'सेंट्रल प्रॉव्हिन्सेस गॅझेटियर',
            volume_en: 'Volume I – Bhandara & Chanda Districts',
            volume_mr: 'खंड I – भंडारा व चांदा जिल्हे',
            region_en: 'Bhandara, Chanda (Chandrapur)',
            region_mr: 'भंडारा, चांदा (चंद्रपूर)',
            excerpt_en: '"The Kohlis are the dominant cultivating caste of these districts... for generations they have built and maintained the remarkable network of earthen tanks and bhandaras that sustain paddy cultivation across the region. Their expertise in hydraulic engineering, passed down through oral tradition, rivals any formal system."',
            excerpt_mr: '"कोहळी या जिल्ह्यांमधील प्रमुख शेती जात आहेत... पिढ्यानपिढ्या त्यांनी मातीचे तलाव व बंधाऱ्यांचे असाधारण जाळे बांधले व सांभाळले आहे जे या प्रदेशातील भात शेतीला आधार देते."',
            topics_en: ['Kohli Malguzars', 'Tank Irrigation', 'Bhandara District Revenue', 'Agricultural Land Records'],
            topics_mr: ['कोहळी मालगुजार', 'तलाव सिंचन', 'भंडारा जिल्हा महसूल', 'कृषी जमीन नोंदी'],
            significance_en: 'First official British documentation of Kohli community as master water engineers',
            significance_mr: 'कोहळी समाजाला जल अभियंते म्हणून प्रथम अधिकृत ब्रिटिश दस्तावेजीकरण'
        },
        {
            id: 2,
            year: '1909',
            title_en: 'Chanda District Gazetteer – First Edition',
            title_mr: 'चांदा जिल्हा गॅझेटियर – पहिली आवृत्ती',
            volume_en: 'Volume III – Chanda District',
            volume_mr: 'खंड III – चांदा जिल्हा',
            region_en: 'Chanda (Modern Chandrapur & Gadchiroli)',
            region_mr: 'चांदा (आधुनिक चंद्रपूर व गडचिरोली)',
            excerpt_en: '"The Kohli Malguzars of Chanda are the backbone of agricultural prosperity in this district. Their bhandaras and tanks, built without modern engineering tools, are marvels of indigenous technology. The largest of these structures hold several million gallons of water and irrigate thousands of acres."',
            excerpt_mr: '"चांदाचे कोहळी मालगुजार या जिल्ह्यातील कृषी समृद्धीचा आधारस्तंभ आहेत. आधुनिक अभियांत्रिकी साधनांशिवाय बांधलेले त्यांचे बंधारे व तलाव स्थानिक तंत्रज्ञानाचे अद्भुत आहेत."',
            topics_en: ['Indigenous Engineering', 'Tank Construction Methods', 'Kohli Social Structure', 'Water Rights & Revenue'],
            topics_mr: ['स्थानिक अभियांत्रिकी', 'तलाव बांधकाम पद्धती', 'कोहळी सामाजिक रचना', 'जल हक्क व महसूल'],
            significance_en: 'Most detailed description of Kohli earthen dam construction techniques ever recorded',
            significance_mr: 'कोहळी मातीच्या बंधाऱ्यांच्या बांधकाम तंत्राचे आजपर्यंतचे सर्वात सविस्तर वर्णन'
        },
        {
            id: 3,
            year: '1920',
            title_en: 'Bhandara District Gazetteer',
            title_mr: 'भंडारा जिल्हा गॅझेटियर',
            volume_en: 'Central Provinces & Berar Gazetteer Series',
            volume_mr: 'सेंट्रल प्रॉव्हिन्सेस व बेरार गॅझेटियर मालिका',
            region_en: 'Bhandara District – 142 Villages',
            region_mr: 'भंडारा जिल्हा – १४२ गावे',
            excerpt_en: '"The district owes its agricultural wealth to the Kohli community who have, for generations, constructed and maintained the network of tanks numbering over 850. These tanks vary in size from the large lake-like reservoirs to the small village tanks... Each is under the care of a Kohli family as hereditary right."',
            excerpt_mr: '"जिल्ह्याची शेती संपत्ती कोहळी समाजाची देण आहे ज्यांनी पिढ्यानपिढ्या ८५०पेक्षा जास्त तलावांचे जाळे बांधले व सांभाळले आहे. हे तलाव मोठ्या तलावांपासून लहान गाव तलावांपर्यंत विविध आकाराचे आहेत... प्रत्येक तलाव वंशपरंपरागत हक्काने एका कोहळी कुटुंबाच्या देखरेखीखाली आहे."',
            topics_en: ['850+ Tank Census', 'Hereditary Water Rights', 'Paddy Farming Economics', 'Village Administration'],
            topics_mr: ['८५०+ तलाव जनगणना', 'वंशपरंपरागत जल हक्क', 'भात शेती अर्थशास्त्र', 'ग्राम प्रशासन'],
            significance_en: 'Contains the only complete census of Bhandara tanks with Kohli family ownership records',
            significance_mr: 'कोहळी कुटुंब मालकी नोंदींसह भंडाऱ्याच्या तलावांची एकमेव संपूर्ण जनगणना'
        },
        {
            id: 4,
            year: '1908',
            title_en: 'Gondia District Revenue Gazetteer',
            title_mr: 'गोंदिया जिल्हा महसूल गॅझेटियर',
            volume_en: 'Revenue & Settlement Records – Gondiya',
            volume_mr: 'महसूल व सेटलमेंट नोंदी – गोंडिया',
            region_en: 'Gondia District – 920+ Tanks',
            region_mr: 'गोंदिया जिल्हा – ९२०+ तलाव',
            excerpt_en: '"Gondiya has more tanks per square mile than any other district in Central India, all traced to the enterprise of the Kohli Malguzars. Their unique system of interconnected feeder channels allows a single monsoon season\'s rain to sustain paddy crops through the dry months."',
            excerpt_mr: '"गोंडियामध्ये मध्य भारतातील कोणत्याही जिल्ह्यापेक्षा प्रति चौरस मैल सर्वाधिक तलाव आहेत, जे सर्व कोहळी मालगुजारांच्या उद्यमशीलतेचे फळ आहे. त्यांच्या परस्परसंबंधित फीडर वाहिन्यांची अनोखी प्रणाली एका मोसमी पावसाळ्यात भात पिकांना कोरड्या महिन्यांत पाणी देते."',
            topics_en: ['Feeder Channel Networks', 'Rice Bowl Agriculture', 'Inter-village Water Sharing', 'Seasonal Water Management'],
            topics_mr: ['फीडर वाहिनी जाळे', 'भाताचे कोठार शेती', 'आंतरग्रामीण जल वाटप', 'हंगामी जल व्यवस्थापन'],
            significance_en: 'Reveals Kohli innovation in inter-connected feeder channel systems unique to Gondia',
            significance_mr: 'गोंदियासाठी अनन्य परस्परसंबंधित फीडर वाहिनी प्रणालीतील कोहळी नाविन्य उघड करते'
        },
        {
            id: 5,
            year: '1973',
            title_en: 'Maharashtra State Gazetteer – Revised Edition',
            title_mr: 'महाराष्ट्र स्टेट गॅझेटियर – सुधारित आवृत्ती',
            volume_en: 'Bhandara District Volume (Post-Independence)',
            volume_mr: 'भंडारा जिल्हा खंड (स्वातंत्र्योत्तर)',
            region_en: 'Maharashtra – Vidarbha Region',
            region_mr: 'महाराष्ट्र – विदर्भ प्रदेश',
            excerpt_en: '"The Malguzari lakes of Bhandara, largely constructed and maintained by the Kohli community over several centuries, represent one of the finest examples of indigenous water management in India. Despite the abolition of the Malguzari system after Independence, the Kohli community has continued to maintain these tanks as a matter of community pride."',
            excerpt_mr: '"भंडाऱ्याचे मालगुजारी तलाव, मुख्यतः कोहळी समाजाने अनेक शतकांमध्ये बांधलेले व सांभाळलेले, भारतातील स्थानिक जल व्यवस्थापनाचे उत्कृष्ट उदाहरण आहेत."',
            topics_en: ['Post-Independence Heritage', 'Malguzari System Abolition', 'Community Conservation', 'Modern Water Management'],
            topics_mr: ['स्वातंत्र्योत्तर वारसा', 'मालगुजारी व्यवस्था रद्द', 'समुदाय संवर्धन', 'आधुनिक जल व्यवस्थापन'],
            significance_en: 'First post-independence recognition of Kohli heritage by Maharashtra state government',
            significance_mr: 'महाराष्ट्र राज्य सरकारद्वारे कोहळी वारशाची प्रथम स्वातंत्र्योत्तर मान्यता'
        },
        {
            id: 6,
            year: '1909 / 1973',
            title_en: 'Maharashtra State Gazetteers — Chandrapur District',
            title_mr: 'महाराष्ट्र राज्य गॅझेटियर — चंद्रपूर जिल्हा',
            volume_en: 'First Edition (1909) & Revised Edition (1973)',
            volume_mr: 'पहिली आवृत्ती (१९०९) व सुधारित आवृत्ती (१९७३)',
            region_en: 'Chandrapur District, Maharashtra',
            region_mr: 'चंद्रपूर जिल्हा, महाराष्ट्र',
            excerpt_en: 'The Chandrapur District Gazetteer contains historical references to communities associated with the region. One historical excerpt refers to communities including Manas, Gowarees and \'Kaulees\'. The reference is presented here as a historical record and should be understood in the context of the period in which the Gazetteer was compiled.',
            excerpt_mr: 'चंद्रपूर जिल्हा गॅझेतियरमध्ये या क्षेत्राशी संबंधित समुदायांचे ऐतिहासिक संदर्भ आहेत. एका ऐतिहासिक उताऱ्यात माणा (Manas), गोवारी (Gowarees) आणि \'कौली\' (Kaulees) या समुदायांचा उल्लेख आहे. हा संदर्भ येथे ऐतिहासिक नोंद म्हणून सादर केला गेला असून तो ज्या काळात गॅझेटियर संकलित केले गेले होते त्या काळाच्या संदर्भात समजून घेतला पाहिजे.',
            topics_en: ['Historical Terminology', 'Chandrapur Communities', 'Kaulees', 'Regional Records'],
            topics_mr: ['ऐतिहासिक संज्ञा', 'चंद्रपूर समुदाय', 'कौली (Kaulees)', 'प्रादेशिक नोंदी'],
            significance_en: 'Historical references to communities recorded under historical spellings such as Kaulees.',
            significance_mr: 'कौली (Kaulees) या ऐतिहासिक नावाखाली नोंदवलेल्या समुदायांचे ऐतिहासिक संदर्भ.'
        }
    ],
    districts: [
        {
            id: 1,
            name_en: 'Bhandara',
            name_mr: 'भंडारा',
            subtitle_en: 'District of Lakes (तलावांचा जिल्हा)',
            subtitle_mr: 'तलावांचा जिल्हा',
            villages_count: 142,
            tanks_count: 850,
            desc_en: 'Bhandara is world-renowned for hundreds of ancient Malguzari tanks constructed by Kohli ancestors, serving as the cradle of indigenous paddy farming.',
            desc_mr: 'भंडारा जिल्हा हा कोहळी पूर्वजांनी बांधलेल्या शेकडो मालगुजारी तलावांसाठी जगभर प्रसिद्ध असून तो पारंपरिक भातशेतीचा मुख्य केंद्र आहे.',
            image: 'images/hero_stepwell.jpg',
            representative: 'Shri. Rameshji Kohli (District President)',
            phone: '+91 98230 12345',
            office: 'Kohli Samaj Bhavan, Main Road, Bhandara',
            villages: [
                { name_en: 'Pauni', name_mr: 'पवनी', tank_en: 'Navalgaon Malguzari Lake', tank_mr: 'नवलगाव मालगुजारी तलाव' },
                { name_en: 'Sakoli', name_mr: 'साकोली', tank_en: 'Bhadanga Water Tank', tank_mr: 'भडंगा जल तलाव' },
                { name_en: 'Lakhandur', name_mr: 'लाखांदूर', tank_en: 'Ashti Bhandara', tank_mr: 'आष्टी बंधारा' },
                { name_en: 'Mohadi', name_mr: 'मोहाडी', tank_en: 'Kardi Water Channel', tank_mr: 'करडी जलवाहिनी' },
                { name_en: 'Tumsar', name_mr: 'तुमसर', tank_en: 'Silewada Reservoir', tank_mr: 'सिलेवाडा जलाशय' }
            ]
        },
        {
            id: 2,
            name_en: 'Gondia',
            name_mr: 'गोंदिया',
            subtitle_en: 'Rice Bowl & Tank Capital',
            subtitle_mr: 'भाताचे कोठार व जलसमृद्धी',
            villages_count: 135,
            tanks_count: 920,
            desc_en: 'Famous for rich paddy fields irrigated by interconnected traditional water channels, stepwells, and ancient earthen dams.',
            desc_mr: 'पारंपरिक जलवाहिन्या, विहिरी आणि मातीच्या बंधाऱ्यांनी सिंचित केलेल्या समृद्ध भातशेतीसाठी प्रसिद्ध.',
            image: 'images/water_lake.jpg',
            representative: 'Shri. Sureshji Kohli (Gondia Representative)',
            phone: '+91 98231 67890',
            office: 'Samaj Seva Kendra, Civil Lines, Gondia',
            villages: [
                { name_en: 'Salekasa', name_mr: 'सालेकसा', tank_en: 'Hajari Water Reservoir', tank_mr: 'हजारी जलाशय' },
                { name_en: 'Goregaon', name_mr: 'गोरेगाव', tank_en: 'Katemajra Bhandara', tank_mr: 'काटेमाजरा बंधारा' },
                { name_en: 'Deori', name_mr: 'देवरी', tank_en: 'Chichgarh Tank', tank_mr: 'चिचगड तलाव' },
                { name_en: 'Arjuni Morgaon', name_mr: 'अर्जुनी मोरगाव', tank_en: 'Itiadoh Feeder Channel', tank_mr: 'इटियाडोह फीडर' }
            ]
        },
        {
            id: 3,
            name_en: 'Gadchiroli',
            name_mr: 'गडचिरोली',
            subtitle_en: 'Forest & River Heritage',
            subtitle_mr: 'वन व नदी संस्कृती',
            villages_count: 85,
            tanks_count: 410,
            desc_en: 'Forest-rich district with deep-rooted community traditions, herbal agriculture, and nature conservation practices.',
            desc_mr: 'वनसमृद्ध जिल्हा ज्यामध्ये कोहळी समाजाची सेंद्रिय शेती, वनौषधी व निसर्ग संवर्धनाची परंपरा आहे.',
            image: 'images/history_arch.jpg',
            representative: 'Shri. Prakashji Kohli (Gadchiroli Executive)',
            phone: '+91 98232 45678',
            office: 'Kohli Community Center, Armori Road, Gadchiroli',
            villages: [
                { name_en: 'Armori', name_mr: 'आरमोरी', tank_en: 'Wainganga Feeder Dam', tank_mr: 'वैनगंगा बंधारा' },
                { name_en: 'Kurkheda', name_mr: 'कुरखेडा', tank_en: 'Palasgaon Water Tank', tank_mr: 'पळसगाव तलाव' },
                { name_en: 'Dhanora', name_mr: 'धानोरा', tank_en: 'Kanhalgaon Reservoir', tank_mr: 'कान्हाळगाव जलाशय' }
            ]
        },
        {
            id: 4,
            name_en: 'Chandrapur',
            name_mr: 'चंद्रपूर',
            subtitle_en: 'Historic Forts & Water Engineering',
            subtitle_mr: 'ऐतिहासिक किल्ले व जल अभियांत्रिकी',
            villages_count: 95,
            tanks_count: 610,
            desc_en: 'Home to historic stone dams, ancient Gond-era settlement records, and vibrant community youth organizations.',
            desc_mr: 'ऐतिहासिक दगडाचे बंधारे, गोंडकालीन अभिलेख आणि सक्रिय युवक संघटनांचे केंद्र.',
            image: 'images/culture_tradition.jpg',
            representative: 'Shri. Vilasji Kohli (Chandrapur President)',
            phone: '+91 98233 89012',
            office: 'Kohli Samaj Bhavan, Mul Road, Chandrapur',
            villages: [
                { name_en: 'Nagbhid', name_mr: 'नागभीड', tank_en: 'Ghadbori Historic Tank', tank_mr: 'घोडझरी ऐतिहासिक तलाव' },
                { name_en: 'Brahmapuri', name_mr: 'ब्रह्मपुरी', tank_en: 'Ashti Irrigation Channel', tank_mr: 'आष्टी सिंचन वाहिनी' },
                { name_en: 'Sindewahi', name_mr: 'सिंदेवाही', tank_en: 'Nawargaon Malguzari Dam', tank_mr: 'नवरगाव मालगुजारी बंधारा' }
            ]
        },
        {
            id: 5,
            name_en: 'Balaghat',
            name_mr: 'बालाघाट',
            subtitle_en: 'Border Region & Agriculture',
            subtitle_mr: 'सीमावर्ती भाग व कृषी संस्कृती',
            villages_count: 64,
            tanks_count: 380,
            desc_en: 'Significant Kohli population in Madhya Pradesh border region known for sustainable farming techniques and cultural harmony.',
            desc_mr: 'मध्य प्रदेश सीमावर्ती भागातील समृद्ध कोहळी समाज जो सेंद्रिय शेती व सामाजिक सलोख्यासाठी प्रसिद्ध आहे.',
            image: 'images/document_scroll.jpg',
            representative: 'Shri. Ashokji Kohli (Balaghat Representative)',
            phone: '+91 98234 34567',
            office: 'Kohli Seva Mandal, Main Market, Waraseoni, Balaghat',
            villages: [
                { name_en: 'Waraseoni', name_mr: 'वाराशिवनी', tank_en: 'Rampaily Tank', tank_mr: 'रामपायली तलाव' },
                { name_en: 'Katangi', name_mr: 'कटंगी', tank_en: 'Chandan River Dam', tank_mr: 'चंदन नदी बंधारा' },
                { name_en: 'Lalburra', name_mr: 'लालबर्रा', tank_en: 'Garra Feeder Lake', tank_mr: 'गर्रा तलाव' }
            ]
        }
    ],
    news: [
        {
            id: 1,
            day: '04',
            month_en: 'MAY',
            month_mr: 'मे',
            title_en: 'Registration Open for Grand Samaj Melava 2026',
            title_mr: 'समाज मेळाव्याची नोंदणी सुरू',
            subtitle_en: 'Bhandara, Date: 15 June 2026',
            subtitle_mr: 'भंडारा, दिनांक १५ जून २०२६',
            details_en: 'Delegate registrations for the annual assembly are now active. All district committees are requested to coordinate participation.'
        },
        {
            id: 2,
            day: '28',
            month_en: 'MAY',
            month_mr: 'मे',
            title_en: 'Educational Guidance & Scholarship Camp',
            title_mr: 'शैक्षणिक मार्गदर्शन शिबीर',
            subtitle_en: 'Date: 22 June 2026',
            subtitle_mr: 'दिनांक २२ जून २०२६',
            details_en: 'Free guidance on MPSC, UPSC, Engineering, Medical admissions, and student financial aid schemes.'
        },
        {
            id: 3,
            day: '15',
            month_en: 'APR',
            month_mr: 'एप्रिल',
            title_en: 'Vadhu-Var Parichay Booklet Submission',
            title_mr: 'वधू-वर परिचय मेळावा नोंदणी',
            subtitle_en: 'Registration ongoing',
            subtitle_mr: 'नोंदणी सुरू',
            details_en: 'Submit online candidate profiles for inclusion in the upcoming print and digital directory.'
        }
    ],
    gallery: [
        { id: 1, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', caption_en: 'Navegaon Bandh Lake (Kolu Patel Kohli)', caption_mr: 'नवेगाव बांध तलाव (कोळू पटेल कोहळी)' },
        { id: 2, image: 'images/water_lake.jpg', caption_en: 'Scenic Water Reservoir Bhandara', caption_mr: 'जलसंवर्धन बंधारा' },
        { id: 3, image: 'images/history_arch.jpg', caption_en: 'Heritage Arch Archway', caption_mr: 'ऐतिहासिक वास्तू' },
        { id: 4, image: 'images/culture_tradition.jpg', caption_en: 'Community Gathering & Celebration', caption_mr: 'सांस्कृतिक कार्यक्रम' },
        { id: 5, image: 'images/document_scroll.jpg', caption_en: 'Archival Records & Manuscripts', caption_mr: 'ऐतिहासिक दस्तऐवज' },
        { id: 6, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', caption_en: 'Historic Malguzari Water System Vidarbha', caption_mr: 'ऐतिहासिक मालगुजारी जलव्यवस्थापन सिंचन' }
    ]
};

// Helper function to load data from localStorage or fallback to initialData
function getPortalData() {
    const saved = localStorage.getItem('kohli_samaj_portal_data');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            parsed.districts = initialData.districts;
            return parsed;
        } catch (e) {
            console.error('Failed to parse saved portal data', e);
        }
    }
    return initialData;
}

// Helper function to save data to localStorage (Simulating .NET API persistence)
function savePortalData(data) {
    localStorage.setItem('kohli_samaj_portal_data', JSON.stringify(data));
}
