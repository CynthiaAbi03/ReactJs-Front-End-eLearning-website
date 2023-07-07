import React, {useState} from 'react'
import './Login.css'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

import {
    Navbar,
    Footer
} from '../../../components'

function Login() {
    const [isLogin, setIsLogin] = useState(true)

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [classe, setClasse] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // const apiUrl = "http://localhost:8080/api/student"

    const submitStudentLogin = (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            alert("Veuillez remplir tous les champs")
        }
        const studentInfo = {
            email: email,
            MotDePasse: password,
        }

        // You call Axios funcntions in the line below after the console.log
        console.log("Login Student Info: ")
        console.log(studentInfo)
        // axios.post(apiUrl, studentInfo)
        // .then(response => {
        //     console.log(response)
        //     navigate('/studentCourse', { replace: true })
        // })
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });
    }

    const submitStudentSignup = (e) => {
        e.preventDefault()
        if (nom === "" || prenom === "" || classe === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Veuillez remplir tous les champs")
        }
        const studentInfo = {
            nom: nom,
            Prenom: prenom,
            Classe: classe,
            email: email,
            MotDePasse: password
        }
        console.log("Signup Teacher Info: ")
        console.log(studentInfo)
    }
  return (
    <div className='main-body-container'>
        <Navbar />
        <div className='login-container'>
            
            <form action="" className='login-form'>
            {isLogin?
            <>
                <div className='form-header'>
                    <span>Connexion Apprenant</span>
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
                    <button className='submit-login' type='submit' onClick={(e)=>submitStudentLogin(e)}>Se Connecter</button>
                    <span>Vous n’avez pas de comptes ? <button className='signup-text-link' onClick={()=>  setIsLogin(false)}>Inscrivez-vous</button></span>
                </div>
            </>
            :null}

            {!isLogin?
            <>
                <div className='form-header'>
                    <span>Inscription Apprenant</span>
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
                        <input placeholder="Entrez votre Classe" class="input-field" type="text" onChange={(e)=>setClasse(e.target.value)} required/>
                        <label for="input-field" class="input-label">Classe</label>
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
                    <button className='submit-login' type='submit' onClick={(e)=>submitStudentSignup(e)}>S'Inscrire</button>
                    <span>Vous avez deja un comptes ? <button className='signup-text-link' onClick={()=> setIsLogin(true)}>Connectez-vous</button></span>
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