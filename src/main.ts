import { Queue } from "./queue";

function main() {
  const myQueue = new Queue<number>(7);

  myQueue.enqueue(10);
  myQueue.enqueue(1);
  myQueue.enqueue(3);
  myQueue.enqueue(11);

  myQueue.enqueue(20);
  myQueue.enqueue(30);

  console.log("Tamanho da fila: " + myQueue.size());
  console.log("Próximo elemento: " + myQueue.peek());

  myQueue.dequeue();
  console.log("Tamanho da fila após remoção: " + myQueue.size());
  console.log("Próximo elemento após remoção: " + myQueue.peek());

  myQueue.enqueue(40);
  myQueue.enqueue(50);
  console.log("Tamanho da fila após adição: " + myQueue.size()); 
  console.log("Próximo elemento após adição: " + myQueue.peek()); 

  const oddNumbersQueue = myQueue.getOddNumbers();

  while (!oddNumbersQueue.isEmpty()) {
    console.log(oddNumbersQueue.dequeue());
  }

  const average = myQueue.calculateAverage(myQueue);

  console.log(average);
}

main();