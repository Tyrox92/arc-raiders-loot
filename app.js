// Minimal SPA-Logik ohne Framework
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

let term = "";
let activeTop = "All";
let activeSub = "All";
let hideNonMatches = true;

const tabsEl = $("#tabs");
const subtabsEl = $("#subtabs");
const gridEl = $("#grid");
const searchEl = $("#search");
const clearBtn = $("#clearBtn");
const hideBox = $("#hideNonMatches");

function countBy(arr, key, filter = () => true) {
  const m = {};
  for (const k of key) m[k] = 0;
  for (const it of arr) if (filter(it)) m[it.category === "Workshop Upgrades" ? it.subCategory : it.category]++, 0;
  return m;
}

function escapeRegExp(str){return str.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function highlight(text, t){
  if(!t) return text;
  try{
    const rx = new RegExp(`(${escapeRegExp(t)})`,'ig');
    return text.split(rx).map((p,i)=> p.toLowerCase()===t.toLowerCase()?`<mark>${p}</mark>`:p).join("");
  }catch(e){return text;}
}

function renderTabs(){
  const topCounts = TOP_CATEGORIES.reduce((acc,c)=> (acc[c]=ITEMS.filter(i=>i.category===c).length, acc),{});
  const allBtn = btnTab("All", activeTop==="All");
  tabsEl.innerHTML = "";
  tabsEl.appendChild(allBtn);
  for(const c of TOP_CATEGORIES){
    const b = btnTab(`${c} <span class="ml-2 text-[11px] px-2 rounded-full bg-white/10">${topCounts[c]}</span>`, activeTop===c, c);
    tabsEl.appendChild(b);
  }
}
function btnTab(label, active=false, value=label){
  const b = document.createElement("button");
  b.className = `px-3 py-2 rounded-lg text-sm ring-1 ring-white/10 ${active?'bg-white/15':'bg-white/5 hover:bg-white/10'}`;
  b.innerHTML = label;
  b.onclick = ()=>{ activeTop = value; activeSub="All"; render(); };
  return b;
}

function renderSubtabs(){
  if(activeTop!=="Workshop Upgrades"){ subtabsEl.classList.add("hidden"); subtabsEl.innerHTML=""; return; }
  subtabsEl.classList.remove("hidden");
  const subCounts = WORKSHOP_SUBS.reduce((acc,s)=> (acc[s]=ITEMS.filter(i=>i.category==="Workshop Upgrades" && i.subCategory===s).length, acc),{});
  subtabsEl.innerHTML = "";
  const all = btnTab("All", activeSub==="All", "All");
  subtabsEl.appendChild(all);
  for(const s of WORKSHOP_SUBS){
    const b = btnTab(`${s} <span class="ml-2 text-[11px] px-2 rounded-full bg-white/10">${subCounts[s]}</span>`, activeSub===s, s);
    subtabsEl.appendChild(b);
  }
}

function filteredItems(){
  let pool = ITEMS.slice();
  if(activeTop!=="All") pool = pool.filter(i=>i.category===activeTop);
  if(activeTop==="Workshop Upgrades" && activeSub!=="All") pool = pool.filter(i=>i.subCategory===activeSub);
  const t = term.trim();
  if(!t) return pool;
  const rx = new RegExp(escapeRegExp(t),'i');
  const hits = pool.filter(i=>rx.test(i.name));
  if(hideNonMatches) return hits;
  return pool.map(i=> ({...i, __match: rx.test(i.name)}));
}

function tag(cls, text){ return `<span class="rounded-full px-2 py-0.5 ${cls}">${text}</span>`; }

function renderGrid(){
  const items = filteredItems();
  if(items.length===0){
    gridEl.innerHTML = `<div class="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">No items found.</div>`;
    return;
  }
  gridEl.innerHTML = items.map((i,idx)=>{
    const faded = i.__match===false ? "opacity-40" : "opacity-100";
    const cat = CAT_COLORS[i.category] || "bg-white/10";
    const sub = i.subCategory ? (SUB_COLORS[i.subCategory]||"bg-white/10") : "";
    return `<div class="transition border border-white/10 rounded-xl p-4 bg-gradient-to-b from-white/5 to-transparent ${faded}">
      <div class="text-sm font-medium mb-3 leading-tight">${highlight(i.name, term)}</div>
      <div class="flex flex-wrap items-center gap-2 text-[12px]">
        ${tag(cat, i.category)}
        ${i.subCategory ? tag(`ring-1 ring-white/10 ${sub}`, i.subCategory) : ""}
        ${i.notes ? `<span class="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-slate-300">${i.notes}</span>` : ""}
      </div>
    </div>`;
  }).join("");
}

function render(){
  renderTabs();
  renderSubtabs();
  renderGrid();
}

searchEl.addEventListener("input", (e)=>{ term = e.target.value; renderGrid(); });
clearBtn.addEventListener("click", ()=>{ term=""; searchEl.value=""; renderGrid(); });
hideBox.addEventListener("change", (e)=>{ hideNonMatches = e.target.checked; renderGrid(); });

// initial
render();
