'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
        if (!blockObj.id) throw new SyntaxError(`В данных под № ${i + 1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name == SyntaxError) { console.error(e.name, e.message, e.stack); }
    else {
        throw e;
    }

}

/* const err = new SyntaxError('dgdfghfjgh');
console.log(err.name);
console.log(err.message);
console.log(err.stack); */