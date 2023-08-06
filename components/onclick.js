import './onclick.css'
function OC() {

    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements= thingsArray.map(thing => <p key={thing}> {thing}</p>)
    
    function addItem() {
       alert(thingsArray);
    }
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    
    return (
        <div> 
            {/* arrow funcs */}
            <button onClick ={()=> {console.log('hy')}}> Add Item</button>
        </div>
    )
}
export default OC;