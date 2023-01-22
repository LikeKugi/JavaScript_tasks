// n школьников делят k яблок “поровну”, то есть так, чтобы количество яблок,
// доставшихся любым двум школьникам, отличалось бы не более, чем на 1.
// Программа должна вывести количество школьников, которым достанется яблок меньше, чем некоторым из их товарищей.

// const students = +prompt();
// const apples = +prompt();

function countLessStudents(n, supply) {
    const bigger = supply % n;
    console.log((n - bigger) % n);
}

countLessStudents(7, 30)

countLessStudents(7, 28)