import React, {useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const A="/products/";

const products=[
 {id:'a-ret-acne',name:'A-Ret Acne Treatment',price:8,category:'Skincare',image:'whatsapp/a-ret-acne.jpg'},
 {id:'sudocrem',name:'Sudocrem Healing Cream',price:6,category:'Skincare',image:'whatsapp/sudocrem.jpg'},
 {id:'seoul-eye',name:'K-SECRET Seoul 1988 Eye Cream',price:6,category:'Skincare',image:'whatsapp/seoul-eye.jpg'},
 {id:'centella-ampoule',name:'SKIN1004 Madagascar Centella Ampoule',price:8,category:'Skincare',image:'whatsapp/centella-ampoule.jpg'},
 {id:'garnier-vitc-booster',name:'Garnier Bright Complete Vitamin C Booster',price:6,category:'Skincare',image:'whatsapp/garnier-vitc-booster.jpg'},
 {id:'womens-probiotic',name:'Women’s Probiotic Gummies',price:8,category:'Wellness',image:'whatsapp/womens-probiotic.jpg'},
 {id:'maca-plus',name:'Maca Plus Supplement',price:8,category:'Wellness',image:'whatsapp/maca-plus.jpg'},
 {id:'collagen-gummies',name:'Collagen Gummies',price:8,category:'Wellness',image:'whatsapp/collagen-gummies.jpg'},
 {id:'ashwagandha-gummies',name:'Ashwagandha Gummies',price:8,category:'Wellness',image:'whatsapp/ashwagandha-gummies.jpg'},
 {id:'arencia-vitc',name:'Arencia Vitamin C Booster Shot',price:6,category:'Skincare',image:'whatsapp/arencia-vitc.jpg'},
 {id:'axis-dark-serum',name:'AXIS-Y Dark Spot Correcting Glow Serum',price:8,category:'Skincare',image:'whatsapp/axis-dark-serum.jpg'},
 {id:'tosowoong-arbutin',name:'Tosowoong Arbutin 7.0 + Tranexamic Acid 4.0 Cream',price:7,category:'Skincare',image:'whatsapp/tosowoong-arbutin.jpg'},
 {id:'azelaic-15',name:'15% Azelaic Acid',price:8,category:'Skincare',image:'whatsapp/azelaic-15.jpg'},
 {id:'txa-serum',name:'TXA Serum',price:8,category:'Skincare',image:'whatsapp/txa-serum.jpg'},
 {id:'centella-set',name:'SKIN1004 Madagascar Centella Product',price:6,category:'Skincare',image:'whatsapp/centella-set.jpg'},
 {id:'garnier-vitc-range',name:'Garnier Bright Complete Vitamin C Range',price:8,category:'Skincare',image:'whatsapp/garnier-vitc-range.jpg'},
 {id:'simple-glow',name:'Simple Glow Facial Wash',price:6,category:'Skincare',image:'whatsapp/simple-glow.jpg'},
 {id:'dr-althea-vitc',name:'Dr.Althea Vitamin C Boosting Serum 63%',price:8,category:'Skincare',image:'whatsapp/dr-althea-vitc.jpg'},
 {id:'garnier-antiacne',name:'Garnier Bright Anti-Acne Booster Serum',price:8,category:'Skincare',image:'whatsapp/garnier-antiacne.jpg'},
 {id:'seoul-retinal',name:'K-SECRET Seoul 1988 Cream: Retinal Liposome + Fermented Rice',price:20,category:'Skincare',image:'whatsapp/seoul-retinal.jpg'},
 {id:'seoul-snail',name:'K-SECRET Seoul 1988 Cream: Snail Mucin 93% + Rice',price:8,category:'Skincare',image:'whatsapp/seoul-snail.jpg'},
 {id:'ordinary-azelaic',name:'The Ordinary Azelaic Acid Suspension 10%',price:6,category:'Skincare',image:'whatsapp/ordinary-azelaic.jpg'},
 {id:'axis-dark-collection',name:'AXIS-Y Dark Spot Correcting Glow Collection',price:6,category:'Skincare',image:'whatsapp/axis-dark-collection.jpg'},
 {id:'dr-althea-345',name:'Dr.Althea 345 Relief Cream',price:7,category:'Skincare',image:'whatsapp/dr-althea-345.jpg'},
 {id:'amlactin-vitc',name:'AmLactin Daily Vitamin C Lotion',price:6,category:'Body Care',image:'whatsapp/amlactin-vitc.jpg'},
 {id:'axis-dark-cream',name:'AXIS-Y Dark Spot Correcting Glow Cream',price:5,category:'Skincare',image:'whatsapp/axis-dark-cream.jpg'},
 {id:'vaseline-glutahya-red',name:'Vaseline Healthy Bright Gluta-Hya Pro-Age Restore',price:7,category:'Body Care',image:'whatsapp/vaseline-glutahya-red.jpg'},
 {id:'vaseline-brightening',name:'Vaseline Healthy Bright Daily Brightening Lotion',price:6,category:'Body Care',image:'whatsapp/vaseline-brightening.jpg'},
 {id:'axis-dark-toner',name:'AXIS-Y Dark Spot Correcting Glow Toner',price:6,category:'Skincare',image:'whatsapp/axis-dark-toner.jpg'},
 {id:'vaseline-glutahya-blue',name:'Vaseline Gluta-Hya 1+1 Pack',price:6,category:'Body Care',image:'whatsapp/vaseline-glutahya-blue.jpg'},
 {id:'vaseline-glutahya-10x',name:'Vaseline Gluta-Hya 10X 1+1 Pack',price:6,category:'Body Care',image:'whatsapp/vaseline-glutahya-10x.jpg'},
 {id:'vaseline-glutahya-gold',name:'Vaseline Gluta-Hya Flawless Glow 1+1 Pack',price:10,category:'Body Care',image:'whatsapp/vaseline-glutahya-gold.jpg'},
 {id:'garnier-sakura',name:'Garnier Sakura White Body Lotion',price:6,category:'Body Care',image:'whatsapp/garnier-sakura.jpg'},
 {id:'kojie-san-box',name:'Kojie San Skin Lightening Soap Box',price:8,category:'Body Care',image:'whatsapp/kojie-san-box.jpg'},
 {id:'tosowoong-arbutin-txa',name:'Tosowoong Arbutin 7.0 + Tranexamic Acid 4.0 Cream 50ml',price:8,category:'Skincare',image:'whatsapp/tosowoong-arbutin-txa.jpg'},
 {id:'vaseline-spf-pack',name:'Vaseline SPF 50 1+1 Pack',price:7,category:'Sun Care',image:'whatsapp/vaseline-spf-pack.jpg'},
 {id:'cosrx-snail-essence',name:'COSRX Advanced Snail 96 Mucin Power Essence',price:6,category:'Skincare',image:'whatsapp/cosrx-snail-essence.jpg'},
 {id:'cosrx-snail-cream',name:'COSRX Advanced Snail 92 All In One Cream',price:6,category:'Skincare',image:'whatsapp/cosrx-snail-cream.jpg'},
 {id:'arencia-vitc-shot',name:'Arencia Vitamin C Booster Shot',price:6,category:'Skincare',image:'whatsapp/arencia-vitc-shot.jpg'},
 {id:'vaseline-vitc-body-oil',name:'Vaseline Intensive Care Vitamin Body Oil',price:8,category:'Body Care',image:'whatsapp/vaseline-vitc-body-oil.jpg'},
 {id:'cerave-hydrating-cleanser',name:'CeraVe Hydrating Cleanser',price:8,category:'Skincare',image:'whatsapp/cerave-hydrating-cleanser.jpg'},
 {id:'bee-venom',name:'Bee Venom Pain Relief',price:6,category:'Body Care',image:'whatsapp/bee-venom.jpg'},
 {id:'dr-althea-345-cream',name:'Dr.Althea 345 Relief Cream',price:6,category:'Skincare',image:'whatsapp/dr-althea-345-cream.jpg'},
 {id:'lrp-anthelios-uvmune',name:'La Roche-Posay Anthelios UVMune 400 SPF 50+',price:8,category:'Sun Care',image:'whatsapp/lrp-anthelios-uvmune.jpg'},
 {id:'lrp-anthelios-stock',name:'La Roche-Posay Anthelios SPF 50+',price:10,category:'Sun Care',image:'whatsapp/lrp-anthelios-stock.jpg'},
 {id:'cellimax-retinal',name:'Cellimax Retinal Shot',price:7,category:'Skincare',image:'whatsapp/cellimax-retinal.jpg'},
 {id:'cosrx-snail-power',name:'COSRX Advanced Snail 96% Snail Mucin Power Essence',price:7,category:'Skincare',image:'whatsapp/cosrx-snail-power.jpg'},
 {id:'cosrx-snail-power-cream',name:'COSRX Advanced Snail 92% Snail Mucin Power Cream',price:8,category:'Skincare',image:'whatsapp/cosrx-snail-power-cream.jpg'},
 {id:'lrp-oil-control',name:'La Roche-Posay Anthelios UVMune 400 Oil Control SPF 50+',price:9,category:'Sun Care',image:'whatsapp/lrp-oil-control.jpg'},
 {id:'cerave-vitc',name:'CeraVe Skin Brightening Vitamin C Serum',price:6,category:'Skincare',image:'whatsapp/cerave-vitc.jpg'},
 {id:'cerave-oil-control',name:'CeraVe Oil Control Moisturizing Gel-Cream',price:8,category:'Skincare',image:'whatsapp/cerave-oil-control.jpg'},
 {id:'cerave-itch',name:'CeraVe Itch Relief Moisturizing Lotion',price:6,category:'Body Care',image:'whatsapp/cerave-itch.jpg'},
 {id:'cerave-ha',name:'CeraVe Hydrating Hyaluronic Acid Serum',price:6,category:'Skincare',image:'whatsapp/cerave-ha.jpg'},
 {id:'cerave-retinol',name:'CeraVe Skin Renewing Retinol Serum',price:8,category:'Skincare',image:'whatsapp/cerave-retinol.jpg'},
 {id:'cerave-am',name:'CeraVe AM Facial Moisturizing Lotion SPF 30',price:8,category:'Sun Care',image:'whatsapp/cerave-am.jpg'},
 {id:'cerave-foaming-oil',name:'CeraVe Hydrating Foaming Oil Cleanser',price:6,category:'Skincare',image:'whatsapp/cerave-foaming-oil.jpg'},
 {id:'tosowoong-txa',name:'Tosowoong TXA 2.5% Intensive Brightening Cream',price:8,category:'Skincare',image:'whatsapp/tosowoong-txa.jpg'},
 {id:'kojie-san-single',name:'Kojie San Skin Lightening Soap',price:2.5,category:'Body Care',image:'whatsapp/kojie-san-single.jpg'},
 {id:'azelaic-15-second',name:'15% Azelaic Acid',price:8,category:'Skincare',image:'whatsapp/azelaic-15-second.jpg'},
 {id:'cerave-acne',name:'CeraVe Acne Control Cleanser',price:6,category:'Skincare',image:'whatsapp/cerave-acne.jpg'},
]

const images={
 hero:A+"whatsapp/vaseline-vitc-body-oil.jpg",
 categorySkincare:A+"whatsapp/cerave-vitc.jpg",
 categoryBody:A+"whatsapp/garnier-sakura.jpg",
 categorySun:A+"whatsapp/lrp-anthelios-uvmune.jpg",
 categorySerums:A+"whatsapp/axis-dark-serum.jpg",
 categoryWellness:A+"whatsapp/collagen-gummies.jpg",
 categoryCare:A+"whatsapp/simple-glow.jpg"
};

function ProductCard({p}){
 return <article className="product">
  <div className="productImage"><img src={A+p.image} alt={p.name}/></div>
  <div className="productBody"><span className="productCat">{p.category}</span><h3>{p.name}</h3><div className="productBottom"><strong>${p.price.toFixed(2)}</strong><a href="#contact">Enquire →</a></div></div>
 </article>
}

function App(){
 const [category,setCategory]=useState("All");
 const [query,setQuery]=useState("");
 const categories=["All","Skincare","Body Care","Sun Care","Makeup","Accessories","Wellness"];
 const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())),[category,query]);
 return <div>
  <div className="top"><span>Beauty • Cosmetics • Self-Care</span><span>60 products • Current catalogue</span></div>
  <header><a className="brand" href="#"><i>♕</i><strong>GLOW<small>COSMETICS</small></strong></a><nav><a href="#categories">Categories</a><a href="#products">Catalogue</a><a href="#contact">Contact</a></nav><div className="icons"><button aria-label="Search">⌕</button><button aria-label="Menu">☰</button></div></header>
  <main>
   <section className="hero"><img src={images.hero} alt="Beauty products" loading="eager" fetchPriority="high" decoding="async"/><div className="heroOverlay"></div><div className="heroCopy"><p className="eyebrow">REAL PRODUCTS • REAL CATALOGUE</p><h1>Glow<br/>Confidently<br/><em>Every Day</em></h1><p>Shop skincare, body care, sun care and beauty essentials from the current catalogue from Glow Cosmetics.</p><a className="btn" href="#products">VIEW CATALOGUE →</a></div></section>

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

   <section className="banner"><img src={images.categorySerums} alt="Skincare serum"/><div><p className="eyebrow rose">SKINCARE COLLECTION</p><h2>Build a routine that fits you.</h2><p>Find serums, cleansers, moisturisers and targeted skincare in the current catalogue from Glow Cosmetics.</p><a className="btn" href="#products">SHOP SKINCARE →</a></div></section>

   <section className="feature dark"><div><p className="eyebrow rose">REAL CATALOGUE</p><h2>See something you like?</h2><p>Products and prices are based on the catalogue supplied by Glow Cosmetics. Please confirm availability before ordering.</p><a className="btn" href="#contact">ASK ABOUT A PRODUCT →</a></div><img src={images.categoryCare} alt="Beauty care products"/></section>

   <section id="contact" className="contact"><div><p className="eyebrow rose">CONTACT GLOW COSMETICS</p><h2>Ready to find your product?</h2><p>Send the product name or screenshot and ask about availability, variants and collection details.</p><p><b>WhatsApp:</b> Contact details to be confirmed</p><a className="btn roseBtn" href="#contact">CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>Glow Cosmetics</strong><span>Store Contact details to be confirmed</span></div></section>
  </main>
  <footer><div className="brand footerBrand"><i>♕</i><strong>GLOW<small>COSMETICS</small></strong></div><p>Skincare • Body Care • Sun Care • Beauty</p><p>© 2026 Glow Cosmetics</p></footer>
  <a className="wa" href="#contact" aria-label="WhatsApp contact">⌕</a>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
