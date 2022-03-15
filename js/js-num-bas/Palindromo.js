function palindrome() {
    let revStr = "";
    let str = document.getElementById("str").value;
    let i = str.length;

    for(let j = i; j >= 0; j--) {
        revStr += str.charAt(j);
    }

    if(str == "") {
        alert("Digite um algum texto ou numero");
    } else if(str == revStr) {
        alert(str + " é palindromo")
    }else {
        alert(str + " não é palindromo");
    }




}