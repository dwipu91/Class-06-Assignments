const searce = prompt('Searce Now');


//filter deata
const result = devs.filter((deta) => deta.id === searce || deta.name === searce || deta.bloodeGrpup === searce || deta.location === searce || deta.age >= searce || deta.income >= searce || deta.bloodeGrpup === searce || deta.gender === searce || deta.phoneNumber === searce );


// Final deta
const finalResult = [];


// Donner rady to next donet 
const radyTOdonner = devs.map((item) =>{
});


// get deta
result.forEach((item , index) =>{
    finalResult.push(item)
})


// Show concol
console.table(finalResult);
