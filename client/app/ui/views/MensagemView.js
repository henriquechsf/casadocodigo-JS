class MensagemView extends View {

    // template da mensagem
    template(model) {
        return model.texto ?
            `<p class="alert alert-info">${model.texto}</p>` :
            `<p></p>`;
    }
}