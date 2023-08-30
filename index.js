document.addEventListener('keyup',(event) => {
  
    const keycodeDisplay = document.getElementById('keycodeDisplay');
    const keyDisplay = document.getElementById('keyDisplay');

    const keyName = event.key;
    // const keyCode = event.keyCode 

    const keyDisplayText = `You Pressed ${keyName}`;
    const keycodeDisplayText = `${event.keyCode }`;

    keyDisplay.textContent = keyDisplayText;
    keycodeDisplay.textContent = keycodeDisplayText;
  });
  
  