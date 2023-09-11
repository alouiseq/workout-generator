import React, { useState } from 'react';
import {DEFAULT_SETS, DEFAULT_REPS, DEFAULT_DURATION, WORKOUT_PLANS} from './workoutPlans'

const App = () => {
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [includeAbs, setIncludeAbs] = useState(false);

  const handleChange = (e) => {
    setSelectedWorkout(e.target.value);
  };

  const toggleAbs = () => {
    setIncludeAbs(!includeAbs);
  };

  return (
    <div>
      <h1>Workout Plan Selector</h1>
      <label>Select a workout plan: </label>
      <select onChange={handleChange}>
        <option value="">--Select--</option>
        {Object.keys(WORKOUT_PLANS).map((plan, index) => (
          <option key={index} value={plan}>
            {plan}
          </option>
        ))}
      </select>

      {selectedWorkout && (
        <div>
          <h2>{selectedWorkout}</h2>
          {WORKOUT_PLANS[selectedWorkout].map((exercise, index) => (
            <div key={index}>
              {exercise.name}: {exercise.sets || DEFAULT_SETS} sets x{" "}
              {exercise.reps || exercise.duration || DEFAULT_REPS} (
              {exercise.weight})
            </div>
          ))}
          <div>
            <input
              type="checkbox"
              id="addAbs"
              name="addAbs"
              value={includeAbs}
              onChange={toggleAbs}
            />
            <label htmlFor="addAbs"> Include Abs Workout</label>
          </div>
          {includeAbs && (
            <div>
              <h3>Additional Abs Workout:</h3>
              {WORKOUT_PLANS["Abs Workout Plan"].map((exercise, index) => (
                <div key={index}>
                  {exercise.name}: {exercise.sets || DEFAULT_SETS} sets x{" "}
                  {exercise.reps || exercise.duration || DEFAULT_REPS} (
                  {exercise.weight})
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

