import React from 'react';
import logo from '../logo.jpg';
import './paper.css'
const paper = () => {
    const questions = ["What is a class diagram ? What are the common properties and usesof class diagram.(10M) ","What are things in UML explain in detail and Explain in detail about relationships in UML.(10M) ","Discuss the SDLC in detail with neat Diagram SDLC-Software Development Life Cycle(10M) ","What are the various kinds of Classiifiers in UML?.Explain .(10M) ","Describe interfaces,types and roles with examples .(10M) ","Explain about Modelling techniques for object diagrams..(10M) ","Differentiate between classes and object diagrams in UML.(10M) ","What is prototypical instance? explain in detail .(10M) ","Explain advanced relationships in detail .(10M) ","Explain about links and Multplicity of Association in detail .(10M) "];
    console.log(questions.length)
    return (
        <div>
        <div className="container border border-secondary mt-5">
            <div className="row m-3 mt-5">
                <div className="col-md-1 logo">
                    <img src={logo} alt="logo"width="100" height="120"/>
                </div>
                <div className="col">
                    <div className="title mt-2">Rajiv Gandhi University Of Knowledge Technologies- Srikakulam</div>
                    <div className="title-com">Department of Computer Science Engineering</div>
                    <div className="title-com">E3 SEM_1 MID 1 , AY 2020-21 (July 2021)</div>
                </div>
            </div>
            <div className="row mt-0">
                <div className="col  text-left">
                    <div className="title-com title-sub">Year/Sem  : E3/ Sem1 </div>
                    <div className="title-com title-sub">Subject   : OOAD </div>
                    <div className="title-com title-sub">Subject Code  : CS3107 </div>
                </div>
                <div className="col">
                    <div className="title-com title-sub2">Date :  01-08-2021</div>
                    <div className="title-com title-sub2">Time : 2 Hours </div>
                    <div className="title-com title-sub2">Max. Marks  : 40 </div>
                </div>
            </div>
            <hr className="line"/>
            <div className="title-com mb-2">Answer any FOUR of the following questions. Each question carries TEN
marks. (4 X 10 = 40 M)</div>
            {
                questions.map((question,index)=>{
                    return (
                    <div className="question-main row" key={index}>
                        <div className="question-num col-sm-1">{index + 1}.</div>
                        <div className="question col text-left">{question}</div>
                    </div>
                    )
                })
            }
            <div className="mt-5"></div>
        </div>
        </div>
    )
}

export default paper;