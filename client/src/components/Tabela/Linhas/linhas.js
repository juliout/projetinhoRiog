import styled from "styled-components";

export const Line = styled.div`
    height: 100px;
    border: 1px rgba(0,0,0,1) solid;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    
    p{
        position: absolute;
        margin-left: max(2.5%, 37px);
        margin-top: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        color: white;
        background-color: black;
        border: 1px black solid;
        border-radius: 50%;
    }
    img{
        height: 80px;
        width: 80px;
        margin-left: 2%;
    }
    .leftStamp{
        width: 10%;
        min-width: 100px;
        
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 2%;
    }
    .leftStamp h1{
        font-size: 20px;
        color:white;
        letter-spacing: 2px;
    }
    .leftStamp span{
        font-size: 13px;
    }
    .leftStamp img{
        width: 35px;
        height: 35px;
        margin-right: 4px;
        margin-left: 0;
    }
    .imgSpells{
        margin-top: 7px;
        
    }
    .kda{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10%;
        min-width: 70px;
    }
    .imgItens{
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        margin-left: 5%;
        
    }
    .imgItens img{
        width: 50px;
        height: 50px;
        margin-left: 3.5%;
    }
`; 