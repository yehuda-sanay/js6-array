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

function getNamesAndSeries(){
    const arrayNames=[];
    while(arrayNames.length<10){
        const listname=document.getElementById("names_input")
        
        arrayNames.push(listname.value);
    }
    console.log(arrayNames);

}
getNamesAndSeries()