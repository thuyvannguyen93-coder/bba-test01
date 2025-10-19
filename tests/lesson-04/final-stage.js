let count = 0;
for(let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++){
    if ((i + j) % 17 === 0){
        let sum = i + j;
        count ++;
        console.log(`Cặp (${i}, ${j}) có tổng = ${sum}`);
    }
 }
}
console.log("cac cap so chia het cho 17 la:" + count);