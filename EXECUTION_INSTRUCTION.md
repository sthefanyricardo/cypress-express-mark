# Guia de Execução dos Testes Automatizados (Cypress eXpress)
Este documento contém as instruções para **instalar, configurar e executar os testes automatizados** do projeto [Cypress eXpress](https://github.com/sthefanyricardo/cypress-express-mark).

Os testes foram desenvolvidos para fins educacionais durante o curso [Cypress eXpress](https://www.udemy.com/course/cypress-express) da plataforma Udemy.

A aplicação alvo Mark L. roda em ambiente local e é necessária para execução completa da suíte de testes. Para instruções detalhadas de instalação e execução da aplicação **Mark L.**, consulte o arquivo [Detalhes aplicação Mark L.](./apps/README.md).

---

## 📌 Visão Geral
Este guia aborda:

1. Instalação dos pré-requisitos.
2. Instalação das dependências do projeto.
3. Execução dos testes (modos interativo e headless).
4. Relatórios de Teste com Allure Plugin.

---

## 1️⃣ Pré-requisitos (Configuração do Ambiente)
Antes de executar os testes, certifique-se de que possui os seguintes itens instalados na sua máquina:

1. **Ferramentas de linha de comando (CLI)**
As ferramentas de terminal, também conhecidas como linha de comando (command-line interface ou CLI), é necessária para fazer as instalações, configurar o ambiente e executar os testes.
    - [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=pt-BR&gl=BR) e Prompt de Comando: São as ferramentas padrão no Windows.
      - **Tutoriais de instalação:**
        - [Terminal do WINDOWS - APRENDA COMO USAR!](https://www.youtube.com/watch?v=3VlV3EoOi_A)
        - [Comandos do Prompt do Windows Que Você Deveria Saber](https://www.youtube.com/watch?v=66ta9rPcRZs&t=34s)
    - [Git Bash](https://git-scm.com/downloads): É um emulador de terminal que vem com o Git, muito popular no Windows.
      - **Tutoriais de instalação:**
        - [Instalando Git e GitHub no PC - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=NgWExh3bswg)
        - [Git e Github Tutorial completo - Introdução prática para iniciantes](https://www.youtube.com/watch?v=_hZf1teRFNg&t=293s)
    - [CMDER](https://cmder.app/): É uma ferramenta de terceiros que oferece uma experiência de terminal mais completa e amigável.
      - **Tutoriais de instalação:**
        - [Instalando um terminal no windows - [Cmder]](https://www.youtube.com/watch?v=2pNZgvzrZdU)
        - [#FADEV - 03 Instalando e conhecendo o Cmder](https://www.youtube.com/watch?v=tg7dQi6BLEw)

2. **Node.js:**
    - Versão neste projeto: 22.14.0 LTS
    - [Faça o download do Node.js](https://nodejs.org/en/download)
    - Gerenciadores de pacotes:
        - npm versão 11.5.2.
        - yarn versão 4.6.0 (via **Corepack**).
            - Habilitar com o comando abaixo, após instalar o Node.js:
            ``` bash
            corepack enable
            ```
    - **Tutoriais de instalação:**
      - [Como instalar o NodeJS no WINDOWS](https://www.youtube.com/watch?v=_sEwOXCKw4c)
      - [O que é o Corepack e como você pode usá-lo?](https://blog.lsantos.dev/corepack/)


3. **Java:**
    - Versão neste projeto: openjdk 21.0.8 LTS
    - [Faça o download do Java JDK Zulu](https://www.azul.com/downloads/?os=windows&package=jdk#zulu)
    - **Tutoriais de instalação:**
      - [Instalar Java JDK 21 no Windows - OpenJDK Zulu (YouTube)](https://www.youtube.com/watch?v=wZLtazPZiDE)
      - [Documentação de instalação do site da Azul](https://docs.azul.com/core/install/windows)
    > ℹ️ **Observação:** É necessário para a geração de relatórios com o **Cypress Allure Plugin**.

4. **Git**
    - [Faça o download do Git](https://git-scm.com/downloads)
    - **Tutoriais de instalação:** 
      - [Instalando Git e GitHub no PC - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=NgWExh3bswg)
      - [Git e Github Tutorial completo - Introdução prática para iniciantes](https://www.youtube.com/watch?v=_hZf1teRFNg&t=293s)

5. **Editor de Código (IDE)**
    - [Visual Studio Code](https://code.visualstudio.com/download) ou outra IDE compatível com Cypress.
    - **Tutoriais de instalação:**
      - [Instalação do VS Code para Programação em HTML e CSS (Visual Studio Code)](https://www.youtube.com/watch?v=WyXcfCPlIlk)
      - [Instalando todas as ferramentas - @Curso em Vídeo HTML5 e CSS3](Instalando todas as ferramentas - @Curso em Vídeo HTML5 e CSS3)

  > ℹ️ **Observação:** O instrutor do curso indicou o uso de versões específicas. No entanto, este projeto foi testado com as versões mais recentes (Node.js, Cypress, Java e Yarn) e funcionou corretamente.

---

## 2️⃣ Instalação das dependências do projeto
Com os pré-requisitos instalados, siga estes passos para instalar as dependências do projeto:

1. **Abra a sua ferramenta de linha de comando (CLI) e siga os passos a seguir:**
    - **Clonar o repositório via "HTTPS":**
    ```bash
    git clone https://github.com/sthefanyricardo/cypress-express-mark.git
    ```
    - **Acessar a pasta do projeto:**
    ```bash
    cd cypress-express-mark
    ```
    - **Instalar as dependências:**
    ```bash
    yarn install
    ```
    
> ℹ️ **Observação:** O instrutor do curso indicou o uso de versões específicas. No entanto, este projeto foi testado com as versões mais recentes (Node.js e Cypress) e funcionou corretamente.

---

## 3️⃣ Execução dos testes (modos interativo e headless)
Abra o terminal na pasta principal do projeto:
```bash
  cd .../cypress-express-mark
```

1. **Modo Interativo (GUI)**
    - Execute o comando para abrir a interface gráfica do Cypress:
      ```bash
      yarn cypress open
      ```
    - Na interface do Cypress:
      1. Clique em Continue
      2. Em Welcome to Cypress!, selecione E2E Testing
      3. Escolha o navegador (o padrão é Electron)
      4. Clique em Start E2E Testing in {navegador escolhido}
      5. Acesse: cypress-express-mark > Specs > E2E specs > cypress/e2e
        - Clique em home para executar a suíte de testes home
        - Clique em tasks para executar a suíte de testes tasks

2. **Modo Headless (CLI)**
    - Executar todos os testes:
      ``` bash
        yarn cypress run
      ```
    > ℹ️ Executa todos os testes da pasta cypress/e2e em modo headless.

    - Executar testes em navegador específico:
      ``` bash
        yarn cypress run --browser chrome
      ```
    > ℹ️ Os resultados são exibidos diretamente no terminal.

  - Gerar vídeos da execução:
    No arquivo cypress.config.js, adicione a opção:
    ``` bash
      module.exports = {
        e2e: {
          video: true
        },
      };
    ```
    Após isso, os [vídeos serão gravados automaticamente ](https://docs.cypress.io/app/guides/screenshots-and-videos) nas execuções em modo headless.


3. **Modo Headless com Relatório Allure Report**
    - Execute os testes gerando o relatório com o [Cypress Allure Plugin](https://github.com/Shelex/cypress-allure-plugin):
    ```bash
      yarn cypress run --env allure=true
    ```

---

## 4️⃣ Relatórios de Teste com Allure Plugin
Após a execução dos testes com o Allure habilitado (`yarn cypress run --env allure=true`), os resultados ficam armazenados na pasta: ./results/allure-report.


1. **Gerar o relatório Allure:**
```bash
  allure generate results --clean -o allure-report
```

2. **Abrir o relatório no navegador:**
```bash
  allure open allure-report
```

ℹ️ O relatório é interativo e exibe:
  - ✅ Status dos testes (pass/fail)
  - 📸 Screenshots
  - 🎥 Vídeos das execuções

---

## 🙋‍♀️ Autora
Feito com ❤️ por **Sthefany A. Ricardo**.  
📅 Última atualização: **Agosto de 2025**.