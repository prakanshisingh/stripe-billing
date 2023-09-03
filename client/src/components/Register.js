// import React,{Component} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// export default function Register () {
//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             email:"",
//             password:"",
//         };
//     }


//     return (
//         <>
//         <span>.</span>
//             <section className="signup">
//                 <div className="container bg-light my-5  Small shadow rounded-4 col-12 col-md-4">
//                     <div className="signup-content">
//                         <h1 className="form-title text-center mt-5 py-2">Create Account</h1>
//                         <form  method='POST'>
//                             <div className="form-group my-4 mx-5">
//                                 <label htmlFor="name">Name</label>
//                                 <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" placeholder="Enter your name" />
//                             </div>
//                             <div className="form-group my-4 mx-5">
//                                 <label htmlFor="exampleInputEmail1">Email address</label>
//                                 <input type="email"  className="form-control" id="exampleInputPassword1" placeholder="Password" />
//                             </div>
//                             <div className="form-check my-4 mx-5">
//                                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
//                                 <label className="form-check-label" htmlFor="flexCheckChecked">
//                                     Remember Me
//                                 </label>
//                             </div>
//                             <button type="submit" className="btn btn-primary mx-5 " >Sign Up</button>
//                             <div className="form-group my-4 mx-5">
//                             <h6 className="Already text-center p-2">Already have an account?
//                             <NavLink to="/login" > Login</NavLink>
//                             </h6>
//                             </div>
//                         </form>
//                     </div>

//                 </div>

//             </section>
//             <span>.</span>
//             <p>.</p>
//             <p>.</p>
//             <p>.</p><p>.</p>
//         </>
//     )
// }




import React, { Component, useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert('handle submit reached');
        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid Credentials")
        } else {
            window.alert("Successfully Registered")
            navigate("/login")
        }
    };

    return (
        <>
            <span>.</span>
            <section className="signup">
                <div className="container bg-light my-5  Small shadow rounded-4 col-12 col-md-4">
                    <div className="signup-content">
                        <h1 className="form-title text-center mt-5 py-2">Create Account</h1>
                        <form method='POST'>
                            <div className="form-group my-4 mx-5">
                                <label htmlFor="name">Name</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="Name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group my-4 mx-5">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group my-4 mx-5">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check my-4 mx-5">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Remember Me
                                </label>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary mx-5 " >Sign up</button>
                            <div className="form-group my-4 mx-5">
                                <h6 className="Already text-center p-2">Already have an account?
                                    <NavLink to="/plan" > Login</NavLink>
                                </h6>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <span>.</span>
            <p>.</p>
            <p>.</p>
            <p>.</p><p>.</p>
        </>
    );
}
