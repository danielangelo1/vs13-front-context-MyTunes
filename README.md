# MyTunes

## Descrição

O MyTunes é uma aplicação que exibe uma lista de faixas musicais populares e artistas. Ele utiliza a API de Last.fm para buscar as faixas mais tocadas e as apresenta em um layout de cartões, cada um mostrando o nome da faixa, o artista e a capa do álbum (_API ESTÁ COM PROBLEMA, NÃO ESTÁ RETORNANDO CORRETAMENTE AS IMAGENS_).

Além disso, é possível adicionar uma música a playlist, limpar a playlist e deletar uma música da playlist, isso é feito pela manipulação do estado global da aplicação com o Context API.

## Funcionalidades

- Busca e exibe as faixas mais populares.
- Mostra o nome da faixa, o artista e a capa do álbum.
- Adiciona uma música a playlist, também é possivel limpar ou deletar uma música
- Busca e exibe os artistas mais populares.
- Mostra o nome da cantor, numero de ouvintes e quantidades de plays.
- Integração com a API de Last.fm.

## Tecnologias Utilizadas

- React (with Vite)
- TypeScript
- Styled-Components
- React-Toastify
- Last.FM API

## Instalação e Execução

Para rodar o projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/danielangelo1/vs13-front-context-MyTunes
   ```

2. Instale as dependências:

   ```bash
   cd vs13-front-context-MyTunes
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

## Uso

# Paginas

1. Home

   - Exibe as faixas mais populares.
   - Adiciona uma música a playlist.

2. Sobre

   - Exibe informações sobre o projeto.

3. Artistas

   - Exibe os artistas mais populares.

4. Minha Playlist

   - Exibe as músicas adicionadas a playlist.
   - Limpa a playlist.
   - Deleta uma música da playlist.

##

Feito com ❤ por Daniel
