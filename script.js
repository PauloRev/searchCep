(function () {

    const inputCEP = document.getElementById('inputCep')
    const btnSearch = document.getElementById('btnSearch')

    // Resultados
    const cep = document.getElementById('resCep')
    const endereco = document.getElementById('resEndereco')
    const bairro = document.getElementById('resBairro')
    const cidade = document.getElementById('resCidade')
    const estado = document.getElementById('resEstado')

    btnSearch.addEventListener('click', e => {
        e.preventDefault()

        if (inputCEP.value.length > 7 && inputCEP.value.length < 10) {

            let url = `https://viacep.com.br/ws/${inputCEP.value}/json/`

            axios.get(url)
                .then(res => {
                    cep.innerText = res.data.cep
                    bairro.innerText = res.data.bairro
                    endereco.innerText = res.data.logradouro
                    cidade.innerText = res.data.localidade
                    estado.innerText = res.data.uf
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            alert('Informe um CEP válido!')
        }
    })
})()