const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family2 = [];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = `Семья состоит из: ${arr.join(' ')}`;
    console.log(str);
}
showFamily(family2);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => { console.log(item.toLowerCase()); })
}

standardizeStrings(favoriteCities);
