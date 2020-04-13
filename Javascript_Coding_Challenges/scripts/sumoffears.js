const searchFears = () => {
    let input = document.getElementById("fearNum").value;
    /*let arr1 = document.getElementById("arr1").value;
    let arr1 = document.getElementById("arr2").value;
    let arr1 = document.getElementById("arr3").value;
    let arr1 = document.getElementById("arr4").value;
    let arr1 = document.getElementById("arr5").value;

    let ArrFear = [arr1, arr2, arr3, arr4, arr5];*/
    
    let ArrPairs = [];
    //removes numbers from array that are larger than input
    let possibleNums = ArrFear.filter(x => x < input);

    //nested loops checks each number of the array
    for (let i = 0; i < possibleNums.length; i++) {
        for (let k = 0; k < possibleNums.length; k++) {
            if (possibleNums[i] + possibleNums[k] == input) {
                ArrPairs.push([possibleNums[i], possibleNums[k]]);

            } 
        }
    }
    
    
    if (ArrPairs.length == 0) {
        document.getElementById("fearResults").innerHTML = "No matches found";
    } else {   

        //nested loop results in doubles like 7+3 and 3+7. Halving it removes the doubles
        let ArrLeng = ArrPairs.length / 2;
        ArrPairs = ArrPairs.slice(0, ArrLeng);
        //creating the string output
        let resultString = "";
        ArrPairs.forEach(x => {
            resultString += `${x[0]} + ${x[1]} <br />`;
        });
        document.getElementById("fearResults").innerHTML = resultString;
    }
}

const clearFears = () => {
    document.getElementById("fearResults").innerHTML = "";
    document.getElementById("fearNum").value = "";
}