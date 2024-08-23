console.log('js link');

const cep = document.querySelector('#cep');

const consultaCep = async (cep) => {
    let cepValue = cep.value
    console.log(cepValue);
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

consultaCep('60337670')