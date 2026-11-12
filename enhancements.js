/* Stories From Space — learning summaries, progress, chapter reveal and 3-question mini-games */
(() => {
  const page = document.body.dataset.page;
  const isStory = ['voyager', 'curiosity', 'pioneer', 'apollo'].includes(page);
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  if (!isStory) return;

  const bank = {
    voyager: [
      [
        {q:['Who built Voyager 1?','من صنع فوياجر 1؟'],o:[['NASA','ESA','SpaceX'],['ناسا','وكالة الفضاء الأوروبية','سبيس إكس']],a:0,e:['NASA built Voyager 1.','ناسا هي التي صنعت فوياجر 1.']},
        {q:['When did Voyager 1 launch?','متى انطلقت فوياجر 1؟'],o:[['1977','1982','1969'],['1977','1982','1969']],a:0,e:['It launched on September 5, 1977.','انطلقت في 5 سبتمبر 1977.']},
        {q:['What is Voyager 1?','ما هي فوياجر 1؟'],o:[['A robotic spacecraft','A space station','A crewed rocket'],['مركبة فضائية روبوتية','محطة فضاء','صاروخ مأهول']],a:0,e:['Voyager 1 is an uncrewed robotic spacecraft.','فوياجر 1 مركبة فضائية روبوتية غير مأهولة.']}
      ],
      [
        {q:['Which planets did Voyager 1 visit?','ما الكوكبان اللذان زارتهما فوياجر 1؟'],o:[['Jupiter and Saturn','Earth and Mars','Venus and Mercury'],['المشتري وزحل','الأرض والمريخ','الزهرة وعطارد']],a:0,e:['Its close encounters included Jupiter and Saturn.','شملت زياراتها القريبة المشتري وزحل.']},
        {q:['What helped change its path?','ما الذي ساعد في تغيير مسارها؟'],o:[['Planetary gravity','Ocean currents','Solar sails only'],['جاذبية الكواكب','تيارات المحيطات','الأشرعة الشمسية فقط']],a:0,e:['Gravity assists helped change its speed and direction.','ساعدت الجاذبية في تغيير سرعتها واتجاهها.']},
        {q:['Why did scientists send it?','لماذا أرسلها العلماء؟'],o:[['To study giant planets up close','To carry people to Mars','To land on the Sun'],['لدراسة الكواكب العملاقة عن قرب','لنقل البشر إلى المريخ','للهبوط على الشمس']],a:0,e:['The mission gathered close-up images and measurements.','جمعت المهمة صورًا وقياسات عن قرب.']}
      ],
      [
        {q:['Which planet has a faint ring system Voyager helped study?','أي كوكب ساعدت فوياجر في دراسة حلقاته الخافتة؟'],o:[['Jupiter','Earth','Mercury'],['المشتري','الأرض','عطارد']],a:0,e:['Voyager observations helped confirm Jupiter’s faint rings.','ساعدت ملاحظات فوياجر في تأكيد وجود حلقات خافتة حول المشتري.']},
        {q:['Which Saturn moon has a thick atmosphere?','أي أقمار زحل له غلاف جوي كثيف؟'],o:[['Titan','Phobos','Europa'],['تيتان','فوبوس','أوروبا']],a:0,e:['Titan has a thick atmosphere rich in nitrogen.','تيتان له غلاف جوي كثيف غني بالنيتروجين.']},
        {q:['What did Voyager discover near Jupiter?','ماذا اكتشفت فوياجر بالقرب من المشتري؟'],o:[['Two moons','A new ocean','A second Sun'],['قمرين','محيطًا جديدًا','شمسًا ثانية']],a:0,e:['Voyager 1 discovered two moons of Jupiter: Thebe and Metis.','اكتشفت فوياجر 1 قمرين للمشتري: ثيبي وميتيس.']}
      ],
      [
        {q:['When did Voyager 1 enter interstellar space?','متى دخلت فوياجر 1 الفضاء بين النجوم؟'],o:[['2012','1977','2024'],['2012','1977','2024']],a:0,e:['It crossed the heliopause in August 2012.','عبرت الحد الخارجي لفقاعة الشمس في أغسطس 2012.']},
        {q:['What is interstellar space?','ما المقصود بالفضاء بين النجوم؟'],o:[['Space between stars','The inside of Earth','The surface of the Moon'],['الفضاء بين النجوم','داخل الأرض','سطح القمر']],a:0,e:['It is the region of space between stars.','هي المنطقة الموجودة بين النجوم.']},
        {q:['Why do engineers switch off some instruments?','لماذا يوقف المهندسون بعض الأجهزة؟'],o:[['To save limited power','To make it turn faster','To change its color'],['لتوفير الطاقة المحدودة','لزيادة سرعتها','لتغيير لونها']],a:0,e:['Voyager has limited power, so engineers manage its instruments carefully.','طاقة فوياجر محدودة، لذلك يدير المهندسون أجهزتها بعناية.']}
      ],
      [
        {q:['What does the Golden Record carry?','ماذا يحمل القرص الذهبي؟'],o:[['Sounds, images and greetings','Fuel for the spacecraft','Moon rocks'],['أصواتًا وصورًا وتحيات','وقودًا للمركبة','صخورًا قمرية']],a:0,e:['The record carries a collection of sounds, images and greetings from Earth.','يحمل القرص مجموعة من الأصوات والصور والتحيات من الأرض.']},
        {q:['What is the record’s message?','ما رسالة القرص؟'],o:[['A hello from Earth','A map of Mars','A landing instruction'],['تحية من الأرض','خريطة للمريخ','تعليمات هبوط']],a:0,e:['It is a greeting representing life and culture on Earth.','إنه تحية تمثل الحياة والثقافة على الأرض.']},
        {q:['What idea does Voyager’s journey represent?','ماذا تمثل رحلة فوياجر؟'],o:[['Human curiosity and exploration','A race between oceans','A trip around Earth'],['فضول البشر وحب الاستكشاف','سباقًا بين المحيطات','رحلة حول الأرض']],a:0,e:['The mission shows how curiosity can take us far beyond Earth.','توضح المهمة كيف يمكن للفضول أن يأخذنا إلى ما وراء الأرض.']}
      ]
    ],
    curiosity: [
      [
        {q:['When did Curiosity land on Mars?','متى هبطت كيوريوسيتي على المريخ؟'],o:[['August 6, 2012','July 20, 1969','March 2, 1972'],['6 أغسطس 2012','20 يوليو 1969','2 مارس 1972']],a:0,e:['Curiosity landed on August 6, 2012.','هبطت كيوريوسيتي في 6 أغسطس 2012.']},
        {q:['Where did it land?','أين هبطت؟'],o:[['Gale Crater','Jezero Crater','The Moon'],['فوهة غيل','فوهة جيزيرو','القمر']],a:0,e:['It landed inside Gale Crater.','هبطت داخل فوهة غيل.']},
        {q:['What kind of explorer is Curiosity?','ما نوع المستكشف كيوريوسيتي؟'],o:[['A robotic rover','A crewed lander','An orbiting telescope'],['مركبة جوالة روبوتية','مركبة هبوط مأهولة','تلسكوب يدور حول المريخ']],a:0,e:['Curiosity is a robotic rover that travels across Mars.','كيوريوسيتي مركبة جوالة روبوتية تتحرك على سطح المريخ.']}
      ],
      [
        {q:['What big question was Curiosity sent to investigate?','ما السؤال الكبير الذي أُرسلت كيوريوسيتي لدراسته؟'],o:[['Could ancient Mars support microbial life?','Can humans breathe unaided on Mars?','Does Mars have oceans today?'],['هل كان المريخ القديم مناسبًا للحياة الميكروبية؟','هل يستطيع البشر التنفس على المريخ دون معدات؟','هل توجد محيطات على المريخ اليوم؟']],a:0,e:['It investigates whether ancient environments could have supported microbes.','تبحث فيما إذا كانت البيئات القديمة قد دعمت كائنات دقيقة.']},
        {q:['What can its robotic arm do?','ماذا تستطيع ذراعها الآلية أن تفعل؟'],o:[['Brush and drill rocks','Launch satellites','Collect clouds'],['تنظيف الصخور وحفرها','إطلاق الأقمار الصناعية','جمع السحب']],a:0,e:['The arm can brush and drill rocks for study.','تستطيع الذراع تنظيف الصخور وحفرها لدراستها.']},
        {q:['What does its laser help examine?','ما الذي يساعد الليزر في فحصه؟'],o:[['Rock chemistry','The stars’ distance','Ocean depth'],['التركيب الكيميائي للصخور','المسافة بين النجوم','عمق المحيطات']],a:0,e:['The laser helps examine the chemistry of rocks from a distance.','يساعد الليزر في فحص التركيب الكيميائي للصخور عن بُعد.']}
      ],
      [
        {q:['What ancient environment did Curiosity find clues about?','ما البيئة القديمة التي وجدت كيوريوسيتي أدلة عليها؟'],o:[['Water-rich environments','A forest of trees','Active volcano cities'],['بيئات غنية بالماء','غابة من الأشجار','مدن براكين نشطة']],a:0,e:['Rocks point to ancient environments where water was present.','تشير الصخور إلى وجود الماء في بيئات المريخ القديمة.']},
        {q:['What are organic molecules?','ما الجزيئات العضوية؟'],o:[['Carbon-based molecules','Pieces of metal','Frozen oxygen only'],['جزيئات تحتوي على الكربون','قطع من المعادن','أكسجين متجمد فقط']],a:0,e:['Organic molecules contain carbon, but do not prove life by themselves.','تحتوي الجزيئات العضوية على الكربون، لكنها لا تثبت وجود حياة بمفردها.']},
        {q:['Do these clues prove life existed on Mars?','هل تثبت هذه الأدلة وجود حياة على المريخ؟'],o:[['No, they show possible habitable conditions','Yes, definitely','They prove plants live there now'],['لا، لكنها تشير إلى ظروف ربما كانت مناسبة للحياة','نعم، بالتأكيد','تثبت وجود نباتات هناك الآن']],a:0,e:['The clues suggest possible habitable conditions, not proof of life.','تشير الأدلة إلى ظروف ربما كانت مناسبة للحياة، لا إلى إثبات وجود حياة.']}
      ],
      [
        {q:['Which mountain is Curiosity exploring?','أي جبل تستكشفه كيوريوسيتي؟'],o:[['Mount Sharp','Olympus Mons summit only','Mount Everest'],['جبل شارب','قمة أوليمبوس مونس فقط','جبل إيفرست']],a:0,e:['Curiosity is exploring Mount Sharp inside Gale Crater.','تستكشف كيوريوسيتي جبل شارب داخل فوهة غيل.']},
        {q:['What does the rover send to Earth?','ماذا ترسل المركبة إلى الأرض؟'],o:[['Pictures and measurements','People and buildings','Liquid water'],['صورًا وقياسات','أشخاصًا ومباني','ماءً سائلًا']],a:0,e:['It sends images and scientific measurements to Earth.','ترسل صورًا وقياسات علمية إلى الأرض.']},
        {q:['Why explore different rock layers?','لماذا تستكشف طبقات الصخور المختلفة؟'],o:[['They record changes in Mars’ past','They are all made of ice','They hide radio stations'],['لأنها تسجل تغيرات ماضي المريخ','لأنها كلها جليد','لأنها تخفي محطات راديو']],a:0,e:['Rock layers can preserve clues about how Mars changed over time.','قد تحتفظ طبقات الصخور بأدلة على تغير المريخ عبر الزمن.']}
      ],
      [
        {q:['Can Curiosity bring a Mars rock sample home?','هل تستطيع كيوريوسيتي إعادة عينة صخرية من المريخ إلى الأرض؟'],o:[['No, it sends data and images','Yes, it carries samples to Earth','Only by using a rocket'],['لا، ترسل البيانات والصور','نعم، تحمل العينات إلى الأرض','فقط باستخدام صاروخ']],a:0,e:['Curiosity studies Mars in place and sends its findings to Earth.','تدرس كيوريوسيتي المريخ في موقعه وترسل نتائجها إلى الأرض.']},
        {q:['What helps scientists ask better questions?','ما الذي يساعد العلماء على طرح أسئلة أفضل؟'],o:[['Images and measurements','Guesswork alone','Changing the rover’s name'],['الصور والقياسات','التخمين وحده','تغيير اسم المركبة']],a:0,e:['Each image and measurement adds scientific evidence.','تضيف كل صورة وكل قياس دليلًا علميًا.']},
        {q:['Mars is Earth’s…','المريخ هو…'],o:[['Neighboring planet','Closest star','Natural satellite'],['كوكب مجاور للأرض','أقرب نجم','قمر طبيعي للأرض']],a:0,e:['Mars is one of Earth’s neighboring planets.','المريخ أحد الكواكب المجاورة للأرض.']}
      ]
    ],
    pioneer: [
      [
        {q:['When did Pioneer 10 launch?','متى انطلقت بايونير 10؟'],o:[['1972','1977','1969'],['1972','1977','1969']],a:0,e:['Pioneer 10 launched on March 2, 1972.','انطلقت بايونير 10 في 2 مارس 1972.']},
        {q:['Which organization built Pioneer 10?','أي جهة صنعت بايونير 10؟'],o:[['NASA','JAXA','ESA'],['ناسا','جاكسا','وكالة الفضاء الأوروبية']],a:0,e:['Pioneer 10 was a NASA robotic explorer.','بايونير 10 مركبة استكشاف روبوتية تابعة لناسا.']},
        {q:['Which giant planet was a major target?','ما الكوكب العملاق الذي كان هدفًا رئيسيًا؟'],o:[['Jupiter','Neptune','Earth'],['المشتري','نبتون','الأرض']],a:0,e:['Pioneer 10 was sent to study Jupiter.','أُرسلت بايونير 10 لدراسة المشتري.']}
      ],
      [
        {q:['What did scientists want Pioneer 10 to cross?','ماذا أراد العلماء من بايونير 10 أن تعبر؟'],o:[['The asteroid belt','The Atlantic Ocean','Saturn’s rings'],['حزام الكويكبات','المحيط الأطلسي','حلقات زحل']],a:0,e:['The mission tested whether a spacecraft could cross the asteroid belt safely.','اختبرت المهمة إمكانية عبور مركبة لحزام الكويكبات بأمان.']},
        {q:['What did its instruments study?','ماذا درست أجهزتها؟'],o:[['Magnetic fields and particles','Forest growth','Earthquakes on Earth'],['المجالات المغناطيسية والجسيمات','نمو الغابات','الزلازل على الأرض']],a:0,e:['Its instruments studied magnetic fields, particles, dust and Jupiter.','درست أجهزتها المجالات المغناطيسية والجسيمات والغبار والمشتري.']},
        {q:['What special object did it carry?','ما الشيء المميز الذي حملته؟'],o:[['A plaque about Earth','A telescope for the Moon','A crew cabin'],['لوحة تعريفية عن الأرض','تلسكوب للقمر','مقصورة للطاقم']],a:0,e:['Pioneer 10 carried a plaque showing people and our place in space.','حملت بايونير 10 لوحة تعرض البشر وموقعنا في الفضاء.']}
      ],
      [
        {q:['What was Pioneer 10 first to do?','ما الإنجاز الأول لبايونير 10؟'],o:[['Fly past Jupiter','Land on Saturn','Orbit the Moon'],['التحليق بالقرب من المشتري','الهبوط على زحل','الدوران حول القمر']],a:0,e:['It was the first spacecraft to fly past Jupiter.','كانت أول مركبة فضائية تحلق بالقرب من المشتري.']},
        {q:['What did it send back?','ماذا أرسلت إلى الأرض؟'],o:[['Close-up images and measurements','Moon soil','Astronauts'],['صورًا قريبة وقياسات','تربة قمرية','رواد فضاء']],a:0,e:['It returned close-up pictures and scientific measurements.','أرسلت صورًا قريبة وقياسات علمية.']},
        {q:['What did its measurements reveal?','ماذا كشفت قياساتها؟'],o:[['Jupiter’s atmosphere and radiation belts','A new continent','Life on Earth'],['غلاف المشتري الجوي وأحزمة الإشعاع','قارة جديدة','حياة على الأرض']],a:0,e:['The measurements revealed details about Jupiter’s atmosphere and radiation environment.','كشفت القياسات تفاصيل عن غلاف المشتري الجوي وبيئة الإشعاع حوله.']}
      ],
      [
        {q:['When did NASA receive Pioneer 10’s final signal?','متى استقبلت ناسا آخر إشارة من بايونير 10؟'],o:[['January 23, 2003','August 6, 2012','September 5, 1977'],['23 يناير 2003','6 أغسطس 2012','5 سبتمبر 1977']],a:0,e:['The final signal was received on January 23, 2003.','وصلت آخر إشارة في 23 يناير 2003.']},
        {q:['Why did communication stop?','لماذا توقف الاتصال؟'],o:[['Its power source weakened','It landed in the ocean','It ran out of fuel for its antenna'],['ضعف مصدر الطاقة','هبطت في المحيط','نفد وقود الهوائي']],a:0,e:['Its power source weakened until it could no longer send signals.','ضعف مصدر الطاقة حتى لم تعد قادرة على إرسال الإشارات.']},
        {q:['What is Pioneer 10 doing now according to the story?','ماذا تفعل بايونير 10 الآن وفقًا للقصة؟'],o:[['Coasting silently through space','Orbiting Earth','Driving on Mars'],['تواصل حركتها بصمت في الفضاء','تدور حول الأرض','تتحرك على المريخ']],a:0,e:['It continues coasting outward through space.','تواصل حركتها إلى الخارج عبر الفضاء.']}
      ],
      [
        {q:['How long did Pioneer 10 operate?','كم استمرت بايونير 10 في العمل؟'],o:[['More than three decades','Three months','Exactly one year'],['أكثر من ثلاثة عقود','ثلاثة أشهر','سنة واحدة بالضبط']],a:0,e:['It explored for more than three decades.','استكشفت الفضاء لأكثر من ثلاثة عقود.']},
        {q:['What does “pathfinder” mean here?','ماذا تعني كلمة «رائدة طريق» هنا؟'],o:[['It opened the way for later missions','It mapped roads on Earth','It carried road signs'],['فتحت الطريق لمهمات لاحقة','رسمت طرقًا على الأرض','حملت لافتات طرق']],a:0,e:['Later missions could build on the route and knowledge Pioneer helped establish.','استطاعت المهمات اللاحقة البناء على الطريق والمعرفة التي ساعدت بايونير في تأسيسهما.']},
        {q:['What did Pioneer 10 help demonstrate?','ما الذي ساعدت بايونير 10 في إثباته؟'],o:[['The outer Solar System was reachable','Jupiter is a star','Space has no radiation'],['إمكانية الوصول إلى أطراف النظام الشمسي','أن المشتري نجم','أن الفضاء بلا إشعاع']],a:0,e:['It showed that spacecraft could explore far beyond Mars.','أظهرت إمكانية استكشاف المركبات لمناطق بعيدة وراء المريخ.']}
      ]
    ],
    apollo: [
      [
        {q:['When did Apollo 11 land on the Moon?','متى هبطت أبولو 11 على القمر؟'],o:[['July 20, 1969','December 1972','August 2012'],['20 يوليو 1969','ديسمبر 1972','أغسطس 2012']],a:0,e:['Apollo 11 made its historic Moon landing on July 20, 1969.','حققت أبولو 11 هبوطها التاريخي على القمر في 20 يوليو 1969.']},
        {q:['Who walked on the Moon first during Apollo 11?','من أول من سار على القمر في أبولو 11؟'],o:[['Neil Armstrong and Buzz Aldrin','Michael Collins alone','The whole crew together'],['نيل أرمسترونغ وباز ألدرين','مايكل كولينز وحده','الطاقم كله معًا']],a:0,e:['Armstrong and Aldrin walked on the lunar surface while Collins orbited above.','سار أرمسترونغ وألدرين على سطح القمر بينما دار كولينز حوله.']},
        {q:['What was Apollo?','ما هو برنامج أبولو؟'],o:[['A family of NASA missions','One rover on Mars','A space telescope'],['مجموعة مهمات تابعة لناسا','مركبة جوالة على المريخ','تلسكوب فضائي']],a:0,e:['Apollo was a program made up of multiple missions.','أبولو برنامج يتكون من عدة مهمات.']}
      ],
      [
        {q:['What was Apollo’s main goal?','ما الهدف الرئيسي لأبولو؟'],o:[['Send humans to the Moon and return them safely','Build a city on Mars','Visit Jupiter'],['إرسال البشر إلى القمر وإعادتهم بأمان','بناء مدينة على المريخ','زيارة المشتري']],a:0,e:['The challenge was to reach the Moon and bring the astronauts safely home.','كان الهدف الوصول إلى القمر وإعادة رواد الفضاء إلى الأرض بأمان.']},
        {q:['Which systems did Apollo missions test?','ما الأنظمة التي اختبرتها مهمات أبولو؟'],o:[['Navigation and life support','Underwater engines','Weather balloons'],['الملاحة ودعم الحياة','محركات تحت الماء','بالونات الطقس']],a:0,e:['Apollo tested rockets, spacesuits, navigation and life-support systems.','اختبرت أبولو الصواريخ وبدلات الفضاء والملاحة وأنظمة دعم الحياة.']},
        {q:['Why were spacesuits important?','لماذا كانت بدلات الفضاء مهمة؟'],o:[['To help astronauts work safely in space','To make walking faster','To provide gravity'],['لمساعدة الرواد على العمل بأمان في الفضاء','لجعل المشي أسرع','لتوفير الجاذبية']],a:0,e:['Spacesuits helped protect astronauts while working outside their spacecraft.','ساعدت بدلات الفضاء في حماية الرواد أثناء العمل خارج المركبة.']}
      ],
      [
        {q:['What did Apollo astronauts collect?','ماذا جمع رواد أبولو؟'],o:[['Moon rock samples','Mars soil','Rings from Saturn'],['عينات من صخور القمر','تربة المريخ','حلقات من زحل']],a:0,e:['Astronauts collected lunar samples for scientists on Earth.','جمع الرواد عينات قمرية ليدرسها العلماء على الأرض.']},
        {q:['What did astronauts set up on the Moon?','ماذا وضع الرواد على القمر؟'],o:[['Scientific experiments','A permanent city','A swimming pool'],['تجارب علمية','مدينة دائمة','حمام سباحة']],a:0,e:['Crews set up instruments and experiments on the lunar surface.','وضع أفراد الطواقم أجهزة وتجارب على سطح القمر.']},
        {q:['What helped later crews travel farther?','ما الذي ساعد الطواقم اللاحقة على التحرك لمسافة أبعد؟'],o:[['A lunar rover','A submarine','A weather balloon'],['عربة قمرية','غواصة','بالون طقس']],a:0,e:['Later Apollo missions used a lunar rover to explore farther from the lander.','استخدمت مهمات أبولو اللاحقة عربة قمرية للاستكشاف بعيدًا عن مركبة الهبوط.']}
      ],
      [
        {q:['Which mission was the last crewed Moon landing in Apollo?','ما آخر مهمة هبوط مأهولة على القمر في برنامج أبولو؟'],o:[['Apollo 17','Apollo 11','Apollo 8'],['أبولو 17','أبولو 11','أبولو 8']],a:0,e:['Apollo 17 ended the program’s crewed lunar landings in December 1972.','أنهت أبولو 17 عمليات الهبوط المأهولة في ديسمبر 1972.']},
        {q:['What remains on the Moon?','ماذا بقي على القمر؟'],o:[['Landing sites and equipment','The astronauts','The launch rockets'],['مواقع الهبوط وبعض المعدات','رواد الفضاء','صواريخ الإطلاق']],a:0,e:['Landing sites and some equipment remain on the lunar surface.','ما زالت مواقع الهبوط وبعض المعدات موجودة على سطح القمر.']},
        {q:['Why are the samples still useful?','لماذا ما زالت العينات مفيدة؟'],o:[['Scientists continue studying them','They create oxygen','They power spacecraft'],['لأن العلماء يواصلون دراستها','لأنها تنتج الأكسجين','لأنها تشغل المركبات']],a:0,e:['Lunar samples continue to help scientists understand the Moon.','تساعد العينات القمرية العلماء حتى الآن على فهم القمر.']}
      ],
      [
        {q:['How many people helped make Apollo possible?','كم شخصًا ساهم في إنجاح أبولو؟'],o:[['Thousands','Only three','Exactly ten'],['آلاف الأشخاص','ثلاثة فقط','عشرة بالضبط']],a:0,e:['Thousands of people worked together across the Apollo program.','عمل آلاف الأشخاص معًا لإنجاح برنامج أبولو.']},
        {q:['What did Earth look like from the Moon?','كيف بدت الأرض من القمر؟'],o:[['Small and precious','Larger than the Sun','Invisible'],['صغيرة وثمينة','أكبر من الشمس','غير مرئية']],a:0,e:['The view made Earth seem small and precious.','جعل المنظر الأرض تبدو صغيرة وثمينة.']},
        {q:['What lesson does the Apollo story highlight?','ما الفكرة التي تبرزها حكاية أبولو؟'],o:[['Teamwork makes exploration possible','Exploration needs no planning','One person does everything'],['العمل الجماعي يجعل الاستكشاف ممكنًا','الاستكشاف لا يحتاج إلى تخطيط','شخص واحد يقوم بكل شيء']],a:0,e:['The missions depended on thousands of people working together.','اعتمدت المهمات على تعاون آلاف الأشخاص.']}
      ]
    ]
  };

  const ui = {
    en: {progress:'Your learning progress',completed:'summaries listened to',details:'Add more details',less:'Show less',listen:'Listen to me',listening:'Pause',game:'Mini game',start:'Start challenge',next:'Next question',retry:'Play again',finish:'Finish',correct:'Correct!',wrong:'Not quite — try again next time.',score:'Your score',done:'Challenge complete',q:'Question',unsupported:'Speech playback is not available in this browser.'},
    ar: {progress:'تقدمك في التعلم',completed:'ملخصات استمعت إليها',details:'اعرف تفاصيل أكتر',less:'عرض أقل',listen:'اسمعني',listening:'إيقاف مؤقت',game:'لعبة صغيرة',start:'ابدأ التحدي',next:'السؤال التالي',retry:'العب مرة أخرى',finish:'إنهاء',correct:'إجابة صحيحة!',wrong:'إجابة غير صحيحة، جرّب تاني!',score:'نتيجتك',done:'اكتمل التحدي',q:'السؤال',unsupported:'تشغيل الصوت غير متاح في هذا المتصفح.'}
  };

  // Count each press of "Listen to me" as one 20% learning step.
  // A separate v2 key avoids interpreting the older chapter-index array incorrectly.
  const progressKey = `sfs-summary-progress-clicks-v2-${page}`;
  let listenClicks = Math.max(0, Math.min(5, Number(localStorage.getItem(progressKey)) || 0));
  let activeUtterance = null;
  let activeButton = null;
  const lang = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';

  function updateProgress() {
    const percent = listenClicks * 20;
    const bar = $('#learningProgressFill');
    const number = $('#learningProgressValue');
    const label = $('#learningProgressLabel');
    if (bar) bar.style.width = `${percent}%`;
    if (number) number.textContent = `${percent}%`;
    if (label) label.textContent = `${listenClicks} / 5 ${ui[lang()].completed}`;
  }

  function countListenPress() {
    listenClicks = Math.min(5, listenClicks + 1);
    try { localStorage.setItem(progressKey, String(listenClicks)); } catch (_) {}
    updateProgress();
  }

  function speakSummary(text, button) {
    countListenPress();
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      const note = $('#learningAudioNote');
      if (note) note.textContent = ui[lang()].unsupported;
      return;
    }
    if (activeButton === button && speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      button.textContent = `▶ ${ui[lang()].listen}`;
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang() === 'ar' ? 'ar' : 'en-US';
    utterance.rate = 0.9;
    activeUtterance = utterance;
    activeButton = button;
    button.textContent = `Ⅱ ${ui[lang()].listening}`;
    utterance.onend = () => {
      if (activeButton === button) button.textContent = `▶ ${ui[lang()].listen}`;
      activeUtterance = null;
      activeButton = null;
    };
    utterance.onerror = () => {
      if (activeButton === button) button.textContent = `▶ ${ui[lang()].listen}`;
      activeUtterance = null;
      activeButton = null;
    };
    speechSynthesis.speak(utterance);
  }

  function buildQuiz(panel, chapterIndex) {
    // Recreate the panel so language changes cannot stack duplicate click handlers.
    const freshPanel = panel.cloneNode(false);
    panel.replaceWith(freshPanel);
    panel = freshPanel;
    const questions = bank[page]?.[chapterIndex];
    let current = 0;
    let score = 0;
    let answered = false;

    function renderIntro() {
      const l = lang();
      panel.innerHTML = `
        <div class="quiz-intro">
          <div class="quiz-top"><span class="quiz-kicker">${ui[l].game} · ${String(chapterIndex + 1).padStart(2,'0')}</span><span class="quiz-counter">3 ${l === 'ar' ? 'أسئلة' : 'questions'}</span></div>
          <h4 class="quiz-question">${l === 'ar' ? 'اختبر معلوماتك في هذا الجزء' : 'Test what you learned in this part'}</h4>
          <p class="quiz-intro-copy">${l === 'ar' ? 'جاوب على 3 أسئلة، وشوف نتيجتك في النهاية.' : 'Answer 3 quick questions and see your score.'}</p>
          <button class="quiz-start" type="button" data-quiz-action="start">▶ ${ui[l].start}</button>
        </div>`;
    }

    function renderQuestion() {
      const l = lang();
      if (!questions || !questions[current]) {
        panel.innerHTML = `<p class="quiz-feedback feedback-wrong">${l === 'ar' ? 'تعذر تحميل أسئلة هذا الجزء. حدّث الصفحة وحاول مرة أخرى.' : 'This chapter quiz could not load. Refresh the page and try again.'}</p>`;
        return;
      }
      const data = questions[current];
      const languageIndex = l === 'ar' ? 1 : 0;
      const options = data.o[languageIndex];
      const order = options.map((_, i) => i).sort(() => Math.random() - 0.5);
      const correctPosition = order.indexOf(data.a);
      panel.innerHTML = `
        <div class="quiz-top"><span class="quiz-kicker">${ui[l].game} · ${String(chapterIndex + 1).padStart(2,'0')}</span><span class="quiz-counter">${ui[l].q} ${current + 1}/3</span></div>
        <h4 class="quiz-question">${data.q[languageIndex]}</h4>
        <div class="quiz-options">${order.map((originalIndex, i) => `<button class="quiz-option" type="button" data-quiz-action="answer" data-option="${i}" data-correct="${i === correctPosition}">${options[originalIndex]}</button>`).join('')}</div>
        <p class="quiz-feedback" aria-live="polite"></p>
        <div class="quiz-actions"><button class="quiz-next" type="button" data-quiz-action="next" disabled>${current === 2 ? ui[l].finish : ui[l].next}</button></div>`;
    }

    function renderResult() {
      const l = lang();
      const percent = Math.round(score / 3 * 100);
      panel.innerHTML = `<div class="quiz-result"><b>${ui[l].done}</b><strong>${ui[l].score}: ${score}/3 · ${percent}%</strong><button class="quiz-next" type="button" data-quiz-action="retry">${ui[l].retry}</button></div>`;
    }

    // One delegated listener remains attached while the quiz content is re-rendered.
    panel.addEventListener('click', event => {
      const button = event.target.closest('button[data-quiz-action]');
      if (!button || !panel.contains(button)) return;
      event.preventDefault();
      const action = button.dataset.quizAction;
      if (action === 'start' || action === 'retry') {
        current = 0; score = 0; answered = false;
        renderQuestion();
        return;
      }
      if (action === 'answer') {
        if (answered) return;
        answered = true;
        const right = button.dataset.correct === 'true';
        if (right) score++;
        $$('.quiz-option', panel).forEach(option => {
          option.disabled = true;
          if (option.dataset.correct === 'true') option.classList.add('is-correct');
        });
        if (!right) button.classList.add('is-wrong');
        const data = questions?.[current];
        const feedback = $('.quiz-feedback', panel);
        if (feedback && data) {
          feedback.classList.add(right ? 'feedback-correct' : 'feedback-wrong');
          feedback.textContent = `${right ? ui[lang()].correct : ui[lang()].wrong} ${data.e[lang() === 'ar' ? 1 : 0]}`;
        }
        const next = $('.quiz-next', panel);
        if (next) next.disabled = false;
        return;
      }
      if (action === 'next') {
        if (!answered) return;
        if (current < 2) { current++; answered = false; renderQuestion(); }
        else renderResult();
      }
    });

    renderIntro();
  }

  function enhanceStory() {
    const chapters = $$('.chapter');
    if (!chapters.length) return;
    const l = lang();
    // Replace the old full-story narration player with a progress meter.
    const oldNarration = $('.narration-panel');
    if (oldNarration && !$('#learningProgress')) {
      oldNarration.outerHTML = `<div class="learning-progress" id="learningProgress">
        <div class="learning-progress-head"><b>${ui[l].progress}</b><strong id="learningProgressValue">0%</strong></div>
        <div class="learning-progress-track"><span id="learningProgressFill"></span></div>
        <small id="learningProgressLabel"></small><span class="audio-note" id="learningAudioNote"></span>
      </div>`;
    }
    // Remove the old one-off game; each chapter now owns a three-question game.
    $('.game-section')?.remove();
    chapters.forEach((chapter, index) => {
      const source = $(`[data-story="${index}"]`, chapter);
      if (!source) return;
      const fullText = source.textContent.trim();
      const summary = fullText.split(/(?<=[.!؟])\s+/)[0] || fullText.slice(0, 150);
      let tools = $('.chapter-tools', chapter);
      if (!tools) {
        tools = document.createElement('div');
        tools.className = 'chapter-tools';
        source.insertAdjacentElement('beforebegin', tools);
      }
      tools.innerHTML = `<p class="chapter-summary">${summary}</p>
        <div class="chapter-actions"><button class="detail-toggle" type="button" aria-expanded="false">${ui[l].details}</button><button class="summary-listen" type="button">▶ ${ui[l].listen}</button></div>`;
      source.classList.add('chapter-full-text');
      source.hidden = true;
      const detailButton = $('.detail-toggle', tools);
      detailButton.addEventListener('click', () => {
        const open = detailButton.getAttribute('aria-expanded') === 'true';
        detailButton.setAttribute('aria-expanded', String(!open));
        detailButton.textContent = open ? ui[lang()].details : ui[lang()].less;
        source.hidden = open;
        chapter.classList.toggle('details-open', !open);
      });
      $('.summary-listen', tools).addEventListener('click', e => speakSummary(summary, e.currentTarget));
      let quiz = $('.chapter-quiz', chapter);
      if (!quiz) {
        quiz = document.createElement('div'); quiz.className = 'chapter-quiz';
        chapter.appendChild(quiz);
      }
      buildQuiz(quiz, index);
      chapter.style.setProperty('--chapter-index', index);
      chapter.classList.add('chapter-enter');
    });
    updateProgress();
  }

  // The language switcher is wired by app.js first; refresh our generated bilingual UI after it changes.
  $('#languageToggle')?.addEventListener('click', () => setTimeout(enhanceStory, 0));
  enhanceStory();
})();
