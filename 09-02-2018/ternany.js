// let answer = (value !== value) ? '=NaN' :
//              (value === undefined) ? '=undefined' :
//              (value === null) ? '=null' :
//              (value === 0) ? '=0' :
//              (value === '') ? '""' :
//              false;
             
// console.log( answer );

function whatIfNotNaN(value) {
    return (value !== value) ? '=NaN' :
           (value === undefined) ? '=undefined' :
           (value === null) ? '=null' :
           (value === 0) ? '=0' :
           (value === '') ? '""' :
           false;
}

console.log(  whatIfNotNaN('a') );