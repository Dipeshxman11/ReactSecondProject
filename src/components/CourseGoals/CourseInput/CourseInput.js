import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value.trim();
    setEnteredValue(inputValue);

    if (inputValue.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : 'black',
            background: !isValid ? 'lightcoral' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" style={{ backgroundColor: isValid ? 'red' : 'lightcoral' }}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
