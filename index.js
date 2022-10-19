var pContainer = document.querySelector('.placeholder');


document.querySelector('.btn').addEventListener('click', () => {
    var char = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordLenght = 8;
    let password = '';

    for(var i = 0; i<passwordLenght; i++){
        var randDomNum = Math.floor(Math.random() * char.length);
        password += char.substring(randDomNum, randDomNum +1);
    }
    pContainer.innerHTML = password;
});