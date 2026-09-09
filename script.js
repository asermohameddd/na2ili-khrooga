const outings = [
  ['Al Azhar Park walk', 'culture', '🌿', 20, 25, 'Calm garden + skyline'],
  ['Al Andalus Park stroll', 'chill', '🌴', 10, 15, 'Cheap riverside Zamalek reset'],
  ['Al Jazira Park hangout', 'chill', '🌳', 10, 15, 'Casual green-space break'],
  ['Maadi Island visit', 'chill', '🌊', 25, 35, 'River island atmosphere'],
  ['Aquarium Grotto Garden', 'culture', '🐠', 20, 30, 'Classic Zamalek mini-adventure'],
  ['Cairo Tower area visit', 'culture', '🗼', 20, 40, 'Skyline stop + photos'],
  ['Egyptian Museum visit', 'culture', '🏺', 450, 500, 'Tahrir museum day'],
  ['Coptic Museum visit', 'culture', '⛪', 100, 120, 'Old Cairo history'],
  ['Museum of Islamic Art', 'culture', '🕌', 100, 120, 'Architecture + art'],
  ['National Museum of Egyptian Civilization', 'culture', '🏛️', 300, 350, 'Civilization galleries'],
  ['Khan El Khalili walk', 'culture', '🧿', 0, 100, 'Souq wandering; spend optional'],
  ['Al Moez Street evening', 'culture', '✨', 0, 80, 'Historic street + snacks'],
  ['Muizz photo walk', 'chill', '📸', 0, 80, 'Golden-hour city textures'],
  ['Zamalek photo walk', 'chill', '📷', 0, 80, 'Cafes + Nile streets'],
  ['Downtown Cairo photo walk', 'culture', '🏙️', 0, 60, 'Architecture hunt'],
  ['Garden City walk', 'chill', '🌇', 0, 60, 'Quiet old Cairo streets'],
  ['Old Cairo walking loop', 'culture', '🧭', 20, 80, 'Churches + alleys'],
  ['Manial Palace visit', 'culture', '👑', 80, 120, 'Royal-palace interiors'],
  ['Kasr El Nil sunset walk', 'chill', '🌅', 0, 60, 'Nile at sunset'],
  ['Qasr El Nil bridge photos', 'chill', '🌉', 0, 50, 'Fast scenic stop'],
  ['Renaissance Downtown cinema', 'chill', '🎬', 90, 120, 'Standard movie ticket'],
  ['Renaissance Al Rehab cinema', 'chill', '🍿', 90, 145, 'Morning/evening standard'],
  ['Cinema City Stars', 'chill', '🎞️', 120, 180, 'Mall cinema outing'],
  ['VOX cinema outing', 'chill', '🎥', 150, 220, 'Premium mall cinema plan'],
  ['IMAX cinema outing', 'chill', '🪐', 180, 260, 'Big-screen movie'],
  ['Drive-in movie concept', 'chill', '🚗', 180, 280, 'Car + outdoor movie style'],
  ['Movie + popcorn combo', 'chill', '🍿', 220, 320, 'Ticket + snack buffer'],
  ['Late-night cinema', 'chill', '🌙', 150, 250, 'Night show + drink'],
  ['Movie marathon (2 films)', 'chill', '🎬', 300, 500, 'Two-ticket plan'],
  ['Cinema date plan', 'date', '💗', 500, 900, '2 tickets + snack + coffee'],
  ['Egyptian breakfast ful + taameya', 'food', '🥙', 50, 90, 'Local breakfast'],
  ['Koshary bowl outing', 'food', '🍲', 50, 100, 'Classic Egyptian comfort'],
  ['Shawerma meal', 'food', '🌯', 100, 170, 'Quick casual meal'],
  ['Kofta sandwich meal', 'food', '🥙', 100, 180, 'Street-food style'],
  ['Hawawshi meal', 'food', '🥩', 120, 190, 'Oven-baked Egyptian classic'],
  ['Feteer session', 'food', '🥞', 120, 220, 'Sweet/savory sharing'],
  ['Molokhia lunch', 'food', '🍚', 150, 240, 'Egyptian lunch plate'],
  ['Grilled chicken meal', 'food', '🍗', 160, 260, 'Casual sit-down'],
  ['Grilled mixed meat', 'food', '🥩', 220, 380, 'Heavier restaurant meal'],
  ['Egyptian seafood meal', 'food', '🦐', 250, 450, 'Seafood main + sides'],
  ['Pizza sharing meal', 'food', '🍕', 180, 320, 'Pizza + soft drink'],
  ['Burger meal', 'food', '🍔', 180, 320, 'Burger + fries + drink'],
  ['Chicken fast-food combo', 'food', '🍗', 180, 320, 'Chain-style combo'],
  ['Big burger combo', 'food', '🍔', 250, 420, 'Larger burger meal'],
  ['Family fast-food box', 'food', '🍗', 350, 650, 'Shareable group meal'],
  ['Korean street-food meal', 'food', '🍜', 200, 350, 'Fun casual theme'],
  ['Sushi meal', 'food', '🍣', 300, 550, 'Casual sushi order'],
  ['Pasta restaurant meal', 'food', '🍝', 220, 380, 'Mid-range pasta'],
  ['Steak meal', 'food', '🥩', 450, 750, 'Premium main'],
  ['Breakfast cafe platter', 'food', '🍳', 180, 320, 'Cafe brunch'],
  ['Sugarcane juice stop', 'food', '🧃', 15, 30, 'Fresh asab'],
  ['Mango juice stop', 'food', '🥭', 25, 45, 'Fresh seasonal mango'],
  ['Guava juice stop', 'food', '🍐', 20, 40, 'Fresh juice'],
  ['Orange juice stop', 'food', '🍊', 20, 40, 'Fresh juice'],
  ['Strawberry juice stop', 'food', '🍓', 30, 50, 'Fresh juice'],
  ['Tea at ahwa', 'chill', '☕', 10, 25, 'Classic tea + sit'],
  ['Turkish coffee', 'chill', '☕', 15, 35, 'Small coffee stop'],
  ['Iced latte', 'chill', '🧊', 35, 70, 'Cafe cooling break'],
  ['Spanish latte', 'chill', '🥛', 40, 80, 'Sweet coffee'],
  ['Frappuccino-style drink', 'chill', '🥤', 45, 90, 'Cold blended drink'],
  ['Fresh lemonade', 'chill', '🍋', 35, 70, 'Casual cafe drink'],
  ['Mocktail cafe stop', 'chill', '🍹', 70, 140, 'Non-alcoholic drink'],
  ['Dessert + coffee', 'food', '🍰', 100, 180, 'Sweet break'],
  ['Waffle + drink', 'food', '🧇', 120, 220, 'Dessert cafe'],
  ['Crepe + drink', 'food', '🥞', 100, 200, 'Casual dessert'],
  ['Ice cream outing', 'food', '🍦', 50, 120, '2 scoops + topping'],
  ['Bowling session', 'active', '🎳', 150, 220, 'One game + shoes buffer'],
  ['Pool hall session', 'active', '🎱', 100, 180, 'Casual table time'],
  ['Arcade session', 'active', '🕹️', 150, 300, 'Credits for games'],
  ['VR gaming session', 'active', '🥽', 180, 300, 'Short VR experience'],
  ['Escape room', 'active', '🔐', 250, 450, 'Shared puzzle room'],
  ['Go-kart session', 'active', '🏎️', 300, 500, 'Short racing session'],
  ['Trampoline park', 'active', '🤸', 250, 450, 'Timed jump session'],
  ['Paintball session', 'active', '🎯', 350, 550, 'Game + basic gear'],
  ['Laser tag', 'active', '🔫', 250, 450, 'Team battle session'],
  ['Indoor climbing', 'active', '🧗', 250, 450, 'Beginner session'],
  ['Roller skating', 'active', '🛼', 200, 350, 'Rink session'],
  ['Ice skating', 'active', '⛸️', 250, 450, 'Skate session'],
  ['Horse riding session', 'active', '🐎', 350, 650, 'Short riding experience'],
  ['Cycling Nile route', 'active', '🚲', 100, 220, 'Bike rental + drink'],
  ['Football turf booking', 'active', '⚽', 100, 180, 'Per-person group split'],
  ['Padel session', 'active', '🎾', 250, 450, 'Shared court cost'],
  ['Tennis court session', 'active', '🎾', 200, 350, 'Court + basic gear'],
  ['Badminton session', 'active', '🏸', 150, 250, 'Court split'],
  ['Billiards + drink', 'active', '🎱', 140, 250, 'Table + beverage'],
  ['Karaoke room', 'active', '🎤', 250, 450, 'Shared private room'],
  ['Nile felucca short ride', 'chill', '⛵', 100, 180, 'Short traditional sail'],
  ['Nile felucca sunset', 'chill', '🌅', 180, 300, 'Sunset sailing'],
  ['Motorboat Nile ride', 'active', '🚤', 250, 450, 'Shared motorboat time'],
  ['Nile dinner cruise', 'food', '🛳️', 700, 1100, 'Dinner cruise planning range'],
  ['Dinner + Nile view', 'food', '🌃', 500, 900, 'Dinner with river view'],
  ['Rooftop Cairo sunset', 'chill', '🌆', 150, 300, 'Drink + view'],
  ['Nile-side cafe', 'chill', '🌊', 120, 250, 'Drink + dessert'],
  ['Picnic in a Cairo park', 'chill', '🧺', 120, 250, 'Snacks + mat + drinks'],
  ['Sunset photo session', 'chill', '📸', 80, 180, 'Coffee + transport buffer'],
  ['Night Cairo drive', 'chill', '🚗', 120, 250, 'Fuel/ride buffer + stop'],
  ['Grand Egyptian Museum area day', 'culture', '🏺', 500, 650, 'Museum-centered plan'],
  ['Giza pyramids viewing', 'culture', '🔺', 200, 350, 'Local ticket/transport buffer'],
  ['Saqqara archaeological day', 'culture', '🏺', 250, 450, 'Site + local transport buffer'],
  ['Dahshur pyramids trip', 'culture', '🐫', 220, 400, 'Site + transport buffer'],
  ['Memphis museum trip', 'culture', '🗿', 180, 320, 'Short heritage trip'],
  ['Baron Empain Palace', 'culture', '🏰', 100, 150, 'Historic palace visit'],
  ['Abdeen Palace area', 'culture', '👑', 50, 120, 'Historic downtown stop'],
  ['Nilometer visit', 'culture', '📏', 50, 100, 'Rhoda Island landmark'],
  ['Pharaonic Village', 'culture', '⛵', 250, 400, 'Theme-history outing'],
  ['Cairo Opera House area', 'culture', '🎭', 100, 250, 'Show/area planning'],
  ['Mokattam sunset', 'chill', '🌇', 70, 150, 'View + drink'],
  ['Muizz + dessert', 'culture', '🍮', 100, 220, 'Historic walk + sweet'],
  ['Khan El Khalili + tea', 'culture', '🫖', 60, 150, 'Souq + ahwa'],
  ['Zamalek cafes crawl', 'food', '☕', 250, 500, '2–3 drinks/snacks'],
  ['Maadi cafes crawl', 'food', '☕', 220, 450, 'Relaxed cafe hop'],
  ['New Cairo cafe hop', 'food', '🥤', 300, 600, 'Modern cafe crawl'],
  ['City Stars shopping stroll', 'chill', '🛍️', 150, 300, 'Snack + drink + buffer'],
  ['Mall of Egypt hangout', 'chill', '🛍️', 170, 350, 'Food + coffee buffer'],
  ['Cairo Festival City hangout', 'chill', '✨', 180, 380, 'Food + drink buffer'],
  ['Mall of Arabia hangout', 'chill', '🛍️', 150, 320, 'Walk + food buffer'],
  ['Board-game cafe', 'active', '♟️', 150, 300, 'Games + drink'],
  ['Bookstore + coffee', 'chill', '📚', 120, 250, 'Book browsing + drink'],
  ['Art gallery hopping', 'culture', '🎨', 50, 180, '2–3 gallery entries/transit'],
  ['Pottery workshop', 'active', '🏺', 300, 550, 'Hands-on workshop'],
  ['Painting workshop', 'active', '🎨', 250, 500, 'Guided paint session'],
  ['Perfume workshop', 'active', '🧴', 350, 650, 'Blend-your-own session'],
  ['Cooking class', 'active', '🍳', 500, 900, 'Hands-on food class'],
  ['Photography workshop', 'active', '📷', 350, 700, 'Short guided session'],
  ['Dance class drop-in', 'active', '💃', 150, 300, 'Single class'],
  ['Stand-up comedy night', 'chill', '🎙️', 150, 300, 'Ticket + drink buffer'],
  ['Live music cafe', 'chill', '🎶', 150, 350, 'Show + drink'],
  ['Jazz night', 'chill', '🎷', 180, 400, 'Ticket + drink'],
  ['Theatre night', 'culture', '🎭', 200, 500, 'Ticket planning range'],
  ['Concert night', 'culture', '🎤', 300, 900, 'Event ticket planning'],
  ['Open-air cultural night', 'culture', '🏮', 100, 300, 'Entry + snack buffer'],
  ['Poetry night', 'culture', '📝', 80, 220, 'Entry + drink'],
  ['Cinema + rooftop', 'date', '🎬', 350, 650, 'Movie + rooftop drink'],
  ['Bowling + burger', 'active', '🎳', 350, 600, 'Game + casual meal'],
  ['Escape room + pizza', 'active', '🔐', 400, 700, 'Puzzle + shared meal'],
  ['Arcade + dessert', 'active', '🕹️', 250, 500, 'Games + sweet'],
  ['Park + street-food tour', 'budget', '🌳', 100, 220, 'Green space + local food'],
  ['Koshary + movie', 'budget', '🍲', 170, 280, 'Cheap food + cinema'],
  ['Ahwa + walk', 'budget', '☕', 40, 100, 'Very low budget hang'],
  ['Juice + Nile walk', 'budget', '🧃', 40, 120, 'Simple summer plan'],
  ['Cairo sunset on a budget', 'budget', '🌅', 60, 150, 'View + street drink'],
  ['Museum + koshary', 'budget', '🏺', 520, 650, 'Culture + cheap lunch'],
  ['Zamalek cheap date', 'date', '💗', 250, 450, 'Walk + dessert + coffee'],
  ['Maadi casual date', 'date', '💗', 350, 650, 'Cafe + dinner buffer'],
  ['Cinema + fast food', 'friends', '🎬', 300, 520, 'Ticket + combo'],
  ['Bowling + drinks', 'friends', '🎳', 300, 520, 'Game + cafe stop'],
  ['Luxury brunch', 'premium', '🥂', 700, 1200, 'Upscale brunch'],
  ['Luxury dinner', 'premium', '🍽️', 900, 1600, 'Premium dinner plan'],
  ['Premium cinema + dinner', 'premium', '🎞️', 900, 1600, 'Premium movie + dinner'],
  ['Private Nile boat', 'premium', '🛥️', 1200, 2500, 'Private/shared premium ride'],
  ['Nile cruise + dinner', 'premium', '🛳️', 1200, 2200, 'Higher-end river plan'],
  ['Rooftop dinner', 'premium', '🌃', 800, 1400, 'View-focused dinner'],
  ['Hotel afternoon tea', 'premium', '🫖', 700, 1200, 'Hotel lounge experience'],
  ['Fine dining tasting', 'premium', '✨', 1200, 2200, 'Multi-course style'],
  ['Spa + cafe day', 'premium', '🧖', 900, 1600, 'Relaxation + food'],
  ['Premium date day', 'premium', '💎', 1600, 3000, 'Multiple upscale stops'],
  ['Family park + lunch', 'family', '👨‍👩‍👧‍👦', 220, 420, 'Park + family meal'],
  ['Dream Park-style amusement day', 'family', '🎢', 250, 450, 'Rides + food buffer'],
  ['Kids indoor play + meal', 'family', '🧸', 250, 500, 'Play zone + lunch'],
  ['Aquarium + park day', 'family', '🐟', 100, 250, 'Simple family combo'],
  ['Museum + family lunch', 'family', '🏺', 450, 700, 'Museum + easy lunch'],
  ['Mall kids zone + food', 'family', '🛍️', 350, 650, 'Indoor family plan'],
  ['Bowling family outing', 'family', '🎳', 250, 450, 'Shared bowling + snacks'],
  ['Movie family outing', 'family', '🍿', 250, 500, 'Cinema + snack'],
  ['Picnic family day', 'family', '🧺', 150, 350, 'Park + packed food'],
  ['Zoo-style family day', 'family', '🦁', 150, 350, 'Local family outing buffer'],
  ['Felucca + street food', 'friends', '⛵', 180, 300, 'Sail then snack'],
  ['Sunset rooftop mocktail', 'chill', '🌇', 120, 240, 'View + cold drink'],
  ['Khan El Khalili photo challenge', 'culture', '🧿', 60, 160, 'Souq photo game'],
  ['Nile Corniche snack walk', 'budget', '🌊', 50, 140, 'Walk + local bites'],
  ['French toast cafe stop', 'food', '🍞', 100, 190, 'Dessert breakfast'],
  ['Donut + coffee stop', 'food', '🍩', 90, 170, 'Quick sweet break'],
  ['Shisha-free cafe hangout', 'chill', '☕', 100, 220, 'Coffee + dessert'],
  ['Mini golf session', 'active', '⛳', 220, 400, 'Casual putting game'],
  ['Darts bar-style game', 'active', '🎯', 150, 300, 'Darts + soft drink'],
  ['Table tennis session', 'active', '🏓', 120, 240, 'Hourly play split'],
  ['Football + pizza night', 'friends', '⚽', 250, 450, 'Turf + shared pizza'],
  ['Basketball court session', 'active', '🏀', 120, 250, 'Court split'],
  ['Roller bike park loop', 'active', '🚴', 100, 220, 'Outdoor ride'],
  ['Sunrise Nile walk', 'chill', '🌤️', 20, 80, 'Quiet early outing'],
  ['Breakfast by the Nile', 'food', '🥐', 180, 320, 'Breakfast + view'],
  ['Cairo skyline cafe', 'chill', '🏙️', 180, 350, 'View + drink'],
  ['Giza sunset + dinner', 'date', '🔺', 350, 650, 'Pyramids view + dinner'],
  ['Pyramids photo + juice', 'budget', '📸', 120, 240, 'Photos + fresh juice'],
  ['Heritage house visit', 'culture', '🏠', 80, 180, 'Historic architecture'],
  ['Local dessert tasting', 'food', '🍮', 120, 260, 'Try several Egyptian sweets'],
  ['El Sawy Culturewheel event', 'culture', '🎭', 100, 220, 'Cultural show or event entry estimate'],
  ['Al Horreya Garden sit-down', 'chill', '🌳', 10, 30, 'Simple garden break'],
  ['Japanese Garden photo stop', 'culture', '🌸', 10, 20, 'Quiet garden + photos'],
  ['Manial garden picnic', 'chill', '🧺', 60, 140, 'Snacks + drinks + entry'],
  ['Family Aquarium afternoon', 'family', '🐟', 20, 40, 'Garden + aquarium stroll'],
  ['Downtown breakfast walk', 'food', '🥙', 70, 130, 'Breakfast + architecture walk'],
  ['Feteer + tea outing', 'food', '🥞', 140, 260, 'Shared feteer + drinks'],
  ['Falafel tasting walk', 'food', '🥙', 60, 120, 'Try 2–3 local stops'],
  ['Egyptian dessert tasting', 'food', '🍮', 100, 220, 'Basbousa + konafa + drink'],
  ['Fresh fruit cup stop', 'food', '🍉', 30, 60, 'Seasonal fruit snack'],
  ['Nile bridge night photography', 'chill', '🌉', 20, 60, 'Photo walk + transport buffer'],
  ['Cairo street-food sampler', 'food', '🌯', 180, 300, 'Several casual bites'],
  ['Tea + board games', 'chill', '♟️', 120, 220, 'Cafe games + drinks'],
  ['Mini golf outing', 'active', '⛳', 200, 350, 'Casual game session'],
  ['Badminton doubles split', 'active', '🏸', 120, 200, 'Court split for doubles'],
  ['Kids craft workshop', 'family', '🧩', 180, 320, 'Hands-on craft session'],
  ['Family brunch + park', 'family', '🥞', 250, 450, 'Brunch + green space'],
  ['Nile sunset sketch session', 'culture', '✏️', 80, 160, 'Sketching + drink'],
  ['Local photography challenge', 'active', '📷', 60, 150, 'Self-guided photo prompts'],
  ['Coffee & book hour', 'chill', '📚', 60, 120, 'Quiet cafe reading'],
  ['Koshary + juice combo', 'food', '🍲', 75, 130, 'Classic Egyptian meal'],
  ['Burger + arcade mini-night', 'friends', '🍔', 300, 500, 'Meal + short arcade session'],
  ['Dessert date + photo walk', 'date', '💗', 220, 380, 'Sweet stop + photos'],
  ['Morning museum + breakfast', 'culture', '🏺', 380, 500, 'Early museum + breakfast']
].map((x, i) => ({
  id: i + 1,
  name: x[0],
  cat: x[1],
  emoji: x[2],
  min: x[3],
  max: x[4],
  desc: x[5]
}));

document.getElementById('outingCount').textContent = `${outings.length}+`;

const packageSeeds = [
  ['Sunset Cinema + Nile Walk', 'date', [['4:00', 'Downtown cinema ticket', 120], ['6:30', 'Dessert + coffee', 140], ['8:15', 'Kasr El Nil sunset walk', 40]], 'date'],
  ['Old Cairo Heritage Trail', 'culture', [['2:00', 'Old Cairo walking loop', 60], ['4:00', 'Coptic Museum visit', 110], ['6:30', 'Koshary dinner', 90], ['8:00', 'Tea at ahwa', 20]], 'culture'],
  ['Bowling League Night', 'friends', [['4:00', 'Bowling session', 190], ['6:30', 'Burger meal', 260], ['8:30', 'Arcade credits', 180], ['10:00', 'Juice stop', 40]], 'friends'],
  ['Zamalek Art + Sunset Dinner', 'friends', [['2:30', 'Art gallery hopping', 100], ['4:30', 'Cafe drink', 80], ['6:00', 'Nile sunset stop', 50], ['8:00', 'Dinner with Nile view', 300]], 'friends'],
  ['Civilization Museum Deep Dive', 'culture', [['10:00', 'National Museum of Egyptian Civilization', 320], ['1:30', 'Egyptian lunch', 180], ['3:30', 'Old Cairo walk', 70], ['6:00', 'Tea break', 20]], 'culture'],
  ['Budget Summer Escape', 'budget', [['4:00', 'Public garden entry', 15], ['5:30', 'Sugarcane juice', 25], ['7:00', 'Koshary bowl', 80], ['8:30', 'Nile walk', 20]], 'budget'],
  ['Private Nile Celebration', 'premium', [['5:00', 'Rooftop sunset drink', 220], ['7:00', 'Private Nile boat share', 700], ['9:30', 'Premium dinner', 900]], 'premium'],
  ['Family Park + Pizza Day', 'family', [['1:00', 'Family park visit', 20], ['3:00', 'Kids play zone', 250], ['5:30', 'Pizza sharing', 260], ['7:30', 'Ice cream', 80]], 'family'],
  ['Cafe Hopping Scorecard', 'friends', [['2:00', 'Iced latte', 60], ['4:00', 'Dessert stop', 130], ['6:00', 'Mocktail', 100], ['8:00', 'Casual dinner', 250]], 'friends'],
  ['Gallery Date After Dark', 'date', [['3:00', 'Gallery hopping', 110], ['5:00', 'Specialty coffee', 70], ['7:00', 'Date dinner', 450], ['9:00', 'Nile walk', 20]], 'date'],
  ['Pyramids Golden Hour Run', 'friends', [['3:00', 'Giza pyramids viewing', 250], ['5:00', 'Sunset photo stop', 80], ['6:30', 'Koshary dinner', 90], ['8:00', 'Tea stop', 20]], 'friends'],
  ['Maadi Chill & Brunch', 'chill', [['12:00', 'Cafe brunch platter', 250], ['2:30', 'Maadi Island entry', 25], ['4:00', 'Nile-side cafe', 120], ['6:00', 'Fresh lemonade', 60]], 'friends'],
  ['Mokattam Sunset Picnic', 'budget', [['4:00', 'Mokattam viewpoint', 30], ['5:00', 'Park picnic snacks', 120], ['6:30', 'Mango juice', 35], ['8:00', 'Local dinner', 120]], 'budget'],
  ['Khan El Khalili Night Market', 'culture', [['4:00', 'Khan El Khalili walk', 20], ['5:30', 'Tea at ahwa', 20], ['7:00', 'Street-food tasting', 120], ['9:00', 'Dessert', 80]], 'culture'],
  ['Manial Palace + Garden Afternoon', 'culture', [['1:00', 'Manial Palace', 100], ['3:30', 'Manial garden walk', 10], ['5:00', 'Coffee + dessert', 140], ['7:00', 'Casual dinner', 250]], 'culture'],
  ['Museum + Rooftop Philosophy Talk', 'culture', [['2:00', 'Museum of Islamic Art', 110], ['4:30', 'Downtown coffee', 70], ['6:30', 'Rooftop sunset', 220], ['9:00', 'Light dinner', 250]], 'culture'],
  ['Retro Arcade Birthday Mission', 'friends', [['3:00', 'Arcade session', 250], ['5:00', 'Pizza sharing', 260], ['7:00', 'Dessert', 120], ['8:30', 'Photo booth buffer', 60]], 'friends'],
  ['Escape Room + Pizza Decode', 'friends', [['4:00', 'Escape room', 350], ['6:00', 'Pizza meal', 220], ['8:00', 'Gelato stop', 80]], 'friends'],
  ['Pottery + Cafe Creator Day', 'friends', [['2:00', 'Pottery workshop', 450], ['4:30', 'Iced coffee', 60], ['6:00', 'Dessert', 120], ['8:00', 'Dinner', 250]], 'friends'],
  ['Perfume Blending Date', 'date', [['2:30', 'Perfume workshop', 550], ['5:00', 'Cafe drink', 70], ['6:30', 'Nile sunset', 50], ['8:00', 'Dinner', 400]], 'date'],
  ['Cooking Class + Market Walk', 'friends', [['1:00', 'Cooking class', 700], ['4:30', 'Khan market walk', 30], ['6:00', 'Fresh juice', 35]], 'friends'],
  ['Horse Ride + Farm Lunch', 'friends', [['2:00', 'Horse riding', 500], ['4:30', 'Fresh juice', 40], ['6:00', 'Country-style lunch', 250]], 'friends'],
  ['Ice Skating + Hot Chocolate', 'friends', [['3:00', 'Ice skating', 350], ['5:00', 'Hot chocolate/cafe', 90], ['7:00', 'Burger meal', 220]], 'friends'],
  ['Go-Kart Grand Prix Evening', 'friends', [['4:00', 'Go-kart session', 450], ['6:00', 'Burger meal', 220], ['8:00', 'Arcade', 180]], 'friends'],
  ['Padel + Smoothie Challenge', 'friends', [['3:00', 'Padel session', 350], ['5:00', 'Fresh juice', 45], ['6:30', 'Healthy meal', 220]], 'friends'],
  ['Football Turf + Koshary', 'friends', [['6:00', 'Football turf share', 150], ['8:00', 'Koshary dinner', 90], ['9:30', 'Sugarcane juice', 25]], 'friends'],
  ['Comedy Night + Late Bite', 'friends', [['7:00', 'Stand-up comedy ticket', 200], ['9:00', 'Burger meal', 220], ['10:30', 'Tea stop', 20]], 'friends'],
  ['Live Music Cafe Crawl', 'friends', [['5:00', 'Cafe drink', 80], ['7:00', 'Live music cafe', 250], ['9:30', 'Dessert', 120]], 'friends'],
  ['Jazz + Rooftop Cairo', 'date', [['6:00', 'Jazz night', 300], ['8:30', 'Rooftop drink', 220], ['10:00', 'Light dinner', 300]], 'date'],
  ['Theatre Night + Downtown Dessert', 'date', [['5:00', 'Theatre ticket', 350], ['8:00', 'Dessert cafe', 140], ['9:30', 'Kasr El Nil walk', 40]], 'date'],
  ['Concert + Night Drive', 'friends', [['6:00', 'Concert ticket', 600], ['9:00', 'Night Cairo drive', 120], ['10:30', 'Late snack', 100]], 'friends'],
  ['Bookstore + Coffee + Quiet Dinner', 'chill', [['2:00', 'Bookstore browse', 0], ['4:00', 'Iced latte', 60], ['6:00', 'Nile-side cafe', 120], ['8:00', 'Casual dinner', 250]], 'friends'],
  ['Photo Walk: Downtown Details', 'chill', [['4:00', 'Downtown photo walk', 20], ['5:30', 'Coffee', 60], ['7:00', 'Street-food tasting', 120], ['8:30', 'Night architecture loop', 20]], 'budget'],
  ['Photo Walk: Zamalek in Blue Hour', 'chill', [['4:30', 'Zamalek photo walk', 20], ['6:00', 'Fresh lemonade', 60], ['7:30', 'Dessert', 120], ['9:00', 'Dinner', 250]], 'friends'],
  ['Al Azhar Park Sunset Feast', 'family', [['3:30', 'Al Azhar Park', 25], ['5:30', 'Photo walk', 40], ['7:00', 'Family dinner', 300], ['8:30', 'Dessert', 100]], 'family'],
  ['Aquarium Grotto + Zamalek Dinner', 'family', [['3:00', 'Aquarium Grotto Garden', 20], ['5:00', 'Nile walk', 30], ['7:00', 'Family dinner', 300], ['8:30', 'Ice cream', 80]], 'family'],
  ['Japanese Garden + Helwan Lunch', 'family', [['11:00', 'Japanese Garden', 10], ['1:00', 'Egyptian lunch', 180], ['3:00', 'Tea', 20], ['5:00', 'Dessert', 80]], 'family'],
  ['International Park Family Day', 'family', [['12:00', 'International Park', 10], ['2:00', 'Kids activity buffer', 200], ['4:00', 'Pizza sharing', 260], ['6:00', 'Juice', 40]], 'family'],
  ['Family Cinema + Ice Cream', 'family', [['2:00', 'Cinema ticket', 145], ['4:45', 'Ice cream', 80], ['6:00', 'Chicken combo', 220], ['8:00', 'Park walk', 20]], 'family'],
  ['Kids Arcade + Family Dinner', 'family', [['3:00', 'Arcade session', 180], ['5:00', 'Kids play zone', 220], ['7:00', 'Family fast-food box share', 180], ['8:30', 'Dessert', 80]], 'family'],
  ['Old Cairo Kids Story Day', 'family', [['1:30', 'Pharaonic Village', 300], ['4:30', 'Koshary dinner', 90], ['6:00', 'Sugarcane juice', 25], ['7:00', 'Old Cairo walk', 20]], 'family'],
  ['Science-Minded City Day', 'family', [['11:00', 'Museum visit', 300], ['2:00', 'Lunch', 180], ['4:00', 'Cafe drink', 60], ['5:30', 'Sunset walk', 30]], 'family'],
  ['Nile Felucca Sunset + Koshary', 'budget', [['5:00', 'Nile felucca sunset', 200], ['7:00', 'Koshary', 90], ['8:30', 'Tea', 20]], 'budget'],
  ['Felucca + Dessert Date', 'date', [['5:00', 'Short felucca ride', 150], ['6:30', 'Dessert + coffee', 180], ['8:30', 'Dinner', 350]], 'date'],
  ['Nile Dinner Cruise Night', 'premium', [['6:00', 'Nile dinner cruise', 900], ['9:30', 'Night walk', 30]], 'premium'],
  ['Rooftop Dinner Date', 'date', [['6:00', 'Rooftop sunset', 220], ['8:00', 'Premium dinner', 650], ['10:00', 'Coffee', 70]], 'date'],
  ['Sunset Luxury Boat + Dinner', 'premium', [['5:30', 'Private Nile boat', 900], ['7:30', 'Premium dinner', 750], ['10:00', 'Dessert', 150]], 'premium'],
  ['Luxury Brunch + Gallery', 'premium', [['11:00', 'Luxury brunch', 900], ['2:00', 'Gallery visit', 80], ['4:00', 'Specialty coffee', 120]], 'premium'],
  ['Premium Cinema + Sushi', 'premium', [['5:00', 'Premium cinema ticket', 220], ['7:30', 'Sushi dinner', 550], ['9:30', 'Dessert', 150]], 'premium'],
  ['Luxury Birthday City Loop', 'premium', [['3:00', 'Premium cinema', 220], ['6:00', 'Premium dinner', 800], ['8:30', 'Private boat share', 900], ['10:30', 'Dessert', 150]], 'premium'],
  ['Budget Date: Ahwa + Walk', 'date', [['5:00', 'Tea at ahwa', 20], ['6:00', 'Nile walk', 20], ['7:30', 'Crepe + drink', 150]], 'budget'],
  ['Budget Friends: Juice + Games', 'friends', [['4:00', 'Juice stop', 35], ['5:00', 'Pool hall', 130], ['7:30', 'Koshary', 90], ['9:00', 'Tea', 20]], 'budget'],
  ['50-ish EGP Challenge', 'budget', [['5:00', 'Public garden', 10], ['6:00', 'Tea', 15], ['7:00', 'Koshary', 50]], 'budget'],
  ['Under-100 EGP Cairo Reset', 'budget', [['4:30', 'Park entry', 10], ['5:30', 'Sugarcane juice', 25], ['7:00', 'Street snack', 40], ['8:00', 'Nile walk', 20]], 'budget'],
  ['Rainy Day Mall Rescue', 'friends', [['2:00', 'Mall hangout', 0], ['3:30', 'Cinema ticket', 145], ['6:00', 'Coffee', 70], ['7:30', 'Burger meal', 220]], 'friends'],
  ['Mall + Bowling Power Combo', 'friends', [['3:00', 'Mall walk', 0], ['4:30', 'Bowling', 190], ['6:30', 'Fast-food combo', 220], ['8:30', 'Arcade', 150]], 'friends'],
  ['City Stars Movie + Dessert', 'date', [['5:00', 'Cinema ticket', 180], ['7:30', 'Dessert', 140], ['9:00', 'Dinner', 300]], 'date'],
  ['Festival City Casual Friday', 'friends', [['4:00', 'Mall walk', 0], ['5:00', 'Cafe drink', 70], ['7:00', 'Dinner', 300], ['9:00', 'Ice cream', 80]], 'friends'],
  ['Mall of Arabia Friends Loop', 'friends', [['4:00', 'Mall hangout', 0], ['5:30', 'Arcade', 180], ['7:30', 'Burger meal', 220], ['9:00', 'Coffee', 60]], 'friends'],
  ['New Cairo Cafe Passport', 'friends', [['2:00', 'Cafe #1', 70], ['4:00', 'Cafe #2', 80], ['6:00', 'Dessert', 120], ['8:00', 'Dinner', 280]], 'friends'],
  ['Maadi Coffee Passport', 'chill', [['2:00', 'Cafe #1', 70], ['4:00', 'Cafe #2', 90], ['6:30', 'Nile-side cafe', 120], ['8:30', 'Light dinner', 220]], 'friends'],
  ['Zamalek Sunset + Sushi', 'date', [['5:00', 'Nile sunset', 50], ['6:30', 'Coffee', 70], ['8:00', 'Sushi dinner', 500]], 'date'],
  ['Art Workshop + Dinner Date', 'date', [['3:00', 'Painting workshop', 450], ['5:30', 'Coffee', 70], ['7:30', 'Dinner', 450]], 'date'],
  ['Dance Class + Dessert Night', 'friends', [['6:00', 'Dance class', 200], ['8:00', 'Dessert', 120], ['9:30', 'Late dinner', 220]], 'friends'],
  ['Karaoke Squad Night', 'friends', [['6:00', 'Karaoke room', 350], ['8:30', 'Pizza sharing', 260], ['10:00', 'Juice', 40]], 'friends'],
  ['Board Games + Burger Brainstorm', 'friends', [['4:00', 'Board-game cafe', 200], ['6:30', 'Burger meal', 220], ['8:30', 'Dessert', 100]], 'friends'],
  ['Billiards + Shawerma Run', 'friends', [['5:00', 'Billiards + drink', 160], ['7:00', 'Shawerma meal', 140], ['8:30', 'Juice', 30]], 'friends'],
  ['Climbing + Healthy Bowl', 'active', [['3:00', 'Indoor climbing', 350], ['5:30', 'Fresh juice', 45], ['7:00', 'Healthy dinner', 250]], 'friends'],
  ['Trampoline + Pizza Kids Night', 'family', [['4:00', 'Trampoline park', 350], ['6:30', 'Pizza sharing', 260], ['8:00', 'Ice cream', 80]], 'family'],
  ['Laser Tag + Burger Battle', 'friends', [['4:00', 'Laser tag', 350], ['6:00', 'Burger meal', 220], ['8:00', 'Arcade', 120]], 'friends'],
  ['Roller Skating + Cafe', 'friends', [['4:00', 'Roller skating', 250], ['6:00', 'Iced latte', 60], ['7:30', 'Dinner', 220]], 'friends'],
  ['Badminton + Egyptian Dinner', 'friends', [['5:00', 'Badminton', 180], ['7:00', 'Egyptian dinner', 220], ['8:30', 'Tea', 20]], 'friends'],
  ['Tennis + Juice + Dinner', 'friends', [['4:00', 'Tennis court', 250], ['6:00', 'Fresh juice', 40], ['7:30', 'Dinner', 250]], 'friends'],
  ['Photography Walk + Cafe', 'chill', [['4:00', 'Guided photography session', 500], ['6:30', 'Coffee', 70], ['8:00', 'Light dinner', 220]], 'friends'],
  ['Poetry Night + Tea House', 'culture', [['7:00', 'Poetry night', 150], ['8:30', 'Tea at ahwa', 20], ['9:30', 'Dessert', 100]], 'culture'],
  ['Open-Air Culture Night', 'culture', [['6:00', 'Cultural event entry', 150], ['8:00', 'Street-food tasting', 120], ['9:30', 'Tea', 20]], 'culture'],
  ['Baron Palace + Heliopolis Cafe', 'culture', [['3:00', 'Baron Empain Palace', 125], ['5:00', 'Cafe drink', 70], ['7:00', 'Casual dinner', 250]], 'culture'],
  ['Nilometer + Manial Dinner', 'culture', [['3:00', 'Nilometer visit', 50], ['4:30', 'Manial area walk', 20], ['6:30', 'Dinner', 280], ['8:30', 'Dessert', 100]], 'culture'],
  ['Saqqara History + Local Lunch', 'culture', [['10:00', 'Saqqara archaeological day', 350], ['1:30', 'Local lunch', 180], ['3:30', 'Tea', 20]], 'culture'],
  ['Dahshur Explorer Day', 'culture', [['11:00', 'Dahshur pyramids trip', 300], ['2:00', 'Lunch', 180], ['4:00', 'Juice', 35], ['5:00', 'Sunset photos', 50]], 'culture'],
  ['Memphis + Koshary Heritage Run', 'culture', [['12:00', 'Memphis museum trip', 220], ['2:30', 'Koshary', 90], ['4:00', 'Tea', 20], ['5:00', 'Photo stop', 40]], 'culture'],
  ['Opera Evening + Dessert', 'culture', [['6:00', 'Cairo Opera area/show', 300], ['9:00', 'Dessert cafe', 140]], 'culture']
];

const state = {
  people: 2,
  perPerson: 500,
  totalBudget: 1000,
  shown: 10,
  packageShown: 10,
  cat: 'all',
  pcat: 'all'
};

const translations = {
  en: {
    navDiscover: 'Discover',
    navPackages: 'Packages',
    navHow: 'How it works',
    heroEyebrow: 'CAIRO • YOUR BUDGET • YOUR MOOD',
    heroCopy: 'Tell us how many people are going, your average budget per person, and the exact total group budget. We will rank outings and full-day plans around your real target.',
    peopleLabel: 'How many people?',
    avgLabel: 'Average budget per person',
    totalLabel: 'Exact total group budget',
    findBtn: 'Find my outing →',
    trustOutings: '200+ outing ideas',
    trustPackages: '80+ day packages',
    trustRanges: 'Narrow EGP planning ranges',
    statOutings: 'outing types',
    statPackages: 'ready packages',
    statSuggestions: 'suggestions shown',
    statBudget: 'EGP budget range',
    resultsEyebrow: 'YOUR RESULTS',
    resultsEmpty: 'Enter your budget and your closest matches will appear here.',
    filterAll: 'All',
    filterActive: 'Active',
    filterChill: 'Chill',
    filterFood: 'Food',
    filterCulture: 'Culture',
    showMore: 'Show 15 more',
    packagesEyebrow: 'DAY PACKAGES',
    packagesTitle: 'Not just one place.<br><em>A whole day.</em>',
    packagesCopy: 'Choose a vibe and get a complete plan with times, activities, food, drinks, and a realistic total.',
    curatedPlans: 'CURATED PLANS',
    allVibes: 'All vibes',
    vibeDate: 'Date',
    vibeFriends: 'Friends',
    vibeFamily: 'Family',
    vibeBudget: 'Budget',
    vibePremium: 'Premium',
    howEyebrow: 'HOW IT WORKS',
    howTitle: 'Budget in.<br><span>Outing out.</span>',
    howCopy: 'No booking database. This is a planning tool that helps you make better decisions with the money you already have.',
    step1Title: 'Set your group',
    step1Copy: 'Enter the number of people, the average budget per person, and the exact total group budget.',
    step2Title: 'Get genuinely close matches',
    step2Copy: 'Results are ranked mainly by total group cost, then by per-person budget, so a 500 EGP target does not start with 20 EGP ideas.',
    step3Title: 'Build the whole day',
    step3Copy: 'Day packages use the same two budget targets and put the closest full-day plans first.',
    priceNoteTitle: 'Price accuracy comes first',
    priceNoteCopy: 'Prices are narrow planning ranges based on public Cairo and Greater Cairo references, but they are not live checkout prices. Branch, date, ticket type, promotions, season, and menu changes can affect the final amount.',
    footerLine: 'Made for everyone who keeps asking: “Where should we go?”',
    perPersonMin: 'Minimum budget is 10 EGP.',
    budgetMismatch: 'Your exact total differs from average × people by {diff} EGP. Search ranking uses both values.',
    budgetSaved: 'Your average and exact total are aligned.',
    group: 'group',
    perPerson: 'per person',
    estimated: 'estimated per person',
    match: 'closest match',
    planningTotal: 'GROUP ESTIMATE',
    people: 'people',
    showing: 'Showing {n} of the closest matches to your budget.',
    noClose: 'There are no close matches in this category. Try another category or a different budget.',
    packagesAround: 'Packages ranked around your budget',
    packageMatch: 'closest to target',
    packageTotal: 'TOTAL / PERSON',
    tagNew: 'NEW',
    tagPopular: 'POPULAR',
    tagSmart: 'SMART PICK',
    tagCurated: 'CURATED'
  },
  ar: {
    navDiscover: 'اكتشف',
    navPackages: 'الباقات',
    navHow: 'إزاي تشتغل',
    heroEyebrow: 'القاهرة • ميزانيتك • مودك',
    heroCopy: 'قولنا عدد الناس، ومتوسط ميزانية الفرد، وإجمالي ميزانية المجموعة بالظبط. هنرتبلك الخروجات والباقات حسب ميزانيتك الحقيقية.',
    peopleLabel: 'كام شخص؟',
    avgLabel: 'متوسط الميزانية للفرد',
    totalLabel: 'إجمالي ميزانية المجموعة بالظبط',
    findBtn: 'نقيلي خروجة ←',
    trustOutings: 'أكتر من 200 خروجة',
    trustPackages: 'أكتر من 80 باقة يوم كامل',
    trustRanges: 'نطاقات أسعار ضيقة بالجنيه',
    statOutings: 'نوع خروجة',
    statPackages: 'باقة جاهزة',
    statSuggestions: 'اقتراح بيظهر',
    statBudget: 'نطاق الميزانية بالجنيه',
    resultsEyebrow: 'نتايجك',
    resultsEmpty: 'اكتب ميزانيتك وهتظهرلك أقرب النتائج.',
    filterAll: 'الكل',
    filterActive: 'مغامرات',
    filterChill: 'رايقة',
    filterFood: 'أكل',
    filterCulture: 'ثقافة',
    showMore: 'إظهار 15 كمان',
    packagesEyebrow: 'باقات اليوم الكامل',
    packagesTitle: 'مش مكان واحد.<br><em>خروجة يوم كامل.</em>',
    packagesCopy: 'اختار المود وسيب علينا ترتيب اليوم بالمواعيد والأنشطة والأكل والمشروبات والتكلفة.',
    curatedPlans: 'خطط مختارة',
    allVibes: 'كل المودات',
    vibeDate: 'دِيت',
    vibeFriends: 'صحاب',
    vibeFamily: 'عيلة',
    vibeBudget: 'اقتصادي',
    vibePremium: 'فاخر',
    howEyebrow: 'إزاي بتشتغل',
    howTitle: 'الميزانية تدخل.<br><span>الخروجة تطلع.</span>',
    howCopy: 'من غير حجز أونلاين. الموقع بيساعدك تختار بشكل أذكى حسب الفلوس اللي معاك.',
    step1Title: 'حدد المجموعة',
    step1Copy: 'اكتب عدد الناس ومتوسط ميزانية الفرد وإجمالي ميزانية المجموعة بالظبط.',
    step2Title: 'خروجات قريبة فعلًا',
    step2Copy: 'الترتيب بيعتمد أساسًا على إجمالي تكلفة المجموعة وبعدها ميزانية الفرد، عشان ميزانية 500 جنيه ما تبدأش بخروجة بـ20 جنيه.',
    step3Title: 'كوّن اليوم كله',
    step3Copy: 'الباقات بتستخدم نفس الميزانيتين وبتحط أقرب خطط اليوم الكامل في الأول.',
    priceNoteTitle: 'دقة السعر أهم حاجة',
    priceNoteCopy: 'الأسعار نطاقات تخطيط ضيقة مبنية على مراجع عامة للقاهرة والجيزة، لكنها مش أسعار حجز لحظية. الفرع والتاريخ ونوع التذكرة والعروض والموسم وتغيير المنيو ممكن يغيروا السعر النهائي.',
    footerLine: 'معمول لكل الناس اللي بتقول: “نخرج فين؟”',
    perPersonMin: 'الحد الأدنى للميزانية هو 10 جنيه.',
    budgetMismatch: 'الإجمالي اللي كتبته مختلف عن متوسط الفرد × عدد الناس بـ {diff} جنيه. ترتيب البحث بيستخدم القيمتين.',
    budgetSaved: 'متوسط الفرد والإجمالي متوافقين.',
    group: 'للمجموعة',
    perPerson: 'للفرد',
    estimated: 'تقدير للفرد',
    match: 'أقرب نتيجة',
    planningTotal: 'تقدير المجموعة',
    people: 'أشخاص',
    showing: 'إظهار {n} من أقرب النتائج لميزانيتك.',
    noClose: 'مفيش نتائج قريبة في التصنيف ده. جرّب تصنيف تاني أو ميزانية مختلفة.',
    packagesAround: 'الباقات مترتبة حسب ميزانيتك',
    packageMatch: 'الأقرب للهدف',
    packageTotal: 'الإجمالي / فرد',
    tagNew: 'جديد',
    tagPopular: 'الأشهر',
    tagSmart: 'اختيار ذكي',
    tagCurated: 'مختارة'
  },
  fr: {
    navDiscover: 'Etkashef',
    navPackages: 'El packages',
    navHow: 'Ezay beteshtaghal',
    heroEyebrow: 'CAIRO • BUDGETAK • MOODAK',
    heroCopy: '2olna kam wa7ed, average budget lel wa7ed, w exact total lel group. Hanratab lak el khorogat w el plans 7asab budgetak el 7a2ee2y.',
    peopleLabel: 'Kam wa7ed?',
    avgLabel: 'Average budget / wa7ed',
    totalLabel: 'Exact total lel group',
    findBtn: 'Na2ili khrooga →',
    trustOutings: '200+ khrooga ideas',
    trustPackages: '80+ day packages',
    trustRanges: 'Narrow EGP price ranges',
    statOutings: 'outing types',
    statPackages: 'ready packages',
    statSuggestions: 'suggestions',
    statBudget: 'EGP budget range',
    resultsEyebrow: 'KHOROGTAK',
    resultsEmpty: 'Ektb budgetak w hatshof a2rab results.',
    filterAll: 'Kollo',
    filterActive: '7arakat',
    filterChill: 'Ray2a',
    filterFood: 'Akil',
    filterCulture: 'Th2afa',
    showMore: 'Warreeni 15 kaman',
    packagesEyebrow: 'DAY PLANS',
    packagesTitle: 'Msh makan wa7ed.<br><em>De khrooga yom kamel.</em>',
    packagesCopy: 'Ekhtar el mood w khalli el plan yertab el yom b maw3ed, activities, akl, drinks w total wa2e3y.',
    curatedPlans: 'PLANS METZABTA',
    allVibes: 'Kol el moods',
    vibeDate: 'Date',
    vibeFriends: 'S7ab',
    vibeFamily: '3eela',
    vibeBudget: 'Budget',
    vibePremium: 'Premium',
    howEyebrow: 'EZAY BETESHTAGHAL',
    howTitle: 'Budget yedkhol.<br><span>Khrooga tetla3.</span>',
    howCopy: 'Mafeesh booking database. Dah planner yesa3dak ta5od decision a7san bel budget elly ma3ak.',
    step1Title: 'Zabbet el group',
    step1Copy: 'Ektb 3adad el nas, average budget lel wa7ed, w exact total lel group.',
    step2Title: 'A2rab matches bged',
    step2Copy: 'El ranking bey3tamed awalan 3ala total cost lel group, ba3den budget lel wa7ed, 3ashan 500 EGP ma tebda4 b 20 EGP.',
    step3Title: 'Ebn el yom kolo',
    step3Copy: 'El packages btestakhdem nafs el targeteen w bet7ot a2rab plans awalan.',
    priceNoteTitle: 'D2et el price aham 7aga',
    priceNoteCopy: 'El prices de planning ranges 2areeba mabneya 3ala public references fel Cairo w Giza, bas msh live checkout. El branch w el date w el ticket w el offers w el season momken y8ayaro el final price.',
    footerLine: 'Ma3mool le kol wa7ed bey2ool: “N5rog fein?”',
    perPersonMin: 'El minimum budget howa 10 EGP.',
    budgetMismatch: 'El exact total mokhtalef 3an average × nas b {diff} EGP. El search beyestakhdem el values etneen.',
    budgetSaved: 'El average w el exact total metwaf2een.',
    group: 'lel group',
    perPerson: 'lel wa7ed',
    estimated: 'ta2deer lel wa7ed',
    match: 'a2rab match',
    planningTotal: 'GROUP ESTIMATE',
    people: 'nas',
    showing: 'Warretek {n} men a2rab results le budgetak.',
    noClose: 'Mafeesh results 2areeba fe el category de. Garreb category tany aw budget mokhtalef.',
    packagesAround: 'El packages metrataba 7awal budgetak',
    packageMatch: 'a2rab lel target',
    packageTotal: 'TOTAL / WA7ED',
    tagNew: 'GEDID',
    tagPopular: 'EL AS7AB',
    tagSmart: 'SMART PICK',
    tagCurated: 'METZABT'
  }
};

let lang = localStorage.getItem('nk-lang') || 'en';

const t = (k) => translations[lang][k] ?? translations.en[k] ?? k;

const categoryNames = {
  en: {
    all: 'all',
    active: 'active',
    chill: 'chill',
    food: 'food',
    culture: 'culture',
    date: 'date',
    friends: 'friends',
    family: 'family',
    budget: 'budget',
    premium: 'premium'
  },
  ar: {
    all: 'الكل',
    active: 'مغامرات',
    chill: 'رايقة',
    food: 'أكل',
    culture: 'ثقافة',
    date: 'دِيت',
    friends: 'صحاب',
    family: 'عيلة',
    budget: 'اقتصادي',
    premium: 'فاخر'
  },
  fr: {
    all: 'kollo',
    active: '7arakat',
    chill: 'ray2a',
    food: 'akl',
    culture: 'th2afa',
    date: 'date',
    friends: 's7ab',
    family: '3eela',
    budget: 'economy',
    premium: 'premium'
  }
};

const catText = (c) => categoryNames[lang][c] || c;

const arMap = [
  ['Al Azhar Park walk', 'مشي حديقة الأزهر'],
  ['Al Andalus Park stroll', 'تمشية حديقة الأندلس'],
  ['Al Jazira Park hangout', 'قعدة في حديقة الجزيرة'],
  ['Maadi Island visit', 'زيارة جزيرة المعادي'],
  ['Aquarium Grotto Garden', 'حديقة الأسماك'],
  ['Cairo Tower area visit', 'زيارة منطقة برج القاهرة'],
  ['Egyptian Museum visit', 'زيارة المتحف المصري'],
  ['Coptic Museum visit', 'زيارة المتحف القبطي'],
  ['Museum of Islamic Art', 'متحف الفن الإسلامي'],
  ['National Museum of Egyptian Civilization', 'المتحف القومي للحضارة المصرية'],
  ['Khan El Khalili walk', 'لفة في خان الخليلي'],
  ['Al Moez Street evening', 'سهرة في شارع المعز'],
  ['Muizz photo walk', 'جولة تصوير في المعز'],
  ['Zamalek photo walk', 'جولة تصوير في الزمالك'],
  ['Downtown Cairo photo walk', 'جولة تصوير وسط البلد'],
  ['Garden City walk', 'مشي في جاردن سيتي'],
  ['Old Cairo walking loop', 'لفة في مصر القديمة'],
  ['Manial Palace visit', 'زيارة قصر المنيل'],
  ['Kasr El Nil sunset walk', 'مشي وقت الغروب على كوبري قصر النيل'],
  ['Qasr El Nil bridge photos', 'تصوير على كوبري قصر النيل'],
  ['Renaissance Downtown cinema', 'سينما رينيسانس وسط البلد'],
  ['Renaissance Al Rehab cinema', 'سينما رينيسانس الرحاب'],
  ['Cinema City Stars', 'سينما سيتي ستارز'],
  ['VOX cinema outing', 'خروجة سينما فوكس'],
  ['IMAX cinema outing', 'خروجة آيماكس'],
  ['Movie marathon (2 films)', 'ماراثون فيلمين'],
  ['Cinema date plan', 'خروجة سينما ديت'],
  ['Egyptian breakfast ful + taameya', 'فطار فول وطعمية'],
  ['Koshary bowl outing', 'خروجة كشري'],
  ['Shawerma meal', 'وجبة شاورما'],
  ['Kofta sandwich meal', 'وجبة ساندوتش كفتة'],
  ['Hawawshi meal', 'وجبة حواوشي'],
  ['Feteer session', 'قعدة فطير'],
  ['Molokhia lunch', 'غدا ملوخية'],
  ['Grilled chicken meal', 'وجبة فراخ مشوية'],
  ['Grilled mixed meat', 'وجبة مشويات مشكلة'],
  ['Egyptian seafood meal', 'وجبة سي فود مصرية'],
  ['Pizza sharing meal', 'بيتزا للمشاركة'],
  ['Burger meal', 'وجبة برجر'],
  ['Chicken fast-food combo', 'كومبو فراخ سريع'],
  ['Family fast-food box', 'بوكس أكل للعيلة'],
  ['Sushi meal', 'وجبة سوشي'],
  ['Pasta restaurant meal', 'وجبة مكرونة'],
  ['Steak meal', 'وجبة ستيك'],
  ['Breakfast cafe platter', 'طبق فطار كافيه'],
  ['Sugarcane juice stop', 'محطة عصير قصب'],
  ['Mango juice stop', 'عصير مانجا'],
  ['Guava juice stop', 'عصير جوافة'],
  ['Orange juice stop', 'عصير برتقال'],
  ['Strawberry juice stop', 'عصير فراولة'],
  ['Tea at ahwa', 'شاي في قهوة'],
  ['Turkish coffee', 'قهوة تركي'],
  ['Iced latte', 'آيس لاتيه'],
  ['Spanish latte', 'إسباني لاتيه'],
  ['Fresh lemonade', 'ليمونادة فريش'],
  ['Mocktail cafe stop', 'مشروب موكتيل في كافيه'],
  ['Dessert + coffee', 'حلو وقهوة'],
  ['Waffle + drink', 'وافل ومشروب'],
  ['Crepe + drink', 'كريب ومشروب'],
  ['Ice cream outing', 'خروجة آيس كريم'],
  ['Bowling session', 'جلسة بولينج'],
  ['Pool hall session', 'جلسة بلياردو'],
  ['Arcade session', 'جلسة أركيد'],
  ['VR gaming session', 'جلسة ألعاب واقع افتراضي'],
  ['Escape room', 'إسكيب روم'],
  ['Go-kart session', 'جلسة جو كارت'],
  ['Trampoline park', 'ترامبولين بارك'],
  ['Paintball session', 'جلسة بينتبول'],
  ['Laser tag', 'ليزر تاج'],
  ['Indoor climbing', 'تسلق داخلي'],
  ['Roller skating', 'رولر سكيتنج'],
  ['Ice skating', 'آيس سكاتينج'],
  ['Horse riding session', 'جلسة ركوب خيل'],
  ['Cycling Nile route', 'ركوب عجلة على طريق النيل'],
  ['Football turf booking', 'حجز ملعب كرة قدم'],
  ['Padel session', 'جلسة بادل'],
  ['Tennis court session', 'جلسة تنس'],
  ['Badminton session', 'جلسة بدمينتون'],
  ['Billiards + drink', 'بلياردو ومشروب'],
  ['Karaoke room', 'غرفة كاريوكي'],
  ['Nile felucca short ride', 'فلوكة قصيرة في النيل'],
  ['Nile felucca sunset', 'فلوكة وقت الغروب'],
  ['Motorboat Nile ride', 'مركب موتور في النيل'],
  ['Nile dinner cruise', 'كروز عشاء في النيل'],
  ['Dinner + Nile view', 'عشا مع فيو النيل'],
  ['Rooftop Cairo sunset', 'رووف وقت الغروب'],
  ['Nile-side cafe', 'كافيه على النيل'],
  ['Picnic in a Cairo park', 'بيكنيك في بارك في القاهرة'],
  ['Sunset photo session', 'جلسة تصوير وقت الغروب'],
  ['Night Cairo drive', 'لفة ليلية في القاهرة'],
  ['Grand Egyptian Museum area day', 'يوم منطقة المتحف المصري الكبير'],
  ['Giza pyramids viewing', 'زيارة أهرامات الجيزة'],
  ['Saqqara archaeological day', 'يوم أثري في سقارة'],
  ['Dahshur pyramids trip', 'رحلة أهرامات دهشور'],
  ['Memphis museum trip', 'زيارة متحف ممفيس'],
  ['Baron Empain Palace', 'قصر البارون إمبان'],
  ['Abdeen Palace area', 'منطقة قصر عابدين'],
  ['Nilometer visit', 'زيارة مقياس النيل'],
  ['Pharaonic Village', 'القرية الفرعونية'],
  ['Cairo Opera House area', 'منطقة دار الأوبرا المصرية'],
  ['Mokattam sunset', 'غروب المقطم'],
  ['Muizz + dessert', 'المعز وحلو'],
  ['Khan El Khalili + tea', 'خان الخليلي وشاي'],
  ['Zamalek cafes crawl', 'جولة كافيهات الزمالك'],
  ['Maadi cafes crawl', 'جولة كافيهات المعادي'],
  ['New Cairo cafe hop', 'جولة كافيهات القاهرة الجديدة'],
  ['City Stars shopping stroll', 'لفة وتسوق في سيتي ستارز'],
  ['Mall of Egypt hangout', 'قعدة في مول مصر'],
  ['Cairo Festival City hangout', 'قعدة في كايرو فستيفال سيتي'],
  ['Mall of Arabia hangout', 'قعدة في مول العرب'],
  ['Board-game cafe', 'كافيه بورد جيمز'],
  ['Bookstore + coffee', 'مكتبة وقهوة'],
  ['Art gallery hopping', 'جولة معارض فنية'],
  ['Pottery workshop', 'ورشة فخار'],
  ['Painting workshop', 'ورشة رسم'],
  ['Perfume workshop', 'ورشة تركيب برفان'],
  ['Cooking class', 'كلاس طبخ'],
  ['Photography workshop', 'ورشة تصوير'],
  ['Dance class drop-in', 'كلاس رقص'],
  ['Stand-up comedy night', 'ليلة ستاند أب كوميدي'],
  ['Live music cafe', 'كافيه ميوزيك لايف'],
  ['Jazz night', 'ليلة جاز'],
  ['Theatre night', 'ليلة مسرح'],
  ['Concert night', 'ليلة حفلة'],
  ['Open-air cultural night', 'ليلة ثقافية في الهواء الطلق'],
  ['Poetry night', 'ليلة شعر'],
  ['Cinema + rooftop', 'سينما ورووف'],
  ['Bowling + burger', 'بولينج وبرجر'],
  ['Escape room + pizza', 'إسكيب روم وبيتزا'],
  ['Arcade + dessert', 'أركيد وحلو'],
  ['Park + street-food tour', 'بارك وجولة أكل شارع'],
  ['Koshary + movie', 'كشري وفيلم'],
  ['Ahwa + walk', 'قهوة ومشي'],
  ['Juice + Nile walk', 'عصير ومشي على النيل'],
  ['Cairo sunset on a budget', 'غروب القاهرة بميزانية قليلة'],
  ['Museum + koshary', 'متحف وكشري'],
  ['Zamalek cheap date', 'ديت اقتصادي في الزمالك'],
  ['Maadi casual date', 'ديت كاجوال في المعادي'],
  ['Cinema + fast food', 'سينما وفاست فود'],
  ['Bowling + drinks', 'بولينج ومشروبات'],
  ['Luxury brunch', 'برانش فاخر'],
  ['Luxury dinner', 'عشا فاخر'],
  ['Premium cinema + dinner', 'سينما بريميوم وعشا'],
  ['Private Nile boat', 'مركب نيل خاص']
];

const arLookup = Object.fromEntries(arMap);

const arabicWordMap = {
  walk: 'مشي',
  stroll: 'تمشية',
  visit: 'زيارة',
  area: 'منطقة',
  evening: 'مساء',
  morning: 'الصبح',
  sunset: 'غروب',
  photos: 'تصوير',
  photo: 'تصوير',
  park: 'بارك',
  garden: 'حديقة',
  museum: 'متحف',
  street: 'شارع',
  bridge: 'كوبري',
  cinema: 'سينما',
  movie: 'فيلم',
  date: 'ديت',
  friends: 'صحاب',
  family: 'عيلة',
  dinner: 'عشا',
  lunch: 'غدا',
  breakfast: 'فطار',
  cafe: 'كافيه',
  coffee: 'قهوة',
  dessert: 'حلو',
  juice: 'عصير',
  nile: 'النيل',
  rooftop: 'رووف',
  premium: 'بريميوم',
  budget: 'اقتصادي',
  session: 'جلسة',
  meal: 'وجبة',
  food: 'أكل',
  ride: 'ركوب',
  day: 'يوم',
  night: 'ليلة',
  bowling: 'بولينج',
  arcade: 'أركيد',
  pyramids: 'الأهرامات',
  cairo: 'القاهرة',
  khan: 'خان',
  burger: 'برجر',
  pizza: 'بيتزا',
  pasta: 'مكرونة',
  sushi: 'سوشي',
  seafood: 'سي فود',
  boat: 'مركب',
  felucca: 'فلوكة',
  gallery: 'جاليري',
  art: 'فن',
  history: 'تاريخ',
  old: 'قديم',
  new: 'جديد',
  golden: 'ذهبي',
  summer: 'صيف',
  workshop: 'ورشة',
  class: 'كلاس',
  coffeehouse: 'قهوة'
};

function arText(s) {
  let str = String(s);
  if (arLookup[str]) {
    return arLookup[str];
  }
  Object.keys(arabicWordMap).sort((a, b) => b.length - a.length).forEach((k) => {
    str = str.replace(new RegExp('\\b' + k + '\\b', 'gi'), arabicWordMap[k]);
  });
  return str;
}

const frPhoneticMap = {
  'ا': 'a',
  'أ': 'a',
  'إ': 'e',
  'آ': 'a',
  'ب': 'b',
  'ت': 't',
  'ث': 's',
  'ج': 'g',
  'ح': '7',
  'خ': '5',
  'د': 'd',
  'ذ': 'z',
  'ر': 'r',
  'ز': 'z',
  'س': 's',
  'ش': 'sh',
  'ص': 's',
  'ض': 'd',
  'ط': 't',
  'ظ': 'z',
  'ع': '3',
  'غ': 'gh',
  'ف': 'f',
  'ق': '2',
  'ك': 'k',
  'ل': 'l',
  'م': 'm',
  'ن': 'n',
  'ه': 'h',
  'و': 'w',
  'ي': 'y',
  'ى': 'a',
  'ة': 'a',
  'ء': '2'
};

function frText(s) {
  let ar = arText(s);
  return ar.split('').map((ch) => frPhoneticMap[ch] ?? ch).join('').replace(/\s+/g, ' ').trim();
}

function localized(en, ar = arText(en), fr = frText(en)) {
  return {
    en,
    ar,
    fr
  };
}

function localizeOuting(o) {
  return {
    ...o,
    name: localized(o.name),
    desc: localized(o.desc, frText(o.desc), frText(o.desc))
  };
}

function money(n) {
  return `${new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-EG', { maximumFractionDigits: 0 }).format(Math.round(n))} ${lang === 'ar' ? 'جنيه' : 'EGP'}`;
}

function applyLanguage() {
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  renderOutings();
  renderPackages();
}

function L(v) {
  return typeof v === 'object' && v !== null ? (v[lang] ?? v.en) : v;
}

outings.forEach((o) => {
  o.name = localized(o.name, arText(o.name), frText(o.name));
  o.desc = localized(o.desc, arText(o.desc), frText(o.desc));
});

let packages = packageSeeds.map((seed, index) => {
  const steps = seed[2].map((s) => ({
    time: s[0],
    name: localized(s[1], arText(s[1]), frText(s[1])),
    cost: s[2]
  }));
  const briefEn = seed[4] || `A complete ${seed[0].toLowerCase()} plan.`;
  return {
    name: localized(seed[0], arText(seed[0]), frText(seed[0])),
    brief: localized(briefEn, seed[5] || arText(briefEn), seed[6] || frText(briefEn)),
    vibe: seed[3],
    steps,
    total: steps.reduce((a, s) => a + s.cost, 0),
    tag: index % 5 === 0 ? 'NEW' : index % 5 === 1 ? 'POPULAR' : index % 5 === 2 ? 'SMART PICK' : 'CURATED'
  };
});

function readInputs() {
  state.people = Math.max(1, Math.min(100, Number(document.getElementById('people').value) || 1));
  state.perPerson = Number(document.getElementById('perPerson').value) || 0;
  state.totalBudget = Number(document.getElementById('totalBudget').value) || 0;
}

function updateBudgetUI() {
  readInputs();
  const pp = document.getElementById('perPerson');
  const total = document.getElementById('totalBudget');
  const err = document.getElementById('perPersonError');
  const totalErr = document.getElementById('totalError');
  const hint = document.getElementById('budgetHint');
  const ppInvalid = state.perPerson > 0 && state.perPerson < 10;
  const totalInvalid = state.totalBudget > 0 && state.totalBudget < 10;
  
  pp.closest('.input-wrap').classList.toggle('invalid', ppInvalid);
  total.closest('.input-wrap').classList.toggle('invalid', totalInvalid);
  
  if (ppInvalid) {
    err.textContent = t('perPersonMin');
  } else {
    err.textContent = '';
  }
  
  if (totalInvalid) {
    totalErr.textContent = t('perPersonMin');
  } else {
    totalErr.textContent = '';
  }
  
  if (ppInvalid || totalInvalid) {
    hint.textContent = '';
    return;
  }
  
  if (state.perPerson === 0 || state.totalBudget === 0) {
    hint.textContent = '';
    return;
  }
  
  const calc = state.people * state.perPerson;
  const diff = Math.abs(calc - state.totalBudget);
  hint.textContent = diff <= 1 ? t('budgetSaved') : t('budgetMismatch').replace('{diff}', money(diff));
}

function intervalDistance(value, min, max) {
  if (value < min) return min - value;
  if (value > max) return value - max;
  return 0;
}

function outingScore(o) {
  const targetPerPerson = state.perPerson;
  const targetGroup = state.totalBudget;
  const groupMin = o.min * state.people;
  const groupMax = o.max * state.people;
  const groupGap = intervalDistance(targetGroup, groupMin, groupMax);
  const ppGap = intervalDistance(targetPerPerson, o.min, o.max);
  const groupNorm = groupGap / Math.max(targetGroup, 1);
  const ppNorm = ppGap / Math.max(targetPerPerson, 1);
  const midGroup = Math.abs(targetGroup - ((groupMin + groupMax) / 2)) / Math.max(targetGroup, 1);
  const midPP = Math.abs(targetPerPerson - ((o.min + o.max) / 2)) / Math.max(targetPerPerson, 1);
  
  return groupNorm * 0.55 + ppNorm * 0.25 + midGroup * 0.15 + midPP * 0.05;
}

function packageScore(p) {
  const targetPerPerson = state.perPerson;
  const targetGroup = state.totalBudget;
  const groupCost = p.total * state.people;
  const groupGap = Math.abs(groupCost - targetGroup) / Math.max(targetGroup, 1);
  const ppGap = Math.abs(p.total - targetPerPerson) / Math.max(targetPerPerson, 1);
  
  return groupGap * 0.7 + ppGap * 0.3;
}

function renderOutings() {
  const grid = document.getElementById('resultsGrid');
  const more = document.getElementById('moreBtn');
  
  if (state.perPerson < 10 || state.totalBudget < 10) {
    grid.innerHTML = '<div class="empty">' + t('perPersonMin') + '</div>';
    more.hidden = true;
    return;
  }
  
  let list = outings
    .filter((o) => state.cat === 'all' || o.cat === state.cat)
    .map((o) => ({ ...o, score: outingScore(o) }))
    .sort((a, b) => a.score - b.score);
    
  const visible = list.slice(0, state.shown);
  document.getElementById('resultsTitle').textContent = lang === 'ar' ? `أقرب خروجات لميزانية ${money(state.perPerson)} للفرد` : (lang === 'fr' ? `A2rab khorogat le ${money(state.perPerson)} lel wa7ed` : `Closest outings to ${money(state.perPerson)} per person`);
  document.getElementById('resultsSub').textContent = t('showing').replace('{n}', visible.length);
  
  if (!visible.length) {
    grid.innerHTML = '<div class="empty">' + t('noClose') + '</div>';
    more.hidden = true;
    return;
  }
  
  grid.innerHTML = visible.map((o, i) => `
    <article class="outing-card" style="animation-delay:${Math.min(i * .035, .5)}s">
      <div class="outing-top">
        <span class="emoji">${o.emoji}</span>
        <div style="display:flex;gap:6px;align-items:center">
          <span class="match-badge">${t('match')}</span>
          <span class="tag">${catText(o.cat)}</span>
        </div>
      </div>
      <h3>${L(o.name)}</h3>
      <p>${L(o.desc)}</p>
      <div class="price-line">
        <div class="price">
          <strong>${money(o.min)} – ${money(o.max)}</strong>
          <small>${t('estimated')}</small>
        </div>
        <div class="source-badge">${t('group')}: ${money(o.min * state.people)}–${money(o.max * state.people)}</div>
      </div>
    </article>
  `).join('');
  
  more.hidden = visible.length >= list.length;
}

function renderPackages() {
  const grid = document.getElementById('packagesGrid');
  const more = document.getElementById('packageMoreBtn');
  
  if (state.perPerson < 10 || state.totalBudget < 10) {
    grid.innerHTML = '<div class="empty">' + t('perPersonMin') + '</div>';
    if (more) more.hidden = true;
    return;
  }
  
  const list = packages
    .filter((p) => state.pcat === 'all' || p.vibe === state.pcat)
    .map((p) => ({ ...p, score: packageScore(p) }))
    .sort((a, b) => a.score - b.score);
    
  const visible = list.slice(0, state.packageShown);
  if (more) more.hidden = visible.length >= list.length;
  
  grid.innerHTML = visible.map((p, i) => `
    <article class="package-card ${i < 3 ? 'matching' : ''}">
      <div class="package-meta">
        <span>${lang === 'ar' ? (p.tag === 'NEW' ? t('tagNew') : p.tag === 'POPULAR' ? t('tagPopular') : p.tag === 'SMART PICK' ? t('tagSmart') : t('tagCurated')) : p.tag}</span>
        <span>${catText(p.vibe)}</span>
      </div>
      <h3>${L(p.name)}</h3>
      <p class="package-brief">${L(p.brief)}</p>
      <div class="timeline">
        ${p.steps.map((s) => `
          <div class="time-row">
            <span class="time">${s.time}</span>
            <span>${L(s.name)}</span>
            <span class="cost">${money(s.cost)}</span>
          </div>
        `).join('')}
      </div>
      <div class="package-total">
        <div>
          <small>${t('packageTotal')}</small>
          <strong>${money(p.total)}</strong>
        </div>
        <div>
          <small>${state.people} ${t('people')}</small>
          <strong>${money(p.total * state.people)}</strong>
        </div>
      </div>
      ${i < 3 ? `
        <div class="budget-meter">
          ${t('packageMatch')} • ${money(p.total)} / ${lang === 'ar' ? 'فرد' : lang === 'fr' ? 'wa7ed' : 'person'}
        </div>
      ` : ''}
    </article>
  `).join('');
}

function validateAndSearch(e) {
  e.preventDefault();
  readInputs();
  if (state.perPerson < 10 || state.totalBudget < 10) {
    updateBudgetUI();
    return;
  }
  state.shown = 10;
  state.packageShown = 10;
  renderOutings();
  renderPackages();
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

['people', 'perPerson', 'totalBudget'].forEach((id) => {
  document.getElementById(id).addEventListener('input', updateBudgetUI);
});

document.getElementById('budgetForm').addEventListener('submit', validateAndSearch);

document.getElementById('moreBtn').addEventListener('click', () => {
  state.shown += 15;
  renderOutings();
});

document.querySelectorAll('[data-cat]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-cat]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.cat = btn.dataset.cat;
    state.shown = 10;
    renderOutings();
  });
});

document.querySelectorAll('[data-pcat]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-pcat]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.pcat = btn.dataset.pcat;
    state.packageShown = 10;
    renderPackages();
  });
});

document.getElementById('packageMoreBtn').addEventListener('click', () => {
  state.packageShown += 15;
  renderPackages();
});

function setLang(next) {
  lang = next;
  localStorage.setItem('nk-lang', lang);
  applyLanguage();
}

document.getElementById('arabicBtn').addEventListener('click', () => setLang('ar'));
document.getElementById('englishBtn').addEventListener('click', () => setLang('en'));
document.getElementById('frankoBtn').addEventListener('click', () => setLang('fr'));

const outingCount = document.getElementById('outingCount');
if (outingCount) {
  outingCount.textContent = outings.length + '+';
}

const packageCount = document.getElementById('packageCount');
if (packageCount) {
  packageCount.textContent = packages.length + '+';
}

const packageBadgeCount = document.getElementById('packageBadgeCount');
if (packageBadgeCount) {
  packageBadgeCount.textContent = packages.length + '+';
}

updateBudgetUI();
applyLanguage();