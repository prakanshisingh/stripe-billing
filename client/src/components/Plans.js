import React, { useState } from 'react'
import "../styles/plans.css"
import { useNavigate } from 'react-router-dom'

let finalPlan={
    "planTime": "",
    "planCategory": "",
    "price": "",
}

const Plans = () => {
    const navigate = useNavigate();
    const [time,setTime]=useState("Monthly");
    const [category,setCategory]=useState("Mobile");

    const submit=async(e)=>{
        e.preventDefault();
        let selectedPlan={
            "planTime": time,
            "planCategory": category,
        }
        finalPlan.planTime=time;
        finalPlan.planCategory=category;
        const result = await fetch( '/plan', {
            method: 'post',
            body: JSON.stringify(selectedPlan),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const returnData = await result.json();
        console.log(returnData);
        finalPlan.price = returnData.price;
        navigate("/paymentCard");
    }
    

    return (
        <>
            <main className='app-container position-relative'>
                <h1 className='header-topic bg-light py- px-5 my-4 mx-5'>Choose the right plan for you</h1>
                <div className='tableMain px-5'>
                <table className="table px-5" id='myDIV'>
                    <thead>
                        <tr >
                            <th scope="col">
                                <div className='toggle'>
                                    <input type='radio' id='Monthly' name='time' onClick={(e)=>setTime("Monthly")}  defaultChecked={true} />
                                    <label htmlFor='Monthly' className='month'>Monthly</label>
                                    <input type='radio' id='Yearly' name='time' onClick={(e)=>setTime("Yearly")}  />
                                    <label htmlFor='Yearly' className='year'>Yearly</label>    
                                </div>
                            </th>
                            <th scope="col"><div className="button"><input type="radio" id="Mobile" name="category" onClick={(e)=>setCategory("Mobile")} defaultChecked={true} /><label classname="btn btn-default " htmlFor="Mobile">Mobile</label><div class="triangle-down" style={{visibility:(category==='Mobile' ? "visible" : "hidden")}}></div></div></th>
                            <th scope="col"><div className="button"><input type="radio" id="Basic" name="category" onClick={(e)=>setCategory("Basic")} /><label classname="btn btn-default" htmlFor="Basic">Basic</label><div class="triangle-down" style={{visibility:(category==='Basic' ? "visible" : "hidden")}}></div></div></th>
                            <th scope="col"><div className="button"><input type="radio" id="Standard" name="category" onClick={(e)=>setCategory("Standard")} /><label classname="btn btn-default" htmlFor="Standard">Standard</label><div class="triangle-down" style={{visibility:(category==='Standard' ? "visible" : "hidden")}}></div></div></th>
                            <th scope="col"><div className="button"><input type="radio" id="Premium" name="category" onClick={(e)=>setCategory("Premium")} /><label classname="btn btn-default" htmlFor="Premium">Premium</label><div class="triangle-down" style={{visibility:(category==='Premium' ? "visible" : "hidden")}}></div></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{time==='Monthly' ? "Monthly" : "Yearly"} Price</th>
                            <td><span className={(category==='Mobile' ? "selected" : "")}>₹{time==='Monthly' ? "100" : "1000"}</span></td>
                            <td><span className={(category==='Basic' ? "selected" : "")}>₹{time==='Monthly' ? "200" : "2000"}</span></td>
                            <td><span className={(category==='Standard' ? "selected" : "")}>₹{time==='Monthly' ? "500" : "5000"}</span></td>
                            <td><span className={(category==='Premium' ? "selected" : "")}>₹{time==='Monthly' ? "700" : "7000"}</span></td>
                        </tr>
                        <tr>
                            <th scope="row">Video Quality</th>
                            <td><div className={(category==='Mobile' ? "selected" : "")}>Good</div></td>
                            <td><div className={(category==='Basic' ? "selected" : "")}>Good</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>Better</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>Best</div></td>
                        </tr>
                        <tr>
                            <th scope="row">Resolution</th>
                            <td><div className={(category==='Mobile' ? "selected" : "")}>480p</div></td>
                            <td><div className={(category==='Basic' ? "selected" : "")}>480p</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>1080p</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>4K+HDR</div></td>
                        </tr>
                        <tr>
                            <th scope="row">Devices you can use to watch</th>
                            <td><div className={(category==='Mobile' ? "selected" : "")}>Phone</div></td>
                            <td><div className={(category==='Basic' ? "selected" : "")}>Phone</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>Phone</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>Phone</div></td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row"></th>
                            <td><div className={(category==='Mobile' ? "selected" : "")}>Tablet</div></td>
                            <td><div className={(category==='Basic' ? "selected" : "")}>Tablet</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>Tablet</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>Tablet</div></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>

                            <td><div className={(category==='Basic' ? "selected" : "")}>Computer</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>Computer</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>Computer</div></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>

                            <td><div className={(category==='Basic' ? "selected" : "")}>TV</div></td>
                            <td><div className={(category==='Standard' ? "selected" : "")}>TV</div></td>
                            <td><div className={(category==='Premium' ? "selected" : "")}>TV</div></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button type="submit" className="btn mx-5 " onSubmit={submit} >Next</button>
            </main>
        </>
    )
}

export default Plans