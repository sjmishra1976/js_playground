export const palindrome = (str) => {

    let s = str.toLowerCase()

    return s===[...str].reverse().join('')
}


export const displayObjArr = (objArr) =>{

    objArr.forEach(obj => {

        console.log('Printing array object: '+obj.name +': ' +obj.year)
        
    });
}

export const filterNewest = (objArr,yearVal) =>{

   let newCars =  objArr.filter(obj => {
       return obj.year >= yearVal
    });

    newCars.forEach(obj => {

        console.log('New Cars: '+obj.name +': ' +obj.year)
        
    });
        
}
