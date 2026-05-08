// Fitness data — updated after each check-in
// Body fat uses US Navy method: BF% = 495/(1.0324 - 0.19077*log10(waist-neck) + 0.15456*log10(height)) - 450

const FITNESS_DATA = {

  // Fixed measurements (update once)
  profile: {
    height_cm: 178, // update with your height
    neck_cm: 38     // update with your neck measurement
  },

  // Weekly body measurements — add a new entry each week
  measurements: [
    // { date: "2026-05-12", weight_kg: 0, waist_cm: 0 }
  ],

  // Daily Whoop stats — add after each check-in
  whoop: [
    // { date: "2026-05-09", recovery: 0, hrv: 0, sleep_score: 0, sleep_hours: 0, strain: 0 }
  ],

  // Gym sessions — add after each training day
  // Exercises: use consistent names for progression tracking
  gym: [
    // {
    //   date: "2026-05-09",
    //   day: "A", // A = Lower, B = Upper Push, C = Upper Pull
    //   feel: "good", // good / average / tough
    //   exercises: {
    //     squat:           { weight: 0, reps: 0, sets: 0 },
    //     leg_press:       { weight: 0, reps: 0, sets: 0 },
    //     rdl:             { weight: 0, reps: 0, sets: 0 },
    //     leg_curl:        { weight: 0, reps: 0, sets: 0 },
    //     leg_extension:   { weight: 0, reps: 0, sets: 0 },
    //     calf_raise:      { weight: 0, reps: 0, sets: 0 },
    //     bench_press:     { weight: 0, reps: 0, sets: 0 },
    //     ohp:             { weight: 0, reps: 0, sets: 0 },
    //     lateral_raise:   { weight: 0, reps: 0, sets: 0 },
    //     tricep_pushdown: { weight: 0, reps: 0, sets: 0 },
    //     lat_pulldown:    { weight: 0, reps: 0, sets: 0 },
    //     row:             { weight: 0, reps: 0, sets: 0 },
    //     face_pull:       { weight: 0, reps: 0, sets: 0 },
    //     curl:            { weight: 0, reps: 0, sets: 0 }
    //   }
    // }
  ]
};

// Muscle group → exercise mapping
const MUSCLE_MAP = {
  quads:       { exercises: ["squat", "leg_press", "leg_extension"], label: "Quads",        side: "front" },
  hamstrings:  { exercises: ["rdl", "leg_curl"],                     label: "Hamstrings",   side: "back"  },
  glutes:      { exercises: ["squat", "rdl"],                        label: "Glutes",       side: "back"  },
  calves:      { exercises: ["calf_raise"],                          label: "Calves",       side: "back"  },
  chest:       { exercises: ["bench_press"],                         label: "Chest",        side: "front" },
  shoulders:   { exercises: ["ohp", "lateral_raise"],                label: "Shoulders",    side: "front" },
  triceps:     { exercises: ["tricep_pushdown"],                     label: "Triceps",      side: "back"  },
  lats:        { exercises: ["lat_pulldown", "row"],                 label: "Lats / Back",  side: "back"  },
  rear_delts:  { exercises: ["face_pull"],                           label: "Rear Delts",   side: "back"  },
  biceps:      { exercises: ["curl"],                                label: "Biceps",       side: "front" },
};
