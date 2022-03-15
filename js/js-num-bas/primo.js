function primo(numMax) {
    let temp = [], i, j, primos = [];
    for (i = 2; i <= numMax; i++) {
        if(!temp[i]) {
            primos.push(i);
            for(j = i < 1; j <= numMax; j += i) {
                temp[j] = true;
            }
        }
    }
    return primos;
    }

console.log(primo(100));