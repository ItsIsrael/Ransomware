import './Error.scss';

const Error = () => {
  return (
    <>
      <main className='error__container__'>
        <h1>La página no se ha encontrado</h1>
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;404&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;404&nbsp;</span>
      </button>
      </main>
    </>
  )
}

export default Error;