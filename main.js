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


// const companyArray=["Applied","Argus","Axilion","Biosense","Broadcom","CEVA","Check Point","citi","ConteXtrea","CTERA Networks"];
// function printCompanyName(){
//     for(let i=0; i<10;i++){
//         document.body.innerHTML+=companyArray[i]+"-";
//     }
//  }
//  printCompanyName()
var imgArray = [src = 'luffy1.jfif',src = 'luffy2.jfif',src = 'luffy3.jfif',src = 'luffy4.jfif',src = 'luffy5.jfif']
// imgArray[0] = new Image();
// imgArray[0].src = 'luffy1.jfif';

// imgArray[1] = new Image();
// imgArray[1].src = 'luffy2.jfif';

// imgArray[2] = new Image();
// imgArray[2].src = 'luffy3.jfif';

// imgArray[3] = new Image();
// imgArray[3].src = 'luffy4.jfif';

// imgArray[4] = new Image();
// imgArray[4].src = 'luffy5.jfif';

// imgArray[5] = new Image();
// imgArray[5].src = 'luffy6.jfif';

// imgArray[6] = new Image();
// imgArray[6].src = 'luffy7.jfif';

// imgArray[7] = new Image();
// imgArray[7].src = 'luffy8.jfif';

// imgArray[8] = new Image();
// imgArray[8].src = 'luffy9.jfif';

// imgArray[9] = new Image();
// imgArray[9].src = 'luffy10.jfif';
for(let i=0;i<imgArray.length;i++){
var myImage = new Image(100, 200);
document.body.appendChild(imgArray[i]);}
