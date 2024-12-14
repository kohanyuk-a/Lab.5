function array() {
    const arr = [];
    function arrayFunc(index) {
        return arr[index]; // возвращает элемент по индексу
    }

    arrayFunc.push = function(value) {
        arr.push(value);
    };

    arrayFunc.pop = function() {
        return arr.pop();
    };
    return arrayFunc;
}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
