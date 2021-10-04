import styled from "styled-components";

export const ContainerPai = styled.div`

    padding-top: 5%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`

    background-color: #1d3163af;
    border: 1px black double;
    width: 27%;
    min-width: 500px;
    height: auto;
    min-height: 150px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`;
export const CaixaPesquisa = styled.div`

    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
       
    input{
        width: 300px;
        height: 50px;
        outline: none;
        font-size: 20px;
        letter-spacing: 1px;
        padding-left: 10px;
        opacity: 0.7;
        color: black;
    }
    input:focus{
        background-color: white;
        opacity: 1;
        outline: none;
        border: 2px silver solid;
    }
    select{
        width: 50px;
        height: 50px;
        
        outline: none;
        color: black;
        padding-left: 5px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0.7;
    }
    select:focus{
        opacity: 1;
    }
    option{
        color: black;
    }

    
`; 

export const PerfilHome = styled.div`
    
    background-color: rgba(24, 18, 105, 0.575);
    height: 220px;
    width: 90%;
    min-width: 350px;
    margin-bottom: 25px;
    border: 1px #191970 solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    display: ${props => `${props.display}`};
`;

export const CxEsquerda = styled.div`
    
    
    width: 45%;
    min-width: 170px;
    height: 90%;
    min-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    .lvlS{
        position: absolute;
        z-index: 3;
        color: white;
        font-size: 17px;
        margin-top: 123px;
    }
    .bord{
        width: 200px;
        height: 200px;
        position: absolute;
    }
    .icon{
        width: 115px;
        height: 115px;
        
        border-radius: 50%;
    }

`;
export const CxDireita = styled.div`

    width: 50%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: silver;
    }
    h1{
        margin-top: 15px;
        font-size: 30px;
        color: silver;
    }
    div{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    span{
        font-size: 25px;
        margin-right: 10px;
        color: silver;
    }
    .green{
        color: green;
        font-size: 25px;
    }
    .red{
        color: red;
        font-size: 25px;
    }

    button{
        cursor: pointer;
        margin-top: 20px;
        width: 130px;
        height: 40px;
        color: white;
        
        font-size: 15px;
        border: 1px silver solid;
        background-color: transparent;
        transition-duration: 1s;
    }

    button:hover{
        width: 200px;
        background-color: #1d3163;
        border: 1px black solid;
        color: rgba(255, 255, 255, 0.623);
        transition: all;
        transition-duration: 1s;
    }
`;