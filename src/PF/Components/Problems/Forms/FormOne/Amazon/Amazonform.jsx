import React, { useState } from "react"
const Amazonform = () => {
  
    
    const [useremail, setuseremail]=useState('');
    const [userpassword, setuserpassword]=useState('');
    const formHandler =(e)=>{
           
        // // if(e.target.value == "tm3091798@gmail.com"){
        // //     setuseremail(e.target.value);
        // //   }
        // //   else if(e.target.value != "tm3091798@gmail.com"){
        // //      e.target.value="Incorrect Email/Password (Try Again)"
        // //      setuseremail(e.target.value);
             
        //  }
        //  if(e.target.value == "Talha123@@"){
        //     setuserpassword(e.target.value)
        //  }
        //  else if(e.target.value != "Talha123@@"){
        //     e.target.value="Incorrect Email/Password (Try Again)";
        //     setuserpassword(e.target.value);
        //  }
        console.log("Email Address: ",useremail);
        setuseremail('');
        console.log("Account Password: ",userpassword);
        setuserpassword('');
        console.log(`Status: 100% Accurate`,);

    }

    return (
        <>
        <footer>
            <h2>Logo</h2>
            <div id="items">
                <h4><a href="">Home</a></h4>
                <h4><a href="">My Car</a></h4>
                <h4><a href="">Notes</a></h4>
                <h4><a href="">Blog</a></h4>
                <h4><a href="">Join us</a></h4>
            <div id="btns">
                 <form onSubmit={(e) => {
                        e.preventDefault();
                        formHandler();
                    }}>
                <p>Email</p>
                   
                        <input onChange={(e)=>{
                            setuseremail(e.target.value);
                        
                       

                        }} type="email" placeholder="Enter your Email" value={useremail}/>
                <p>Password</p>
                        <input onChange={ (e)=>{
                          setuserpassword(e.target.value); 
                                           
                                 
                           }
                        } type="password" placeholder="Enter your Password" value={userpassword} />
                        <button>Login</button>
                    </form>


                </div>


            </div>
            </footer>
        </>
    )
}
export default Amazonform