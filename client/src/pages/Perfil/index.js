import { useEffect, useState } from "react";
import RiotApi from "../../services/api";
import { useParams } from 'react-router-dom'
import { Main } from './perfil'
import Tabela from "../../components/Tabela";
import Card from "../../components/Card";
import { Key } from "../../services/key";
import americasApi from "../../services/americasRiotApi";
import { Line } from "../../components/Tabela/Linhas/linhas";

export default function Perfil() {

  let [user, setUser] = useState('')
  let [ranked, setRanked] = useState({})
  let [matchs, setMatchs] = useState([])
  const { id } = useParams();

  useEffect(()=>{
    
    async function buscarUser(){
      
      RiotApi.get(`/lol/summoner/v4/summoners/by-name/${id}?api_key=${Key}`).then(async (r)=>{               
        setUser({
          summonerName : r.data.name,
          summonerId : r.data.id,
          puuId : r.data.puuid,
          profileIconId: r.data.profileIconId
        })
        americasApi.get(`/lol/match/v5/matches/by-puuid/${r.data.puuid}/ids?start=0&count=20&api_key=${Key}`).then(body =>{              
          body.data.forEach(async (m)=>{
          let response = await americasApi.get(`/lol/match/v5/matches/${m}?api_key=${Key}`)
              setMatchs(response.data.info.participants)                             
          })
        })
        await RiotApi.get(`/lol/league/v4/entries/by-summoner/${r.data.id}?api_key=${Key}`).then((ranked)=>{          
          if(ranked.data.length > 0) {
            setRanked({
              tier : ranked.data[0].tier,
              rank: ranked.data[0].rank,
              wins : ranked.data[0].wins,
              losses: ranked.data[0].losses
            })          
          } else {
            setRanked({
              tier : 0,
              rank: 0,
              wins : 0,
              losses: 0
            })            
          }

        })
      })          
    }
    buscarUser()
    
    },[id])
    
  return (
    <Main>
      <aside>
        <Card id={user.summonerId}
        icon={user.profileIconId} name={user.summonerName}
        tier={ranked.tier} rank={ranked.rank} wins={ranked.wins} losses={ranked.losses}
         />
      </aside>
      <main>
      <Tabela>
        {matchs.length === 0 ? console.log('nada') : console.log(matchs)}
      </Tabela>
      </main>

    </Main>
  );
}