// Обход графа в ширину


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['f'],
    d: ['e'],
    e: ['g'],
    f: ['g'],
    g: []
};

bfsearch = (gr, start) => {
    let dest = { [start]: 0 };
    let queue = [start];
    let used = { [start]: true };

    while(queue.length) {
        let pnt = queue.shift();
        for(let i = 0; i < gr[pnt].length; i++) {
            if(!used[gr[pnt][i]]) {
                used[gr[pnt][i]] = true;
                dest[gr[pnt][i]] = dest[pnt] + 1;
                queue.push(...gr[pnt][i]);
            }
        }
    }

    return dest;
}

console.log(bfsearch(graph, 'a'));