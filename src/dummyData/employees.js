const employees = [
  {
    id:'1', 
    firstName: 'Akhmad', 
    lastName: 'Fathoni', 
    division: 'SE', 
    grade:'AP', 
    location:'Yogyakarta', 
    phone:'+628562347705', 
    stream: 'CDC', 
    jobFamily: 'Java', 
    hiredDate: new Date(2011,10,15), 
    gender:2, 
    status: 2, 
    nationality: 'Indonesia', 
    marital: 3, 
    email: 'akhmad.fathoni@mitrais.com', 
    dob: new Date(1990,1,1), 
    activeInd: true,
    dependents: [
      {name: 'Dian Sastro', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
      {name: 'Nabila Syakieb', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: false},
      {name: 'Nabila Syakieb2', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: false}
    ],
    employmentHistories: [
      {id: '1', startDate: new Date(2015,5,2), endDate:{}, employer: 'Mitrais', jobDesc:['Backend developer', 'Frontend Developer'], activeInd: true},
      {id: '2', startDate: new Date(2010,4,2), endDate: new Date(2014,12,31), employer: 'Google', jobDesc:['Backend developer, Frontend Developer'], activeInd: false},
    ],
    locationHistory:[
      {id:1,relocationStartDate: new Date(2016,3,2), relocationEndDate:{}, branchOffice: 'Yogyakarta', address:'Jl. Sidobali No. 2 Umbulharjo, Mujamuju, Yogyakarta'},
      {id:2, relocationStartDate: new Date(2014,2,2), relocationEndDate:new Date(2016,3,2), branchOffice: 'Bali', address:'Jl. By Pass Ngurah Rai gg. Mina Utama No. 1 Suwung 80223, Bali'}
    ],
    addressHistory:[
      {id: 1, address: 'Bantul', activeInd: true}
    ],
    gradeHistory:[
      {id: 1,startDate: new Date(2016,3,2), endDate:new Date(2016,3,2),grade:1,devStage:'JP'}
    ]
  },
  {id:'2', firstName: 'John', lastName: 'Doe', division: 'SE', grade:'AN', location:'Bali', phone:'+6285517705', 
  stream: 'CDC', jobFamily: 'Mobile', hiredDate: new Date(2012,12,15), gender:2, status: 2, nationality: 'Indonesia', 
  marital: 3,email: 'john.doe@mitrais.com', dob: new Date(1996,4,12), activeInd: false,
  dependents: [{name: 'Melani Sastro', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
                {name: 'Agus Decaprio', dob: new Date(2013,5,13), gender: 2, type: 'Child', activeInd: true}
               ]
  },

  {
    id:'3', 
    firstName: 'Roberto', 
    lastName: 'Carlos', 
    division: 'SE', 
    grade:'AP', 
    location:'Yogyakarta', 
    phone:'+6285623705', 
    stream: 'CDC', 
    jobFamily: 'MEAN', 
    hiredDate: new Date(2001,11,13), 
    gender:2, 
    status: 2, 
    nationality: 'Indonesia', 
    marital: 3, 
    email: 'roberto.carlos@mitrais.com', 
    dob: new Date(1995,2,13), 
    activeInd: true,
    dependents: [
      {name: 'Jesica Alba', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
      {name: 'Multazam Azam', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: true}
    ]
  },
  {
    id:'4', 
    firstName: 'Angelina', 
    lastName: 'Jolie', 
    division: 'SE', 
    grade:'PG', 
    location:'Bandung', 
    phone:'+62856487705', 
    stream: 'CDC', 
    jobFamily: 'Java', 
    hiredDate: new Date(2010,7,17), 
    gender:3, 
    status: 2, 
    nationality: 'Indonesia', 
    marital: 3,  
    email: 'angelina.jolie@mitrais.com', 
    dob: new Date(1994,3,14), 
    activeInd: true},
];

export default employees;