function Footer() {
  return (
    <div className="container-fluid  bg-dark" style={{ height: "" }}>
      <div className="container">
        <div className="row  py-5" >
          <div className="col-md-4 ">
            <h4 style={{padding:'10px 0',fontSize:'19px', color:'white'}}>Bali</h4>
            <p style={{fontSize:'14px', color:'lightgrey',paddingBottom:'2px'}}>
              We are dedicated to the safety of our guests and employees and
              have updated our safety measures. We believe in Simple, Creative,
              Modern and Flexible Design 
            </p>
                      
            <h5 style={{ fontSize: '19px',color:'white', }}>Follow us</h5>
                      
            <a href="facebook"><i class="fa-brands fa-facebook" style={{ width: '16px', color: 'lightgrey'}}></i></a>      
            <a href="instagram"><i class="fa-brands fa-instagram" style={{padding:'0 2px',margin:'0 4px' ,color:'lightgrey'}}></i></a>
                      
            <a><i class="fa-brands fa-google" style={{padding:'0 2px',margin:'0 1px',color:'lightgrey'}}></i></a>
                      
            <a><i class="fa-brands fa-linkedin-in" style={{padding:'0 2px',margin:'0 1px',color:'lightgrey'}}></i></a>
         
          </div>
                  
        <div className="col-md-4">
        <h4 style={{ color: 'white', padding: '10px 0', fontSize: '19px', }}>Contect us</h4> 
        <p style={{ color: 'lightgrey', fontSize: '14px', paddingBottom: '2px' }}>Address : Burger Bun, 208 Trainer Avenue street, Corner Market, NY - 62617.</p>
        <p style={{ color: 'lightgrey', fontSize: '14px',  }}>Phone : +12 534894364</p>
        <p style={{ color: 'lightgrey', fontSize: '14px',  }}>Email : info@example.com</p>              


        </div>
                  
        <div className="col-md-4  .bg-success.bg-gradient py-2" >
                      <h4 style={{ fontSize: '20px', color: 'white' ,}}>Subscribe Newsletter</h4>
                      <p style={{ color: 'lightgrey', fontSize: '14px' ,padding:'5px' }}>Enter your email and receive the latest news, updates and special offers from</p>
                      
                      <input className="form-control" placeholder="Emali" />
                      {/* <input className="form-control" placeholder="Emali" /> */}
                      
                      <button className="mt-3 bg-warning" style={{border:'none',width:'100%'}}>Subscribe</button>
        </div>       

        </div>
      </div>
    </div>
  );
}
export default Footer;
