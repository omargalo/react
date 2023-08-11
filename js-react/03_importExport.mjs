const bebes = ['bebe 1', 'bebe 2', 'bebe 3']
const bebesDurmiendo = ['bebe dormido 1', 'bebe dormido 2', 'bebe dormido 3']
const otrosBebes = []
//Forma oldschool
/* module.export = {
    bebes,
    bebesDurmiendo
} */

const fn1 = () => {
    console.log('Importando función 1');
}

function fn2() {
    console.log('Importando función 2');
}

export { bebesDurmiendo, otrosBebes, fn1, fn2 }
export default bebes
