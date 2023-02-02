let delta
const raizes = new Array(2);
function bhaskara (a, b, c) {
    delta = (b**2) - (4*a*c);
    if (delta < 0) {
        return "[]";
    } else if (delta == 0) {
        raizes[0] = (-b + Math.sqrt(delta))/(2*a);
        return `[ ${raizes[0]} ]`;
    } else {
        raizes[0] = (-b + Math.sqrt(delta))/(2*a);
        raizes[1] = (-b - Math.sqrt(delta))/(2*a);
        return `[ ${raizes[0]}, ${raizes[1]} ]`;
    }
}

console.log(bhaskara(1, 12, -13));
console.log(bhaskara(3, -4, 2));
console.log(bhaskara(2, 4, 2));