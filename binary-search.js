// Бинарный поиск

const generator = count => {
    const array = [];
    for(let i = 0; i < count; i++) {
        array[i] = i * 2;
    }
    return array;
}

const binarySearch = (tree, val) => {
    let st = 0;
    let end = tree.length - 1;
    let mid = Math.floor(end / 2);

    while(tree[mid] !== val && st < end) {
        if (val < tree[mid]) {
            end = mid - 1;
        } else if (val > tree[mid]) {
            st = mid + 1;
        }

        mid = Math.floor((st + end) / 2);
    }

    return tree[mid] === val ? mid : -1;
}

const data = generator(10);
console.log(data);
console.log(binarySearch(data, 100));