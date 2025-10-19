import{a as c,i as d}from"./assets/vendor-CHMhaTs2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const u="52837219-31e3d366b905b38697491d842";c.defaults.baseURL="https://pixabay.com";function f(a){return c.get("/api/",{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{console.log(e.message)})}const l={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let o="";function g(a){for(const e of a)o+=`<li class="gallery-item">
            <a class="gallery-link" href=${e.largeImageURL}>
                <img class="gallery-image" src=${e.webformatURL} alt=${e.tags}>
            </a>
            <ul class="image-stats-list">
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Likes</h3>
                    <p class="image-stats">${e.likes}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Views</h3>
                    <p class="image-stats">${e.views}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Comments</h3>
                    <p class="image-stats">${e.comments}</p>
                </li>
                <li class="image-stats-item">
                    <h3 class="image-stats-title">Downloads</h3>
                    <p class="image-stats">${e.downloads}</p>
                </li>
            </ul>
        </li>`;l.galleryEl.insertAdjacentHTML("beforeend",o)}function p(){o="",l.galleryEl.innerHTML=""}function h(){l.loaderEl.classList.contains("visually-hidden")&&l.loaderEl.classList.remove("visually-hidden")}function m(){l.loaderEl.classList.contains("visually-hidden")||l.loaderEl.classList.add("visually-hidden")}function y(a){a.preventDefault();const e=a.target.elements[0].value;e===""&&d.error({message:"Please write something",position:"topRight"}),p(),h(),f(e).then(i=>{g(i)}).catch(i=>{console.log(i)}).finally(()=>{m()})}m();l.formEl.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
