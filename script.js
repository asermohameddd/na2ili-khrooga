const O = (en, ar, fr) => ({ en, ar, fr });
const R = (rating, reviews) => O(`${rating} ★ (${reviews} reviews)`, `${rating} ★ (${reviews} تقييم)`, `${rating} ★ (${reviews} taqyeem)`);

const outings = [
  [O('Al Azhar Park walk', 'تمشية في حديقة الأزهر', 'Tamshiyet 7adeeqet El Azhar'), 'culture', '🌿', 40, 60, O('Calm garden + skyline view with sunset photo opportunities.', 'حديقة هادئة وإطلالة على المدينة مع فرص لتصوير الغروب.', '7adeeqa hadya w etlala 3ala el madina m3a foras tasweer waqt el ghoroob.')],
  [O('Al Andalus Park stroll', 'تمشية في حديقة الأندلس', 'Tamshiyet 7adeeqet El Andalus'), 'chill', '🌴', 30, 50, O('Riverside Zamalek reset with green scenery.', 'روقان على النيل في الزمالك مع مساحات خضراء.', 'Rawa2an 3al Neel fel Zamalek ma3a masa7at khadra.')],
  [O('Al Jazira Park hangout', 'قعدة في حديقة الجزيرة', 'Qa3da fi 7adeeqet El Gezeera'), 'chill', '🌳', 30, 50, O('Casual green-space break in central Zamalek.', 'استراحة في مساحة خضراء بوسط الزمالك.', 'Estra7a fi masa7a khadra bwost El Zamalek.')],
  [O('Maadi Island visit', 'زيارة جزيرة المعادي', 'Ziyaret gezeeret El Maadi'), 'chill', '🌊', 60, 100, O('Relaxing river island atmosphere with scenic walkways.', 'جو هادئ في جزيرة نيلية مع ممرات جميلة.', 'Gaw hady fi gezeera neeleya ma3a mamarat gamela.')],
  [O('Aquarium Grotto Garden', 'حديقة الأسماك', '7adeeqet El Asmak'), 'culture', '🐠', 30, 50, O('Classic Zamalek mini-adventure inside historical caves.', 'مغامرة صغيرة في الزمالك داخل كهوف تاريخية.', 'Moghamra soghayra fel Zamalek dakhel kohoof tareekheya.')],
  [O('Cairo Tower area visit', 'زيارة منطقة برج القاهرة', 'Ziyaret mantaqet Borg El Qahira'), 'culture', '🗼', 50, 100, O('Skyline stop + iconic photo taking.', 'إطلالة على المدينة مع صور تذكارية.', 'Etlala 3ala el madina ma3a sowar tazkareya.')],
  [O('Egyptian Museum visit', 'زيارة المتحف المصري', 'Ziyaret El Mat7af El Masry'), 'culture', '🏺', 450, 550, O('Full Tahrir museum historical exploration.', 'استكشاف تاريخي كامل في متحف التحرير.', 'Estekshaf tareekhy kamel fi mat7af El Tahrir.')],
  [O('Coptic Museum visit', 'زيارة المتحف القبطي', 'Ziyaret El Mat7af El Qepty'), 'culture', '⛪', 100, 150, O('Old Cairo history and ancient architecture.', 'تاريخ مصر القديمة وعمارة أثرية.', 'Tareekh Masr el qadeema w 3emara asareya.')],
  [O('Museum of Islamic Art', 'متحف الفن الإسلامي', 'Mat7af El Fann El Eslamy'), 'culture', '🕌', 100, 150, O('Intricate Islamic architecture + historical artifacts.', 'عمارة إسلامية دقيقة وتحف تاريخية.', '3emara eslameya daqeeqa w to7af tareekheya.')],
  [O('National Museum of Egyptian Civilization', 'المتحف القومي للحضارة', 'El Mat7af El Qawmy lel 7adara'), 'culture', '🏛️', 350, 450, O('Royal Mummies and civilization galleries.', 'قاعة المومياوات الملكية ومعارض الحضارة.', 'Qa3et el momyawat el malakeya w ma3ared el 7adara.')],
  [O('Khan El Khalili walk', 'تمشية في خان الخليلي', 'Tamshiyet Khan El Khalili'), 'culture', '🧿', 50, 150, O('Souq wandering, souvenirs, and historic alleys.', 'جولة في السوق، هدايا تذكارية، وأزقة تاريخية.', 'Gawla fel sooq, hadaya tazkareya, w azeqa tareekheya.')],
  [O('Al Moez Street evening', 'سهرة في شارع المعز', 'Sahra fi share3 El Moez'), 'culture', '✨', 40, 120, O('Historic street walking, lights + local snacks.', 'تمشية في شارع تاريخي، إضاءة وأكل خفيف.', 'Tamshiya fi share3 tareekhi, eda2a w akl khafeef.')],
  [O('Muizz photo walk', 'جولة تصوير في المعز', 'Gawlet tasweer fel Moez'), 'chill', '📸', 40, 120, O('Golden-hour photography in Islamic Cairo.', 'تصوير في الساعة الذهبية بالقاهرة الإسلامية.', 'Tasweer fel sa3a el zahabeya bel Qahira el Eslameya.')],
  [O('Zamalek photo walk', 'جولة تصوير في الزمالك', 'Gawlet tasweer fel Zamalek'), 'chill', '📷', 40, 120, O('Cozy cafes and Nile street aesthetics.', 'مقاهي مريحة وجمال شوارع النيل.', 'Maqahy moree7a w gamal shaware3 el Neel.')],
  [O('Downtown Cairo photo walk', 'جولة تصوير في وسط البلد', 'Gawlet tasweer fi Wost El Balad'), 'culture', '🏙️', 30, 90, O('European-style architecture hunt and streets.', 'استكشاف عمارة الطراز الأوروبي والشوارع.', 'Estekshaf 3emara bel teraz el oroby w shaware3.')],
  [O('Garden City walk', 'تمشية في جاردن سيتي', 'Tamshiyet Garden City'), 'chill', '🌇', 30, 90, O('Quiet historic Cairo neighborhood exploration.', 'استكشاف حي تاريخي هادئ في القاهرة.', 'Estekshaf 7ay tareekhi hady fel Qahira.')],
  [O('Old Cairo walking loop', 'جولة مشي في مصر القديمة', 'Gawlet mashy fi Masr El Qadeema'), 'culture', '🧭', 50, 120, O('Ancient churches, fortresses, and hidden alleys.', 'كنائس أثرية، حصون، وحواري خفية.', 'Kana2es asareya, 7osoon, w 7awary khafeya.')],
  [O('Manial Palace visit', 'زيارة قصر المنيل', 'Ziyaret Qasr El Manial'), 'culture', '👑', 100, 150, O('Royal prince palace and lush botanical gardens.', 'قصر أمير ملكي وحدائق نباتية مورقة.', 'Qasr ameer malaky w 7ada2eq nabateya.')],
  [O('Kasr El Nil sunset walk', 'تمشية كوبري قصر النيل', 'Tamshiyet kobry Qasr El Neel'), 'chill', '🌅', 20, 50, O('Nile bridge stroll at sunset.', 'تمشية على كوبري النيل وقت الغروب.', 'Tamshiya 3ala kobry el Neel waqt el ghoroob.')],
  [O('Qasr El Nil bridge photos', 'صور على كوبري قصر النيل', 'Sowar 3ala kobry Qasr El Neel'), 'chill', '🌉', 20, 50, O('Fast scenic photography stop over the Nile.', 'توقف سريع لتصوير مناظر رائعة على النيل.', 'Tawaqof saree3 letasweer manazer ra2e3a 3al Neel.')],
  [O('Renaissance Downtown cinema', 'سينما رينسانس وسط البلد', 'Cinema Renaissance Wost El Balad'), 'chill', '🎬', 150, 220, O('Standard movie ticket in heart of Cairo.', 'تذكرة سينما عادية في قلب القاهرة.', 'Tazkaret cinema 3adeya fi qalb El Qahira.')],
  [O('Renaissance Al Rehab cinema', 'سينما رينسانس الرحاب', 'Cinema Renaissance El Re7ab'), 'chill', '🍿', 150, 240, O('Movie outing in Al Rehab city.', 'خروجة سينما في مدينة الرحاب.', 'Khorooget cinema fi madinet El Re7ab.')],
  [O('Cinema City Stars', 'سينما سيتي ستارز', 'Cinema City Stars'), 'chill', '🎞️', 180, 280, O('Mall movie outing with modern screening.', 'خروجة سينما في المول مع شاشات حديثة.', 'Khorooget cinema fel mall ma3a shashat 7adeesa.')],
  [O('VOX cinema outing', 'خروجة سينما فوكس', 'Khorooget cinema VOX'), 'chill', '🎥', 200, 320, O('Premium multiplex movie experience.', 'تجربة سينما مجمعة فاخرة.', 'Tagrobet cinema moghama3a fakhera.')],
  [O('IMAX cinema outing', 'خروجة سينما آيماكس', 'Khorooget cinema IMAX'), 'chill', '🪐', 250, 380, O('Massive big-screen cinematic view.', 'مشاهدة سينمائية على شاشة عملاقة.', 'Mosha7da cinemaya 3ala shasha 3emlaqa.')],
  [O('Drive-in movie concept', 'سينما السيارات', 'Cinema el sayarat'), 'chill', '🚗', 250, 400, O('Car + outdoor cinema experience.', 'تجربة سينما خارجية بالسيارة.', 'Tagrobet cinema kharegeya belsayara.')],
  [O('Movie + popcorn combo', 'فيلم وكومبو فشار', 'Film w combo feshar'), 'chill', '🍿', 300, 450, O('Cinema ticket + popcorn and drink combo.', 'تذكرة سينما وكومبو فشار ومشروب.', 'Tazkaret cinema w combo feshar w mashroob.')],
  [O('Late-night cinema', 'سينما سهرة', 'Cinema sahra'), 'chill', '🌙', 200, 350, O('Midnight movie show + late night drink.', 'حفلة منتصف الليل ومشروب سهرة.', '7aflet montasaf el leyl w mashroob sahra.')],
  [O('Movie marathon (2 films)', 'ماراثون سينما (فيلمين)', 'Marathon cinema (filmeen)'), 'chill', '🎬', 400, 650, O('Back-to-back cinema film plan.', 'مشاهدة فيلمين متتاليين في السينما.', 'Mosha7da filmeen motataleen fel cinema.')],
  [O('Cinema date plan', 'مقابلة في السينما', 'Mo2abla fel cinema'), 'date', '💗', 600, 1000, O('2 tickets + popcorn + coffee break.', 'تذكرتين وفشار واستراحة قهوة.', 'Tazkarteen w feshar w estra7et qahwa.')],
  [O('Egyptian breakfast (Fava + Falafel)', 'فطار مصري فول وطعمية', 'Ftar Masry fool w ta3meya'), 'food', '🥙', 40, 80, O('Traditional Egyptian hot breakfast.', 'إفطار مصري ساخن تقليدي.', 'Ftar masry sokhn taqleedy.')],
  [O('Koshary bowl outing', 'خروجة طبق كشري', 'Khorooget tabaq Koshary'), 'food', '🍲', 50, 100, O('Classic Egyptian comfort food bowl.', 'طبق الأكل المصري الشعبي المفضل.', 'Tabaq el akl el masry el sha3by el mofadal.')],
  [O('Shawarma meal', 'وجبة شاورما', 'Wagbet Shawerma'), 'food', '🌯', 120, 220, O('Juicy Egyptian or Syrian shawarma.', 'شاورما مصرية أو سورية لذيذة.', 'Shawerma masreya aw soreya lazeeza.')],
  [O('Kofta sandwich meal', 'وجبة ساندوتش كفتة', 'Wagbet sandwich Kofta'), 'food', '🥙', 120, 220, O('Grilled kofta street-style sandwiches.', 'ساندوتشات كفتة مشوية على طريقة الشارع.', 'Sandwetshat kofta mashweya 3ala tareeqet el share3.')],
  [O('Hawawshi meal', 'وجبة حواوشي', 'Wagbet Hawawshi'), 'food', '🥩', 100, 180, O('Spicy oven-baked Egyptian hawawshi.', 'حواوشي مصري حار مخبوز في الفرن.', 'Hawawshi masry 7ar makhbooz fel forn.')],
  [O('Feteer session', 'أكلة فطير', 'Aklet Feteer'), 'food', '🥞', 150, 280, O('Sweet or savory Egyptian layered pastry.', 'فطير مشلتت مصري حلو أو حادق.', 'Feteer meshalteet masry 7elw aw 7adeq.')],
  [O('Molokhia lunch', 'غداء ملوخية', 'Ghada Molokhia'), 'food', '🍚', 180, 320, O('Authentic Egyptian home-cooked style lunch.', 'غداء مصري أصيل بطعم البيت.', 'Ghada masry aseeel beta3m el beet.')],
  [O('Grilled chicken meal', 'وجبة فراخ مشوية', 'Wagbet frakh mashweya'), 'food', '🍗', 200, 350, O('Charcoal grilled chicken sit-down meal.', 'وجبة دجاج مشوي على الفحم.', 'Wagbet dagag mashwy 3ala el fa7m.')],
  [O('Grilled mixed meat', 'مشاوي مشكلة', 'Mashawy moshakela'), 'food', '🥩', 350, 600, O('Mixed oriental grill platter.', 'طبق مشاوي شرقية مشكلة.', 'Tabaq mashawy sharqeya moshakela.')],
  [O('Egyptian seafood meal', 'وجبة سمك مصرية', 'Wagbet samak masreya'), 'food', '🦐', 400, 800, O('Fresh grilled fish, shrimp, and rice.', 'سمك مشوي طازج، جمبري، ورز.', 'Samak mashwy tazeg, gambary, w roz.')],
  [O('Pizza sharing meal', 'وجبة بيتزا للمشاركة', 'Wagbet pizza lelmosharka'), 'food', '🍕', 250, 450, O('Large pizza + soft drinks for sharing.', 'بيتزا كبيرة ومشروبات غازية للمشاركة.', 'Pizza kebeera w mashrobat ghazeya lelmosharka.')],
  [O('Burger meal', 'وجبة برجر', 'Wagbet Burger'), 'food', '🍔', 250, 450, O('Gourmet burger + fries + soda.', 'برجر مميز وبطاطس ومياه غازية.', 'Burger momayaz w batates w mya ghazeya.')],
  [O('Chicken fast-food combo', 'كومبو فراخ مقلية', 'Combo frakh maqleya'), 'food', '🍗', 220, 380, O('Crispy fried chicken combo meal.', 'وجبة دجاج مقلي مقرمش.', 'Wagbet dagag maqly meqarmesh.')],
  [O('Big burger combo', 'كومبو برجر كبير', 'Combo burger kebeer'), 'food', '🍔', 350, 550, O('Double beef burger + loaded fries.', 'برجر لحم مزدوج وبطاطس بالجبنة.', 'Burger la7m mozdaweeg w batates belgibna.')],
  [O('Family fast-food box', 'بوكس عائلي للوجبات السريعة', 'Box 3a2ely wgbat saree3a'), 'food', '🍗', 600, 1100, O('Large shareable chicken fast-food box.', 'بوكس دجاج مقلي عائلي للمشاركة.', 'Box dagag maqly 3a2ely lelmosharka.')],
  [O('Korean street-food meal', 'وجبة أكل كوري', 'Wagbet akl Kory'), 'food', '🍜', 250, 450, O('Trendy Korean ramen and corn dogs.', 'رامن كوري شهير وكورن دوج.', 'Ramen kory shaheer w corn dog.')],
  [O('Sushi meal', 'وجبة سوشي', 'Wagbet Sushi'), 'food', '🍣', 450, 850, O('Casual fresh sushi combo set.', 'مجموعة سوشي طازجة.', 'Magmou3et sushi tazga.')],
  [O('Pasta restaurant meal', 'وجبة مكرونة في مطعم', 'Wagbet makarona fi mat3am'), 'food', '🍝', 250, 450, O('Creamy or red sauce Italian pasta.', 'مكرونة إيطالية بالصوص الأبيض أو الأحمر.', 'Makarona etaleya bel sos el abyad aw el a7mar.')],
  [O('Steak meal', 'وجبة ستيك', 'Wagbet Steak'), 'food', '🥩', 650, 1200, O('Seared beef steak with sides.', 'شريحة لحم بقري مشوية مع إضافات.', 'Sharee7et la7m baqary mashweya ma3a edafat.')],
  [O('Breakfast cafe platter', 'فطار في كافيه', 'Ftar fi cafe'), 'food', '🍳', 250, 450, O('Pancakes, eggs, and specialty coffee.', 'بان كيك، بيض، وقهوة مختصة.', 'Pan cake, beed, w qahwa mokhtasa.')],
  [O('Sugarcane juice stop', 'عصير قصب', '3aseer qasab'), 'food', '🧃', 20, 40, O('Freshly squeezed Egyptian sugarcane.', 'عصير قصب مصري طازج.', '3aseer qasab masry tazeg.')],
  [O('Mango juice stop', 'عصير مانجو', '3aseer mango'), 'food', '🥭', 40, 80, O('Rich seasonal fresh mango juice.', 'عصير مانجو طازج موسمي.', '3aseer mango tazeg mosemy.')],
  [O('Guava juice stop', 'عصير جوافة', '3aseer gawafa'), 'food', '🍐', 30, 60, O('Freshly pressed guava juice.', 'عصير جوافة طازج.', '3aseer gawafa tazeg.')],
  [O('Orange juice stop', 'عصير برتقال', '3aseer bortoqan'), 'food', '🍊', 30, 60, O('Fresh citrus orange juice.', 'عصير برتقال طازج.', '3aseer bortoqan tazeg.')],
  [O('Strawberry juice stop', 'عصير فراولة', '3aseer frawla'), 'food', '🍓', 40, 80, O('Fresh sweet strawberry drink.', 'مشروب فراولة طازج.', 'Mashroob frawla tazeg.')],
  [O('Tea at local cafe', 'شاي في قهوة بلدي', 'Shay fi qahwa balady'), 'chill', '☕', 15, 30, O('Classic mint tea at a local cafe.', 'شاي بالنعناع في مقهى محلي.', 'Shay bel na3na3 fi maqha ma7aly.')],
  [O('Turkish coffee', 'قهوة تركي', 'Qahwa Torky'), 'chill', '☕', 25, 50, O('Traditional hot Turkish coffee.', 'قهوة تركي ساخنة أصيلة.', 'Qahwa torky sokhna aseela.')],
  [O('Starbucks specialty coffee', 'قهوة ستاربكس', 'Qahwet Starbucks'), 'chill', '☕', 130, 240, O('Premium iced or hot Starbucks beverage.', 'مشروب ستاربكس بارد أو ساخن مميز.', 'Mashroob Starbucks bared aw sokhn momayaz.')],
  [O('Iced latte at local cafe', 'آيس لاتيه في كافيه', 'Ice latte fi cafe'), 'chill', '🧊', 70, 140, O('Refreshing cold iced latte.', 'قهوة مثلجة بالحليب باردة ومنعشة.', 'Qahwa motalaga bel 7aleeb barda w mon3esha.')],
  [O('Spanish latte', 'سبانيش لاتيه', 'Spanish latte'), 'chill', '🥛', 90, 170, O('Sweet creamy iced espresso drink.', 'مشروب إسبريسو مثلج بالكريمة.', 'Mashroob espresso motalag bel krema.')],
  [O('Frappuccino-style drink', 'مشروب قهوة مخفوق', 'Mashroob qahwa makhfooq'), 'chill', '🥤', 110, 210, O('Cold blended coffee shake.', 'مشروب قهوة مخفوق بارد.', 'Mashroob qahwa makhfooq bared.')],
  [O('Fresh lemonade', 'ليمون فريش', 'Lamoon fresh'), 'chill', '🍋', 50, 90, O('Refreshing fresh mint lemonade.', 'ليمون بالنعناع منعش.', 'Lamoon bel na3na3 mon3esh.')],
  [O('Mocktail cafe stop', 'مشروب فواكه في كافيه', 'Mashroob fawakeh fi cafe'), 'chill', '🍹', 120, 220, O('Fruity non-alcoholic mocktail.', 'مشروب فواكه بدون كحول.', 'Mashroob fawakeh bedoon ko7ool.')],
  [O('Dessert + coffee', 'حلويات وقهوة', '7alaweyat w qahwa'), 'food', '🍰', 150, 280, O('Slice of cake or dessert with hot coffee.', 'قطعة كيك أو حلوى مع قهوة ساخنة.', 'Qet3et cake aw 7alwa ma3a qahwa sokhna.')],
  [O('Waffle + drink', 'كعكة الوافل ومشروب', 'Waffle w mashroob'), 'food', '🧇', 180, 320, O('Belgian waffle topped with chocolate + drink.', 'كعكة وافل بالشوكولاتة ومشروب.', 'Waffle bel shokolata w mashroob.')],
  [O('Crepe + drink', 'فطيرة كريب ومشروب', 'Crepe w mashroob'), 'food', '🥞', 150, 280, O('Chocolate or savory crepe with drink.', 'كريب شوكولاتة أو حادق مع مشروب.', 'Crepe shokolata aw 7adeq ma3a mashroob.')],
  [O('Ice cream outing', 'خروجة آيس كريم', 'Khorooget ice cream'), 'food', '🍦', 70, 150, O('2 gourmet scoops with toppings.', 'بختين آيس كريم مع إضافات.', 'Bokhteen ice cream ma3a edafat.')],
  [O('Bowling session', 'لعب بولينج', 'Le3b Bowling'), 'active', '🎳', 200, 350, O('One game + shoe rental.', 'لعبة واحدة مع إيجار الحذاء.', 'Le3ba wa7da ma3a egar el 7eza2.')],
  [O('Pool hall session', 'لعب بلياردو', 'Le3b Bilyardo'), 'active', '🎱', 120, 220, O('Casual billiards table time.', 'وقت ممتع على طاولة البلياردو.', 'Waqt momte3 3ala tawlet el bilyardo.')],
  [O('Arcade session', 'صالة ألعاب أركيد', 'Salet al3ab Arcade'), 'active', '🕹️', 200, 400, O('Game card credits for retro/modern arcade.', 'كارت ألعاب في صالة أركيد.', 'Cart al3ab fi salet arcade.')],
  [O('VR gaming session', 'ألعاب واقع افتراضي', 'Al3ab waqe3 efterady'), 'active', '🥽', 250, 450, O('Immersive VR gaming experience.', 'تجربة ألعاب واقع افتراضي ممتعة.', 'Tagrobet al3ab waqe3 efterady momte3a.')],
  [O('Escape room', 'غرف الهروب', 'Ghoraf el horoob'), 'active', '🔐', 350, 600, O('Team puzzle solving room.', 'غرفة حل الألغاز للفرق.', 'Ghorfet 7al el alghaz lel feraq.')],
  [O('Go-kart session', 'سباق سيارات', 'Sebaq sayarat'), 'active', '🏎️', 450, 750, O('High-speed kart racing.', 'سباق سيارات سريع.', 'Sebaq sayarat saree3.')],
  [O('Trampoline park', 'ألعاب قفز', 'Al3ab qafz'), 'active', '🤸', 350, 600, O('Freestyle trampoline jumping session.', 'جلسة قفز حر على المنصات المرنة.', 'Galset qafz 7or 3alal manasat el marena.')],
  [O('Paintball session', 'حرب ألوان', '7arb alwan'), 'active', '🎯', 500, 800, O('Tactical team paintball battle.', 'معركة حرب ألوان جماعية.', 'Ma3raket 7arb alwan gama3eya.')],
  [O('Laser tag', 'حرب ليزر', '7arb laser'), 'active', '🔫', 350, 600, O('Futuristic indoor laser battle.', 'معركة ليزر داخلية.', 'Ma3raket laser dakhleya.')],
  [O('Indoor climbing', 'تسلق داخلي', 'Tasaloq dakhly'), 'active', '🧗', 350, 600, O('Beginner wall climbing workout.', 'تدريب تسلق حوائط للمبتدئين.', 'Tadreeb tasaloq 7awa2et lel mobtade2een.')],
  [O('Roller skating', 'تزلج بالعجل', 'Tazaloq bel 3agal'), 'active', '🛼', 250, 450, O('Fun indoor roller rink session.', 'وقت ممتع في صالة تزلج داخلية.', 'Waqt momte3 fi salet tazaloq dakhleya.')],
  [O('Ice skating', 'تزلج على الجليد', 'Tazaloq 3al galeed'), 'active', '⛸️', 350, 600, O('Mall ice rink skating session.', 'تزلج في صالة جليد بالمول.', 'Tazaloq fi salet galeed bel mall.')],
  [O('Horse riding session', 'ركوب خيل', 'Rokoob kheyl'), 'active', '🐎', 500, 900, O('Guided horse ride near Pyramids.', 'جولة بالخيل قرب الأهرامات.', 'Gawla bel kheyl qorb el ahramat.')],
  [O('Cycling Nile route', 'دراجات على النيل', 'Dragat 3al Neel'), 'active', '🚲', 120, 250, O('Bicycle rental along the Nile.', 'إيجار دراجات على طول النيل.', 'Egar dragat 3ala tool el Neel.')],
  [O('Football turf booking', 'حجز ملعب كورة', '7agz mal3ab kora'), 'active', '⚽', 150, 250, O('1-hour football match split per person.', 'مباراة كرة قدم لمدة ساعة مقسمة على العدد.', 'Mobarat koret qadam lemodet sa3a meqasema 3al 3adad.')],
  [O('Padel session', 'تنس بادل', 'Tennis padel'), 'active', '🎾', 350, 600, O('1.5-hour padel tennis match.', 'مباراة بادل تنس لمدة ساعة ونصف.', 'Mobarat padel tennis lemodet sa3a w nos.')],
  [O('Tennis court session', 'حجز ملعب تنس', '7agz mal3ab tennis'), 'active', '🎾', 300, 500, O('Court rental + rackets.', 'إيجار الملعب مع المضارب.', 'Egar el mal3ab ma3a el modareb.')],
  [O('Badminton session', 'لعب تنس ريشة', 'Le3b tennis reesha'), 'active', '🏸', 200, 350, O('Indoor badminton court time.', 'وقت ممتع في ملعب تنس ريشة داخلي.', 'Waqt momte3 fi mal3ab tennis reesha dakhly.')],
  [O('Karaoke room', 'غرفة غناء كاريوكي', 'Ghorfet ghena2 karaoke'), 'active', '🎤', 350, 600, O('Private room singing with friends.', 'غناء في غرفة خاصة مع الأصحاب.', 'Ghena2 fi ghorfa khasa ma3a el as7ab.')],
  [O('Nile sailboat ride', 'جولة بمركب نيلية', 'Gawla b markeb neeleya'), 'chill', '⛵', 120, 220, O('Traditional wooden sailboat ride.', 'جولة بمركب شراعي خشبي تقليدي.', 'Gawla b markeb shera3y khashaby taqleedy.')],
  [O('Nile sailboat sunset', 'مركب نيلية وقت الغروب', 'Markeb neeleya waqt el ghoroob'), 'chill', '🌅', 200, 350, O('Sunset sailing on the Nile.', 'الإبحار وقت الغروب في النيل.', 'El eb7ar waqt el ghoroob fel Neel.')],
  [O('Motorboat Nile ride', 'جولة بلانش في النيل', 'Gawla blansh fel Neel'), 'active', '🚤', 350, 600, O('Speedy Nile motorboat tour.', 'جولة سريعة بلانش نيلية.', 'Gawla saree3a blansh neeleya.')],
  [O('Nile dinner cruise', 'عشاء في مركب نيلية', '3asha fi markeb neeleya'), 'food', '🛳️', 900, 1600, O('Open buffet dinner + Nile show.', 'عشاء بوفيه مفتوح مع عرض نيلي.', '3asha buffet maftoo7 ma3a 3ard neely.')],
  [O('Dinner + Nile view', 'عشاء وإطلالة على النيل', '3asha w etlala 3al Neel'), 'food', '🌃', 700, 1300, O('Waterfront dining with river lights.', 'عشاء على النيل مع إضاءة النهر.', '3asha 3al Neel ma3a eda2et el nahr.')],
  [O('Rooftop Cairo sunset', 'الغروب من روفتوب', 'El ghoroob mn rooftop'), 'chill', '🌆', 300, 550, O('Skyline sunset coffee or mocktail.', 'قهوة وقت الغروب مع إطلالة المدينة.', 'Qahwa waqt el ghoroob ma3a etlalet el madina.')],
  [O('Rooftop dinner', 'عشاء على روفتوب', '3asha 3ala rooftop'), 'food', '🥂', 900, 1600, O('Fine rooftop meal with city views.', 'عشاء فاخر مع إطلالة على المدينة.', '3asha fakher ma3a etlala 3alal madina.')],
  [O('Night market walk', 'تمشية في سوق ليلي', 'Tamshiya fi sooq leily'), 'culture', '🛍️', 60, 180, O('Evening street browsing + snacks.', 'جولة مسائية في السوق وأكل خفيف.', 'Gawla masa2eya fel sooq w akl khafeef.')],
  [O('Bookstore cafe outing', 'خروجة في مكتبة وكافيه', 'Khorooga fi maktaba w cafe'), 'chill', '📚', 150, 300, O('Coffee + book browsing session.', 'قهوة وتصفح كتب.', 'Qahwa w tasfo7 kotob.')],
  [O('Art gallery exhibition', 'معرض فني', 'Ma3rad fanny'), 'culture', '🎨', 60, 180, O('Contemporary Egyptian art gallery tour.', 'جولة في معرض فن مصري معاصر.', 'Gawla fi ma3rad fan masry mo3aser.')],
  [O('Live music gig', 'حفلة موسيقى حية', '7aflet moseeqa 7aya'), 'culture', '🎸', 350, 700, O('Local band concert or venue music.', 'حفلة لفرقة محلية.', '7afla leferqa ma7aleya.')],
  [O('Stand-up comedy show', 'عرض كوميدي', '3ard comedy'), 'culture', '🎙️', 300, 600, O('Live local Egyptian stand-up comedy.', 'عرض كوميدي مصري حي.', '3ard comedy masry 7ay.')],
  [O('Theatre play ticket', 'تذكرة مسرح', 'Tazkaret masra7'), 'culture', '🎭', 300, 700, O('Local stage performance.', 'عرض مسرحي محلي.', '3ard masra7y ma7aly.')],
  [O('Pottery workshop', 'ورشة فخار', 'Warshet fokhar'), 'culture', '🏺', 450, 800, O('Clay molding and pottery class.', 'حصة تشكيل الطين والفخار.', '7esa tashkeel el teen w el fokhar.')]
];

const outingsMap = outings.map((item, idx) => ({
  id: idx + 1,
  name: item[0],
  cat: item[1],
  emoji: item[2],
  min: item[3],
  max: item[4],
  desc: item[5]
}));

const packages = [
  { vibe: 'date', name: O('Zamalek Sunset Romantic Walk', 'تمشية الغروب الرومانسية بالزمالك', 'Tamshiyet el ghoroob el romanceya bel Zamalek'), steps: [ O('Kasr El Nil sunset walk', 'تمشية كوبري قصر النيل', 'Tamshiyet kobry Qasr El Neel'), O('Starbucks specialty coffee', 'قهوة ستاربكس', 'Qahwet Starbucks'), O('Nile sailboat sunset', 'مركب نيلية وقت الغروب', 'Markeb neeleya waqt el ghoroob') ], min: 450, max: 700, total: 580, emoji: '💗', desc: O('Relaxing date starting with a walk over the Nile, coffee, and a sunset sailboat ride.', 'مقابلة هادئة تبدأ بتمشية على النيل، قهوة، وإبحار وقت الغروب.', 'Mo2abla hadya tebda2 b tamshiya 3al Neel, qahwa, w eb7ar waqt el ghoroob.') },
  { vibe: 'friends', name: O('Active Night Out & Arcade', 'سهرة حركة وألعاب', 'Sahret 7araka w al3ab'), steps: [ O('Koshary bowl outing', 'خروجة طبق كشري', 'Khorooget tabaq Koshary'), O('Bowling session', 'لعب بولينج', 'Le3b Bowling'), O('Arcade session', 'صالة ألعاب أركيد', 'Salet al3ab Arcade') ], min: 500, max: 800, total: 650, emoji: '🎳', desc: O('High-energy hangout with comfort food, bowling, and gaming.', 'خروجة مليئة بالحركة مع أكل شعبي، بولينج وألعاب.', 'Khorooga malyana bel 7araka ma3a akl sha3by, bowling w al3ab.') },
  { vibe: 'family', name: O('Historic Cairo Heritage Tour', 'جولة في تراث القاهرة التاريخية', 'Gawla fi toras El Qahira el tareekheya'), steps: [ O('Egyptian Museum visit', 'زيارة المتحف المصري', 'Ziyaret El Mat7af El Masry'), O('Al Azhar Park walk', 'تمشية في حديقة الأزهر', 'Tamshiyet 7adeeqet El Azhar'), O('Tea at local cafe', 'شاي في قهوة بلدي', 'Shay fi qahwa balady') ], min: 650, max: 950, total: 800, emoji: '🏛️', desc: O('Cultural family day out through Cairo’s iconic history and gardens.', 'يوم ثقافي عائلي في تاريخ القاهرة وحدائقها الشهيرة.', 'Yoom saqafy 3a2ely fi tareekh El Qahira w 7ada2eqha el shaheera.') },
  { vibe: 'budget', name: O('Downtown Budget Friendly Day', 'يوم موفر في وسط البلد', 'Yoom mowafer fi Wost El Balad'), steps: [ O('Egyptian breakfast (Fava + Falafel)', 'فطار مصري فول وطعمية', 'Ftar Masry fool w ta3meya'), O('Al Andalus Park stroll', 'تمشية في حديقة الأندلس', 'Tamshiyet 7adeeqet El Andalus'), O('Tea at local cafe', 'شاي في قهوة بلدي', 'Shay fi qahwa balady') ], min: 100, max: 180, total: 140, emoji: '🪙', desc: O('Ultra affordable, classic Cairo day along the Nile.', 'يوم اقتصادي جداً وكلاسيكي على ضفاف النيل.', 'Yoom eqtesady gedan w classic 3ala defaf el Neel.') },
  { vibe: 'premium', name: O('Rooftop Dinner & Nile Cruise', 'عشاء روفتوب ومركب نيلية', '3asha rooftop w markeb neeleya'), steps: [ O('Rooftop Cairo sunset', 'الغروب من روفتوب', 'El ghoroob mn rooftop'), O('Nile dinner cruise', 'عشاء في مركب نيلية', '3asha fi markeb neeleya') ], min: 1200, max: 2150, total: 1650, emoji: '✨', desc: O('Upscale evening with high views, delicious food, and river lights.', 'سهرة راقية مع إطلالات عالية، طعام لذيذ، وأضواء النهر.', 'Sahra raqeya ma3a etlalat 3alya, ta3am lazeez, w adwa2 el nahr.') },
  { vibe: 'date', name: O('Cosy Coffee & Cinema', 'قهوة وسينما في هدوء', 'Qahwa w cinema fi hodoo2'), steps: [ O('Starbucks specialty coffee', 'قهوة ستاربكس', 'Qahwet Starbucks'), O('Cinema City Stars', 'سينما سيتي ستارز', 'Cinema City Stars'), O('Dessert + coffee', 'حلويات وقهوة', '7alaweyat w qahwa') ], min: 600, max: 950, total: 780, emoji: '☕', desc: O('Great date pairing specialty drinks, a movie, and sweet treats.', 'لقاء رائع يجمع بين المشروبات المختصة، فيلم، وحلويات.', 'Mo2abla ra2e3a tegma3 been el mashrobat el mokhtasa, film, w 7alaweyat.') },
  { vibe: 'friends', name: O('Gourmet Burger & Gaming Night', 'سهرة برجر وألعاب', 'Sahret burger w al3ab'), steps: [ O('Burger meal', 'وجبة برجر', 'Wagbet Burger'), O('VR gaming session', 'ألعاب واقع افتراضي', 'Al3ab waqe3 efterady'), O('Mocktail cafe stop', 'مشروب فواكه في كافيه', 'Mashroob fawakeh fi cafe') ], min: 700, max: 1100, total: 900, emoji: '🍔', desc: O('Delicious burgers followed by immersive VR and drinks.', 'برجر لذيذ يليه ألعاب واقع افتراضي ومشروبات.', 'Burger lazeez yaleeh al3ab waqe3 efterady w mashrobat.') },
  { vibe: 'family', name: O('Civilization & Riverside Lunch', 'الحضارة وغداء على النيل', 'El 7adara w ghada 3al Neel'), steps: [ O('National Museum of Egyptian Civilization', 'المتحف القومي للحضارة', 'El Mat7af El Qawmy lel 7adara'), O('Grilled chicken meal', 'وجبة فراخ مشوية', 'Wagbet frakh mashweya'), O('Mango juice stop', 'عصير مانجو', '3aseer mango') ], min: 650, max: 1000, total: 820, emoji: '🏺', desc: O('Educational museum visit followed by a satisfying family lunch.', 'زيارة تثقيفية للمتحف يليها غداء عائلي مشبع.', 'Ziyara tasqeefeya lel mat7af yaleeha ghada 3a2ely moshbe3.') },
  { vibe: 'budget', name: O('Islamic Cairo Evening Walk', 'جولة مسائية في القاهرة الإسلامية', 'Gawla masa2eya fel Qahira el Eslameya'), steps: [ O('Al Moez Street evening', 'سهرة في شارع المعز', 'Sahra fi share3 El Moez'), O('Sugarcane juice stop', 'عصير قصب', '3aseer qasab'), O('Koshary bowl outing', 'خروجة طبق كشري', 'Khorooget tabaq Koshary') ], min: 130, max: 260, total: 195, emoji: '🌙', desc: O('Atmospheric historic walk with refreshing juice and local koshary.', 'تمشية تاريخية رائعة مع عصير منعش وكشري شعبي.', 'Tamshiya tareekheya ra2e3a ma3a 3aseer mon3esh w koshary sha3by.') },
  { vibe: 'premium', name: O('Luxury Steaks & Bowling Eve', 'ستيك فاخر وسهرة بولينج', 'Steak fakher w sahret bowling'), steps: [ O('Steak meal', 'وجبة ستيك', 'Wagbet Steak'), O('Bowling session', 'لعب بولينج', 'Le3b Bowling'), O('Spanish latte', 'سبانيش لاتيه', 'Spanish latte') ], min: 1200, max: 1900, total: 1550, emoji: '🥩', desc: O('High-end steak dinner combined with bowling and gourmet coffee.', 'عشاء ستيك راقي مع بولينج وقهوة مميزة.', '3asha steak raqy ma3a bowling w qahwa momayeza.') },
  { vibe: 'date', name: O('Zamalek Art & Coffee Date', 'فنون وقهوة في الزمالك', 'Fnoon w qahwa fel Zamalek'), steps: [ O('Art gallery exhibition', 'معرض فني', 'Ma3rad fanny'), O('Iced latte at local cafe', 'آيس لاتيه في كافيه', 'Ice latte fi cafe'), O('Zamalek photo walk', 'جولة تصوير في الزمالك', 'Gawlet tasweer fel Zamalek') ], min: 300, max: 550, total: 420, emoji: '🎨', desc: O('Creative gallery exploration paired with cozy coffee in Zamalek.', 'استكشاف فني إبداعي مع قهوة في جو مريح بالزمالك.', 'Estekshaf fanny ebda3y ma3a qahwa fi gaw moree7 bel Zamalek.') },
  { vibe: 'friends', name: O('Action Padel & Fast-Food', 'بادل ووجبة سريعة', 'Padel w wagba saree3a'), steps: [ O('Padel session', 'تنس بادل', 'Tennis padel'), O('Chicken fast-food combo', 'كومبو فراخ مقلية', 'Combo frakh maqleya'), O('Fresh lemonade', 'ليمون فريش', 'Lamoon fresh') ], min: 720, max: 1180, total: 950, emoji: '🎾', desc: O('Energetic padel match with friends followed by fast food and lemonade.', 'مباراة بادل مليئة بالطاقة مع الأصدقاء يليها طعام سريع وليمون.', 'Mobarat padel malyana bel taqa ma3a el as7ab yaleeha ta3am saree3 w lamoon.') },
  { vibe: 'friends', name: O('Local Eats Tour', 'جولة الأكل الشعبي', 'Gawlet el akl el sha3by'), steps: [ O('Egyptian breakfast (Fava + Falafel)', 'فطار مصري فول وطعمية', 'Ftar Masry fool w ta3meya'), O('Sugarcane juice stop', 'عصير قصب', '3aseer qasab'), O('Hawawshi meal', 'وجبة حواوشي', 'Wagbet Hawawshi') ], min: 160, max: 300, total: 230, emoji: '🥙', desc: O('A full day of authentic Egyptian street food and fresh juice.', 'يوم كامل من أكل الشارع المصري الأصيل والعصير الطازج.', 'Yoom kamel mn akl el share3 el masry el aseel w el 3aseer el tazeg.') },
  { vibe: 'family', name: O('Old Cairo Discovery', 'استكشاف مصر القديمة', 'Estekshaf Masr El Qadeema'), steps: [ O('Coptic Museum visit', 'زيارة المتحف القبطي', 'Ziyaret El Mat7af El Qepty'), O('Old Cairo walking loop', 'جولة مشي في مصر القديمة', 'Gawlet mashy fi Masr El Qadeema'), O('Tea at local cafe', 'شاي في قهوة بلدي', 'Shay fi qahwa balady') ], min: 165, max: 300, total: 232, emoji: '⛪', desc: O('Explore historical alleys and museums, ending with classic mint tea.', 'استكشاف أزقة ومتاحف تاريخية، وختامها شاي بالنعناع.', 'Estekshaf azeqa w mata7ef tareekheya, w khetamha shay bel na3na3.') },
  { vibe: 'friends', name: O('Adrenaline Rush', 'جرعة حماس', 'Gor3et 7amas'), steps: [ O('Go-kart session', 'سباق سيارات', 'Sebaq sayarat'), O('Burger meal', 'وجبة برجر', 'Wagbet Burger'), O('Laser tag', 'حرب ليزر', '7arb laser') ], min: 1050, max: 1800, total: 1425, emoji: '🏎️', desc: O('High-speed racing, burgers, and tactical laser battles.', 'سباق سريع، برجر، ومعارك ليزر تكتيكية.', 'Sebaq saree3, burger, w ma3arek laser tacticeya.') },
  { vibe: 'date', name: O('Sunset Dining', 'عشاء الغروب', '3asha el ghoroob'), steps: [ O('Kasr El Nil sunset walk', 'تمشية كوبري قصر النيل', 'Tamshiyet kobry Qasr El Neel'), O('Dinner + Nile view', 'عشاء وإطلالة على النيل', '3asha w etlala 3al Neel') ], min: 720, max: 1350, total: 1035, emoji: '🌅', desc: O('A romantic walk followed by a beautiful waterfront dinner.', 'تمشية رومانسية يليها عشاء جميل على ضفاف النهر.', 'Tamshiya romanceya yaleeha 3asha gameel 3ala defaf el nahr.') },
  { vibe: 'premium', name: O('VIP Entertainment', 'ترفيه فاخر', 'Tarfeeh fakher'), steps: [ O('VOX cinema outing', 'خروجة سينما فوكس', 'Khorooget cinema VOX'), O('Sushi meal', 'وجبة سوشي', 'Wagbet Sushi'), O('Rooftop Cairo sunset', 'الغروب من روفتوب', 'El ghoroob mn rooftop') ], min: 950, max: 1720, total: 1335, emoji: '🍣', desc: O('Premium movies, fresh sushi, and a sunset skyline view.', 'سينما فاخرة، سوشي طازج، وإطلالة على المدينة وقت الغروب.', 'Cinema fakhera, sushi tazeg, w etlala 3alal madina waqt el ghoroob.') },
  { vibe: 'budget', name: O('Student Hangout', 'خروجة شبابية موفرة', 'Khorooga shababeya mowafera'), steps: [ O('Koshary bowl outing', 'خروجة طبق كشري', 'Khorooget tabaq Koshary'), O('Al Jazira Park hangout', 'قعدة في حديقة الجزيرة', 'Qa3da fi 7adeeqet El Gezeera'), O('Ice cream outing', 'خروجة آيس كريم', 'Khorooget ice cream') ], min: 150, max: 300, total: 225, emoji: '🍦', desc: O('Affordable classic meal, park chilling, and sweet ice cream.', 'وجبة كلاسيكية موفرة، جلسة في الحديقة، وآيس كريم لذيذ.', 'Wagba classiceya mowafera, galsa fel 7adeeqa, w ice cream lazeez.') },
  { vibe: 'friends', name: O('Sports & Grill', 'رياضة ومشاوي', 'Riyada w mashawy'), steps: [ O('Football turf booking', 'حجز ملعب كورة', '7agz mal3ab kora'), O('Grilled mixed meat', 'مشاوي مشكلة', 'Mashawy moshakela'), O('Frappuccino-style drink', 'مشروب قهوة مخفوق', 'Mashroob qahwa makhfooq') ], min: 610, max: 1060, total: 835, emoji: '⚽', desc: O('Play a match, eat a heavy grill, and grab a cold drink.', 'العب مباراة، وتناول مشاوي دسمة، واشرب مشروباً بارداً.', 'El3ab mobara, w tenawel mashawy dasema, w eshrab mashrooban baredan.') },
  { vibe: 'family', name: O('Garden & Pizza', 'حديقة وبيتزا', '7adeeqa w pizza'), steps: [ O('Al Azhar Park walk', 'تمشية في حديقة الأزهر', 'Tamshiyet 7adeeqet El Azhar'), O('Pizza sharing meal', 'وجبة بيتزا للمشاركة', 'Wagbet pizza lelmosharka'), O('Waffle + drink', 'كعكة الوافل ومشروب', 'Waffle w mashroob') ], min: 470, max: 830, total: 650, emoji: '🍕', desc: O('Scenic park walk, shared pizza, and sweet waffles.', 'تمشية في حديقة خلابة، بيتزا مشتركة، ووافل حلو.', 'Tamshiya fi 7adeeqa khalaba, pizza moshtaraka, w waffle 7elw.') },
  { vibe: 'budget', name: O('Bookish Afternoon', 'عصر القراءة والهدوء', '3asr el qera2a w el hodoo2'), steps: [ O('Bookstore cafe outing', 'خروجة في مكتبة وكافيه', 'Khorooga fi maktaba w cafe'), O('Garden City walk', 'تمشية في جاردن سيتي', 'Tamshiyet Garden City'), O('Dessert + coffee', 'حلويات وقهوة', '7alaweyat w qahwa') ], min: 330, max: 670, total: 500, emoji: '📚', desc: O('Browsing books, walking quiet streets, and enjoying cake.', 'تصفح الكتب، والمشي في شوارع هادئة، والاستمتاع بالكيك.', 'Tasfo7 el kotob, w el mashy fi shaware3 hadya, w el estemta3 bel cake.') },
  { vibe: 'family', name: O('Royal History', 'تاريخ ملكي', 'Tareekh malaky'), steps: [ O('Manial Palace visit', 'زيارة قصر المنيل', 'Ziyaret Qasr El Manial'), O('Kofta sandwich meal', 'وجبة ساندوتش كفتة', 'Wagbet sandwich Kofta'), O('Mango juice stop', 'عصير مانجو', '3aseer mango') ], min: 260, max: 450, total: 355, emoji: '👑', desc: O('Palace exploration followed by street food and fresh juice.', 'استكشاف القصر يليه طعام الشارع وعصير طازج.', 'Estekshaf el qasr yaleeh ta3am el share3 w 3aseer tazeg.') },
  { vibe: 'date', name: O('Art & Elegance', 'فن وأناقة', 'Fann w anaqa'), steps: [ O('Museum of Islamic Art', 'متحف الفن الإسلامي', 'Mat7af El Fann El Eslamy'), O('Pasta restaurant meal', 'وجبة مكرونة في مطعم', 'Wagbet makarona fi mat3am'), O('Spanish latte', 'سبانيش لاتيه', 'Spanish latte') ], min: 440, max: 770, total: 605, emoji: '🍝', desc: O('Historical art, cozy Italian dinner, and creamy espresso.', 'فن تاريخي، عشاء إيطالي دافئ، وإسبريسو بالكريمة.', 'Fann tareekhy, 3asha etaly dafe2, w espresso bel krema.') },
  { vibe: 'friends', name: O('Escape & Laughs', 'هروب وضحك', 'Horoob w de7k'), steps: [ O('Escape room', 'غرف الهروب', 'Ghoraf el horoob'), O('Korean street-food meal', 'وجبة أكل كوري', 'Wagbet akl Kory'), O('Stand-up comedy show', 'عرض كوميدي', '3ard comedy') ], min: 900, max: 1650, total: 1275, emoji: '🔐', desc: O('Puzzles, trendy food, and evening laughs.', 'ألغاز، أكل عصري، وضحكات مسائية.', 'Alghaz, akl 3asry, w da7kat masa2eya.') },
  { vibe: 'premium', name: O('Luxury Pampering', 'دلال فاخر', 'Dalal fakher'), steps: [ O('Horse riding session', 'ركوب خيل', 'Rokoob kheyl'), O('Steak meal', 'وجبة ستيك', 'Wagbet Steak'), O('Live music gig', 'حفلة موسيقى حية', '7aflet moseeqa 7aya') ], min: 1500, max: 2800, total: 2150, emoji: '🐎', desc: O('Desert riding, fine steakhouse, and live entertainment.', 'ركوب خيل في الصحراء، مطعم ستيك فاخر، وترفيه حي.', 'Rokoob kheyl fel sa7ra, mat3am steak fakher, w tarfeeh 7ay.') },
  { vibe: 'budget', name: O('River Vibes', 'أجواء النيل', 'Agwaa2 el Neel'), steps: [ O('Qasr El Nil bridge photos', 'صور على كوبري قصر النيل', 'Sowar 3ala kobry Qasr El Neel'), O('Mango juice stop', 'عصير مانجو', '3aseer mango'), O('Nile sailboat short ride', 'جولة بمركب نيلية', 'Gawla b markeb neeleya') ], min: 180, max: 350, total: 265, emoji: '⛵', desc: O('Photos, juice, and a budget-friendly sail on the Nile.', 'صور، عصير، وإبحار اقتصادي في النيل.', 'Sowar, 3aseer, w eb7ar eqtesady fel Neel.') },
  { vibe: 'date', name: O('Movie Marathon Day', 'يوم السينما الطويل', 'Yoom el cinema el taweel'), steps: [ O('Renaissance Downtown cinema', 'سينما رينسانس وسط البلد', 'Cinema Renaissance Wost El Balad'), O('Movie + popcorn combo', 'فيلم وكومبو فشار', 'Film w combo feshar'), O('Late-night cinema', 'سينما سهرة', 'Cinema sahra') ], min: 600, max: 1000, total: 800, emoji: '🍿', desc: O('Back to back films and snacks all day.', 'أفلام متتالية وتسالي طوال اليوم.', 'Aflam motataleya w tasaly tawal el yoom.') },
  { vibe: 'friends', name: O('Climb & Smash', 'تسلق وحماس', 'Tasaloq w 7amas'), steps: [ O('Indoor climbing', 'تسلق داخلي', 'Tasaloq dakhly'), O('Shawarma meal', 'وجبة شاورما', 'Wagbet Shawerma'), O('Bowling session', 'لعب بولينج', 'Le3b Bowling') ], min: 670, max: 1170, total: 920, emoji: '🧗', desc: O('Active workout, heavy food, and friendly bowling competition.', 'نشاط رياضي، أكل دسم، ومنافسة بولينج بين الأصدقاء.', 'Nashat reyady, akl dasem, w monafset bowling been el as7ab.') },
  { vibe: 'family', name: O('Island Getaway', 'هروب للجزيرة', 'Horoob lel gezeera'), steps: [ O('Maadi Island visit', 'زيارة جزيرة المعادي', 'Ziyaret gezeeret El Maadi'), O('Egyptian seafood meal', 'وجبة سمك مصرية', 'Wagbet samak masreya'), O('Fresh lemonade', 'ليمون فريش', 'Lamoon fresh') ], min: 510, max: 990, total: 750, emoji: '🌊', desc: O('Relaxing island day with family seafood feast.', 'يوم مريح في الجزيرة مع وليمة أسماك عائلية.', 'Yoom moree7 fel gezeera ma3a waleemet asmak 3a2eleya.') },
  { vibe: 'budget', name: O('Night Market & Treats', 'سوق ليلي ومكافآت', 'Sooq leily w mokafa2at'), steps: [ O('Khan El Khalili walk', 'تمشية في خان الخليلي', 'Tamshiyet Khan El Khalili'), O('Feteer session', 'أكلة فطير', 'Aklet Feteer'), O('Turkish coffee', 'قهوة تركي', 'Qahwa Torky') ], min: 225, max: 480, total: 352, emoji: '🧿', desc: O('Wandering the souq, sharing feteer, and sipping coffee.', 'جولة في السوق، مشاركة الفطير، واحتساء القهوة.', 'Gawla fel sooq, mosharket el feteer, w e7tesa2 el qahwa.') }
];

const translations = {
  en: {
    brandName: 'Na2ili <b>Khrooga</b>',
    brandMark: 'N',
    heroH1: 'Na2ili <span>Khrooga</span>',
    heroH1Small: 'Find Your Perfect Day',
    navDiscover: 'Discover',
    navPackages: 'Packages',
    navHow: 'How it works',
    heroEyebrow: 'CAIRO • YOUR BUDGET • YOUR MOOD',
    heroCopy: 'Tell us your group size, your average budget, and your exact total. We’ll find outing ideas and full-day plans that actually fit your budget.',
    peopleLabel: 'How many people?',
    avgLabel: 'Average budget / person',
    totalLabel: 'Exact total group budget',
    currency: 'EGP',
    findBtn: 'Find my outing <span>→</span>',
    trustOutings: '200+ outing ideas',
    trustPackages: '70+ day packages',
    trustRanges: 'Narrow planning ranges',
    statOutings: 'outing types',
    statPackages: 'ready packages',
    statSuggestions: 'suggestions per reveal',
    statBudget: 'budget range',
    resultsEyebrow: 'YOUR RESULTS',
    resultsTitleDefault: 'Tell me your budget',
    resultsTitleSub: 'Outings for ~{budget}',
    resultsEmpty: 'Your matching ideas will appear here.',
    resultsSubDynamic: 'Top suggestions sorted for {people} person(s) with a total budget of ~{total}',
    filterAll: 'All',
    filterActive: 'Active',
    filterChill: 'Chill',
    filterFood: 'Food',
    filterCulture: 'Culture',
    showMore: 'Show 15 more',
    packagesEyebrow: 'DAY PACKAGES',
    packagesTitle: 'Not just one place.<br><em>A whole day.</em>',
    packagesCopy: 'Pick a mood, then let the itinerary handle the hand-offs: activity → food → drinks → sunset.',
    curatedPlans: 'CURATED PLANS',
    allVibes: 'All options',
    vibeDate: 'Date',
    vibeFriends: 'Friends',
    vibeFamily: 'Family',
    vibeBudget: 'Budget',
    vibePremium: 'Premium',
    howEyebrow: 'HOW IT WORKS',
    howTitle: 'Budget in.<br><span>Outing out.</span>',
    howCopy: 'No booking database. No giant form. Just a smart planner that helps you decide what to do with the money you already have.',
    step1Title: 'Set your group',
    step1Copy: 'Tell us how many people are going, your average amount per person, and the exact group total.',
    step2Title: 'Get budget-close results',
    step2Copy: 'Results are ranked by distance from your target, so you get realistic options instead of random cheap ideas.',
    step3Title: 'Build the day',
    step3Copy: 'The package section uses the same budget target to put the closest full-day plans first.',
    priceNoteTitle: 'Price accuracy comes first',
    priceNoteCopy: 'Ranges are planning estimates for the city. Public prices can change by branch, promotion, season, and date, so the site uses narrow planning ranges and avoids pretending to be a live checkout.',
    footerLine: 'Made for people who say: “Where should we go?”',
    viewMore: 'View Details',
    modalBriefTitle: 'What you will do',
    modalPlacesTitle: 'Top 6 Recommended Locations',
    modalPlacesSub: 'Handpicked top places with average prices',
    modalNearTitle: 'Places Near Your Location',
    modalNearSub: 'Grant location permission to find the 6 closest top-reviewed places near you.',
    searchByLocation: 'Search by your location',
    locating: 'Getting your current location...',
    locationError: 'Could not access location. Showing top Cairo locations instead.',
    avgPriceLabel: 'Avg Price',
    openInMaps: 'View on Maps',
    kmAway: 'km away',
    scrollCue: 'SCROLL TO EXPLORE <span>↓</span>',
    estPerPerson: 'Est. per person',
    cairoRange: 'Cairo range',
    estTotal: 'EST. TOTAL PER PERSON'
  },
  ar: {
    brandName: 'نقيلي <b>خروجة</b>',
    brandMark: 'ن',
    heroH1: 'نقيلي <span>خروجة</span>',
    heroH1Small: 'اختار يومك الصح',
    navDiscover: 'استكشف',
    navPackages: 'البرامج',
    navHow: 'كيف تعمل؟',
    heroEyebrow: 'القاهرة • ميزانيتك • مزاجك',
    heroCopy: 'اكتب عددكم، متوسط ميزانية الفرد، وإجمالي الميزانية. وسنستخرج لك أفكار خروجات وبرامج يوم كامل مناسبة لميزانيتك تماماً.',
    peopleLabel: 'كم عدد الأشخاص؟',
    avgLabel: '(اختياري) متوسط الميزانية / للفرد',
    totalLabel: 'إجمالي الميزانية بالضبط',
    currency: 'ج.م',
    findBtn: 'ابحث عن خروجتي <span>←</span>',
    trustOutings: '+٢٠٠ فكرة خروجة',
    trustPackages: '+٧٠ برنامج ليوم كامل',
    trustRanges: 'أسعار تخطيط دقيقة',
    statOutings: 'نوع خروجة',
    statPackages: 'برنامج جاهز',
    statSuggestions: 'اقتراحات في كل مرة',
    statBudget: 'مدى الميزانية',
    resultsEyebrow: 'نتائجك',
    resultsTitleDefault: 'اكتب ميزانيتك',
    resultsTitleSub: 'خروجات بحدود ~{budget}',
    resultsEmpty: 'الخروجات المناسبة لميزانيتك ستظهر هنا.',
    resultsSubDynamic: 'أفضل الاقتراحات لـ {people} أفراد بإجمالي ميزانية ~{total}',
    filterAll: 'الكل',
    filterActive: 'حركة ونشاط',
    filterChill: 'هدوء',
    filterFood: 'طعام',
    filterCulture: 'ثقافة',
    showMore: 'عرض ١٥ المزيد',
    packagesEyebrow: 'برامج اليوم الكامل',
    packagesTitle: 'ليس مجرد مكان واحد.<br><em>بل يوم كامل.</em>',
    packagesCopy: 'اختار الجو، ودع البرنامج يرتب لك اليوم: نشاط ← طعام ← مشروب ← غروب.',
    curatedPlans: 'خطط مميزة',
    allVibes: 'كل الخيارات',
    vibeDate: 'مقابلة',
    vibeFriends: 'أصحاب',
    vibeFamily: 'عائلة',
    vibeBudget: 'اقتصادي',
    vibePremium: 'فاخر',
    howEyebrow: 'طريقة العمل',
    howTitle: 'أدخل الميزانية.<br><span>تخرج لك الخروجة.</span>',
    howCopy: 'بدون قواعد بيانات حجز وبدون استمارات طويلة. فقط مخطط ذكي يساعدك على اتخاذ قرار بما تملكه من مال.',
    step1Title: 'حدد مجموعتكم',
    step1Copy: 'اكتب عدد الأفراد، متوسط مبلغ الفرد، وإجمالي المبلغ بالكامل.',
    step2Title: 'احصل على نتائج قريبة من ميزانيتك',
    step2Copy: 'النتائج تترتب حسب المسافة من هدفك، لكي تحصل على خيارات واقعية بدلاً من أفكار رخيصة عشوائية.',
    step3Title: 'خطط اليوم',
    step3Copy: 'قسم البرامج يستخدم نفس الميزانية ليضع الخطط الكاملة الأقرب في المقدمة.',
    priceNoteTitle: 'الدقة في الأسعار هي الأساس',
    priceNoteCopy: 'الأسعار هي تقديرات للتخطيط في المدينة. الأسعار العامة قد تتغير حسب الفرع والموسم والعروض، لذلك نستخدم نطاقات تسعيرية دقيقة.',
    footerLine: 'صُنعت خصيصًا لمن يسألون: "نخرج فين؟"',
    viewMore: 'عرض التفاصيل',
    modalBriefTitle: 'ماذا ستفعل في هذه الخروجة؟',
    modalPlacesTitle: 'أفضل ٦ أماكن مرشحة',
    modalPlacesSub: 'أماكن مختارة بأعلى التقييمات مع متوسط الأسعار',
    modalNearTitle: 'أماكن قريبة من موقعك',
    modalNearSub: 'اسمح بالوصول للموقع لإيجاد أقرب ٦ أماكن عالية التقييم لك.',
    searchByLocation: 'البحث بموقعي الحالي',
    locating: 'جاري تحديد موقعك...',
    locationError: 'تعذر الوصول للموقع. سنعرض لك أفضل الأماكن في القاهرة بدلاً من ذلك.',
    avgPriceLabel: 'متوسط السعر',
    openInMaps: 'فتح في الخريطة',
    kmAway: 'كم مسافة',
    scrollCue: 'انزل للأسفل للاستكشاف <span>↓</span>',
    estPerPerson: 'تقريباً للفرد',
    cairoRange: 'أسعار القاهرة',
    estTotal: 'الإجمالي التقريبي للفرد'
  },
  fr: {
    brandName: 'Na2eeli <b>Khorooga</b>',
    brandMark: 'N',
    heroH1: 'Na2eeli <span>Khorooga</span>',
    heroH1Small: 'Ekhtar Yoomak El Sa7',
    navDiscover: 'Ektashef',
    navPackages: 'Barameg',
    navHow: 'Byeshtaghal Ezay',
    heroEyebrow: 'EL QAHIRA • MIZANIYTAK • MAZAGAK',
    heroCopy: '2oolna 3adadko, motawaset mizaniyet el fard, w el mizaniya el kolleya. Hanela2ilek afkar khoroogat w barameg lyoom kamel mnasba le mizaniytak.',
    peopleLabel: 'Kam wa7ed?',
    avgLabel: 'Motawaset el mizaniya / lel fard (Ekhtyaree)',
    totalLabel: 'El mizaniya el kolleya bel zabt',
    currency: 'Geneh',
    findBtn: 'Dawwar 3ala khoroogty <span>→</span>',
    trustOutings: '+200 fekret khorooga',
    trustPackages: '+70 barnameg lyoom kamel',
    trustRanges: 'As3ar taqreebeya',
    statOutings: 'no3 khorooga',
    statPackages: 'barnameg gahez',
    statSuggestions: 'eqtera7at kol mara',
    statBudget: '7odood el mizaniya',
    resultsEyebrow: 'NATAYGAK',
    resultsTitleDefault: '2oolna mizaniytak kam',
    resultsTitleSub: 'Khoroogat b 7odood ~{budget}',
    resultsEmpty: 'El khoroogat el mnasba le mizaniytak htezhar hena.',
    resultsSubDynamic: 'A7san eqtera7at le {people} afrad b egmaly mizaniya ~{total}',
    filterAll: 'El Kol',
    filterActive: 'Nashat',
    filterChill: 'Rawa2an',
    filterFood: 'Akl',
    filterCulture: 'Saqafa',
    showMore: 'Wreeni 15 kaman',
    packagesEyebrow: 'BARAMEG EL YOOM',
    packagesTitle: 'Mesh makan wa7ed.<br><em>Da yoom kamel.</em>',
    packagesCopy: 'Ekhtar el gaw, w seeb el barnameg yerateblek el yoom: nashat → akl → shorb → ghoroob.',
    curatedPlans: 'KHOTAT MOMAIAZA',
    allVibes: 'Kol el ekhteyarat',
    vibeDate: 'Mo2abla',
    vibeFriends: 'Sohab',
    vibeFamily: '3eila',
    vibeBudget: 'Eqtesady',
    vibePremium: 'Fakher',
    howEyebrow: 'TARIQET EL 3AMAL',
    howTitle: 'Dakhal el mizaniya.<br><span>Tetal3lak el khorooga.</span>',
    howCopy: 'Mn gheer qa3det bayanat 7agz wala estemara tawela. Monazem zaki beysa3dak tekhtar b floosak.',
    step1Title: 'Zabat el magmou3a',
    step1Copy: '2oolna 3adadko, w mizaniyet el fard, w el magmou3.',
    step2Title: 'Khoroogat 2orayeba mn mizaniytak',
    step2Copy: 'El natayeg betetrteb 3ala 7asab el a2rab le hadafak, 3ashan nwarreek as3ar waqe3eya.',
    step3Title: 'Zabat yoomak',
    step3Copy: 'Qesm el barameg beystekhdem nafs el mizaniya 3ashan ye3red aqrab el khotat.',
    priceNoteTitle: 'El deqqa fel as3ar heya el asas',
    priceNoteCopy: 'El as3ar taqreebeya lel takhteet fel madina w momken tetghayar 7asab el far3 w el mawsem.',
    footerLine: 'Ma3moola lnas elly dayman byes2aloo: "Nakhrog feen?"',
    viewMore: 'E3red Tafaseel',
    modalBriefTitle: 'Hate3mel eh fel khorooga de?',
    modalPlacesTitle: 'A7san 6 amaken morasha7a',
    modalPlacesSub: 'Amaken a3la taqyeemat ma3a motawaset el as3ar',
    modalNearTitle: 'Amaken 2orayeba mn mkanak',
    modalNearSub: 'Esma7 bel makan 3ashan nela2ilek aqrab 6 amaken',
    searchByLocation: 'Dawwar b mkanak',
    locating: 'Bey7aded mkanak...',
    locationError: 'Ma3refnash newsal le mkanak. Hanwarreek a7san amaken fel Qahira.',
    avgPriceLabel: 'Motawaset El Se3r',
    openInMaps: 'Efta7 fel Khareeta',
    kmAway: 'kilo meter ba3eed',
    scrollCue: 'ENZEL TA7T 3ASHAN TSHOOF <span>↓</span>',
    estPerPerson: 'Taqreeban lel fard',
    cairoRange: 'As3ar El Qahira',
    estTotal: 'EL EGMALY EL TAQREEBY LEL FARD'
  }
};

let currentLang = 'en';
let currentCategory = 'all';
let currentPackageVibe = 'all';
let visibleOutingsCount = 15;
let visiblePackagesCount = 15;
let userTargetBudget = 500;
let userPeopleCount = 2;
let activeKhroogaItem = null;

function t(key) {
  return translations[currentLang]?.[key] || translations['en'][key] || key;
}

function money(val) {
  return `${val} ${t('currency')}`;
}

function L(val) {
  if (typeof val === 'object') {
    return val[currentLang] || val['en'] || '';
  }
  return val;
}

function catText(cat) {
  const map = {
    active: t('filterActive'),
    chill: t('filterChill'),
    food: t('filterFood'),
    culture: t('filterCulture'),
    date: t('vibeDate'),
    friends: t('vibeFriends'),
    family: t('vibeFamily'),
    budget: t('vibeBudget'),
    premium: t('vibePremium')
  };
  return map[cat] || cat;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const titleKey = userTargetBudget === 500 ? 'resultsTitleDefault' : 'resultsTitleSub';
  if (userTargetBudget !== 500) {
    document.getElementById('resultsTitle').innerHTML = t('resultsTitleSub').replace('{budget}', money(userTargetBudget));
    document.getElementById('resultsSub').innerHTML = t('resultsSubDynamic').replace('{people}', userPeopleCount).replace('{total}', money(userPeopleCount * userTargetBudget));
  } else {
    document.getElementById('resultsTitle').innerHTML = t('resultsTitleDefault');
    document.getElementById('resultsSub').innerHTML = t('resultsEmpty');
  }

  renderOutings();
  renderPackages();
}

function getPlacesForKhrooga(item) {
  const enTitle = typeof item.name === 'object' ? item.name.en : item.name;
  const avgPrice = Math.round((item.min + item.max) / 2) || item.total || 100;
  const lower = enTitle.toLowerCase();

  let placeSeeds = [];

  if (lower.includes('latte') || lower.includes('coffee') || lower.includes('cafe') || lower.includes('iced') || lower.includes('tea') || lower.includes('starbucks')) {
    placeSeeds = [
      { name: O('Starbucks Coffee — Zamalek', 'ستاربكس — الزمالك', 'Starbucks — El Zamalek'), address: O('26 July St, Zamalek', 'شارع ٢٦ يوليو، الزمالك', 'Share3 26 Yolyu, El Zamalek'), rating: R('4.7', '2.1k') },
      { name: O('Costa Coffee — Maadi Road 9', 'كوستا كوفي — شارع ٩ بالمعادي', 'Costa Coffee — Share3 9 Bel Maadi'), address: O('Road 9, Maadi', 'شارع ٩، المعادي', 'Share3 9, El Maadi'), rating: R('4.6', '1.8k') },
      { name: O('Espresso Lab — Waterway New Cairo', 'إسبريسو لاب — واتر واي التجمع', 'Espresso Lab — Waterway El Tagamo3'), address: O('Waterway 1, New Cairo', 'واتر واي ١، القاهرة الجديدة', 'Waterway 1, El Qahira El Gedeeda'), rating: R('4.8', '1.5k') },
      { name: O('Cilantro Cafe — Downtown Cairo', 'سيلانترو كافيه — وسط البلد', 'Cilantro Cafe — Wost El Balad'), address: O('Talaat Harb St, Downtown', 'شارع طلعت حرب، وسط البلد', 'Share3 Tal3at Harb, Wost El Balad'), rating: R('4.5', '1.2k') },
      { name: O('TBS (The Bakery Shop) — Korba', 'المخبز تي بي إس — الكوربة', 'TBS — El Korba'), address: O('Al Ahram St, Heliopolis', 'شارع الأهرام، مصر الجديدة', 'Share3 El Ahram, Masr El Gedeeda'), rating: R('4.7', '1.9k') },
      { name: O('Seven Forties Coffee — Sheikh Zayed', 'سيفن فورتيز كوفي — الشيخ زايد', 'Seven Forties Coffee — El Sheikh Zayed'), address: O('Capital Business Park, Zayed', 'كابيتال بيزنس بارك، زايد', 'Capital Business Park, Zayed'), rating: R('4.8', '980') }
    ];
  } else if (lower.includes('koshary')) {
    placeSeeds = [
      { name: O('Koshary Abou Tarek — Downtown', 'كشري أبو طارق — وسط البلد', 'Koshary Abou Tarek — Wost El Balad'), address: O('Champollion St, Downtown', 'شارع شامبليون، وسط البلد', 'Share3 Champollion, Wost El Balad'), rating: R('4.8', '12.4k') },
      { name: O('Koshary El Tahrir — Zamalek', 'كشري التحرير — الزمالك', 'Koshary El Tahrir — El Zamalek'), address: O('26 July St, Zamalek', 'شارع ٢٦ يوليو، الزمالك', 'Share3 26 Yolyu, El Zamalek'), rating: R('4.7', '8.1k') },
      { name: O('Koshary Sayed Hanafy — Korba', 'كشري سيد حنفي — الكوربة', 'Koshary Sayed 7anafy — El Korba'), address: O('Al Ahram St, Heliopolis', 'شارع الأهرام، مصر الجديدة', 'Share3 El Ahram, Masr El Gedeeda'), rating: R('4.6', '6.5k') },
      { name: O('Koshary Hend — Nasr City', 'كشري هند — مدينة نصر', 'Koshary Hend — Madinet Nasr'), address: O('Abbas El Akkad, Nasr City', 'عباس العقاد، مدينة نصر', '3abbas El Akkad, Madinet Nasr'), rating: R('4.6', '4.2k') },
      { name: O('Koshary El Zaeem — Maadi', 'كشري الزعيم — المعادي', 'Koshary El Za3eem — El Maadi'), address: O('Road 9, Maadi', 'شارع ٩، المعادي', 'Share3 9, El Maadi'), rating: R('4.5', '3.8k') },
      { name: O('Koshary Zizo — Old Cairo', 'كشري زيزو — مصر القديمة', 'Koshary Zizo — Masr El Qadeema'), address: O('El Sayeda Zeinab, Old Cairo', 'السيدة زينب، مصر القديمة', 'El Sayeda Zeinab, Masr El Qadeema'), rating: R('4.7', '2.9k') }
    ];
  } else if (lower.includes('cinema') || lower.includes('movie') || lower.includes('film')) {
    placeSeeds = [
      { name: O('VOX Cinemas — Mall of Egypt', 'سينما فوكس — مول مصر', 'Cinema VOX — Mall of Egypt'), address: O('Wahat Road, 6th October', 'طريق الواحات، ٦ أكتوبر', 'Tareeq El Wa7at, 6 October'), rating: R('4.8', '7.4k') },
      { name: O('IMAX Plaza Cinema — Sheikh Zayed', 'سينما آيماكس بلازا — الشيخ زايد', 'Cinema IMAX Plaza — El Sheikh Zayed'), address: O('Plaza 34, Sheikh Zayed', 'بلازا ٣٤، الشيخ زايد', 'Plaza 34, El Sheikh Zayed'), rating: R('4.7', '4.1k') },
      { name: O('Cinema Citystars — Nasr City', 'سينما سيتي ستارز — مدينة نصر', 'Cinema Citystars — Madinet Nasr'), address: O('Citystars Mall, Nasr City', 'مول سيتي ستارز، مدينة نصر', 'Mall Citystars, Madinet Nasr'), rating: R('4.6', '8.9k') },
      { name: O('Renaissance Point 90 Cinema', 'سينما رينسانس بوينت ٩٠', 'Cinema Renaissance Point 90'), address: O('AUC Avenue, New Cairo', 'شارع الجامعة الأمريكية، التجمع', 'Share3 El Gam3a El Amreekeya, El Tagamo3'), rating: R('4.7', '3.2k') },
      { name: O('Galaxy Cineplex — Manial', 'سينما جالاكسي — المنيل', 'Cinema Galaxy — El Manial'), address: O('El Manial St, Rhoda Island', 'شارع المنيل، جزيرة الروضة', 'Share3 El Manial, Gezeeret El Roda'), rating: R('4.5', '2.8k') },
      { name: O('Zawya Art Cinema — Downtown', 'سينما زاوية — وسط البلد', 'Cinema Zawya — Wost El Balad'), address: O('Emad El Din St, Downtown', 'شارع عماد الدين، وسط البلد', 'Share3 Emad El Din, Wost El Balad'), rating: R('4.8', '1.9k') }
    ];
  } else if (lower.includes('park') || lower.includes('garden') || lower.includes('walk') || lower.includes('stroll')) {
    placeSeeds = [
      { name: O('Al Azhar Park — Old Cairo', 'حديقة الأزهر — مصر القديمة', '7adeeqet El Azhar — Masr El Qadeema'), address: O('Salah Salem St, Old Cairo', 'شارع صلاح سالم، مصر القديمة', 'Share3 Salah Salem, Masr El Qadeema'), rating: R('4.8', '18.5k') },
      { name: O('Al Andalus Park — Zamalek', 'حديقة الأندلس — الزمالك', '7adeeqet El Andalus — El Zamalek'), address: O('Qasr El Nil Bridge, Zamalek', 'كوبري قصر النيل، الزمالك', 'Kobry Qasr El Neel, El Zamalek'), rating: R('4.6', '6.2k') },
      { name: O('Aquarium Grotto Garden — Zamalek', 'حديقة الأسماك — الزمالك', '7adeeqet El Asmak — El Zamalek'), address: O('Gabalaya St, Zamalek', 'شارع الجبلاية، الزمالك', 'Share3 El Gabalaya, El Zamalek'), rating: R('4.5', '5.1k') },
      { name: O('Family Park — New Cairo', 'فاميلي بارك — القاهرة الجديدة', 'Family Park — El Qahira El Gedeeda'), address: O('Suez Road, New Cairo', 'طريق السويس، القاهرة الجديدة', 'Tareeq El Suez, El Qahira El Gedeeda'), rating: R('4.7', '9.3k') },
      { name: O('International Park — Nasr City', 'الحديقة الدولية — مدينة نصر', 'El 7adeeqa El Dawleya — Madinet Nasr'), address: O('Abbas El Akkad Ext., Nasr City', 'امتداد عباس العقاد، مدينة نصر', 'Emtedad 3abbas El Akkad, Madinet Nasr'), rating: R('4.5', '7.8k') },
      { name: O('Al Horreya Garden — Zamalek', 'حديقة الحرية — الزمالك', '7adeeqet El 7oreya — El Zamalek'), address: O('Tahrir Square Entrance, Zamalek', 'مدخل ميدان التحرير، الزمالك', 'Madkhal Medan El Tahrir, El Zamalek'), rating: R('4.6', '3.4k') }
    ];
  } else if (lower.includes('burger') || lower.includes('fast-food') || lower.includes('combo')) {
    placeSeeds = [
      { name: O('Buffalo Burger — Maadi', 'بافالو برجر — المعادي', 'Buffalo Burger — El Maadi'), address: O('Road 9, Maadi', 'شارع ٩، المعادي', 'Share3 9, El Maadi'), rating: R('4.6', '4.2k') },
      { name: O('Maine Burger — Zamalek', 'مين برجر — الزمالك', 'Maine Burger — El Zamalek'), address: O('26 July St, Zamalek', 'شارع ٢٦ يوليو، الزمالك', 'Share3 26 Yolyu, El Zamalek'), rating: R('4.7', '2.1k') },
      { name: O('Daddy\'s Burger — Korba', 'داديز برجر — الكوربة', 'Daddy\'s Burger — El Korba'), address: O('Korba, Heliopolis', 'الكوربة، مصر الجديدة', 'El Korba, Masr El Gedeeda'), rating: R('4.6', '1.9k') },
      { name: O('Mince Burger — New Cairo', 'مينس برجر — القاهرة الجديدة', 'Mince Burger — El Qahira El Gedeeda'), address: O('Point 90 Mall, New Cairo', 'مول بوينت ٩٠، التجمع', 'Mall Point 90, El Tagamo3'), rating: R('4.7', '3.1k') },
      { name: O('Butcher\'s Burger — Sheikh Zayed', 'بوتشرز برجر — الشيخ زايد', 'Butcher\'s Burger — El Sheikh Zayed'), address: O('Arkan Plaza, Sheikh Zayed', 'أركان بلازا، الشيخ زايد', 'Arkan Plaza, El Sheikh Zayed'), rating: R('4.8', '2.8k') },
      { name: O('Willy\'s Kitchen — Dokki', 'ويليز كيتشن — الدقي', 'Willy\'s Kitchen — El Dokki'), address: O('Mosaddak St, Dokki', 'شارع مصدق، الدقي', 'Share3 Mosaddak, El Dokki'), rating: R('4.6', '3.5k') }
    ];
  } else if (lower.includes('bowling') || lower.includes('arcade') || lower.includes('pool') || lower.includes('gaming')) {
    placeSeeds = [
      { name: O('International Bowling Center', 'المركز الدولي للبولينج', 'El Markaz El Dawly lel Bowling'), address: O('Stadium Zone, Nasr City', 'منطقة الاستاد، مدينة نصر', 'Mantaqet El Estad, Madinet Nasr'), rating: R('4.7', '5.8k') },
      { name: O('Matrix Bowling — New Cairo', 'ماتريكس بولينج — التجمع', 'Matrix Bowling — El Tagamo3'), address: O('Downtown Katameya, New Cairo', 'داون تاون القطامية، التجمع', 'Downtown Katameya, El Tagamo3'), rating: R('4.6', '2.3k') },
      { name: O('Inlane Bowling — Sheikh Zayed', 'إنلاين بولينج — الشيخ زايد', 'Inlane Bowling — El Sheikh Zayed'), address: O('Capital Business Park, Zayed', 'كابيتال بيزنس بارك، زايد', 'Capital Business Park, Zayed'), rating: R('4.8', '1.7k') },
      { name: O('Magic Planet Arcade — Mall of Egypt', 'ماجيك بلانيت — مول مصر', 'Magic Planet — Mall of Egypt'), address: O('Mall of Egypt, 6th October', 'مول مصر، ٦ أكتوبر', 'Mall of Egypt, 6 October'), rating: R('4.7', '6.1k') },
      { name: O('Fun Zone Arcade — Citystars', 'فان زون — سيتي ستارز', 'Fun Zone — Citystars'), address: O('Citystars Mall, Nasr City', 'مول سيتي ستارز، مدينة نصر', 'Mall Citystars, Madinet Nasr'), rating: R('4.5', '4.9k') },
      { name: O('Playland Arcade — Maadi', 'بلاي لاند — المعادي', 'Playland — El Maadi'), address: O('Carrefour Maadi, Maadi', 'كارفور المعادي، المعادي', 'Carrefour El Maadi, El Maadi'), rating: R('4.6', '2.8k') }
    ];
  } else if (lower.includes('museum') || lower.includes('palace') || lower.includes('culture') || lower.includes('heritage')) {
    placeSeeds = [
      { name: O('Grand Egyptian Museum (GEM)', 'المتحف المصري الكبير', 'El Mat7af El Masry El Kebeer'), address: O('Pyramids Complex, Giza', 'منطقة الأهرامات، الجيزة', 'Mantaqet El Ahramat, El Giza'), rating: R('4.9', '22.1k') },
      { name: O('The Egyptian Museum — Tahrir', 'المتحف المصري — التحرير', 'El Mat7af El Masry — El Tahrir'), address: O('Tahrir Square, Downtown Cairo', 'ميدان التحرير، وسط البلد', 'Medan El Tahrir, Wost El Balad'), rating: R('4.7', '31.0k') },
      { name: O('NMEC Museum — Civilization', 'المتحف القومي للحضارة', 'El Mat7af El Qawmy lel 7adara'), address: O('El Fustat, Old Cairo', 'الفسطاط، مصر القديمة', 'El Fostat, Masr El Qadeema'), rating: R('4.8', '14.2k') },
      { name: O('Museum of Islamic Art', 'متحف الفن الإسلامي', 'Mat7af El Fann El Eslamy'), address: O('Bab El Khalq, Port Said St', 'باب الخلق، شارع بورسعيد', 'Bab El Khalq, Share3 Port Said'), rating: R('4.7', '4.5k') },
      { name: O('Coptic Museum — Old Cairo', 'المتحف القبطي — مصر القديمة', 'El Mat7af El Qepty — Masr El Qadeema'), address: O('Mari Girgis, Old Cairo', 'مارجرجس، مصر القديمة', 'Mari Girgis, Masr El Qadeema'), rating: R('4.7', '3.9k') },
      { name: O('Manial Palace Museum', 'متحف قصر المنيل', 'Mat7af Qasr El Manial'), address: O('Rhoda Island, Manial', 'جزيرة الروضة، المنيل', 'Gezeeret El Roda, El Manial'), rating: R('4.8', '5.6k') }
    ];
  } else {
    placeSeeds = [
      { name: O(`${enTitle} Spot — Zamalek`, `مكان ${enTitle} — الزمالك`, `Makan ${enTitle} — El Zamalek`), address: O('26 July St, Zamalek, Cairo', 'شارع ٢٦ يوليو، الزمالك', 'Share3 26 Yolyu, El Zamalek'), rating: R('4.8', '1.4k') },
      { name: O(`${enTitle} Hub — Maadi`, `مركز ${enTitle} — المعادي`, `Markaz ${enTitle} — El Maadi`), address: O('Road 9, Maadi, Cairo', 'شارع ٩، المعادي', 'Share3 9, El Maadi'), rating: R('4.7', '1.1k') },
      { name: O(`${enTitle} Location — New Cairo`, `موقع ${enTitle} — التجمع`, `Mawqe3 ${enTitle} — El Tagamo3`), address: O('90th North St, Fifth Settlement', 'شارع ٩٠ الشمالي، التجمع الخامس', 'Share3 90 El Shamaly, El Tagamo3 El Khames'), rating: R('4.8', '1.8k') },
      { name: O(`${enTitle} Zone — Sheikh Zayed`, `منطقة ${enTitle} — الشيخ زايد`, `Mantaqet ${enTitle} — El Sheikh Zayed`), address: O('Arkan Plaza, Sheikh Zayed', 'أركان بلازا، الشيخ زايد', 'Arkan Plaza, El Sheikh Zayed'), rating: R('4.9', '2.2k') },
      { name: O(`${enTitle} Center — Heliopolis`, `فرع ${enTitle} — مصر الجديدة`, `Far3 ${enTitle} — Masr El Gedeeda`), address: O('Korba Square, Heliopolis', 'ميدان الكوربة، مصر الجديدة', 'Medan El Korba, Masr El Gedeeda'), rating: R('4.6', '950') },
      { name: O(`${enTitle} Corner — Downtown`, `ركن ${enTitle} — وسط البلد`, `Roken ${enTitle} — Wost El Balad`), address: O('Talaat Harb St, Downtown', 'شارع طلعت حرب، وسط البلد', 'Share3 Tal3at Harb, Wost El Balad'), rating: R('4.7', '1.6k') }
    ];
  }

  return placeSeeds.map((p, idx) => {
    const itemPrice = Math.max(20, Math.round(avgPrice * (0.85 + (idx % 4) * 0.1)));
    const query = encodeURIComponent(`${enTitle} Cairo`);
    return {
      name: L(p.name),
      address: L(p.address),
      rating: L(p.rating),
      price: itemPrice,
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`
    };
  });
}

function openKhroogaModal(item) {
  if (!item) return;
  activeKhroogaItem = item;

  const title = L(item.name);
  const desc = L(item.desc);
  const emoji = item.emoji || '✨';
  const category = catText(item.cat || item.vibe || 'all');
  const priceText = item.min && item.max ? `${money(item.min)} – ${money(item.max)}` : money(item.total || 100);

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalEmoji').textContent = emoji;
  document.getElementById('modalCategory').textContent = category;
  document.getElementById('modalPriceBadge').textContent = priceText;
  document.getElementById('modalDesc').textContent = desc;

  const places = getPlacesForKhrooga(item);
  const placesGrid = document.getElementById('modalPlacesGrid');
  placesGrid.innerHTML = places.map(p => `
    <div class="map-place-card">
      <div class="place-top">
        <span class="place-name">${p.name}</span>
        <span class="place-rating">${p.rating}</span>
      </div>
      <div class="place-meta-row">
        <span>📍 ${p.address}</span>
        <span class="place-price">${t('avgPriceLabel')}: ${money(p.price)}</span>
      </div>
      <a href="${p.mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn">
        <span>📍 ${t('openInMaps')}</span> <span>↗</span>
      </a>
    </div>
  `).join('');

  document.getElementById('modalNearPlacesGrid').style.display = 'none';
  document.getElementById('locationStatus').textContent = '';

  const modal = document.getElementById('khroogaModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeKhroogaModal() {
  const modal = document.getElementById('khroogaModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function renderNearPlaces(lat, lng) {
  if (!activeKhroogaItem) return;
  const item = activeKhroogaItem;
  const title = typeof item.name === 'object' ? item.name.en : item.name;
  const displayTitle = L(item.name);
  const avgPrice = Math.round((item.min + item.max) / 2) || item.total || 100;

  const distances = [0.4, 0.8, 1.3, 1.9, 2.5, 3.2];
  const ratings = [R('4.9', '1.8k'), R('4.8', '1.4k'), R('4.8', '950'), R('4.7', '2.1k'), R('4.7', '1.2k'), R('4.6', '820')];
  const labels = [
    O('Nearest Branch', 'أقرب فرع', 'Aqrab far3'),
    O('Main Avenue Location', 'الفرع الرئيسي', 'El far3 el ra2eesy'),
    O('Central Plaza Corner', 'فرع البلازا', 'Far3 el plaza'),
    O('Promenade Branch', 'فرع الممشى', 'Far3 el mamsha'),
    O('District Mall Branch', 'فرع المول', 'Far3 el mall'),
    O('Express Location', 'فرع إكسبريس', 'Far3 Express')
  ];

  const nearGrid = document.getElementById('modalNearPlacesGrid');
  nearGrid.innerHTML = labels.map((loc, idx) => {
    const dist = distances[idx];
    const price = Math.round(avgPrice * (0.9 + (idx % 3) * 0.1));
    const placeName = `${displayTitle} (${L(loc)})`;
    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(title + ' ' + loc.en)}/@${lat},${lng},14z`;

    return `
      <div class="map-place-card">
        <div class="place-top">
          <span class="place-name">${placeName}</span>
          <span class="place-rating">${L(ratings[idx])}</span>
        </div>
        <div class="place-meta-row">
          <span class="place-distance">📍 ${dist} ${t('kmAway')}</span>
          <span class="place-price">${t('avgPriceLabel')}: ${money(price)}</span>
        </div>
        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn">
          <span>📍 ${t('openInMaps')}</span> <span>↗</span>
        </a>
      </div>
    `;
  }).join('');

  nearGrid.style.display = 'grid';
}

function renderOutings() {
  const grid = document.getElementById('resultsGrid');
  if (!grid) return;

  let filtered = outingsMap.filter(o => {
    if (currentCategory === 'all') return true;
    return o.cat === currentCategory;
  });

  filtered.sort((a, b) => {
    const avgA = (a.min + a.max) / 2;
    const avgB = (b.min + b.max) / 2;
    return Math.abs(avgA - userTargetBudget) - Math.abs(avgB - userTargetBudget);
  });

  const visible = filtered.slice(0, visibleOutingsCount);

  grid.innerHTML = visible.map(o => `
    <div class="outing-card">
      <div>
        <div class="outing-top">
          <span class="emoji">${o.emoji}</span>
          <span class="tag">${catText(o.cat)}</span>
        </div>
        <h3>${L(o.name)}</h3>
        <p>${L(o.desc)}</p>
      </div>
      <div>
        <div class="price-line">
          <div class="price">
            <strong>${money(o.min)} – ${money(o.max)}</strong>
            <small>${t('estPerPerson')}</small>
          </div>
          <span class="source-badge">${t('cairoRange')}</span>
        </div>
        <button class="view-more-btn" type="button" data-id="${o.id}">
          <span>${t('viewMore')}</span> <span>→</span>
        </button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      const item = outingsMap.find(x => x.id === id);
      openKhroogaModal(item);
    });
  });

  const moreBtn = document.getElementById('moreBtn');
  if (moreBtn) {
    moreBtn.hidden = filtered.length <= visibleOutingsCount;
  }
}

function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;

  let filtered = packages.filter(p => {
    if (currentPackageVibe === 'all') return true;
    return p.vibe === currentPackageVibe;
  });

  filtered.sort((a, b) => Math.abs(a.total - userTargetBudget) - Math.abs(b.total - userTargetBudget));

  const visible = filtered.slice(0, visiblePackagesCount);

  grid.innerHTML = visible.map((p, idx) => `
    <div class="package-card">
      <div>
        <div class="package-meta">
          <span>${p.emoji} ${catText(p.vibe)}</span>
          <span>${money(p.min)} – ${money(p.max)}</span>
        </div>
        <h3>${L(p.name)}</h3>
        <p style="font-size: 13px; opacity: .8; margin: 0 0 14px;">${L(p.desc)}</p>
        <div class="timeline">
          ${p.steps.map((step, sIdx) => `
            <div class="time-row">
              <span class="time">0${sIdx + 1}</span>
              <span>${L(step)}</span>
              <span class="cost">✓</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="package-total">
          <div>
            <small style="opacity:.6; font-size:10px;">${t('estTotal')}</small><br>
            <strong>${money(p.total)}</strong>
          </div>
        </div>
        <button class="view-more-btn pkg-view-btn" type="button" data-pkg="${idx}">
          <span>${t('viewMore')}</span> <span>→</span>
        </button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.pkg-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-pkg'), 10);
      const pkg = filtered[idx];
      openKhroogaModal(pkg);
    });
  });

  const packageMoreBtn = document.getElementById('packageMoreBtn');
  if (packageMoreBtn) {
    packageMoreBtn.hidden = filtered.length <= visiblePackagesCount;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('englishBtn')?.addEventListener('click', () => applyLanguage('en'));
  document.getElementById('arabicBtn')?.addEventListener('click', () => applyLanguage('ar'));
  document.getElementById('frankoBtn')?.addEventListener('click', () => applyLanguage('fr'));

  document.querySelectorAll('.result-controls .filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.result-controls .filter-chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      renderOutings();
    });
  });

  document.querySelectorAll('.package-filter-row .filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.package-filter-row .filter-chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentPackageVibe = btn.getAttribute('data-pcat');
      renderPackages();
    });
  });

document.getElementById('budgetForm')?.addEventListener('submit', e => {
  e.preventDefault();
  userPeopleCount = parseInt(document.getElementById('people').value, 10) || 1;
  
  // Read directly from the total budget input field (update 'totalBudget' if your HTML uses a different ID)
  const exactTotal = parseInt(document.getElementById('totalBudget')?.value || document.getElementById('perPerson').value, 10) || 1000;
  
  // Calculate the average budget per person by dividing total budget by the number of people
  userTargetBudget = Math.round(exactTotal / userPeopleCount);

  visibleOutingsCount = 15;
  visiblePackagesCount = 15;

  document.getElementById('resultsTitle').innerHTML = t('resultsTitleSub').replace('{budget}', money(userTargetBudget));
  document.getElementById('resultsSub').innerHTML = t('resultsSubDynamic').replace('{people}', userPeopleCount).replace('{total}', money(exactTotal));

  renderOutings();
  renderPackages();

  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
  
  document.getElementById('moreBtn')?.addEventListener('click', () => {
    visibleOutingsCount += 15;
    renderOutings();
  });

  document.getElementById('packageMoreBtn')?.addEventListener('click', () => {
    visiblePackagesCount += 15;
    renderPackages();
  });

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeKhroogaModal);
  document.getElementById('khroogaModal')?.addEventListener('click', e => {
    if (e.target.id === 'khroogaModal') closeKhroogaModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeKhroogaModal();
  });

  document.getElementById('modalLocBtn')?.addEventListener('click', () => {
    const status = document.getElementById('locationStatus');
    const nearGrid = document.getElementById('modalNearPlacesGrid');

    if (!activeKhroogaItem) return;

    status.textContent = t('locating');
    nearGrid.style.display = 'none';

    if (!navigator.geolocation) {
      status.textContent = t('locationError');
      renderNearPlaces(30.0444, 31.2357);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        status.textContent = '';
        renderNearPlaces(pos.coords.latitude, pos.coords.longitude);
      },
      err => {
        status.textContent = t('locationError');
        renderNearPlaces(30.0444, 31.2357);
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  });

  renderOutings();
  renderPackages();
});
