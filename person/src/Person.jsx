import React from "react";
import { Component } from "react";

class Person extends React.Component {
    constructor (props){
        super (props);
            this.state = {
                  imgsrc: "#",
                  fullname: "hafsa",
                  bio: "I am a student of web development",
                  profession: "student",
                  isMe: false,
                  timer: 0
            }
    }
     
    componentDidMount () {
        this.timer = setInterval (() => {
            this.setState ((prevState) => ({
                timer: prevState.timer + 1,
            }))
        }, 1000)
    }  
        componentWillUnmount () {
            clearInterval (this.timer)
        }
            

    showstates = () => {
        this.setState ({ isMe: !this.state.isMe})
    }

    render () {
        return (
            <div>
                <button onClick={this.showstates}>
                    {this.state.isMe ? "hide Profile" : "show Profile"}
                </button>
                {this.state.isMe && (
                    <div>
                        <img src={this.state.imgsrc}/>
                        <h2> {this.state.fullname}</h2>
                        <p>{this.state.bio}</p>
                        <p>{this.state.profession}</p>
                        <p>Time: {this.state.timer}</p>
                    </div>
                )
                }
            </div>
        )
    }

}

export default Person