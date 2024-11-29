import React, { useState } from "react"
const PageThree =()=>{
    const [username, setusername]=useState('');
    const [useremail, setuseremail]=useState('');
    const [userphone, setuserphone]=useState('');
    const [userpassword, setuserpassword]=useState('');
    const [userconfirmpassword, setuserconfirmpassword]=useState('');
    const [userpaymentmethod, setuserpaymentmethod]=useState('');
    const [userpaymentnumber, setuserpaymentnumber]=useState('');
  const formHandler=()=>{
    console.log("Username : ",username);
    console.log("Name : ",username);
    setusername('');
    console.log("Email : ",useremail);
    setuseremail('');
    console.log("Phone : ",userphone);
    setuserphone('');
    console.log("Password : ",userpassword);
    setuserpassword('');
    console.log("Security : ",userconfirmpassword);
    setuserpassword('');
    console.log("");
    setuserconfirmpassword('');
    console.log("Payment Method : ",userpaymentmethod);
    setuserpaymentmethod('');
    console.log("Account Number : ",userpaymentnumber)


    
  }
    return(
        <>
        <div id="PageThree">
            <marquee >Hurry Up!, Offer is running out!Register and get it!</marquee>
            <form onSubmit={(e)=>{
                e.preventDefault();
                formHandler();
            }}>
                <div><p>Full Name  </p><input  onChange={(e)=>{
                    setusername(e.target.value);
                }} type="text" placeholder="Enter your name" value={username} focus/></div>
                <div><p>Email Address </p><input onChange={(e)=>{
                    setuseremail(e.target.value);
                }} type="email" placeholder="Enter your Email" value={useremail}/></div>
                <div><p>Contact Number </p><input  onChange={(e)=>{
                    setuserphone(e.target.value);
                }}type="tel" placeholder="Enter your Mobile Number" value={userphone} /></div>
                <div><p>Secure Account </p><input  onChange={(e)=>{
                    setuserpassword(e.target.value)
                }}type="password" placeholder="Enter account Password" value={userpassword} /></div>
                <div><p>Confirm Security </p><input onChange={(e)=>{
                    setuserconfirmpassword(e.target.value);
                }} type="password" placeholder="Re-enter account Password"value={userconfirmpassword} /></div>
                <div><p>Payment Method</p><input onChange={(e)=>{
                    setuserpaymentmethod(e.target.value)
                }} type="text" placeholder="Easypaisa/JazzCash/Bank" value={userpaymentmethod} /></div>
                <div><p>Account Number </p><input  onChange={(e)=>{
                    setuserpaymentnumber(e.target.value);
                }}type="text" placeholder="************" value={userpaymentnumber} /></div>
                <button>Submit</button>
                </form>
        </div>
        </>
    )
}
export default PageThree;