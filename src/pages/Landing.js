import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
   <main>
    <nav>
        <img src={logo} alt='jobify' className='logo' />
    </nav>
    <div className='container page'>
        {/*info*/}
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>Deep v dolore raclette, 
                proident hot chicken post-ironic 
                pug ex enamel pin sed tattooed 
                seitan vaporware copper mug. 
                Four loko green juice put a bird on 
                it cornhole venmo plaid intelligentsia 
                esse. Four loko nisi kickstarter food
                truck yuccie. Glossier viral 
                church-key eu.</p>
                <button className="btn btn-hero">
                    Login/Register
                </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>

    </div>

   </main>
  )
}

export default Landing;