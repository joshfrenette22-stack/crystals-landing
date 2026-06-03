export const BRAND = {
  name: 'Crystals',
  full: 'Crystals Dry Cleaning & Laundromat',
  tagline: 'Wheat Ridge & Wellington, Colorado',
  phone: '303-422-0784',
  phoneHref: 'tel:+13034220784',
  pickupPhone: '855-335-9274',
  email: 'mcrealestate12@outlook.com',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Locations', href: '#locations' },
  { label: 'Reviews', href: '#reviews' },
];

export const VERTICALS = [
  { icon: 'Building2' as const, label: 'Airbnbs & rentals' },
  { icon: 'MapPin' as const, label: 'Hotels' },
  { icon: 'Scale' as const, label: 'Gyms & fitness' },
  { icon: 'Sparkles' as const, label: 'Hair salons' },
  { icon: 'Shirt' as const, label: 'Restaurants' },
  { icon: 'BadgeCheck' as const, label: 'Medical centers' },
  { icon: 'Leaf' as const, label: 'Massage therapists' },
  { icon: 'Droplets' as const, label: 'Veterinarians' },
  { icon: 'Clock' as const, label: 'Daycare centers' },
  { icon: 'Building2' as const, label: 'Nursing homes' },
];

export const BENEFITS = [
  { icon: 'Scale' as const, title: 'The biggest washers in town', body: 'Our 80 lb and 100 lb machines swallow comforters, sleeping bags, rugs and mattress pads in a single load.' },
  { icon: 'Leaf' as const, title: 'All-organic dry cleaning', body: 'A green, solvent-free process that\u2019s gentler on your clothes \u2014 and healthier for you and the planet.' },
  { icon: 'CreditCard' as const, title: 'Free laundry cards \u2014 no coins', body: 'Load a card once and tap to start. No hunting for quarters, no broken coin slots, ever.' },
  { icon: 'Truck' as const, title: 'Pickup & delivery', body: 'Too busy to come in? We pick up at your door, wash and fold, and bring it back fresh.' },
  { icon: 'Wifi' as const, title: 'Free wifi & flat-screen TVs', body: 'Comfortable seating, fast wifi and TVs so the wait flies by while you work or relax.' },
  { icon: 'Clock' as const, title: 'Open 7 days, 6am\u20139pm', body: 'Early bird or night owl \u2014 our laundromats are open every single day of the week.' },
  { icon: 'Sparkles' as const, title: 'Clean, safe & bright', body: 'Spotless floors, plenty of folding space and a well-lit, secure environment you\u2019ll want to spend time in.' },
  { icon: 'BadgeCheck' as const, title: '100% satisfaction', body: 'Locally owned and run by people who care. If it\u2019s not right, we make it right \u2014 guaranteed.' },
];

export const SERVICES = [
  { icon: 'WashingMachine' as const, name: 'Self-service laundromat', blurb: 'Rows of modern washers and dryers in every size, with multiple cycle settings and the largest-capacity machines in town.', points: ['80 lb & 100 lb washers', 'Free laundry card system', 'Ample folding space'] },
  { icon: 'Shirt' as const, name: 'Wash & fold', blurb: 'Drop it off and we\u2019ll take it from here. Whites, colors and delicates washed separately, neatly folded, socks matched.', points: ['Premium detergents', 'Sorted & folded', 'Ready for pickup'] },
  { icon: 'Leaf' as const, name: 'Dry cleaning', blurb: 'An all-organic, green cleaning process. Plus expert alterations and wedding-gown preservation.', points: ['Eco-friendly process', 'Alterations', 'Gown preservation'] },
  { icon: 'Truck' as const, name: 'Pickup & delivery', blurb: 'Schedule online and we\u2019ll handle the rest. Pricing by weight, powered by HappyNest.', points: ['Door-to-door', 'Schedule online', 'Weekly or one-off'] },
  { icon: 'Building2' as const, name: 'Commercial laundry', blurb: 'Outsourced laundry for local businesses \u2014 towels, sheets, aprons, mats, gowns and uniforms.', points: ['Free quotes', 'Reliable turnaround', 'Flexible accounts'] },
];

export const STEPS = [
  { icon: 'Calendar' as const, title: 'Schedule a pickup', body: 'Pick a day and time online in under a minute. Weekly or whenever you need it.' },
  { icon: 'Package' as const, title: 'We collect your bags', body: 'Leave your laundry at the door. Our driver grabs it \u2014 no need to be home.' },
  { icon: 'WashingMachine' as const, title: 'We wash & fold', body: 'Sorted, washed with premium detergents, dried and folded with care.' },
  { icon: 'Truck' as const, title: 'We deliver it back', body: 'Fresh, folded laundry returned to your door, usually within 48 hours.' },
];

export const PRICING = [
  { tag: 'Do it yourself', name: 'Self-service', price: 'From $3.50', unit: '/ wash', note: 'Pay-as-you-go on a free laundry card.', features: ['Standard washers from $3.50', 'Large 80 lb / 100 lb from $14', 'Dryers $0.25 / 6 min', 'Free wifi, TVs & folding space'], cta: 'Get directions', accent: false },
  { tag: 'Most popular', name: 'Wash & fold', price: '$1.95', unit: '/ lb', note: '10 lb minimum. Next-day on most orders.', features: ['Washed, dried & folded', 'Whites & colors separated', 'Premium detergent & softener', 'Drop-off or pickup'], cta: 'Schedule a pickup', accent: true },
  { tag: 'We come to you', name: 'Pickup & delivery', price: 'From $2.25', unit: '/ lb', note: 'Priced by weight & location via HappyNest.', features: ['Door-to-door service', 'Schedule online anytime', 'Recurring or one-off', 'Usually back in 48 hrs'], cta: 'Start with HappyNest', accent: false },
];

export const REVIEWS = [
  { quote: 'Hands down the cleanest laundromat I\u2019ve been to. The big 100 lb washers did all four of my comforters at once \u2014 in and out in under an hour.', name: 'Marisol T.', meta: 'Wheat Ridge', stars: 5 },
  { quote: 'I switched our Airbnb linens over to Crystals and never looked back. Pickup is on time every week and everything comes back perfect.', name: 'Devin R.', meta: 'Short-term rental host', stars: 5 },
  { quote: 'The wash & fold is a lifesaver with two kids. Socks matched, everything folded neat. Worth every penny.', name: 'Aimee K.', meta: 'Wellington', stars: 5 },
  { quote: 'Free laundry cards instead of digging for quarters? Yes. Bright, safe and the staff actually know your name.', name: 'Carlos M.', meta: 'Regular since 2021', stars: 5 },
];

export const FAQS = [
  { q: 'Do I need quarters?', a: 'Nope. Our machines run on a free laundry card \u2014 load it once at the kiosk and tap to start any machine. No coins, no broken slots.' },
  { q: 'How big are your largest washers?', a: 'We have 80 lb and 100 lb washers, some of the largest in town. They\u2019re perfect for comforters, bedspreads, mattress pads, sleeping bags and rugs.' },
  { q: 'What are your hours?', a: 'The laundromats are open every day from 6am to 9pm (last wash around 8pm). Dry cleaning counter is Mon\u2013Fri 8am\u20136pm and Sat 9am\u20135pm; closed Sunday.' },
  { q: 'How does pickup & delivery work?', a: 'Schedule a pickup online through HappyNest, leave your bags at the door, and we\u2019ll wash, fold and return them \u2014 usually within 48 hours. Pricing is by weight and location.' },
  { q: 'Is your dry cleaning really organic?', a: 'Yes. We use an all-organic, green cleaning process that\u2019s gentler on fabrics and free of harsh solvents \u2014 better for your clothes and the environment.' },
  { q: 'Do you do commercial accounts?', a: 'Absolutely. We handle towels, sheets, aprons, mats, gowns and uniforms for gyms, salons, hotels, restaurants, medical offices and more. Request a free quote and we\u2019ll set you up.' },
];

export const LOCATIONS = [
  {
    name: 'Wheat Ridge',
    role: 'Main hub + dry cleaning',
    address: '7180 W 44th Ave, Wheat Ridge, CO 80033',
    cross: 'Corner of W 44th Ave & Teller St',
    phone: '303-422-0784',
    hours: ['Laundromat \u00b7 Daily 6am\u20139pm', 'Dry cleaning \u00b7 Mon\u2013Fri 8\u20136, Sat 9\u20135'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=7180+W+44th+Ave+Wheat+Ridge+CO+80033',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Wellington',
    role: 'Coin & card laundromat',
    address: '8130 6th St, Wellington, CO 80549',
    cross: 'Northern Colorado',
    phone: '303-422-0784',
    hours: ['Laundromat \u00b7 Daily 6am\u20139pm', 'Self-service'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=8130+6th+St+Wellington+CO+80549',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80&auto=format&fit=crop',
  },
];
