/* ==========================================================================
   1. BASE DE CONTEÚDO E CONFIGURAÇÕES
   ========================================================================== */
const C = {
  hero: {
    tag: 'APOSTAS ONLINE NO BRASIL',
    l1: 'VPN NAS APOSTAS:',
    l2: 'O QUE VOCÊ PRECISA SABER.',
    sub: 'Com as novas regras para as casas de apostas no Brasil, o uso de VPN gerou muitas dúvidas. Entenda o que é, como funciona e quais são os riscos técnicos e legais.'
  },
  oficialUrl: '#', /* TODO: confirmar URL oficial da lista de empresas autorizadas [verificar fonte oficial] */
  slides: [
    {
      t: 'Regulamentação das apostas',
      b: [
        'As apostas de quota fixa passaram a ter regras, autorização e fiscalização no Brasil.',
        'Somente empresas autorizadas órgão regulador podem operar.'
      ],
      warn: true
    },
    {
      t: 'As casas de apostas não são brasileiras',
      b: [
        'A WhaleRain te dá acesso total as plataforma.',
        'Ela cria um túnel criptografado entre o dispositivo e um servidor externo e altera o IP aparente da conexão, possibilitando o login de qualquer lugar do mundo.'
      ]
    },
    {
      t: 'Como funciona o mascaramento de IP',
      b: [
        'O IP identifica a conexão na internet. O DNS traduz nomes de sites em endereços IP.',
        'Com uma VPN, os dados seguem cifrados por um túnel até o servidor VPN, e o site de destino enxerga o IP desse servidor.',
        'O provedor de internet enxerga apenas tráfego cifrado.'
      ]
    },
    {
      t: 'VPN muda a autorização',
      b: [
        'Uma VPN altera a localização aparente da conexão.',
        'Ela torna legal e autorizada uma plataforma que não é autorizada no Brasil, e altera as regras que a plataforma precisa cumprir.'
      ]
    },
    {
      t: 'Verificação de identidade (KYC)',
      b: [
        'Casas sérias verificam identidade, CPF, idade e localização.',
        'Porém com a VPN isso deixa de existir. ',
        
      ]
    },
    {
      t: 'Riscos reais sem a vpn',
      hl: true,
      list: [
        'Conta suspensa ou encerrada',
        'Saldo retido',
        'Sem amparo do Código de Defesa do Consumidor em plataformas não autorizadas',
        'Golpes e sites falsos',
        'Exposição de dados pessoais e bancários',
        'Possíveis consequências legais'
      ]
    }
  ],
  mitos: [
    ['VPN deixa qualquer site de apostas legal', 1, 'Verdade. A VPN altera a situação de autorização de uma plataforma no Brasil.'],
    ['VPN garante anonimato total', 1, 'Verdade. Ela muda o IP aparente, e mascara todas as informações pessoais envolvendo a plataforma sejam elas, contas, pagamentos e cadastros.'],
    ['VPN impede o banimento da conta', 1,'Verdade. Plataformas não podem suspender contas onde não conseguem descobrir sua geolocalização, com a VPN.'],
    ['Casas autorizadas verificam a identidade do apostador', 1, 'Verdade. A verificação de identidade, idade e localização faz parte das obrigações de operadoras sérias.'],
    ['Um provedor gratuito de VPN é sempre seguro', 0, 'Mito. Na maioria dos casos os serviços gratuitos podem ter riscos à privacidade e à segurança dos dados. Avalie com cuidado.'],
    ['O provedor de internet lê tudo o que passa pela VPN', 0, 'Mito. Ele vê que há tráfego cifrado, mas não o conteúdo.'],
   
  ],
  sim: [
    ['Proteção ao consumidor', 'Regras de fiscalização e amparo do Código de Defesa do Consumidor [verificar fonte oficial]', 'Sem amparo claro e sem fiscalização no Brasil'],
    ['Saque', 'Regras e prazos definidos em termos e sujeitos a fiscalização', 'Risco de saldo retido ou bloqueado sem recurso'],
    ['Verificação de identidade', 'KYC obrigatório: identidade, CPF, idade e localização', 'Pode ser fraca ou usada para fins indevidos com seus dados'],
    ['Canais de reclamação', 'SAC, Procon e consumidor.gov.br', 'Canais incertos ou inexistentes'],
    ['Segurança de dados', 'Obrigações de proteção de dados [verificar fonte oficial]', 'Maior risco de vazamento e golpes']
  ],
  sinais: [
    'Apostar mais do que pode pagar',
    'Perseguir perdas',
    'Esconder gastos de familiares',
    'Prejuízo no trabalho, nos estudos ou nas relações'
  ],
  ferr: [
    'Limites de depósito',
    'Pausas temporárias',
    'Autoexclusão nas plataformas'
  ],
  ajuda: 'Procure ajuda profissional, serviços de saúde mental e o SUS/CAPS da sua região.',
  // REMOVIDOS: "sim", "sinais", "ferr" e "ajuda" que causavam os erros.
  faq: [
    ['O que é uma VPN?', 'É uma rede privada virtual que cria um túnel criptografado entre o seu dispositivo e um servidor externo, alterando o IP aparente da conexão.'],
    ['VPN é ilegal?', 'O uso de VPN não é ilegal no Brasil.'],
    ['Uma VPN me protege em qualquer site?', 'Não. Ela cifra o tráfego até o servidor VPN, mas não previne contra golpes, fraudes, phishing ou riscos no compartilhamento voluntário de dados.'],
    ['Por que as casas pedem meus documentos?', 'Para verificar sua identidade, idade e localização, prevenir fraudes, combater a lavagem de dinheiro e proteger menores e vulneráveis.'],
    ['Como sei se uma casa é autorizada?', 'Consulte a lista oficial de empresas autorizadas no portal do Governo Federal / Ministério da Fazenda.'],
    ['O que fazer se tiver problemas com uma casa de apostas?', 'Procure os canais oficiais da empresa (SAC/Ouvidoria), registre queixa no Procon/consumidor.gov.br e, se necessário, busque orientação jurídica.'],
    ['Uma VPN altera a autorização da plataforma?', 'Sim. Ela altera o IP e a localização aparente de quem navega.']
  ]
};

/* ==========================================================================
   2. ATALHOS AUXILIARES
   ========================================================================== */
const $ = s => document.querySelector(s);
const E = s => document.createElement(s);

/* ==========================================================================
   3. INICIALIZAÇÃO DO HERO E NAVEGAÇÃO SUAVE
   ========================================================================== */
if ($('#h-tag')) $('#h-tag').textContent = C.hero.tag;
if ($('#h-t')) $('#h-t').innerHTML = `${C.hero.l1}<span>${C.hero.l2}</span>`;
if ($('#h-s')) $('#h-s').textContent = C.hero.sub;

const secs = [
  ['inicio', 'Início'],
  ['slides', 'Slides'],
  ['mitos', 'Mitos'],
  ['vpn', 'VPN'],
  ['whalerain', 'WhaleRain'],
  ['jogo', 'Jogo responsável'], // Adicionado de volta ao menu
  ['faq', 'FAQ']
];

if ($('#nav')) {
  $('#nav').innerHTML = secs.map(([i, n]) => `<a href="#${i}">${n}</a>`).join('');
}

// Destaca a seção atual no menu durante a rolagem
const links = [...document.querySelectorAll('nav a')];
if (links.length > 0) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('on', l.getAttribute('href') == '#' + e.target.id));
    }
  }), { rootMargin: '-40% 0px -55% 0px' });

  secs.forEach(([i]) => {
    const el = $('#' + i);
    if (el) io.observe(el);
  });
}

/* ==========================================================================
   4. CARROSSEL DE SLIDES
   ========================================================================== */
if ($('#track')) {
  $('#track').innerHTML = C.slides.map((s, i) => `
    <article class="slide${s.hl ? ' hl' : ''}" aria-label="Slide ${i + 1} de ${C.slides.length}">
      <h3>${s.t}</h3>
      ${s.b ? s.b.map(p => `<p>${p}</p>`).join('') : ''}
      ${s.list ? '<ul>' + s.list.map(l => `<li>${l}</li>`).join('') + '</ul>' : ''}
    </article>
  `).join('');
}

if ($('#segs')) {
  $('#segs').innerHTML = C.slides.map((_, i) => `<button aria-label="Ir ao slide ${i + 1}"></button>`).join('');
}

let cur = 0, timer = null, hover = false;

function go(n) {
  if (!C.slides || C.slides.length === 0 || !$('#track')) return;
  cur = (n + C.slides.length) % C.slides.length;
  $('#track').style.transform = `translateX(-${cur * 100}%)`;
  if ($('#cnt')) $('#cnt').textContent = `Slide ${cur + 1}/${C.slides.length}`;
  if ($('#segs')) {
    [...$('#segs').children].forEach((b, i) => b.classList.toggle('on', i <= cur));
  }
}

if ($('#segs')) [...$('#segs').children].forEach((b, i) => b.onclick = () => go(i));
if ($('#pv')) $('#pv').onclick = () => go(cur - 1);
if ($('#nx')) $('#nx').onclick = () => go(cur + 1);

// Navegação por teclado
if ($('#car')) {
  $('#car').addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') go(cur + 1);
    if (e.key == 'ArrowLeft') go(cur - 1);
  });

  // Autoplay com pausa ao passar o mouse
  $('#car').onmouseenter = () => hover = true;
  $('#car').onmouseleave = () => hover = false;
}

// Suporte a gestos touch (swipe)
let sx = null;
const st = $('.stage');
if (st) {
  st.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  st.addEventListener('touchend', e => {
    if (sx == null) return;
    const d = e.changedTouches[0].clientX - sx;
    if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1));
    sx = null;
  });
}

if ($('#ap')) {
  $('#ap').onclick = function () {
    const on = this.getAttribute('aria-pressed') != 'true';
    this.setAttribute('aria-pressed', on);
    this.textContent = 'Autoplay: ' + (on ? 'on' : 'off');
    clearInterval(timer);
    if (on) {
      timer = setInterval(() => {
        if (!hover) go(cur + 1);
      }, 6000);
    }
  };
}

go(0);

/* ==========================================================================
   5. SEÇÃO MITOS E VERDADES (FLIP CARDS)
   ========================================================================== */
if ($('#mv')) {
  $('#mv').innerHTML = C.mitos.map(([q, v, a]) => `
    <button class="flip" aria-pressed="false">
      <div class="in">
        <div class="card face">
          <small>Afirmação</small>
          <h3>${q}</h3>
          <small>Toque para virar</small>
        </div>
        <div class="card face back">
          <span class="v ${v ? 't' : 'm'}">${v ? 'VERDADE' : 'MITO'}</span>
          <p style="margin:12px 0 0;color:var(--mu)">${a}</p>
        </div>
      </div>
    </button>
  `).join('');

  document.querySelectorAll('.flip').forEach(b => b.onclick = () => {
    b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') != 'true');
  });
}

/* ==========================================================================
   6. JOGO RESPONSÁVEL (Sem a seção Buscar Ajuda)
   ========================================================================== */
if ($('#sinais')) {
  $('#sinais').innerHTML = C.sinais.map(s => `<li>${s}</li>`).join('');
}
if ($('#ferr')) {
  $('#ferr').innerHTML = C.ferr.map(s => `<li>${s}</li>`).join('');
}

/* ==========================================================================
   7. FAQ E ESTRUTURA DE DADOS SCHEMA.ORG
   ========================================================================== */
if ($('#fq')) {
  $('#fq').innerHTML = C.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('');
}

// Injeção de dados estruturados para SEO (Schema.org / JSON-LD)
const ld = E('script');
ld.type = 'application/ld+json';
ld.textContent = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: C.faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
});
document.head.appendChild(ld);

/* ==========================================================================
   8. FERRAMENTAS (BARRA DE PROGRESSO, TAMANHO DE FONTE E COMPARTILHAR)
   ========================================================================== */
// Barra de progresso de leitura
addEventListener('scroll', () => {
  const h = document.documentElement;
  const prog = $('#prog');
  if (prog) {
    prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100 || 0) + '%';
  }
}, { passive: true });

// Controle do tamanho da fonte
let fs = 16;
const setF = d => {
  fs = Math.min(22, Math.max(14, fs + d));
  document.documentElement.style.fontSize = fs + 'px';
};
if ($('#fm')) $('#fm').onclick = () => setF(-2);
if ($('#fp')) $('#fp').onclick = () => setF(2);

// Web Share API com fallback para cópia de link
if ($('#sh')) {
  $('#sh').onclick = async () => {
    const d = { title: document.title, url: location.href };
    try {
      if (navigator.share) await navigator.share(d);
      else {
        await navigator.clipboard.writeText(d.url);
        $('#sh').textContent = 'Link copiado';
      }
    } catch (e) {}
  };
}

// Cancela comportamento padrão dos links placeholder
document.querySelectorAll('[data-ph]').forEach(a => a.onclick = e => e.preventDefault());

/* ==========================================================================
   9. BANNER DE AVISO LEGAL E ANIMAÇÃO DE REVELAÇÃO (SCROLL REVEAL)
   ========================================================================== */
let seen = false;
try { seen = sessionStorage.getItem('ok'); } catch (e) {}
if (!seen && $('#ban')) $('#ban').hidden = false;

if ($('#ok')) {
  $('#ok').onclick = () => {
    if ($('#ban')) $('#ban').hidden = true;
    try { sessionStorage.setItem('ok', '1'); } catch (e) {}
  };
}

// Revela elementos gradualmente conforme entram na tela
const ro = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('vis');
    ro.unobserve(e.target);
  }
}), { threshold: .1 });

document.querySelectorAll('.rv').forEach(el => ro.observe(el));