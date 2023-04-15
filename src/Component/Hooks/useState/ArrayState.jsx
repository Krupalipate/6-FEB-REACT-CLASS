import React, { useState } from 'react'

function ArrayState() {
    // aavo koi data che array form ma che ne UI na form ma batavu che to state lai lo
    const [productList, setProductList] = useState([
        "Toy",
        "Car",
        "Tablet",
        "Mobile"
    ])
    
  return (
      <div className="container">
             <div className="card mb-5">
        <div className="card-header bg-dark , text-white">
          <h2>Array Example</h2>
        </div>
        <div className="card-body">
                  {/* aa 4 element ne body ni under batava na che to jetla pan element che tene etret (loop ma gumava pade ) */}
                  {/* to j aapde badh element ne exeises kari sakiye */}
                  {/* koi pan array ne list karvu hoi to map( ) no used karvano hoi react ni under */}

                  {
                      
                      
                          //    Warning: Each child in a list should have a unique "key" prop.

                        //   jsx che tema boj badha etribute aave che tema no 1 atribute che te key = {} hoi 
                        //   and key = { index } value diffrent hovi joiye . to aapdi index hamesa diffrent hase etle  
                        
                        // Array no data UI ni under batavi hoi to map( ) no used thai .
                      productList.map((singleProduct, index, array) => {
                          //   console.log('item', item)   console ma dekhase
                        return <h2 key={index}>{singleProduct}</h2>
                         
                      })  
                  }
              </div>
            
            
       
          </div>

      </div>
  )
}

export default ArrayState