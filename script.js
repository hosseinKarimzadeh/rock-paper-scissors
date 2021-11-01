let btnShow = document.querySelector('button');
let result = document.querySelector('h1');
let showComputerchoise = document.querySelector('p');
let Choises = ['rock', 'paper', 'scissors'];


btnShow.addEventListener('click', () => {
    let selected = document.querySelector('input[type="radio"]:checked');
    if (!selected) {
        result.innerHTML = "Why don't you choose???"
    }
    const randomNumber = Math.floor(Math.random() * 3)
    const computerChoise = Choises[randomNumber]
    if (selected.value === computerChoise) {
        result.innerHTML = "TIE";
        document.body.style.backgroundColor = "yellow";
    } else if (selected.value === "rock") {
        if (computerChoise === "scissors") {
            result.innerHTML = "HORAAA! YOU WIN";
            document.body.style.backgroundColor = "green";
        } else {
            result.innerHTML = "YOU LOSE!!!!!!!";
            document.body.style.backgroundColor = "red";
        }
    } else if (selected.value === "paper") {
        if (computerChoise === "rock") {
            result.innerHTML = "HORAAA!" +
                " YOU WIN";
            document.body.style.backgroundColor = "green";
        } else {
            result.innerHTML = "YOU LOSE!!!!!!!";
            document.body.style.backgroundColor = "red";
        }
    } else if (selected.value === "scissors") {
        if (computerChoise === "paper") {
            result.innerHTML = "HORAAA! YOU WIN";
            document.body.style.backgroundColor = "green";
        } else {
            result.innerHTML = "YOU LOSE!!!!!!!";
            document.body.style.backgroundColor = "red";
        }
    }
    showComputerchoise.innerHTML = `computer choose ${computerChoise}`
})
