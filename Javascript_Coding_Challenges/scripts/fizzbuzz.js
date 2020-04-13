const solveFizz = () => {
    let Fizz = Math.floor(document.getElementById("fizzNum").value);
    let Buzz = Math.floor(document.getElementById("buzzNum").value);

    let arrFizzBuzz = [Fizz, Buzz];
    let error = false;
    let results = [];

    arrFizzBuzz.forEach(x => {
        if (x <= 0 || x > 100 || x == "") {
            document.getElementById("fizzResults").innerHTML = "Please enter 2 numbers between 1 and 100";
            error = true;
            clearNums();
        } else {
            error = false;
        }
    });

    if (!error) {
        for (let i = 1; i <= 100; i++) {
            if (i % Fizz == 0 && i % Buzz == 0) {
                results[i - 1] = "<span class='fizzbuzz'>FizzBuzz</span>";
            } else if (i % Fizz == 0) {
                results[i - 1] = "<span class='fizz'>Fizz</span>";
            } else if (i % Buzz == 0) {
                results[i - 1] = "<span class='buzz'>Buzz</span>";
            } else {
                results[i - 1] = i;
            }
        }
        results = results.join(', ');
        document.getElementById("fizzResults").innerHTML = results;
    }
}

const clearNums = (click) => {
    if (click) {
        document.getElementById("fizzNum").value = "";
        document.getElementById("buzzNum").value = "";
        document.getElementById("fizzResults").innerHTML = "";
    } else {
        document.getElementById("fizzNum").value = "";
        document.getElementById("buzzNum").value = "";
    }
}

