import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = "/products/";
const BRAND = "Nyarie Glow Cosmetics Wholesale";
// Replace this with the business WhatsApp number in international format, digits only.
// Example for Zimbabwe: 2637XXXXXXXX.
const WHATSAPP_NUMBER = "263782418623";

/*
 * MASTER CATALOGUE
 * Product names/prices are based only on the supplied catalogue summary.
 * Where the catalogue text was visibly truncated/unclear, the visible wording
 * is retained instead of inventing a full product name.
 */
const products = [
  // CeraVe
  {id:"cerave-hydrating-cream",brand:"CeraVe",name:"Hydrating Cream",price:6,category:"Skincare",image:"whatsapp/cerave-hydrating-cleanser.jpg"},
  {id:"cerave-hydrating-hyaluronic",brand:"CeraVe",name:"Hydrating Hyaluronic",price:6,category:"Skincare",image:"whatsapp/cerave-ha.jpg"},
  {id:"cerave-resurfacing-retinol",brand:"CeraVe",name:"Resurfacing Retinol",price:6,category:"Skincare",image:"whatsapp/cerave-retinol.jpg"},
  {id:"cerave-oil-control-moisturiser",brand:"CeraVe",name:"Oil Control Moisturiser",price:6,category:"Skincare",image:"whatsapp/cerave-oil-control.jpg"},
  {id:"cerave-moisturising-lotion",brand:"CeraVe",name:"Moisturising Lotion",price:6,category:"Skincare"},
  {id:"cerave-foaming-facial-cleanser",brand:"CeraVe",name:"Foaming Facial Cleanser",price:6,category:"Skincare",image:"cerave-acne.jpg"},
  {id:"cerave-am-facial-moisturiser",brand:"CeraVe",name:"AM Facial Moisturiser",price:6,category:"Skincare",image:"whatsapp/cerave-am.jpg"},
  {id:"cerave-skin-renewing",brand:"CeraVe",name:"Skin Renewing",price:6,category:"Skincare",image:"whatsapp/cerave-retinol.jpg"},
  {id:"cerave-blemish-control",brand:"CeraVe",name:"Blemish Control",price:6,category:"Skincare",image:"whatsapp/cerave-acne.jpg"},
  {id:"cerave-hydrating-foaming-cleanser",brand:"CeraVe",name:"Hydrating Foaming cleanser",price:6,category:"Skincare",image:"whatsapp/cerave-foaming-oil.jpg"},
  {id:"cerave-itch-moisturiser",brand:"CeraVe",name:"Itch Moisturiser",price:7,category:"Skincare",image:"whatsapp/cerave-itch.jpg"},
  {id:"cerave-hydrating-mineral",brand:"CeraVe",name:"Hydrating Mineral",price:7,category:"Skincare",image:"cerave-am.jpg"},

  // Garnier
  {id:"garnier-bright-complete-1",brand:"Garnier",name:"Bright Complete",price:8,category:"Skincare",image:"whatsapp/garnier-vitc-booster.jpg"},
  {id:"garnier-bright-complete-2",brand:"Garnier",name:"Bright Complete",price:8,category:"Skincare",image:"whatsapp/garnier-vitc-range.jpg"},
  {id:"garnier-sakura-glow",brand:"Garnier",name:"Sakura Glow",price:6,category:"Body Care",image:"whatsapp/garnier-sakura.jpg"},
  {id:"garnier-vitamin-c-booster",brand:"Garnier",name:"Vitamin C Booster",price:6,category:"Skincare",image:"whatsapp/garnier-vitc-booster.jpg"},
  {id:"garnier-bright-anti-acne",brand:"Garnier",name:"Bright Anti-Acne",price:6,category:"Skincare",image:"whatsapp/garnier-antiacne.jpg"},

  // The Ordinary
  {id:"ordinary-peeling-solution",brand:"The Ordinary",name:"Peeling Solution",price:5,category:"Skincare"},
  {id:"ordinary-hyaluronic",brand:"The Ordinary",name:"Hyaluronic",price:5,category:"Skincare"},
  {id:"ordinary-buffet",brand:"The Ordinary",name:"Buffet",price:5,category:"Skincare"},
  {id:"ordinary-hair-care",brand:"The Ordinary",name:"Hair Care",price:6,category:"Hair Care"},
  {id:"ordinary-azelaic",brand:"The Ordinary",name:"Azelaic",price:7,category:"Skincare",image:"whatsapp/ordinary-azelaic.jpg"},
  {id:"ordinary-alpha-arbutin",brand:"The Ordinary",name:"Alpha Arbutin",price:7,category:"Skincare"},
  {id:"ordinary-niacinamide",brand:"The Ordinary",name:"Niacinamide",price:7,category:"Skincare"},

  // Anua
  {id:"anua-70-hyaluron",brand:"Anua",name:"70+ Hyaluron Moisture Boosting",price:7,category:"Skincare"},
  {id:"anua-niacinamide-txa",brand:"Anua",name:"Niacinamide TXA",price:7,category:"Skincare"},
  {id:"anua-100-plus",brand:"Anua",name:"100+",price:6,category:"Skincare"},
  {id:"anua-gel-mask",brand:"Anua",name:"Gel Mask",price:2.5,category:"Skincare"},

  // Axis-Y
  {id:"axis-dark-spot-corrector-1",brand:"Axis-Y",name:"Dark Spot Corrector",price:6,category:"Skincare",image:"axis-dark.jpg"},
  {id:"axis-dark-spot-corrector-2",brand:"Axis-Y",name:"Dark Spot Corrector",price:7,category:"Skincare",image:"whatsapp/axis-dark-serum.jpg"},
  {id:"axis-dark-spot-corrector-3",brand:"Axis-Y",name:"Dark Spot Corrector",price:7,category:"Skincare",image:"whatsapp/axis-dark-collection.jpg"},
  {id:"axis-txa-intensive-brightening",brand:"Axis-Y",name:"TXA Intensive Brightening",price:8,category:"Skincare",image:"axis-txa.jpg"},
  {id:"axis-y-set",brand:"Axis-Y",name:"Axis-Y Set",price:20,category:"Skincare",image:"whatsapp/axis-dark-collection.jpg"},

  // Gluta-Hya / Vaseline
  {id:"glutahya-overnight",brand:"Gluta-Hya",name:"Gluta-Hya Overnight",price:6,category:"Body Care",image:"vaseline-glutahya.jpg"},
  {id:"pro-age-restore",brand:"Vaseline",name:"Pro Age Restore",price:6,category:"Body Care",image:"whatsapp/vaseline-glutahya-red.jpg"},
  {id:"smoothing-peel",brand:"Gluta-Hya",name:"Smoothing Peel",price:6,category:"Body Care"},
  {id:"flawless-brightening",brand:"Gluta-Hya",name:"Flawless Brightening",price:6,category:"Body Care",image:"whatsapp/vaseline-glutahya-gold.jpg"},
  {id:"vaseline-glutahya-dew",brand:"Vaseline",name:"Gluta-Hya Dew",price:6,category:"Body Care",image:"whatsapp/vaseline-glutahya-blue.jpg"},
  {id:"vaseline-spf-50",brand:"Vaseline",name:"SPF 50",price:6,category:"Sun Care",image:"whatsapp/vaseline-spf-pack.jpg"},
  {id:"daily-brightening",brand:"Vaseline",name:"Daily Brightening",price:6,category:"Body Care",image:"whatsapp/vaseline-brightening.jpg"},
  {id:"b3-oil",brand:"Vaseline",name:"B3 Oil",price:6,category:"Body Care"},
  {id:"coco-radiant",brand:"Vaseline",name:"Coco Radiant",price:6,category:"Body Care"},
  {id:"gluta-berry-powder",brand:"Gluta-Hya",name:"Gluta berry powder",price:1,category:"Body Care",image:"gluta-berry.jpg"},

  // La Roche-Posay
  {id:"lrp-sunscreen-1",brand:"La Roche-Posay",name:"Sunscreen",price:6,category:"Sun Care",image:"whatsapp/lrp-anthelios-uvmune.jpg"},
  {id:"lrp-sunscreen-2",brand:"La Roche-Posay",name:"Sunscreen",price:6,category:"Sun Care",image:"whatsapp/lrp-anthelios-stock.jpg"},
  {id:"lrp-sunscreen-3",brand:"La Roche-Posay",name:"Sunscreen",price:6,category:"Sun Care",image:"lrp-anthelios.jpg"},
  {id:"lrp-vitamin-c",brand:"La Roche-Posay",name:"Vitamin C",price:6,category:"Skincare"},
  {id:"lrp-anti-d",brand:"La Roche-Posay",name:"Anti-D…",price:6,category:"Skincare"},

  // Dr Althea
  {id:"dr-althea-345-relief",brand:"Dr Althea",name:"345 Relief Cream",price:8,category:"Skincare",image:"whatsapp/dr-althea-345.jpg"},
  {id:"dr-althea-relief",brand:"Dr Althea",name:"Relief Cream",price:8,category:"Skincare",image:"whatsapp/dr-althea-345-cream.jpg"},
  {id:"dr-althea-vitamin-c",brand:"Dr Althea",name:"Vitamin C",price:8,category:"Skincare",image:"whatsapp/dr-althea-vitc.jpg"},

  // Seoul 1988
  {id:"seoul-1988-retinal-lip",brand:"Seoul 1988",name:"Retinal Lip…",price:8,category:"Skincare",image:"whatsapp/seoul-retinal.jpg"},
  {id:"seoul-1988-snail-mucin",brand:"Seoul 1988",name:"Snail Mucin",price:8,category:"Skincare",image:"whatsapp/seoul-snail.jpg"},
  {id:"seoul-1988-eye-cream",brand:"Seoul 1988",name:"Eye Cream",price:6,category:"Skincare",image:"whatsapp/seoul-eye.jpg"},

  // Body care
  {id:"sol-de-janeiro-body-butter",brand:"Sol De Janeiro",name:"Body Butter",price:10,category:"Body Care"},
  {id:"sol-de-janeiro-bum-bum",brand:"Sol De Janeiro",name:"Bum Bum",price:10,category:"Body Care"},
  {id:"eos-vanilla-cashmere",brand:"Eos",name:"Vanilla Cashmere",price:10,category:"Body Care"},
  {id:"eos-body-wash",brand:"Eos",name:"Body Wash",price:9,category:"Body Care",image:"eos-bodywash.jpg"},
  {id:"bio-oil",brand:"Bio Oil",name:"Bio Oil",price:8,category:"Body Care",image:"bio-oil.jpg"},
  {id:"sudocrem",brand:"Sudocrem",name:"Sudo Cream",price:6,category:"Body Care",image:"whatsapp/sudocrem.jpg"},
  {id:"amlactin-daily-vitamin",brand:"Amlactin",name:"Daily Vitamin…",price:6,category:"Body Care",image:"whatsapp/amlactin-vitc.jpg"},

  // Other skincare
  {id:"cosrx-advanced-snail",brand:"Cosrx",name:"Advanced Snail",price:8,category:"Skincare",image:"cosrx-snail.jpg"},
  {id:"cosrx-advanced-snail-96",brand:"Cosrx",name:"Advanced Snail 96",price:8,category:"Skincare",image:"whatsapp/cosrx-snail-essence.jpg"},
  {id:"azelaic-acid-15",brand:"Skincare",name:"15% Azelaic Acid",price:8,category:"Skincare",image:"whatsapp/azelaic-15.jpg"},
  {id:"celimax-retinal-shot",brand:"Celimax",name:"Celimax Retinal Shot",price:8,category:"Skincare",image:"whatsapp/cellimax-retinal.jpg"},
  {id:"arencia-vitamin-c",brand:"Arencia",name:"Vitamin C",price:8,category:"Skincare",image:"arencia-vitc.jpg"},
  {id:"tretinoin-gel",brand:"Tretinoin",name:"Tretinoin Gel 0.1%",price:8,category:"Skincare",image:"tretinoin.jpg"},
  {id:"centella-ampoule",brand:"Centella",name:"Centella Ampoule",price:8,category:"Skincare",image:"centella.jpg"},
  {id:"centella-capsule-ampoule",brand:"Centella",name:"Centella Capsule Ampoule",price:8,category:"Skincare",image:"centella.jpg"},
  {id:"heartleaf-succinic",brand:"HeartLeaf",name:"HeartLeaf + Succinic",price:7,category:"Skincare",image:"anua-heartleaf.jpg"},
  {id:"pro-xylane-active",brand:"Pro-Xylane",name:"Pro-xylane Active Anti-Wrinkle",price:6,category:"Skincare"},
  {id:"simple-glow-facial-wash",brand:"Simple",name:"Simple Glow Facial Wash",price:6,category:"Skincare",image:"simple-glow.jpg"},
  {id:"skin-tint",brand:"Beauty",name:"Skin Tint",price:6,category:"Makeup"},
  {id:"bee-venom-pain-relief",brand:"Bee Venom",name:"Bee Venom Pain Relief",price:6,category:"Body Care",image:"whatsapp/bee-venom.jpg"},
  {id:"kojie-san-soap",brand:"Kojie San",name:"Kojie San Soap",price:2.5,category:"Body Care",image:"kojie-san.jpg"},
  {id:"assorted-serums",brand:"Nyarie Glow Cosmetics Wholesale",name:"Assorted serums",price:2,category:"Skincare"},

  // Wellness / other
  {id:"ashwagandha-gummies",brand:"Wellness",name:"Ashwagandha Gummies",price:8,category:"Wellness",image:"collagen-gummies.jpg"},
  {id:"collagen-gummies",brand:"Wellness",name:"Collagen Gummies",price:8,category:"Wellness",image:"collagen-gummies.jpg"},
  {id:"womens-prebiotic-gummies",brand:"Wellness",name:"Women’s Prebiotic Gummies",price:8,category:"Wellness",image:"probiotic-gummies.jpg"},
  {id:"maca-plus-extreme",brand:"Wellness",name:"Maca Plus Extreme Cur…",price:8,category:"Wellness",image:"maca.jpg"},
  {id:"photochromic-glasses",brand:"Accessories",name:"Photochromic glasses",price:8,category:"Accessories"},
  {id:"girls-suit-3-piece",brand:"Nyarie Glow Cosmetics Wholesale",name:"3-piece girls suit",price:25,category:"Fashion"},
];

const imageFor = (p) => p.image ? A + p.image : null;

const normalize = (value) => value.toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();

const searchable = (p) => normalize([p.brand,p.name,p.category].filter(Boolean).join(" "));

function scoreProduct(p, q) {
  if (!q) return 0;
  const needle = normalize(q);
  const name = normalize(p.name);
  const brand = normalize(p.brand);
  const hay = searchable(p);
  if (name === needle) return 1000;
  if ((brand + " " + name).includes(needle)) return 800;
  if (name.startsWith(needle)) return 700;
  if (name.includes(needle)) return 600;
  if (brand.includes(needle)) return 500;
  if (hay.includes(needle)) return 350;

  // Small typo tolerance for search terms.
  const terms = needle.split(" ").filter(Boolean);
  const tokens = hay.split(" ");
  let matched = 0;
  for (const term of terms) {
    if (tokens.some(t => t.startsWith(term) || levenshtein(t,term) <= (term.length >= 6 ? 2 : 1))) matched++;
  }
  return matched === terms.length ? 200 : 0;
}

function levenshtein(a,b) {
  const dp = Array.from({length:b.length+1},(_,i)=>i);
  for (let i=1;i<=a.length;i++) {
    let prev=dp[0]; dp[0]=i;
    for (let j=1;j<=b.length;j++) {
      const cur=dp[j];
      dp[j]=Math.min(dp[j]+1,dp[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));
      prev=cur;
    }
  }
  return dp[b.length];
}

function ProductImage({p}) {
  const [failed,setFailed]=useState(false);
  const src=imageFor(p);
  if (!src || failed) return <div className="noImage"><span>Image not supplied</span></div>;
  return <img src={src} alt={`${p.brand} ${p.name}`} loading="lazy" decoding="async" onError={()=>setFailed(true)}/>;
}

function ProductCard({p,onAdd}) {
  return <article className="product">
    <div className="productImage"><ProductImage p={p}/></div>
    <div className="productBody">
      <span className="productCat">{p.brand} · {p.category}</span>
      <h3>{p.name}</h3>
      <div className="productBottom"><strong>${p.price.toFixed(2)}</strong><button className="addBtn" onClick={()=>onAdd(p)}>+ Add</button></div>
    </div>
  </article>;
}

function App() {
  const [category,setCategory]=useState("All");
  const [query,setQuery]=useState("");
  const [cart,setCart]=useState([]);
  const [cartOpen,setCartOpen]=useState(false);

  const addToCart = (product) => {
    setCart(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) return current.map(item => item.id === product.id ? {...item,qty:item.qty+1} : item);
      return [...current,{...product,qty:1}];
    });
    setCartOpen(true);
  };

  const changeQty = (id, delta) => {
    setCart(current => current.map(item => item.id === id ? {...item,qty:item.qty+delta} : item).filter(item => item.qty > 0));
  };

  const removeFromCart = (id) => setCart(current => current.filter(item => item.id !== id));
  const cartCount = cart.reduce((sum,item)=>sum+item.qty,0);
  const cartTotal = cart.reduce((sum,item)=>sum+(item.price*item.qty),0);

  const checkoutOnWhatsApp = () => {
    if (!cart.length) return;
    const lines = cart.map(item => `• ${item.name} — ${item.qty} × $${item.price.toFixed(2)} = $${(item.price*item.qty).toFixed(2)}`);
    const message = [
      `Hello ${BRAND},`,
      `\nI would like to enquire/order for the following products:`,
      ...lines,
      `\nTotal catalogue value: $${cartTotal.toFixed(2)}`,
      `\nPlease confirm availability and ordering details.`
    ].join("\n");
    if (WHATSAPP_NUMBER.includes("REPLACE_WITH")) {
      alert("The business WhatsApp number still needs to be added to the website.");
      return;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  };
  const categories=["All","Skincare","Body Care","Sun Care","Hair Care","Makeup","Wellness","Accessories","Fashion"];

  const filtered=useMemo(() => {
    return products
      .filter(p => category==="All" || p.category===category)
      .map(p => ({p,score:scoreProduct(p,query)}))
      .filter(x => !query || x.score>0)
      .sort((a,b)=>b.score-a.score || a.p.brand.localeCompare(b.p.brand) || a.p.name.localeCompare(b.p.name))
      .map(x=>x.p);
  },[category,query]);

  const brands=[...new Set(products.map(p=>p.brand))].length;
  const imageCount=products.filter(p=>p.image).length;

  return <div>
    <div className="top"><span>Beauty · Cosmetics · Self-Care</span><span>{products.length} catalogue listings · {brands} brands</span></div>
    <header>
      <a className="brand" href="#"><i>✦</i><strong>NYARIE GLOW<small>COSMETICS WHOLESALE</small></strong></a>
      <nav><a href="#categories">Categories</a><a href="#products">Catalogue</a><a href="#contact">Contact</a></nav>
      <div className="icons"><a href="#search" aria-label="Search">⌕</a><button className="cartButton" onClick={()=>setCartOpen(true)} aria-label="Open cart">🛒<span>{cartCount}</span></button><button aria-label="Menu">☰</button></div>
    </header>

    <main>
      <section className="hero">
        <img src={A+"whatsapp/vaseline-vitc-body-oil.jpg"} alt="Nyarie Glow Cosmetics Wholesale products" loading="eager" fetchPriority="high"/>
        <div className="heroOverlay"></div>
        <div className="heroCopy"><p className="eyebrow">CURRENT WHOLESALE CATALOGUE</p><h1>Glow<br/>Confidently<br/><em>Every Day</em></h1><p>Explore skincare, body care, sun care, wellness and more from the supplied wholesale catalogue.</p><a className="btn" href="#products">VIEW CATALOGUE →</a></div>
      </section>

      <section className="trust">
        <span>✦<b>Catalogue-led</b><small>Products and prices follow the supplied list</small></span>
        <span>♕<b>Clear pricing</b><small>USD prices shown on every listing</small></span>
        <span>♡<b>Easy enquiries</b><small>Ask about availability before ordering</small></span>
        <span>⌂<b>Wholesale</b><small>Contact the business for order details</small></span>
      </section>

      <section id="categories" className="section">
        <div className="heading"><div><p className="eyebrow rose">SHOP BY CATEGORY</p><h2>Find what you need faster.</h2><p>Use a category or search the catalogue directly.</p></div></div>
        <div className="cats">
          {[
            ["Skincare","cerave-vitc.jpg"],["Body Care","garnier-sakura.jpg"],["Sun Care","lrp-anthelios.jpg"],["Wellness","collagen-gummies.jpg"]
          ].map(([label,img])=><button key={label} className="cat" onClick={()=>{setCategory(label);document.querySelector("#products")?.scrollIntoView({behavior:"smooth"})}}>
            <img src={A+img} alt={label}/><span>{label}</span><b>→</b>
          </button>)}
        </div>
      </section>

      <section id="products" className="section productsSection">
        <div className="heading"><div><p className="eyebrow rose">MASTER CATALOGUE</p><h2>Real products. Clear prices.</h2><p>{filtered.length} listing{filtered.length===1?"":"s"} shown · image coverage {imageCount}/{products.length}</p></div></div>
        <div id="search" className="catalogControls">
          <div className="filters">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
          <div className="searchWrap"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search product, brand or category…" aria-label="Search the catalogue"/></div>
        </div>
        {query && filtered.length===0 && <div className="noResults"><strong>No catalogue match found.</strong><span>Try a product name, brand, or shorter spelling.</span><button onClick={()=>setQuery("")}>Clear search</button></div>}
        <div className="products">{filtered.map(p=><ProductCard key={p.id} p={p} onAdd={addToCart}/>)}</div>
      </section>

      <section className="banner"><img src={A+"whatsapp/axis-dark-serum.jpg"} alt="Skincare collection" loading="lazy"/><div><p className="eyebrow rose">SKINCARE COLLECTION</p><h2>Search the catalogue instead of scrolling.</h2><p>Type a product or brand above to jump directly to matching catalogue listings.</p><a className="btn" href="#search">SEARCH CATALOGUE →</a></div></section>

      <section className="feature dark"><div><p className="eyebrow rose">CATALOGUE FIRST</p><h2>See something you like?</h2><p>Send the product name when enquiring. Availability, variants and collection details can be confirmed directly by the business.</p><a className="btn" href="#contact">ASK ABOUT A PRODUCT →</a></div><img src={A+"whatsapp/simple-glow.jpg"} alt="Beauty care" loading="lazy"/></section>

      <section id="contact" className="contact"><div><p className="eyebrow rose">CONTACT NYARIE GLOW COSMETICS WHOLESALE</p><h2>Ready to find your product?</h2><p>Send the product name or screenshot when asking about availability, variants and collection details.</p><p><b>WhatsApp:</b> Use the WhatsApp button to send an enquiry or your cart.</p></div><div className="map"><div className="pin">●</div><strong>{BRAND}</strong><span>Wholesale catalogue · Contact details to be confirmed</span></div></section>
    </main>

    <footer><div className="brand footerBrand"><i>✦</i><strong>NYARIE GLOW<small>COSMETICS WHOLESALE</small></strong></div><p>Skincare · Body Care · Sun Care · Wellness</p><p>© 2026 {BRAND}</p></footer>
    <button className="wa" onClick={()=>window.open(`https://wa.me/${WHATSAPP_NUMBER}`,"_blank","noopener,noreferrer")} aria-label="Open WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.05.02C5.5.02.17 5.35.17 11.91c0 2.1.55 4.15 1.59 5.96L.06 23.94l6.2-1.63a11.9 11.9 0 0 0 5.79 1.49h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.23-6.14-3.45-8.41ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.87 9.87 0 1 1 8.32 4.58Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg></button>
    {cartOpen && <div className="cartBackdrop" onClick={()=>setCartOpen(false)}></div>}
    <aside className={`cartDrawer ${cartOpen?"open":""}`} aria-label="Shopping cart">
      <div className="cartHeader"><div><p className="eyebrow rose">YOUR ORDER</p><h2>Cart <span>({cartCount})</span></h2></div><button className="closeCart" onClick={()=>setCartOpen(false)} aria-label="Close cart">×</button></div>
      {cart.length===0 ? <div className="emptyCart"><div className="emptyIcon">🛒</div><strong>Your cart is empty</strong><span>Add products from the catalogue and they will appear here.</span><button className="btn" onClick={()=>{setCartOpen(false);document.querySelector("#products")?.scrollIntoView({behavior:"smooth"})}}>BROWSE CATALOGUE</button></div> : <>
        <div className="cartItems">{cart.map(item=><div className="cartItem" key={item.id}><div className="cartThumb">{imageFor(item)?<img src={imageFor(item)} alt=""/>:<span>—</span>}</div><div className="cartInfo"><strong>{item.name}</strong><small>{item.brand} · ${item.price.toFixed(2)} each</small><div className="qty"><button onClick={()=>changeQty(item.id,-1)} aria-label="Decrease quantity">−</button><b>{item.qty}</b><button onClick={()=>changeQty(item.id,1)} aria-label="Increase quantity">+</button><button className="remove" onClick={()=>removeFromCart(item.id)}>Remove</button></div></div><strong className="lineTotal">${(item.price*item.qty).toFixed(2)}</strong></div>)}</div>
        <div className="cartFooter"><div><span>Catalogue total</span><strong>${cartTotal.toFixed(2)}</strong></div><p>Prices are taken directly from the catalogue. Availability is confirmed by WhatsApp.</p><button className="checkoutBtn" onClick={checkoutOnWhatsApp}>CHECKOUT VIA WHATSAPP →</button></div>
      </>}
    </aside>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
