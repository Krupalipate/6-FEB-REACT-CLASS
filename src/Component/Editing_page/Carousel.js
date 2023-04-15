import './Carousel.css'
function Carousel() {

    // internal css

    let internalCssObject = {
        color: 'blue',
        background:'pink'
    }

    return (
        <>
            {/* internal cass */}
            <h1  style={internalCssObject}>Additing css to the JSX:</h1>
            {/* inline css  */}
            <h2 style={{ color: 'red', background: 'black' }}>let's Apply Css</h2>
            {/* External css */}
            <h2 className='externalCssClass'>I am External Css</h2>
            <div className='ominipic'></div>
        </>
    )
}
export default Carousel