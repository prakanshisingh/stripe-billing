
// import './App.css';
import { BrowserRouter as Main, Route ,Routes} from "react-router-dom";


import Logedin from "./components/Logedin";
import Plans from "./components/Plans";
import Register from "./components/Register";
import PaymentCard from "./components/PaymentCard";

function App() {
  return (
    <div className="App " style={{backgroundColor: "teal"}}>
      

      <Routes>
      <Route path="/" element={<Register />}/>
        
      <Route path="/login" element={<Logedin />}/>
        
      <Route path="/plan" element={<Plans />}/>
      <Route path="/paymentCard" element={ <PaymentCard/>}/>
     
        
     
      </Routes>


      {/* <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Logedin />
      </Route>
      <Route path="/plan">
        <Plans />
      </Route>
      <Route path="/register">
        <Register />
      </Route> */}
     
  
      
      {/* <Logedin/> */}
      {/* <Plans/> */}
    </div>
  );
}

export default App;
