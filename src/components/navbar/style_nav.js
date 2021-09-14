import styled from "styled-components";


const SectionStyle = styled.section`
 
 background-color: var(--main-color);
  color: var(--border);
  height: 100vh;
  width: 15vmax;

.content{
  margin-top:40px;
}



  a {
  color: var(--border);
  text-decoration: none;
}

.styleLogo {
  width: 200px;
}

.styleLogo img {
  width: 100%;
}

.NavLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 50px;
}

.NavLayout .navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 2.5;
  width: 100%;
  list-style: none;
}

`

export default SectionStyle