import{a as y,S as h,i as c}from"./assets/vendor-5l-LjSpL.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const L="49321227-55ab2a796e9f996e0637ef132";function v(a,r=1){return y.get("https://pixabay.com/api/",{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(l=>l.data).catch(l=>l)}const f=document.querySelector(".gallery");new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.hits.map(({largeImageURL:l,webformatURL:n,tags:e,likes:t,views:s,comments:d,downloads:m})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${n}"     
      alt="${e}"
    />
  </a>
  <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-title">Likes</span> 
              <span class="gallery-info-value">${t}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Views</span> 
              <span class="gallery-info-value">${s}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Comments</span> 
              <span class="gallery-info-value">${d}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${m}</span>
            </li>
  </ul>
</li>
  `).join("");f.insertAdjacentHTML("afterbegin",r)}function P(){f.innerHTML=""}const o=document.querySelector(".form"),u=document.querySelector(".loader"),S=document.querySelector('button[type="button"]');o.addEventListener("submit",q);S.addEventListener("click",$);let i="",g=1;function q(a){a.preventDefault(),i=o.elements["search-text"].value.trim(),P(),p(),o.reset()}function $(){g+=1,p()}function p(){i===""?c.error({title:"Error",message:"You should enter text to search!"}):(u.classList.remove("hidden"),v(i,g).then(a=>{a.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(a),console.log(a))}).catch(a=>{console.error(a)}).finally(()=>{u.classList.add("hidden")}))}
//# sourceMappingURL=index.js.map
