const arrayOriginal = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const set = new Set(arr);

    return [...set];
}

console.log(valoresUnicos(arrayOriginal));