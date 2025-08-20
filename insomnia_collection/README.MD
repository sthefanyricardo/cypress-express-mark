### Coleção de endpoints da aplicação Mark L.
Este diretório contém a coleção da API da [aplicação Mark L.](./apps/README.md), utilizada nos testes automatizados deste projeto.  

A coleção permite **testar manualmente os endpoints**, verificar requests e responses, e serve como referência para a automação de testes com ferramentas como **Insomnia** ou **Postman**.

---

## 📂 Conteúdo
- `markl_api.json` - coleção de endpoints da aplicação Mark L.

## 📌 Endpoints da coleção

| Método | Endpoint    | Descrição                  | Exemplo de Request Body                          |
| ------ | ----------- | -------------------------- | ------------------------------------------------ |
| GET    | /tasks      | Listar todas as tarefas    |             -                                    |
| POST   | /tasks      | Criar nova tarefa          | `{ "name": "Comprar ketchup", "is_done": true }` |
| PUT    | /tasks/:id  | Atualizar tarefa           | `{ "is_done": false }`                           |
| DELETE | /tasks/:id  | Remover tarefa             |              -                                   |

---

## ⚙️ Como importar a coleção
### Insomnia
  - Turorial
    [Masterizando o Insomnia | Masterclass #05](https://www.youtube.com/watch?v=3tB0uDliS6Y)

### Postman
![Exemplo importação da coleção no Postman - GIF demonstrativo](./imgs/exemplo_postman_importacao.gif)

---

## ℹ️ Observações e dicas
- Cada endpoint contém exemplos de requests e respostas.
- As coleções são úteis para testes manuais ou como referência durante a automação de testes.
- Recomenda-se  [iniciar a aplicação Mark L.](./apps/README.md), localmente antes de testar os endpoints.
- Para mais informações sobre o projeto e os testes automatizados, consulte o [README principal](../README.md), ou acesso o repositório principal do projeto: [Cypress eXpress](https://github.com/sthefanyricardo/cypress-express-mark).

## 🙋‍♀️ Autora
Feito com ❤️ por **Sthefany A. Ricardo**.  
📅 Última atualização: **Agosto de 2025**.
