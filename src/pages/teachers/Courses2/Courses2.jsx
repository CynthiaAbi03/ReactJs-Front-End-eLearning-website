import React, {useEffect, useState} from 'react'
import './Courses2.css'
import {Document, Page} from 'react-pdf'
/*import document1PDF from '../../../assets/pdf/document1.pdf'
import document2PDF from '../../../assets/pdf/document2.pdf'
// import document3PDF from '../../../assets/pdf/document3.pdf'
import document4PDF from '../../../assets/pdf/document4.pdf' */
import video1 from '../../../assets/videos/python1.mp4'
import video2 from '../../../assets/videos/python2.mp4'
import video3 from '../../../assets/videos/python3.mp4'
import ReactPlayer from 'react-player'
import {
       Navbar2,
       Footer
} from'../../../components'

function Courses2(props) {

  const [isCoursPage, setIsCoursPage] = useState(true)
  const [ischapterPage, setIsChapterPage] = useState(false)
  const [isLessonPage, setIsLessonPage] = useState(false)
  const [isContentPage, setIsContentPage] = useState(false)

  const [selectedCours, setSelectedCours] = useState({})
  const [selectedChapter, setSelectedChapter] = useState({})
  const [selectedLesson, setSelectedLesson] = useState({})

  const [cours, setCours] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch('http://192.168.43.147:8080/api/courses')
  .then(response => response.json())
  .then(data => {
    // Traitez les données de la réponse
    setCours(data)
    console.log(data)
  })
  .catch(error => {
    // Gérez les erreurs
  });

  };


/*const [cours, setCours] = useState([
  {
      title: "Terminale Chimie",
      chapters: 4,
      lessons: 5,
  },
  {
      title: "Seconde Chimie",
      chapters: 10,
      lessons: 3
  },
  {
      title: "Sixieme Chimie",
      chapters: 5,
      lessons: 9
  },
  {
      title: "Throisieme Chimie",
      chapters: 2,
      lessons: 3
  }
     
])
*/
//const [subject, setSubject] = useState("Chimie")
const [searchPattern, setSearchPattern] = useState("")
const [coursList, setCoursList] = useState(cours)

// The useEffect Bellow is used to search the elements
useEffect(()=>{
  let tempList = [...coursList]
  if(searchPattern === ""){
      setCoursList(cours)
  }
  else{
      tempList = tempList.filter((cours)=>{ // Implements the search for the cours
          return cours.title.toLowerCase().includes(searchPattern.toLowerCase())
      })
      setCoursList(tempList)
  }
},[searchPattern, coursList, cours]);

const navigateToCours = () => { // Navigates the user to the Cours page
  setIsCoursPage(true)
  setIsChapterPage(false)
  setIsLessonPage(false)
  setIsContentPage(false)
}
const navigateToChapters = (cours) => {
  let chapters = []
  for (let index = 0; index < cours.chapters; index++) { 
      chapters[index] = `Chapitre ${index+1}`;   // Add each chapter title to the array of chapters
  }

  let coursSelected = {...cours, chaptersList: chapters}
  setSelectedCours(coursSelected)
  setIsCoursPage(false)
  setIsChapterPage(true)
  setIsLessonPage(false)
  setIsContentPage(false)
}

const navigateToLessons = (chapter) => {
  let lessons = []
  for (let index = 0; index < selectedCours.lessons; index++) { // Add each lessons title to the array of lessons
      lessons[index] = `Lecon ${index+1}`;
  }
  let chapterSelected = {...chapter, lessonsList: lessons}
  setSelectedChapter(chapterSelected)
  setIsCoursPage(false)
  setIsChapterPage(false)
  setIsLessonPage(true)
  setIsContentPage(false)
}

const navigateToContent = (lesson) => {
  setSelectedLesson(lesson)
  setIsCoursPage(false)
  setIsChapterPage(false)
  setIsLessonPage(false)
  setIsContentPage(true)
}

  return (
    <div className='main-body-teachercontainer'>
      <Navbar2 setSearchItem = {setSearchPattern}/>
      {isCoursPage ?
            <div className='courses2-container'>
              <span className='cours-name'>COURS CHIMIE</span>
                <div className='container-again'>
                {
                  coursList.map((cours, index) => {
                    return (
                      <button key={index} className='cours-btn' onClick={() => navigateToChapters(cours)}>
                        <h2>{cours.titre}</h2>
                        <span>&gt;</span>
                        </button>

                    )
                 })
                }
              </div>
            </div>
      :null}
      {ischapterPage?
            <div className='chapters-container'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span className='classs-name'> {cours.title} {selectedCours.title}</span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToCours()}>&lt;&lt;&lt; Retour au cours</span>
                </div>
                <div>
                    {selectedCours.chaptersList.filter((chapter)=>{
                        return chapter.toLowerCase().includes(searchPattern.toLowerCase()) // filter the chapters that contains the search pattern
                    })
                    .map((chapter, index)=>{ // renders the chapters that contains the search pattern
                        return (
                            <button key={index} className='chapter-item' onClick={()=> navigateToLessons({id:index,chapterTitle:chapter})}>
                                <span>{chapter}</span>
                                <span>&gt;</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        :null}

      {isLessonPage?
            <div className='chapters-container'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span className='classs-name'>{cours.title} {selectedCours.title}: CHAPITRE : {selectedChapter.id+1} </span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToChapters(selectedCours)}>&lt;&lt;&lt; Retour au chapitre</span>
                </div>
                <div>
                    {selectedChapter.lessonsList.filter((lesson)=>{ // filter the lessons that contains the search pattern
                        return lesson.toLowerCase().includes(searchPattern.toLowerCase())
                    }).map((lesson, index)=>{  // renders the lessons that contains the search pattern
                        return (
                            <button key={index} className='chapter-item' onClick={()=> navigateToContent({id:index})}>
                                <span>{lesson}</span>
                                <span>&gt;</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        :null}

      {isContentPage? // displays the content page for each lesson
            <div className='chapters-container'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span className='classs-name'>{cours.title} {selectedCours.title}: CHAPITRE: {selectedChapter.id+1}: LECON: {selectedLesson.id+1}</span>
                    <span style={{color:'#79578D' , flexDirection:'row'}} className='backNavigate' onClick={()=>navigateToChapters(selectedCours)}>&lt;&lt;&lt; Retour aux Lessons</span>
                    </div>
                    <div className='video-container'>
                      <p> Video 1</p>
                      <ReactPlayer url={video1} controls={true} width='400px' height='400px'/>
                    </div>
                    <div className='video-container'>
                      <p> Video 2</p>
                      <ReactPlayer url={video2} controls={true} width='400px' height='400px'/>
                    </div>
                    <div className='video-container'>
                      <p> Video 3</p>
                      <ReactPlayer url={video3} controls={true} width='400px' height='400px'/>
                    </div>
  


                  </div>
                
                
                :null}
                      
       <Footer/>  
     </div>

  )
}

export default Courses2