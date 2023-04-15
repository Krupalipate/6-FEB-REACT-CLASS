// koi pan function no used-kari sakay . to Arrey function no used kari sakay

const Header = () => {

// to enter the js world from JSX you need to use curly brecket's { } 
    // let data = "i love my self"
    return (
        <>
            

               
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
             <a className="navbar-brand">Navbar</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
        </div>
    </nav>
            
             {/* <h2 >just add in js variable in JSX : { data }</h2>
                <h1>header { data}</h1> */}
       </>
    )
}

export default Header