import React, {useState} from 'react';

const ColorPicker = () => {

    const [color, setColor] = useState("#12cae2");
    
    function handleColorChange(event) {
        setColor(event.target.value);
    }


  return (
    <div className='color-picker-container'>
        <h2>Color Picker</h2>
        <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />

    </div>
  )
}

export default ColorPicker