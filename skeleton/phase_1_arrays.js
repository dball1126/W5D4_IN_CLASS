Array.prototype.uniq = function() {
    let uniqArr = [];

    // for (i = 0; i < this.length; i++) {
    //     if (!uniqArr.includes(this[i])) {
    //         uniqArr.push(this[i]);
    //     }
    // }

    this.forEach(function(element) {
        if (!uniqArr.includes(element)) {
            uniqArr.push(element);
        }
    }); 

    return uniqArr;
};

Array.prototype.twoSum = function() {
    const pairs = [];
    for (i = 0; i < this.length - 1; i++) {
        for (j = i + 1; j < this.length; j++) {
            const el1 = this[i];
            const el2 = this[j];
            if (el1 + el2 === 0) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs;
};

Array.prototype.transpose = function() {
    const transposed = [];
    for (i = 0; i < this.length; i++) {
        const sub = [];
        for (j = 0; j < this.length; j++) {
            sub.push(this[j][i]);
        }
        transposed.push(sub);
    }
    return transposed;
};

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());