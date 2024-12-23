document.addEventListener('DOMContentLoaded', () => {
    let container = Object.assign(document.createElement('div'), { style: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; user-select: none; -webkit-tap-highlight-color: transparent; background-color: black; display: flex; align-items: center; justify-content: center;' }); document.body.appendChild(container);
    let card = Object.assign(document.createElement('div'), { style: 'width: calc(100% - 2rem); height: calc(100% - 2rem); background-color: white; border-radius: 2rem; box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; align-items: center; justify-content: center;' }); container.appendChild(card);
    let circle = Object.assign(document.createElement('div'), { style: 'position: absolute; top: 2rem; left: 2rem; width: 3rem; height: 3rem; background-color: transparent; border-radius: 2rem; overflow: hidden;' }); 
    let circleImage = Object.assign(document.createElement('img'), { src: '1.jpg', style: 'width: 100%; height: 100%; object-fit: cover;' }); circle.appendChild(circleImage); container.appendChild(circle);
});
