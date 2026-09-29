import React, {useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const A="/products/";

const products=[
 {id:"anua-vit",name:"Anua Daily Vitamin",price:4,category:"Skincare",image:"anua-heartleaf.jpg",exact:false},
 {id:"seoul-retinal",name:"Seoul 1988 Retinal Liposome",price:8,category:"Skincare",image:"ksecret-retinal.jpg",exact:true},
 {id:"axis-dark",name:"AXIS-Y Dark Spot Correcting Glow Serum",price:8,category:"Skincare",image:"axis-dark.jpg",exact:false},
 {id:"gluta-overnight",name:"Gluta-Ha Overnight",price:8,category:"Body Care",image:"vaseline-glutahya-2.jpg",exact:false},
 {id:"cerave-am",name:"CeraVe AM Facial Moisturizing Lotion SPF 30",price:8,category:"Skincare",image:"cerave-am.jpg",exact:true},
 {id:"skin-tint",name:"Skin Tint",price:8,category:"Makeup",image:"cerave-vitc.jpg",exact:false},
 {id:"lrp-vit",name:"La Roche-Posay Vitamin Care",price:8,category:"Sun Care",image:"lrp-anthelios.jpg",exact:false},
 {id:"vaseline-spf",name:"Vaseline SPF 50",price:4,category:"Sun Care",image:"vaseline-spf50.jpg",exact:true},
 {id:"cerave-renewing",name:"CeraVe Skin Renewing",price:6,category:"Skincare",image:"cerave-retinol-trio.jpg",exact:true},
 {id:"assorted-serums",name:"Assorted Serums",price:7,category:"Skincare",image:"medicube-txa.jpg",exact:false},
 {id:"vaseline-bright",name:"Vaseline Daily Brightening",price:4,category:"Body Care",image:"vaseline-glutahya.jpg",exact:false},
 {id:"lrp-vitamin",name:"La Roche-Posay Vitamin",price:6,category:"Sun Care",image:"lrp-anthelios.jpg",exact:false},
 {id:"cosrx-snail",name:"COSRX Advanced Snail",price:8,category:"Skincare",image:"cosrx-snail.jpg",exact:true},
 {id:"eos-body",name:"EOS Body Wash",price:8,category:"Body Care",image:"eos-bodywash.jpg",exact:true},
 {id:"photo-glasses",name:"Photochromic Glasses",price:8,category:"Accessories",image:"simple-glow.jpg",exact:false},
 {id:"ordinary-buffet",name:"The Ordinary Buffet",price:5,category:"Skincare",image:"medicube-txa.jpg",exact:false},
 {id:"lrp-antib",name:"La Roche-Posay Anti-Blemish",price:8,category:"Skincare",image:"lrp-anthelios.jpg",exact:false},
 {id:"cerave-acne",name:"CeraVe Blemish Control",price:8,category:"Skincare",image:"cerave-acne.jpg",exact:true},
 {id:"vaseline-dewy",name:"Vaseline Gluta-Hya Dewy",price:6,category:"Body Care",image:"vaseline-glutahya.jpg",exact:true},
 {id:"gluta-powder",name:"Gluta-Ha Smoothing Powder",price:8,category:"Body Care",image:"vaseline-glutahya-2.jpg",exact:false},
 {id:"seoul-eye",name:"Seoul Eye Cream",price:6,category:"Skincare",image:"seoul-eye.jpg",exact:true},
 {id:"cerave-rich",name:"CeraVe Rich Moisturising",price:7,category:"Skincare",image:"cerave-oil-control.jpg",exact:false},
 {id:"gluta-flawless",name:"Gluta-Ha Flawless Bright",price:8,category:"Body Care",image:"vaseline-glutahya.jpg",exact:true},
 {id:"anua-mask",name:"Anua Gel Mask",price:7,category:"Skincare",image:"anua-heartleaf.jpg",exact:false},
 {id:"axis-dark7",name:"AXIS-Y Dark Spot Correcting",price:7,category:"Skincare",image:"axis-dark.jpg",exact:false},
 {id:"bee-venom",name:"Bee Venom Pain Relief",price:6,category:"Body Care",image:"sudocrem.jpg",exact:false},
 {id:"centella-amp",name:"Centella Ampoule",price:8,category:"Skincare",image:"centella.jpg",exact:true},
 {id:"dr-althea-vitc",name:"Dr. Althea Vitamin C",price:8,category:"Skincare",image:"dr-althea-vitc.jpg",exact:true},
 {id:"cerave-foam",name:"CeraVe Hydrating Foaming Cleanser",price:8,category:"Skincare",image:"cerave-foaming-oil.jpg",exact:false},
 {id:"seoul-snail",name:"Seoul 1988 Snail Mucin",price:8,category:"Skincare",image:"ksecret-snail.jpg",exact:true},
 {id:"heartleaf-succinic",name:"HeartLeaf + Succinic",price:7,category:"Skincare",image:"anua-heartleaf.jpg",exact:false},
 {id:"ordinary-alpha",name:"The Ordinary Alpha Arbutin",price:7,category:"Skincare",image:"tosowoong-arbutin.jpg",exact:false},
 {id:"ordinary-niacin",name:"The Ordinary Niacinamide",price:7,category:"Skincare",image:"medicube-txa.jpg",exact:false},
 {id:"gluta-berry",name:"Gluta Berry Powder",price:8,category:"Wellness",image:"gluta-berry.jpg",exact:true},
 {id:"centella-capsule",name:"Centella Capsule Ampoule",price:8,category:"Skincare",image:"centella.jpg",exact:true},
 {id:"axis-txa",name:"AXIS-Y TXA Intensive Brightening",price:8,category:"Skincare",image:"axis-txa.jpg",exact:true},
 {id:"cerave-mineral",name:"CeraVe Hydrating Mineral",price:7,category:"Sun Care",image:"cerave-am.jpg",exact:false},
 {id:"vaseline-bio",name:"Vaseline Bio Oil",price:6,category:"Body Care",image:"bio-oil.jpg",exact:true},
 {id:"vaseline-cocoa",name:"Vaseline Cocoa Radiance",price:6,category:"Body Care",image:"garnier-body-trio.jpg",exact:false},
 {id:"kojie-san",name:"Kojie San Soap",price:2.5,category:"Body Care",image:"kojie-san.jpg",exact:true},
];

const images={
 hero:A+"garnier-body-trio.jpg",
 categorySkincare:A+"cerave-vitc.jpg",
 categoryBody:A+"garnier-sakura.jpg",
 categorySun:A+"lrp-anthelios.jpg",
 categorySerums:A+"medicube-txa.jpg",
 categoryWellness:A+"gluta-berry.jpg",
 categoryCare:A+"simple-glow.jpg"
};

function ProductCard({p}){
 return <article className="product">
  <div className="productImage"><img src={A+p.image} alt={p.name}/>{!p.exact&&<span className="imageNote">Representative image</span>}</div>
  <div className="productBody"><span className="productCat">{p.category}</span><h3>{p.name}</h3><div className="productBottom"><strong>${p.price.toFixed(2)}</strong><a href="#contact">Enquire →</a></div></div>
 </article>
}

function App(){
 const [category,setCategory]=useState("All");
 const [query,setQuery]=useState("");
 const categories=["All","Skincare","Body Care","Sun Care","Makeup","Accessories","Wellness"];
 const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())),[category,query]);
 return <div>
  <div className="top"><span>Beauty • Cosmetics • Self-Care</span><span>Real catalogue • Product images added</span></div>
  <header><a className="brand" href="#"><i>♕</i><strong>NIKKI<small>BEAUTY & COSMETICS</small></strong></a><nav><a href="#categories">Categories</a><a href="#products">Catalogue</a><a href="#contact">Contact</a></nav><div className="icons"><button aria-label="Search">⌕</button><button aria-label="Menu">☰</button></div></header>
  <main>
   <section className="hero"><img src={images.hero} alt="Beauty products" loading="eager" fetchPriority="high" decoding="async"/><div className="heroOverlay"></div><div className="heroCopy"><p className="eyebrow">REAL PRODUCTS • REAL CATALOGUE</p><h1>Glow<br/>Confidently<br/><em>Every Day</em></h1><p>Shop skincare, body care, sun care and beauty essentials from the current catalogue.</p><a className="btn" href="#products">VIEW CATALOGUE →</a></div></section>

   <section className="trust"><span>✦<b>Real Product Photos</b><small>From the supplied catalogue</small></span><span>♕<b>Current Prices</b><small>Catalogue pricing</small></span><span>♡<b>Easy Enquiries</b><small>Ask before ordering</small></span><span>⌂<b>Store Collection</b><small>Contact for details</small></span></section>

   <section id="categories" className="section"><div className="heading"><div><p className="eyebrow rose">SHOP BY CATEGORY</p><h2>Find your beauty essentials.</h2><p>Browse the current collection and filter by category.</p></div></div><div className="cats">
    <button className="cat" onClick={()=>setCategory("Skincare")}><img src={images.categorySkincare} alt="Skincare"/><span>Skincare</span><b>→</b></button>
    <button className="cat" onClick={()=>setCategory("Body Care")}><img src={images.categoryBody} alt="Body Care"/><span>Body Care</span><b>→</b></button>
    <button className="cat" onClick={()=>setCategory("Sun Care")}><img src={images.categorySun} alt="Sun Care"/><span>Sun Care</span><b>→</b></button>
    <button className="cat" onClick={()=>setCategory("Wellness")}><img src={images.categoryWellness} alt="Wellness"/><span>Wellness</span><b>→</b></button>
   </div></section>

   <section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow rose">CURRENT CATALOGUE</p><h2>Real products. Clear prices.</h2><p>{filtered.length} products shown. Tap enquire to ask about availability.</p></div></div>
    <div className="catalogControls"><div className="filters">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." aria-label="Search products"/></div>
    <div className="products">{filtered.map(p=><ProductCard key={p.id} p={p}/>)}</div>
   </section>

   <section className="banner"><img src={images.categorySerums} alt="Skincare serum"/><div><p className="eyebrow rose">SKINCARE COLLECTION</p><h2>Build a routine that fits you.</h2><p>Find serums, cleansers, moisturisers and targeted skincare in the current catalogue.</p><a className="btn" href="#products">SHOP SKINCARE →</a></div></section>

   <section className="feature dark"><div><p className="eyebrow rose">REAL CATALOGUE</p><h2>See something you like?</h2><p>Product images are being matched to the catalogue. For any item marked as a representative image, confirm the exact product photo before ordering.</p><a className="btn" href="#contact">ASK ABOUT A PRODUCT →</a></div><img src={images.categoryCare} alt="Beauty care products"/></section>

   <section id="contact" className="contact"><div><p className="eyebrow rose">CONTACT NIKKI</p><h2>Ready to find your product?</h2><p>Send the product name or screenshot and ask about availability, variants and collection details.</p><p><b>WhatsApp:</b> details to be confirmed</p><a className="btn roseBtn" href="#contact">CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>Nikki Beauty & Cosmetics</strong><span>Store details to be confirmed</span></div></section>
  </main>
  <footer><div className="brand footerBrand"><i>♕</i><strong>NIKKI<small>BEAUTY & COSMETICS</small></strong></div><p>Skincare • Body Care • Sun Care • Beauty</p><p>© 2026 Nikki Beauty & Cosmetics</p></footer>
  <a className="wa" href="#contact" aria-label="WhatsApp contact">⌕</a>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
