/* First component displayed containing prompts featuring general information */
import '../style/App.css';

const General = () => {
  return (
    <section className='gen-base'>
        <div className='title'>
            General Information
        </div>
        <div className='input-cover'>
            <label>Full Name:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover'>
            <label>E-Mail:</label>
            <input type="email" className='input-main'  />
        </div>
        <div className='input-cover'>
            <label>Phone Number:</label>
            <input type="tel" className='input-main'  />
        </div>
    </section>
  )
}

export default General