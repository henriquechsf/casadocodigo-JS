var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

// tbody - recebera a tr que vamos construir
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
	// cancelando a submissão do formulário
	event.preventDefault();

	// cria uma nova linha na tabela
	var tr = document.createElement('tr');

	campos.forEach(function(campo) {
		// cria um td sem informações
		var td = document.createElement('td');

		// atribui o valor do campo à td
		td.textContent = campo.value;

		// adiciona o td na tr
		tr.appendChild(td);
	})

	// nova td que armazena o volume da negociação
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);
	tbody.appendChild(tr);

	// limpa os campos do formulário
	campos[0].value = '';
	campos[1].value = '';
	campos[2].value = '';
	campos[0].focus();
})