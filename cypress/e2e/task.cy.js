describe('tarefas', ()=> {

  it('deve cadastrar uma nova tarefa', () => {
    
    const taskName = 'Ler um livro de node.js'

    cy.deleteTaskByName(taskName)

    cy.createTask(taskName)
    
    cy.contains('main div p', taskName).should('be.visible')
  
  })

  it('não deve permitir tarefa duplicada', () => {
    
    const task = {
      name: 'Estudas JavaScript',
      is_done: false
    }

    cy.deleteTaskByName(task.name)

    cy.postCreateTask(task)

    cy.createTask(task.name)
    
    cy.get('.swal2-html-container').should('be.visible').should('have.text', 'Task already exists!')

  });

})