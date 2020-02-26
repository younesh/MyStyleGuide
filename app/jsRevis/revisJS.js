//// just for test , do not commit it man 

function* generator(i) {
    let j = 0;
    for (let i = 0; i < 1000; i++) {
        j++;
        console.log(i);
        console.log(j);
        yield i * i;

    }
}

const gen = generator(10);
console.log(gen.next().value);


/////

for (let i = 0; i <= 10; i++) {
    if (!(i % 2 == 0)) {
        continue;
    } else {
        console.log(i);

    }
}



//// exo ; les fct constructor ..

function personne(Name, Age) {
    this.name = Name;
    this.age = Age;
}

// comment en declare un méthode pour une fct constructor par le prototype
personne.prototype.sePresent = function() {
    console.log("bjr je suis " + this.name + " et j'ai " + this.age + "ans");
}

p1 = new personne("samir", 30);
p2 = new personne("ayoub", 32);

console.log(p1); // personne {name: "samir", age: 30}
console.log(p2); // {name: "ayoub", age: 32}

p1.sePresent(); // bjr je suis samir et j'ai 30ans
p2.sePresent(); // bjr je suis ayoub et j'ai 32ans

console.log("p1.sePresent === p2.sePresent  --> ",
    p1.sePresent === p2.sePresent); // true




//// algo codinegame : exo change 
function change(cash) {
    let nbrTen = 0;
    let nbrFive = 0;
    let nbrTwo = 0;
    let Rest = cash;

    if (Rest < 2 || Rest > 9007199254740991) {
        return null;
    }

    // nbre de ten 
    if (Rest >= 10) {
        nbrTen = parseInt(Rest / 10);
        Rest = Rest % 10;
    }

    // nbr five 
    if (Rest >= 5) {
        nbrFive = parseInt(Rest / 5);
        Rest = Rest % 5;
    }

    // nbr two 
    if (Rest >= 2) {
        nbrTwo = parseInt(Rest / 2);
        rest = cash % 2;
    }


    return {
        two: nbrTwo,
        five: nbrFive,
        ten: nbrTen
    }
}

console.log("cash = 1 >> ", change(1));
console.log("cash = 42 >>", change(42));
console.log("cash = 127 >>", change(127));


/// algo codinegame : fct return true si ellement est ds une position paire , return false sinon

function isOneEventPosition(table, pos) {
    if (table.indexOf(pos) % 2 == 0) {
        return true; // pair
    } else {
        return false; // pair
    }
}
var t = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(isOneEventPosition(t, 6));
console.log(isOneEventPosition(t, 3));


////// algo function twin

function isTwin(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a.length != b.length) {
        return false;
    } else {
        for (item of a) {
            if (b.indexOf(item) == -1) {
                return false;
            }
        }
    }
    return true;
}

console.log(isTwin("acb", "bca")); // -> true
console.log(isTwin("acb", "bcad")); // false
console.log(isTwin("Dacb", "bcad")); // true