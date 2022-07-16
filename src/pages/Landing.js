import React from 'react'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
   <Wrapper>
    <nav>
    <Logo/>
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
            <Link to='/register' className='btn btn-hero'>
                Login/Register
            </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>

    </div>

   </Wrapper>
  )
}

export default Landing;