import styled from "styled-components";



const HomeContainer = styled.section`
.total_board{
    display: flex;
}

.filter_section{
    display: flex;
    .filter_category, .filter_category button{
        display: flex;
        margin: 10px;
    }
   .filter_btn{
       margin: 10px 20px;
    }
.filter_btn button{
    padding: 10px 20px;
}

    div{
        margin: 2px;
    }
}

.item_header{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* background-color: red; */
    /* margin: 5px; */
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

}



/* .img_container{
    width: 50px;
    img{
        width:500%;
    }
} */

`

export default HomeContainer