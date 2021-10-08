import { PerfilCard } from "./card";
import { SChanpion } from "../../services/chanpions";

import { useEffect, useState } from "react";




export default function Card({icon, name, tier, rank, wins, losses, fundo}) {
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
    
    function border(){

    }
    border()
    maior(wins, losses)    
    
  },[wins])
  
  
  return ( 

    <PerfilCard background={bg}>
      <div className='info'>
        <p>Ranked solo: <strong> {tier === 'unranked' ? 'un' : ' ' + tier}{rank === 'unranked' ? 'ranked' : ' ' + rank}</strong></p>

        <div className='wl'>
          <span>W: {wins}</span>
          <span>L: {losses}</span>
        </div>

        <span>{name}</span>
        <img src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${icon}.png`} alt="" />

      </div>
      <img src={`/images/ranked/borderLoad/${tier === 'unranked' || !tier ? 0 : tier }.png`} alt="" className='borderElo' />
      <img src={`/images/loading/${SChanpion(fundo ? fundo : 1)}_0.jpg`} alt="" className='banner'/>
      
    </PerfilCard>
  );

}