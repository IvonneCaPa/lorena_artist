/* Configuración de Tailwind CSS */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        glam: ['"Cinzel Decorative"', 'serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      colors: {
        neonPink: '#ff1493',
        hot: '#ff2a8d',
        lav: '#e879f9',
        deepDark: '#08060a',
        cardDark: '#120c16'
      },
      boxShadow: {
        pink: '0 0 25px rgba(255,20,147,.65)',
        strong: '0 0 40px rgba(255,42,141,.8),0 0 10px rgba(255,255,255,.6)',
        polaroid: '0 15px 35px -5px rgba(0,0,0,.9),0 0 20px rgba(255,20,147,.35)'
      },
      keyframes: {
        sp: {
          '0%': { transform: 'scale(.85) rotate(0)', opacity: '.4' },
          '100%': { transform: 'scale(1.2) rotate(15deg)', opacity: '1' }
        }
      },
      animation: {
        sparkle: 'sp 1.8s ease-in-out infinite alternate'
      }
    }
  }
};

/* Lógica de la aplicación */
document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);
  const WA = "https://wa.me/34663536884";

  // Menú móvil
  $('mb').onclick = () => $('mm').classList.toggle('hidden');
  $('mm').querySelectorAll('a').forEach(a => a.onclick = () => $('mm').classList.add('hidden'));

  // Métricas / Stats (ajustado de font-extrabold a font-bold)
  $('stats').innerHTML = [
    ["+5", "Cursos especializados"],
    ["1 a 1", "O clases grupales"],
    ["100%", "Material profesional"],
    ["BCN","Servicio a domicilio"]
  ].map(([n, t]) => `
    <div>
      <span class="font-display font-bold text-2xl text-pink-300">${n}</span>
      <p class="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">${t}</p>
    </div>
  `).join('');

  // Servicios (títulos h3 ajustados a font-semibold text-base sm:text-lg)
  $('serv').innerHTML = [
    ["✨", "Maquillaje Artístico & Glam", "Desde estilos sociales pulidos y sofisticados hasta looks de novia de alto impacto, maquillaje editorial y Drag Queen.", "Desde 50 €"],
    ["✂️", "Peluquería & Styling", "Peinados de fiesta, novias, estilismos editoriales de sesión y recogidos a medida pensados para resistir toda la jornada.", "Desde 35 €"],
    ["👑", "Pelucas & Posticería", "Lavado, corte, estilización de pelucas con volumen extremo, recogidos fantasía, aplicaciones de pedrería y colocación profesional.", "Desde 20 €"],
    ["💎", "Nails Press-On & Acrílicas", "Sets de uñas press-on reutilizables personalizados, manicura acrílica francesa, diseños fantasía con pedrería y semipermanente.", "Desde 15 €"]
  ].map(([i, t, d, p]) => `
    <div class="card p-6 hover:-translate-y-1 hover:shadow-pink">
      <div class="w-12 h-12 rounded-xl bg-pink-950/80 border border-neonPink/40 flex items-center justify-center text-2xl mb-4">${i}</div>
      <h3 class="font-semibold text-base sm:text-lg text-white mb-2">${t}</h3>
      <p class="text-xs text-neutral-400 leading-relaxed mb-4">${d}</p>
      <span class="text-xs font-bold text-neonPink uppercase tracking-wider">${p}</span>
    </div>
  `).join('');

  // Tarifas
  const T = {
    maquillaje: ["✦ Servicios de Maquillaje", [
      ["Maquillaje Social", "Piel perfecta y estilismo acorde a eventos sociales de día o de noche.", "50 €"],
      ["Maquillaje de Eventos", "Mayor duración, técnica glam y fijación intensiva para fiestas.", "65 €"],
      ["Creativos / Gráficos", "Delineados potentes, combinaciones de color y diseños fantasía.", "80 €"],
      ["Shootings & Sesiones", "Adaptado a iluminación de estudio y cámaras profesionales.", "desde 50 €"],
      ["Maquillaje Drag", "Transformación sin límites, rasgos marcados, fantasía y acabados escénicos de alto impacto.", "90 - 100 €"]
    ], ["Pack Novias Especial", "Atención personalizada, diseño del look y prueba previa completa.", "200 €", "Incluye Prueba"]],
    peluqueria: ["✂️ Peluquería & Peinados", [
      ["Peinado de Evento", "Ondas, semirecogidos o recogidos para ocasiones especiales.", "desde 35 €"],
      ["Peinado de Novia", "Estilismo y fijación premium para el gran día.", "desde 50 €"],
      ["Peinado para Sesión de Fotos", "Preparación para sets editoriales con asistencia en cámara.", "45 - 50 €"],
      ["Styling Creativo / Editorial", "Peinados de pasarela, formas vanguardistas y texturas.", "desde 50 €"],
      ["Styling Personalizado", "Diseñado exclusivamente según la personalidad y vestido/outfit.", "50 - 80 €"]
    ]],
    pelucas: ["👑 Servicios de Pelucas & Extras", [
      ["Lavado y Alisado", "", "20 €"],
      ["Recogido Básico", "", "40 €"],
      ["Recogido Fantasía", "", "50 €"],
      ["Peinado con Volumen", "", "60 €"],
      ["Colocación de Peluca", "", "20 €"],
      ["Styling de Peluca", "", "desde 25 €"],
      ["Corte y Personalización", "", "desde 20 €"],
      ["Extensiones Básicas / Premium", "", "20 € / 40 €"],
      ["Pedrería decorativa", "", "30 €"],
      ["Cabeza de Pórex", "", "7 €"]
    ]],
    unas: ["💎 Nails Press-On & Tratamientos", [
      ["Esmaltado Semipermanente", "", "25 €"],
      ["Set Press-On Completo", "", "desde 30 €"],
      ["Limpieza de Uñas Press-on", "", "15 €"]
    ]]
  };

  const TN = {
    maquillaje: "Maquillaje",
    peluqueria: "Peluquería",
    pelucas: "Pelucas & Posticería",
    unas: "Uñas & Press-On"
  };

  window.tab = function(k) {
    $('tabs').innerHTML = Object.keys(T).map(x => `
      <button onclick="tab('${x}')" class="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${x == k ? 'tab-on' : 'tab-off'}">${TN[x]}</button>
    `).join('');
    
    const [h, l, pk] = T[k];
    const flat = !l[0][1];
    const row = ([n, d, p]) => flat
      ? `<div class="p-3 bg-black/40 rounded-xl border border-pink-900/50 flex justify-between items-center gap-2"><span class="text-sm font-medium text-white">${n}</span><span class="font-display font-semibold text-neonPink whitespace-nowrap">${p}</span></div>`
      : `<div class="flex items-center justify-between gap-3 py-3 px-3 border-b border-pink-900/40 hover:bg-pink-950/30 rounded-lg transition"><div><h4 class="font-semibold text-white">${n}</h4><p class="text-xs text-neutral-400">${d}</p></div><span class="font-display font-bold text-base sm:text-lg text-neonPink whitespace-nowrap">${p}</span></div>`;
    
    $('tabc').innerHTML = `
      <div class="flex items-center justify-between border-b border-pink-900/50 pb-4 mb-6">
        <h3 class="font-display font-semibold text-lg sm:text-xl text-pink-300">${h}</h3>
        <span class="text-xs uppercase tracking-wider text-neutral-400">Tarifa fija</span>
      </div>
      <div class="${flat ? 'grid md:grid-cols-2 gap-3' : 'space-y-1'}">${l.map(row).join('')}</div>
      ${pk ? `
        <div class="mt-4 flex items-center justify-between gap-3 py-4 px-4 rounded-xl bg-pink-950/50 border border-neonPink/50 shadow-pink">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h4 class="font-semibold text-pink-200">${pk[0]}</h4>
              <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-neonPink text-white">${pk[3]}</span>
            </div>
            <p class="text-xs text-neutral-400">${pk[1]}</p>
          </div>
          <span class="font-display font-bold text-lg sm:text-xl text-neonPink">${pk[2]}</span>
        </div>` : ''}
    `;
  };
  window.tab('maquillaje');

  // Ventajas
  $('vent').innerHTML = [
    ["🙋", "Individual o Grupal"],
    ["⏰", "3 a 4 Horas mín."],
    ["📅", "Horario Flexible"],
    ["📦", "Material Incluido"],
    ["📖", "Dossier Teórico"],
    ["💗", "Soporte Continuo"]
  ].map(([i, t]) => `
    <div class="card p-4 text-center">
      <div class="text-2xl mb-2">${i}</div>
      <p class="text-[11px] font-bold text-white uppercase">${t}</p>
    </div>
  `).join('');

  // Cursos (títulos h3 ajustados a font-bold text-xl uppercase y etiquetas más estilizadas)
  const C = [
    ["Básico a Pro", "100 €", "Automaquillaje", "Perfecciona el maquillarte según tu propio rostro, tus facciones y tu estilo.", "Aprenderás a sacar el 100% de tus facciones. Te enseño qué productos te favorecen, cómo aplicar base de forma impecable sin parches, técnicas para cejas y labios, y tu técnica de ojos personalizada.", ["Análisis de rostro y facciones", "Preparación de la piel", "Maquillaje completo paso a paso", "Técnica de ojos personalizada", "Cejas y labios armónicos", "Productos recomendados y corrección de errores", "Guía para practicar en casa"]],
    ["Perfeccionamiento", "120 €", "Maquillaje Glam", "Perfeccionaremos tu potencial con una estética de belleza glamourosa e impecable.", "Ideal para aprender la técnica de difuminado limpio, degradados armónicos y pestañas que agrandan la mirada. Sal con un look pulido y listo para cualquier evento.", ["Análisis de rostro y facciones", "Preparación de la piel", "Maquillaje completo paso a paso", "Difuminados perfectos y combinación de sombras", "Cejas y labios", "Aplicación de pestañas postizas", "Productos recomendados"]],
    ["Avanzado", "130 €", "Full Glam", "Contornos marcados, iluminación estratégica y técnica de alfombra roja.", "El estándar de los eventos de noche y alfombra roja. Aprende a esculpir los pómulos, lograr un efecto lifting inmediato y una piel resistente a flashes y sudor.", ["Análisis de rostro y facciones", "Preparación de la piel para piel blindada", "Contornos profundos e iluminación técnica", "Difuminados y combinación de sombras complejas", "Cejas estructuradas y labios con volumen", "Aplicación de pestañas volumétricas"], 1],
    ["Artístico", "140 €", "Creativos / Gráficos", "Saca el máximo partido a un maquillaje creativo con simetría y colorimetría.", "Aprenderás a controlar el pulso, crear líneas nítidas que no se agrieten, jugar con contrastes de color vibrantes y elementos editoriales que llamen la atención en redes sociales.", ["Análisis de facciones para trazos gráficos", "Eyeliners gráficos precisos y técnicas de precisión", "Combinaciones cromáticas y degradados de color", "Preparación de párpado para larga duración", "Aplicación de pedrería y pestañas de fantasía"]],
    ["Transformación", "150 €", "Maquillaje Drag Queen", "Transformación facial total: bloqueo de cejas, sobredimensionado y durabilidad de escenario.", "Aprenderás todas las técnicas de escenario: cómo bloquear y hacer desaparecer las cejas por completo, redibujar la estructura ósea, técnicas de contouring extremo, párpados XXL y labios teatrales de gran formato.", ["Técnica de bloqueo de cejas con pegamento y sellado", "Corrección de sombras y neutralización de vello", "Creación de nueva cuenca flotante (cut crease XXL)", "Contour extremo y baking para luces intensas", "Sobrelineado labial hipervolumen y colocación de pestañas dobles"]]
  ];

  $('cursos').innerHTML = C.map((c, i) => `
    <div class="${c[6] ? 'bg-gradient-to-b from-[#2a0e2e] to-cardDark border-2 border-neonPink shadow-strong' : 'card hover:shadow-pink'} rounded-2xl p-6 flex flex-col justify-between relative">
      ${c[6] ? '<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-neonPink text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-pink whitespace-nowrap">⭐ Más Popular</div>' : ''}
      <div>
        <div class="flex items-center justify-between mb-4 ${c[6] ? 'mt-2' : ''}">
          <span class="text-[11px] font-bold uppercase tracking-wider text-lav bg-pink-950 px-3 py-1 rounded-full">${c[0]}</span>
          <span class="font-display font-bold text-xl text-neonPink">${c[1]}</span>
        </div>
        <h3 class="font-display font-bold text-xl text-white mb-2 uppercase">${c[2]}</h3>
        <p class="text-sm text-pink-100/80 mb-5 italic font-normal">${c[3]}</p>
        <ul class="space-y-2 text-xs text-neutral-300 mb-6">
          ${c[5].slice(0, 4).map(x => `<li class="flex gap-2"><span class="text-neonPink">✦</span>${x}</li>`).join('')}
        </ul>
      </div>
      <button onclick="openM(${i})" class="w-full py-3 rounded-full ${c[6] ? 'bg-gradient-to-r from-hot to-purple-600 shadow-pink' : 'bg-pink-950 hover:bg-neonPink'} text-white font-bold text-xs uppercase tracking-wider transition">Ver Temario Completo</button>
    </div>
  `).join('') + `
    <div class="rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-[#2a0e2e] to-black border border-lav/50">
      <div>
        <div class="text-3xl mb-3">🎁</div>
        <h3 class="font-display font-bold text-xl text-white mb-3">Ventajas de ser alumna</h3>
        <ul class="space-y-2.5 text-xs text-neutral-200">
          <li>💗 Regalos sorpresa para prácticas</li>
          <li>📸 Fotos profesionales para tu portfolio</li>
          <li>🏷 Descuentos en próximos cursos</li>
          <li>✨ Descuento para tu set de uñas press-on</li>
        </ul>
      </div>
      <a href="${WA}?text=Hola%20Lorena,%20quiero%20informaci%C3%B3n%20para%20apuntarme%20a%20un%20curso!" target="_blank" class="mt-6 block py-3 rounded-full border border-pink-400/50 hover:bg-neonPink text-white font-bold text-xs uppercase tracking-wider text-center transition">Reservar Plaza por WhatsApp</a>
    </div>
  `;

  // Modal (título h3 en font-bold text-xl en vez de font-black text-2xl)
  window.openM = function(i) {
    const c = C[i];
    const n = c[6] ? 'Maquillaje Full Glam' : c[2];
    $('mt').textContent = n;
    $('mp').textContent = c[1];
    $('md').textContent = c[4];
    $('ml').innerHTML = c[5].map(x => `<li class="flex gap-2"><span class="text-neonPink">✦</span>${x}</li>`).join('');
    $('mw').href = `${WA}?text=Hola%20Lorena,%20quiero%20reservar%20mi%20plaza%20para%20el%20curso%20de%20${encodeURIComponent(n)}%20(${encodeURIComponent(c[1])})`;
    $('modal').classList.replace('hidden', 'flex');
  };

  window.closeM = function() {
    $('modal').classList.replace('flex', 'hidden');
  };

  $('modal').onclick = e => { if (e.target == $('modal')) closeM(); };
  document.onkeydown = e => { if (e.key == 'Escape') closeM(); };

  // Galería
  $('gal').innerHTML = [
    ["maquillaje01.jpg", "Maquillaje", "Full Glam Night Look", "-rotate-2"],
    ["maquillaje02.jpg", "Peluquería", "Recogido Ondas de Novia", "rotate-2"],
    ["maquillaje03.jpg", "Artístico", "Graphic Eyes & Pedrería", "rotate-1"],
    ["maquillaje04.jpg", "Nails", "Press-On Fantasía Acrílica", "-rotate-1"]
  ].map(([u, c, t, r], i) => `
    <div class="bg-gradient-to-b from-[#180a1e] to-black p-2.5 sm:p-3 rounded-lg polaroid ${r} hover:rotate-0 hover:scale-105 transition duration-300 shadow-polaroid ${i % 2 ? 'md:mt-8' : ''}">
      <div class="overflow-hidden rounded border border-pink-900/60 aspect-[3/4]">
        <img src="img/${u}" alt="${t}" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="pt-2.5">
        <span class="text-[10px] font-bold text-neonPink uppercase tracking-wider">${c}</span>
        <p class="font-script text-lg sm:text-xl text-pink-300 leading-tight">${t}</p>
      </div>
    </div>
  `).join('');

  // Info Contacto
  $('info').innerHTML = [
    ["📍", "Dirección de Referencia", "C/ Consell de Cent con Casanova, Barcelona"],
    ["🕒", "Horarios", "Cita previa y cursos con horario adaptado a tu disponibilidad."],
    ["💬", "Atención directa", "Consultas de fechas, presupuestos a medida y reservas por WhatsApp."]
  ].map(([i, t, d]) => `
    <div class="flex items-start gap-3">
      <div class="w-11 h-11 shrink-0 rounded-xl bg-pink-950/80 border border-neonPink/40 flex items-center justify-center text-xl">${i}</div>
      <div>
        <p class="text-sm font-semibold text-white">${t}</p>
        <p class="text-sm text-pink-200/80">${d}</p>
      </div>
    </div>
  `).join('');
});