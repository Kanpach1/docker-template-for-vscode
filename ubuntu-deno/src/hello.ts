interface HelloTarget {
  name: string;
}

function sayHello(target: HelloTarget): string {
  return `Hello, ${target.name}!`;
}

const helloTarget: HelloTarget = {
  name: "World",
};

console.log(sayHello(helloTarget));
