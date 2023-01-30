// Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = (arr) => {
    maxSum = 0;
    currentSum = 0;

    for (const el of arr) {
        currentSum += el;
        if (currentSum > maxSum) maxSum = currentSum;
        if (currentSum <= 0) currentSum = 0;
    }

    console.log(maxSum)
}


getMaxSubSum([-1, 2, 3, -9]); // = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]); // = 6
getMaxSubSum([-1, 2, 3, -9, 11]); // = 11
getMaxSubSum([-2, -1, 1, 2]); // = 3
getMaxSubSum([100, -9, 2, -3, 5]); // = 100
getMaxSubSum([1, 2, 3]); // = 6 (берём все)