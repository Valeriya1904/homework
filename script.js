function first() {
    for (let pound = '#'; pound.length <= 7; pound += '#') {
        console.log(pound)
    }
}
first();


for (i = 1; i <= 4; i++) {
    let k = '#';
    for (let count = 1; count < 4; count ++)
    k += ' #'
    console.log(k);
    let l = '';
    for (let count = 0; count < 4; count++)
    l += ' #';
    console.log(l);
}

let num = 0;
do {
    num  = prompt("Please enter a number greater than 100")
} while (num < 100 && num);