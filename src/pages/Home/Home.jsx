import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

import {
    Navbar,
    Footer
} from '../../components'

function Home() {
  return (
    <div className='main-body-container'>
        <Navbar />
        <div className='home-body'>
            <span className='intro-text'>Let your Need find <span>you</span></span>
            <div>
                <span>Create Attractive Profiles</span>
                <span>Stand out among your audience, promote your expertise and brand to prospective buyers, and create a seamless channel for leads to find you. With our Agent Profile Generation tool now, you can :</span>
                <ul>
                    <li>Share your Contact Details</li>
                    <li>Display Property Listings</li>
                    <li>Promote Your brand</li>
                    <li>Highlight your achievements and a lot more</li>
                </ul>
                <nav>
                    <NavLink to='/connection' className="connection-btn">Connexion</NavLink>
                </nav>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home