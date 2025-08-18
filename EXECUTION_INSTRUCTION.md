# ▶️ Execução dos Testes - Cypress eXpress
Este documento contém as instruções para instalar, configurar e executar os testes automatizados do projeto Cypress eXpress Mark L.

## 🔧 Pré-requisitos (Configuração do Ambiente)
Antes de executar os testes, certifique-se de que possui os seguintes itens instalados na sua máquina:
- Node.js (versão >= 18)
- Yarn ou npm
- Java (necessário para geração de relatórios com Allure)
- Allure Commandline

🔧 Instalação do Projeto
1. Clonar o repositório
  ´´´
  git clone https://github.com/sthefanyricardo/cypress-express-mark.git
  ´´´
2. Acessar a pasta do projeto
  ´´´
  cd cypress-express-mark
  ´´´
3. Instalar dependências
  ´´´
  yarn install
  ´´´

## ▶️ Executando os Testes
1. Abrir o Cypress no modo interativo (GUI)
  ´´´
  yarn cypress open
  ´´´
2. Executar todos os testes no modo headless
  ´´´
  yarn cypress run
  ´´´
3. Executar testes com relatório Allure
  ´´´
  yarn cypress run --env allure=true
  ´´´

## 📊 Relatórios de Teste (Allure)
Após a execução dos testes, os resultados ficam armazenados na pasta ./results.

Gerar e abrir relatório do Allure:
´´´
allure generate results --clean -o allure-report
allure open allure-report
´´´

Isso abrirá um relatório interativo no navegador com:
- ✅ Status dos testes (pass/fail)
- 📸 Screenshots
- 🎥 Vídeos das execuções

## 📌 Observações
Os testes foram desenvolvidos para fins educacionais durante o curso Cypress eXpress (Udemy).

A aplicação alvo Mark L. roda em ambiente local e é necessária para execução completa da suíte de testes.