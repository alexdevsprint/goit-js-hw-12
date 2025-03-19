import{a as g,S as m,i as o}from"./assets/vendor-5l-LjSpL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="49321227-55ab2a796e9f996e0637ef132";function d(s){return g.get("https://pixabay.com/api/",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}function h(s){const t=document.querySelector(".gallery");t.innerHTML="";const a=s.hits.map(({largeImageURL:i,webformatURL:e,tags:r,likes:l,views:f,comments:u,downloads:p})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"     
      alt="${r}"
    />
  </a>
  <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-title">Likes</span> 
              <span class="gallery-info-value">${l}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Views</span> 
              <span class="gallery-info-value">${f}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Comments</span> 
              <span class="gallery-info-value">${u}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${p}</span>
            </li>
  </ul>
</li>
  `).join("");t.insertAdjacentHTML("afterbegin",a),new m(".gallery a",{captionsData:"alt",captionDelay:250})}const n=document.querySelector(".form"),c=document.querySelector(".loader");n.addEventListener("submit",L);function L(s){s.preventDefault();const t=n.elements["search-text"].value.trim();t===""?o.error({title:"Error",message:"You should enter text to search!"}):(c.classList.remove("hidden"),d(t).then(a=>{a.hits.length===0?o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(a)}).catch(a=>{console.error(a)}).finally(()=>{c.classList.add("hidden")})),n.reset()}
//# sourceMappingURL=index.js.map
