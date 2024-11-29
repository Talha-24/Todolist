import React, { useState } from "react"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer"


const App =()=>{
    const formHandler=(e)=>{
        e.preventDefault();
       console.log(" ID Name: ",username);
       setusername('');
       console.log("EmailID: ",useremail);
       setuseremail('');
       console.log("Phone Number: ",userphone);
       setuserphone('');
       console.log("Password: ",userpassword);
       setuserpassword('');
       console.log("Confirm Password: ",useconfirmpassword);
       setuserconfirmpassword('');
}
      const [username, setusername]=useState();
      const [useremail, setuseremail]=useState();
      const [userphone, setuserphone]=useState();
      const [userpassword, setuserpassword]=useState();
      const [useconfirmpassword, setuserconfirmpassword]=useState();

    return(
        <>
        <Header />
        <h3 className="text-center">Registeration Form</h3>
         <form onSubmit={(e)=>{
            
            formHandler(e);}}>
                <div><p>Full Name </p><input onChange={(a)=>{
                    setusername(a.target.value);
                }} type="text" placeholder="Username" value={username} /></div>
                <div><p>Email ID </p><input onChange={(a)=>{
                    setuseremail(a.target.value);
                }} type="email" placeholder="Email" value={useremail} /></div>
                <div><p>Phone Number</p><input onChange={(a)=>{
                    setuserphone(a.target.value);
                }} type="phone" placeholder="Phone" value={userphone} /></div>
                <div><p>Create Password</p> <input onChange={(a)=>{
                    setuserpassword(a.target.value);

                }} type="password" placeholder="Password" value={userpassword} /></div>
                 <div><p>Confirm Password</p><input type="password" onChange={(a)=>{
                    setuserconfirmpassword(a.target.value);
                 }}

                  placeholder="Re-type Password" value={useconfirmpassword} /></div>
                 <div><button>Submit</button></div>
         </form>
         <Footer />
         
        </>

    )
}
export default App