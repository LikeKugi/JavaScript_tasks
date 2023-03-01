// An infinite number of shelves are arranged one above the other in a staggered fashion.
//     The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3
//     (the cat cannot climb on the shelf directly above its head)

// Find the minimum number of jumps to go from start to finish

function solution(start, finish) {
    // Mew
    let diff = finish - start;
    return Math.floor(diff / 3) + (diff % 3)
}

// let [start, finish] = prompt().split(' ').map(Number)
// console.log(solution(start, finish))

// console.log(solution(2, 4))
// console.log(solution(227, 755))
// console.log(solution(21, 812))
console.log(solution(1, 25)) // 1 - 4 - 7 - 10 - 13 - 16 - 19 - 22 - 25