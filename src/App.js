"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_2 = require("@iconify/react");
function App() {
    var _a = (0, react_1.useState)(false), scrolled = _a[0], setScrolled = _a[1];
    var _b = (0, react_1.useState)("home"), activeSection = _b[0], setActiveSection = _b[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 50);
            // Detect active section
            var sections = ["home", "products", "about", "partnership"];
            var current = sections.find(function (section) {
                var element = document.getElementById(section);
                if (element) {
                    var rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current)
                setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var products = [
        {
            category: "Produk Komersial",
            description: "Untuk kebutuhan skala besar dan industri",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Package, { className: "w-12 h-12" }, void 0),
            items: [
                { name: "Gula Bara Premium 1kg", image: "🍯", price: "Rp 45.000" },
                { name: "Gula Bara Organik 5kg", image: "🌾", price: "Rp 200.000" },
                { name: "Gula Kelapa Murni 1kg", image: "🥥", price: "Rp 50.000" },
            ],
            cta: "commercial"
        },
        {
            category: "Skala UMKM",
            description: "Sempurna untuk usaha kecil dan menengah",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Leaf, { className: "w-12 h-12" }, void 0),
            items: [
                { name: "Paket UMKM 10kg", image: "📦", price: "Rp 380.000" },
                { name: "Gula Bara Kemasan 500g", image: "🍂", price: "Rp 25.000" },
                { name: "Mix Gula Tradisional", image: "🌿", price: "Rp 150.000" },
            ],
            cta: "whatsapp"
        },
        {
            category: "Untuk Restoran",
            description: "Kualitas premium untuk bisnis kuliner Anda",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Award, { className: "w-12 h-12" }, void 0),
            items: [
                { name: "Paket Restoran 25kg", image: "🏪", price: "Rp 900.000" },
                { name: "Gula Bara Spesial", image: "⭐", price: "Rp 75.000" },
                { name: "Bundle Kuliner", image: "🍳", price: "Rp 450.000" },
            ],
            cta: "whatsapp"
        },
    ];
    var scrollToSection = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    var openWhatsApp = function (productName) {
        if (productName === void 0) { productName = ""; }
        var phone = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis
        var message = productName
            ? "Halo, saya tertarik dengan " + productName + ". Bisa minta info lebih lanjut?"
            : "Halo, saya ingin menanyakan tentang produk Gula Bara";
        window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
            fontFamily: "'Crimson Pro', 'Georgia', serif",
            backgroundColor: "#F9F6F0",
            color: "#2C2C2C"
        } }, { children: [(0, jsx_runtime_1.jsx)("style", { children: "\n        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');\n        \n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n\n        @keyframes fadeInUp {\n          from {\n            opacity: 0;\n            transform: translateY(30px);\n          }\n          to {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n\n        @keyframes fadeIn {\n          from { opacity: 0; }\n          to { opacity: 1; }\n        }\n\n        @keyframes float {\n          0%, 100% { transform: translateY(0px); }\n          50% { transform: translateY(-20px); }\n        }\n\n        @keyframes pulse {\n          0%, 100% { transform: scale(1); }\n          50% { transform: scale(1.05); }\n        }\n\n        @keyframes slideInLeft {\n          from {\n            opacity: 0;\n            transform: translateX(-50px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n\n        @keyframes slideInRight {\n          from {\n            opacity: 0;\n            transform: translateX(50px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n\n        .animate-fade-in-up {\n          animation: fadeInUp 0.8s ease-out forwards;\n        }\n\n        .animate-slide-in-left {\n          animation: slideInLeft 0.8s ease-out forwards;\n        }\n\n        .animate-slide-in-right {\n          animation: slideInRight 0.8s ease-out forwards;\n        }\n\n        .animate-float {\n          animation: float 3s ease-in-out infinite;\n        }\n\n        .animate-pulse {\n          animation: pulse 2s ease-in-out infinite;\n        }\n\n        .hero-gradient {\n          background: linear-gradient(135deg, \n            rgba(46, 90, 39, 0.95) 0%, \n            rgba(193, 154, 107, 0.8) 50%,\n            rgba(217, 83, 30, 0.9) 100%\n          );\n        }\n\n        .card-hover {\n          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n          cursor: pointer;\n        }\n\n        .card-hover:hover {\n          transform: translateY(-10px);\n          box-shadow: 0 20px 40px rgba(217, 83, 30, 0.2);\n        }\n\n        .btn-primary {\n          background: linear-gradient(135deg, #D9531E 0%, #FF6B35 100%);\n          color: white;\n          border: none;\n          padding: 14px 32px;\n          border-radius: 50px;\n          font-weight: 600;\n          font-family: 'Inter', sans-serif;\n          font-size: 16px;\n          cursor: pointer;\n          transition: all 0.3s ease;\n          box-shadow: 0 4px 15px rgba(217, 83, 30, 0.3);\n        }\n\n        .btn-primary:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 8px 25px rgba(217, 83, 30, 0.4);\n          background: linear-gradient(135deg, #FF6B35 0%, #D9531E 100%);\n        }\n\n        .btn-outline {\n          background: transparent;\n          color: #2E5A27;\n          border: 2px solid #2E5A27;\n          padding: 12px 30px;\n          border-radius: 50px;\n          font-weight: 600;\n          font-family: 'Inter', sans-serif;\n          font-size: 16px;\n          cursor: pointer;\n          transition: all 0.3s ease;\n        }\n\n        .btn-outline:hover {\n          background: #2E5A27;\n          color: #F9F6F0;\n          transform: translateY(-2px);\n        }\n\n        .section-title {\n          font-family: 'Playfair Display', serif;\n          font-size: 48px;\n          font-weight: 900;\n          color: #2E5A27;\n          margin-bottom: 16px;\n          text-align: center;\n        }\n\n        .decorative-line {\n          width: 80px;\n          height: 4px;\n          background: linear-gradient(90deg, #D9531E 0%, #C19A6B 100%);\n          margin: 0 auto 40px;\n          border-radius: 2px;\n        }\n\n        .product-badge {\n          position: absolute;\n          top: 16px;\n          right: 16px;\n          background: #D9531E;\n          color: white;\n          padding: 6px 16px;\n          border-radius: 20px;\n          font-size: 12px;\n          font-weight: 600;\n          font-family: 'Inter', sans-serif;\n          box-shadow: 0 4px 12px rgba(217, 83, 30, 0.3);\n        }\n\n        .wave-divider {\n          position: relative;\n          width: 100%;\n          height: 80px;\n          background: linear-gradient(180deg, #F9F6F0 0%, #C19A6B 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);\n        }\n\n        .glass-effect {\n          background: rgba(249, 246, 240, 0.8);\n          backdrop-filter: blur(10px);\n          border: 1px solid rgba(193, 154, 107, 0.2);\n        }\n\n        .social-icon {\n          width: 50px;\n          height: 50px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition: all 0.3s ease;\n          cursor: pointer;\n        }\n\n        .social-icon:hover {\n          transform: translateY(-5px) scale(1.1);\n        }\n\n        .navbar-link {\n          position: relative;\n          transition: color 0.3s ease;\n        }\n\n        .navbar-link::after {\n          content: '';\n          position: absolute;\n          bottom: -4px;\n          left: 0;\n          width: 0;\n          height: 2px;\n          background: #D9531E;\n          transition: width 0.3s ease;\n        }\n\n        .navbar-link:hover::after,\n        .navbar-link.active::after {\n          width: 100%;\n        }\n      " }, void 0), (0, jsx_runtime_1.jsx)("nav", __assign({ style: __assign({ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "all 0.3s ease" }, (scrolled
                    ? {
                        backgroundColor: "rgba(249, 246, 240, 0.95)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 20px rgba(46, 90, 39, 0.1)"
                    }
                    : {
                        backgroundColor: "transparent"
                    })) }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                        maxWidth: "1400px",
                        margin: "0 auto",
                        padding: "20px 40px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "32px",
                                fontWeight: "900",
                                color: "#2E5A27",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }, onClick: function () { return scrollToSection("home"); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { fontSize: "40px" } }, { children: "\uD83D\uDD25" }), void 0), "Gula Bara"] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                display: "flex",
                                gap: "40px",
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "16px",
                                fontWeight: "500"
                            } }, { children: [
                                { id: "home", label: "Beranda" },
                                { id: "products", label: "Produk" },
                                { id: "about", label: "Tentang" },
                                { id: "partnership", label: "Kerjasama" },
                            ].map(function (item) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "navbar-link " + (activeSection === item.id ? "active" : ""), style: {
                                    color: activeSection === item.id ? "#D9531E" : "#2C2C2C",
                                    cursor: "pointer",
                                    fontWeight: activeSection === item.id ? "600" : "500"
                                }, onClick: function () { return scrollToSection(item.id); } }, { children: item.label }), item.id)); }) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("section", __assign({ id: "home", style: {
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    padding: "120px 40px 60px"
                } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            position: "absolute",
                            top: "20%",
                            right: "10%",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(217, 83, 30, 0.1) 0%, transparent 70%)",
                            animation: "float 6s ease-in-out infinite"
                        } }, void 0), (0, jsx_runtime_1.jsx)("div", { style: {
                            position: "absolute",
                            bottom: "10%",
                            left: "5%",
                            width: "250px",
                            height: "250px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(46, 90, 39, 0.1) 0%, transparent 70%)",
                            animation: "float 8s ease-in-out infinite",
                            animationDelay: "1s"
                        } }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                            maxWidth: "1400px",
                            margin: "0 auto",
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px",
                            alignItems: "center"
                        } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-slide-in-left" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                            display: "inline-block",
                                            background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                                            color: "white",
                                            padding: "8px 24px",
                                            borderRadius: "30px",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            fontFamily: "'Inter', sans-serif",
                                            marginBottom: "24px",
                                            boxShadow: "0 4px 15px rgba(46, 90, 39, 0.2)"
                                        } }, { children: "\u2728 Gula Tradisional Premium Indonesia" }), void 0), (0, jsx_runtime_1.jsxs)("h1", __assign({ style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "72px",
                                            fontWeight: "900",
                                            color: "#2E5A27",
                                            lineHeight: "1.1",
                                            marginBottom: "24px"
                                        } }, { children: ["Gula Bara", (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ style: {
                                                    background: "linear-gradient(135deg, #D9531E 0%, #C19A6B 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text"
                                                } }, { children: "Manisnya Tradisi" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                            fontSize: "20px",
                                            lineHeight: "1.8",
                                            color: "#2C2C2C",
                                            marginBottom: "40px",
                                            maxWidth: "500px",
                                            opacity: 0.9
                                        } }, { children: "Gula kelapa murni dengan kualitas premium, diproduksi secara tradisional untuk menghadirkan cita rasa autentik Indonesia dalam setiap kristalnya." }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", gap: "20px", marginBottom: "40px" } }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-primary", onClick: function () { return scrollToSection("products"); } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShoppingCart, { style: { display: "inline", marginRight: "8px" }, size: 20 }, void 0), "Lihat Produk"] }), void 0), (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-outline", onClick: function () { return openWhatsApp(); } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { style: { display: "inline", marginRight: "8px" }, size: 20 }, void 0), "Hubungi Kami"] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                            display: "flex",
                                            gap: "40px",
                                            paddingTop: "20px",
                                            borderTop: "1px solid rgba(46, 90, 39, 0.2)"
                                        } }, { children: [
                                            {
                                                icon: "🌾",
                                                label: "100% Alami",
                                                sublabel: "Tanpa Bahan Kimia"
                                            },
                                            {
                                                icon: "🏆",
                                                label: "Kualitas Premium",
                                                sublabel: "Terjamin Mutu"
                                            },
                                            {
                                                icon: "🇮🇩",
                                                label: "Produk Lokal",
                                                sublabel: "Bangga Indonesia"
                                            },
                                        ].map(function (item, idx) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                opacity: 0,
                                                animation: "fadeInUp 0.8s ease-out " + (0.3 + idx * 0.1) + "s forwards"
                                            } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { fontSize: "32px", marginBottom: "8px" } }, { children: item.icon }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        color: "#2E5A27",
                                                        marginBottom: "4px"
                                                    } }, { children: item.label }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontSize: "12px",
                                                        color: "#2C2C2C",
                                                        opacity: 0.7
                                                    } }, { children: item.sublabel }), void 0)] }), idx)); }) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-slide-in-right", style: { position: "relative" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-pulse", style: {
                                            background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 50%, #D9531E 100%)",
                                            borderRadius: "30px",
                                            padding: "40px",
                                            boxShadow: "0 30px 60px rgba(46, 90, 39, 0.2)",
                                            position: "relative",
                                            overflow: "hidden"
                                        } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                                    position: "absolute",
                                                    top: "-50%",
                                                    right: "-50%",
                                                    width: "200%",
                                                    height: "200%",
                                                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                                                    animation: "float 10s ease-in-out infinite"
                                                } }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                    fontSize: "180px",
                                                    textAlign: "center",
                                                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                                                    position: "relative",
                                                    zIndex: 1
                                                } }, { children: "\uD83C\uDF6F" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                            position: "absolute",
                                            top: "-20px",
                                            right: "-20px",
                                            background: "#D9531E",
                                            color: "white",
                                            padding: "16px 24px",
                                            borderRadius: "20px",
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "14px",
                                            fontWeight: "700",
                                            boxShadow: "0 10px 30px rgba(217, 83, 30, 0.4)",
                                            animation: "float 4s ease-in-out infinite"
                                        } }, { children: "\uD83D\uDD25 Best Seller" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                            position: "absolute",
                                            bottom: "-20px",
                                            left: "-20px",
                                            background: "#2E5A27",
                                            color: "white",
                                            padding: "16px 24px",
                                            borderRadius: "20px",
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "14px",
                                            fontWeight: "700",
                                            boxShadow: "0 10px 30px rgba(46, 90, 39, 0.4)",
                                            animation: "float 5s ease-in-out infinite",
                                            animationDelay: "1s"
                                        } }, { children: "\u2B50 5.0 Rating" }), void 0)] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "wave-divider" }, void 0), (0, jsx_runtime_1.jsx)("section", __assign({ id: "products", style: {
                    background: "linear-gradient(180deg, #C19A6B 0%, #F9F6F0 50%, #F9F6F0 100%)",
                    padding: "100px 40px",
                    position: "relative"
                } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { maxWidth: "1400px", margin: "0 auto" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-fade-in-up" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "section-title" }, { children: "Produk Kami" }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "decorative-line" }, void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                        textAlign: "center",
                                        fontSize: "18px",
                                        color: "#2C2C2C",
                                        opacity: 0.8,
                                        marginBottom: "60px",
                                        maxWidth: "600px",
                                        margin: "0 auto 60px"
                                    } }, { children: "Pilih produk yang sesuai dengan kebutuhan bisnis Anda" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "40px"
                            } }, { children: products.map(function (product, idx) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "card-hover", style: {
                                    background: "white",
                                    borderRadius: "24px",
                                    padding: "40px",
                                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                                    border: "2px solid #F9F6F0",
                                    opacity: 0,
                                    animation: "fadeInUp 0.8s ease-out " + (0.2 + idx * 0.15) + "s forwards"
                                } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "20px",
                                            background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            marginBottom: "24px",
                                            boxShadow: "0 8px 20px rgba(46, 90, 39, 0.3)"
                                        } }, { children: product.icon }), void 0), (0, jsx_runtime_1.jsx)("h3", __assign({ style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "28px",
                                            fontWeight: "700",
                                            color: "#2E5A27",
                                            marginBottom: "12px"
                                        } }, { children: product.category }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                            fontSize: "16px",
                                            color: "#2C2C2C",
                                            opacity: 0.7,
                                            marginBottom: "30px",
                                            lineHeight: "1.6"
                                        } }, { children: product.description }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: { marginBottom: "30px" } }, { children: product.items.map(function (item, itemIdx) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                padding: "16px",
                                                background: "#F9F6F0",
                                                borderRadius: "12px",
                                                marginBottom: "12px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                transition: "all 0.3s ease",
                                                cursor: "pointer"
                                            }, onMouseEnter: function (e) {
                                                e.currentTarget.style.background = "#C19A6B";
                                                e.currentTarget.style.transform = "translateX(8px)";
                                            }, onMouseLeave: function (e) {
                                                e.currentTarget.style.background = "#F9F6F0";
                                                e.currentTarget.style.transform = "translateX(0)";
                                            } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px"
                                                    } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { fontSize: "24px" } }, { children: item.image }), void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                                    fontFamily: "'Inter', sans-serif",
                                                                    fontSize: "14px",
                                                                    fontWeight: "600",
                                                                    color: "#2C2C2C"
                                                                } }, { children: item.name }), void 0) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontSize: "14px",
                                                        fontWeight: "700",
                                                        color: "#D9531E"
                                                    } }, { children: item.price }), void 0)] }), itemIdx)); }) }), void 0), product.cta === "commercial" ? ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: "flex", gap: "12px" } }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-primary", style: {
                                                    flex: 1,
                                                    fontSize: "14px",
                                                    padding: "12px 20px"
                                                }, onClick: function () {
                                                    return window.open("https://tokopedia.com/gulabara", "_blank");
                                                } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShoppingCart, { style: { display: "inline", marginRight: "6px" }, size: 16 }, void 0), "Tokopedia"] }), void 0), (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-primary", style: {
                                                    flex: 1,
                                                    fontSize: "14px",
                                                    padding: "12px 20px"
                                                }, onClick: function () {
                                                    return window.open("https://shopee.co.id/gulabara", "_blank");
                                                } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShoppingCart, { style: { display: "inline", marginRight: "6px" }, size: 16 }, void 0), "Shopee"] }), void 0)] }), void 0)) : ((0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-outline", style: {
                                            width: "100%",
                                            fontSize: "14px",
                                            padding: "12px 20px"
                                        }, onClick: function () { return openWhatsApp(product.category); } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { style: { display: "inline", marginRight: "6px" }, size: 16 }, void 0), "Hubungi via WhatsApp"] }), void 0))] }), idx)); }) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("section", __assign({ id: "about", style: {
                    padding: "100px 40px",
                    background: "white",
                    position: "relative",
                    overflow: "hidden"
                } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            opacity: 0.03,
                            backgroundImage: "radial-gradient(circle, #2E5A27 1px, transparent 1px)",
                            backgroundSize: "50px 50px"
                        } }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: { maxWidth: "1200px", margin: "0 auto", position: "relative" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-fade-in-up" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "section-title" }, { children: "Tentang Gula Bara" }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "decorative-line" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "60px",
                                    alignItems: "center",
                                    marginTop: "60px"
                                } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "animate-slide-in-left" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                                                borderRadius: "30px",
                                                padding: "60px",
                                                textAlign: "center",
                                                position: "relative",
                                                boxShadow: "0 20px 60px rgba(46, 90, 39, 0.2)"
                                            } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontSize: "120px",
                                                        marginBottom: "20px",
                                                        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))"
                                                    } }, { children: "\uD83C\uDF3E" }), void 0), (0, jsx_runtime_1.jsx)("h3", __assign({ style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "32px",
                                                        fontWeight: "700",
                                                        color: "white",
                                                        marginBottom: "16px"
                                                    } }, { children: "100% Organik" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                                        fontSize: "16px",
                                                        color: "rgba(255, 255, 255, 0.9)",
                                                        lineHeight: "1.8"
                                                    } }, { children: "Diproduksi dari kelapa pilihan tanpa bahan kimia berbahaya" }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-slide-in-right" }, { children: [(0, jsx_runtime_1.jsx)("h3", __assign({ style: {
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: "36px",
                                                    fontWeight: "700",
                                                    color: "#2E5A27",
                                                    marginBottom: "24px",
                                                    lineHeight: "1.3"
                                                } }, { children: "Warisan Tradisi, Kualitas Modern" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                                    fontSize: "18px",
                                                    lineHeight: "1.8",
                                                    color: "#2C2C2C",
                                                    marginBottom: "24px",
                                                    opacity: 0.9
                                                } }, { children: "Gula Bara adalah produk gula kelapa premium yang memadukan proses produksi tradisional dengan standar kualitas modern. Kami percaya bahwa rasa autentik Indonesia layak dinikmati oleh semua kalangan." }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                                    fontSize: "18px",
                                                    lineHeight: "1.8",
                                                    color: "#2C2C2C",
                                                    marginBottom: "32px",
                                                    opacity: 0.9
                                                } }, { children: "Setiap butir gula kami diproduksi dengan penuh dedikasi oleh petani lokal yang berpengalaman, menjaga kelestarian alam sekaligus mendukung ekonomi masyarakat." }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "20px"
                                                } }, { children: [
                                                    { icon: "🏆", title: "Bersertifikat", desc: "BPOM & Halal" },
                                                    {
                                                        icon: "📦",
                                                        title: "Pengiriman",
                                                        desc: "Ke Seluruh Indonesia"
                                                    },
                                                    { icon: "💯", title: "Garansi", desc: "Uang Kembali" },
                                                    {
                                                        icon: "🤝",
                                                        title: "Support",
                                                        desc: "24/7 Customer Service"
                                                    },
                                                ].map(function (item, idx) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                        padding: "20px",
                                                        background: "#F9F6F0",
                                                        borderRadius: "16px",
                                                        transition: "all 0.3s ease",
                                                        cursor: "pointer"
                                                    }, onMouseEnter: function (e) {
                                                        e.currentTarget.style.background = "#C19A6B";
                                                        e.currentTarget.style.transform = "scale(1.05)";
                                                    }, onMouseLeave: function (e) {
                                                        e.currentTarget.style.background = "#F9F6F0";
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { fontSize: "32px", marginBottom: "8px" } }, { children: item.icon }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                                fontFamily: "'Inter', sans-serif",
                                                                fontSize: "14px",
                                                                fontWeight: "700",
                                                                color: "#2E5A27",
                                                                marginBottom: "4px"
                                                            } }, { children: item.title }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                                fontSize: "12px",
                                                                color: "#2C2C2C",
                                                                opacity: 0.7
                                                            } }, { children: item.desc }), void 0)] }), idx)); }) }), void 0)] }), void 0)] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("section", __assign({ id: "partnership", style: {
                    padding: "100px 40px",
                    background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                    position: "relative",
                    overflow: "hidden"
                } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            position: "absolute",
                            top: "-10%",
                            right: "-5%",
                            width: "400px",
                            height: "400px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                            animation: "float 8s ease-in-out infinite"
                        } }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                            maxWidth: "1200px",
                            margin: "0 auto",
                            position: "relative",
                            zIndex: 1
                        } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "animate-fade-in-up" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "section-title", style: { color: "white" } }, { children: "Kerjasama Bisnis" }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "decorative-line", style: {
                                            background: "linear-gradient(90deg, #D9531E 0%, white 100%)"
                                        } }, void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                            textAlign: "center",
                                            fontSize: "20px",
                                            color: "rgba(255, 255, 255, 0.9)",
                                            marginBottom: "60px",
                                            maxWidth: "700px",
                                            margin: "0 auto 60px",
                                            lineHeight: "1.8"
                                        } }, { children: "Mari berkembang bersama! Kami membuka peluang kerjasama untuk distributor, reseller, dan mitra bisnis di seluruh Indonesia." }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "30px",
                                    marginBottom: "60px"
                                } }, { children: [
                                    {
                                        icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { className: "w-12 h-12" }, void 0),
                                        title: "Distributor",
                                        benefits: [
                                            "Margin keuntungan tinggi",
                                            "Support marketing material",
                                            "Harga khusus distributor",
                                        ]
                                    },
                                    {
                                        icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Package, { className: "w-12 h-12" }, void 0),
                                        title: "Reseller",
                                        benefits: [
                                            "Modal awal rendah",
                                            "Dropship friendly",
                                            "Tanpa target minimal",
                                        ]
                                    },
                                    {
                                        icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Award, { className: "w-12 h-12" }, void 0),
                                        title: "Mitra Bisnis",
                                        benefits: [
                                            "Kerjasama jangka panjang",
                                            "Profit sharing",
                                            "Konsultasi bisnis gratis",
                                        ]
                                    },
                                ].map(function (partner, idx) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "card-hover glass-effect", style: {
                                        padding: "40px",
                                        borderRadius: "24px",
                                        textAlign: "center",
                                        opacity: 0,
                                        animation: "fadeInUp 0.8s ease-out " + (0.2 + idx * 0.15) + "s forwards"
                                    } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "20px",
                                                background: "#D9531E",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                margin: "0 auto 24px",
                                                boxShadow: "0 10px 30px rgba(217, 83, 30, 0.4)"
                                            } }, { children: partner.icon }), void 0), (0, jsx_runtime_1.jsx)("h3", __assign({ style: {
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "24px",
                                                fontWeight: "700",
                                                color: "#2E5A27",
                                                marginBottom: "20px"
                                            } }, { children: partner.title }), void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ style: {
                                                listStyle: "none",
                                                padding: 0,
                                                marginBottom: "24px"
                                            } }, { children: partner.benefits.map(function (benefit, bIdx) { return ((0, jsx_runtime_1.jsxs)("li", __assign({ style: {
                                                    fontSize: "14px",
                                                    color: "#2C2C2C",
                                                    marginBottom: "12px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "8px"
                                                } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { color: "#D9531E", fontSize: "18px" } }, { children: "\u2713" }), void 0), benefit] }), bIdx)); }) }), void 0)] }), idx)); }) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: { textAlign: "center" } }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-primary", style: {
                                        fontSize: "18px",
                                        padding: "16px 40px",
                                        background: "white",
                                        color: "#2E5A27",
                                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)"
                                    }, onClick: function () { return openWhatsApp("Kerjasama Bisnis"); } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { style: { display: "inline", marginRight: "10px" }, size: 24 }, void 0), "Hubungi Kami untuk Kerjasama"] }), void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("footer", __assign({ style: {
                    background: "#2C2C2C",
                    color: "white",
                    padding: "80px 40px 40px"
                } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: { maxWidth: "1400px", margin: "0 auto" } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                                gap: "60px",
                                marginBottom: "60px"
                            } }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "36px",
                                                fontWeight: "900",
                                                marginBottom: "16px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { fontSize: "40px" } }, { children: "\uD83D\uDD25" }), void 0), "Gula Bara"] }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ style: {
                                                fontSize: "16px",
                                                lineHeight: "1.8",
                                                opacity: 0.8,
                                                marginBottom: "24px"
                                            } }, { children: "Gula kelapa premium Indonesia yang menghadirkan cita rasa autentik dalam setiap kristalnya. Produk berkualitas tinggi untuk kebutuhan komersial dan rumah tangga." }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                padding: "16px",
                                                background: "rgba(217, 83, 30, 0.1)",
                                                borderRadius: "12px",
                                                borderLeft: "4px solid #D9531E"
                                            } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontSize: "14px",
                                                        opacity: 0.9,
                                                        marginBottom: "4px"
                                                    } }, { children: "\uD83D\uDCDE Customer Service 24/7" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                                        fontSize: "18px",
                                                        fontWeight: "700",
                                                        color: "#D9531E"
                                                    } }, { children: "+62 812-3456-7890" }), void 0)] }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", __assign({ style: {
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                marginBottom: "20px",
                                                color: "#D9531E"
                                            } }, { children: "Navigasi" }), void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ style: { listStyle: "none", padding: 0 } }, { children: ["Beranda", "Produk", "Tentang", "Kerjasama"].map(function (item, idx) { return ((0, jsx_runtime_1.jsx)("li", __assign({ style: {
                                                    marginBottom: "12px",
                                                    fontSize: "15px",
                                                    opacity: 0.8,
                                                    cursor: "pointer",
                                                    transition: "all 0.3s ease"
                                                }, onMouseEnter: function (e) {
                                                    e.currentTarget.style.opacity = "1";
                                                    e.currentTarget.style.color = "#D9531E";
                                                    e.currentTarget.style.paddingLeft = "8px";
                                                }, onMouseLeave: function (e) {
                                                    e.currentTarget.style.opacity = "0.8";
                                                    e.currentTarget.style.color = "white";
                                                    e.currentTarget.style.paddingLeft = "0";
                                                } }, { children: item }), idx)); }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", __assign({ style: {
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                marginBottom: "20px",
                                                color: "#D9531E"
                                            } }, { children: "Belanja Online" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "12px"
                                            } }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ style: {
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                                        padding: "12px 20px",
                                                        borderRadius: "12px",
                                                        color: "white",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease",
                                                        textAlign: "left",
                                                        fontFamily: "'Inter', sans-serif"
                                                    }, onClick: function () {
                                                        return window.open("https://tokopedia.com/gulabara", "_blank");
                                                    }, onMouseEnter: function (e) {
                                                        e.currentTarget.style.background = "#D9531E";
                                                        e.currentTarget.style.transform = "translateX(8px)";
                                                    }, onMouseLeave: function (e) {
                                                        e.currentTarget.style.background =
                                                            "rgba(255, 255, 255, 0.1)";
                                                        e.currentTarget.style.transform = "translateX(0)";
                                                    } }, { children: "\uD83D\uDED2 Tokopedia" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ style: {
                                                        background: "rgba(255, 255, 255, 0.1)",
                                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                                        padding: "12px 20px",
                                                        borderRadius: "12px",
                                                        color: "white",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease",
                                                        textAlign: "left",
                                                        fontFamily: "'Inter', sans-serif"
                                                    }, onClick: function () {
                                                        return window.open("https://shopee.co.id/gulabara", "_blank");
                                                    }, onMouseEnter: function (e) {
                                                        e.currentTarget.style.background = "#D9531E";
                                                        e.currentTarget.style.transform = "translateX(8px)";
                                                    }, onMouseLeave: function (e) {
                                                        e.currentTarget.style.background =
                                                            "rgba(255, 255, 255, 0.1)";
                                                        e.currentTarget.style.transform = "translateX(0)";
                                                    } }, { children: "\uD83D\uDECD\uFE0F Shopee" }), void 0)] }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", __assign({ style: {
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                marginBottom: "20px",
                                                color: "#D9531E"
                                            } }, { children: "Ikuti Kami" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ style: { display: "flex", gap: "12px", flexWrap: "wrap" } }, { children: [
                                                {
                                                    icon: ((0, jsx_runtime_1.jsx)(react_2.Icon, { icon: "mdi:instagram", width: "2em", height: "2em", style: { color: "#ffffff" } }, void 0)),
                                                    bg: "#E4405F",
                                                    name: "Instagram",
                                                    url: "https://instagram.com/gulabara"
                                                },
                                                {
                                                    icon: ((0, jsx_runtime_1.jsx)(react_2.Icon, { width: "2em", height: "2em", icon: "ic:baseline-facebook", style: { color: "#ffffff" } }, void 0)),
                                                    bg: "#1877F2",
                                                    name: "Facebook",
                                                    url: "https://facebook.com/gulabara"
                                                },
                                                {
                                                    icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Music, { size: 24 }, void 0),
                                                    bg: "#000000",
                                                    name: "TikTok",
                                                    url: "https://tiktok.com/@gulabara"
                                                },
                                            ].map(function (social, idx) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "social-icon", style: { background: social.bg }, onClick: function () { return window.open(social.url, "_blank"); }, title: social.name }, { children: social.icon }), idx)); }) }), void 0), (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn-primary", style: {
                                                width: "100%",
                                                marginTop: "20px",
                                                fontSize: "14px",
                                                padding: "12px 20px",
                                                background: "#25D366",
                                                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)"
                                            }, onClick: function () { return openWhatsApp(); } }, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MessageCircle, { style: { display: "inline", marginRight: "8px" }, size: 18 }, void 0), "WhatsApp Kami"] }), void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                paddingTop: "40px",
                                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "20px"
                            } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: {
                                        fontSize: "14px",
                                        opacity: 0.7,
                                        fontFamily: "'Inter', sans-serif"
                                    } }, { children: "\u00A9 2024 Gula Bara. All rights reserved. Made with \u2764\uFE0F in Indonesia" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
                                        display: "flex",
                                        gap: "24px",
                                        fontSize: "14px",
                                        opacity: 0.7,
                                        fontFamily: "'Inter', sans-serif"
                                    } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { cursor: "pointer" } }, { children: "Kebijakan Privasi" }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ style: { cursor: "pointer" } }, { children: "Syarat & Ketentuan" }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ style: { cursor: "pointer" } }, { children: "Kontak" }), void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports["default"] = App;
