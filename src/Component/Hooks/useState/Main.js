import { useState } from "react";

function Main() {
    
  // hooks =>use
  // useState ne uper thi import pan karvanu hoi  te pan { } brecet ma
  // { }  aa brecet etla mate leva ma aave che beacuse useState 'react' librery ma thi levama aave che .

  // const [userName, setuserName] = useState()

  // string
  const [userName, setuserName] = useState("krupali");
  const [friendName, setFriendName] = useState("sonal");

  // number
  const [Number, setNumber] = useState(0);
  const [square, setSquare] = useState(2);

  // Boolean
    const [isshowing, setshowing] = useState(false);
    
  // Object
    // object ni under key & value pass karvi pade
    const [personData, setpersondata] = useState({
        Firstname: 'krupali',
        Lastname: 'patel',  
        Brithday: 1995,
        Sports: 'criket'
        // object ni under key ne acess karvi hoi to java na wold ma javu pade 
        // Ex:1   <h2>My name is:{personData.Fristname}</h2>
   })

  // increment
  function increment() {
    setNumber(Number + 1);
  }

  // decrement
  function decrement() {
    if (Number > 0) {
      setNumber(Number - 1);
    }
    // - ni haji niche jem k -1,-2,-3,-4 am jay to  te ni javu joiye etle if condition mukvama aavi
    }
    
    function ShowImag (){
        setshowing(true)   
    }
    function changeName() {
        setpersondata({
            ...personData,
            Firstname: 'parth',
        //     Lastname:'shigh',
        //     Brithday: 1998,
        //    Sports:'chappo'
            
        })
    }

        
  // 1st time
  // Number = 0
  // Number + 1 => 0 + 1 => 1

  // Number = 1
  // Number + 1 => 1 + 1 => 2

  // Number = 2
  // Number + 2 => 2 + 1 => 3

    
  return (
    <div className="container">
      <h1 className="text-center py-5">use State</h1>

      <div className="card mb-5">
        <div className="card-header bg-dark , text-white">
          <h2>Object Example</h2>
        </div>
        <div className="card-body">
                  <h4>My name is:{personData.Firstname} </h4>
                  <h4>My Last name:{personData.Lastname}  </h4>
                  <h4>My Brithday:{personData.Brithday}  </h4>
                  <h4>My Sports:{personData.Sports }  </h4>
                  {/* <h4>VALUE CHANGE KARVI HOI TO BUTTON LEVU</h4> */}
                  {/* onclick vala nu function banavu */}
              
              </div>
            
              <div> <button className="btn btn-danger mb-3 ms-3" onClick={changeName}>Change name</button>   </div>

       
          </div>

{/* EX:1 */}
          
      {/* STRING TYPE */}
      <div className="card">
        <div className="card-header">
          <h2>String Example</h2>
        </div>

        <div className="card-body">
          <h3>My name is : {userName}</h3>
        </div>

        <div className="card-footer">
          {/* 1.  onClick par callback function levu pade 
                    2.  te function setuserName ni value change karvi hoi to (" ") name aapi devu
                    3.  to variable vali value change thai jay */}

          <button
            onClick={() => setuserName("parth")}
            className="btn btn-primary"
          >
            change the Name
          </button>
        </div>
      </div>

{/* EX:2 */}
          
        {/* string example */}
        <div className="card mt-5">
        <div className="card-header">
          <h2>String Example</h2>
        </div>
        <div className="card-body">
          <h3>My name is : {friendName}</h3>
        </div>

        <div className="card-footer">
          <button
            onClick={() => setFriendName("parth")}
            className="btn btn-primary"
          >change the best freirnd Name</button>
        </div>
          </div>
         

{/* EX:3  */}
          
      {/* Boolean type */}
      <div className="card mt-5">
        <div className="card-header">
          <h2>Boolean Example</h2>
        </div>

        <div className="card-footer">

      {/* but aama onClick ma je variable che tema ( ) nathi lidhu jo lete to te infinait loop ma jatu rete */}
        <button
            className="btn btn-primary  ms-3"
            onClick={ShowImag}
          >
            show Img
          </button>
          {/* show button */}
          {/* <button
            className="btn btn-primary  ms-3"
            onClick={() => setshowing(true)}
          >
            show Img
          </button> */}

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
          {isshowing ? (
            
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAFykWxMeGLRJUY6gDkflLVlkoZsa8SjiKg&usqp=CAU"
              className="'w-25 mt-4"
            />
          ) : null}
        </div>
      </div>

{/* EX:4*/}
          
      {/* NUMBER TYPE */}
      <div className="card mt-3" style={{ marginBottom: "100px" }}>
        <div className="card-header">
          <h3>Number Example</h3>
        </div>

        <div className="card-body">
          <h3> Number : {Number}</h3>
        </div>

        <div className="card-footer ">
          {/* aa rite number add karavi sakai */}

                  {/* <button className="btn btn-primary " onClick={() => setNumber(Number + 1)}>+</button> */}
                  {/* call back function ni uder ( ). aave increment () karine  to pehla thi function run thai jatu hatu */}
          <button className="btn btn-primary " onClick={() => increment()}>
            +
          </button>

          {/* aa rite pan - kari sakay */}

          {/* <button className="btn btn-danger " onClick={() => setNumber(Number - 1)}>-</button> */}
          <button className="btn btn-danger " onClick={() => decrement()}>
            -
          </button>
        </div>
      </div>

{/* EX:5 */}
          
            {/* Squre */}
      <div className="card ">
        <div className="card-header">
          <h2>NUMBER of Squre Example</h2>
        </div>

        <div className="card-body">
          <h3> squaer : {square}</h3>
        </div>

        <div className="card-footer">
          <button
            onClick={() => setSquare(square * 2)}
            className="btn btn-primary"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main;
