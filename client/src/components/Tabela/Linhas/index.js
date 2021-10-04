import React from 'react';
import { Line } from './linhas';
export default function Linhas({cLevel}) {
 return (
   <div>
        <Line>
            <p>{cLevel}</p>
            <img src="/images/iconChampion/Aatrox.png" alt="" />

            <div className='leftStamp'>
                <h1>vitoria</h1>
                <span>solo</span>

                <div className='imgSpells'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

            </div>

            <div className='kda'>
              <span>k / d / a</span>
              <span>gold farm</span>
              
            </div>
            
            <div className='imgItens'>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
        </Line>      

   </div>
 );
}