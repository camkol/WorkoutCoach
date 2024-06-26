const workoutExercises = {
  chest: {
    benchPress: ["Flat Bench Press", "Incline Press", "Decline Press", "Dips"],
    hexPress: ["Flat Hex Press", "Incline Hex Press", "Decline Hex Press"],
    flyes: ["Flat Flyes", "Incline Flyes", "Decline Flyes"],
    pullover: [
      "Db Pullover",
      "Straight Pullover",
      "Wide Pullover",
      "Machine Pullover",
      "Tricep Pulldown",
    ],
  },
  back: {
    row: [
      "Bent-over Row",
      "Hater Row",
      "Seated Row",
      "Close Grip Row",
      "Machine Row",
      "Renegade Row",
      "Landmine Row",
      "Shotgun Row",
      "One-arm Row",
    ],
    pullup: [
      "Pullup",
      "Pulldown",
      "Wide Pulldown",
      "Close Grip Pulldown",
      "Pwg Pulldown",
      "One-arm Pulldown",
      "Lat Pulldown",
    ],
    upright: [
      "Upright Row",
      "Upright Row Db",
      "Upright Row Cable (Laying)",
      "Upright Row Harley",
    ],
    shrug: ["Bb Shrug", "Back Shrug", "Incline Shrug"],
    curls: ["Curls"],
    reverseCurls: [
      "Standing Reverse Curls",
      "Db Reverse Curls",
      "Seated Reverse Curls",
    ],
  },
  shoulders: {
    shoulderPress: [
      "Standing Military Press",
      "Shoulder Press Seated",
      "Shoulder Press Db Seated",
      "Arnold Press",
      "Arnold Press Seated",
      "Landmine Press",
    ],
    laterals: [
      "Lateral Partial",
      "Lateral Over",
      "Lateral Full",
      "Lateral Landmine",
      "Leaning Lateral",
      "Seated Lateral",
      "Half Lateral",
    ],
    frontRaise: [
      "Front Raise",
      "Reverse Front Raise",
      "Two-hand Db Raise",
      "Full Raise",
      "Seated Front Raise",
      "Curl Bar Rotate",
    ],
    rearDelt: [
      "Rear Delt Row",
      "Face Pull",
      "Reverse Flyes Machine",
      "Reverse Flyes Cable",
      "Incline Reverse Flyes",
      "Tear Flyes",
      "Dead Clean And Press",
    ],
  },
  forearms: {
    palmsUpWristCurl: [
      "Standing Palms-up Wrist Curl",
      "Seated Palms-up Wrist Curl",
      "Bench Palms-up Wrist Curl",
    ],
    palmsDownWristCurl: [
      "Standing Palms-down Wrist Curl",
      "Seated Palms-down Wrist Curl",
      "Bench Palms-down Wrist Curl",
    ],
    sideWristCurl: [
      "Standing Side Wrist Curl",
      "Seated Side Wrist Curl",
      "Bench Side Wrist Curl",
    ],
    supinationPronation: [
      "Standing Supination & Pronation",
      "Seated Supination & Pronation",
      "Bench Supination & Pronation",
    ],
    other: ["Reverse Side Wrist Curl", "Dead Hang", "Wrist Roll"],
  },
  legs: {
    squat: ["Back Squat", "Anderson Squat", "Squat With Heel Raise"],
    deadlift: [
      "Conventional/Trap Deadlift",
      "Romanian Deadlift",
      "Sumo Deadlift",
    ],
    lunges: [
      "Walking Lunges",
      "Barbell Lunges",
      "Deep Lunges",
      "Backward Lunges",
    ],
    other: [
      "Leg Press",
      "Calf Press",
      "Hip Thrust",
      "Stairs",
      "Leg Extensions",
      "Farmers Walk",
    ],
  },
  absCore: [
    "Decline Sit-up",
    "Bent Knee Sit-up",
    "Crunches",
    "Row Boat",
    "Side Bend",
    "Double Windmill",
    "Russian Twist",
    "Russian Twist Standing",
    "Spell Caster",
    "V-sit Cross Jab",
    "Landmine 180",
  ],
};

// const workoutExercises = {
//   chest: {
//     benchPress: ["FLAT BENCH PRESS", "INCLINE PRESS", "DECLINE PRESS", "DIPS"],
//     hexPress: ["FLAT HEX PRESS", "INCLINE HEX PRESS", "DECLINE HEX PRESS"],
//     flyes: ["FLAT FLYES", "INCLINE FLYES", "DECLINE FLYES"],
//     pullover: [
//       "DB PULLOVER",
//       "STRAIGHT PULLOVER",
//       "WIDE PULLOVER",
//       "MACHINE PULLOVER",
//       "TRICEP PULLDOWN",
//     ],
//   },
//   back: {
//     row: [
//       "BENT-OVER ROW",
//       "HATER ROW",
//       "SEATED ROW",
//       "CLOSE GRIP ROW",
//       "MACHINE ROW",
//       "RENEGADE ROW",
//       "LANDMINE ROW",
//       "SHOTGUN ROW",
//       "ONE-ARM ROW",
//     ],
//     pullup: [
//       "PULLUP",
//       "PULLDOWN",
//       "WIDE GRIP PULLDOWN",
//       "CLOSE GRIP PULLDOWN",
//       "PWG PULLDOWN",
//       "ONE-ARM PULLDOWN",
//       "LAT PULLDOWN",
//     ],
//     upright: [
//       "UPRIGHT ROW",
//       "UPRIGHT ROW DB",
//       "UPRIGHT ROW CABLE (LAYING)",
//       "UPRIGHT ROW HARLEY",
//     ],
//     shrug: ["BB SHRUG", "BACK SHRUG", "INCLINE SHRUG"],
//     curls: ["CURLS"],
//     reverseCurls: [
//       "STANDING REVERSE CURLS",
//       "DB REVERSE CURLS",
//       "SEATED REVERSE CURLS",
//     ],
//   },
//   shoulders: {
//     shoulderPress: [
//       "STANDING MILITARY PRESS",
//       "SHOULDER PRESS SEATED",
//       "SHOULDER PRESS DB SEATED",
//       "ARNOLD PRESS",
//       "ARNOLD PRESS SEATED",
//       "LANDMINE PRESS",
//     ],
//     laterals: [
//       "LATERAL PARTIAL",
//       "LATERAL OVER",
//       "LATERAL FULL",
//       "LATERAL LANDMINE",
//       "LEANING LATERAL",
//       "SEATED LATERAL",
//       "HALF LATERAL",
//     ],
//     frontRaise: [
//       "FRONT RAISE",
//       "REVERSE FRONT RAISE",
//       "TWO-HAND DB RAISE",
//       "FULL RAISE",
//       "SEATED FRONT RAISE",
//       "CURL BAR ROTATE",
//     ],
//     rearDelt: [
//       "REAR DELT ROW",
//       "FACE PULL",
//       "REVERSE FLYES MACHINE",
//       "REVERSE FLYES CABLE",
//       "INCLINE REVERSE FLYES",
//       "TEAR FLYES",
//       "DEAD CLEAN AND PRESS",
//     ],
//   },
//   forearms: {
//     palmsUpWristCurl: [
//       "STANDING PALMS-UP WRIST CURL",
//       "SEATED PALMS-UP WRIST CURL",
//       "BENCH PALMS-UP WRIST CURL",
//     ],
//     palmsDownWristCurl: [
//       "STANDING PALMS-DOWN WRIST CURL",
//       "SEATED PALMS-DOWN WRIST CURL",
//       "BENCH PALMS-DOWN WRIST CURL",
//     ],
//     sideWristCurl: [
//       "STANDING SIDE WRIST CURL",
//       "SEATED SIDE WRIST CURL",
//       "BENCH SIDE WRIST CURL",
//     ],
//     supinationPronation: [
//       "STANDING SUPINATION & PRONATION",
//       "SEATED SUPINATION & PRONATION",
//       "BENCH SUPINATION & PRONATION",
//     ],
//     other: ["REVERSE SIDE WRIST CURL", "DEAD HANG", "WRIST ROLL"],
//   },
//   legs: {
//     squat: ["BACK SQUAT", "ANDERSON SQUAT", "SQUAT WITH HEEL RAISE"],
//     deadlift: [
//       "CONVENTIONAL/TRAP DEADLIFT",
//       "ROMANIAN DEADLIFT",
//       "SUMO DEADLIFT",
//     ],
//     lunges: [
//       "WALKING LUNGES",
//       "BARBELL LUNGES",
//       "DEEP LUNGES",
//       "BACKWARD LUNGES",
//     ],
//     other: [
//       "LEG PRESS",
//       "CALF PRESS",
//       "HIP THRUST",
//       "STAIRS",
//       "LEG EXTENSIONS",
//       "FARMERS WALK",
//     ],
//   },
//   absCore: [
//     "DECLINE SIT-UP",
//     "BENT KNEE SIT-UP",
//     "CRUNCHES",
//     "ROW BOAT",
//     "SIDE BEND",
//     "DOUBLE WINDMILL",
//     "RUSSIAN TWIST",
//     "RUSSIAN TWIST STANDING",
//     "SPELL CASTER",
//     "V-SIT CROSS JAB",
//     "LANDMINE 180",
//   ],
// };
