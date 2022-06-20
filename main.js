//שאלה 1
// function getStringArray(){
//     const myarray=["yehdau","sanay","king"];
//     document.body.innerHTML=myarray.sort();
// }
// getStringArray()

//שאלה 2

// function getNumbers(){
//     const myarray=[8,2,4,6,7,10];
//     myarray.sort((a,b)=> a-b)
//     console.log(myarray)
// }
// getNumbers()

//שאלה 3 

// function getNumbers(){
//     const myarray =[8,2,4,6,7,9,10];
//     myarray.sort((a,b)=> b-a)
//     console.log(myarray)
// }
// getNumbers()
// שאלה 4
// const arrayNames=[];
// const inputName=document.createElement("input");
// document.body.appendChild(inputName);
// function getNamesAndSeries(){
    
//     if(arrayNames.length<10){
//         arrayNames.push(inputName.value);
        
//     }
//     arrayNames.sort();
//     if(arrayNames.length==10){
//     console.log(arrayNames);
//     }
// }

//שאלה 5
// const numberArray=[];
// function randomNumber(){
// for(let i=0;i<10;i++){
//    let randomnumber= Math.floor(Math.random()*500000);
//     numberArray.push(randomnumber);
// }
// numberArray.sort(((a,b)=> b-a))
// console.log(numberArray);
// }
// randomNumber()

//שאלה 7 


const companyArray=["Applied","Argus","Axilion","Biosense","Broadcom","CEVA","Check Point","citi","ConteXtrea","CTERA Networks"];
function printCompanyName(){
    for(let i=0; i<10;i++){
        document.body.innerHTML+=companyArray[i]+"-";
    }
 }
 printCompanyName()