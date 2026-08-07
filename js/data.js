/**
 * Central Data Store for Kohali Samaj Web Portal
 * Structured for seamless backend integration with C# .NET Web API / MVC models.
 */

const initialData = {
    settings: {
        currentLang: 'en',
        fontSize: 'normal' // 'small', 'normal', 'large'
    },
    stats: [
        { id: 1, icon: 'fa-house-chimney', number: '518+', label_en: 'Villages', label_mr: 'गावे' },
        { id: 2, icon: 'fa-location-dot', number: '5', label_en: 'Key Districts', label_mr: 'प्रमुख जिल्हे' },
        { id: 3, icon: 'fa-users', number: 'Lakhs+', label_en: 'Community Members', label_mr: 'समाज बांधव' },
        { id: 4, icon: 'fa-city', number: 'Nagpur, Pune, Mumbai', label_en: 'and other major cities', label_mr: 'आणि इतर शहरे' }
    ],
    notices: [
        {
            id: 1,
            title_en: 'Kohali Samaj Grand Convention (Melava) - 15 June 2026, Bhandara',
            title_mr: 'समाज मेळावा - १५ जून २०२६, भंडारा',
            date: '2026-06-15',
            location: 'Bhandara, Maharashtra',
            category: 'Event',
            details_en: 'Annual grand gathering of the Kohali community discussing agricultural advancements, water conservation projects, and youth empowerment.',
            details_mr: 'कोहळी समाजाचा वार्षिक भव्य मेळावा ज्यामध्ये शेती प्रगती, जलसंवर्धन प्रकल्प आणि युवक सक्षमीकरणावर चर्चा होणार आहे.'
        },
        {
            id: 2,
            title_en: 'State Level Educational Guidance & Career Camp - 22 June 2026',
            title_mr: 'शैक्षणिक मार्गदर्शन शिबीर - २२ जून २०२६',
            date: '2026-06-22',
            location: 'Nagpur & Online',
            category: 'Education',
            details_en: 'Career counseling and scholarship guidance session for Kohali Samaj students preparing for competitive exams and higher education.',
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
            desc_en: 'The origin, heritage, traditions, and historic journey of the Kohali community across centuries in Central India.',
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
            desc_en: 'Rich festivals, folk traditions, marriage customs, and unique social harmony of Kohali culture.',
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
            year: '1867',
            title_en: 'Central Provinces Gazetteer Record',
            title_mr: 'सेंट्रल प्रॉव्हिन्सेस गॅझेटियर नोंद',
            desc_en: 'Historical reference documenting Kohali community as master tank-builders (Malguzars) in Bhandara and Chanda districts.',
            desc_mr: 'भंडारा व चांदा जिल्ह्यातील कोहळी समाजाला तलाव निर्माते (मालगुजार) म्हणून नोंदवणारा ऐतिहासिक दस्तावेज.'
        },
        {
            id: 2,
            year: '1870',
            title_en: 'Chanda Settlement Report',
            title_mr: 'चांदा सेटलमेंट रिपोर्ट',
            desc_en: 'Official settlement records detailing agricultural landholdings, irrigation structures, and village leadership.',
            desc_mr: 'कृषी जमीन, सिंचन रचना आणि गाव नेतृत्वाचा तपशील देणारे अधिकृत सेटलमेंट अहवाल.'
        },
        {
            id: 3,
            year: '1881',
            title_en: 'Census of India Documentation',
            title_mr: 'सेन्सस ऑफ इंडिया नोंद',
            desc_en: 'Demographic and socio-economic classification documenting the industrious nature of Kohalis.',
            desc_mr: 'कोहळी समाजाच्या उद्योगशील आणि जलतज्ज्ञ स्वरूपाचे सामाजिक-आर्थिक वर्गीकरण.'
        },
        {
            id: 4,
            year: '1909',
            title_en: 'Chanda Gazetteer (1st Edition)',
            title_mr: 'चांदा गॅझेटियर (पहिली आवृत्ती)',
            desc_en: 'Comprehensive geographical and historical study highlighting indigenous water engineering marvels.',
            desc_mr: 'स्थानिक जल अभियांत्रिकीच्या आश्चर्यांवर प्रकाश टाकणारा सर्वसमावेशक भौगोलिक व ऐतिहासिक अभ्यास.'
        },
        {
            id: 5,
            year: '1973',
            title_en: 'Maharashtra State Gazetteer (Revised)',
            title_mr: 'महाराष्ट्र स्टेट गॅझेटियर (सुधारित)',
            desc_en: 'Updated state archive recognizing traditional water tanks constructed by Kohali Malguzars.',
            desc_mr: 'कोहळी मालगुजारांनी उभारलेल्या पारंपरिक तलावांना मान्यता देणारा अद्ययावत राज्य अभिलेख.'
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
            desc_en: 'Bhandara is world-renowned for hundreds of ancient Malguzari tanks constructed by Kohali ancestors, serving as the cradle of indigenous paddy farming.',
            desc_mr: 'भंडारा जिल्हा हा कोहळी पूर्वजांनी बांधलेल्या शेकडो मालगुजारी तलावांसाठी जगभर प्रसिद्ध असून तो पारंपरिक भातशेतीचा मुख्य केंद्र आहे.',
            image: 'images/hero_stepwell.jpg',
            representative: 'Shri. Rameshji Kohali (District President)',
            phone: '+91 98230 12345',
            office: 'Kohali Samaj Bhavan, Main Road, Bhandara',
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
            representative: 'Shri. Sureshji Kohali (Gondia Representative)',
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
            representative: 'Shri. Prakashji Kohali (Gadchiroli Executive)',
            phone: '+91 98232 45678',
            office: 'Kohali Community Center, Armori Road, Gadchiroli',
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
            representative: 'Shri. Vilasji Kohali (Chandrapur President)',
            phone: '+91 98233 89012',
            office: 'Kohali Samaj Bhavan, Mul Road, Chandrapur',
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
            desc_en: 'Significant Kohali population in Madhya Pradesh border region known for sustainable farming techniques and cultural harmony.',
            desc_mr: 'मध्य प्रदेश सीमावर्ती भागातील समृद्ध कोहळी समाज जो सेंद्रिय शेती व सामाजिक सलोख्यासाठी प्रसिद्ध आहे.',
            image: 'images/document_scroll.jpg',
            representative: 'Shri. Ashokji Kohali (Balaghat Representative)',
            phone: '+91 98234 34567',
            office: 'Kohali Seva Mandal, Main Market, Waraseoni, Balaghat',
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
        { id: 1, image: 'images/hero_stepwell.jpg', caption_en: 'Historical Stepwell Malguzari Tank', caption_mr: 'ऐतिहासिक मालगुजारी तलाव' },
        { id: 2, image: 'images/water_lake.jpg', caption_en: 'Scenic Water Reservoir Bhandara', caption_mr: 'जलसंवर्धन बंधारा' },
        { id: 3, image: 'images/history_arch.jpg', caption_en: 'Heritage Arch Archway', caption_mr: 'ऐतिहासिक वास्तू' },
        { id: 4, image: 'images/culture_tradition.jpg', caption_en: 'Community Gathering & Celebration', caption_mr: 'सांस्कृतिक कार्यक्रम' },
        { id: 5, image: 'images/document_scroll.jpg', caption_en: 'Archival Records & Manuscripts', caption_mr: 'ऐतिहासिक दस्तऐवज' },
        { id: 6, image: 'images/hero_stepwell.jpg', caption_en: 'Ancient Water System Vidarbha', caption_mr: 'जलव्यवस्थापन सिंचन' }
    ]
};

// Helper function to load data from localStorage or fallback to initialData
function getPortalData() {
    const saved = localStorage.getItem('kohali_samaj_portal_data');
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
    localStorage.setItem('kohali_samaj_portal_data', JSON.stringify(data));
}
