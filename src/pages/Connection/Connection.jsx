import React from 'react'
import './Connection.css'
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    Footer
} from '../../components'

function Connection(props) {
  return (
    <div className='main-body-container'>
        <Navbar />
        <div className="connection-container">
            <div>
                <h1>Pour les <span>enseignants</span></h1>
                <p>Nous sommes la meilleure platform pour le recrutement d’enseignants dans le but d’identifier des pédagogues avec des compétences adéquates.</p>
                <NavLink to='/teacherLogin' className='teachers-login-btn'>Connexion</NavLink>
            </div>
            <div>
                <h1>Pour les <span>apprenants</span></h1>
                <p>Rejoignez une communauté de plus de 25000 apprenants et formez vous avec les meilleurs enseignants du pays.</p>
                <NavLink to='/studentLogin' className='student-login-btn'>Connexion</NavLink>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Connection