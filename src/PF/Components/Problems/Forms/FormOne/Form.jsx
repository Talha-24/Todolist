import React, { useState } from "react"
/*
Make a responsive form component which store the userinputData in the local Storage.
The Criteria of making form is :
 1.Make Simple Form Which takes, username, useremail, usephonenumber, userpassword, userconfirmpassword*/
 /*
 i.Disable the Default Behavior of the form
 1. Making 5 HooksStates to store the userinput data.
 2. Assigning Hooksreadable elements to props(attribute): value of input 
 3. Using event Handler onChange in the inputs to take userinput and assigning its value to hooksstate
 writingable elements(setusername,setuseremail,userphone,userpassword,userconfirmpassword)
 4. Its time to display those values and store them at the local storage(Step 4 is to learn about local storage)
 5. Use console.log function to display the userinput (console.log(username),setusername('').console.log(useremail),setuseremail('')..and so onn..)*/
const clientOne =()=>{

    const [username, setusername]=useState('');
    const [useremail, setuseremail]=useState('');
    const [userphone, setuserphone]=useState('');
    const [userpassword, setuserpassword]=useState('');
    const [userconfirmpassword, setuserconfirmpassword]=useState('');
    const formHandler=(evt)=>{
        evt.preventDefault();
        console.log("Data of Person_One: ",username)
        console.log("Username: ",username);
        setusername('');
        console.log("Email Address: ",useremail);
        setusername('');
        console.log("Phone Number: ",userphone);
        setuserphone('');
        console.log("Secure Password: ",userpassword);
        setuserpassword('');
        console.log("Confirm Password: ",userconfirmpassword);
        setuserpassword('');

    }
    return(
        <div id="page1">
            
            <form id="form" onSubmit={(evt)=>{
                formHandler(evt);

            }}>
                <h1>Registeration Form</h1>
               <div id="uname">
                <p>Username</p><input onChange={
                    (e)=>{
                        setusername(e.target.value);

                    }
                } type="text"  value={username} id="" />
               </div>
               <div id="uemail">
                <p>Email Address</p><input onChange={(e)=>{
                    setuseremail(e.target.value)
                }}type="email" value={useremail} id="" />
               </div>
               <div id="uphone">
                <p>Phone Number</p><input onChange={(e)=>{
                    setuserphone(e.target.value);
                }} type="phone" value={userphone} id="" />
               </div>
               <div id="upassword">
                <p>Account Password</p><input onChange={(e)=>{
                    setuserpassword(e.target.value);
                }} type="password"  value={userpassword} id="" />
               </div>
               <div id="ucpassword">
                <p>Confirm Password</p><input onChange={(e)=>{
                    setuserconfirmpassword(e.target.value)
                }}type="password"  value={userconfirmpassword} id="" />
               </div>
               <div id="register">
                <button>Register</button>

               </div>
                
            </form>
        </div>
    )
}
export default clientOne