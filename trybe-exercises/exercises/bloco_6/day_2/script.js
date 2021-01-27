const states = [
    {state: 'Acre', uf: 'AC',},
    {state: 'Alagoas', uf: 'AL',},
    {state: 'Amazonas', uf: 'AM',},
    {state: 'Amapá', uf: 'AP',},
    {state: 'Bahia', uf: 'BA',},
    {state: 'Ceará', uf: 'CE',},
    {state: 'Distrito Federal', uf: 'DF',},
    {state: 'Espírito Santo', uf: 'ES',}, 
    {state: 'Goiás', uf: 'GO',},
    {state: 'Maranhão', uf: 'MA',},
    {state: 'Mato Grosso', uf: 'MT',},
    {state: 'Mato Grosso do Sul', uf: 'MS',},
    {state: 'Minas Gerais', uf: 'MG',},
    {state: 'Pará', uf: 'PA',},
    {state: 'Paraíba', uf: 'PB',},
    {state: 'Paraná', uf: 'PR',},
    {state: 'Pernambuco', uf: 'PE',},
    {state: 'Piauí', uf: 'PI',},
    {state: 'Rio de Janeiro', uf: 'RJ',},
    {state: 'Rio Grande do Norte', uf: 'RN',},
    {state: 'Rio Grande do Sul', uf: 'RS',},
    {state: 'Rondônia', uf: 'RO',},
    {state: 'Roraima', uf: 'RR',},
    {state: 'Santa Catarina', uf: 'SC'},
    {state: 'São Paulo', uf: 'SP',},
    {state: 'Sergipe', uf: 'SE',},
    {state: 'Tocantins', uf: 'TO',}
];

const sendButton = document.getElementById('btn-sub');
sendButton.addEventListener('click', processData);

function processData(evt) {
    evt.target.preventDefault;
    const typedData = document.getElementById('personal-information');
    let dataGetted = [];
}

function stateOptionCreator() {
    const selectElement = document.getElementById('state-selector');

    for (let index = 0; index < states.length; index += 1) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute.name = 'state-selector'
        optionElement.value = states[index].uf;
        optionElement.innerText = states[index].state;
        selectElement.appendChild(optionElement);
    }
}

stateOptionCreator();