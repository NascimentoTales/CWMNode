const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios  = require('axios')
const _ = require('lodash')

axios.get(url).then(response => {
    const funcionarios = response.data
    
    var data = _.filter(funcionarios, o => o.pais === "Brazil")

    // console.log(funcionarios.length);
    // var results = _.filter(funcionarios, o => o.genero === "M")

    // var results = _.filter(funcionarios, e => e.pais === "Brazil")

    console.log(data.length);

})