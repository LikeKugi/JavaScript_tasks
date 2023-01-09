const number = +prompt('enter value between 0 and 3', '');

switch (number) {
    case 0:
        alert('You entered 0');
        break;
    case 1:
        alert('You entered 1');
        break;
    case 3:
    case 2:
        alert('you entered 2 or 3');
        break;
    default:
        alert('unknown');
        break;
}