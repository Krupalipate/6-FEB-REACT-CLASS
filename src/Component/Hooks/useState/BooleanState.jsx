import React, { useState } from 'react'

function BooleanState() {
    const [isshowing, setshowing] = useState(false);
    const [isLogin, setLogin] = useState(false)
    
function auth() {
    setLogin(! isLogin)    
}

  return (
      <>
          <div className="card mt-5 w-50 m-auto">
    <div className="card-header">
      <h2> Login/Logout Button </h2>
    </div>

    <div className="card-Body">
   
    
    {/* <button className="btn btn-primary  ms-3 mt-3 my-5" onClick={() => setLogin(true)} >
    {
         isLogin ? 'logout ':'login'     
    }

    </button> */}

    {/* ` ` ni under variable no used karvo hoi to ${ } no used thai . */}
                {/* dynamic css kahevai   */}
    <button className={`btn ms-3 mt-3 my-5 ${isLogin? 'btn-danger':'btn-primary'} `} onClick={auth} >
    {
         isLogin ? 'logout ':'login'     
    }

    </button>              



        </div>
  </div>




        
<div className="card mt-5 w-50 m-auto">
    <div className="card-header">
      <h2>Boolean Example</h2>
    </div>

    <div className="card-footer">
   {/* <button
        className="btn btn-primary  ms-3"
        onClick={ShowImag}
      >show Img</button>
     */}
    {/* show button */}
    <button
        className="btn btn-primary  ms-3"
        onClick={() => setshowing(true)}
      >show Img </button>

      {/* remove button    */}
      <button
        className="btn btn-warning  ms-3"
        onClick={() => setshowing(false)}
      >remove Img</button>

      {/* Toogal button  */}
      <button
        className="btn btn-dark  ms-3"
        onClick={() => setshowing(! isshowing)}
      > Hide/show  Img</button>

              
    {/* javascript na wold ma java  mate { }  no used  karyo che */}
      
    {
      isshowing?<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAFykWxMeGLRJUY6gDkflLVlkoZsa8SjiKg&usqp=CAU"
          className="'w-25 mt-4"
        />:null        
      }  
        
     
    </div>
  </div>
</>
  )
}

export default BooleanState