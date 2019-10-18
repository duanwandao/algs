
var MyHashSet = function() {
    this.set = [];
};

MyHashSet.prototype.add = function(key) {

    if (!this.contains(key)) {
        this.set.push(key);
    }
    return;
};

MyHashSet.prototype.remove = function(key) {
    if (this.contains(key)) {
        this.set.splice(this.set.indexOf(key), 1);
    }
    return;
};

MyHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
};
