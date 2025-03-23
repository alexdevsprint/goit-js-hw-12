import{a as v,S as b,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="49321227-55ab2a796e9f996e0637ef132";async function P(t,a=1,s){try{return(await v.get("https://pixabay.com/api/",{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:s}})).data}catch{iziToast.error({title:"Error",message:"Something wrong, try again later!"})}}const y=document.querySelector(".gallery");let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function E(t){const a=t.hits.map(({largeImageURL:s,webformatURL:o,tags:e,likes:r,views:i,comments:h,downloads:L})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${s}">
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
  `).join("");y.insertAdjacentHTML("beforeend",a),S.refresh()}function q(){y.innerHTML=""}const d=document.querySelector(".form"),u=document.querySelector(".loader"),c=document.querySelector(".btn-load-more");d.addEventListener("submit",$);c.addEventListener("click",x);const m=15;let f="",g=0,l=0;function $(t){t.preventDefault(),l=1,f=d.elements["search-text"].value.trim(),q(),p(),d.reset()}function x(){g>=l+1?(l+=1,p()):(n.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),c.classList.add("hidden"))}async function p(){if(c.classList.add("hidden"),f==="")n.error({title:"Error",message:"You should enter text to search!"});else{u.classList.remove("hidden");try{const t=await P(f,l,m);l===1&&(g=Math.ceil(t.totalHits/m)),t.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):E(t),g>=l&&c.classList.remove("hidden")}catch{n.error({title:"Error",message:"Something wrong, try again later!"})}finally{u.classList.add("hidden"),l>1&&O()}}}function O(){const t=document.querySelector(".gallery-item");if(t===void 0)return;const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
