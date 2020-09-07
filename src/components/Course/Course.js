import React, { useState } from 'react';
import './Course.css'
import FakeData from '../../FakeData/FakeData';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';

const Course = () => {
  const [courses, setCourse] = useState(FakeData);

  const [cart, setCart] = useState([]);
  const handleAddEvent = (courses) => {

    const newCourses = [...cart, courses];
    setCart(newCourses);
    console.log(cart);
  };
  return (
    <div className='container'>
      <div  id="courses" className="courseList">
        {
          courses.map(course => <CourseList course={course} handleAddEvent={handleAddEvent} key={course.key}>  </CourseList>)
        }
      </div>
      <div  id="cart" className="review">
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
};

export default Course;