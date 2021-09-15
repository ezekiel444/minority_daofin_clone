import styled from "styled-components";


const StyleSection = styled.section`
height: 100vh;
width: 85vw;


form{
    width: 55vw;
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-areas: "name name category"
                         "date token-symbol token-name"
                         "twitter discord website"
                         "tvl block-chain head-quarter"
                         "description description description";

          
    div{
        box-sizing: border-box;
        height: 65px;  
    }

    input{
     border: none;
    display: block;
    width: 100%;
    height: 100%;
    background: var(--main-color);
    color: var(--border);
    font: 1.2em "Fira Sans", sans-serif;
}

input::placeholder{
color: #ceacac;
}
                         

.name{
    grid-area: name;
    
}

.category{
    grid-area: category;
    display: block;

}
.date{
    grid-area:date;
}
.token-symbol{
    grid-area:token-symbol;
}
.token-name{
    grid-area:token-name;
}
.twitter{
    grid-area:twitter;
}
.discord{
    grid-area:discord;
}
.head-quarter{
    grid-area:head-quarter;
}
.description{
    grid-area:description;
}

}

button{
    background: var(--main-color);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 5px;
}

`



export default StyleSection