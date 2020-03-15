class Negociacoes {
    constructor() {
        this._negociacoes = [];

        // CONGELOU A INSTANCIA
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
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
    }
}