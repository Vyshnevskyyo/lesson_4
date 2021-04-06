var record = [];
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Введён недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Число вне допустимого диапазона');
        return false;
    }
    return true;
}
function answer(q, ans1, ans2) {
    var ok = false;
    do {
        event = +prompt(q + ans1 + ans2 + '-1 - Выход из игры');
        if (event == -1) {
            return -1;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1: record.push([q, ans1]);
            break;
        case 2: record.push([q, ans2]);
            break;
        case -1: record.push([q, 'Покинули игру']);
            break;
    } return event;
}
switch (answer(works.a00, works.a1, works.a2)) {
    case 1: //Первое действие, если в первом окне ввели '1', открываем серию окон - окно '2'.
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1: //Второе действие, если в окне '2' ввели '1', переходим к окну '4'.
            case 2: //Если ввели '2', переходим к окну '4'.
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: //Второе действие.
                break;
            default:
                alert('Ошибка!');
        } break;
    case 2: //Первое действие, если в окне '1' ввели '2', то переходим к окну '3'.
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: //Второе действие, если в окне '2' ввели '1', то переходим к окну '4'.
            case 2: //Если ввели '2', переходим к окну '4'.
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие.
                break;
            default:
                alert('Ошибка!');
        } break;
    case -1: //Первое действие.
        break;
    default:
        alert('Ошибка!');
}
alert('Благодарим за игру!');
console.log(record);
var step = +prompt('Введите номер хода.');
console.log(step);
var stepRecords = 'В ходе № ' + step + ' ' + record[step - 1][0] + 'Ваш выбор ' + record[step - 1][1];
alert(stepRecords);