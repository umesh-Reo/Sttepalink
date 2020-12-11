export const AssignTheSubjects = (Class) =>{
    let TheSubjects = null;
    switch (Class) {
       case ('Class 12 Sci. (Without Biology)'): 
        TheSubjects = (
           [ 
            {SubjectName:"Physics",id:"12Sci2Phy",Class:"Class 12"},
            {SubjectName:"Chemistry",id:"12Sci2Chem",Class:"Class 12"},
            {SubjectName:"Mathematics",id:"12Sci2Maths",Class:"Class 12"},
            {SubjectName:"Hindi",id:"12Sci2Hindi",Class:"Class 12"},
           {SubjectName:"English",id:"12Sci2Eng",Class:"Class 12"}]
          );
       break;
       case ('Class 12 Sci.(Without Maths)'): 
        TheSubjects = (
           [
           {SubjectName:"Physics",id:"12Sci1Phy",Class:"Class 12"},
           {SubjectName:"Chemistry",id:"12Sci1Chem",Class:"Class 12"},
           {SubjectName:"Biology",id:"12Sci1Bio",Class:"Class 12"},
           {SubjectName:"Hindi",id:"12Sci1Hindi",Class:"Class 12"},
           {SubjectName:"English",id:"12Sci1Eng",Class:"Class 12"}]
          );
      break;
      case ('Class 12 Commerce'): 
        TheSubjects = (
           [
           {SubjectName:"Accountancy",id:"12Com",Class:"Class 12"},
           {SubjectName:"Business Studies ",id:"12Bus",Class:"Class 12"},
           {SubjectName:"Economics",id:"12Eco",Class:"Class 12"},
           {SubjectName:"Mathematics",id:"12ComMaths",Class:"Class 12"},
           {SubjectName:"English",id:"12ComEng",Class:"Class 12"}]
          );
      break;
      case ('Class 12 Arts'): 
         TheSubjects = (
            [
            {SubjectName:"History",id:"12His",Class:"Class 12"},
            {SubjectName:"Geography",id:"12Geo",Class:"Class 12"},
            {SubjectName:"Political Science",id:"12Pol",Class:"Class 12"},
            {SubjectName:"Hindi",id:"12ArtsHindi",Class:"Class 12"},
            {SubjectName:"English",id:"12ArtsEng",Class:"Class 12"}]
          );
      break;
      case ('Class 11 Sci.(Without Biology)'): 
         TheSubjects = (
            [
            {SubjectName:"Physics",id:"11Sci2Phy",Class:"Class 11"},
            {SubjectName:"Chemistry",id:"11Sci2Che",Class:"Class 11"},
            {SubjectName:"Mathematics",id:"11Sci2Maths",Class:"Class 11"},
            {SubjectName:"Hindi",id:"11Sci2hindi",Class:"Class 11"},
            {SubjectName:"English",id:"11Sci2Eng",Class:"Class 11"}]
          );
      break;
      case ('Class 11 Sci.(Without Maths)'): 
         TheSubjects = (
           [
           {SubjectName:"Physics",id:"11Sci1Phy",Class:"Class 11"},
           {SubjectName:"Biology",id:"11Sci1Bio",Class:"Class 11"},
           {SubjectName:"Chemisrty",id:"11Sci1Chem",Class:"Class 11"},
           {SubjectName:"Hindi",id:"11Sci1Hindi",Class:"Class 11"},
           {SubjectName:"English",id:"11Sci1Eng",Class:"Class 11"}]
          );
       break;
       case ('Class 11 Commerce'): 
         TheSubjects = (
           [
           {SubjectName:"Accountancy",id:"11Acc",Class:"Class 11"},
           {SubjectName:"Business Studies",id:"11Buss",Class:"Class 11"},
           {SubjectName:"Economics",id:"11Eco",Class:"Class 11"},
           {SubjectName:"Hindi",id:"11ComHindi",Class:"Class 11"},
           {SubjectName:"English",id:"11ComEng",Class:"Class 11"}]
          );
      break;
      case ('Class 11 Arts'): 
         TheSubjects = (
            [
            {SubjectName:"History",id:"11Hist",Class:"Class 11"},
            {SubjectName:"Geography",id:"11Geo",Class:"Class 11"},
            {SubjectName:"Political Science",id:"11Pol",Class:"Class 11"},
            {SubjectName:"Hindi",id:"11ArtsHindi",Class:"Class 11"},
            {SubjectName:"English",id:"11ArtEng",Class:"Class 11"}]
          );
      break;
      case ('Class 10'): 
         TheSubjects = (
           [
           {SubjectName:"Science",id:"10Sci",Class:"Class 10"},
           {SubjectName:"Social Science",id:"10SST",Class:"Class 10"},
           {SubjectName:"Mathematics",id:"10Maths",Class:"Class 10"},
           {SubjectName:"Hindi",id:"10Hindi",Class:"Class 10"},
           {SubjectName:"English",id:"10English",Class:"Class 10"}]
          );
      break;
      case ('Class 9'): 
         TheSubjects = (
           [
           {SubjectName:"Science",id:"9Sci",Class:"Class 9"},
           {SubjectName:"Social Science",id:"9SST",Class:"Class 9"},
           {SubjectName:"Mathematics",id:"9Maths",Class:"Class 9"},
           {SubjectName:"Hindi",id:"9Hindi",Class:"Class 9"},
           {SubjectName:"English",id:"9English",Class:"Class 9"}]
          );
      break;
      case ('Class 8'): 
        TheSubjects = (
           [
           {SubjectName:"Science",id:"8Sci",Class:"Class 8"},
           {SubjectName:"Social Science",id:"8SST",Class:"Class 8"},
           {SubjectName:"Mathematics",id:"8Maths",Class:"Class 8"},
           {SubjectName:"Hindi",id:"8Hindi",Class:"Class 8"},
           {SubjectName:"English",id:"8English",Class:"Class 8"}]
          );
      break;
      default : 
      TheSubjects = null;
    }
    console.log(TheSubjects);
   return TheSubjects;
 }