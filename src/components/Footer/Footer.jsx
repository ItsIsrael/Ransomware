import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer id="footer">
    <h2>Desarrollado por Israel</h2>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
text-align: center;
width: 100%;
height: 6vh;
margin: auto auto;
color: white;
background-color: #270331;
`