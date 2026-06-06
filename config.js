/**
 * Onion Sale Center - Configuration File
 * Update this file to change the website content dynamically.
 */

const BUSINESS_CONFIG = {
  currentLanguage: "en", // Default language: 'en' or 'my'

  logo: "https://images.unsplash.com/photo-1618512417789-e19036c845b5?w=100&auto=format&fit=crop&q=60", // Placeholder logo
  favicon: "https://images.unsplash.com/photo-1618512417789-e19036c845b5?w=32&auto=format&fit=crop&q=60",

  seo: {
    en: {
      title: "Golden Onion Sale Center | Premium Quality Wholesale & Retail",
      description: "Trusted supplier of fresh, high-quality onions. Offering wholesale, retail, and bulk supply with dependable distribution and competitive rates.",
      keywords: "onion wholesale, fresh onions, onion retail, onion distribution, bulk agricultural produce"
    },
    my: {
      title: "ရွှေကြက်သွန်နီ အရောင်းစင်တာ | လက်ကား နှင့် လက်လီ ဖြန့်ချိရေး",
      description: "လတ်ဆတ်ပြီး အရည်အသွေးမြင့်မားသော ကြက်သွန်နီများကို ယုံကြည်စိတ်ချစွာ လက်လီလက်ကား မှာယူရရှိနိုင်ပါသည်။",
      keywords: "ကြက်သွန်နီ လက်ကား, ကြက်သွန်နီ လက်လီ, စိုက်ပျိုးရေးထွက်ကုန်"
    }
  },

  businessName: {
    en: "Golden Onion Center",
    my: "ရွှေကြက်သွန်နီ အရောင်းစင်တာ"
  },

  tagline: {
    en: "Fresh Quality Onions at Competitive Prices",
    my: "လတ်ဆတ်သော ကြက်သွန်နီများကို သင့်တင့်မျှတသော ဈေးနှုန်းများဖြင့်"
  },

  nav: {
    home: { en: "Home", my: "ပင်မစာမျက်နှာ" },
    about: { en: "About", my: "ကျွန်ုပ်တို့အကြောင်း" },
    goals: { en: "Goals", my: "ရည်မှန်းချက်များ" },
    products: { en: "Products", my: "ထုတ်ကုန်များ" },
    gallery: { en: "Gallery", my: "ဓာတ်ပုံများ" },
    whyUs: { en: "Why Choose Us", my: "ရွေးချယ်ရန်အကြောင်းရင်း" },
    contact: { en: "Contact Us", my: "ဆက်သွယ်ရန်" }
  },

  hero: {
    ctaText: { en: "Contact Us", my: "ဆက်သွယ်ရန်" },
    sliderImages: [
      "https://images.unsplash.com/photo-1618512417789-e19036c845b5?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?w=1600&auto=format&fit=crop&q=80"
    ]
  },

  about: {
    title: { en: "About Us", my: "ကျွန်ုပ်တို့အကြောင်း" },
    historyTitle: { en: "Our History", my: "ကုမ္ပဏီနောက်ခံသမိုင်း" },
    missionTitle: { en: "Our Mission", my: "ကျွန်ုပ်တို့၏ ရည်မှန်းချက်" },
    description: {
      en: "We are a premier, trusted supplier of fresh and premium quality onions serving both local domestic retail chains and enterprise wholesale distributors.",
      my: "ကျွန်ုပ်တို့သည် ပြည်တွင်း လက်လီလုပ်ငန်းများနှင့် လက်ကားဖြန့်ချိရေး လုပ်ငန်းများအတွက် လတ်ဆတ်ပြီး အရည်အသွေးမြင့်မားသော ကြက်သွန်နီများကို ယုံကြည်စိတ်ချစွာ တင်သွင်းဖြန့်ချိနေသော စင်တာဖြစ်ပါသည်။"
    },
    history: {
      en: "Established with a deep roots in direct agricultural sourcing, we have evolved from a localized farm gate trader into a fully dynamic supply engine.",
      my: "စိုက်ပျိုးရေး လုပ်ငန်းအခြေခံမှ စတင်ခဲ့ပြီး ယခုအခါတွင် ခေတ်မီပြီး စနစ်ကျသော လက်လီလက်ကား ဖြန့်ချိရေး အင်ဂျင်တစ်ခုအဖြစ် တိုးတက်ပြောင်းလဲလာခဲ့ပါသည်။"
    },
    mission: {
      en: "To systematically bridge regional farms directly to consumer hubs, assuring absolute shelf freshness, ecological integrity, and logistical punctuality.",
      my: "ဒေသတွင်း စိုက်ပျိုးခင်းများမှ လတ်ဆတ်သော ထွက်ကုန်များကို စားသုံးသူများထံ သတ်မှတ်ချိန်အတွင်း စနစ်တကျ ဘေးအန္တရာယ်ကင်းရှင်းစွာ အရောက်ပို့ဆောင်ပေးရန်။"
    }
  },

  stats: [
    { number: 1200, suffix: "+", title: { en: "Tons Supplied", my: "ဖြန့်ချိပြီး တန်ချိန်" } },
    { number: 450, suffix: "+", title: { en: "Happy Clients", my: "စိတ်ကျေနပ်မှုရရှိသူများ" } },
    { number: 15, suffix: "+", title: { en: "Years Experience", my: "လုပ်ငန်းအတွေ့အကြုံ" } }
  ],

  goals: {
    title: { en: "Our Business Goals", my: "လုပ်ငန်းရည်မှန်းချက်များ" },
    items: [
      { title: { en: "Quality Products", my: "အရည်အသွေးပြည့် ထုတ်ကုန်" }, desc: { en: "Strict sorting systems to ensure top standards.", my: "အဆင့်မြင့် စစ်ဆေးမှုစနစ်ဖြင့် အကောင်းဆုံးကို ရွေးချယ်ပေးခြင်း။" }, icon: "fa-award" },
      { title: { en: "Customer Satisfaction", my: "ဝယ်သူစိတ်ကျေနပ်မှု" }, desc: { en: "Providing seamless post-purchase service structures.", my: "ဝယ်ယူပြီးနောက် စိတ်ကျေနပ်မှုရရှိစေရန် အပြည့်အဝ တာဝန်ယူခြင်း။" }, icon: "fa-smile" },
      { title: { en: "Competitive Pricing", my: "မျှတသော ဈေးနှုန်း" }, desc: { en: "Direct source supply patterns optimizing overall costs.", my: "စိုက်ခင်းတိုက်ရိုက်စနစ်ဖြင့် စျေးနှုန်း အသက်သာဆုံးဖြစ်အောင် ဆောင်ရွက်ခြင်း။" }, icon: "fa-tags" },
      { title: { en: "Reliable Supply", my: "ခိုင်မာသော ထောက်ပံ့မှု" }, desc: { en: "Continuous storage control ensuring year-round supply.", my: "ရာသီမရွေး အမြဲမပြတ် ဝယ်ယူရရှိနိုင်အောင် စီမံထားခြင်း။" }, icon: "fa-cubes" },
      { title: { en: "Sustainable Growth", my: "ရေရှည်တိုးတက်မှု" }, desc: { en: "Eco-friendly farming practices and community development.", my: "သဘာဝပတ်ဝန်းကျင်နှင့် လူမှုအသိုင်းအဝိုင်းအတွက် ရေရှည်ဖွံ့ဖြိုးမှု။" }, icon: "fa-chart-line" }
    ]
  },

  services: {
    title: { en: "Products & Services", my: "ထုတ်ကုန်နှင့် ဝန်ဆောင်မှုများ" },
    items: [
      { icon: "fa-boxes-packing", title: { en: "Wholesale Onion Sales", my: "ကြက်သွန်နီ လက်ကားရောင်းဝယ်ရေး" }, description: { en: "Bulk container capacity orders for commercial processing plants and distributors.", my: "စက်ရုံများနှင့် ကုန်သည်ကြီးများအတွက် အုပ်စုလိုက် ပမာဏအမြောက်အမြား လက်ကားရောင်းချပေးခြင်း။" } },
      { icon: "fa-store", title: { en: "Retail Onion Sales", my: "ကြက်သွันနီ လက်လီရောင်းဝယ်ရေး" }, description: { en: "Carefully handpicked fresh packages tailored perfectly for everyday market retailers.", my: "ဈေးသည်များနှင့် အိမ်သုံးများအတွက် စနစ်တကျ ရွေးချယ်ထုပ်ပိုးထားသော လက်လီ အရောင်း။" } },
      { icon: "fa-truck-moving", title: { en: "Bulk Deliveries", my: "အမြောက်အမြား သယ်ယူပို့ဆောင်ရေး" }, description: { en: "Climate managed tracking delivery fleets providing prompt supply drops directly to warehouses.", my: "အအေးခန်းစနစ်သုံး ယာဉ်တန်းများဖြင့် ကုန်လှောင်ရုံများအရောက် အချိန်မီ ပို့ဆောင်ပေးခြင်း။" } },
      { icon: "fa-ship", title: { en: "Import & Export", my: "သွင်းကုန် နှင့် ပို့ကုန် ပံ့ပိုးမှု" }, description: { en: "Full compliance custom documents processing handling regional ocean trade operations.", my: "နိုင်ငံတကာ အရည်အသွေးမီ စာရွက်စာတမ်း အပြည့်အစုံဖြင့် ပြည်ပသို့ တင်ပို့၊ တင်သွင်းခြင်း။" } },
      { icon: "fa-box-open", title: { en: "Custom Packaging", my: "စိတ်ကြိုက် ထုပ်ပိုးမှုစနစ်" }, description: { en: "Flexible mesh bagging choices available customized explicitly per unique branding profiles.", my: "မိမိတို့ လုပ်ငန်းတံဆိပ်ဖြင့် စိတ်ကြိုက် ပိုက်အိတ် သို့မဟုတ် သေတ္တာများဖြင့် ထုပ်ပိုးပေးခြင်း။" } }
    ]
  },

  gallery: {
    title: { en: "Media Gallery", my: "ပုံရိပ်များ" },
    images: [
      "https://images.unsplash.com/photo-1618512417789-e19036c845b5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=600&auto=format&fit=crop&q=80"
    ]
  },

  whyUs: {
    title: { en: "Why Choose Us", my: "ဘာကြောင့် ကျွန်ုပ်တို့ကို ရွေးချယ်သင့်လဲ" },
    items: [
      { icon: "fa-seedling", title: { en: "Fresh Quality Onions", my: "လတ်ဆတ်မှု အပြည့်အဝ" }, desc: { en: "Direct from verified premium nutrient agricultural fields.", my: "စိုက်ပျိုးမြေမှ တိုက်ရိုက် ထုတ်ယူထားသော လတ်ဆတ်မှု။" } },
      { icon: "fa-handshake", title: { en: "Trusted Supplier", my: "ယုံကြည်စိတ်ချရသော မိတ်ဖက်" }, desc: { en: "Decades building long term industrial enterprise associations.", my: "လုပ်ငန်းရှင်များအကြား ဆယ်စုနှစ်ချီ ခိုင်မာသော သမိုင်းကြောင်း ရှိခြင်း။" } },
      { icon: "fa-shipping-fast", title: { en: "Fast Delivery", my: "လျင်မြန်သော ပို့ဆောင်မှု" }, desc: { en: "Advanced routing optimization preventing any logistic disruptions.", my: "ခေတ်မှီ လမ်းကြောင်းစနစ်ဖြင့် အမြန်ဆုံး အရောက်ပို့စနစ်။" } },
      { icon: "fa-percent", title: { en: "Affordable Prices", my: "သက်သာသော ဈေးနှုန်း" }, desc: { en: "Direct-to-farm transparent pricing structural advantages.", my: "ပွဲစားဆင့်မရှိဘဲ စိုက်ခင်းရင်းအတိုင်း ပွင့်လင်းမြင်သာသော စျေးနှုန်း။" } },
      { icon: "fa-headset", title: { en: "Excellent Support", my: "အထူးဝန်ဆောင်မှု" }, desc: { en: "Dedicated corporate team resolving logistical or placement configurations.", my: "အဆင်မပြေမှု တစ်စုံတစ်ရာ ရှိပါက ကူညီဖြေရှင်းပေးမည့် အဖွဲ့ရှိခြင်း။" } }
    ]
  },

  contact: {
    title: { en: "Get In Touch", my: "ဆက်သွယ်ရန် စုံစမ်းရန်" },
    phone: "+85512345678",
    email: "info@onionsalecenter.com",
    facebook: "https://facebook.com/yourpage",
    tiktok: "https://tiktok.com/@youraccount",
    wechat: "your_wechat_id",
    viber: "viber://add?number=85512345678",
    whatsapp: "https://wa.me/85512345678",
    telegram: "https://t.me/youraccount"
  },

  address: {
    title: { en: "Our Location", my: "လုပ်ငန်းတည်နေရာ" },
    text: {
      en: "No. 45, Agro-Industrial Zone, Mandalay, Myanmar",
      my: "အမှတ် ၄၅၊ စိုက်ပျိုးရေးစက်မှုဇုန်၊ မန္တလေးမြို့၊ မြန်မာနိုင်ငံ။"
    },
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118434.78696773229!2d96.00578148810214!3d21.95045056708309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d2393d29751%3A0x9a35dec226615759!2sMandalay!5e0!3m2!1sen!2smm!4v1710000000000!5m2!1sen!2smm"
  }
};
