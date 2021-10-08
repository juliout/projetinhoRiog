const axios = require('axios')
const {Key} = require('../services/key') 

module.exports.buscarUsuario = async (req,res) => {
    const userName = req.body.name
    try {
        axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${Key}`).then( response => {
            if(!response) {
                throw new Error({message: 'usuario nao encontrado'})
            }
            axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${response.data.id}?api_key=${Key}`)
            .then( mastrie => {
                let idFundo = mastrie.data[0]
                axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${Key}`).then( data => {
                    if ( data.data.length === 0 ) {
                            return res.status(200).json({
                                usuario : response.data,
                                ranked : 'unranked',
                                fundo : idFundo.championId
                            })
                        } else {
                            res.status(200).json({
                                usuario : response.data,
                                ranked : data.data[0],
                                fundo : idFundo.championId
                            })
                        }
                })
            })
            
        })
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}
module.exports.buscarPartida = async (req, res) => {
    const userName = req.body.name
    try{
        const conta = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${Key}`)
        const buscarPartidas = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${conta.data.puuid}/ids?start=0&count=10&api_key=${Key}`)
        let partidas = buscarPartidas.data
        res.status(200).json({
            id: conta.data.id,
            partidas : partidas
        })
    }catch(e){
        console.log(e.message)
    }

}
module.exports.partida = async (req, res) =>{
    const partidas = req.body.partidas
    const id = req.body.id    
    try {
        let allGets = []
        let allMatchs = []
        partidas.forEach((partida) =>{            
            allGets.push(axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${partida}?api_key=${Key}`))
        })
        Promise.all(allGets).then((result)=>{
            result.forEach((n)=>{                
                let dataInfo = n.data.info
                let part = n.data.info.participants
                let orn = {}
                part.forEach((r) => {
                    if(r.summonerId === id){
                        return Object.assign(orn, r)
                    }
                })                
                delete dataInfo.participants
                delete dataInfo.teams
                allMatchs.push({...dataInfo, ...orn})
            })            
            res.status(200).json(allMatchs)
        })    
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}

