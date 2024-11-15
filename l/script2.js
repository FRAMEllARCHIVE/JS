document.addEventListener('DOMContentLoaded', () => {
    // Remove any existing content from the body
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'black';

    let reloadScript = () => {
        const existingScript = document.querySelector('script[src="/l/script.js"]');
        if (existingScript) {
            existingScript.remove(); // Remove the existing script if present
        }
        let newScript = document.createElement('script');
        newScript.src = '/l/script.js';
        document.body.appendChild(newScript);
    };

    // Create a centered container
    let container = Object.assign(document.createElement('div'), {
        style: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center;'
    });
    document.body.appendChild(container);

    // Create a red button
    let button = Object.assign(document.createElement('button'), {
        textContent: 'Reload Script',
        style: 'padding: 1rem 2rem; font-size: 1.5rem; color: white; background-color: red; border: none; border-radius: 0.5rem; cursor: pointer; box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.5);'
    });

    // Attach the reloadScript function to the button's click event
    button.addEventListener('click', reloadScript);
    container.appendChild(button);
});
                                  
