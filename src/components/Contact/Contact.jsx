import styled from "styled-components"
import Form from "../Formik/Form"


const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Form />
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #003f76;
`