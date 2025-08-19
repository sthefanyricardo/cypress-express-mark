### Coleção de endpoints da aplicação Mark L.
Este diretório contém a coleção da API da aplicação Mark L., utilizada nos testes automatizados deste projeto.  

A coleção permite **testar manualmente os endpoints**, verificar requests e responses, e serve como referência para a automação de testes com ferramentas como **Insomnia** ou **Postman**.

---

## 📂 Conteúdo
- `markl_api.json` - coleção de endpoints da aplicação Mark L.

## 📌 Endpoints da coleção

| Método | Endpoint    | Descrição         | Exemplo de Request Body                          |
| ------ | ----------- | ----------------- | ------------------------------------------------ |
| GET    | /tasks      | Listar tarefas    | -                                                |
| POST   | /tasks      | Criar nova tarefa | `{ "name": "Comprar ketchup", "is_done": true }` |
| PUT    | /tasks/\:id | Atualizar tarefa  | `{ "is_done": false }`                           |
| DELETE | /tasks/\:id | Remover tarefa    | -                                                |

---

## ⚙️ Como importar a coleção

### Insomnia
1. Abra o Insomnia
2. Clique em `Import/Export > Import Data > From File`
3. Selecione o arquivo `markl_api.json`

### Postman
1. Abra o Postman
2. Clique em `Import`
3. Selecione o arquivo `markl_api.json`

---

## ℹ️ Observações e dicas
- Cada endpoint contém exemplos de requests e respostas.
- As coleções são úteis para testes manuais ou como referência durante a automação de testes.
- É recomendado [iniciar a aplicação Mark L.](./apps/README.md) localmente antes de testar os endpoints.
- Para mais informações sobre o projeto e os testes automatizados, consulte o [README principal](../README.md).

## 🙋‍♀️ Autora
Feito com ❤️ por **Sthefany A. Ricardo**.  
📅 Última atualização: **Agosto de 2025**.