const $=s=>document.querySelector(s),E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const wa=t=>'https://wa.me/5356212889?text='+encodeURIComponent(t),B=(t,m)=>`<a class="btn" target="_blank" rel="noopener" href="${wa(m)}">${t}</a>`;
const plans=[['Diario','1 día','Acceso a sala; Zona de cardio'],['Semanal','7 días','Acceso a sala; Cardio'],['Mensual','30 días','Acceso a sala; Cardio; Clases grupales',1],['Trimestral','90 días','Todo lo del mensual; Valoración inicial']];
$('#pl').innerHTML=plans.map(p=>`<div class="g card plan ${p[3]?'pop':''}">${p[3]?'<span class="pt">MÁS POPULAR</span>':''}<h3>${p[0]}</h3><div class="price">$ demo</div><p>${p[1]}</p><ul class="l">${p[2].split(';').map(x=>`<li>${x.trim()}</li>`).join('')}</ul><p class="sub" style="font-size:.8rem">Condiciones: por definir</p>${B('Consultar','Quiero el plan '+p[0])}</div>`).join('');
const sp=[['Clase suelta','1 clase de 45 min','Bicicleta asignada; Instructor'],['Paquete 8 clases','8 clases al mes','Reserva prioritaria; Instructor'],['Spinning ilimitado','30 días','Todas las clases; Reserva prioritaria']];
$('#sp').innerHTML=sp.map(p=>`<div class="g card"><span class="demo">DEMO</span><h3>${p[0]}</h3><div class="price">$ demo</div><p>${p[1]}</p><ul class="l">${p[2].split(';').map(x=>`<li>${x.trim()}</li>`).join('')}</ul><p class="sub" style="font-size:.8rem">Horarios: por definir</p>${B('Preguntar disponibilidad','Consulta de disponibilidad de spinning: '+p[0])}</div>`).join('');
const tm=[['Alfa','Fuerza y musculación'],['Bravo','Cardio y spinning'],['Charlie','Funcional y acondicionamiento']];
$('#eq').innerHTML=tm.map((t,i)=>`<div class="team"><h3>Equipo ${t[0]} · ${t[1]}</h3><div class="grid">${[1,2,3].map(n=>`<div class="g card"><div class="ph">Foto (DEMO)</div><h3>Entrenador ${t[0][0]}${n}</h3><p style="color:var(--y)">${t[1]}</p><p class="sub" style="margin:6px 0">Perfil de ejemplo. Reemplazar con datos reales.</p><p>Precio: <b style="color:var(--y)">$ demo</b></p><p>Horario: por definir</p><br>${B('Contactar','Quiero entrenar con el equipo '+t[0]+', entrenador '+n)}</div>`).join('')}</div></div>`).join('');
const ev=[{n:'Competición Alfa vs Bravo',d:'2026-11-21',h:'17:00',t:'Prueba de fuerza por equipos (DEMO)'},{n:'Reto Charlie',d:'2026-11-28',h:'09:00',t:'Circuito funcional (DEMO)'},{n:'Torneo de spinning',d:'2026-12-05',h:'18:00',t:'Bravo vs Charlie (DEMO)'},{n:'Clase grupal especial',d:'2026-11-18',h:'19:00',t:'Evento de ejemplo'}];
let cur=new Date(2026,10,1),sel='';
function cal(){const y=cur.getFullYear(),m=cur.getMonth(),f=(new Date(y,m,1).getDay()+6)%7,n=new Date(y,m+1,0).getDate();$('#mt').textContent=cur.toLocaleDateString('es',{month:'long',year:'numeric'});
let h='LMXJVSD'.split('').map(d=>`<small>${d}</small>`).join('')+'<span></span>'.repeat(f);
for(let d=1;d<=n;d++){const k=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;h+=`<button data-k="${k}" class="${ev.some(e=>e.d==k)?'ev':''} ${k==sel?'sel':''}">${d}</button>`}
$('#cg').innerHTML=h;const l=ev.filter(e=>sel?e.d==sel:e.d.slice(0,7)==`${y}-${String(m+1).padStart(2,'0')}`);
$('#ed').innerHTML=`<h3>${sel?'Eventos del '+sel:'Eventos del mes'}</h3><br>`+(l.map(e=>`<p><b style="color:var(--y)">${e.n}</b><br>${e.d} · ${e.h}<br>${e.t}</p><br>`).join('')||'<p class="sub">Sin eventos.</p>')}
$('#cg').onclick=e=>{const b=e.target.closest('[data-k]');if(b){sel=sel==b.dataset.k?'':b.dataset.k;cal()}};
$('#pv').onclick=()=>{cur.setMonth(cur.getMonth()-1);cal()};$('#nx').onclick=()=>{cur.setMonth(cur.getMonth()+1);cal()};cal();
$('#es').innerHTML=tm.map(t=>`<div class="g card"><h3>Equipo ${t[0]}</h3><p style="color:var(--y)">${t[1]}</p><p class="sub">3 entrenadores · precios y horarios en cada ficha</p></div>`).join('');
const DEMO=[['Proteína (demo)','Suplementos',10],['Creatina (demo)','Suplementos',8],['Guantes (demo)','Accesorios',5],['Cinturón (demo)','Accesorios',12],['Camiseta (demo)','Ropa',7]].map((x,i)=>({id:'d'+i,n:x[0],c:x[1],p:x[2],d:'',s:true}));
let pr=DEMO,cat='',cart={},src='demo',isAd=false,C=null,AS=null;
function shop(){const cs=['',...new Set(pr.map(p=>p.c).filter(Boolean))];$('#cs').innerHTML=cs.map(c=>`<button class="${c==cat?'on':''}" data-c="${E(c)}">${E(c)||'Todo'}</button>`).join('');
const l=pr.filter(p=>(!cat||p.c==cat)&&(p.n||'').toLowerCase().includes($('#q').value.toLowerCase()));
$('#pr').innerHTML=l.map(p=>`<div class="g card">${p.img?`<img src="${E(p.img)}" alt="" loading="lazy" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;margin-bottom:10px">`:'<div class="ph">Foto (DEMO)</div>'}<span class="demo">${E(p.c||'')}</span><h3>${E(p.n)}</h3><p class="sub" style="margin:4px 0">${E(p.d||'')}</p><div class="price">${+p.p||0}</div><br>${p.s?`<button class="btn" data-a="${E(p.id)}">Añadir</button>`:'<b>Agotado</b>'}</div>`).join('')||(src=='db'&&!pr.length?'<p>Catálogo en preparación. ¡Pronto habrá productos!</p>':'<p>Sin resultados.</p>');
const it=Object.entries(cart).map(([i,q])=>[pr.find(p=>p.id==i),q]).filter(x=>x[0]);
$('#ct').innerHTML=it.map(([p,q])=>`<div class="q"><span style="flex:1">${E(p.n)}</span><button data-m="${E(p.id)}">−</button>${q}<button data-a="${E(p.id)}">+</button></div>`).join('')||'<p class="sub">Carrito vacío</p>';
const t=it.reduce((s,[p,q])=>s+(+p.p||0)*q,0);$('#tt').textContent=t;
$('#co').href=it.length?wa('Hola, quiero reservar:\n'+it.map(([p,q])=>`- ${q} x ${p.n} = ${(+p.p||0)*q}`).join('\n')+'\nTotal: '+t):'#tienda'}
function adm(){$('#ad').hidden=!isAd;if(!isAd)return;$('#al').innerHTML=pr.map(p=>`<div class="ar"><b style="flex:1;min-width:120px">${E(p.n)}</b>Precio <input type="number" min="0" step="any" value="${+p.p||0}" data-id="${E(p.id)}" data-f="p">Stock <input type="checkbox" ${p.s?'checked':''} data-id="${E(p.id)}" data-f="s" style="width:auto"><button class="btn" data-x="${E(p.id)}">Quitar</button></div>`).join('')}
const er=()=>alert('No se pudo guardar. Revisa tu conexión y permisos.');
$('#al').onchange=e=>{const t=e.target,i=t.dataset.id;if(i&&C)C.doc(i).update({[t.dataset.f]:t.dataset.f=='s'?t.checked:Math.max(0,+t.value||0)}).catch(er)};
$('#al').onclick=e=>{const i=e.target.dataset.x;if(i&&C&&confirm('¿Quitar este producto?'))C.doc(i).delete().catch(er)};
$('#aa').onclick=async()=>{const n=$('#an').value.trim();if(!n||!C)return alert('Escribe al menos el nombre');let img='';const f=$('#af').files[0];
try{if(f&&AS)img=(await AS.upload(f)).url;await C.add({n,c:$('#ac').value.trim(),p:Math.max(0,+$('#ap').value||0),d:$('#ad2').value.trim(),s:true,img});['an','ac','ap','ad2','af'].forEach(i=>$('#'+i).value='')}catch(e){er()}};
$('#as').onclick=()=>{if(C&&confirm('¿Añadir productos de ejemplo?'))DEMO.forEach(d=>{const{id,...x}=d;C.add(x).catch(er)})};
document.addEventListener('click',e=>{const a=e.target.dataset;if(a.a){cart[a.a]=(cart[a.a]||0)+1;shop()}if(a.m){if(--cart[a.m]<=0)delete cart[a.m];shop()}if(a.c!==undefined){cat=a.c;shop()}});
(async()=>{try{const db=await claude.use('db');if(!db)return;const u=await claude.use('user');isAd=u?await u.canEdit():false;AS=await claude.use('assets');C=db.collection('products');
C.onSnapshot(q=>{src='db';pr=q.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(a.n||'').localeCompare(b.n||''));shop();adm()},()=>{})}catch(e){}})();
$('#q').oninput=shop;shop();
function route(){const h=location.hash.slice(1);document.body.classList.toggle('st',h=='tienda');document.body.classList.toggle('et',h=='entrenadores');$('#mn').classList.remove('open');
if(h=='tienda'||h=='entrenadores')scrollTo(0,0);else if(h&&$('#'+h))setTimeout(()=>$('#'+h).scrollIntoView(),30)}
addEventListener('hashchange',route);route();$('#bg').onclick=()=>$('#mn').classList.toggle('open');
const io=new IntersectionObserver(r=>r.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.08});document.querySelectorAll('.rv').forEach(x=>io.observe(x));
const hero=document.querySelector('.hero');new IntersectionObserver(([x])=>hero.classList.toggle('off',!x.isIntersecting)).observe(hero);
