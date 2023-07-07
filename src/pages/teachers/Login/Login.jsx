import React, {useState} from 'react'
import './Login.css'
// import axios from 'axios'

import {
    Navbar,
    Footer
} from '../../../components'

function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [ue, setUE] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [accessCode, setAccessCode] = useState("")

    const submitTeacherLogin = (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            alert("Veuillez remplir tous les champs")
        }
        const teacherInfo = {
            email: email,
            password: password,
        }
        console.log("Login Teacher Info: ")
        console.log(teacherInfo)
    }

    const submitTeacherSignup = (e) => {
        e.preventDefault()
        if (nom === "" || prenom === "" || ue === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Veuillez remplir tous les champs")
        }
        const teacherInfo = {
            nom: nom,
            prenom: prenom,
            ue: ue,
            email: email,
            password: password
        }
        console.log("Signup Teacher Info: ")
        console.log(teacherInfo)
    }

    const submitAdminLogin = (e) => {
        e.preventDefault()
        console.log("Login Admin Info: ")
        console.log(accessCode)
    }
  return (
    <div className='main-body-container'>
        <Navbar />
        <div className='login-container'>
            
            <form action="" className='login-form'>
            {isLogin && !isAdmin?
            <>
                <div className='form-header'>
                    <div class="checkbox-wrapper-12">
                        <div class="cbx">
                            <input id="cbx-12" type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)}/>
                            <label for="cbx-12"></label>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                            <filter id="goo-12">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>Connexion enseignant</span>
                </div>
                <div className="form-body">
                    <div class="input-container">
                        <input placeholder="Entrez votre Email" class="input-field" type="email" onChange={(e)=>setEmail(e.target.value)} required/>
                        <label htmlFor="input-field" class="input-label">Email</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Entrez votre Mot de Passe" class="input-field" type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                        <label htmlFor="input-field" class="input-label">Mot de Passe</label>
                        <span class="input-highlight"></span>
                    </div>
                    <button className='submit-login' type='submit' onClick={(e)=>submitTeacherLogin(e)}>Se Connecter</button>
                    <span>Vous n’avez pas de comptes ? <button className='signup-text-link' onClick={()=>  setIsLogin(false)}>Inscrivez-vous</button></span>
                </div>
            </>
            :null}

            {!isLogin?
            <>
                <div className='form-header'>
                    <span>Inscription enseignant</span>
                </div>
                <div className="form-body">
                    <div class="input-container">
                        <input placeholder="Entrez votre Nom" class="input-field" type="text" onChange={(e)=> setNom(e.target.value)} required/>
                        <label for="input-field" class="input-label">Nom</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Entrez votre Prenom" class="input-field" type="text" onChange={(e)=> setPrenom(e.target.value)} required/>
                        <label for="input-field" class="input-label">Prenom</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Entrez l'Unite de l'Enseignement" class="input-field" type="text" onChange={(e)=>setUE(e.target.value)} required/>
                        <label for="input-field" class="input-label">Unite Enseignement</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Entrez votre Email" class="input-field" type="email" onChange={(e)=> setEmail(e.target.value)} required/>
                        <label for="input-field" class="input-label">Email</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Entrez votre Mot de Passe" class="input-field" type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                        <label for="input-field" class="input-label">Mot de Passe</label>
                        <span class="input-highlight"></span>
                    </div>
                    <div class="input-container">
                        <input placeholder="Confirmer votre Mot de Passe" class="input-field" type="password" onChange={(e)=> setConfirmPassword(e.target.value)} required/>
                        <label for="input-field" class="input-label">Confirnmer Mot de Passe</label>
                        <span class="input-highlight"></span>
                    </div>
                    {password !== confirmPassword && confirmPassword!== "" ? <span className='invalid-pwd'>Votre Mot de Passe n'est pas correct</span>
                    :null}
                    {password === confirmPassword && password!== ""? <span className='valid-pwd'>Votre Mot de passe est correct</span>
                    :null}
                    <button className='submit-login' type='submit' onClick={(e)=>submitTeacherSignup(e)}>S'Inscrire</button>
                    <span>Vous avez deja un comptes ? <button className='signup-text-link' onClick={()=> setIsLogin(true)}>Connectez-vous</button></span>
                </div>
            </>
            :null}

            {isAdmin? 
            <>
                <div className='form-header'>
                    <div class="checkbox-wrapper-12">
                        <div class="cbx">
                            <input id="cbx-12" type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)}/>
                            <label for="cbx-12"></label>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                            <filter id="goo-12">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <span>Connexion Administrateur</span>
                </div>
                <div className="form-body">
                    <div class="input-container">
                        <input placeholder="Entrez votre Code d'Acces" class="input-field" type="password" onChange={(e)=>setAccessCode(e.target.value)} required/>
                        <label for="input-field" class="input-label">Code d'Acces</label>
                        <span class="input-highlight"></span>
                    </div>
                    <button className='submit-login' type='submit' onClick={(e)=>submitAdminLogin(e)}>Se Connecter</button>
                </div>
            </>
            :null}
            </form>

        </div>
        <Footer />
    </div>
  ) 
}

export default Login