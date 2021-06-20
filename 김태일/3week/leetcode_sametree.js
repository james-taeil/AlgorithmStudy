const isSameTree = (p, q) => {
    let maxLength = 0;
    if (p.length >= q.length) {
        maxLength = p.length;
    } else if (p.length < q.length) {
        maxLength = q.length;
    } else {
        return false;
    }

    for (let i = 0; i < maxLength; i ++) {
        if (p[i] !== q[i]) {
            return false;
        }
    }
    return true;
}

p = [1,2,3]
q = [1,2,3]

console.log(isSameTree(p, q))