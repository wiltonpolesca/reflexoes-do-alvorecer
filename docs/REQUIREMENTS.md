# Requisitos — Site Estático "Reflexões do Alvorecer"

## 1. Visão Geral

Criar um site estático de página única (one-page/landing site) para divulgar a série de livros
**"Reflexões do Alvorecer"**, permitindo aos visitantes baixar os livros publicados e ler pequenos
artigos/reflexões. O visual deve seguir a identidade definida em
[assets/images/main-section.jpeg](../assets/images/main-section.jpeg): tons neutros/creme, dourado
e azul-marinho, tipografia serifada para títulos, e elementos ilustrativos (flores de lírio, lua,
barco, nascer do sol).

## 2. Objetivos

- Apresentar a marca/série "Reflexões do Alvorecer" com a frase de efeito: *"Palavras que
  acalentam a alma. Ideias que despertam o bem."*
- Permitir o download dos livros da série diretamente do site.
- Disponibilizar uma seção de blog/artigos curtos chamada **"Artigos e Reflexões"**.
- Ser leve, rápido e hospedável como site estático (ex.: GitHub Pages, Netlify, S3).

## 3. Escopo

### 3.1 Dentro do escopo
- Site estático (HTML/CSS/JS, sem backend obrigatório).
- Download de arquivos de livros (PDF ou EPUB) hospedados no próprio repositório/CDN.
- Listagem e leitura de artigos curtos (conteúdo estático, gerado a partir de arquivos
  Markdown/JSON no repositório).
- Layout responsivo (mobile, tablet, desktop).

### 3.2 Fora do escopo
- Autenticação de usuários.
- Comentários dinâmicos ou banco de dados.
- Loja/pagamentos.
- CMS administrativo (edição de artigos é feita via arquivos no repositório).

## 4. Estrutura de Páginas/Seções

1. **Seção Hero (Principal)**
   - Reproduz o clima de `main-section.jpeg`: título "Reflexões do Alvorecer", subtítulo, e os três
     pilares "Conhecer • Refletir • Transformar".
   - Imagem/ilustração de fundo (ambiente aconchegante ao amanhecer).

2. **Seção "Nossos Livros"**
   - Um cartão (card) para cada livro da série, cada um com: título, ícone/ilustração temática,
     breve descrição e botão **"Baixar livro"**.
   - Livros a disponibilizar:
     - **Nova Aurora** — "Histórias e reflexões que florescem virtudes e renovam esperanças."
     - **Silêncios da Mediunidade** — "O silêncio que escuta. A mediunidade que transforma."
     - **Náufragos da Fé** — "Um olhar profundo sobre os desafios das instituições e da alma
       humana."
   - Cada download deve apontar para um arquivo estático (ex.: `/downloads/nova-aurora.pdf`).

3. **Seção "Artigos e Reflexões"**
   - Listagem de artigos curtos com título, data e resumo.
   - Ao clicar, exibe o artigo completo (pode ser em página própria ou expansão na mesma página).
   - Frase de contexto: "Pensamentos que conversam com o dia a dia. Doutrina espírita,
     transformação pessoal e olhares sobre o que nos cerca."

4. **Rodapé**
   - Frase de encerramento: "Espiritualidade que inspira. Consciência que liberta. Amor que serve.
     Esperança que permanece."
   - Links de contato/redes sociais (opcional).

## 5. Requisitos Funcionais

| ID    | Descrição                                                                          |
|-------|-------------------------------------------------------------------------------------|
| RF-01 | O site deve exibir a seção principal (hero) com título, subtítulo e chamada visual. |
| RF-02 | O site deve listar os 3 livros da série com nome, descrição curta e botão de download. |
| RF-03 | Cada botão de download deve iniciar o download do arquivo do livro correspondente.  |
| RF-04 | O site deve exibir uma seção "Artigos e Reflexões" listando artigos disponíveis.    |
| RF-05 | O usuário deve poder abrir/ler o conteúdo completo de um artigo.                   |
| RF-06 | Novos artigos devem poder ser adicionados criando um novo arquivo de conteúdo, sem alterar o código do site. |
| RF-07 | Novos livros/downloads devem poder ser adicionados adicionando o arquivo e uma entrada de configuração/dados. |

## 6. Requisitos Não Funcionais

| ID     | Descrição                                                                         |
|--------|-------------------------------------------------------------------------------------|
| RNF-01 | O site deve ser totalmente estático (sem dependência de servidor/backend).         |
| RNF-02 | O site deve ser responsivo, funcionando bem em telas de celular, tablet e desktop.  |
| RNF-03 | O site deve seguir a paleta de cores e tipografia do material de referência (creme, dourado, azul-marinho, fontes serifadas). |
| RNF-04 | O tempo de carregamento inicial deve ser rápido (imagens otimizadas/compactadas).   |
| RNF-05 | O site deve ser acessível (contraste adequado, textos alternativos em imagens, navegação por teclado). |
| RNF-06 | O site deve poder ser publicado em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, S3, etc.). |

## 7. Conteúdo e Dados

- **Livros**: metadados (título, descrição, caminho do arquivo de download, capa) mantidos em um
  arquivo de dados simples (ex.: `data/books.json`).
- **Artigos**: cada artigo é um arquivo Markdown com metadados (título, data, resumo) em uma pasta
  dedicada (ex.: `content/articles/*.md`).
- **Arquivos de download**: armazenados em uma pasta `downloads/` (ou link externo, caso os
  arquivos sejam grandes demais para o repositório).

## 8. Critérios de Aceitação

- [ ] A página inicial reflete visualmente o estilo de `main-section.jpeg`.
- [ ] É possível baixar cada um dos 3 livros da série a partir do site.
- [ ] A seção "Artigos e Reflexões" existe e exibe ao menos um artigo de exemplo.
- [ ] O site funciona corretamente em resoluções mobile e desktop.
- [ ] O site não requer nenhum servidor/banco de dados para funcionar.

## 9. Referências

- Imagem de referência visual: [assets/images/main-section.jpeg](../assets/images/main-section.jpeg)
