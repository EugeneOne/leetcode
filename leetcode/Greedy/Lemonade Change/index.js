/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if(bills[0] !== 5) return false;
    if(bills.length > 1 && bills[1] === 20) return false;
    let changeObj = {
        a: 0,
        b: 0
    };
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            changeObj.a++;
        } else if(bills[i] === 10) {
            if(!changeObj.a) {
                return false;
            }
            changeObj.b++;
            changeObj.a--;
        } else {
            if(!changeObj.a || (!changeObj.b && changeObj.a < 3)) {
                return false;
            }
            if(changeObj.b && changeObj.a) {
                changeObj.b--;
                changeObj.a--;
                continue;
            }
            if(!changeObj.b && changeObj.a >= 3) {
                changeObj.a -= 3;
                continue;
            }
        }
    }
    return true;
};

const cusArr = [5,5,5,5,20,20,5,5,20,5];
console.log(lemonadeChange(cusArr));