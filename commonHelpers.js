import{a as p,S as g,K as h,I as b}from"./assets/vendor-ad4c6880.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){p.init({delay:200,duration:1e3,easing:"ease-in-out"})});document.body.addEventListener("click",e=>{const{target:o}=e;if(o.classList.contains("js-anchor")){e.preventDefault(),d(o);return}const c=o.closest(".js-anchor");c&&(e.preventDefault(),d(c))});function d(e){const o=e.getAttribute("href");history.pushState(null,null,o),document.querySelector(o).scrollIntoView({behavior:"smooth"})}const M=250,u=document.querySelector("body"),w=e=>{e.style.zIndex==="100"?setTimeout(()=>{e.style.zIndex="-1"},M):e.style.zIndex="100"},L=e=>{e.classList.contains("is-hidden")?u.style.overflow="auto":u.style.overflow="hidden"},a=e=>{e.classList.toggle("is-hidden"),L(e),w(e)},n={openBurgerBtn:document.querySelector("[data-burger-open]"),closeBurgerBtn:document.querySelector("[data-burger-close]"),navLinks:document.querySelectorAll("[data-nav-link]"),burgerMenu:document.querySelector("[data-burger]"),burgerMenuContent:document.querySelector("[data-burger-content]"),body:document.querySelector("body")};n.openBurgerBtn.addEventListener("click",()=>a(n.burgerMenu));n.closeBurgerBtn.addEventListener("click",()=>a(n.burgerMenu));n.navLinks.forEach(e=>{e.addEventListener("click",()=>a(n.burgerMenu))});window.addEventListener("click",e=>{n.burgerMenu.classList.contains("is-hidden")||n.burgerMenuContent.contains(e.target)||n.openBurgerBtn.contains(e.target)||a(n.burgerMenu)});window.matchMedia("(min-width: 1280px)").addEventListener("change",e=>{e.matches&&(n.burgerMenu.classList.contains("is-hidden")||a(n.burgerMenu))});new g(".swiper",{slidesPerView:1,spaceBetween:32,watchOverflow:!0,breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}},loop:!0,grabCursor:!0,modules:[h],keyboard:{enabled:!0,onlyInViewport:!0}});const v="https://bobrkrw.free.beeceptor.com/application",f={success:{title:"Hooray! You successfully sent your application!",text:"We will contact you as soon as possible"},error:{title:"Failed to send your application",text:"Please try again later"}},r={form:document.querySelector("[data-application-form]"),formPhoneInput:document.querySelector("[data-phone]"),closeFormModalBtns:document.querySelectorAll("[data-form-result-modal-close]"),formModal:document.querySelector("[data-form-result-modal]"),formModalContent:document.querySelector("[data-form-result-modal-content]"),formModalTitle:document.querySelector("[data-form-result-modal-title]"),formModalText:document.querySelector("[data-form-result-modal-text]"),body:document.querySelector("body")};b(r.formPhoneInput,{mask:"+{380} (00) 000-00-00"});const S=async e=>{try{(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?E():m()}catch{m()}},y=e=>{e&&(r.formModalTitle.textContent=f[e].title,r.formModalText.textContent=f[e].text)},q=()=>{r.form.reset()},E=()=>{y("success"),a(r.formModal)},m=()=>{y("error"),a(r.formModal)};r.form.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(r.form),c=Object.fromEntries(o.entries());S(c)});r.closeFormModalBtns.forEach(e=>{e.addEventListener("click",()=>{q(),a(r.formModal)})});window.addEventListener("click",e=>{r.formModal.classList.contains("is-hidden")||r.formModalContent.contains(e.target)||a(r.formModal)});
//# sourceMappingURL=commonHelpers.js.map
