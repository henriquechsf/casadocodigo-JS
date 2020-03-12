class Negociacao {
    constructor(data, quantidade, valor) {
        /*
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor

        // congela o objeto para não alterar os atributos
        Object.freeze(this)
        */
       // forma de encapsulamento com Object.assign()
       Object.assign(this, {
           _data: new Date(data.getTime()),
           _quantidade: quantidade,
           _valor: valor
       });
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