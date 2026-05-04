let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },
        {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function avarangeProgressByIteration(data) {
    let total = 0, students = 0;
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                //students++;
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    //students++;
                    total += subCourse[i].progress;
                }
            }
        }

    }
    return total / students;
}

console.log(avarangeProgressByIteration(students));


function avarangeProgressByRecursion(data) {

    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDataArray = avarangeProgressByRecursion(subData);

            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }
        return total;
    }

}

const result = avarangeProgressByRecursion(students);
console.log(result[0] / result[1]);
