export const DEFAULT_SETS = 3;
export const DEFAULT_REPS = 6;
export const DEFAULT_DURATION = "1 minute";

export const WORKOUT_PLANS = {
  "Chest Workout Plan": [
    { name: "Bench Press", weight: "body" },
    { name: "Dumbbell Flyes", weight: "30 lbs", sets: 3, reps: 12 },
    { name: "Push-Ups", weight: "body" },
    { name: "Chest Dips", weight: "body" },
    { name: "Cable Crossovers", weight: "20 lbs", sets: 3, reps: 12 }
  ],
  "Deltoids Workout Plan": [
    { name: "Planche push-ups", weight: "body weight", reps: 18 },
    { name: "Elevated planche push-ups", weight: "body weight", reps: 14 },
    { name: "Pike push-ups", weight: "body weight", reps: 15},
    { name: "Dumbbell lateral raises", weight: "20 lbs", reps: 10},
    { name: "Rear delt swings (single)", weight: "17.5 lbs", reps: 11},
    { name: "Overhead dumbbell shoulder press", weight: "40 lbs", reps: 8},
    { name: "Arnold Press", weight: "40 lbs", reps: 7},
    { name: "Planche swings on paralettes", weight: "body", reps: 8},
    { name: "Handstand push-ups", weight: "body", reps: 12},
    { name: "Standard push-ups", weight: "body", reps: 42},
    { name: "Dips", weight: "body", reps: 18},
    { name: "Archer push-ups (each side)", weight: "body", reps: 10},
    { name: "One hand push-ups", weight: "body", reps: 9},
    { name: "L-sits", weight: "body", duration: "20 seconds"},
  ],
  "Back Workout Plan": [
    { name: "Pull-Ups", weight: "body weight", reps: 18 },
    { name: "Weighted Pull-Ups", weight: "5 lbs", reps: 9 },
    { name: "Wide Pull-Ups", weight: "body weight", reps: 11 },
    { name: "Bent over overhand dumbbell rows (traps)", weight: "35 lbs", reps: 9 },
    { name: "Bent over underhand dumbbell rows (lats)", weight: "35 lbs", reps: 12 },
    { name: "Flat Prone Y Raises (lower lats)", weight: "2 lbs", sets: 3, reps: 20 },
    { name: "Single Dumbbell Rows", weight: "40 lbs", sets: 3, reps: 10 },
    { name: "Close grip pull-up to belly", weight: "body", sets: 3, reps: 8 },
    { name: "Close grip pull-up to belly (weighted)", weight: "5 lbs", sets: 3, reps: 7 },
    { name: "Switch arm pull-ups", weight: "body", sets: 3, reps: 10 },
    { name: "Back extensions (lower back)", weight: "", sets: 0, reps: 0 },
    { name: "Upright dumbbell rows", weight: "", sets: 0, reps: 0 },
    { name: "Dumbbell chest supported rows", weight: "", sets: 0, reps: 0 },
    { name: "Incline Prone Y Raises (lower lats)", weight: "", sets: 0, reps: 0 },
    { name: "Deadlift", weight: "lbs", sets: 3, reps: 0 },
    { name: "Lat Pulldown", weight: "lbs", sets: 3, reps: 0 },
    { name: "Seated Cable Rows", weight: "lbs", sets: 3, reps: 0 },
  ],
  "Legs Workout Plan": [
    { name: "Squats", weight: "body weight" },
    { name: "Lunges", weight: "body weight" },
    { name: "Leg Press", weight: "120 lbs", sets: 3, reps: 15 },
    { name: "Calf Raises", weight: "body weight" },
    { name: "Hamstring Curls", weight: "35 lbs", sets: 3, reps: 12 }
  ],
  "Abs Workout Plan": [
    { name: "Crunches", weight: "body weight" },
    { name: "Plank", weight: "body weight", sets: 3, duration: "1 minute" },
    { name: "Leg Raises", weight: "body weight" },
    { name: "Mountain Climbers", weight: "body weight" },
    { name: "Russian Twists", weight: "10 lbs", sets: 3, reps: 12 }
  ],
  // ... add more workout plans
};

