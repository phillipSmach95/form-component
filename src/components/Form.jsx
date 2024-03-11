import { useState } from "react";
import "./Form.css";

function Form(props) {
  const today = new Date();
  let params = new URL(window.location).searchParams;
  const initData = {
    date: params.get("date"),
    course: params.get("course"),
    level: params.get("level"),
    name: params.get("name"),
    lastname: params.get("lastname"),
    email: params.get("email"),
    street: params.get("street"),
    zipcode: params.get("zipcode"),
    city: params.get("city"),
  }
  // console.log('fhdsihfskjh:',initData);
  
  console.log(initData);

  window.localStorage.removeItem('registerData')
  const [course, setCourse] = useState("java");
  const [courseDate, setCourseDate] = useState(today);
  // const [beginner, setBeginner] = useState(false);
  // const [advaneced, setAdvanced] = useState(false);
  // const [pro, setPro] = useState(false);
  // const [level, setLevel] = useState("Anfänger");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [plz, setPlz] = useState(0);
  const [city, setCity] = useState("");
  const onOptionSelect = (course) => {
    setCourse(course);
  };

  // const onBeginnerToggle = () => {
  //   setBeginner(!beginner);
  //   setLevel('Anfänger')
  // };
  // const onAdvancedToggle = () => {
  //   setAdvanced(!advaneced);
  //   setLevel('Fortgeschritten')
  // };
  // const onProToggle = () => {
  //   setPro(!pro);
  //   setLevel('Professionell')
  // };

  const getCoursesContent = (courses) => {
    let content = [];
    for (let i = 0; i < courses.length; i++) {
      const item = courses[i];
      content.push(
        <option
          value={item}
          key={item}
          onSelect={(e) => onOptionSelect(e.target.value)}
        >
          {item}
        </option>
      );
    }
    return content;
  };

  return (
    <div>
      <form>
        <label htmlFor="course">Kurs</label>
        <select
          name="course"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          {getCoursesContent(props.courses)}
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
            name="level"
            id="level"
            value="Anfänger"
          />
          <label htmlFor="advanced">Fortgeschritten</label>
          <input
            type="radio"
            name="level"
            id="level"
            value="Fortgeschritten"
          />
          <label htmlFor="pro">Professionell</label>
          <input
            type="radio"
            name="level"
            id="level"
            value="Professionell"
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
      <table>
        <thead>
          <tr>
            <td>Datum</td>
            <td>Kurs</td>
            <td>Level</td>
            <td>Name</td>
            <td>Nachname</td>
            <td>E-Mail</td>
            <td>Strasse und Nummer</td>
            <td>PLZ</td>
            <td>Ort</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{initData.date}</td>
            <td>{initData.course}</td>
            <td>{initData.level}</td>
            <td>{initData.name}</td>
            <td>{initData.lastname}</td>
            <td>{initData.email}</td>
            <td>{initData.street}</td>
            <td>{initData.zipcode}</td>
            <td>{initData.city}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Form;
