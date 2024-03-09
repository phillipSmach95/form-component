import { useState } from "react";
import "./Form.css";

function Form() {
  const today = new Date();
  const [course, setCourse] = useState("java");
  const [courseDate, setCourseDate] = useState(today);
  const [beginner, setBeginner] = useState(false);
  const [advaneced, setAdvanced] = useState(false);
  const [pro, setPro] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [plz, setPlz] = useState(0);
  const [city, setCity] = useState("");
  const onOptionSelect = (course) => {
    setCourse(course);
  };
  const onBeginnerToggle = () => {
    setBeginner(!beginner);
    setAdvanced(false);
    setPro(false);
  };
  const onAdvancedToggle = () => {
    setAdvanced(!advaneced);
    setBeginner(false);
    setPro(false);
  };
  const onProToggle = () => {
    setPro(!pro);
    setBeginner(false);
    setAdvanced(false);
  };

  function sendForm(formData) {
    const data = formData.get("name");
    console.log(data);
  }

  return (
      <form action={sendForm}>
        <label htmlFor="course">Kurs</label>
        <select
          name="course"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="Java" onSelect={(e) => onOptionSelect(e.target.value)}>
            Java
          </option>
          <option
            value="Python"
            onSelect={(e) => onOptionSelect(e.target.value)}
          >
            Python
          </option>
          <option
            value="JavaScript"
            onSelect={(e) => onOptionSelect(e.target.value)}
          >
            JavaScript
          </option>
        </select>
        <p>{course}</p>
        <label htmlFor="date">Datum</label>
        <input
          type="date"
          name="date"
          id="date"
          value={courseDate}
          onChange={(e) => setCourseDate(e.target.value)}
        />
        <div className="radio-form-style">
          <label htmlFor="beginner">Anfänger</label>
          <input
            type="radio"
            name="beginner"
            id="beginner"
            checked={beginner}
            onChange={() => onBeginnerToggle()}
          />
          <label htmlFor="advanced">Fortgeschritten</label>
          <input
            type="radio"
            name="advanced"
            id="advanced"
            checked={advaneced}
            onChange={() => onAdvancedToggle()}
          />
          <label htmlFor="pro">Professionell</label>
          <input
            type="radio"
            name="pro"
            id="pro"
            checked={pro}
            onChange={() => onProToggle()}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{name}</p>
          <label htmlFor="lastname">Nachname:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="street">Strasse und Nummer:</label>
          <input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="zipcode">PLZ:</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={plz}
            onChange={(e) => setPlz(e.target.value)}
          />
          <label htmlFor="city">Stadt:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Absenden</button>
      </form>
  );
}
export default Form;
