// Pilih angka acak antara 1 hingga 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-btn').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guess-input').value);
    let resultDisplay = document.getElementById('result');
    let attemptsDisplay = document.getElementById('attempts');
    
    // Periksa apakah input valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDisplay.innerText = 'Cuman bisa angka 1-100!! ga bisa yang lain!!';
        resultDisplay.style.color = 'red';
        return;
    }

    attempts++; // Tambahkan jumlah percobaan

    if (userGuess === randomNumber) {
        resultDisplay.innerText = `Akhirnya!! Lu udah nyoba sampe ${attempts} kali.`;
        resultDisplay.style.color = 'green';
    } else if (userGuess > randomNumber) {
        resultDisplay.innerText = 'Kebanyakan, Coba lagi!';
        resultDisplay.style.color = 'red';
    } else {
        resultDisplay.innerText = 'Kurang banyak, Coba lagi!';
        resultDisplay.style.color = 'red';
    }
    

    attemptsDisplay.innerText = `Jumlah Percobaan: ${attempts}`;
});


