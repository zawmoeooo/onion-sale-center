/**
 * ONION SALE CENTER - BUSINESS CONFIGURATION
 * ==========================================
 * Edit this file to update website content
 * All business information is loaded dynamically from this configuration
 */

const BUSINESS_CONFIG = {
    /* ========================================
       BASIC BUSINESS INFORMATION
       ======================================== */
    
    businessName: "Onion Sale Center",
    
    logo: "https://via.placeholder.com/50x50?text=OSC",
    
    tagline: "Fresh Quality Onions at Competitive Prices",
    
    /* ========================================
       ABOUT SECTION
       ======================================== */
    
    about: {
        title: "About Us",
        description: "We are a trusted supplier of fresh and high-quality onions for wholesale and retail customers. With over 10 years of experience in the agricultural industry, we pride ourselves on delivering premium produce directly from our farms to your doorstep.",
        history: "Founded in 2013, Onion Sale Center has grown from a small local farm to a regional supplier serving hundreds of satisfied customers. Our commitment to quality and reliability has made us a preferred partner for restaurants, markets, and businesses.",
        mission: "Our mission is to provide the freshest, highest-quality onions at competitive prices while maintaining sustainable farming practices and exceptional customer service."
    },
    
    /* ========================================
       BUSINESS GOALS
       ======================================== */
    
    goals: [
        { title: "Quality Products", icon: "fa-gem", description: "Premium onions selected for freshness and taste" },
        { title: "Customer Satisfaction", icon: "fa-smile", description: "Ensuring every customer receives exceptional service" },
        { title: "Competitive Pricing", icon: "fa-tag", description: "Best prices without compromising on quality" },
        { title: "Reliable Supply", icon: "fa-box-open", description: "Consistent availability throughout the year" },
        { title: "Sustainable Growth", icon: "fa-leaf", description: "Eco-friendly farming practices for future generations" }
    ],
    
    /* ========================================
       SERVICES / PRODUCTS
       ======================================== */
    
    services: [
        {
            icon: "fa-handshake",
            title: "Wholesale Onion Sales",
            description: "Large quantity orders at competitive wholesale prices for retailers and restaurants."
        },
        {
            icon: "fa-store",
            title: "Retail Onion Sales",
            description: "Premium quality fresh onions available for individual customers in convenient packaging."
        },
        {
            icon: "fa-box",
            title: "Bulk Orders",
            description: "Special pricing and packaging for bulk corporate and institutional orders."
        },
        {
            icon: "fa-truck",
            title: "Delivery Service",
            description: "Fast and reliable delivery throughout the region with competitive shipping rates."
        },
        {
            icon: "fa-globe",
            title: "Import & Export Support",
            description: "We handle international shipments and export documentation for global customers."
        },
        {
            icon: "fa-wrapping-paper",
            title: "Custom Packaging",
            description: "Tailored packaging solutions with your branding for corporate and retail needs."
        }
    ],
    
    /* ========================================
       HERO SLIDER IMAGES
       ======================================== */
    
    sliderImages: [
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd5ecf2?w=1200&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464066807867-36add3229b45?w=1200&h=600&fit=crop"
    ],
    
    /* ========================================
       GALLERY IMAGES
       ======================================== */
    
    galleryImages: [
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd5ecf2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1464066807867-36add3229b45?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=400&fit=crop"
    ],
    
    /* ========================================
       WHY CHOOSE US - BENEFITS
       ======================================== */
    
    benefits: [
        {
            icon: "fa-star",
            title: "Fresh Quality Onions",
            description: "Handpicked onions selected for premium quality and freshness guaranteed daily."
        },
        {
            icon: "fa-shield-alt",
            title: "Trusted Supplier",
            description: "Over 10 years of reliable service to hundreds of satisfied customers."
        },
        {
            icon: "fa-clock",
            title: "Fast Delivery",
            description: "Quick delivery service to ensure onions arrive fresh to your doorstep."
        },
        {
            icon: "fa-dollar-sign",
            title: "Affordable Prices",
            description: "Competitive pricing that doesn't compromise on quality or freshness."
        },
        {
            icon: "fa-headset",
            title: "Excellent Customer Support",
            description: "24/7 customer service ready to assist with your orders and inquiries."
        },
        {
            icon: "fa-check-circle",
            title: "Quality Guarantee",
            description: "100% satisfaction guarantee on all products with hassle-free returns."
        }
    ],
    
    /* ========================================
       CONTACT INFORMATION
       ======================================== */
    
    contact: {
        phone: "+1 (234) 567-8900",
        email: "info@onionsalecenter.com",
        facebook: "https://www.facebook.com/onionsalecenter",
        tiktok: "https://www.tiktok.com/@onionsalecenter",
        wechat: "onion_sale_center",
        viber: "+1 234 567 8900",
        whatsapp: "+1 234 567 8900",
        telegram: "https://t.me/onion_sale_center"
    },
    
    /* ========================================
       ADDRESS & MAP
       ======================================== */
    
    address: {
        text: "123 Farm Road, Agricultural District, City, Country 12345",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.00601!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU4LjEiTiA3NMKwMDAnMDUuNyJX!5e0!3m2!1sen!2sus!4v1234567890123"
    }
};

// Export for use in script.js
// This configuration is used by script.js to dynamically populate the website