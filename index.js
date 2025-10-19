import{a as f,S as g,i as u}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const p="52837219-31e3d366b905b38697491d842";f.defaults.baseURL="https://pixabay.com";function h(a){return f.get("/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{console.log(e.message)})}const i={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};let n="",o;function y(a){for(const e of a)n+=`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
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
        </li>`;i.galleryEl.insertAdjacentHTML("beforeend",n),o?o.refresh():o=new g(".gallery a",{animationSpeed:300,fadeSpeed:250,captions:!0,captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom",showCounter:!0,scrollZoom:!0})}function L(){n="",i.galleryEl.innerHTML=""}function d(){i.loaderEl.classList.contains("visually-hidden")&&i.loaderEl.classList.remove("visually-hidden")}function c(){i.loaderEl.classList.contains("visually-hidden")||i.loaderEl.classList.add("visually-hidden")}function b(a){a.preventDefault();const e=a.target.elements[0].value.trim();e===""&&u.error({message:"Please write something",position:"topRight"}),L(),d(),h(e).then(l=>{if(!l||l.length===0)throw new Error("No images found");d(),y(l)}).catch(l=>{c(),u.error({message:"Houston, we have a problem.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff"})}).finally(()=>{c()})}c();i.formEl.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
