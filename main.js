//1
function arrCopy(arr) {
    let copy = arr.slice()
    if (arguments.length > 0) {
        for (let i = 1; i < arguments.length; i++) {
            copy.push(arguments[i])
        }
    }
    return copy
}
const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]])

console.log(arr1, arr2)

//2
function arrToString(arr) {
    return arr.map(elem => String(elem))
}
const arr3 = arrToString([1,2,3]);
const arr4 = arrToString([10,200,3333])

console.log(arr3, arr4)

//3
function getLength(arr) {
    return arr.map(elem => elem.length)
}
const arr5 = getLength(['Ivan','Pavlo','Ira'])
const arr6 = getLength(['Oleksiy','Andriana'])

console.log(arr5, arr6);

//4
function removeDuplicates(arr){
    return Array.from(new Set(arr.map(elem => elem.toLowerCase())))
}

const arr7 = removeDuplicates(['htmL','css','html','js'])
const arr8 = removeDuplicates(['html','css','js','html','js','python','js','scss'])

console.log(arr7, arr8)
