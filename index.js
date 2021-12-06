// ceci un  commentaire
/*ceci 
est 
un 
commentaire*/

//pour gagner du temps CTRL + /


// =======================================================================================================================================================================================================================================================================================
//                V   V    A    RRRR   III    A    BBB    L      EEEEE
//      /      /  V   V   A A   R   R   I    A A   B  B   L      E
//     /      /   V   V  A   A  R   R   I   A   A  BBBB   L      EEE
//    /      /     V V   AAAAA  RRRR    I   AAAAA  B   B  L      E
//   /      /      V V   A   A  R  R    I   A   A  B   B  L      E
//  /      /        V    A   A  R   R  III  A   A  BBBB   LLLLL  EEEEE
// =======================================================================================================================================================================================================================================================================================
// * * * //variable

console.log("Hello");

let maVariableSuperCool = "KamelCase";

console.log(maVariableSuperCool);


var unTexte = "voici un texte";

console.log(unTexte);

unTexte = "nouveau texte...."

console.log(unTexte);

const prenom = "justine";
console.log(prenom);


let unChiffre = 24;

unChiffre = 12;

console.log(unChiffre);


/////////////////////////////////////////////////////////////////

let chiffre =24;
let chiffres = 47;

//concateination

let nouvelleChaine = "Le chiffre attendu est : " + chiffre +  " degrés";

console.log(nouvelleChaine);      ////résults = Chaine précédente : je suis une chaîne de caractére


//on obtient le même résultat avec cette syntaxe (backttice ou templete string) `` cela évite de mettre les plus




 let nouvelleChaines = `Le chiffre attendu est : ${chiffres} degrés`;  //${chiffre} ==>pour séparer cette variable  indiquer un nombre!!!!

console.log(nouvelleChaines); //résults ==>> Le chiffre attendu est : 47 degrés


// ===================================================================================================================================================================================================================================================================================================
//                     L      EEEEE   SSS        TTTTT  Y   Y  PPPP   EEEEE   SSS
//      /      /       L      E      S             T    Y   Y  P   P  E      S
//     /      /        L      EEE     SSS          T     Y Y   P   P  EEE     SSS
//    /      /         L      E          S         T      Y    PPPP   E          S
//   /      /          L      E          S         T      Y    P      E          S
//  /      /           LLLLL  EEEEE  SSSS          T      Y    P      EEEEE  SSSS
// ===================================================================================================================================================================================================================================================================================================
// * * * // les types


let string = "je suis une chaîne";

let number = 24;

let boolean = true;

let array = ["je", "suis", 24, false]; //crochet = tableau

// let object = {}; // accolade = objet

let object = {
    prenom: "Audrey",  //index: "valeur",
    age: 34,           //index: "valeur",
    ville: "Bordeau",   //index: "valeur", 
};

//pour connaître le type de ma variable "typeof"
console.log(typeof array);


