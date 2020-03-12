class Negociacao {
    constructor(_data, _quantidade, _valor) {
        /*
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor

        // congela o objeto para não alterar os atributos
        Object.freeze(this)
        */
       // forma de encapsulamento com Object.assign()
       // garante a imutabilidade dos daddos
       Object.assign(this, { _quantidade, _valor });
       this._data = new Date(_data.getTime()),
       Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor
    }

    get data() {
        return this._data
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }
}