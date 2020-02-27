function main(): void {
  // CAS01
  let myVar; // ici myVar aura le type any ,on pas specifé de type a la declaration
  myVar = 132;
  myVar = "txt"; // en peut donc lui affecter n'importe quelle type sans error

  // CAS02
  let age = 32;
  age = 33;
  //  age= "xtxtx" // en ne peut pas affecter un autre type que du numbre ,specifier implicitement a la declaration !!
  let sex: string;

  let y = 55; // declaration implecite, dorenavant  Y n'acceptera que des number

  let tab: string[] = ["ff", "gg", "hh"]; // declaer un tableau
  // les structure de donnes

  let stock: (number | string)[] = [2, "repture", 15]; //
  let data: (number | string)[] = []; // declar un array qui peut contenir des number et des string ..

  let userData: { name: string; age: number; isMajor: boolean } = {
    name: "max",
    age: 32,
    isMajor: true
  };

  // enums
  enum WeekDays {
    Lundi,
    Mardi,
    Mercred,
    Jeudi,
    Vendredi,
    Samdi,
    Dimanche
  }

  //   console.log(WeekDays[4]); // -> Vendredi  >> car l'index commence par 0

  // tulpes
  let Identity: [string, number] = ["jim", 29]; // si j'ajout une chaine apres le 29, TS declanchera une error car les tuples n'accepte qu'une valeur par type !!
  console.log("tuples Identity > ", Identity); // tuples Identity >  (2) ["jim", 29]
  let Identity2: [string, number, string] = ["jim", 29, "rhon"];
  console.log("tuples Identity2 > ", Identity2); // tuples Identity2 >  (3) ["jim", 29, "rhon"]
  // alert(laSomme(150,200));

  // test 07
  helloWord();
}

function laSomme(a1: number, a2: number): number {
  return (a1 + a2) * 3;
}

// test 07 :  le type void
function helloWord(): void {
  console.log(
    " cette fct hello ne return pas de val , il affiche juste un log !!!! "
  );
}

/// execute main
main();
