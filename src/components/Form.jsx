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
          <option value={()=>setCourse('java')}>Java</option>
          <option value={()=>setCourse('Python')}>Python</option>
          <option value={()=>setCourse('JavaScript')}>JavaScript</option>
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
          <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
          <p>{name}</p>
          <label htmlFor="lastname">Nachname:</label>
          <input type="text" name="lastname" id="lastname" onChange={(e)=> setLastname(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="street">Strasse und Nummer:</label>
          <input type="text" name="street" id="street" onChange={(e)=> setStreet(e.target.value)}/>
          <label htmlFor="zipcode">PLZ:</label>
          <input type="text" name="zipcode" id="zipcode" onChange={(e)=> setPlz(e.target.value)}/>
          <label htmlFor="city">Stadt:</label>
          <input type="text" name="city" id="city" onChange={(e)=> setCity(e.target.value)} />
        </div>
      </form>
    </div>
  );
}
export default Form;
