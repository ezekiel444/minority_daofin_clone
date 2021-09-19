import styled from "styled-components";



const HomeContainer = styled.section`
color: var(--border);
.total_board{
    display: flex;
}

a,link{
    text-decoration:none;
    color: var(--border);
}
a:hover{
    cursor: pointer;
    color: hsla(30, 100%, 50%, .3);

}

.filter_section{
    display: flex;
    .filter_category, .filter_category button{
        display: flex;
        margin: 10px;

    }

    .filter_category button{
        border: none;
        border-radius: 30px;
        font-size: 1.3em;
        background: var(--text-muted);
    }

    .filter_category button:focus{
        background-color:var( --main-color);
    }

   .filter_btn{
       margin: 10px 20px;
     
    }
.filter_btn button{
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background: var( --secondary-color);
    color: var(--border);
    font-size:1em
}

.filter_btn button :nth-child(1){
    margin-right: 5px;
}


    div{
        margin: 2px;
    }
}

.item_header{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.item_container{
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .nameImg, .nameImg :nth-child(1){
        display: flex;
        margin-right: 7px;
    }

    img{
        width: 50px;
        margin-bottom:10px;
        border-radius: 25%;
    }

    .logo_website :nth-child(1) {
        margin-right: 20px;
    }

}

`

export default HomeContainer