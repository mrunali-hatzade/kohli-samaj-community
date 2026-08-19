const fs = require('fs');
const path = require('path');

const targetFile = path.join('d:', 'PROJECTS', 'kohali samaj', 'history_clean.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace Page Title Banner
content = content.replace(
    /<h1 class="page-banner-title">.*?<\/h1>/s,
    `<h1 class="page-banner-title"><span data-lang-en="Kohli Samaj — Our History" data-lang-mr="कोहळी समाजाचा इतिहास">Kohli Samaj — Our History</span></h1>`
);

// We need to replace everything from <!-- RIGHT CONTENT AREA (Independent Page Content) --> to <!-- Footer -->
const rightContentAreaStart = content.indexOf('<!-- RIGHT CONTENT AREA (Independent Page Content) -->');
const footerStart = content.indexOf('<!-- Footer -->');

if (rightContentAreaStart !== -1 && footerStart !== -1) {
    const newContentHTML = `
            <!-- RIGHT CONTENT AREA (Independent Page Content) -->
            <div class="history-content-area">
                
                <!-- HERO / INTRODUCTION -->
                <div id="sec-origin" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" style="width:100%; max-height:340px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem; box-shadow:var(--shadow-sm);" alt="History Banner">
                    
                    <h2 style="color:var(--primary-dark); font-size:1.6rem; font-weight:800; margin-bottom:1rem;" data-lang-en="Historical Background" data-lang-mr="ऐतिहासिक पार्श्वभूमी">Historical Background</h2>
                    
                    <p style="line-height:1.8; font-size:1.02rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="The history of the Kohli community is deeply intertwined with the social, agricultural, water management, and rural life of the Vidarbha region. Available historical records, gazetteers, settlement reports, census references, as well as written and oral traditions within the community, point to a historical connection of the Kohli community with Bhandara, Gondia, Chandrapur, Gadchiroli, and the adjoining Balaghat region in Madhya Pradesh." data-lang-mr="कोहळी समाजाचा इतिहास विदर्भातील सामाजिक, कृषी, जलव्यवस्थापन आणि ग्रामजीवनाशी जोडलेला आहे. उपलब्ध ऐतिहासिक नोंदी, गॅझेटिअर, सेटलमेंट रिपोर्ट, जनगणना संदर्भ तसेच समुदायातील लिखित व मौखिक परंपरांमध्ये भंडारा, गोंदिया, चंद्रपूर, गडचिरोली आणि लगतच्या मध्यप्रदेशातील बालाघाट परिसराशी कोहळी समाजाचा ऐतिहासिक संबंध आढळतो.">
                        The history of the Kohli community is deeply intertwined with the social, agricultural, water management, and rural life of the Vidarbha region. Available historical records, gazetteers, settlement reports, census references, as well as written and oral traditions within the community, point to a historical connection of the Kohli community with Bhandara, Gondia, Chandrapur, Gadchiroli, and the adjoining Balaghat region in Madhya Pradesh.
                    </p>
                    <p style="line-height:1.8; font-size:1.02rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="Life developed around rivers, lakes, hills, agriculture, and irrigation systems. Traditional farming, water resource management, village administration, and social harmony are described in various sources as important elements of the Kohli community's historical way of life." data-lang-mr="नदी, तलाव, डोंगर, शेती आणि सिंचनव्यवस्थेच्या आसपास विकसित झालेले जीवन, पारंपरिक शेती, जलस्रोतांचे व्यवस्थापन, ग्रामव्यवस्था आणि सामाजिक एकोपा हे कोहळी समाजाच्या ऐतिहासिक जीवनपद्धतीतील महत्त्वाचे घटक म्हणून विविध स्रोतांमध्ये वर्णन केलेले आढळतात.">
                        Life developed around rivers, lakes, hills, agriculture, and irrigation systems. Traditional farming, water resource management, village administration, and social harmony are described in various sources as important elements of the Kohli community's historical way of life.
                    </p>
                    <p style="line-height:1.8; font-size:1.02rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="Over time, the community has also moved from traditional agriculture and rural life towards education, business, technology, social work, and modern professional sectors." data-lang-mr="काळानुसार समाजाने पारंपरिक शेती आणि ग्रामजीवनातून शिक्षण, व्यवसाय, तंत्रज्ञान, सामाजिक कार्य आणि आधुनिक व्यावसायिक क्षेत्राकडेही वाटचाल केली class=">
                        Over time, the community has also moved from traditional agriculture and rural life towards education, business, technology, social work, and modern professional sectors.
                    </p>
                </div>

                <!-- SECTION 1: ऐतिहासिक उपस्थिती -->
                <div id="sec-presence" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin-bottom:1rem;" data-lang-en="Historical Presence in Vidarbha" data-lang-mr="विदर्भातील ऐतिहासिक उपस्थिती">Historical Presence in Vidarbha</h3>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="In available historical references, the presence of the Kohli community is found to be associated with the eastern Vidarbha districts of Bhandara, Gondia, Chandrapur, and Gadchiroli, as well as the Balaghat region in Madhya Pradesh." data-lang-mr="उपलब्ध ऐतिहासिक संदर्भांमध्ये कोहळी समाजाची उपस्थिती पूर्व विदर्भातील भंडारा, गोंदिया, चंद्रपूर आणि गडचिरोली तसेच मध्यप्रदेशातील बालाघाट परिसराशी संबंधित असल्याचे आढळते.">
                        In available historical references, the presence of the Kohli community is found to be associated with the eastern Vidarbha districts of Bhandara, Gondia, Chandrapur, and Gadchiroli, as well as the Balaghat region in Madhya Pradesh.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1.5rem;" data-lang-en="Community literature also mentions that community members have settled in cities like Nagpur, Pune, and Mumbai for education, employment, and business. However, regarding the community's origins, various historical opinions, local traditions, and community narratives exist. Therefore, a single origin story should not be cited as an undisputed historical conclusion on the website." data-lang-mr="समुदायाच्या उपलब्ध लेखनात नागपूर, पुणे आणि मुंबईसारख्या शहरांमध्ये शिक्षण, नोकरी आणि व्यवसायाच्या निमित्ताने समाजबांधव स्थायिक झाल्याचाही उल्लेख आहे. समाजाच्या उगमाबाबत मात्र विविध ऐतिहासिक मते, स्थानिक परंपरा आणि समुदायीय कथन आढळतात. त्यामुळे वेबसाइटवर एकाच उगमकथेचा निर्विवाद ऐतिहासिक निष्कर्ष म्हणून उल्लेख करू नये.">
                        Community literature also mentions that community members have settled in cities like Nagpur, Pune, and Mumbai for education, employment, and business. However, regarding the community's origins, various historical opinions, local traditions, and community narratives exist. Therefore, a single origin story should not be cited as an undisputed historical conclusion on the website.
                    </p>
                    
                    <div style="display:flex; flex-wrap:wrap; gap:0.8rem; margin-bottom:1.5rem;">
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.6rem 1rem; border-radius:8px; font-weight:700; color:var(--primary-dark);" data-lang-en="Bhandara" data-lang-mr="भंडारा">Bhandara</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.6rem 1rem; border-radius:8px; font-weight:700; color:var(--primary-dark);" data-lang-en="Gondia" data-lang-mr="गोंदिया">Gondia</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.6rem 1rem; border-radius:8px; font-weight:700; color:var(--primary-dark);" data-lang-en="Chandrapur" data-lang-mr="चंद्रपूर">Chandrapur</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.6rem 1rem; border-radius:8px; font-weight:700; color:var(--primary-dark);" data-lang-en="Gadchiroli" data-lang-mr="गडचिरोली">Gadchiroli</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.6rem 1rem; border-radius:8px; font-weight:700; color:var(--primary-dark);" data-lang-en="Balaghat" data-lang-mr="बालाघाट">Balaghat</span>
                    </div>

                    <h4 style="color:var(--text-muted); font-size:1.05rem; font-weight:600; margin-bottom:0.8rem;" data-lang-en="Modern Urban Presence" data-lang-mr="आधुनिक शहरी उपस्थिती">Modern Urban Presence</h4>
                    <div style="display:flex; flex-wrap:wrap; gap:0.8rem;">
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; color:var(--text-main);" data-lang-en="Nagpur" data-lang-mr="नागपूर">Nagpur</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; color:var(--text-main);" data-lang-en="Pune" data-lang-mr="पुणे">Pune</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; color:var(--text-main);" data-lang-en="Mumbai" data-lang-mr="मुंबई">Mumbai</span>
                    </div>
                </div>

                <!-- SECTION 2: ऐतिहासिक जीवनपद्धती -->
                <div id="sec-livelihood" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin-bottom:1rem;" data-lang-en="Farming, Village Life & Traditional Livelihood" data-lang-mr="शेती, ग्रामजीवन आणि पारंपरिक उपजीविका">Farming, Village Life & Traditional Livelihood</h3>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="Agriculture held an important place in the traditional life of the Kohli community. Available historical references mention agricultural life related to rice farming, sugarcane cultivation, irrigation, and water resources." data-lang-mr="कोहळी समाजाच्या पारंपरिक जीवनात शेतीला महत्त्वाचे स्थान होते. उपलब्ध ऐतिहासिक संदर्भांमध्ये भात शेती, ऊस लागवड, सिंचन आणि जलस्रोतांशी संबंधित कृषीजीवनाचे उल्लेख आढळतात.">
                        Agriculture held an important place in the traditional life of the Kohli community. Available historical references mention agricultural life related to rice farming, sugarcane cultivation, irrigation, and water resources.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1.5rem;" data-lang-en="Along with agriculture, animal husbandry, jaggery production, and traditional work related to village water systems were also part of social and economic life. Developing agriculture according to the availability of water resources and utilizing water through tanks, dams, and canals was a tradition deeply connected to rural life in Vidarbha." data-lang-mr="शेतीसोबत पशुपालन, गुळनिर्मिती आणि गावाच्या जलव्यवस्थेशी संबंधित पारंपरिक कामेही सामाजिक व आर्थिक जीवनाचा भाग होती. जलस्रोतांच्या उपलब्धतेनुसार शेती विकसित करणे आणि तलाव, बंधारे व कालव्यांच्या माध्यमातून पाण्याचा उपयोग करणे ही परंपरा विदर्भातील ग्रामीण जीवनाशी जोडलेली होती.">
                        Along with agriculture, animal husbandry, jaggery production, and traditional work related to village water systems were also part of social and economic life. Developing agriculture according to the availability of water resources and utilizing water through tanks, dams, and canals was a tradition deeply connected to rural life in Vidarbha.
                    </p>
                    
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:1rem;">
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-seedling" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Rice Farming" data-lang-mr="भात शेती">Rice Farming</div>
                        </div>
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-leaf" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Sugarcane Farming" data-lang-mr="ऊस शेती">Sugarcane Farming</div>
                        </div>
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-fire-burner" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Jaggery Production" data-lang-mr="गुळनिर्मिती">Jaggery Production</div>
                        </div>
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-water" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Irrigation" data-lang-mr="सिंचन">Irrigation</div>
                        </div>
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-cow" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Animal Husbandry" data-lang-mr="पशुपालन">Animal Husbandry</div>
                        </div>
                        <div style="background:white; border:1px solid var(--border-color); border-radius:8px; padding:1rem; text-align:center; box-shadow:var(--shadow-sm);">
                            <i class="fa-solid fa-house-chimney" style="font-size:1.6rem; color:var(--accent-gold); margin-bottom:0.5rem;"></i>
                            <div style="font-weight:700; color:var(--primary-dark);" data-lang-en="Village Life" data-lang-mr="ग्रामजीवन">Village Life</div>
                        </div>
                    </div>
                </div>

                <!-- SECTION 3: पाटील आणि मालगुजार परंपरा -->
                <div id="sec-patil" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin:0;" data-lang-en="Patil, Malguzar and Village Administration" data-lang-mr="पाटील, मालगुजार आणि ग्रामव्यवस्था">Patil, Malguzar and Village Administration</h3>
                        <span class="badge-source badge-record" style="background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-book"></i> <span data-lang-en="Community Source" data-lang-mr="समुदायीय स्रोत">Community Source</span></span>
                    </div>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="Historical writings within the community and available references mention Kohli Patil and Malguzar families in certain areas. It is described in the community's historical memory that the Patil or Malguzar played a role in village agricultural affairs, water management, social coordination, local decision-making, and village life." data-lang-mr="समुदायातील ऐतिहासिक लेखन आणि उपलब्ध संदर्भांमध्ये काही भागांतील कोहळी पाटील आणि मालगुजार घराण्यांचा उल्लेख आढळतो. गावातील शेतीविषयक व्यवहार, जलव्यवस्था, सामाजिक समन्वय, स्थानिक निर्णयप्रक्रिया आणि ग्रामजीवनात पाटील किंवा मालगुजार यांची भूमिका असल्याचे समुदायाच्या ऐतिहासिक स्मृतीमध्ये वर्णन केले जाते.">
                        Historical writings within the community and available references mention Kohli Patil and Malguzar families in certain areas. It is described in the community's historical memory that the Patil or Malguzar played a role in village agricultural affairs, water management, social coordination, local decision-making, and village life.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1.5rem;" data-lang-en="While studying this tradition, it should not be assumed that the social system was identical in every village. Roles could vary depending on local circumstances." data-lang-mr="या परंपरेचा अभ्यास करताना प्रत्येक गावातील सामाजिक व्यवस्था समान होती असे गृहीत धरू नये. स्थानिक परिस्थितीनुसार भूमिका बदलत असू शकतात.">
                        While studying this tradition, it should not be assumed that the social system was identical in every village. Roles could vary depending on local circumstances.
                    </p>

                    <div style="display:flex; flex-direction:column; gap:0.8rem;">
                        <div style="background:white; border-left:4px solid var(--accent-gold); padding:1rem; border-radius:6px; box-shadow:var(--shadow-sm);">
                            <strong style="color:var(--primary-dark);" data-lang-en="Patil" data-lang-mr="पाटील">Patil</strong> → <span data-lang-en="Village Administration" data-lang-mr="ग्रामव्यवस्था">Village Administration</span>
                        </div>
                        <div style="background:white; border-left:4px solid var(--accent-gold); padding:1rem; border-radius:6px; box-shadow:var(--shadow-sm);">
                            <strong style="color:var(--primary-dark);" data-lang-en="Malguzar" data-lang-mr="मालगुजार">Malguzar</strong> → <span data-lang-en="Land & Revenue System" data-lang-mr="जमीन व महसूल व्यवस्था">Land & Revenue System</span>
                        </div>
                        <div style="background:white; border-left:4px solid var(--accent-gold); padding:1rem; border-radius:6px; box-shadow:var(--shadow-sm);">
                            <strong style="color:var(--primary-dark);" data-lang-en="Community" data-lang-mr="समुदाय">Community</strong> → <span data-lang-en="Agriculture, Water Management & Social Coordination" data-lang-mr="शेती, जलव्यवस्था आणि सामाजिक समन्वय">Agriculture, Water Management & Social Coordination</span>
                        </div>
                    </div>
                </div>

                <!-- SECTION 4: जलव्यवस्थापन -->
                <div id="sec-water" class="history-tab-section" style="background:var(--bg-cream); padding:1.8rem; border-radius:12px; margin-bottom: 2.5rem; border:1px solid var(--border-color);">
                    <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin-bottom:1rem;" data-lang-en="Water Management — An Important Part of Kohli Historical Life" data-lang-mr="जलव्यवस्थापन — कोहळी समाजाच्या ऐतिहासिक जीवनाचा महत्त्वाचा भाग">Water Management — An Important Part of Kohli Historical Life</h3>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="The connection of the Kohli community's historical life with tanks, irrigation, and water management is found in various community and historical references. Providing water for agriculture through tanks, dams, canals, and reservoirs, planning water usage, and utilizing available water resources communally were important skills in rural life." data-lang-mr="कोहळी समाजाच्या ऐतिहासिक जीवनाशी तलाव, सिंचन आणि जलव्यवस्थापनाचा संबंध विविध समुदायीय आणि ऐतिहासिक संदर्भांमध्ये आढळतो. तलाव, बंधारे, कालवे आणि पाणीसाठ्यांच्या माध्यमातून शेतीसाठी पाणी उपलब्ध करून देणे, पाण्याचे नियोजन करणे आणि उपलब्ध जलस्रोतांचा सामुदायिक उपयोग करणे ही ग्रामीण जीवनातील महत्त्वाची कौशल्ये होती.">
                        The connection of the Kohli community's historical life with tanks, irrigation, and water management is found in various community and historical references. Providing water for agriculture through tanks, dams, canals, and reservoirs, planning water usage, and utilizing available water resources communally were important skills in rural life.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1.5rem;" data-lang-en="The concept of 'Samaj Tithe Talav' (Where there is the community, there is a tank) is presented as a cultural symbol of this water tradition within the community." data-lang-mr="'समाज तिथे तलाव' ही संकल्पना या जलपरंपरेचे समुदायातील सांस्कृतिक प्रतीक म्हणून मांडली जाते.">
                        The concept of 'Samaj Tithe Talav' (Where there is the community, there is a tank) is presented as a cultural symbol of this water tradition within the community.
                    </p>
                    <a href="water-heritage.html" class="btn-gold-fill" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem 1.2rem; font-size:0.95rem; border-radius:6px; font-weight:700;">
                        <i class="fa-solid fa-droplet"></i>
                        <span data-lang-en="Detailed History of Water Management →" data-lang-mr="जलव्यवस्थापनाचा सविस्तर इतिहास →">Detailed History of Water Management →</span>
                    </a>
                </div>

                <!-- SECTION 5: ऊस आणि गुळनिर्मिती -->
                <div id="sec-sugarcane" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin:0;" data-lang-en="Sugarcane Cultivation & Jaggery Production" data-lang-mr="ऊस शेती आणि गुळनिर्मिती">Sugarcane Cultivation & Jaggery Production</h3>
                        <span class="badge-source badge-record" style="background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-file-lines"></i> <span data-lang-en="Historical Source" data-lang-mr="ऐतिहासिक स्रोत">Historical Source</span></span>
                    </div>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="Available historical and community writings mention the association of sugarcane farming and jaggery production with the life of the Kohli community. Extracting sugarcane juice using traditional methods, making jaggery on furnaces, and selling it in local markets was a traditional livelihood in some areas." data-lang-mr="उपलब्ध ऐतिहासिक आणि समुदायीय लेखनात कोहळी समाजाच्या जीवनाशी ऊस शेती आणि गुळनिर्मितीचा संबंध नमूद केला आहे. पारंपरिक पद्धतीने ऊसाचा रस काढणे, भट्टीवर गुळ तयार करणे आणि स्थानिक बाजारपेठेत त्याची विक्री करणे ही काही भागांतील पारंपरिक उपजीविका होती.">
                        Available historical and community writings mention the association of sugarcane farming and jaggery production with the life of the Kohli community. Extracting sugarcane juice using traditional methods, making jaggery on furnaces, and selling it in local markets was a traditional livelihood in some areas.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:0;" data-lang-en="Today, in some places, this tradition continues with modern equipment." data-lang-mr="आज काही ठिकाणी ही परंपरा आधुनिक साधनांसह पुढे चालू आहे.">
                        Today, in some places, this tradition continues with modern equipment.
                    </p>
                </div>

                <!-- SECTION 6: धान आणि पारंपरिक शेती -->
                <div id="sec-rice" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin:0;" data-lang-en="Rice Farming & Agricultural Traditions" data-lang-mr="भात शेती आणि कृषीपरंपरा">Rice Farming & Agricultural Traditions</h3>
                        <span class="badge-source badge-record" style="background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-users"></i> <span data-lang-en="Community Source" data-lang-mr="समुदायीय स्रोत">Community Source</span></span>
                    </div>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="The rural agricultural life of the community was closely tied to rice (paddy) farming, irrigation, and farming near tanks. According to community-reported information, traditional rice varieties such as Luchai, Chinnor, and Dubraj were cultivated." data-lang-mr="समुदायाचे ग्रामीण कृषीजीवन भात (धान) शेती, सिंचन आणि तलावाशेजारील शेतीशी घट्ट जोडलेले होते. समुदाय-नोंदीत माहितीनुसार, लुचाई, चिन्नोर आणि दुबराज यांसारख्या पारंपरिक भाताच्या जातींची लागवड केली जात असे.">
                        The rural agricultural life of the community was closely tied to rice (paddy) farming, irrigation, and farming near tanks. According to community-reported information, traditional rice varieties such as Luchai, Chinnor, and Dubraj were cultivated.
                    </p>
                    <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.85rem; color:var(--primary-dark);" data-lang-en="Luchai" data-lang-mr="लुचाई">Luchai</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.85rem; color:var(--primary-dark);" data-lang-en="Chinnor" data-lang-mr="चिन्नोर">Chinnor</span>
                        <span style="background:var(--bg-cream); border:1px solid var(--border-color); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.85rem; color:var(--primary-dark);" data-lang-en="Dubraj" data-lang-mr="दुबराज">Dubraj</span>
                    </div>
                    <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.8rem; font-style:italic;" data-lang-en="*Community-reported traditional varieties." data-lang-mr="*समुदाय-नोंदीत पारंपरिक जाती.">
                        *Community-reported traditional varieties.
                    </p>
                </div>

                <!-- SECTION 7: ग्रामजीवन आणि सामाजिक संबंध -->
                <div id="sec-village" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin:0;" data-lang-en="Village Life & Social Relations" data-lang-mr="ग्रामजीवन आणि सामाजिक एकोपा">Village Life & Social Relations</h3>
                        <span class="badge-source badge-record" style="background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-users"></i> <span data-lang-en="Community Source" data-lang-mr="समुदायीय स्रोत">Community Source</span></span>
                    </div>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="According to older writings of the community, village life was centered around agriculture, animal husbandry, social relationships, and mutual cooperation. Mentions of the Patil Wada, social coordination within the village, agriculture-related activities, and mutual relations with communities engaged in various traditional occupations are found in old community narratives." data-lang-mr="समुदायाच्या जुन्या लेखनानुसार गावातील जीवन हे शेती, पशुपालन, सामाजिक संबंध आणि परस्पर सहकार्याभोवती केंद्रित होते. पाटील वाडा, गावातील सामाजिक समन्वय, शेतीशी संबंधित कामे आणि विविध पारंपरिक व्यवसाय करणाऱ्या समुदायांशी परस्पर संबंध यांचा उल्लेख जुन्या समुदायीय कथनांमध्ये आढळतो.">
                        According to older writings of the community, village life was centered around agriculture, animal husbandry, social relationships, and mutual cooperation. Mentions of the Patil Wada, social coordination within the village, agriculture-related activities, and mutual relations with communities engaged in various traditional occupations are found in old community narratives.
                    </p>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:0;" data-lang-en="This description should be presented as the social memory and experience of that era; it should not be concluded that an identical system existed in all villages." data-lang-mr="हे वर्णन त्या काळातील सामाजिक स्मृती आणि अनुभव म्हणून सादर करावे; सर्व गावांमध्ये समान व्यवस्था होती असा निष्कर्ष काढू नये.">
                        This description should be presented as the social memory and experience of that era; it should not be concluded that an identical system existed in all villages.
                    </p>
                </div>

                <!-- SECTION 8: संयुक्त कुटुंब आणि सामाजिक बदल -->
                <div id="sec-family" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:1rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin:0;" data-lang-en="From Joint Families to Modern Life" data-lang-mr="संयुक्त कुटुंबापासून आधुनिक जीवनाकडे">From Joint Families to Modern Life</h3>
                        <span class="badge-source badge-record" style="background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-users"></i> <span data-lang-en="Community Source" data-lang-mr="समुदायीय स्रोत">Community Source</span></span>
                    </div>
                    <p style="line-height:1.8; font-size:1rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="According to available literature within the community, in the past, many generations lived together in joint families. There was collective participation of family members in agriculture, animal husbandry, household chores, and economic responsibilities. Due to education, urbanization, and changing lifestyles, the nuclear family system increased in subsequent periods. Nevertheless, a sense of community is maintained in many places due to collective participation in festivals, family ceremonies, and social events." data-lang-mr="समुदायातील उपलब्ध लेखनानुसार पूर्वी अनेक कुटुंबांमध्ये अनेक पिढ्या एकत्र राहत असत. शेती, पशुपालन, घरकाम आणि आर्थिक जबाबदाऱ्यांमध्ये कुटुंबातील सदस्यांचा सामूहिक सहभाग असे. शिक्षण, शहरीकरण आणि बदलती जीवनशैली यांमुळे पुढील काळात विभक्त कुटुंबपद्धती वाढली. तरीही सण, कौटुंबिक समारंभ आणि सामाजिक कार्यक्रमांमधील सामूहिक सहभागामुळे समुदायभावना अनेक ठिकाणी टिकून आहे.">
                        According to available literature within the community, in the past, many generations lived together in joint families. There was collective participation of family members in agriculture, animal husbandry, household chores, and economic responsibilities. Due to education, urbanization, and changing lifestyles, the nuclear family system increased in subsequent periods. Nevertheless, a sense of community is maintained in many places due to collective participation in festivals, family ceremonies, and social events.
                    </p>
                    <div style="background:#fff3cd; border-left:4px solid #ffc107; padding:0.8rem 1rem; border-radius:4px; font-size:0.85rem; color:#856404;">
                        <strong data-lang-en="Note: " data-lang-mr="टीप: ">Note: </strong>
                        <span data-lang-en="Available community writings mention different years such as 1995 and 2001 for changes in the joint family system. More historical sources are needed to determine an accurate timeline." data-lang-mr="उपलब्ध समुदाय लेखनात संयुक्त कुटुंबपद्धतीतील बदलासाठी 1995 आणि 2001 अशी वेगवेगळी वर्षे नमूद झाली आहेत. अचूक कालमर्यादा निश्चित करण्यासाठी अधिक ऐतिहासिक स्रोतांची आवश्यकता आहे.">
                            Available community writings mention different years such as 1995 and 2001 for changes in the joint family system. More historical sources are needed to determine an accurate timeline.
                        </span>
                    </div>
                </div>

                <!-- SECTION 9: ऐतिहासिक नावांची रूपे -->
                <div id="sec-spellings" class="history-tab-section" style="background: var(--bg-cream); padding: 1.8rem; border-radius: 12px; border: 1.5px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 2.5rem;">
                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:0.8rem;">
                        <h3 style="color:var(--primary-dark); font-size:1.25rem; font-weight:800; margin:0;" data-lang-en="Historical Names & Transliterations" data-lang-mr="ऐतिहासिक दस्तऐवजांमधील नावांची रूपे">Historical Names & Transliterations</h3>
                        <span class="badge-source badge-record" style="background:#f0f4ff; color:#3b5bdb; border:1px solid #bac8ff; padding:0.2rem 0.6rem; border-radius:6px; font-size:0.75rem;"><i class="fa-solid fa-file-contract"></i> <span data-lang-en="Administrative Records" data-lang-mr="प्रशासकीय नोंदी">Administrative Records</span></span>
                    </div>
                    <p style="line-height:1.7; font-size:0.95rem; color:var(--text-main); margin-bottom:1rem;" data-lang-en="In old English and administrative documents, the writing of names of local communities is found in different forms according to the transliteration practices of that era." data-lang-mr="जुन्या इंग्रजी आणि प्रशासकीय दस्तऐवजांमध्ये स्थानिक समुदायांच्या नावांचे लेखन त्या काळातील transliteration पद्धतीनुसार वेगवेगळ्या प्रकारे आढळते.">
                        In old English and administrative documents, the writing of names of local communities is found in different forms according to the transliteration practices of that era.
                    </p>
                    <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1rem;">
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kohli</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kohri</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kohiree</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kohulee</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Koholee</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kohoree</span>
                        <span style="background:white; border:1px solid var(--border-color); padding:0.4rem 0.8rem; border-radius:6px; font-weight:700; color:var(--primary-dark);">Kaulees</span>
                    </div>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin:0; font-style:italic;" data-lang-en="Note: These various written forms are shown as forms/spellings found in available historical references. They should not be understood as separate modern official social classifications." data-lang-mr="टीप: ही विविध लेखनरूपे उपलब्ध ऐतिहासिक संदर्भांमध्ये आढळणारी forms/spellings म्हणून दाखवली आहेत. त्यांना स्वतंत्र आधुनिक अधिकृत सामाजिक वर्गीकरण म्हणून समजू नये.">
                        Note: These various written forms are shown as forms/spellings found in available historical references. They should not be understood as separate modern official social classifications.
                    </p>
                </div>

                <!-- SECTION 10: ऐतिहासिक स्रोतांचा आढावा -->
                <div id="sec-sources" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin-bottom:1.2rem;" data-lang-en="Available Sources for Understanding History" data-lang-mr="इतिहास समजून घेण्यासाठी उपलब्ध स्रोत">Available Sources for Understanding History</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
                        
                        <!-- Source Cards -->
                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Gazetteer" data-lang-mr="गॅझेटिअर">Gazetteer</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Central Provinces Gazetteer</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: Central Provinces" data-lang-mr="प्रदेश: सेंट्रल प्रॉव्हिन्सेस">Region: Central Provinces</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Contains general references to the community's presence and administration." data-lang-mr="समाजाची उपस्थिती आणि प्रशासनाचे सामान्य संदर्भ आहेत.">Contains general references to the community's presence and administration.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Settlement Report" data-lang-mr="सेटलमेंट रिपोर्ट">Settlement Report</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Chanda Settlement Report</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: Chanda (1869)" data-lang-mr="प्रदेश: चांदा (१८६९)">Region: Chanda (1869)</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Documents historical land revenues and Malguzari settlements." data-lang-mr="ऐतिहासिक जमीन महसूल आणि मालगुजारी सेटलमेंटचे दस्तऐवज.">Documents historical land revenues and Malguzari settlements.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Demographics" data-lang-mr="जनगणना">Demographics</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Census of India</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Various Years" data-lang-mr="विविध वर्षे">Various Years</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Provides historical population and occupational data." data-lang-mr="ऐतिहासिक लोकसंख्या आणि व्यावसायिक माहिती प्रदान करते.">Provides historical population and occupational data.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Gazetteer" data-lang-mr="गॅझेटिअर">Gazetteer</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Imperial Gazetteer of India</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: India" data-lang-mr="प्रदेश: भारत">Region: India</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Broad national-level historical context and administration." data-lang-mr="विस्तृत राष्ट्रीय पातळीवरील ऐतिहासिक संदर्भ आणि प्रशासन.">Broad national-level historical context and administration.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Ethnographic Report" data-lang-mr="वांशिक अहवाल">Ethnographic Report</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Tribes and Castes of the CP</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="By R. V. Russell & Hiralal" data-lang-mr="लेखक: आर. व्ही. रसेल व हिरालाल">By R. V. Russell & Hiralal</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Contains ethnographic notes and historical descriptions." data-lang-mr="वांशिक नोंदी आणि ऐतिहासिक वर्णने समाविष्ट आहेत.">Contains ethnographic notes and historical descriptions.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Gazetteer" data-lang-mr="गॅझेटिअर">Gazetteer</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Bhandara District Gazetteer</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: Bhandara" data-lang-mr="प्रदेश: भंडारा">Region: Bhandara</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Specific mentions of community agricultural and water engineering." data-lang-mr="समाज कृषी आणि जल अभियांत्रिकीचे विशिष्ट उल्लेख.">Specific mentions of community agricultural and water engineering.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Gazetteer" data-lang-mr="गॅझेटिअर">Gazetteer</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Chanda District Gazetteer</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: Chandrapur" data-lang-mr="प्रदेश: चंद्रपूर">Region: Chandrapur</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Details on local landholdings, irrigation, and society." data-lang-mr="स्थानिक जमीनधारणा, सिंचन आणि समाजाचा तपशील.">Details on local landholdings, irrigation, and society.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Gazetteer" data-lang-mr="गॅझेटिअर">Gazetteer</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Maharashtra State Gazetteer</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Region: Maharashtra State" data-lang-mr="प्रदेश: महाराष्ट्र राज्य">Region: Maharashtra State</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Post-independence revised historical documentation." data-lang-mr="स्वातंत्र्योत्तर सुधारित ऐतिहासिक दस्तऐवजीकरण.">Post-independence revised historical documentation.</div>
                        </div>

                        <div style="background:white; border:1px solid var(--border-color); padding:1rem; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-bottom:0.3rem;" data-lang-en="Community Source" data-lang-mr="समुदाय प्रकाशने">Community Source</div>
                            <strong style="color:var(--primary-dark); font-size:1.05rem; display:block; margin-bottom:0.2rem;">Community Publications</strong>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.2rem;" data-lang-en="Various Articles & Books" data-lang-mr="विविध लेख व पुस्तके">Various Articles & Books</div>
                            <div style="font-size:0.85rem; color:var(--text-muted);" data-lang-en="Oral histories, historical articles, and community narratives." data-lang-mr="मौखिक इतिहास, ऐतिहासिक लेख आणि समुदाय कथने.">Oral histories, historical articles, and community narratives.</div>
                        </div>

                    </div>
                </div>

                <!-- SECTION 11: HISTORICAL RECORDS SUMMARY -->
                <div id="sec-stats" class="history-tab-section" style="margin-bottom: 2.5rem;">
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">
                        
                        <div style="background:linear-gradient(to bottom right, #ffffff, #fdfbfa); border:1px solid var(--border-color); border-top:3px solid var(--accent-gold); padding:1.5rem; border-radius:10px; box-shadow:var(--shadow-sm);">
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                                <h4 style="font-size:0.9rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;" data-lang-en="1911 Historical Population Record" data-lang-mr="1911 ऐतिहासिक लोकसंख्या नोंद">1911 Historical Population Record</h4>
                                <span class="badge-source badge-record" style="background:#f0f4ff; color:#3b5bdb; border:1px solid #bac8ff; padding:0.1rem 0.5rem; border-radius:4px; font-size:0.7rem;"><i class="fa-solid fa-file-contract"></i> <span data-lang-en="Historical Record" data-lang-mr="ऐतिहासिक नोंद">Historical Record</span></span>
                            </div>
                            <div style="font-size:2.4rem; font-weight:800; color:var(--primary-dark); margin-bottom:0.5rem;">11,399</div>
                            <p style="font-size:0.95rem; color:var(--text-main); margin-bottom:0.8rem; line-height:1.5;" data-lang-en="Historical statistical record of the Kohli community's population in Bhandara district from 1911." data-lang-mr="कोहळी समाजाची भंडारा जिल्ह्यातील 1911 च्या ऐतिहासिक सांख्यिकीय नोंदीतील लोकसंख्या.">
                                Historical statistical record of the Kohli community's population in Bhandara district from 1911.
                            </p>
                            <div style="font-size:0.8rem; color:var(--text-muted); background:var(--bg-cream); padding:0.4rem 0.6rem; border-radius:4px; display:inline-block;">
                                <i class="fa-solid fa-book-open"></i> <span data-lang-en="Source: Bhandara District / Central Provinces District Gazetteers statistical material" data-lang-mr="स्रोत: भंडारा जिल्हा / सेंट्रल प्रॉव्हिन्सेस डिस्ट्रिक्ट गॅझेटिअर्स सांख्यिकीय साहित्य">Source: Bhandara District / Central Provinces District Gazetteers statistical material</span>
                            </div>
                        </div>

                        <div style="background:linear-gradient(to bottom right, #ffffff, #fdfbfa); border:1px solid var(--border-color); border-top:3px solid var(--primary-dark); padding:1.5rem; border-radius:10px; box-shadow:var(--shadow-sm);">
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                                <h4 style="font-size:0.9rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;" data-lang-en="Historical Settlement Record" data-lang-mr="ऐतिहासिक सेटलमेंट नोंद">Historical Settlement Record</h4>
                                <span class="badge-source badge-record" style="background:#f0f4ff; color:#3b5bdb; border:1px solid #bac8ff; padding:0.1rem 0.5rem; border-radius:4px; font-size:0.7rem;"><i class="fa-solid fa-file-contract"></i> <span data-lang-en="Historical Record" data-lang-mr="ऐतिहासिक नोंद">Historical Record</span></span>
                            </div>
                            <div style="font-size:2.4rem; font-weight:800; color:var(--primary-dark); margin-bottom:0.5rem;">19,739</div>
                            <p style="font-size:0.95rem; color:var(--text-main); margin-bottom:0.8rem; line-height:1.5;" data-lang-en="Kohli/Kohri population recorded in the supplied historical Chanda/Bhandara settlement context." data-lang-mr="प्रदान केलेल्या ऐतिहासिक चांदा/भंडारा सेटलमेंट संदर्भानुसार नोंदवलेली कोहळी/कोहरी लोकसंख्या.">
                                Kohli/Kohri population recorded in the supplied historical Chanda/Bhandara settlement context.
                            </p>
                            <div style="font-size:0.85rem; color:var(--text-main); margin-bottom:0.8rem; display:flex; gap:2rem;">
                                <div>
                                    <strong data-lang-en="Breakdown:" data-lang-mr="विभागणी:">Breakdown:</strong><br>
                                    <span data-lang-en="Bhandara" data-lang-mr="भंडारा">Bhandara</span> — 12,097<br>
                                    <span data-lang-en="Chanda" data-lang-mr="चांदा">Chanda</span> — 7,602
                                </div>
                                <div>
                                    <strong data-lang-en="Additional figures:" data-lang-mr="अतिरिक्त आकडेवारी:">Additional figures:</strong><br>
                                    <span data-lang-en="Sakoli" data-lang-mr="साकोली">Sakoli</span> — 8,130<br>
                                    <span data-lang-en="Brahmapuri" data-lang-mr="ब्रह्मपुरी">Brahmapuri</span> — 6,578
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-muted); font-style:italic;" data-lang-en="Note: Historical administrative boundaries and source contexts differ; these historical figures should not be directly compared with present-day district populations." data-lang-mr="टीप: ऐतिहासिक प्रशासकीय सीमा आणि स्रोतांचे संदर्भ वेगळे आहेत; या ऐतिहासिक आकडेवारीची सध्याच्या जिल्हा लोकसंख्येशी थेट तुलना करू नये.">
                        Note: Historical administrative boundaries and source contexts differ; these historical figures should not be directly compared with present-day district populations.
                    </div>
                </div>

                <!-- SECTION 12: HISTORICAL INTERPRETATION NOTE -->
                <div id="sec-note" class="history-tab-section" style="background:#f8f9fa; border:1px solid #dee2e6; padding:1.5rem; border-radius:12px; margin-bottom: 2.5rem; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
                    <div style="display:flex; gap:1rem; align-items:flex-start;">
                        <i class="fa-solid fa-circle-info" style="font-size:1.5rem; color:#495057; margin-top:0.2rem;"></i>
                        <div>
                            <h4 style="color:#212529; font-size:1.15rem; font-weight:800; margin-bottom:0.6rem;" data-lang-en="Understanding Historical Sources" data-lang-mr="इतिहासातील स्रोत समजून घेताना">Understanding Historical Sources</h4>
                            <p style="font-size:0.95rem; color:#495057; line-height:1.6; margin-bottom:0.8rem;" data-lang-en="Available information regarding the history of the Kohli community includes government gazetteers, censuses, settlement reports, newspaper articles, community publications, and oral traditions." data-lang-mr="कोहळी समाजाच्या इतिहासाबाबत उपलब्ध माहितीमध्ये शासकीय गॅझेटिअर, जनगणना, सेटलमेंट रिपोर्ट, वृत्तपत्रीय लेख, समुदाय प्रकाशने आणि मौखिक परंपरा यांचा समावेश आहे.">
                                Available information regarding the history of the Kohli community includes government gazetteers, censuses, settlement reports, newspaper articles, community publications, and oral traditions.
                            </p>
                            <p style="font-size:0.95rem; color:#495057; line-height:1.6; margin-bottom:0.8rem;" data-lang-en="The standard and nature of all these sources are not identical. Government records, historical books, newspaper reports, and oral traditions within the community should be presented with their respective contexts." data-lang-mr="या सर्व स्रोतांचा दर्जा आणि स्वरूप समान नाही. शासकीय नोंद, ऐतिहासिक पुस्तक, वृत्तपत्रीय वृत्त आणि समुदायातील मौखिक परंपरा यांना त्यांच्या संबंधित संदर्भासह मांडण्यात यावे.">
                                The standard and nature of all these sources are not identical. Government records, historical books, newspaper reports, and oral traditions within the community should be presented with their respective contexts.
                            </p>
                            <p style="font-size:0.95rem; color:#495057; line-height:1.6; margin-bottom:0;" data-lang-en="Historical figures and references should be understood considering the changes in old administrative boundaries and the writing of community names." data-lang-mr="जुन्या प्रशासकीय सीमांमध्ये आणि समुदायाच्या नावांच्या लेखनात झालेल्या बदलांचा विचार करूनच ऐतिहासिक आकडे आणि उल्लेख समजून घ्यावेत.">
                                Historical figures and references should be understood considering the changes in old administrative boundaries and the writing of community names.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FOUR PILLARS REPLACEMENT: इतिहासाचे चार प्रमुख आयाम -->
                <div style="margin-bottom:2.5rem;">
                    <h3 style="color:var(--primary-dark); font-size:1.35rem; font-weight:800; margin-bottom:1.2rem;" data-lang-en="Four Key Dimensions of History" data-lang-mr="इतिहासाचे चार प्रमुख आयाम">Four Key Dimensions of History</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem;">
                        <a href="#sec-livelihood" style="display:block; text-decoration:none; background:var(--bg-cream); border:1.5px solid var(--border-color); border-radius:10px; padding:1.2rem; text-align:center; transition:var(--transition);">
                            <i class="fa-solid fa-seedling" style="font-size:2rem; color:var(--accent-gold); margin-bottom:0.6rem;"></i>
                            <h4 style="font-size:1.05rem; font-weight:700; color:var(--primary-dark); margin:0;" data-lang-en="Farming & Livelihood" data-lang-mr="शेती आणि उपजीविका">Farming & Livelihood</h4>
                        </a>
                        <a href="water-heritage.html" style="display:block; text-decoration:none; background:var(--bg-cream); border:1.5px solid var(--border-color); border-radius:10px; padding:1.2rem; text-align:center; transition:var(--transition);">
                            <i class="fa-solid fa-droplet" style="font-size:2rem; color:var(--accent-gold); margin-bottom:0.6rem;"></i>
                            <h4 style="font-size:1.05rem; font-weight:700; color:var(--primary-dark); margin:0;" data-lang-en="Water Management" data-lang-mr="जलव्यवस्थापन">Water Management</h4>
                        </a>
                        <a href="#sec-patil" style="display:block; text-decoration:none; background:var(--bg-cream); border:1.5px solid var(--border-color); border-radius:10px; padding:1.2rem; text-align:center; transition:var(--transition);">
                            <i class="fa-solid fa-building-columns" style="font-size:2rem; color:var(--accent-gold); margin-bottom:0.6rem;"></i>
                            <h4 style="font-size:1.05rem; font-weight:700; color:var(--primary-dark); margin:0;" data-lang-en="Village Administration" data-lang-mr="ग्रामव्यवस्था">Village Administration</h4>
                        </a>
                        <a href="#sec-village" style="display:block; text-decoration:none; background:var(--bg-cream); border:1.5px solid var(--border-color); border-radius:10px; padding:1.2rem; text-align:center; transition:var(--transition);">
                            <i class="fa-solid fa-people-roof" style="font-size:2rem; color:var(--accent-gold); margin-bottom:0.6rem;"></i>
                            <h4 style="font-size:1.05rem; font-weight:700; color:var(--primary-dark); margin:0;" data-lang-en="Social & Cultural Life" data-lang-mr="सामाजिक व सांस्कृतिक जीवन">Social & Cultural Life</h4>
                        </a>
                    </div>
                </div>

            </div>
`;

    let leftPart = content.substring(0, rightContentAreaStart);
    let rightPart = `        </div>\n    </main>\n\n    <!-- Footer -->` + content.split('<!-- Footer -->')[1];
    
    fs.writeFileSync(targetFile, leftPart + newContentHTML + rightPart);
    console.log("Updated history_clean.html successfully");
} else {
    console.log("Could not find start/end markers");
}
