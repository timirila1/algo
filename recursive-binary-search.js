// Бинарный поиск с рекурсией
// Кажется можно найти более изящное решение
const generator = count => {
    const array = [];
    for(let i = 0; i < count; i++) {
        array[i] = i * 2;
    }
    return array;
}

const recursiveBinarySearch = (list, val, st, end) => {
    st = st ? st : 0;
    end = end ? end : list.length - 1;
    let mid = Math.floor((st + end) / 2);

    if(list[mid] !== val && st < end) {
        if (val > list[mid]) {
            st = mid + 1;
        } else {
            end = mid - 1;
        }
        return recursiveBinarySearch(list, val, st, end);
    } else {
        return list[mid] === val ? mid : -1;
    }
}

const data = generator(100);
console.log(data);
console.log(recursiveBinarySearch(data, 68));