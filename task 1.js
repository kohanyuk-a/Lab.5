function seq(...args) {
    console.log("args: ", ...args.toString());
    const functions = [...args];

    return function next(fnOrValue) {
        console.log("fnOrValue: ", fnOrValue.toString());
        if (typeof fnOrValue === 'number') {
            console.log("inside if");
            return functions.reduce((acc, fn) => fn(acc), fnOrValue);
        }

        functions.push(fnOrValue);
        return next;
    };
}


console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
