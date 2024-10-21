function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const resultText = `You are ${years} years, ${months} months, and ${days} days old today!`;
    document.getElementById('result').textContent = resultText;

    if (today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate()) {
        document.getElementById('result').textContent = `Happy Birthday! 🎉 You are ${years} years old today!`;

        document.getElementById('balloons').classList.remove('hidden');
        confetti.render();
    } else {
        document.getElementById('balloons').classList.add('hidden');
    }
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
