(function(){
  function createPair(pair){
    const wrap=document.createElement("article");wrap.className="ba-component";wrap.dataset.componentId=pair.componentId;wrap.dataset.direction=pair.direction||"horizontal";
    wrap.innerHTML=`<div class="ba-fallback"><figure><img src="${pair.before.src}" alt="${pair.before.label}"><figcaption>${pair.before.label}</figcaption></figure><figure><img src="${pair.after.src}" alt="${pair.after.label}"><figcaption>${pair.after.label}</figcaption></figure><input class="ba-range" type="range" min="0" max="100" value="${pair.initialPosition||50}" aria-label="BeforeとAfterの表示割合"><span class="ba-handle" aria-hidden="true"></span></div><div class="ba-meta"><span>画像区分：${pair.before.assetType} / ${pair.after.assetType}</span><span class="status-badge">${pair.status}</span></div>`;
    return enhancePair(wrap);
  }
  function enhancePair(wrap){
    const range=wrap.querySelector(".ba-range");const stage=wrap.querySelector(".ba-fallback");
    const update=()=>stage.style.setProperty("--position",`${range.value}%`);
    range.addEventListener("input",update);update();wrap.classList.add("is-enhanced");return wrap;
  }
  window.BeforeAfter={mount(target,pairs){pairs.forEach(pair=>{const existing=target.querySelector(`[data-component-id="${pair.componentId}"]`);if(existing){enhancePair(existing);}else{target.appendChild(createPair(pair));}});}};
})();
