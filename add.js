import _ from "lodash";

export function add(num1, num2) {
    if (_.isInteger(num1) && _.isInteger(num2)) {
        return num1 + num2; 
    } else {
        return NaN;
    }
}

console.log(add(5, 3));