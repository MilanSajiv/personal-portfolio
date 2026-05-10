// Fitness data — updated after each daily check-in
// Body fat uses US Navy method: BF% = 495/(1.0324 - 0.19077*log10(waist-neck) + 0.15456*log10(height)) - 450

const FITNESS_DATA = {

  // Fixed — update once
  profile: {
    height_cm: 166,
    neck_cm: 42
  },

  // Weekly body measurements — add every week (e.g. Sunday morning)
  measurements: [
    // {
    //   date: "2026-05-12",
    //   weight_kg: 0,
    //   waist_cm: 0,
    //   hips_cm: 0,
    //   chest_cm: 0,
    //   left_arm_cm: 0,
    //   right_arm_cm: 0,
    //   left_thigh_cm: 0,
    //   right_thigh_cm: 0
    // }
  ],

  // Daily Whoop + activity stats
  whoop: [
    {
      date: "2026-05-09",
      // Recovery
      recovery: 52,
      hrv: 60,
      resting_hr: 78,
      respiratory_rate: 18.3,
      skin_temp: 0.3,
      spo2: 94,
      whoop_age: 28.8,
      vo2_max: 47,
      // Sleep
      sleep_score: 86,
      sleep_hours: 7.45,
      sleep_efficiency: 97,
      light_sleep_hrs: 3.62,
      rem_sleep_hrs: 2.17,
      deep_sleep_hrs: 1.67,
      time_in_bed_hrs: 7.65,
      // Activity
      strain: 18.5,
      calories_burned: 3972,
      steps: 14503,
      active_minutes: 0
    },
    // {
    //   date: "2026-05-09",
    //   // Recovery
    //   recovery: 0,
    //   hrv: 0,
    //   resting_hr: 0,
    //   respiratory_rate: 0,
    //   skin_temp: 0,       // deviation from baseline (°C)
    //   spo2: 0,            // blood oxygen %
    //   whoop_age: 0,       // Whoop health age
    //   vo2_max: 0,         // estimated VO2 max
    //   // Sleep
    //   sleep_score: 0,
    //   sleep_hours: 0,
    //   sleep_efficiency: 0,
    //   light_sleep_hrs: 0,
    //   rem_sleep_hrs: 0,
    //   deep_sleep_hrs: 0,
    //   time_in_bed_hrs: 0,
    //   // Activity
    //   strain: 0,
    //   calories_burned: 0,
    //   steps: 0,
    //   active_minutes: 0
    // }
  ],

  // Gym sessions — training days only (Mon/Thu/Fri)
  gym: [
    // {
    //   date: "2026-05-09",
    //   day: "A",           // A = Lower Body, B = Upper Push, C = Upper Pull
    //   feel: "good",       // good / average / tough
    //   exercises: {
    //     squat:            { weight: 0, reps: 0, sets: 0 },
    //     leg_press:        { weight: 0, reps: 0, sets: 0 },
    //     rdl:              { weight: 0, reps: 0, sets: 0 },
    //     leg_curl:         { weight: 0, reps: 0, sets: 0 },
    //     leg_extension:    { weight: 0, reps: 0, sets: 0 },
    //     calf_raise:       { weight: 0, reps: 0, sets: 0 },
    //     bench_press:      { weight: 0, reps: 0, sets: 0 },
    //     ohp:              { weight: 0, reps: 0, sets: 0 },
    //     lateral_raise:    { weight: 0, reps: 0, sets: 0 },
    //     tricep_pushdown:  { weight: 0, reps: 0, sets: 0 },
    //     lat_pulldown:     { weight: 0, reps: 0, sets: 0 },
    //     row:              { weight: 0, reps: 0, sets: 0 },
    //     face_pull:        { weight: 0, reps: 0, sets: 0 },
    //     curl:             { weight: 0, reps: 0, sets: 0 }
    //   }
    // }
  ],

  // Daily nutrition
  nutrition: [
    // {
    //   date: "2026-05-09",
    //   calories: 0,
    //   protein_g: 0,
    //   carbs_g: 0,
    //   fat_g: 0,
    //   water_litres: 0
    // }
  ]
};

// Muscle group → exercise mapping
const MUSCLE_MAP = {
  quads:      { exercises: ["squat","leg_press","leg_extension"], label: "Quads",       side: "front" },
  hamstrings: { exercises: ["rdl","leg_curl"],                    label: "Hamstrings",  side: "back"  },
  glutes:     { exercises: ["squat","rdl"],                       label: "Glutes",      side: "back"  },
  calves:     { exercises: ["calf_raise"],                        label: "Calves",      side: "back"  },
  chest:      { exercises: ["bench_press"],                       label: "Chest",       side: "front" },
  shoulders:  { exercises: ["ohp","lateral_raise"],               label: "Shoulders",   side: "front" },
  triceps:    { exercises: ["tricep_pushdown"],                   label: "Triceps",     side: "back"  },
  lats:       { exercises: ["lat_pulldown","row"],                label: "Lats / Back", side: "back"  },
  rear_delts: { exercises: ["face_pull"],                         label: "Rear Delts",  side: "back"  },
  biceps:     { exercises: ["curl"],                              label: "Biceps",      side: "front" },
};
