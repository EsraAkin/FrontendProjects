//import './App.css';
import { useState } from 'react';
import CourseCard from './CourseCard';


import Angular from './assets/images/angular.jpg' ;
import Bootstrap from './assets/images/bootstrap5.png' ;
import Ccsharp from './assets/images/ccsharp.png' ;
import KompleWeb from './assets/images/kompleweb.jpg' ;

// Kurs isimlerini görselle eşleştiriyoruz
const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};





function getRandomCourse() {
  const courseArray = Object.keys(courseMap);
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Kurs Ekle
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
        {/* 🔥 İşte buraya yazılacak */}
        {courses.map((name, index) => (
          <CourseCard key={index} name={name} image={courseMap[name]} />
        ))}
      </div>
    </div>
  );
}
export default App;