class NegociacaoController {

    constructor() {
        // atribuindo uma variavel $ ao querySelector
        // realizando bind, $ mantém document como o seu contexto this
        let $ = document.querySelector.bind(document)

        // buscando os elementos
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault()

        // precisamos acessar as funcionalidades através do this
        console.log(this._inputData.value)
        console.log(parseInt(this._inputQuantidade.value))
        console.log(parseFloat(this._inputValor.value))
    }
}