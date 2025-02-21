import React, { useState, useEffect } from "react";

const Counter = () => {

  // useState for increment and decrement (updateState)
  let [count, setCount] = useState(0);
  let [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 621px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 621px)");
    const handleChange = (e) => setIsSmallScreen(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateIncrement = () => setCount(c => c + 1);
  const updateDecrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);


  // update state of an object
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });

  function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }))
  }

  function handleModelChange(event) {
    setCar(c => ({ ...c, model: event.target.value }))
  }

  // car update 2
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    };
    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("")
  }

  function handleCarYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleCarMakeChange(event) {
    setCarMake(event.target.value)
  }
  function handleCarModelChange(event) {
    setCarModel(event.target.value)
  }
  function handleRemovedCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
  }



  return (
    <div className="counter">
      <div className="counter-container">
        <p>{count}</p>
        <button onClick={updateDecrement}>{isSmallScreen ? "➖" : "Decrement"}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={updateIncrement}>{isSmallScreen ? "➕" : "Increment"}</button>
      </div>

      <div className="car-object">
        <div className="car-object-container">
          <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
          <div className="input-wrapper">
            <input value={car.year} type="number" onChange={handleYearChange} />
            <input value={car.make} type="text" onChange={handleMakeChange} />
            <input value={car.model} type="text" onChange={handleModelChange} />
          </div>
        </div>

        {/* car object 2 */}
        <div className="car-object-container">
          <ol>{cars.map((car, index) => <li key={index} onClick={() => handleRemovedCar(index)}>{car.year} {car.make} {car.model}</li>)}
          </ol>
          <div className="input-wrapper">
          <input type="number" value={carYear} onChange={handleCarYearChange} />
          <input type="text" value={carMake} placeholder="Enter your car make" onChange={handleCarMakeChange} />
          <input type="text" value={carModel} placeholder="Enter your car model" onChange={handleCarModelChange} /> 
          </div>
          <br />
          <button className="button" onClick={handleAddCar}>Add Car</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;