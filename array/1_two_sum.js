// PROBLEM: 1 -> Two Sum

let exArr = [1,3,4,6, 7,6 ]

let expSum = 10;

const twoSum =( arr, target ) => {
    let out = [];
    
    //? First Approach

    // for ( let i=0; i<arr.length; i++ ) {
    //     let init = arr[i];
    //     let remainArr = arr.slice(i+1)

    //     for( let j=0; j<remainArr.length; j++ ) {
    //         let sum = init + remainArr[j];
    //         if ( sum === target && !out.length ) {
    //             out.push(i,j+(i+1))
    //         }
    //     }
    // }

    //? Second Approach

    for ( let i=0; i<arr.length; i++ ) {

        const remaining = target - arr[i];
        let index = arr.indexOf( remaining );

        if ( index !== -1 && !out.length && index != i ) {
            out.push(i, index)
        }
    }

    return out;
}



console.log("out>>>", twoSum(exArr, expSum));