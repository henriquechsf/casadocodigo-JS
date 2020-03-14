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
        event.preventDefault();

        // instanciando uma nova Negociação
        // passando os dados dos campos do formulario
        // usando metodo estatico para conversao de data
        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao.data)

        // converte data para texto formato dia/mes/ano
        let diaMesAno = DateConverter.paraTexto(negociacao.data)

        console.log(diaMesAno);
    }
}