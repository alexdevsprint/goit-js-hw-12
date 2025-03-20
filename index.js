import{a as L,S as b,i as g}from"./assets/vendor-30VqbI-A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const v="49321227-55ab2a796e9f996e0637ef132";async function P(t,s=1){return(await L.get("https://pixabay.com/api/",{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:49}})).data}const p=document.querySelector(".gallery");let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function q(t){const s=t.hits.map(({largeImageURL:i,webformatURL:c,tags:e,likes:a,views:r,comments:m,downloads:h})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${c}"     
      alt="${e}"
    />
  </a>
  <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-title">Likes</span> 
              <span class="gallery-info-value">${a}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Views</span> 
              <span class="gallery-info-value">${r}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Comments</span> 
              <span class="gallery-info-value">${m}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${h}</span>
            </li>
  </ul>
</li>
  `).join("");p.insertAdjacentHTML("beforeend",s),S.refresh()}function w(){p.innerHTML=""}const f=document.querySelector(".form"),d=document.querySelector(".loader"),$=document.querySelector('button[type="button"]');f.addEventListener("submit",x);$.addEventListener("click",E);let u="",l=0,n=0,o=1;function x(t){t.preventDefault(),l=0,n=0,o=1,u=f.elements["search-text"].value.trim(),w(),y(),f.reset()}function E(){l>0?(o+=1,y(),console.log(l),l>n?l=l-n:l=l-l):console.log("We're sorry, but you've reached the end of search results.")}async function y(){if(console.log(o),u==="")g.error({title:"Error",message:"You should enter text to search!"});else{d.classList.remove("hidden");try{const t=await P(u,o);n=t.hits.length,o===1&&(l=t.totalHits-n),console.log(t.hits.length),console.log(t),t.hits.length===0?g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):q(t)}catch(t){console.log("Помилка в doStuff:",t)}d.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
