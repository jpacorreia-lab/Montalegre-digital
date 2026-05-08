let noticias = [];

async function carregarNoticias() {
  const response = await fetch('noticias.json');
  noticias = await response.json();
  mostrarNoticias(noticias);
}

function mostrarNoticias(lista) {
  const container = document.getElementById('news-container');
  container.innerHTML = '';

  lista.forEach(noticia => {
    const card = document.createElement('article');
    card.className = 'news-card';

    card.innerHTML = `
      <img src="${noticia.imagem}" alt="${noticia.titulo}">
      <div class="news-content">
        <div class="category">${noticia.categoria} · ${noticia.local}</div>
        <h2>${noticia.titulo}</h2>
        <p>${noticia.resumo}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();

  const filtradas = noticias.filter(n =>
    n.titulo.toLowerCase().includes(texto) ||
    n.resumo.toLowerCase().includes(texto) ||
    n.categoria.toLowerCase().includes(texto)
  );

  mostrarNoticias(filtradas);
});

carregarNoticias();
