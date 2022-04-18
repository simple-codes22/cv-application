
import '../style/App.css';

const Practical = () => {
  return (
    <section className='gen-base'>
        <div className='title'>
            Professional Experience
        </div>
        <div className='input-cover' id='practical'>
            <label>I Worked at:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover' id='practical'>
            <label>My Job Title Was:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover' id='practical'>
            <label>My Job Task:</label>
            <input type="text" className='input-main'  />
        </div>
        <div className='input-cover from-to' id='practical'>
            <div>
                <label>Started from:</label>
                <input type="date" className='input-main' />
            </div>
            <div>
                <label>Until:</label>
                <input type="date" className='input-main' />
            </div>
        </div>
    </section>
  )
}

export default Practical