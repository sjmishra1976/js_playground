export const palindrome = (str) => {

    let s = str.toLowerCase()

    return s===[...str].reverse().join('')
}


export const displayArr = (arr) =>{

    arr.forEach( (ele,index) => {

        console.log('Printing array element' + index + ' :' + ele)
        
    });
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

 
export const arrayMultiply = (arr, multiplier) => {

        let multiplyFn = (ele) =>{
            return ele*multiplier
        }

        let newArr= arr.map(multiplyFn);
        return newArr;
    }


export const add = (val1) =>{
    return (val2) =>{ 
        return (val1+val2)
    }
}

export const substract = (val1) =>{
    return (val2) =>{ 
        return (val1-val2)
    }
}

export const multiply = (val1) =>{
    return (val2) =>{ 
        return (val1*val2)
    }
}

export const curryFn = (binaryTask, val1) => {
    return (val2) => {
        return binaryTask(val1)(val2)
    }

}
        

