Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (sorted === false) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                const temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

String.prototype.substrings = function() {
    const results = []
    for (i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            results.push(this.slice(i, j + 1));
        }
    }
    return results;
}

const str = "cats";
console.log(str.substrings());