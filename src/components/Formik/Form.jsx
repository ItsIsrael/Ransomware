
import { useForm } from '../Hooks/useForm';
import './Form.scss';

const initialForm = {
  name: '',
  email: '',
  subjet: '',
  comments: ''
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido.";
  }

  return errors;
};

const Form = () => {
  const { form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit } = useForm(initialForm, validationsForm);

  return (
    <div className='container__form'>
      <form className="container__form" data-netlify='true' onSubmit={handleSubmit} >
        <div className='form'>
          <input type="text" name='name' id="name" className="form__input" placeholder=" " onBlur={handleBlur} onChange={handleChange} value={form.name} required />
          {errors.name && <span className='error__validate'>{errors.name}</span>}
          <label htmlFor="name" className="form__label"> Nombre </label>
        </div>

        <div className='form'>
          <input type="email" name='email' id="email" className="form__input" placeholder=" " onBlur={handleBlur} onChange={handleChange} value={form.email} required />
          {errors.email && <span className='error__validate'>{errors.email}</span>}
          <label htmlFor="email" className="form__label"> e-mail </label>
        </div>

        <div className='form'>
          <input type="text" name='subjet' id="subjet" className="form__input" placeholder=" " onBlur={handleBlur} onChange={handleChange} value={form.subjet} required />
          {errors.subjet && <span className='error__validate'>{errors.subjet}</span>}
          <label htmlFor="subjet" className="form__label"> Asunto </label>
        </div>

        <div className='form'>
          <textarea name='comments' cols='40' rows='5' placeholder='Escribe tus comentarios' onBlur={handleBlur} onChange={handleChange} value={form.comments} required />
          {errors.comments && <span className='error__validate'>{errors.comments}</span>}
          <input className='btn__form btn-success' type='submit' value='Enviar' />
        </div>
      </form>
    </div>
  )
}

export default Form;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = document.querySelector(".form__input");
//   let formData = new FormData(myForm);
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };


// document.querySelector(".form").addEventListener("submit", handleSubmit);