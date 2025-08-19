# Curso Cypress Expert
Este repositório contém o projeto desenvolvido durante o curso [Cypress eXpress](https://www.udemy.com/course/cypress-express/), ministrado por **Fernando Papito** na plataforma **Udemy**.

O projeto utiliza o Cypress para testar a aplicação **Mark L.**, construída com **Node.js** e executada em ambiente local.

## 📚 Sobre o Curso
O curso Cypress eXpress foi projetado para ensinar automação de testes do zero, de forma rápida e prática.

Ele apresenta o Cypress, um dos frameworks JavaScript mais populares para testes de aplicações web, destacando sua importância para otimizar o processo de testes de regressão.

📌 Público-alvo: Analistas de Testes de Software e Analistas de Automação de Testes que desejam aprender a criar projetos end-to-end utilizando a ferramenta cypress, aplicando boas práticas e simulando o comportamento real de um usuário.

## 📖 Sobre o Projeto
O objetivo principal é aprender e aplicar conceitos de automação de testes com Cypress, explorando:
- Configuração do ambiente
- Estruturação de testes
- Boas práticas de automação
- Geração de relatórios e evidências (screenshots e vídeos)

### 📑 Conteúdo do Curso
Durante o curso, foram aplicados os seguintes conceitos:

* Construir um projeto de testes de ponta a ponta para aplicações web.
* Automatizar testes de regressão com o Cypress.
*  Geração de relatórios com evidências (screenshots e vídeos)
* Preencher formulários automaticamente.
* Aplicar boas práticas para a implementação de testes automatizados.
* Validar o comportamento esperado da aplicação.
* Automatizar as ações que o usuário realiza em um navegador web.
* Testar aplicações simulando um ambiente real.

---

## ✅ Funcionalidades dos Testes
Os testes automatizados neste projeto cobrem as seguintes funcionalidades da aplicação Mark L.:

* Automação de testes de regressão ou testes de ponta a ponta (E2E).
* Simulação de ações reais do usuário:
  * Preenchimento automático de formulários.
* Validação do comportamento esperado da aplicação:
  * Como campos obrigatórios
  * Conclusão de tarefas
  * Prevenção de inclusão de tarefas duplicadas.

---

## 📁 Estrutura do Repositório
O repositório está organizado em pastas, cada uma correspondente a um nível de complexidade:

```
📦 cypress-express-mark/
 ┣ 📂 apps/                        # Aplicação de demonstração Mark L. (alvo dos testes)
 ┃ ┣ 📂 api/                       # Back-end da aplicação (API)
 ┃ ┣ 📂 web/                       # Front-end da aplicação
 ┃ ┣ 📜 mark-dev-build-r3.zip      # Build compactado da aplicação
 ┃ ┗ 📜 README.md                  # Guia de instalação/execução da aplicação Mark L.
 ┣ 📂 cypress/                     # Diretório principal dos testes automatizados (Cypress)
 ┃ ┣ 📂 downloads/                 # Arquivos baixados durante os testes
 ┃ ┣ 📂 e2e/                       # Casos de teste E2E (ponta a ponta)
 ┃ ┣ 📂 fixtures/                  # Massa de dados para os testes
 ┃ ┣ 📂 screenshots/               # Evidências de falhas (prints automáticos)
 ┃ ┣ 📂 support/                   # Comandos customizados, configurações e hooks
 ┃ ┗ 📂 videos/                    # Gravações das execuções dos testes
 ┣ 📂 insomnia_collection/         # Coleção de requisições para testes manuais da API
 ┃ ┣ 📂 imgs/                      # Imagens auxiliares da coleção (se houver)
 ┃ ┣ 📜 Insomnia_markL.json        # Arquivo da coleção (para importar no Insomnia)
 ┃ ┗ 📜 README.md                  # Guia de uso da coleção do Insomnia
 ┣ 📂 results/                     # Relatórios e evidências de execução
 ┃ ┣ 📂 allure-report/             # Relatório HTML interativo gerado pelo Allure
 ┃ ┗ 📂 allure-results/            # Resultados brutos da execução (JSON/XML)
 ┣ 📜 .editorconfig                # Padrões de formatação de código
 ┣ 📜 .gitattributes               # Configurações específicas para o Git
 ┣ 📜 .gitignore                   # Arquivos/pastas ignorados pelo Git
 ┣ 📜 cypress.config.js            # Configurações globais do Cypress
 ┣ 📜 EXECUTION_INSTRUCTION.md     # Guia de instalação e execução do projeto
 ┣ 📜 package.json                 # Dependências e scripts do projeto
 ┣ 📜 README.md                    # Documentação principal do repositório
 ┣ 📜 jsconfig.json                # Configurações TypeScript/JavaScript
 ┗ 📜 yarn.lock                    # Controle de versões exatas das dependências

```

---

## 🛠️ Tecnologias, Ferramentas e Requisitos
Este projeto foi desenvolvido com as seguintes ferramentas e tecnologias. Certifique-se de que sua máquina atende aos requisitos abaixo para executar os testes.

### Linguagem e Frameworks
- [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) → Linguagem utilizada para implementação dos testes.  
- [**Cypress**](https://www.cypress.io/) → Framework de automação de testes end-to-end para aplicações web.  
- [**Node.js**](https://nodejs.org/en/download) + **npm**/**Yarn** → Ambiente de execução e gerenciamento de dependências.  
- [**Java**](https://www.java.com/en/) → Necessário para geração de relatórios com o [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin).  

### Ferramentas de Desenvolvimento
- [**Visual Studio Code**](https://code.visualstudio.com/download) → IDE utilizada para desenvolvimento e manutenção dos testes.  
- [**Git**](https://git-scm.com/downloads) → Controle de versão.  
- [**GitHub**](https://github.com) → Repositório remoto para versionamento e compartilhamento do código.  

---

### ⚙️ Configuração do Ambiente
Para instruções detalhadas de instalação e execução da aplicação **Mark L.**, consulte o arquivo [Detalhes aplicação Mark L.](./apps/README.md).

---

### ▶️ Execução dos Testes
Para instruções detalhadas de execução dos testes automatizados, consulte [Detalhes execução do projeto](./EXECUTION_INSTRUCTION.md).

---

## 📌 Agradecimentos

- Ao instrutor **Fernando Papito** pelo curso e compartilhamento de conhecimento.
- À comunidade de automação de testes por todo o suporte e inspiração.
- **Observações:**  
  - Este repositório é destinado a fins educacionais para demonstrar conceitos de automação de testes com Cypress.  
  - Sinta-se à vontade para clonar, modificar e utilizar este código como base para seus próprios projetos.  

## 🙋‍♀️ Autora
Feito com ❤️ por **Sthefany A. Ricardo**.  
📅 Última atualização: **Agosto de 2025**.