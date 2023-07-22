import { showOdysseydetails } from './App';
import './App.css';
function Odyssey(){
    return(
        <>
            <div className='ody' id='Odyssey'>
                <div className='left'>
                    <p>New collection</p>
                    <p className='price'>Price: From : $1499</p>
                    <hr></hr>
                    <p className='txt'>-Custom Brushed 316L Grade stainless Steel PVD Coated with Daimond Like Carbon Watch Case</p>
                    <p className='txt'>-Ultra Scratch-resistant Sapphire Glass with Anti-Reflective Coating</p>
                </div>
                <div className='center'>
                    <h1>era </h1>
                    <h1>Odyssey</h1>
                    <p>6 body types</p>
                    <hr></hr>
                    <img src='o4.webp'></img>

                </div>
                <div className='right'>
                    <img src='o2.webp'></img>
                    <p className='txt'>The back rotor has been fully </p>
                    <p className='txt'>decorated with Cotes de Geneve </p>
                    <p className='txt'>Better known as Geneva waves</p>
                    <hr></hr>
                    <button onClick={showOdysseydetails}>Details</button>



                </div>
            </div>
        </>
    )
}
export default Odyssey;