import { useState } from 'react';
const CheckEvent = () => {

    const [name, setName] = useState("Hung");
    const [nameInput, setNameInput] = useState("");


    const handleClickButton = (event) => {
        setName(nameInput);
    }

    const handleOnChangeName = (event) => {
        // console.log('check change: ', nameInput);
        setNameInput(event.target.value);
    }
    return (
        <div>
            <p>
                {name} hello world
            </p>
            <input type='text' value={nameInput} onChange={(event) => handleOnChangeName(event)} />
            <button type='button' onClick={(event) => handleClickButton(event)}>Click me  </button>
        </div>
    )
}

export default CheckEvent;