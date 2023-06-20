const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function totalSquare(obj) {
    let square = 0;
    obj.shops.forEach(shop => {
        square += shop.width * shop.length;
    })

    /*     for (let i = 0; i < obj.shops.length; i++) {
            square += obj.shops[i].width * obj.shops[i].length;
        } */
    console.log(`Общая площадь помещения: ${square}`);
    return square;
}
function volume(obj) {
    let square = totalSquare(shoppingMallData);
    console.log(`Общий объём помещения: ${square * shoppingMallData.height}`);
    return square * shoppingMallData.height;
}

function isBudgetEnough(data) {
    let needMoney = volume(shoppingMallData) * data.moneyPer1m3;
    if (data.budget < needMoney) {
        console.log(`Бюджета недостаточно, вам надо заплатить: ${needMoney}. А имеете вы всего: ${data.budget}`);
        return `Бюджета недостаточно`;
    }
    else {
        console.log(`Бюджета достаточно, вы должны: ${needMoney}. И у вас хватит ваших имеющихся средств: ${data.budget}`);
        return `Бюджета достаточно`;
    }
}
isBudgetEnough(shoppingMallData);



