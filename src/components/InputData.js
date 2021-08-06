import React,{ useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const InputData = () => {
    const history = useHistory()
    const [questions,setQuestions] = useState([])
    const [q1,setQ1] = useState('')
    const [q2,setQ2] = useState('')
    const [q3,setQ3] = useState('')
    const [q4,setQ4] = useState('')
    const [q5,setQ5] = useState('')
    const [q6,setQ6] = useState('')
    const [q7,setQ7] = useState('')
    const [q8,setQ8] = useState('')
    const [q9,setQ9] = useState('')
    const [q10,setQ10] = useState('')

    const storeValue = (e) => {
        e.preventDefault();
        setQuestions([...questions,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10])
        console.log(questions)
        postdataToApi()
    }

    const postdataToApi = () => {
        const data = {
            "branch":"Computer science Engineering",
            "cexam":"E3 SEM_1 MID 1",
            "ayear":"2020-21 (July 2021)",
            "yearSem":"E3/Sem1",
            "date":"01-08-2021",
            "subject":"OOAD",
            "Time":"2",
            "SubjectCode":"CS3107",
            "marks":"40",
            "questions":[q1+" ? 10 M",q2+" ? 10 M",q3+" ? 10 M",q4+" ? 10 M",q5+" ? 10 M",q6+" ? 10 M",q7+" ? 10 M",q8+" ? 10 M",q9+" ? 10 M",q10+" ? 10 M"]
        }
        axios.post('https://610ba5b32b6add0017cb39c5.mockapi.io/questions',data).then(response => {
            console.log(response);
        })
        history.push('/print')
    }

    return (
       <div className="m-5 main-inp" >
           <form onSubmit={storeValue}>
           <div className="card border border-dark">
            <div className="card-header bg-dark text-center text-light"><h4>Enter Details</h4></div>
            <div className="card-body">
                <div className="form-group text-left">
                    <label>Enter Question 1</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ1(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 2</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ2(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 3</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ3(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 4</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ4(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 5</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ5(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 6</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ6(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 7</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ7(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 8</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ8(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 9</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ9(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
                <div className="form-group text-left">
                    <label>Enter Question 10</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQ10(e.target.value)}} placeholder="Enter Branch Name" required/>
                </div>
            </div>
            <div className="card-footer bg-dark">
                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
           </div>
           </form>
       </div>
    )
}

export default InputData;