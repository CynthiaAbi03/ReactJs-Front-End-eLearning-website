import React, {useState, useEffect} from 'react'
import './Admins.css'
import {
  Navbar2,
  Footer
} from '../../components'
import Biologie from '../../assets/images/courses/Biology.webp'
import Chimie from '../../assets/images/courses/chemistry.jpg'
import Anglais from '../../assets/images/courses/english.jpg'
import Geographie from '../../assets/images/courses/Geography.png'
import Histoire from '../../assets/images/courses/History.png'
import Literature from '../../assets/images/courses/Literature.jpg'
import Mathematique from '../../assets/images/courses/maths.webp'
import Philosophie from '../../assets/images/courses/philosophy.webp'
import Physique from '../../assets/images/courses/physics.jpg'


function Admins(props) {

  const [isCoursPage, setIsCoursPage] = useState(true)
  const [isClassePage, setIsClassePage] = useState(false)
  const [isTeacherPage, setIsTeacherPage] = useState(false)
 
  const [cours, setCours] = useState([
    {
        title: "Biologie",
        image: Biologie,
        namess: "Mr Bissog",
    },
    {
        title: "Chimie",
        image: Chimie,
        namess: "Mr Fotso",
        
    },
    {
        title: "Anglais",
        image: Anglais,
        namess: "Mme Abissegue",
        
    },
    {
        title: "Geographie",
        image: Geographie,
        namess : "Mr Bidima",
      
    },
    {
        title: "Histoire",
        image: Histoire,
        namess : "Mme Djifack",
  
    },
    {
        title: "Literature",
        image: Literature,
        namess : "Mme Arielle",
        
    },
    {
        title: "Mathematique",
        image: Mathematique,
        namess : "Mr Mboh",
    },
    {
        title: "Philosophie",
        image: Philosophie,
        namess : "Mr Angoah",
    },
    {
        title: "Physique",
        image: Physique,
        namess : "Mme Tsafack"
    }
  ])
  const [classe, setClasse] = useState([
    {
      title : "Biologie Terminal",
      chapters : 7,
      lessons: 5,
    },
    {
      title : "Biologie  Premier",
      chapters : 6,
      lessons: 8,
    },
    {
      title : "Biologie Seconde",
      chapters : 9,
      lessons: 7,
    },
    {
      title : "Biologie Throiseme",
      chapters : 8,
      lessons: 14,
    },
    {
      title : "Biologie Quatrieme",
      chapters : 12,
      lessons: 7,
    },
    {
      title : "Biologie Cinquieme",
      chapters : 9,
      lessons: 10,
    },
    {
      title : "Biologie Sixieme",
      chapters : 10,
      lessons: 6,
    },
  ])
  

  const [searchPattern, setSearchPattern] = useState("")
  const [coursList, setCoursList] = useState(cours)
  const [classeList, setClasseList] = useState(classe)
 

  useEffect(()=>{
    let tempList = [...coursList]
    if(searchPattern === ""){
        setCoursList(cours)
    }
    else{
        tempList = tempList.filter((cours)=>{ // Implements the search for the courses
            return cours.title.toLowerCase().includes(searchPattern.toLowerCase())
        })
        setCoursList(tempList)
    }
},[searchPattern, coursList, cours]);

const navigateToCours = () => { // Navigates the user to the Course page
  setIsCoursPage(true)
  setIsClassePage(false)
  setIsTeacherPage(false)
}

const navigateToClasse = (cours) => { 

  setIsCoursPage(false)
  setIsClassePage(true)
  setIsTeacherPage(false)

}

const navigateToTeacher = () => {
  setIsCoursPage(false)
  setIsClassePage(false)
  setIsTeacherPage(true)
}


  return (
    <div className='main-body-container'>
       <Navbar2 setSearchItem = {setSearchPattern}/>
       {isCoursPage?
          <div className='courses-container'>
            <div className='style-button'>
              <button className='btn1' onClick={() => navigateToCours()}>COURS </button>
              <button className='btn1' onClick={() => navigateToTeacher()}> ENSEIGNANTS </button>
            </div>
            <div>
              {
               coursList.map((cours, index) => { // Renders Each Course
                            return (
                                <button key={index} className='course-btn' onClick={()=> navigateToClasse(cours)}>
                                    <img src={cours.image} alt={cours.title}/>
                                    <h2>{cours.title}</h2>
                                </button>
                            )
                   })
                } 

            </div>
          </div>
        :null}

        {isClassePage?
            <div className='courses2-container'>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToCours()}>&lt;&lt;&lt; Retour au cours</span>
                </div>
                <div className='container-again'>
                  { 
                    classeList.map((classe, index)=> {
                        return (
                          <button key={index} className='classe-btn'>
                              <span>{classe.title}</span>
                              <span>&gt;</span> 
                          </button>  
                        )
                      })
                    }

                </div>
              </div>

            
        :null}

          {isTeacherPage?
            <div className='chapters-container'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span className='classs-name'> ENSEIGNANTS </span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToCours()}>&lt;&lt;&lt; Retour au cours</span>
                </div>
                <div>
                  {
                    coursList.map((cours,index)=> { // renders the chapters that contains the search pattern
                        return (
                            <button key={index} className='chapter-item'>
                                <span>{cours.namess}</span>
                                <span>&gt;</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        :null}    
        
        <Footer/>
    </div>
  )
}

export default Admins