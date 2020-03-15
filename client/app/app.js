// instancia do controller
const controller = new NegociacaoController();

// bind aqui
// associa o evento do formulario ao metodo adiciona do controller
document
    .querySelector('form')
    .addEventListener('submit', controller.adiciona.bind(controller));

// buscando o elemento pelo seu ID
document
    .querySelector('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));