class Negociacoes {
    // recebe parametro para alterar o estado
    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;

        // CONGELOU A INSTANCIA
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);

        // atualizando o estado
        this._armadilha(this);
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {

        return this._negociacoes
            .reduce((total, negociacao) =>
                total + negociacao.volume, 0);
    }

    esvazia() {
        // eliminando todos itens do array
        // usado .length devido a instancia estar congelada Object.freeze
        this._negociacoes.length = 0;

        // atualizando o estado
        this._armadilha(this);
    }
}