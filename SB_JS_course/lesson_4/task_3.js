// Танк едет по дороге, на которой могут быть противотанковые мины.
// Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов.
// Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл,
// в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива).
// При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1.
// Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен»,
// если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение.

const moveTank = (road) => {
    let out = ['Танк переместился:'];
    let dmg = 0;
    for (let i = 0; i < road.length; i++) {
        out.push(i + 1);
        if (road[i]) {
            dmg += 1;
            if (dmg < 2) out.push('Танк повреждён', 'Танк переместился:');
            else {
                out.push('Танк уничтожен')
                break;
            }
        }
    }
    return out.join(' ');
}

console.log(moveTank([true, true, true, true, true, true, true, true, true, true]))

console.log(moveTank([true, false, false, false, false, false, false, false, false, true]))

console.log(moveTank([false, false, false, true, false, false, false, false, false, false]))

console.log(moveTank([false, false, false, false, false, false, false, false, false, false]))