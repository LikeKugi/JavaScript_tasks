function createSelectNode(arr, sl) {
    const selectNode = document.createElement('select');
    const opt = document.createElement('option');
    opt.textContent = 'Select option';
    opt.disabled = true;
    selectNode.append(opt);
    for (let obj of arr) {
        if (obj instanceof Object) {
            const optNode = document.createElement('optgroup');
            for (let k in obj) {
                const kNode = document.createElement('option');
                kNode.value = k;
                kNode.textContent = obj[k];
                optNode.append(kNode);
            }
            selectNode.append(optNode);
        } else {
            const kNode = document.createElement('option');
            kNode.value = obj;
            kNode.textContent = obj;
            selectNode.append(kNode);
        }

    }

    if (sl) {
        const optionEls = selectNode.querySelectorAll('option');
        console.log(optionEls)
        optionEls[sl].selected = true;
    } else {
        selectNode.querySelector("option").selected = true;
    }

    document.body.append(selectNode);

}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

createSelectNode(objects, 4)

let testObjs = [1, 2, 'три', 'четыре', '...']
createSelectNode(testObjs, 3)