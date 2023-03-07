let tree = {
    "1": { key: "1", 2: 7, 3: 9, 6: 14 },
    "2": { key: "2", 3: 10, 4: 15 },
    "3": { key: "3", 6: 2, 4: 11 },
    "6": { key: "6", 5: 99 },
    "4": { key: "4", 5: 6, 3: 11 },
    "5": { key: "5" }
}
let queue = [{ key: "1", val: tree[1] }];
let marked = [];
let dist = [];
let res = [];

for (let index in tree) {
    dist[index] = 999;
}

dist[1] = 0;

res.push({ _key: 1, prev: tree[1] })

while (queue.length) {
    let item = queue.shift();
    if (marked[item.key]) {
        continue
    }
    marked[item.key] = true;
    for (let _key in item.val) {
        if (isNaN(Number(_key))) {
            continue
        }

        if (dist[_key] > dist[item.key] + item.val[_key]) {
            dist[_key] = dist[item.key] + item.val[_key]
            queue.push({ key: _key, val: tree[_key] })
            res = res.filter((c) => c._key != _key)
            res.push({ _key, prev: item })
        }
    }
}
let kek = res.find((c) => c._key == 5);
let path = [];
while (kek?._key != 1) {
    path.push(kek?._key)
    kek = res.find((c) => c._key == kek?.prev?.key)
}
path.push(kek?._key)

console.log(path.reverse().join("->"));
