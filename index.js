import{a as m,S as h,i as f}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const L="49321227-55ab2a796e9f996e0637ef132";async function b(a,r=1){return(await m.get("https://pixabay.com/api/",{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const d=document.querySelector(".gallery");let v=new h(".gallery a",{captionsData:"alt",captionDelay:250});function P(a){const r=a.hits.map(({largeImageURL:l,webformatURL:o,tags:e,likes:t,views:s,comments:g,downloads:y})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${o}"     
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
              <span class="gallery-info-value">${g}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${y}</span>
            </li>
  </ul>
</li>
  `).join("");d.insertAdjacentHTML("beforeend",r),v.refresh()}function S(){d.innerHTML=""}const n=document.querySelector(".form"),u=document.querySelector(".loader"),q=document.querySelector('button[type="button"]');n.addEventListener("submit",w);q.addEventListener("click",$);let i="",c=1;function w(a){a.preventDefault(),i=n.elements["search-text"].value.trim(),S(),p(),n.reset()}function $(){console.log(c),c+=1,p()}async function p(){if(i==="")f.error({title:"Error",message:"You should enter text to search!"});else{u.classList.remove("hidden");try{const a=await b(i,c);a.hits.length===0?f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):P(a)}catch(a){console.log("Помилка в doStuff:",a)}u.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
