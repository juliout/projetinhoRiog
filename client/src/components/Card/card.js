import styled from "styled-components";

export const PerfilCard = styled.div`

    width: 62%;
    min-width: 350px;
    height: auto;
    min-height: 520px;
    background-color: none;
    display: flex;
    justify-content: center;
    margin-top: 30%;
    
    .info{
        display: flex;
        flex-direction: column;
        
        align-items: center;
        position: absolute;
        z-index: 2;
        background-color: rgba(000, 0, 0, 0.5);
        margin-top: max(30.5vh, 265px);
        width: 16.5%;
        min-width: 310px;
        height: 20%;
        min-height: 220px;
    }
    .info img{
        width: 100px;
        height: 100px;
        border: 4px white double;
        border-radius: 50%;
        padding: 1px;
    }
    .info span{
        color: white;
        font-size: 25px;
        margin-bottom: 10px;
    }
    .info p {
        font-size: 15px;
        color: white;
        margin-top: 10px;
        text-shadow: 1px 1px 1px black;
    }
    strong{
        color: white;
        letter-spacing: 2px;
    }
    .wl{
        width: 93%;
        height: 20px;
        background: ${props => `${props.background}`};
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        margin: 5px 0 15px 0; 
        border-radius: 20px;
        
    }
    .wl span{
        font-size: 15px;
        text-shadow: 1px 1px 1px black;
        
    }
    .borderElo{
        width: 15%;
        min-width: 350px;
        height: 55vh;
        min-height: 500px;
        max-height: 630px;
        position: absolute;
    }
    .banner{
        width: 85%;
        min-width: 330px;
        height: 51.2vh;
        min-height: 470px;
        margin-top: 28px;
    }
`;