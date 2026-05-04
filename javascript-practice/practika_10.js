const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function () {
        const { languages } = this.skills;
        return `Мне ${this.age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);