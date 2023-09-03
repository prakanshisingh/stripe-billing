import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Logedin = () => {
    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser=async(e)=>{
        e.preventDefault();
        // alert('handle submit reached');
        const res= await fetch('/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials")
        } else {
            window.alert("Successfully Login")
            navigate("/plan")
        }
    }


    return (
        <>
        <span>.</span>
            <section className="signup">
                <div className="container my-5 bg-light Small shadow rounded-4 col-12 col-md-4">
                    <div className="signup-content">
                        <h1 className="form-title text-center mt-5 py-2">Login to your Account</h1>
                        <form method='POST'>
                            <div className="form-group my-4 mx-5">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group my-4 mx-5">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check my-4 mx-5">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Remember Me
                                </label>
                            </div>
                            <div className='login-btn  '>
                            <button type="submit" onClick={loginUser} className="btn btn-primary mx-5">Login</button>
                            </div>
                            <div className="form-group my-4 mx-5">
                            <h6 className="Already text-center p-2">New to MyApp?
                            <NavLink to="/" > SignUp</NavLink>
                            </h6>
                            </div>
                            
                            
                            
                        </form>
                    </div>

                </div>

            </section>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p><p>.</p><p>.</p>
        </>
    )
}

export default Logedin