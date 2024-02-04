// For the Above JSON,iterate over all the loops.
// For loop:
var resume = {
  "MyInfo": {
    "name": "Balakrishnan M",
    "email": "krishnabala1495@gmail.com",
    "phone": "6369216016",
  },
     "location": {
      "address": "5/3/121,East Street ,Palayampatti",
      "postalCode": "626112",
      "city": "Aruppukottai,Virudhunagar",
      "region": "Tamilnadu",
    },
     "profiles":  {
        "network": "GitHub",
        "username": "Balakrishnan-10",
        "url": "https://github.com/Balakrishnan-10",
      },
  "work":  {
      "company": "Tonglit Autogistic PVT LTD",
      "position": "Quality Control",
      "startDate": "16.06.2016",
      "endDate": "17.06.2019",
    },
  "education": {
      "institution": "VSVN Polytechnic College",
      "area": "Virudhunagar",
      "startDate": "07.6.2013",
      "endDate": "29.05.2016",
      "Percentage": "90%",
      "courses": "Diploma in Mechanical Enginerring",
    }, 
"interpersonalskills": {
      "strength": "Self & quick leaner,Team worker",
      "weakness": "Limited experience in a particular skill or software",
     }, 
  "skills":  {
      "name": "C language",
      "level": "beginners",
    }, 
  "languages": {
      "write": "Tamil,English,Hindi",
      "read": "Tamil,English,Hindi",
      "speak": "Tamil,Englisg",
    }, 
  "interests": {
      "keyword": "football,reading books",
      },
}
for(var i=0;i<resume.length;i++){
console.log(resume[i]);
}
console.log(resume);