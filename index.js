import{a as v,S as b,i as g}from"./assets/vendor-30VqbI-A.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const P="49321227-55ab2a796e9f996e0637ef132";async function S(t,l=1){return(await v.get("https://pixabay.com/api/",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:49}})).data}const m=document.querySelector(".gallery");let q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function w(t){const l=t.hits.map(({largeImageURL:i,webformatURL:c,tags:e,likes:a,views:r,comments:h,downloads:L})=>`
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
              <span class="gallery-info-value">${h}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${L}</span>
            </li>
  </ul>
</li>
  `).join("");m.insertAdjacentHTML("beforeend",l),q.refresh()}function $(){m.innerHTML=""}const f=document.querySelector(".form"),p=document.querySelector(".loader"),d=document.querySelector(".btn-load-more");f.addEventListener("submit",x);d.addEventListener("click",E);let u="",s=0,n=0,o=1;function x(t){t.preventDefault(),s=0,n=0,o=1,u=f.elements["search-text"].value.trim(),$(),y(),f.reset()}function E(){s>0?(o+=1,y(),console.log(s),s>n?s=s-n:s=s-s):console.log("We're sorry, but you've reached the end of search results.")}async function y(){if(d.classList.add("hidden"),console.log(o),u==="")g.error({title:"Error",message:"You should enter text to search!"});else{p.classList.remove("hidden");try{const t=await S(u,o);n=t.hits.length,o===1&&(s=t.totalHits-n),console.log(t.hits.length),console.log(t),t.hits.length===0?g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):w(t),d.classList.remove("hidden")}catch(t){console.log("Помилка в doStuff:",t)}p.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
