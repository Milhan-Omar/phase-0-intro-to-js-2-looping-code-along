// Code your solutions in this file
// const writeCards=(["Guadalupe", "Ollie", "Aki"] , "surprise")
function writeCards(name,surprise){
 const thisArray =[];
 for(let i = 0; i < name.length; i++ ){
 const message = `Thank you, ${name[i]}, for the wonderful ${surprise} gift`
 thisArray.push(message);
 }
 return thisArray;
}
function countDown(nums){
 do{
  console.log(nums);
  nums--;
 } 
 while(nums >= 0);
}
