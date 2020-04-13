const reverseString = () => {
    let string = document.getElementById("tacoIn").value;
    let ArrTaco = string.split('', 20);
    let RevTaco = ArrTaco.reverse();
    let finalTaco = RevTaco.join('');
    
    document.getElementById("tacoOut").value = finalTaco;

}

const clearTacos = () => {
    document.getElementById("tacoIn").value = "";
    document.getElementById("tacoOut").value = "";
}