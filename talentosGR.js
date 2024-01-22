function getEndereco() {
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const bairroInput = document.getElementById('bairro');
    const localidadeInput = document.getElementById('localidade');
    const ufInput = document.getElementById('uf');

    const cep = cepInput.value.replace(/\D/g, '');

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                logradouroInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                localidadeInput.value = data.localidade;
                ufInput.value = data.uf;
            }
        })
        .catch(error => {
            alert('CEP inválido. Tente novamente!');
            throw error
        });
}