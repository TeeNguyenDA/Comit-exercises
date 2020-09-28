alert("Enter the current hour out of 0 to 23");

let currentHour = Number(prompt('Enter the current hour'));
if (currentHour < 0 || currentHour > 23) {
    alert("Your input is incorrect");
} else if (currentHour < 8 || currentHour >= 18) {
    alert("We are currently out of office hours");
} else {
    alert("We are open");
}