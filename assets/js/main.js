// Montalegre Digital — main.js

// Data actual na topbar
(function() {
  const el = document.getElementById('data-hoje');
  if (!el) return;
  const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const hoje = new Date();
  el.textContent = `${dias[hoje.getDay()]}, ${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()} · Edição N.º 0`;
})();

// Partilha de artigos individuais
function partilharArtigo(rede) {
  const url = encodeURIComponent(window.location.href);
  const titulo = encodeURIComponent(document.title);
  const links = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter:  `https://twitter.com/intent/tweet?text=${titulo}&url=${url}`,
    whatsapp: `https://api.whatsapp.com/send?text=${titulo}+${url}`,
    email:    `mailto:?subject=${titulo}&body=${url}`
  };
  if (links[rede]) window.open(links[rede], '_blank', 'noopener');
}
