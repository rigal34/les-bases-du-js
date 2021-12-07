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

//null variable dont le type la valeur est null qui vaut rien 0 son type est nul.

//undefined  ce n'est pas définis on ne c'est ce que sait

let arbre;

console.log(arbre); //results = undefined qui n'est pas définit


let arbres = null;//elle à sa valeur qui n'est pas indéfinit sa valeur est null
console.log(typeof arbres);//résults type objetnet sa valeur à l'intérieur est null


// ======================================================================================================================================================================================================================================================================================================================================
//                     L      EEEEE   SSS         OOO   PPPP   EEEEE  RRRR     A    TTTTT  EEEEE  U   U  RRRR    SSS
//      /      /       L      E      S           O   O  P   P  E      R   R   A A     T    E      U   U  R   R  S
//     /      /        L      EEE     SSS        O   O  P   P  EEE    R   R  A   A    T    EEE    U   U  R   R   SSS
//    /      /         L      E          S       O   O  PPPP   E      RRRR   AAAAA    T    E      U   U  RRRR       S
//   /      /          L      E          S       O   O  P      E      R  R   A   A    T    E      U   U  R  R       S
//  /      /           LLLLL  EEEEE  SSSS         OOO   P      EEEEE  R   R  A   A    T    EEEEE   UUU   R   R  SSSS
// ======================================================================================================================================================================================================================================================================================================================================
// * * * // les operateurs


 console.log(4**5); //opérateur de puissnce est **


 //les opérateurs d'affectation


//  let total = 0;

//  total = total + 1 ; //acrémente ajout de 1 en 1 de + 1 result 1

//  console.log(total);

//  //même principe mais plus rapide

//  let totals = 0;

//  totals ++;
//  totals ++;
//  totals ++;
//  totals ++;
//  totals ++;

//  console.log(totals);//résults 5



//même principe
 let totaux = 0;

 ++ totaux ;

 console.log(totaux);//résults 1



 
//divers façon d'icrémenter

//  let x = 4;

//  total = ++x;

//  console.log(total);//résults 5


 
//  let x = 4;

//  x++;

//  total = x;

//  console.log(total);//résults 5



// =================================================================================================================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS         SSS   TTTTT  RRRR   U   U   CCC   TTTTT  U   U  RRRR   EEEEE   SSS        DDD    EEEEE        CCC    OOO   N   N  TTTTT  RRRR    OOO   L      EEEEE
//      /      /  L      E      S           S        T    R   R  U   U  C   C    T    U   U  R   R  E      S           D  D   E           C   C  O   O  NN  N    T    R   R  O   O  L      E
//     /      /   L      EEE     SSS         SSS     T    R   R  U   U  C        T    U   U  R   R  EEE     SSS        D   D  EEE         C      O   O  N N N    T    R   R  O   O  L      EEE
//    /      /    L      E          S           S    T    RRRR   U   U  C        T    U   U  RRRR   E          S       D   D  E           C      O   O  N  NN    T    RRRR   O   O  L      E
//   /      /     L      E          S           S    T    R  R   U   U  C   C    T    U   U  R  R   E          S       D  D   E           C   C  O   O  N   N    T    R  R   O   O  L      E
//  /      /      LLLLL  EEEEE  SSSS        SSSS     T    R   R   UUU    CCC     T     UUU   R   R  EEEEE  SSSS        DDD    EEEEE        CCC    OOO   N   N    T    R   R   OOO   LLLLL  EEEEE
// =================================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //les structures de contrôle


// let x = 5;

// let y = 5;

// if (x >= y) {
//     console.log("x est inférieur à y");
// }else{
//     console.log("x est supérieur à y");
// }


let x = 6;

let y = "5";

// if (x) {                       //en mettant entre parenthése on teste si x est true
//     console.log("existe");

   
// }

// if (!x) {                       //en mettant entre parenthése avec !  on teste l'inverse  si x est false
//     console.log("existe");

   
// }

//on peut tester des égalités est ce x est y son trictement égaux

// if (x === y) {                      
//     console.log("True !");

   
// }else{
//     console.log("false!");
// }

// === teste la valeur et le type

// == teste juste si la valeur est la même

// = n'est plus un comparateur mais un distributeur de valeur 

//!==  permet de contrôler si il ne sont pas égaux


// if (x === y || x > 3) {      //est-ce x et y sont strictement égaux en type et valeur ou x supérieur à 5                
//     console.log("True !");

   
// }else{
//     console.log("false!");
// }                          //&& se dit espaluette

// if (x === y && x > 3 && y < 10) {      //est-ce x et y sont strictement égaux en type et valeur et et  x supérieur à 5 et et y inférieur à 10               
//     console.log("True !");

   
// }else{
//     console.log("false!");
// }

if (x === y) {      //est-ce x et y sont strictement égaux en type et valeur               
    console.log("True !");

             // je peux tester d'autre chose les valeurs
}else if(x == y){                                                          //la scope est une zone d'action entre les accolades
    console.log("x et y égaux en valeur");
}else{
    console.log(x + " et " + y + " ne sont du tout égaux"); //je concaténe en même temps ancienne méthode pour petite phrase
    console.log(`${x} et ${y} ne sont du tout égaux`); //je concaténe en même temps nouvelle méthode pour grande phrase
}

// une façon de les faires plus cours les if else!!!!!! sur une seule ligne

// if (x == y) console.log("True !");

// en version terner
//est ce que x est égal à y ? alors valeur si vrais on fait un console log de true : valeur si faut console log de false
// x == y ? console.log("True !") : console.log("false");