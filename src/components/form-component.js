import { useState } from "react"

export default function FormComponent(){
    const [ selectedItemOne, setSelectedItemOne ] = useState(1);
    const [ selectedItemTwo, setSelectedItemTwo ] = useState(2);
    const [ selectedItemThree, setSelectedItemOneThree ] = useState(3);
    const [ selectedItemFour, setSelectedItemOneFour ] = useState(4);
    const [ selectedItemFive, setSelectedItemOneFive ] = useState(5);

    const changeHandler = (e) => {
        console.log(e.target.value);
        setSelectedItemOne(e.target.value);
        setSelectedItemTwo(e.target.value);
        setSelectedItemOneThree(e.target.value);
        setSelectedItemOneFour(e.target.value);
        setSelectedItemOneFive(e.target.value);
    }


    return (
        <form>
            <input type="button" placeholder="1" value={selectedItemOne} onChange={changeHandler}/>
            <input type="button" placeholder="2" value={selectedItemTwo} onChange={changeHandler}/>
            <input type="button" placeholder="3" value={selectedItemThree} onChange={changeHandler}/>
            <input type="button" placeholder="4" value={selectedItemFour} onChange={changeHandler}/>
            <input type="button" placeholder="5" value={selectedItemFive} onChange={changeHandler}/>

            <button>Submit</button>
        </form>
    )
}