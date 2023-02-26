const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    e.preventDefault();
    window.deferredPrompt = event;

    //removes the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = await window.deferredPrompt;

    if (promptEvent) {
        promptEvent.prompt();
        window.deferredPrompt = null;
        butInstall.classList.toggle('hidden', true);
    } else {
        return ;
    }
    
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
