class NegociacoesView {
    // pega o elemento html onde sera renderizado o template
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }

    // renderiza o template na DOM
    update(model) {
        // repassa o model para o template
        this._elemento.innerHTML = this.template(model);
    }

    // PARAMETRO AQUI
    // deve retornar o template baseado no model
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>

                <tfoot>

                </tfoot>
            </table>
        `
    }
}