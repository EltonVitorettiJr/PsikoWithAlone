<h1 align="center">Portfólio de Artista VFX - PsikoWithAOne</h1>

<h3 align="center">Portfólio Dinâmico e Responsivo</h3>

<br>

<p align="center">
  <a href="#art-sobre-o-projeto">Sobre o Projeto</a> | 
  <a href="#computer-tecnologias-usadas">Tecnologias Usadas</a> | 
  <a href="#bug-problemas">Problemas</a>
</p>

<img src="https://res.cloudinary.com/dtgimo0rh/image/upload/v1762722176/celular-computador-imagem_quhpjb.png">

<br>

# :art: Sobre o Projeto

Este é um projeto de portfólio dinâmico e responsivo desenvolvido para o artista de VFX PsikoWithAOne. O site apresenta seus trabalhos mais recentes, com um sistema de filtragem de categoria e um design "mobile-first".

O site é construído em React (com Vite) e todo o conteúdo é gerenciado manualmente através de um arquivo de dados local, facilitando a curadoria dos melhores trabalhos.

<br>

## ✨ Features Principais

* **Design Responsivo:** Layout adaptável que funciona perfeitamente em desktops e dispositivos móveis.
* **Filtro de Categoria:** Permite aos visitantes filtrar os trabalhos por tipo (ex: `Video`, `ClipsVisualizer`, `Commercial Works`).
* **Menu de Navegação Inteligente:**
    * **Desktop:** Exibe uma barra de filtros fixa.
    * **Mobile:** Exibe um ícone de menu que abre um pop-up de filtragem.
* **Conteúdo Manual (Curadoria):** Os vídeos são incorporados ("embedados") manualmente do Instagram, garantindo que apenas os melhores trabalhos sejam exibidos.
* **Performance:** Utiliza `React.memo` para otimizar a performance durante a filtragem e renderização.

## :computer: Tecnologias Usadas

* **React** (Biblioteca de UI)
* **Vite** (Ambiente de desenvolvimento e build)
* **Styled-Components** (Estilização CSS-in-JS)
* **React Router** (Gerenciamento de rotas)
* **Vercel** (Deploy e Hospedagem)

* ## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina local.

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/EltonVitorettiJr/PsikoWithAOne.git](https://github.com/EltonVitorettiJr/PsikoWithAOne.git)
    cd PsikoWithAOne
    ```

2.  **Instale as dependências:**
    *(Este projeto usa **Yarn**. Certifique-se de não misturar com o `npm`)*.
    ```sh
    yarn install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```sh
    yarn dev
    ```

4.  **Abra no navegador:**
    O projeto estará disponível em `http://localhost:5173` (ou em qualquer porta que o Vite indicar).

## 📦 Como Adicionar Novos Vídeos

Este portfólio foi projetado para ser gerenciado manualmente (curadoria). Para adicionar um novo vídeo, você **não** precisa de API, apenas de 2 minutos:

1.  **Pegue o Código de Incorporação:**
    * Vá até o post do vídeo no Instagram (pelo navegador do computador).
    * Clique nos três pontinhos (`...`).
    * Selecione **"Incorporar" (Embed)**.
    * Clique em **"Copiar código de incorporação"**.

2.  **Abra o "Banco de Dados" Local:**
    * No seu projeto, abra o arquivo: `src/data/portfolioVideos.js`

3.  **Adicione o Novo Objeto:**
    * Dentro do array `allVideos`, adicione um novo objeto com o `id`, a `category` correta e o `embedCode` que você acabou de copiar.

    ```javascript
    // Exemplo de como adicionar:
    export const allVideos = [
      {
        id: 'insta_1',
        category: 'Video',
        embedCode: `<blockquote ...>...</blockquote>`
      },
      {
        id: 'insta_2',
        category: 'ClipsVisualizer',
        embedCode: `<blockquote ...>...</blockquote>`
      },
      // COLE O SEU NOVO VÍDEO AQUI
      {
        id: 'insta_3_novo', // Dê um ID único (ex: 'insta_3')
        category: 'Commercial Works', // Escolha a categoria correta
        embedCode: `...COLE O CÓDIGO DO INSTAGRAM AQUI...`
      }
    ];
    ```

4.  **Pronto!**
    * Salve o arquivo.
    * Faça o commit e envie para o GitHub (`git add .`, `git commit`, `git push`).

## 🌐 Deploy

O deploy deste projeto é contínuo e automático, gerenciado pela **Vercel**.

Qualquer `push` ou `merge` para a branch `master` (ou `main`) irá acionar um novo build e publicar a versão mais recente do site.


# :bug: Problemas

Sinta-se a vontade em procurar ou corrigir bugs encontrados!

Feito Por Elton Vitoretti Jr. Entre em contato: [LinkedIn](www.linkedin.com/in/elton-vitoretti-jr)
