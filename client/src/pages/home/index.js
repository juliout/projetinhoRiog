import { RioG } from '../../services/api';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ContainerPai, CaixaPesquisa, PerfilHome, Container, CxEsquerda, CxDireita } from './home.js'
import Loading from '../../components/loading';

export default function Home(){

    let [summoner, setsummoner] = useState({})
    let [iconBorder, setIconBorder] = useState('')
    let [displayPerfil, setDisplayPerfil] = useState('none')
    let [have, setHave] = useState(false)

    async function pesquisar(value) {
        
        if(value) {
          try{
            setDisplayPerfil('flex')
            setsummoner({})
            setHave(false)  
            const response = await RioG.post(`/user`,{
              name: value
            })
            console.log(response)
            if(!response){
              alert('usario não encontrado')
              return window.location.href = '/';
            }
            let user = response.data
            let usuario = user.usuario
            let ranked = user.ranked   
            
            if(user.ranked !== "unranked"){
                setsummoner({
                  'id' : usuario.id,
                  'name' : usuario.name,
                  'tier' : ranked.tier, 
                  'rank' : ranked.rank,
                  'wins' : ranked.wins,
                  'losses' : ranked.losses,
                  'icon' : usuario.profileIconId,
                  'level' : usuario.summonerLevel
                })
              selectIconBorder(usuario.summonerLevel)
              setDisplayPerfil('flex')              
            }else{
              setsummoner({
                'id' : usuario.id,
                'name' : usuario.name,
                'icon' : usuario.profileIconId,
                'level' :usuario.summonerLevel,
                'wins' : 0,
                'losses': 0,
                'rank' : 'unranked'
              })
              selectIconBorder(usuario.summonerLevel)
              setDisplayPerfil('flex')                            
            }
            setHave(true)
          } catch (e) {
            alert('usario não encontrado')
            return window.location.href = '/';
          }
      }else{
        setsummoner({})
        setDisplayPerfil('none')  
        setHave(false)     
      }

    }
      function selectIconBorder(value) {
        
        let link = '/images/borderIcon/'
        if(value <= 29) {
          return setIconBorder(link+'1.png')
        }
        if(value >= 30 && value <= 49) {
          return setIconBorder(link+'30.png')
        }
        if(value >= 50 && value <= 74)return setIconBorder(link+'50.png')
        
        if(value >= 75 && value <= 99) {
          return setIconBorder(link+'75.png')
        }
        if(value >= 100 && value <= 124) {
          return setIconBorder(link+'100.png')
        }
        if(value >= 125 && value <= 149){
          return setIconBorder(link+'125.png')
        }
        if(value >= 150 && value <= 174){
          return setIconBorder(link+'150.png')
        }
        if(value >= 175 && value <= 199){
          return setIconBorder(link+'175.png')
        }
        if(value >= 200 && value <= 224){
          return setIconBorder(link+'200.png')
        }
        if(value >= 225 && value <= 249){
          return setIconBorder(link+'225.png')
        }
        if(value >= 250 && value <= 299){
          return setIconBorder(link+'250.png')
        }
        if(value >= 300){
          return setIconBorder(link+'300.png')
        }      
      }      
      
      return (
        <ContainerPai>

          <img src="/images/others/riogLogo.png" alt="" className='riogLogo'/>
          <Container>
              
            <CaixaPesquisa>
              <div>
                <select name="place" id="" disabled>
                  <option value="BR">BR</option>
                  <option value="USA">USA</option>
                </select>
                <input type="text" 
                name="send" id="" 
                placeholder='Nome do Invocador'
                onBlur={(e)=>{pesquisar(e.target.value)}}/>
              </div>
            </CaixaPesquisa>

            <PerfilHome display={displayPerfil}>
              {have === false ? <Loading/> : 
              <>
              <CxEsquerda>

                <span className='lvlS'>{summoner.level}</span>
                <img src={iconBorder} alt="" className='bord'/>
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${summoner.icon}.png`} alt="" className='icon'/>
              </CxEsquerda>
              <CxDireita>
                <h1>{summoner.name}</h1>
                <p>Elo:  {summoner.tier}  {summoner.rank}</p>

                <div>
                  <span>Wins:</span><span className={summoner.wins >= summoner.losses ? "green" : "red"}>{summoner.wins}</span>
                  <span>Losses:</span><span className={summoner.wins <= summoner.losses ? "green" : "red"}>{summoner.losses}</span>
                </div>
                <Link to={`/perfil/br/${summoner.name}`}>
                  <button>Mais informações</button>
                </Link>
              </CxDireita>
             </> }
            </PerfilHome>

          </Container>
          
        </ContainerPai>
      );
      
}