
const userData = [
  {
    id: 1,
    userName: "Elochukwu",
    email: "elochuks1@gmail.com",
    password: "elobest",
    userHistory: [
      {
        id: 1,
        bP: {
          systolic: 120,
          diastolic: 82,
          reading: "Normal",
        },
        bS: 112,
        bC: 210,
        date: "2022-11-13"
      },
      {
        id: 2,
        bP: {
          systolic: 110,
          diastolic: 74,
          reading: "Optimal",
        },
        bS: 90,
        hR: 89,
        bC: 110,
        date: "2022-12-01",
      },
    ],
  },
  {
    id: 2,
    userName: "Samiat",
    email: "sammyat@hulu.com",
    password: "bassey",
    userHistory: [
      {
        id: 1,
        bP: {
          systolic: 107,
          diastolic: 98,
          reading: "Moderate Hypertension",
        },
        bS: 140,
        hR: 80,
        bC: 110,
      },
    ],
  },
];

export default userData;