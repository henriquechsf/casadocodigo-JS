// instancia do controller
let controller = new NegociacaoController()

// bind aqui
// associa o evento do formulario ao metodo adiciona do controller
document
    .querySelector('form')
    .addEventListener('submit', controller.adiciona.bind(controller))