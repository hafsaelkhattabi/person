import React from "react";
import { useState, useEffect } from "react";
import './styles.css'

 const Person = () => {
    
     const [person, setperson] = useState ({
        imgsrc: "./me.jpg",
        fullname: "hafsa",
        bio: "I am a student of web development",
        profession: "student",
     })     
         
    //  state for timer
     const [timer, settimer] = useState(0) 
     
    //  state for showing and hiding profile
     const [isMe, setisMe] = useState (false)

    // useEffect for the timer
     useEffect (() => {
        const intervaltime = setInterval (() => {
            settimer (pervtime => pervtime + 1)
        }, 1000)
        return () => {
            clearInterval (intervaltime)
        }
    }, [])



const showstates = () => {
        setisMe ((previsMe) => !previsMe)
}

    
        return (
            <div>
                <button onClick={showstates}>
                    {isMe ? "hide Profile" : "show Profile"}
                </button>
                {isMe && (
                    <div>
                        <img className='img' src={person.imgsrc}/>
                        <h2> {person.fullname}</h2>
                        <p>{person.bio}</p>
                        <p>{person.profession}</p>
                        <p>Time: {timer}</p>
                    </div>
                )
                }
            </div>
        )

    }


export default Person
