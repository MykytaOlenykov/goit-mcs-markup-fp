(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();document.querySelectorAll('a[href="#leave-an-application"]').forEach(r=>{r.addEventListener("click",i)});document.querySelectorAll("#anchor").forEach(r=>{r.addEventListener("click",i)});function i(r){r.preventDefault();const o=r.currentTarget.getAttribute("href");history.pushState(null,null,o),document.querySelector(o).scrollIntoView({behavior:"smooth"})}const d=250,t={openBurgerBtn:document.querySelector("[data-burger-open]"),closeBurgerBtn:document.querySelector("[data-burger-close]"),navLinks:document.querySelectorAll("[data-nav-link]"),burgerMenu:document.querySelector("[data-burger]"),burgerMenuContent:document.querySelector("[data-burger-content]"),body:document.querySelector("body")},a=()=>{t.burgerMenu.style.zIndex==="100"?setTimeout(()=>{t.burgerMenu.style.zIndex="-1"},d):t.burgerMenu.style.zIndex="100"},f=()=>{t.burgerMenu.classList.contains("is-hidden")?t.body.style.overflow="auto":t.body.style.overflow="hidden"},c=()=>{t.burgerMenu.classList.toggle("is-hidden"),f(),a()};t.openBurgerBtn.addEventListener("click",c);t.closeBurgerBtn.addEventListener("click",c);t.navLinks.forEach(r=>{r.addEventListener("click",c)});window.addEventListener("click",r=>{t.burgerMenu.classList.contains("is-hidden")||t.burgerMenuContent.contains(r.target)||t.openBurgerBtn.contains(r.target)||c()});
//# sourceMappingURL=commonHelpers.js.map
