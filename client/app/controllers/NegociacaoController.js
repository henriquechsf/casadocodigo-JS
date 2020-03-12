class NegociacaoController {

    adiciona(event) {
        event.preventDefault()

        // atribuindo uma variavel $ ao querySelector
        // realizando bind, $ mantém document como o seu contexto this
        let $ = document.querySelector.bind(document)
        
        // buscando os elementos
       let inputData = $('#data')
       let inputQuantidade = $('#quantidade')
       let inputValor = $('#valor')
       
       console.log(inputData.value)
       console.log(parseInt(inputQuantidade.value))
       console.log(parseFloat(inputValor.value))
    }
}