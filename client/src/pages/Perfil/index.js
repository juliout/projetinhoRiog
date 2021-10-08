import { useEffect, useState } from "react";
import {RioG} from "../../services/api";
import { useParams } from 'react-router-dom'
import { Main, Line } from './perfil'
import Tabela from "../../components/Tabela";
import Card from "../../components/Card";

export default function Perfil() {

  let [user, setUser] = useState({})
  let [matchs, setMatchs] = useState([])
  const { id } = useParams();
  function sImg(value){
    if(value <= 0){
      return `/images/item/0.png`
    }else{
      return `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/${value}.png`
    }
  }

  useEffect(() => {
    
    function acharUsuario() {
      try{
        RioG.post(`/user`,{
          name : id
        }).then((response)=>{
          const usuario = response.data.usuario
          const ranked = response.data.ranked

          if (ranked !== "unranked" ) {
            setUser({
              'id' : usuario.id,
              'name' : usuario.name,
              'tier' : ranked.tier, 
              'rank' : ranked.rank,
              'wins' : ranked.wins,
              'losses' : ranked.losses,
              'icon' : usuario.profileIconId,
              'level' : usuario.summonerLevel,
              'fundo' : response.data.fundo
            })
          } else {
            setUser({
              'id' : usuario.id,
              'name' : usuario.name,
              'tier' : 'unranked',
              'icon' : usuario.profileIconId,
              'level' :usuario.summonerLevel,
              'wins' : 0,
              'losses': 0,
              'rank' : 'unranked',
              'fundo' : response.data.fundo
            })
          }
        })      
        acaharPartida()
      }catch (e){
          alert('Não existe esse usuario')
          return window.location.href = '/';
      }
    }
    acharUsuario()
    
    function acaharPartida(){
      RioG.post(`/user/partidas`,{
        name: id
      }).then((response)=>{
        const idData = response.data.id
        console.log(idData)
        let partidas = response.data.partidas
        console.log(partidas)
        RioG.post('/user/match',{
          id : idData,
          partidas : partidas
        }).then((partida)=>{
          setMatchs(partida.data)          
        })
      }) 
    }
  },[id])
    
  return (
    
    <Main>
      <aside>
        <Card id={user.id}
        icon={user.icon} name={user.name}
        tier={user.tier} rank={user.rank}
        wins={user.wins} losses={user.losses}
        fundo={user.fundo}
         />
      </aside>
      <main>
        <Tabela>
          {matchs.map((m,index)=>{
            return(
              <Line key={index}>                
                <p>{m.champLevel}</p>
                  <img src={`/images/iconChampion/${m.championName}.png`} alt="" />
                  <div className='leftStamp'>
                      <h1>{m.win === true ? 'Win' : 'Loser' }</h1>
                      <span>{m.mapId === 11 ? 'Summoners rift' : 'Aram'}</span>
                      <div className='imgSpells'>
                          <img src={`/images/spells/${m.summoner1Id}.png`} alt="" />
                          <img src={`/images/spells/${m.summoner2Id}.png`} alt="" />
                      </div>
                  </div>
                  <div className='kda'>
                    <span>{m.kills} / {m.deaths} / {m.assists}</span>
                    <span>gold: {m.goldEarned}</span> 
                  </div>
                  
                  <div className='imgItens'>
                    <img src={sImg(`${m.item0}`)} alt="" />
                    <img src={sImg(`${m.item1}`)} alt="" />
                    <img src={sImg(`${m.item2}`)} alt="" />
                    <img src={sImg(`${m.item3}`)} alt="" />
                    <img src={sImg(`${m.item4}`)} alt="" />
                    <img src={sImg(`${m.item5}`)} alt="" />
                    <img src={sImg(`${m.item6}`)} alt="" />
                  </div>

                
                </Line>            
            )
          })}
        </Tabela>

      </main>

    </Main>
    
  );
}