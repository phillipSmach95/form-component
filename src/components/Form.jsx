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
  };
  // console.log('fhdsihfskjh:',initData);

  console.log(initData);

  window.localStorage.removeItem("registerData");
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
    <div className="bg-style">
      <form className="form-bg-style">
        <div className="form-style">
        <div className="form-grid-style">
            <div className="form-grid-style">
              <label className="form-lable-style" htmlFor="course">
                Kurs
                <select
                  name="course"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  {getCoursesContent(props.courses)}
                </select>
              </label>
              <label className="form-lable-style" htmlFor="date">
                Datum
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={courseDate}
                  onChange={(e) => setCourseDate(e.target.value)}
                />
              </label>
            </div>
            <div className="radio-form-style">
              <label className="form-lable-style" htmlFor="beginner">
                Anfänger
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="Anfänger"
                  defaultChecked
                />
              </label>
              <label className="form-lable-style" htmlFor="advanced">
                Fortgeschritten
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="Fortgeschritten"
                />
              </label>
              <label className="form-lable-style" htmlFor="pro">
                Professionell
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="Professionell"
                />
              </label>
            </div>
          </div>
          <div>
            <div className="form-grid-style">
              <label className="form-lable-style" htmlFor="name">
                Name:
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="form-lable-style" htmlFor="lastname">
                Nachname:
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              <label className="form-lable-style" htmlFor="email">
                Email:
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            
            
              <label className="form-lable-style" htmlFor="street">
                Strasse und Nummer:
                <input
                  type="text"
                  name="street"
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </label>
              <label className="form-lable-style" htmlFor="zipcode">
                PLZ:
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                />
              </label>
              <label className="form-lable-style" htmlFor="city">
                Stadt:
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="form-button-pos">
          <button type="submit" className="form-button-style">
            Absenden
          </button>
        </div>
      </form>
      <table className="table-style">
        <thead >
          <tr className="table-head-style">
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
        <tbody >
          <tr className="table-body-style">
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
