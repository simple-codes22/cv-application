/*  */
import '../style/App.css';

const Educational = () => {
  return (
    <section className='gen-base'>
        <div className='title'>
            Educational experience
        </div>
        <div className='input-cover'>
            <label>School Name:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover'>
        <label>Title of Study:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover'>
        <label>Date of Study:</label>
            <input type="date" className='input-main'  />
        </div>
    </section>
  )
}

export default Educational