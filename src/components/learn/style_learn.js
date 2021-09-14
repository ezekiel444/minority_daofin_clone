import styled from "styled-components";


const StyleContainer = styled.main`
height: 100vh;
width: 83vmax;

.cardSection{
   display: flex;
   justify-content: space-around;
   width: 100%;
   
    .card{
        width: 25vw;
        height: 80vh;
        line-height: 2;
        background-color: white;
        border-radius: 10px;
        .img_container{
            width: 300px;
            img{
                width: 100%;
            }
        }
        span{
            font-size: 18px;
    font-weight: 700;
    color: #345ba0;
    text-decoration: none;
    width: 140px;
    background: #4cb8ff;
    padding: 10px;
    text-align: center;
    line-height: 25px;
    position: absolute;
    top: 35em;
        }
    }
}
    
`



export default StyleContainer