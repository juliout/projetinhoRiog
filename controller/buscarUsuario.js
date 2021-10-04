const axios = require('axios')
const {Key} = require('../services/key') 

module.exports.buscarUsuario = async (req,res) =>{
    const userName = req.body.name
    try {
        const response = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${Key}`)
        console.log(response)
        if(!response) {
            throw new Error({message: 'usuario nao encontrado'})
        }
        const data = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${Key}`)
        console.log(data.data)
        if(data.data.length === 0){
            return res.status(200).json({
                usuario : response.data,
                ranked : 'unranked'
            })
        }else{
            return res.status(200).json({
                usuario : response.data,
                ranked : data.data[0]
            })
        }
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}

