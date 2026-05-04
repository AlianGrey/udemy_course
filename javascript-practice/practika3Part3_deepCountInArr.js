/* Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8 */
let arr = [1, 5, 3];
//let counter = 0;

//varian 1 by loop
function deepCount(a) {
    let counter = 0;
    counter += a.length;
    // console.log(a.length);
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            return counter += deepCount(a[i]);
            // counter += a.length;
            // console.log(a[i], a[i].length, counter);
        }
    }
    //  console.log(counter);
    return counter;
}

console.log(deepCount(arr));

//varian 2 by reduce
function deepCount2(a) {
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}
console.log(deepCount2(arr));