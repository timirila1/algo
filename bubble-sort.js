// Пузырьковая сортировка

const generator = count => {
    return Array.from(
        { length: count },
        () => Math.floor(Math.random() * count)
    );
};

const bubbleSort = list => {
    for(let i = 0; i < list.length; i++) {
        for(let k = 0; k < list.length - i; k++) {
            if(list[k+1] !== undefined && list[k] > list[k + 1]) {
                let temp = list[k];
                list[k] = list[k+1];
                list[k+1] = temp;
            }
        }   
    }
    return list;
}

let a = generator(8);

console.log(a);
console.log(bubbleSort([...a]));