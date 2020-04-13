const reverseString = () => {
    //get value
    let string = document.getElementById("tacoIn").value;
    //reverse array and return
    let finalTaco = string.split('').reverse().join('');
    
    document.getElementById("tacoOut").value = finalTaco;

}

const clearTacos = () => {
    document.getElementById("tacoIn").value = "";
    document.getElementById("tacoOut").value = "";
}