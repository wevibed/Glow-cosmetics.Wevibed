import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const PHONE = "263782418623";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Nyarie Glow Cosmetics, I would like to enquire about your products.")}`;

const images = {
  hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85",
  makeup: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  skincare: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
  haircare: "https://images.unsplash.com/photo-1527799820374-dcf8e9d4a388?auto=format&fit=crop&w=900&q=85",
  fragrance: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
  body: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  tools: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  perfume2: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85"
};

function WhatsAppButton() {
  return <a className="wa" href={WA} aria-label="Chat on WhatsApp">⌕</a>;
}

function Header() {
  return (
    <>
      <div className="top">
        <span>Eastgate Market, Shop A43</span>
        <a href="tel:+263782418623">☎ 078 241 8623</a>
      </div>

      <header>
        <a className="brand" href="#">
          <span>Nyarie<span>Glow</span></span>
          <small>COSMETICS<br />WHOLESALE AND RETAIL</small>
        </a>

        <nav>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
          <button>⌕</button>
          <button>☰</button>
        </div>
      </header>
    </>
  );
}

function Category({ image, title }) {
  return (
    <a className="category" href="#products">
      <img src={image} alt={title} />
      <span>{title}</span>
      <b>→</b>
    </a>
  );
}

function Product({ image, title }) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <a href="#contact">Enquire →</a>
      </div>
    </article>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section className="hero">
          <img src={images.hero} alt="Beauty cosmetics" />

          <div className="heroCopy">
            <p className="eyebrow">COSMETICS • WHOLESALE • RETAIL</p>

            <h1>
              Beauty<br />
              For Every<br />
              <em>You</em>
            </h1>

            <p>
              Cosmetics, skincare, haircare and beauty essentials for everyday
              use — wholesale and retail.
            </p>

            <a className="btn" href="#categories">
              SHOP NOW →
            </a>
          </div>

          <div className="trust">
            <span>
              ◇
              <b>Wide Range</b>
              <small>of Products</small>
            </span>

            <span>
              ▱
              <b>Wholesale</b>
              <small>& Retail</small>
            </span>

            <span>
              ♡
              <b>Beauty Store</b>
              <small>Essentials</small>
            </span>
          </div>
        </section>

        <section id="categories" className="section">
          <div className="heading">
            <div>
              <p className="eyebrow pink">SHOP BY CATEGORY</p>
              <h2>Beauty essentials.</h2>
            </div>

            <a href="#products">View All →</a>
          </div>

          <div className="catgrid">
            <Category image={images.makeup} title="Makeup" />
            <Category image={images.skincare} title="Skincare" />
            <Category image={images.haircare} title="Haircare" />
            <Category image={images.fragrance} title="Fragrances" />
            <Category image={images.body} title="Body Care" />
            <Category image={images.nails} title="Nail Care" />
            <Category image={images.tools} title="Beauty Tools" />
            <Category image={images.perfume2} title="Beauty Sets" />
          </div>
        </section>

        <section id="products" className="section productsSection">
          <div className="heading">
            <div>
              <p className="eyebrow pink">FEATURED PRODUCTS</p>
              <h2>Explore our range.</h2>
            </div>

            <a href="#contact">Ask about availability →</a>
          </div>

          <div className="products">
            <Product image={images.makeup} title="Makeup" />
            <Product image={images.skincare} title="Skincare" />
            <Product image={images.haircare} title="Haircare" />
            <Product image={images.fragrance} title="Fragrances" />
            <Product image={images.body} title="Body Care" />
            <Product image={images.nails} title="Nail Care" />
          </div>
        </section>

        <section className="feature">
          <div>
            <p className="eyebrow">SKINCARE</p>
            <h2>Care for healthy-looking skin.</h2>

            <p>
              Explore skincare products alongside makeup, haircare and other
              beauty essentials.
            </p>

            <a className="btn" href="#products">
              SHOP SKINCARE →
            </a>
          </div>

          <img src={images.skincare} alt="Skincare products" />
        </section>

        <section className="feature light">
          <img src={images.makeup} alt="Makeup products" />

          <div>
            <p className="eyebrow pink">MAKEUP</p>
            <h2>Beauty for every occasion.</h2>

            <p>
              Browse makeup and beauty essentials for everyday routines and
              special occasions.
            </p>

            <a className="btn pinkBtn" href="#products">
              SHOP MAKEUP →
            </a>
          </div>
        </section>

        <section className="feature hair">
          <div>
            <p className="eyebrow">HAIRCARE</p>
            <h2>Haircare for your routine.</h2>

            <p>
              Discover haircare essentials as part of the Nyarie Glow range.
            </p>

            <a className="btn" href="#products">
              SHOP HAIRCARE →
            </a>
          </div>

          <img src={images.haircare} alt="Haircare products" />
        </section>

        <section className="wholesale">
          <div>
            <p className="eyebrow pink">WHOLESALE & RETAIL</p>

            <h2>
              Beauty products for personal use or your business.
            </h2>

            <p>
              Contact Nyarie Glow Cosmetics to enquire about available
              products and wholesale or retail purchases.
            </p>

            <a className="btn pinkBtn" href={WA}>
              ENQUIRE NOW →
            </a>
          </div>

          <img src={images.perfume2} alt="Beauty products" />
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow pink">VISIT OUR STORE</p>

            <h2>Eastgate Market, Shop A43.</h2>

            <p>
              <b>Harare, Zimbabwe</b>
              <br />
              078 241 8623
            </p>

            <p>Opening hours: to be confirmed.</p>

            <a className="btn pinkBtn" href={WA}>
              CHAT ON WHATSAPP →
            </a>
          </div>

          <div className="map">
            <div className="pin">●</div>
            <strong>Nyarie Glow Cosmetics</strong>
            <span>Eastgate Market, Shop A43</span>
            <button>MAP LOCATION →</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand footerBrand">
          <span>Nyarie<span>Glow</span></span>
          <small>COSMETICS<br />WHOLESALE AND RETAIL</small>
        </div>

        <p>Beauty • Cosmetics • Wholesale & Retail</p>
        <p>© 2026 Nyarie Glow Cosmetics</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
