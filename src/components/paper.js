import React, { useState , useEffect } from 'react';
import logo from '../logo.jpg';
import './paper.css';
import axios from 'axios';
const Paper = () => {
    const questions = ["What is a class diagram ? What are the common properties and usesof class diagram.(10M) ","What are things in UML explain in detail and Explain in detail about relationships in UML.(10M) ","Discuss the SDLC in detail with neat Diagram SDLC-Software Development Life Cycle(10M) ","What are the various kinds of Classiifiers in UML?.Explain .(10M) ","Describe interfaces,types and roles with examples .(10M) ","Explain about Modelling techniques for object diagrams..(10M) ","Differentiate between classes and object diagrams in UML.(10M) ","What is prototypical instance? explain in detail .(10M) ","Explain advanced relationships in detail .(10M) ","Explain about links and Multplicity of Association in detail .(10M) "];
    console.log(questions.length)
    const [data,setData] = useState(0);
    const getdatafromApi = () =>{
        /*axios.post('https://610ba5b32b6add0017cb39c5.mockapi.io/questions',data).then(response => {
            console.log(response);
        })*/

        axios.get('https://610ba5b32b6add0017cb39c5.mockapi.io/questions').then(response => {
            let l = (response.data).length - 1;
            setData(response.data[l]);
        })
    }
    useEffect(()=>{
        getdatafromApi();
    })
    const printDiv = () => {
        let s = document.getElementById('bbb');
        s.style.display="none";
        window.print();
      }
    return (
        (data && <>
            <button onClick={printDiv} id="bbb" className="btn btn-info p-3 mt-5">Print Paper</button>
            <div className="container border border-secondary mt-5">
                <div className="row m-3 mt-5">
                    <div className="col-md-1 logo">
                        <img src={logo} alt="logo"width="100" height="120"/>
                    </div>
                    <div className="col">
                        <div className="title mt-2">Rajiv Gandhi University Of Knowledge Technologies- Srikakulam</div>
                        <div className="title-com">Department of {data.branch}</div>
                        <div className="title-com">{data.cexam} , AY {data.ayear}</div>
                    </div>
                </div>
                <div className="row mt-0">
                    <div className="col  text-left">
                        <div className="title-com title-sub">Year/Sem  : {data.yearSem} </div>
                        <div className="title-com title-sub">Subject   : {data.subject} </div>
                        <div className="title-com title-sub">Subject Code  : {data.SubjectCode} </div>
                    </div>
                    <div className="col">
                        <div className="title-com title-sub2">Date :  {data.date} </div>
                        <div className="title-com title-sub2">Time : {data.time} Hours </div>
                        <div className="title-com title-sub2">Max. Marks  : {data.marks} </div>
                    </div>
                </div>
                <hr className="line"/>
                <div className="title-com mb-2">Answer any FOUR of the following questions. Each question carries TEN
    marks. (4 X 10 = 40 M)</div>
                {
                    data.questions.map((question,index)=>{
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
            </>)
    )
}

export default Paper;