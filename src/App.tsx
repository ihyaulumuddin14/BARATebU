import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Phone,
  Users,
  Award,
  Leaf,
  Package,
  MessageCircle,
  Music,
} from "lucide-react";
import { Icon } from "@iconify/react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "products", "about", "partnership"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      category: "Produk Komersial",
      description: "Untuk kebutuhan skala besar dan industri",
      icon: <Package className="w-12 h-12" />,
      items: [
        { name: "Gula Bara Premium 1kg", image: "🍯", price: "Rp 45.000" },
        { name: "Gula Bara Organik 5kg", image: "🌾", price: "Rp 200.000" },
        { name: "Gula Kelapa Murni 1kg", image: "🥥", price: "Rp 50.000" },
      ],
      cta: "commercial",
    },
    {
      category: "Skala UMKM",
      description: "Sempurna untuk usaha kecil dan menengah",
      icon: <Leaf className="w-12 h-12" />,
      items: [
        { name: "Paket UMKM 10kg", image: "📦", price: "Rp 380.000" },
        { name: "Gula Bara Kemasan 500g", image: "🍂", price: "Rp 25.000" },
        { name: "Mix Gula Tradisional", image: "🌿", price: "Rp 150.000" },
      ],
      cta: "whatsapp",
    },
    {
      category: "Untuk Restoran",
      description: "Kualitas premium untuk bisnis kuliner Anda",
      icon: <Award className="w-12 h-12" />,
      items: [
        { name: "Paket Restoran 25kg", image: "🏪", price: "Rp 900.000" },
        { name: "Gula Bara Spesial", image: "⭐", price: "Rp 75.000" },
        { name: "Bundle Kuliner", image: "🍳", price: "Rp 450.000" },
      ],
      cta: "whatsapp",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = (productName = "") => {
    const phone = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis
    const message = productName
      ? `Halo, saya tertarik dengan ${productName}. Bisa minta info lebih lanjut?`
      : `Halo, saya ingin menanyakan tentang produk Gula Bara`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Crimson Pro', 'Georgia', serif",
        backgroundColor: "#F9F6F0",
        color: "#2C2C2C",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-gradient {
          background: linear-gradient(135deg, 
            rgba(46, 90, 39, 0.95) 0%, 
            rgba(193, 154, 107, 0.8) 50%,
            rgba(217, 83, 30, 0.9) 100%
          );
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(217, 83, 30, 0.2);
        }

        .btn-primary {
          background: linear-gradient(135deg, #D9531E 0%, #FF6B35 100%);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(217, 83, 30, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(217, 83, 30, 0.4);
          background: linear-gradient(135deg, #FF6B35 0%, #D9531E 100%);
        }

        .btn-outline {
          background: transparent;
          color: #2E5A27;
          border: 2px solid #2E5A27;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #2E5A27;
          color: #F9F6F0;
          transform: translateY(-2px);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 900;
          color: #2E5A27;
          margin-bottom: 16px;
          text-align: center;
        }

        .decorative-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #D9531E 0%, #C19A6B 100%);
          margin: 0 auto 40px;
          border-radius: 2px;
        }

        .product-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #D9531E;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 12px rgba(217, 83, 30, 0.3);
        }

        .wave-divider {
          position: relative;
          width: 100%;
          height: 80px;
          background: linear-gradient(180deg, #F9F6F0 0%, #C19A6B 100%);
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
        }

        .glass-effect {
          background: rgba(249, 246, 240, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(193, 154, 107, 0.2);
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
        }

        .navbar-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #D9531E;
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after,
        .navbar-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          ...(scrolled
            ? {
                backgroundColor: "rgba(249, 246, 240, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 20px rgba(46, 90, 39, 0.1)",
              }
            : {
                backgroundColor: "transparent",
              }),
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "32px",
              fontWeight: "900",
              color: "#2E5A27",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
            onClick={() => scrollToSection("home")}
          >
            <span style={{ fontSize: "40px" }}>🔥</span>
            Gula Bara
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {[
              { id: "home", label: "Beranda" },
              { id: "products", label: "Produk" },
              { id: "about", label: "Tentang" },
              { id: "partnership", label: "Kerjasama" },
            ].map((item) => (
              <div
                key={item.id}
                className={`navbar-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                style={{
                  color: activeSection === item.id ? "#D9531E" : "#2C2C2C",
                  cursor: "pointer",
                  fontWeight: activeSection === item.id ? "600" : "500",
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 40px 60px",
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217, 83, 30, 0.1) 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(46, 90, 39, 0.1) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div className="animate-slide-in-left">
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                color: "white",
                padding: "8px 24px",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "24px",
                boxShadow: "0 4px 15px rgba(46, 90, 39, 0.2)",
              }}
            >
              ✨ Gula Tradisional Premium Indonesia
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "72px",
                fontWeight: "900",
                color: "#2E5A27",
                lineHeight: "1.1",
                marginBottom: "24px",
              }}
            >
              Gula Bara
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #D9531E 0%, #C19A6B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Manisnya Tradisi
              </span>
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#2C2C2C",
                marginBottom: "40px",
                maxWidth: "500px",
                opacity: 0.9,
              }}
            >
              Gula kelapa murni dengan kualitas premium, diproduksi secara
              tradisional untuk menghadirkan cita rasa autentik Indonesia dalam
              setiap kristalnya.
            </p>

            <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
              <button
                className="btn-primary"
                onClick={() => scrollToSection("products")}
              >
                <ShoppingCart
                  style={{ display: "inline", marginRight: "8px" }}
                  size={20}
                />
                Lihat Produk
              </button>
              <button className="btn-outline" onClick={() => openWhatsApp()}>
                <MessageCircle
                  style={{ display: "inline", marginRight: "8px" }}
                  size={20}
                />
                Hubungi Kami
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "40px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(46, 90, 39, 0.2)",
              }}
            >
              {[
                {
                  icon: "🌾",
                  label: "100% Alami",
                  sublabel: "Tanpa Bahan Kimia",
                },
                {
                  icon: "🏆",
                  label: "Kualitas Premium",
                  sublabel: "Terjamin Mutu",
                },
                {
                  icon: "🇮🇩",
                  label: "Produk Lokal",
                  sublabel: "Bangga Indonesia",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.8s ease-out ${
                      0.3 + idx * 0.1
                    }s forwards`,
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#2E5A27",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#2C2C2C",
                      opacity: 0.7,
                    }}
                  >
                    {item.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="animate-slide-in-right"
            style={{ position: "relative" }}
          >
            <div
              className="animate-pulse"
              style={{
                background:
                  "linear-gradient(135deg, #2E5A27 0%, #C19A6B 50%, #D9531E 100%)",
                borderRadius: "30px",
                padding: "40px",
                boxShadow: "0 30px 60px rgba(46, 90, 39, 0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "200%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                  animation: "float 10s ease-in-out infinite",
                }}
              />

              <div
                style={{
                  fontSize: "180px",
                  textAlign: "center",
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                🍯
              </div>
            </div>

            {/* Floating badges */}
            <div
              style={{
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
                animation: "float 4s ease-in-out infinite",
              }}
            >
              🔥 Best Seller
            </div>

            <div
              style={{
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
                animationDelay: "1s",
              }}
            >
              ⭐ 5.0 Rating
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider" />

      {/* Products Section */}
      <section
        id="products"
        style={{
          background:
            "linear-gradient(180deg, #C19A6B 0%, #F9F6F0 50%, #F9F6F0 100%)",
          padding: "100px 40px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="animate-fade-in-up">
            <h2 className="section-title">Produk Kami</h2>
            <div className="decorative-line" />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#2C2C2C",
                opacity: 0.8,
                marginBottom: "60px",
                maxWidth: "600px",
                margin: "0 auto 60px",
              }}
            >
              Pilih produk yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  border: "2px solid #F9F6F0",
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${
                    0.2 + idx * 0.15
                  }s forwards`,
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginBottom: "24px",
                    boxShadow: "0 8px 20px rgba(46, 90, 39, 0.3)",
                  }}
                >
                  {product.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#2E5A27",
                    marginBottom: "12px",
                  }}
                >
                  {product.category}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    color: "#2C2C2C",
                    opacity: 0.7,
                    marginBottom: "30px",
                    lineHeight: "1.6",
                  }}
                >
                  {product.description}
                </p>

                <div style={{ marginBottom: "30px" }}>
                  {product.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        padding: "16px",
                        background: "#F9F6F0",
                        borderRadius: "12px",
                        marginBottom: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#C19A6B";
                        e.currentTarget.style.transform = "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#F9F6F0";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>{item.image}</span>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#2C2C2C",
                            }}
                          >
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#D9531E",
                        }}
                      >
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                {product.cta === "commercial" ? (
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                      className="btn-primary"
                      style={{
                        flex: 1,
                        fontSize: "14px",
                        padding: "12px 20px",
                      }}
                      onClick={() =>
                        window.open("https://tokopedia.com/gulabara", "_blank")
                      }
                    >
                      <ShoppingCart
                        style={{ display: "inline", marginRight: "6px" }}
                        size={16}
                      />
                      Tokopedia
                    </button>
                    <button
                      className="btn-primary"
                      style={{
                        flex: 1,
                        fontSize: "14px",
                        padding: "12px 20px",
                      }}
                      onClick={() =>
                        window.open("https://shopee.co.id/gulabara", "_blank")
                      }
                    >
                      <ShoppingCart
                        style={{ display: "inline", marginRight: "6px" }}
                        size={16}
                      />
                      Shopee
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn-outline"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      padding: "12px 20px",
                    }}
                    onClick={() => openWhatsApp(product.category)}
                  >
                    <MessageCircle
                      style={{ display: "inline", marginRight: "6px" }}
                      size={16}
                    />
                    Hubungi via WhatsApp
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "100px 40px",
          background: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            opacity: 0.03,
            backgroundImage:
              "radial-gradient(circle, #2E5A27 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div
          style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
        >
          <div className="animate-fade-in-up">
            <h2 className="section-title">Tentang Gula Bara</h2>
            <div className="decorative-line" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <div className="animate-slide-in-left">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
                  borderRadius: "30px",
                  padding: "60px",
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(46, 90, 39, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "120px",
                    marginBottom: "20px",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))",
                  }}
                >
                  🌾
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "16px",
                  }}
                >
                  100% Organik
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "1.8",
                  }}
                >
                  Diproduksi dari kelapa pilihan tanpa bahan kimia berbahaya
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#2E5A27",
                  marginBottom: "24px",
                  lineHeight: "1.3",
                }}
              >
                Warisan Tradisi, Kualitas Modern
              </h3>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#2C2C2C",
                  marginBottom: "24px",
                  opacity: 0.9,
                }}
              >
                Gula Bara adalah produk gula kelapa premium yang memadukan
                proses produksi tradisional dengan standar kualitas modern. Kami
                percaya bahwa rasa autentik Indonesia layak dinikmati oleh semua
                kalangan.
              </p>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#2C2C2C",
                  marginBottom: "32px",
                  opacity: 0.9,
                }}
              >
                Setiap butir gula kami diproduksi dengan penuh dedikasi oleh
                petani lokal yang berpengalaman, menjaga kelestarian alam
                sekaligus mendukung ekonomi masyarakat.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {[
                  { icon: "🏆", title: "Bersertifikat", desc: "BPOM & Halal" },
                  {
                    icon: "📦",
                    title: "Pengiriman",
                    desc: "Ke Seluruh Indonesia",
                  },
                  { icon: "💯", title: "Garansi", desc: "Uang Kembali" },
                  {
                    icon: "🤝",
                    title: "Support",
                    desc: "24/7 Customer Service",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "20px",
                      background: "#F9F6F0",
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#C19A6B";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#F9F6F0";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#2E5A27",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#2C2C2C",
                        opacity: 0.7,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section
        id="partnership"
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg, #2E5A27 0%, #C19A6B 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="animate-fade-in-up">
            <h2 className="section-title" style={{ color: "white" }}>
              Kerjasama Bisnis
            </h2>
            <div
              className="decorative-line"
              style={{
                background: "linear-gradient(90deg, #D9531E 0%, white 100%)",
              }}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "60px",
                maxWidth: "700px",
                margin: "0 auto 60px",
                lineHeight: "1.8",
              }}
            >
              Mari berkembang bersama! Kami membuka peluang kerjasama untuk
              distributor, reseller, dan mitra bisnis di seluruh Indonesia.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Distributor",
                benefits: [
                  "Margin keuntungan tinggi",
                  "Support marketing material",
                  "Harga khusus distributor",
                ],
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Reseller",
                benefits: [
                  "Modal awal rendah",
                  "Dropship friendly",
                  "Tanpa target minimal",
                ],
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Mitra Bisnis",
                benefits: [
                  "Kerjasama jangka panjang",
                  "Profit sharing",
                  "Konsultasi bisnis gratis",
                ],
              },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="card-hover glass-effect"
                style={{
                  padding: "40px",
                  borderRadius: "24px",
                  textAlign: "center",
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out ${
                    0.2 + idx * 0.15
                  }s forwards`,
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: "#D9531E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    margin: "0 auto 24px",
                    boxShadow: "0 10px 30px rgba(217, 83, 30, 0.4)",
                  }}
                >
                  {partner.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#2E5A27",
                    marginBottom: "20px",
                  }}
                >
                  {partner.title}
                </h3>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "24px",
                  }}
                >
                  {partner.benefits.map((benefit, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        fontSize: "14px",
                        color: "#2C2C2C",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#D9531E", fontSize: "18px" }}>
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              className="btn-primary"
              style={{
                fontSize: "18px",
                padding: "16px 40px",
                background: "white",
                color: "#2E5A27",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => openWhatsApp("Kerjasama Bisnis")}
            >
              <MessageCircle
                style={{ display: "inline", marginRight: "10px" }}
                size={24}
              />
              Hubungi Kami untuk Kerjasama
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#2C2C2C",
          color: "white",
          padding: "80px 40px 40px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "60px",
              marginBottom: "60px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: "900",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "40px" }}>🔥</span>
                Gula Bara
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  opacity: 0.8,
                  marginBottom: "24px",
                }}
              >
                Gula kelapa premium Indonesia yang menghadirkan cita rasa
                autentik dalam setiap kristalnya. Produk berkualitas tinggi
                untuk kebutuhan komersial dan rumah tangga.
              </p>
              <div
                style={{
                  padding: "16px",
                  background: "rgba(217, 83, 30, 0.1)",
                  borderRadius: "12px",
                  borderLeft: "4px solid #D9531E",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.9,
                    marginBottom: "4px",
                  }}
                >
                  📞 Customer Service 24/7
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#D9531E",
                  }}
                >
                  +62 812-3456-7890
                </div>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#D9531E",
                }}
              >
                Navigasi
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Beranda", "Produk", "Tentang", "Kerjasama"].map(
                  (item, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "12px",
                        fontSize: "15px",
                        opacity: 0.8,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.color = "#D9531E";
                        e.currentTarget.style.paddingLeft = "8px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0.8";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#D9531E",
                }}
              >
                Belanja Online
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <button
                  style={{
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
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onClick={() =>
                    window.open("https://tokopedia.com/gulabara", "_blank")
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D9531E";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  🛒 Tokopedia
                </button>
                <button
                  style={{
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
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onClick={() =>
                    window.open("https://shopee.co.id/gulabara", "_blank")
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D9531E";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  🛍️ Shopee
                </button>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#D9531E",
                }}
              >
                Ikuti Kami
              </h4>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  {
                    icon: (
                      <Icon
                        icon="mdi:instagram"
                        width="2em"
                        height="2em"
                        style={{ color: "#ffffff" }}
                      />
                    ),
                    bg: "#E4405F",
                    name: "Instagram",
                    url: "https://instagram.com/gulabara",
                  },
                  {
                    icon: (
                      <Icon
                        width="2em"
                        height="2em"
                        icon="ic:baseline-facebook"
                        style={{ color: "#ffffff" }}
                      />
                    ),
                    bg: "#1877F2",
                    name: "Facebook",
                    url: "https://facebook.com/gulabara",
                  },
                  {
                    icon: <Music size={24} />,
                    bg: "#000000",
                    name: "TikTok",
                    url: "https://tiktok.com/@gulabara",
                  },
                ].map((social, idx) => (
                  <div
                    key={idx}
                    className="social-icon"
                    style={{ background: social.bg }}
                    onClick={() => window.open(social.url, "_blank")}
                    title={social.name}
                  >
                    {social.icon}
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  fontSize: "14px",
                  padding: "12px 20px",
                  background: "#25D366",
                  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                }}
                onClick={() => openWhatsApp()}
              >
                <MessageCircle
                  style={{ display: "inline", marginRight: "8px" }}
                  size={18}
                />
                WhatsApp Kami
              </button>
            </div>
          </div>

          <div
            style={{
              paddingTop: "40px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                opacity: 0.7,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              © 2024 Gula Bara. All rights reserved. Made with ❤️ in Indonesia
            </div>
            <div
              style={{
                display: "flex",
                gap: "24px",
                fontSize: "14px",
                opacity: 0.7,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span style={{ cursor: "pointer" }}>Kebijakan Privasi</span>
              <span style={{ cursor: "pointer" }}>Syarat & Ketentuan</span>
              <span style={{ cursor: "pointer" }}>Kontak</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
