class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peak() {
    return this.data[this.data.length - 1];
  }
}


const weave = (sourceOne, sourceTwo) => {
  const q = new Queue();

  while (sourceOne.peak() || sourceTwo.peak()) {
    if (sourceOne.peak()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peak()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}


