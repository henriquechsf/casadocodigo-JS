class NegociacaoController {

    constructor() {
        // atribuindo uma variavel $ ao querySelector
        // realizando bind, $ mantém document como o seu contexto this
        let $ = document.querySelector.bind(document)

        // buscando os elementos
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes()
        this._negociacoesView = new NegociacoesView('#negociacoes')

        // atualizando a view
        // recebe inicialmente o modelo que encapsula uma lista vazia
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event) {
        event.preventDefault();

        // inclui a negociação
        this._negociacoes.adiciona(this._criaNegociacao())

        // atualiza o conteudo na tela quando adicionar negociação
        this._negociacoesView.update(this._negociacoes)

        // imprime a lista com o novo elemento no console
        console.log(this._negociacoes.paraArray())

        // limpando o formulario
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao() {
        // retorna uma instancia da negociação

        // instanciando uma nova Negociação
        // passando os dados dos campos do formulario
        // usando metodo estatico para conversao de data
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }
}