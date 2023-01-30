// Уравнение
// Решить в целых числах уравнение ax + b = 0.

const solving = (a, b) => {
    if (a===0 && b ===0) {
        console.log('INF');
    }
    else if (b % a === 0) {
        const ans = -(Math.floor(b/a))
        console.log(ans !== -0 ? ans : 0);
    }
    else {
        console.log('NO')
    }
}

const a = 6 //+prompt();
const b = -2 //+prompt();

solving(a, b);