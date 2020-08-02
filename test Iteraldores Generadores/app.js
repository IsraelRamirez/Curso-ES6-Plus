function *gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let lmao = gen();
console.log(lmao.next().done);
console.log(lmao.next().done);
console.log(lmao.next().done);
console.log(lmao.next().done);
console.log(lmao.next().done);
console.log(lmao.next().done);
console.log(lmao.return());