class NegociacoesView {
    // pega o elemento html onde sera renderizado o template
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }

    // renderiza o template na DOM
    update() {
        this.elemento.innerHTML = this.template();
    }

    template() {
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