import styled from "styled-components";
import CardUnitPosts from "./CardUnitPosts";
import imagess from '../../images/Sondinokibi.jpg'

const CardPost = () => {
  return (
    <CardContainer id="ataques">
      <CardUnitPosts title={'WannaCry'} RefImg={imagess} postName={'WannaCry'} />
      <CardUnitPosts title={'I love u dude'} RefImg={imagess} postName={'postNamea'} />
    </CardContainer>
  )
}

export default CardPost;

const CardContainer = styled.div`
background-color: #fffcfc;
height: 100vh;
width: 100%;
display: flex;
gap: 20px;
flex-wrap: wrap;
padding: 20px;
overflow: hidden;

`