var age = parseInt(prompt("How old are you?"));

switch (age) {
  case 10:
    alert("You are 10 years old!!");
    break;
  case 20:
    alert("You are 20 years old!!");
    break;
  case 30:
    alert("You are 30 years old!!");
    break;
  case 40:
    alert("You are 40 years old!!");
    break;
  case 50:
    alert("You are 50 years old!!");
    break;
    case (age > 50 && age < 60):
        alert("You are between 50 and 60 years old!!");
        break;
    default:
      alert("You are " + age + " years old!")
}

switch(true) {
  case (age > 50 && age < 60):
      alert("You are between 50 and 60 years old!!");
      break;

    default:
      if (isNaN(age)) {
        alert("This is not a number!")
        break;
      }
}