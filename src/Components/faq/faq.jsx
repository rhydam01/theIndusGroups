import Footer from '../Footer/Footer';
import Navbar from '../Header/navbar';
import './faq.css';

const FAQ = () =>{
    return(
        <div>

            <Navbar/>
            <div style={{height:"15vh"}}></div>
            <div className='license-container'>
                <div className='imageOfLicense'></div>
                <div className="licenseName">
                    License name
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
            <div className='license-container'>
                <div className='imageOfLicense'></div>
                <div className="licenseName">
                    License name
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
            <div className='license-container'>
                <div className='imageOfLicense'></div>
                <div className="licenseName">
                    License name
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
            <div className='license-container'>
                <div className='imageOfLicense'></div>
                <div className="licenseName">
                    License name
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
            <div className='license-container'>
                <div className='imageOfLicense'></div>
                <div className="licenseName">
                    License name
                </div>
            </div>
<Footer/>
        </div>
    );
}

export default FAQ;