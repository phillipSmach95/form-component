
import './Courses.css';
import Form from './components/Form';

function Courses() {
  const courses = ["Java", "Python", "JavaScript"]
  return (
    <div className="App">
      <Form courses={courses}/>
    </div>
  );
}

export default Courses;
