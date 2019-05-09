Array.prototype.myEach = function(cb) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        cb(element);
    }
};

Array.prototype.myMap = function(cb) {
    const mapArr = [];

    for (let index = 0; index < this.length; index++) {
        mapArr.push( cb(this[index]) );
    }
    return mapArr;
};

Array.prototype.myReduce = function(cb, initialValue) {
    if (initialValue === undefined) {
        i = 1;
    } else {
        i = 0;
    }

    for (i; i < this.length; i++) {
        initialValue = cb(initialValue, this[i]);
    } 

    return initialValue;  
};