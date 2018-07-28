// Сортировка выбором

const generator = count => {
    return Array.from(
        { length: count },
        () => Math.floor(Math.random() * count)
    );
};

const findSmallest = list => {
    let min = list[0];
    let minIndex = 0;

    for(let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
            minIndex = i;
        }
    }

    return minIndex;
};

const selectionSort = list => {
    const res = [];
    const listCopy = [...list];

    for(let i = 0; i < listCopy.length; i++) {
        let minIndex = findSmallest(list);
        res.push(list.splice(minIndex, 1)[0]);
    }

    return res;
};


const a = generator(10);
const b = selectionSort([...a]);
console.log(a);
console.log(b);