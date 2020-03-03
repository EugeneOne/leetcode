/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let Anums = 0,
        Bnums = 0;
    let AValueMap = new Map(),
        BIndexMap = new Map();
    for(let i = 0; i < secret.length; i++) {
        if(secret[i] === guess[i]) {
            Anums += 1;
            continue;
        }
        if(guess[i] !== undefined) {
            BIndexMap.set(i,guess[i])
        }
        if(!AValueMap.has(secret[i])) {
            AValueMap.set(secret[i], 1);
        } else {
            AValueMap.set(secret[i], AValueMap.get(secret[i]) + 1);
        }
    }

    for(let value of BIndexMap.values()) {
        if(AValueMap.get(value)) {
            Bnums += 1;
            AValueMap.set(value, AValueMap.get(value) - 1);
        }
    }

    return `${Anums}A${Bnums}B`;
};

const secret = "1122";
const guess = "1222";
console.log(getHint(secret, guess));