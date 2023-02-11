/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(
      function(arr){
        if(arr.marks > 50){
            console.log(arr);
        }
    });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(
        function(arra){
          if(arra.marks > 50 ){
           console.log(arra);
          }
      });
}

function addData() {
  //Write your code here, just console.log
  var newData={id:4,name:"susan",age:"20",marks:45};
    arr.push(newData);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  var updatedArr=arr.filter(remove);
    function remove(arr){
      return arr.marks >= 50;
    }
    console.log(updatedArr);
}

function concatenateArray() {
  //Write your code here, just console.log
   var newArray= [
      { id: 5, name: "tommy", age: "18", marks: 90 },
      { id: 6, name: "arthur", age: "20", marks: 60 },
      { id: 7, name: "polly", age: "26", marks: 85 },
    ];
    var finalArray= arr.concat(newArray);
    console.log(finalArray);
}
