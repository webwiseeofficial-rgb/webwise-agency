var NAV=[["index","Accueil","الرئيسية"],["services","Services","الخدمات"],["methode","Méthode","منهجيتنا"],["a-propos","À propos","من نحن"],["contact","Contact","اتصل بنا"]];
var PAGE=document.body.dataset.page,WA="213774129401";
var FR='<svg viewBox="0 0 30 20"><rect width="10" height="20" fill="#0055a4"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ef4135"/></svg>';
var DZ='<svg viewBox="0 0 30 20"><rect width="15" height="20" fill="#006233"/><rect x="15" width="15" height="20" fill="#fff"/><circle cx="15" cy="10" r="5" fill="#d21034"/><circle cx="16.4" cy="10" r="4.1" fill="#fff"/><polygon fill="#d21034" points="17.2,7.8 17.73,9.27 19.29,9.32 18.06,10.28 18.49,11.78 17.2,10.9 15.91,11.78 16.34,10.28 15.11,9.32 16.67,9.27"/></svg>';
var links=NAV.map(function(n){return '<a href="'+(n[0]=="index"?"/":n[0])+'"'+(n[0]==PAGE?' class="on" aria-current="page"':'')+' data-ar="'+n[2]+'">'+n[1]+'</a>'}).join("");
document.getElementById("hd").innerHTML='<div class="wrap nav"><a class="brand" href="/">WEB<span>WISE</span></a><nav class="menu" id="menu" aria-label="Menu">'+links+'</nav><div class="tools"><div class="flags" role="group" aria-label="Langue / اللغة"><button id="btn-ar" aria-label="العربية" aria-pressed="false">'+DZ+'</button><button id="btn-fr" aria-label="Français" aria-pressed="true">'+FR+'</button></div><button class="burger" id="burger" aria-label="Menu" aria-expanded="false">☰</button></div></div>';
document.getElementById("ft").innerHTML='<div class="wrap"><div class="fgrid"><div><a class="brand" href="/" style="color:#fff;display:inline-block">WEB<span>WISE</span></a><p data-ar="وكالة ويب جزائرية متخصصة في المواقع التعريفية والمتاجر الإلكترونية.">Agence web algérienne spécialisée dans les sites vitrines et les boutiques e-commerce.</p></div><div><h4 data-ar="التصفح">Navigation</h4>'+links.replace(/ class="on" aria-current="page"/,"")+'</div><div><h4 data-ar="تواصل معنا">Nous contacter</h4><a class="ltr" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp 0774 12 94 01</a><a href="https://m.me/61557537533407" target="_blank" rel="noopener">Messenger</a><span data-ar="الجزائر">Algérie</span></div></div><div class="copy">© <span id="y"></span> WebWise. <span data-ar="جميع الحقوق محفوظة.">Tous droits réservés.</span></div></div>';
document.getElementById("y").textContent=new Date().getFullYear();
document.getElementById("burger").onclick=function(){var m=document.getElementById("menu"),o=m.classList.toggle("open");this.setAttribute("aria-expanded",o)};
document.querySelectorAll("[data-m]").forEach(function(a){a.href="https://m.me/61557537533407";a.target="_blank";a.rel="noopener"});
var els=document.querySelectorAll("[data-ar]"),phs=document.querySelectorAll("[data-ph-ar]");
els.forEach(function(e){e.dataset.fr=e.innerHTML});phs.forEach(function(e){e.dataset.phFr=e.placeholder});
function setLang(l){var h=document.documentElement,a=l==="ar";h.lang=l;h.dir=a?"rtl":"ltr";
els.forEach(function(e){e.innerHTML=a?e.dataset.ar:e.dataset.fr});
phs.forEach(function(e){e.placeholder=a?e.dataset.phAr:e.dataset.phFr});
document.getElementById("btn-ar").setAttribute("aria-pressed",a);document.getElementById("btn-fr").setAttribute("aria-pressed",!a);
try{localStorage.setItem("lang",l)}catch(e){}}
document.getElementById("btn-ar").onclick=function(){setLang("ar")};
document.getElementById("btn-fr").onclick=function(){setLang("fr")};
var s="fr";try{s=localStorage.getItem("lang")||"fr"}catch(e){}
if(s==="ar")setLang("ar");
var f=document.getElementById("cf");
if(f)f.onsubmit=function(ev){ev.preventDefault();var ar=document.documentElement.lang==="ar",d=new FormData(f),
t=(ar?"مرحباً WebWise،\nالاسم: ":"Bonjour WebWise,\nNom : ")+d.get("n")+"\n"+(ar?"الهاتف: ":"Téléphone : ")+d.get("p")+"\n"+(ar?"المشروع: ":"Projet : ")+d.get("t")+"\n"+(ar?"الرسالة: ":"Message : ")+d.get("m");
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank","noopener")};
