const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let team1 = [], team2 = [], team3 = [], rest = [];
    arr.sort();
    console.log(`Массив после сортировки: ${arr}`)
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            team1.push(arr[i]);
        }
        else if (i < 6) {
            team2.push(arr[i]);
        }
        else if (i < 9) {
            team3.push(arr[i]);
        }
        else {
            rest.push(arr[i]);
        }
    }
    console.log(`Первый массив: ${team1}, Второй массив: ${team2}, Третий массив: ${team3}, Оставшиеся люди: ${rest}`);

    console.log([team1, team2, team3, `Оставшиеся студенты: ${rest.length != 0 ? rest.join(', ') : '-'}`]);

    return [team1, team2, team3, `Оставшиеся студенты: ${rest.length != 0 ? rest.join(', ') : '-'}`];
}
sortStudentsByGroups(students);