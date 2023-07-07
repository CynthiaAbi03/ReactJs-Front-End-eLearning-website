import React, {useEffect, useState} from 'react'
import './Courses.css'
import Biologie from '../../../assets/images/courses/Biology.webp'
import Chimie from '../../../assets/images/courses/chemistry.jpg'
import Anglais from '../../../assets/images/courses/english.jpg'
import Geographie from '../../../assets/images/courses/Geography.png'
import Histoire from '../../../assets/images/courses/History.png'
import Literature from '../../../assets/images/courses/Literature.jpg'
import Mathematique from '../../../assets/images/courses/maths.webp'
import Philosophie from '../../../assets/images/courses/philosophy.webp'
import Physique from '../../../assets/images/courses/physics.jpg'

import {
    Navbar2,
    Footer
} from '../../../components'

function Courses(props) {
    const [isCoursePage, setIsCoursePage] = useState(true)
    const [ischapterPage, setIsChapterPage] = useState(false)
    const [isLessonPage, setIsLessonPage] = useState(false)
    const [isContentPage, setIsContentPage] = useState(false)

    const [selectedCourse, setSelectedCourse] = useState({})
    const [selectedChapter, setSelectedChapter] = useState({})
    const [selectedLesson, setSelectedLesson] = useState({})

    const [courses, setCourses] = useState([
        {
            title: "Biologie",
            image: Biologie,
            chapters: 4,
            lessons: 5,
        },
        {
            title: "Chimie",
            image: Chimie,
            chapters: 10,
            lessons: 3
        },
        {
            title: "Anglais",
            image: Anglais,
            chapters: 5,
            lessons: 9
        },
        {
            title: "Geographie",
            image: Geographie,
            chapters: 2,
            lessons: 3
        },
        {
            title: "Histoire",
            image: Histoire,
            chapters: 18,
            lessons: 5
        },
        {
            title: "Literature",
            image: Literature,
            chapters: 12,
            lessons: 3
        },
        {
            title: "Mathematique",
            image: Mathematique,
            chapters: 29,
            lessons: 6
        },
        {
            title: "Philosophie",
            image: Philosophie,
            chapters: 4,
            lessons: 2
        },
        {
            title: "Physique",
            image: Physique,
            chapters: 7,
            lessons: 8
        }
    ])
    const [classe, setClasse] = useState("Terminale")
    const [searchPattern, setSearchPattern] = useState("")
    const [coursesList, setCoursesList] = useState(courses)


    // The useEffect Bellow is used to search the elements
    useEffect(()=>{
        let tempList = [...coursesList]
        if(searchPattern === ""){
            setCoursesList(courses)
        }
        else{
            tempList = tempList.filter((course)=>{ // Implements the search for the courses
                return course.title.toLowerCase().includes(searchPattern.toLowerCase())
            })
            setCoursesList(tempList)
        }
    },[searchPattern, coursesList, courses]);


    const navigateToCourse = () => { // Navigates the user to the Course page
        setIsCoursePage(true)
        setIsChapterPage(false)
        setIsLessonPage(false)
        setIsContentPage(false)
    }

    const navigateToChapters = (course) => {
        let chapters = []
        for (let index = 0; index < course.chapters; index++) { 
            chapters[index] = `Chapitre ${index+1}`;   // Add each chapter title to the array of chapters
        }
        let courseSelected = {...course, chaptersList: chapters}
        setSelectedCourse(courseSelected)
        setIsCoursePage(false)
        setIsChapterPage(true)
        setIsLessonPage(false)
        setIsContentPage(false)
    }

    const navigateToLessons = (chapter) => {
        let lessons = []
        for (let index = 0; index < selectedCourse.lessons; index++) { // Add each lessons title to the array of lessons
            lessons[index] = `Lecon ${index+1}`;
        }
        let chapterSelected = {...chapter, lessonsList: lessons}
        setSelectedChapter(chapterSelected)
        setIsCoursePage(false)
        setIsChapterPage(false)
        setIsLessonPage(true)
        setIsContentPage(false)
    }

    const navigateToContent = (lesson) => {
        setSelectedLesson(lesson)
        setIsCoursePage(false)
        setIsChapterPage(false)
        setIsLessonPage(false)
        setIsContentPage(true)
    }
  return (
    <div className='main-body-container'>
        <Navbar2 setSearchItem = {setSearchPattern}/>
        {isCoursePage ?
            <div className='courses-container'>
                <span className='classs-name'>{classe} : COURS</span>
                <div>
                    {
                        coursesList.map((course, index) => { // Renders Each Course
                            return (
                                <button key={index} className='course-btn' onClick={()=> navigateToChapters(course)}>
                                    <img src={course.image} alt={course.title}/>
                                    <h2>{course.title}</h2>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        : null}
        
        {ischapterPage?
            <div className='chapters-container'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span className='classs-name'>{classe}: COURS : {selectedCourse.title}</span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToCourse()}>&lt;&lt;&lt; Retour au cours</span>
                </div>
                <div>
                    {selectedCourse.chaptersList.filter((chapter)=>{
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
                    <span className='classs-name'>{classe}: COURS : {selectedCourse.title}: CHAPITRE : {selectedChapter.id+1} </span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToChapters(selectedCourse)}>&lt;&lt;&lt; Retour au chapitre</span>
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
                    <span className='classs-name'>{classe}: COURS : {selectedCourse.title}: CHAPITRE: {selectedChapter.id+1}: LECON: {selectedLesson.id+1}</span>
                    <span style={{color:'#79578D'}} className='backNavigate' onClick={()=>navigateToChapters(selectedCourse)}>&lt;&lt;&lt; Retour aux Lessons</span>
                </div>
                <div>
                    {/* {selectedChapter.lessonsList.map((lesson, index)=>{
                        return (
                            <button key={index} className='chapter-item' onClick={()=> navigateToContent(lesson)}>
                                <span>{lesson}</span>
                                <span>&gt;</span>
                            </button>
                        )
                    })} */}
                </div>
            </div>
        :null}
        <Footer/>
    </div>
  )
}

export default Courses