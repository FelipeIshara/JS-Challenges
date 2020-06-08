let str = document.body.querySelector("#string").value
function reverseString(str) {
    var s = "";
    for (let i = str.length - 1; i >= 0; i--){
        s +=str[i];
    }
    console.log(s);
   
}
reverseString("hello")
