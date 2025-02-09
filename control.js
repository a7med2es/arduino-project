function sendCommand(command) {
    const ipAddress = document.getElementById("ipAddress").value;
    fetch(`http://${ipAddress}/control?cmd=${command}`)
        .then(response => {
            if (!response.ok) {
                console.error('Network response was not ok.');
            }
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

function startAuto() {
    sendCommand('startAuto');
}


// هذا الكود للتحكم في السيارة من curser

