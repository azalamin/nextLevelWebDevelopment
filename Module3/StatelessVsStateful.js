// const counter = (amount) => {
//     let count = 0;
//     count += amount;
//     console.log(count)
// };

// counter(3)
// counter(2)


// const counter = {
//     count: 0,

//     add(amount) {
//         this.count += amount
//     },
//     print() {
//         console.log(this.count)
//     }
// }

// counter.add(3)
// counter.add(4)
// counter.print()



class Counter {
    constructor(count) {
        this.count = count;
    };

    add(amount) {
        this.count += amount;
    };
    print() {
        console.log(this.count)
    }
}

const counter1 = new Counter(0);

counter1.add(30)
counter1.add(20)
counter1.print()

const counter2 = new Counter(40)
counter2.add(30)
counter2.add(5)
counter2.print()