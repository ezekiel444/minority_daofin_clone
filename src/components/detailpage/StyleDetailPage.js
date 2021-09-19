import styled from "styled-components";




const StyleSection = styled.section`
height: 80%;
width: 95%;
border-radius:10px;
border-color:white;
color: var(--border);
background: var(--b-primary);


div{
    border-radius:20px;
}

.editBtn{
    position: absolute;
    top: 1;
    right: 10%;
}

.container-header{
    display: flex;
    font-size: 1.5em;
    color: var(--border);
    .image-container{
        width: 100px;
        height: 100px;
      
        img{
            width: 100%;
        }
    }
}

.container-header :nth-child(1){
    margin-right:25px;
}

.container-description-links{
    display: flex;
    justify-content: space-around;

    .description{
        background-color: red;
        width: 50%;
        height: 28vh;
  background: var(--b-primary);

    }

    .links-total{
        width: 50%;
        height: 28vh;
  display: flex;
  flex-direction: column;

  .iconLinks{
    padding-left: 10px;
      background-color: var(--main-colorLight);
  }

  .links, .links p{
      display: flex;
      margin-right: 10px;
      border-radius: 25px;
      p:nth-child(1){
        background-color: var(--secondary-color);
        color: #768618;
     }
      p:nth-child(2){
        background-color: var( --text-muted);
        color: #79b93d;
     }
      p:nth-child(3){
        background-color:var(--main-colorLight);
     }
  }

    }
    .tvlstyle{
        margin-top:10px;
        background-color: var(--main-colorLight);
        padding-left: 10px;
    }
}

.token-details{
    height: 15vh;
    margin-top: 50px;
    background-color: var(--text-muted);


    .eachItem{
       display: grid;
       padding-left: 15px;
       align-items: center;
       grid-template-columns:repeat(5,1fr);
    }
}


`


export default StyleSection