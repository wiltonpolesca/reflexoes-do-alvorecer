# Plano de Execução — Site "Reflexões do Alvorecer"

Baseado em [docs/REQUIREMENTS.md](./REQUIREMENTS.md). O site será 100% estático (HTML/CSS/JS puro,
sem build step), pronto para publicação via **GitHub Pages**.

## Decisões Técnicas

- **Sem framework/build**: HTML5 + CSS3 + JavaScript vanilla. Evita dependência de Node/bundlers
  e garante compatibilidade direta com GitHub Pages (Pages serve arquivos estáticos como estão).
- **Dados de livros** em `assets/data/books.json`, carregados via `fetch()` no `main.js`.
- **Artigos** definidos em `assets/data/articles.json` (título, data, resumo, corpo em HTML/texto)
  para evitar necessidade de parser Markdown no cliente.
- **Downloads** dos livros ficam em `downloads/` (arquivos `.pdf` placeholder até os arquivos reais
  serem entregues).
- **Sem Jekyll processing**: adicionar arquivo `.nojekyll` na raiz para que o GitHub Pages sirva os
  arquivos exatamente como estão (evita problemas com pastas iniciadas por `_`, se houver).
- **Caminhos relativos** em todo o HTML/CSS/JS para funcionar tanto em domínio raiz quanto em
  `usuario.github.io/repositorio/`.

## Estrutura de Arquivos Proposta

```
index.html
.nojekyll
assets/
  images/
    main-section.jpeg
  css/
    styles.css
  js/
    main.js
  data/
    books.json
    articles.json
downloads/
  nova-aurora.pdf (placeholder)
  silencios-da-mediunidade.pdf (placeholder)
  naufragos-da-fe.pdf (placeholder)
docs/
  REQUIREMENTS.md
  PLAN.md
```

## Tarefas

1. **Scaffold inicial** — criar `index.html`, `assets/css/styles.css`, `assets/js/main.js`,
   `.nojekyll`.
2. **Seção Hero** — título "Reflexões do Alvorecer", subtítulo, pilares "Conhecer • Refletir •
   Transformar", usando `main-section.jpeg` como imagem de fundo/destaque.
3. **Seção "Nossos Livros"** — cards para Nova Aurora, Silêncios da Mediunidade e Náufragos da Fé,
   renderizados a partir de `books.json`, cada um com botão de download (`download` attribute).
4. **Dados e placeholders de download** — criar `books.json` e arquivos placeholder em
   `downloads/` para os 3 livros.
5. **Seção "Artigos e Reflexões"** — lista de artigos a partir de `articles.json`, com
   abrir/fechar do conteúdo completo (modal ou expansão inline via JS, sem reload de página).
6. **Conteúdo de exemplo** — ao menos 1 artigo de exemplo em `articles.json`.
7. **Rodapé** — frase de encerramento e links (placeholders).
8. **Estilo visual** — paleta creme/dourado/azul-marinho, tipografia serifada nos títulos,
   responsivo (mobile-first, breakpoints para tablet/desktop), acessibilidade (contraste, alt text,
   navegação por teclado, `aria-*` onde necessário).
9. **Compatibilidade com GitHub Pages** — usar apenas caminhos relativos, adicionar `.nojekyll`,
   testar que não há chamadas a servidor/backend.
10. **Verificação local** — servir a pasta localmente e validar todas as seções, links de download
    e artigos.

## Critérios de "Pronto"

- Todas as tarefas acima concluídas.
- `index.html` abre corretamente ao servir a pasta com um servidor estático simples.
- Os 3 botões de download funcionam (baixam os arquivos placeholder).
- A seção de artigos exibe e permite ler o artigo de exemplo.
- Layout responsivo validado em larguras mobile e desktop.
- Nenhuma dependência externa que quebre no GitHub Pages (sem CORS para APIs externas, sem
  variáveis de ambiente/backend).

## Publicação no GitHub Pages (pós-implementação)

1. Commitar e enviar (`push`) para o branch principal (ou branch dedicado, ex. `gh-pages`).
2. Nas configurações do repositório → *Pages*, selecionar o branch/pasta (`/ (root)`).
3. Aguardar o build automático do Pages e validar a URL pública gerada.
