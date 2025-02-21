import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import List from "./List";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import FormElement from "./FormElement";
import ColorPicker from "./ColorPicker";
import ToDoList from "./ToDoList";
import DigitalClock from "./DigitalClock";
import StopWatch from "./StopWatch";


function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 65 },
  { id: 4, name: "coconut", calories: 105 },
  { id: 5, name: "pineaple", calories: 75 }];

  const vegetables = [{ id: 4, name: "cherry", calories: 110 },
  { id: 5, name: "potatoes", calories: 60 },
  { id: 6, name: "corn", calories: 90 },
  { id: 7, name: "millet", calories: 55 },
  { id: 8, name: "pineaple", calories: 80 }];

  const meals = [{ id: 10, name: "yam", calories: 110 },
  { id: 11, name: "rice", calories: 60 },
  { id: 12, name: "beans", calories: 90 },
  { id: 13, name: "chicken", calories: 55 },
  { id: 14, name: "beaf", calories: 80 }];

  return (
    <div className="App">
      <Header />
      <div className="body-content">
        <Card />
        <Button />
        <Food />

        <div className="student-wrapper">
          <Student name="Joseph" age={30} isStudent={true} />
          <Student name="Patrick" age={40} isStudent={false} />
          <Student />
        </div>

        <div className="items-container">
          <List items={fruits} category="Fruits" />
          {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
          {meals.length > 0 && <List items={meals} category="Meals" />}
        </div>
        <div className="component-color-picker-wrapper">
          <MyComponent />
          <ColorPicker />
        </div>
        <Counter />
        <FormElement className="form-container" />
        <ToDoList />
        <div className="clock-watch-wrapper">
          <DigitalClock />
          <StopWatch />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
