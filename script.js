var nr1 = Number(prompt("introduceti primul numar"));
var nr2 = Number(prompt("introduceti al doilea numar"));
var nr3 = Number(prompt("introduceti al treilea numar"));
var op = Number(prompt("Alege un numar de la 1 la 4"));

switch (op) {
  case 1: {
    console.log(nr1 + nr2 + nr3);
    break;
  }
  case 2: {
    if (nr1 >= nr2 && nr1 >= nr3) {
      console.log(nr1);
    } else if (nr2 >= nr1 && nr2 >= nr3) {
      console.log(nr2);
    } else if (nr3 >= nr2 && nr3 >= nr1) {
      console.log(nr3);
    }
    break;
  }
  case 3: {
    console.log(nr1 + nr3);
    break;
  }
  case 4: {
    var nr4 = [nr1, nr2, nr3];
    console.log(nr4);
    break;
  }
}
