const searchFears = () => {
    let input = parseInt(document.getElementById("fearNum").value);
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);

    let ArrNums = [num1, num2, num3, num4, num5];
    
  
    //removes numbers from array that are larger than input
    let filterNums = ArrNums.filter(x => x < input);
    console.log(filterNums)

    //array to store matches
    let ArrPairs = [];

    //nested loops checks each number of the array
    for (let i = 0; i < filterNums.length; i++) {
        for (let k = 0; k < filterNums.length; k++) {
            if (filterNums[i] + filterNums[k] == input) {
                ArrPairs.push([filterNums[i], filterNums[k]]);

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
    document.getElementById("num1").value = 10;
    document.getElementById("num2").value = 15;
    document.getElementById("num3").value = 3;
    document.getElementById("num4").value = 7;
    document.getElementById("num5").value = 2;
}