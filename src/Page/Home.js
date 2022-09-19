
import './Home.css'
import './PageOne'
import PageOne from './PageOne';
import logoperson from './logoperson.svg'
import logoone from './logoone.svg'
import logotwo from './logotwo.svg'

function Home() {

    return (
        <section>

            <div>
                <img src={logoone} className="logoone"></img>
                <p className='p1'>Uai Design</p>

                <div className='btns'>
                    <button className='btn1'>About</button>
                    <button className='btn2'>Projects</button>
                    <button className='btn3'>Contact</button>
                </div>
                
            </div>
            

                <div className="Conteudo">

                    
                        <p className='p2'>Custom Design</p>
                        <h1>Hi, I am web design <br></br>student</h1>
                        <p className='p3'>I am a student of internet systems and I <br></br>
                        develop works in the area of ​​ux and ui<br></br> 
                        design.</p>
                    
                    <img src={logoperson} className='imgone'></img>

                    <div className='circulo'>
                        <img src={logotwo} className="imgtwo"></img>
                    </div>
                    <button className='btnView'>View Portfolio</button>
                    
                    < PageOne />

                </div>
            
        </section>
    )

}
export default Home;