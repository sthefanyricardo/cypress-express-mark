# Guia de Instruções da Aplicação Mark L.

Este diretório contém a aplicação web e API **Mark L.**, um gerenciador de tarefas simples utilizado como alvo para os testes automatizados do projeto [Cypress eXpress](https://github.com/sthefanyricardo/cypress-express-mark).

**⚠️ A aplicação precisa estar em execução para que os testes de ponta a ponta (E2E) funcionem corretamente.**

---

## 📌 Visão Geral
Este guia aborda:

1. Pré-requisitos (Configuração do Ambiente).
2. Configuração da aplicação.
3. Como Rodar a Aplicação.
4. Solução de Problemas Comuns.

---

## 1️⃣ Pré-requisitos (Configuração do Ambiente)
Para iniciar a aplicação localmente, certifique-se de que você já tem os pré-requisitos instalados e que já tenha feito a instalação das dependências do projeto, conforme o guia do [Instruções instalação do projeto](./EXECUTION_INSTRUCTION.md), e somente depois siga os passos abaixo.

---

## 2️⃣ Configuração da aplicação
Com os pré-requisitos instalados, abra a sua ferramenta de linha de comando (CLI) e siga os passos abaixo para configurar a aplicação:

1. **Acesse a pasta `apps` via terminal:**
```bash
  cd cypress-express-mark/apps
```

2. **Descompacte os arquivos de instalação:**
    - Descompacte os arquivos da pasta `mark-dev-build-r3.zip`.
    - Dentro da pasta `mark-dev-build-r3` descompactada, copie somente as pastas `api` e `web` para dentro da pasta `apps`.
    - A sua estrutura de diretórios deve ficar assim:
      ```
      📦 cypress-express-mark/apps
      ┣ 📂 api                      # Aplicação back-end (API)
      ┣ 📂 web                      # Aplicação front-end (web)
      ┣ 📜 mark-dev-build-r3.zip    # Pasta com os arquivos zipados da aplicação
      ┗ 📜 README.md                # Documentação da aplicação
      ```

3.  **Atualize o better-sqlite3:**
⚠️ Importante: Atualize o `better-sqlite3` ANTES de rodar `npm install` nas pastas `api` e `web`.
 - Na pasta "cypress-express-mark/apps", atualize o better-sqlite3 com o comando abaixo:
    ```bash
      npm install better-sqlite3@latest
    ```

4.  **Instale as dependências da aplicação Mark L.:**
  - **API (Back-end):**
    Na pasta "cypress-express-mark/apps", vá para a pasta: "cypress-express-mark/apps/api":
    ```bash
      cd api
    ```
    e instale as dependências da api:
    ```bash
      npm install
    ```

  - **Web (Front-end):**
    Na pasta "cypress-express-mark/apps", vá para a pasta: "cypress-express-mark/apps/web":
    ```bash
      cd web
    ```
    e instale as dependências da web:
    ```bash
      npm install
    ```

  > **Observação:** O projeto principal utiliza o `yarn`, mas você pode usar o `npm` caso prefira. Os comandos abaixo são para o `npm`.

---

## 3️⃣ Como Rodar a Aplicação Mark L.
As aplicações web e API devem ser executadas **simultaneamente** em terminais separados.

1. **Iniciar a API (Back-end)**

Abra um terminal, acesse a pasta `api` e rode a API:
  -  Acessar a pasta API da aplicação
      ```bash
        cd cypress-express-mark/apps/api
      ```
  - Executar o comando para iniciar a aplicação
      ```bash
        npm run dev
      ```

2. **Iniciar a Web (Front-end)**

Abra um SEGUNDO terminal, acesse a pasta `web` e rode a aplicação web:

  -  Acessar a pasta web da aplicação
      ```bash
        cd cypress-express-mark/apps/web
      ```
  - Executar o comando para iniciar a aplicação
      ```bash
        npm run dev
      ```

> ℹ️ **Observação:** Após executar os comandos, a aplicação web estará disponível em `http://localhost:3000` e a API em `http://localhost:3333`.

---

## 4️⃣ Solução de Problemas Comuns

| Problema                                                                 | Solução                                                                                               |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ❌ Erro ao instalar dependências (`better-sqlite3` falha na instalação). | Certifique-se de ter atualizado o pacote com `npm install better-sqlite3@latest` antes de rodar `npm install`. |
| ❌ Testes falham porque não encontram endpoints da API/Web.   | Verifique se **API** (`cd api && npm run dev`) e **Web** (`cd web && npm run dev`) estão rodando antes de iniciar os testes. |
| ❌ O front-end abre, mas não carrega dados.                              | Verifique se a **API** está rodando em `http://localhost:3333`. A aplicação Web depende da API estar ativa. |

---

## 🙋‍♀️ Autora
Feito com ❤️ por **Sthefany A. Ricardo**.  
📅 Última atualização: **Agosto de 2025**.