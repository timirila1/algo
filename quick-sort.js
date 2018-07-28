// Быстрая сортировка

const generator = count => {
    return Array.from(
        { length: count },
        () => Math.floor(Math.random() * count)
    );
};

const quickSort = list => {
    if (list.length < 2) {
        return list;
    } else {
        let pivot = list[0];
        let less = [];
        let greater = [];
        for (let i = 1; i < list.length; i++) {
            list[i] > pivot
                ? greater.push(list[i])
                : less.push(list[i]);
        }
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

const a = generator(1000);
const b = quickSort([...a]);
console.log(a);
console.log(b);
