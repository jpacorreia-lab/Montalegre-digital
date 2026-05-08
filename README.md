# Montalegre Digital

> *"Tudo o que vejo tem raiz e altura."* — Miguel Torga

O jornal digital de Montalegre. Ambiente, Cultura, Política, Desporto e Opinião.

---

## Colocar online em 5 passos

### 1. Criar o repositório no GitHub

1. Abre [github.com](https://github.com) e faz login
2. Clica em **New repository**
3. Nome: `montalegre-digital` (ou `montalegredigital.github.io` para URL mais limpa)
4. Visibilidade: **Public**
5. Clica **Create repository**

### 2. Fazer upload dos ficheiros

**Opção A — Arrastar e largar (mais simples):**
1. Na página do repositório, clica **uploading an existing file**
2. Arrasta toda a pasta `montalegre-digital/` para a janela
3. Escreve na mensagem: `Edição N.º 0 — lançamento`
4. Clica **Commit changes**

**Opção B — Git (linha de comandos):**
```bash
cd montalegre-digital
git init
git add .
git commit -m "Edição N.º 0 — lançamento"
git branch -M main
git remote add origin https://github.com/TU_UTILIZADOR/montalegre-digital.git
git push -u origin main
```

### 3. Activar o GitHub Pages

1. No repositório, vai a **Settings → Pages**
2. Em *Source*, selecciona **GitHub Actions**
3. O site fica disponível em `https://TU_UTILIZADOR.github.io/montalegre-digital`

O deploy é automático — cada vez que actualizas um ficheiro, o site actualiza em ~1 minuto.

---

## Como publicar uma notícia nova

### Criar o artigo

1. Vai à pasta `artigos/`
2. Copia o ficheiro `candidatura-barroso-unesco.html` e renomeia para o slug da notícia
   - Exemplo: `gd-montalegre-sobe-serie-c.html`
3. Edita os campos:
   - `<title>` — título da notícia
   - `og:title` e `og:description` — para partilha nas redes sociais
   - `.rubric` — categoria (Ambiente / Cultura / Política / Desporto / Opinião)
   - `.artigo-titulo` — título completo
   - `.artigo-deck` — subtítulo em itálico
   - `.artigo-byline` — autor e data
   - `.artigo-corpo p` — corpo da notícia

### Adicionar à página inicial

Abre `index.html` e acrescenta o artigo na secção correspondente, seguindo o padrão dos existentes.

### Fazer commit

```bash
git add .
git commit -m "Notícia: GD Montalegre sobe à série C"
git push
```

O site actualiza automaticamente em ~1 minuto.

---

## Estrutura de ficheiros

```
montalegre-digital/
├── index.html              ← Página inicial
├── ambiente.html           ← Secção Ambiente
├── cultura.html            ← Secção Cultura
├── politica.html           ← Secção Política
├── desporto.html           ← Secção Desporto
├── opiniao.html            ← Secção Opinião
├── artigos/
│   ├── candidatura-barroso-unesco.html   ← Template de artigo
│   └── [outras-noticias].html
├── assets/
│   ├── css/
│   │   └── main.css        ← Estilos
│   ├── js/
│   │   └── main.js         ← JavaScript
│   └── imagens/            ← Fotos dos artigos
└── .github/
    └── workflows/
        └── deploy.yml      ← Deploy automático
```

---

## Passos seguintes (próximas fases)

| Fase | O que adicionar |
|------|----------------|
| **2** | Backoffice editorial (Netlify CMS) — a equipa escreve sem código |
| **3** | Script de scraping das fontes (Câmara, Jornal Nordeste, Rádio Barroso) |
| **4** | Geração automática de rascunhos com a API Claude |
| **5** | Newsletter automática com Mailchimp |

---

## Domínio próprio (opcional)

Para usar `montalegredigital.pt` em vez de `github.io`:

1. Compra o domínio em [registro.pt](https://registro.pt) (~10€/ano)
2. No DNS do domínio, adiciona um registo CNAME a apontar para `TU_UTILIZADOR.github.io`
3. Em **Settings → Pages → Custom domain**, escreve `montalegredigital.pt`

---

## Contacto e contribuições

Para questões técnicas ou para adicionar colaboradores à equipa editorial, contacta através do repositório GitHub.

---

*Montalegre Digital — Ano I, Edição N.º 0*
