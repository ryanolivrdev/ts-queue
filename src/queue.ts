class Queue<T> {
  private queue: T[] = [];
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public enqueue(element: T) {
    if (this.size() === this.capacity) {
      throw new Error("Queue is full");
    }

    this.queue.push(element);
  }

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.queue.shift()!;
  }

  public size(): number {
    return this.queue.length;
  }

  public isEmpty(): boolean {
    return this.queue.length === 0;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.queue[0]!;
  }

  public getOddNumbers(): Queue<number> {
    const oddQueue = new Queue<number>(this.capacity);

    for (const number of this.queue) {
      if (typeof number !== "number") {
        throw new Error("The element is not a number");
      } else {
        if (number % 2 !== 0) {
          oddQueue.enqueue(number);
        }
      }
    }

    return oddQueue;
  }

  public calculateAverage(queue: Queue<number>): number {
    if (queue.isEmpty()) {
      return 0;
    }

    let sum = 0;
    let count = 0;

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      if (current !== undefined) {
        sum += current;
        count++;
      }
    }

    return sum / count;
  }
}

export { Queue };
