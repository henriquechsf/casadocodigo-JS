class View {
    // pega o elemento html onde sera renderizado o template
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    // renderiza o template na DOM
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}