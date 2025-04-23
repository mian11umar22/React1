export default function message(){
    function button(){
        console.log('button click howa')
    }
    return <div>
        <button onClick={button} style={{color:'white', backgroundColor:'pink '}}>click me</button>
    </div>
}