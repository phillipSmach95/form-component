import { useState } from "react";
import "./Form.css";

function Form() {
    const [course, setCourse]=useState("java");
    const [courseDate, setCourseDate]=useState(new Date());
    const [beginner, setBeginner]=useState("");
    const [advaneced, setAdvanced]=useState("");
    const [pro, setPro]=useState("");
    const [level, setLevel]=useState("beginner");
    const [name, setName]=useState('');
    const [lastname, setLastname]=useState("");
    const [email, setEmail]=useState('');
    const [street, setStreet]=useState("");
    const [plz,setPlz]=useState(0);
    const [city, setCity]=useState("");

  return (
    <div>
      <form action="" method="post">
        <label htmlFor="course">Kurs</label>
        <select name="course" id="course">
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javaScript">JavaScript</option>
        </select>
        <label htmlFor="date">Datum</label>
        <input type="date" name="date" id="date" />
        <div className="radio-form-style">
          <label htmlFor="beginner">Anfänger</label>
          <input type="radio" name="beginner" id="beginner" />
          <label htmlFor="advanced">Fortgeschritten</label>
          <input type="radio" name="advanced" id="advanced" />
          <label htmlFor="pro">Professionell</label>
          <input type="radio" name="pro" id="pro" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="lastname">Nachname:</label>
          <input type="text" name="lastname" id="lastname" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="street">Strasse und Nummer:</label>
          <input type="text" name="street" id="street" />
          <label htmlFor="zipcode">PLZ:</label>
          <input type="text" name="zipcode" id="zipcode" />
          <label htmlFor="city">Stadt:</label>
          <input type="text" name="city" id="city" />
        </div>
      </form>
    </div>
  );
}
export default Form;
