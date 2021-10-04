import { PerfilCard } from "./card";
import { SChanpion } from "../../services/chanpions";
import { useEffect, useState } from "react";
import RiotApi from "../../services/api";
import { Key } from "../../services/key";


export default function Card({id, icon, name, tier, rank, wins, losses}) {

  let [ fundoP, setFundoP] = useState(1)
  let [ bg, setBg] = useState('black')

  useEffect(()=>{

    function maior(a, b){
      if(a > b){
       return setBg('linear-gradient(61deg, rgba(20,187,8,1) 56%, rgba(255,0,0,0.8183648459383753) 58%)')
      }
      if(a < b){
       return setBg('linear-gradient(61deg, rgba(20,187,8,1) 46%, rgba(255,0,0,0.8183648459383753) 48%)')
      }
      if(a === 0 && b === 0 ){
        return setBg('linear-gradient(61deg, rgba(20,187,8,1) 50%, rgba(255,0,0,0.8183648459383753) 50%)')
      }
    }
    
    function fundo(){
      RiotApi.get(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${Key}`).then((fundo)=>{
        if(fundo.data.length !== 0){
          setFundoP(fundo.data[0].championId)
        }
        else{
          alert('n tem')
        }
      })
    }
    fundo()
    maior(wins, losses)
    
  },[wins])
  
  
  return ( 

    <PerfilCard background={bg}>
      <div className='info'>
        <p>Ranked solo: <strong> {tier === 0 ? 'un' : ' ' + tier}{rank === 0 ? 'ranked' : ' ' + rank}</strong></p>

        <div className='wl'>
          <span>W: {wins}</span>
          <span>L: {losses}</span>
        </div>

        <span>{name}</span>
        <img src={`/images/profileIcon/${icon}.png`} alt="" />

      </div>
      <img src={`/images/ranked/borderLoad/${tier}.png`} alt="" className='borderElo' />
      <img src={`/images/loading/${SChanpion(fundoP)}_0.jpg`} alt="" className='banner'/>
      
    </PerfilCard>
  );

}