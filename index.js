import{a as v,S as b,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const P="49321227-55ab2a796e9f996e0637ef132";async function S(t,a=1,l){try{return(await v.get("https://pixabay.com/api/",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:l}})).data}catch{iziToast.error({title:"Error",message:"Something wrong, try again later!"})}}const p=document.querySelector(".gallery");let w=new b(".gallery a",{captionsData:"alt",captionDelay:250});function E(t){const a=t.hits.map(({largeImageURL:l,webformatURL:o,tags:e,likes:r,views:i,comments:h,downloads:L})=>`
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
              <span class="gallery-info-value">${r}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Views</span> 
              <span class="gallery-info-value">${i}</span>
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
  `).join("");p.insertAdjacentHTML("beforeend",a),w.refresh()}function $(){p.innerHTML=""}const f=document.querySelector(".form"),u=document.querySelector(".loader"),d=document.querySelector(".btn-load-more");f.addEventListener("submit",q);d.addEventListener("click",x);const m=15;let g="",c=0,s=0;function q(t){t.preventDefault(),s=1,g=f.elements["search-text"].value.trim(),$(),y(),f.reset()}function x(){c>=s+1?(s+=1,y()):(n.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),d.classList.add("hidden"))}async function y(){if(d.classList.add("hidden"),console.log(s),console.log(c),g==="")n.error({title:"Error",message:"You should enter text to search!"});else{u.classList.remove("hidden");try{const t=await S(g,s,m);s===1&&(c=Math.ceil(t.totalHits/m)),t.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):E(t),c>=s&&d.classList.remove("hidden")}catch{n.error({title:"Error",message:"Something wrong, try again later!"})}u.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
