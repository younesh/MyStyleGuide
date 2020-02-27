function main() {
    // CAS01
    var myVar; // ici myVar aura le type any ,on pas specifé de type a la declaration
    myVar = 132;
    myVar = "txt"; // en peut donc lui affecter n'importe quelle type sans error
    // CAS02
    var age = 32;
    age = 33;
    //  age= "xtxtx" // en ne peut pas affecter un autre type que du numbre ,specifier implicitement a la declaration !!
    var sex;
    var y = 55; // declaration implecite, dorenavant  Y n'acceptera que des number
    var tab = ["ff", "gg", "hh"]; // declaer un tableau
    // les structure de donnes
    var stock = [2, "repture", 15]; //
    var data = []; // declar un array qui peut contenir des number et des string ..
    var userData = {
        name: "max",
        age: 32,
        isMajor: true
    };
    // enums
    var WeekDays;
    (function (WeekDays) {
        WeekDays[WeekDays["Lundi"] = 0] = "Lundi";
        WeekDays[WeekDays["Mardi"] = 1] = "Mardi";
        WeekDays[WeekDays["Mercred"] = 2] = "Mercred";
        WeekDays[WeekDays["Jeudi"] = 3] = "Jeudi";
        WeekDays[WeekDays["Vendredi"] = 4] = "Vendredi";
        WeekDays[WeekDays["Samdi"] = 5] = "Samdi";
        WeekDays[WeekDays["Dimanche"] = 6] = "Dimanche";
    })(WeekDays || (WeekDays = {}));
    //   console.log(WeekDays[4]); // -> Vendredi  >> car l'index commence par 0
    // tulpes
    var Identity = ["jim", 29]; // si j'ajout une chaine apres le 29, TS declanchera une error car les tuples n'accepte qu'une valeur par type !!
    console.log("tuples Identity > ", Identity); // tuples Identity >  (2) ["jim", 29]
    var Identity2 = ["jim", 29, "rhon"];
    console.log("tuples Identity2 > ", Identity2); // tuples Identity2 >  (3) ["jim", 29, "rhon"]
    // alert(laSomme(150,200));
    // test 07
    helloWord();
}
function laSomme(a1, a2) {
    return (a1 + a2) * 3;
}
// test 07 :  le type void
function helloWord() {
    console.log(" cette fct hello ne return pas de val , il affiche juste un log !!!! ");
}
/// execute main
main();
