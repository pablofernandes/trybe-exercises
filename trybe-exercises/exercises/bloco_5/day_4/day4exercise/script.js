window.onload = () => { 
    let checkboxDarkModeSelector = document.getElementById('dark-mode-selector');
    checkboxDarkModeSelector.addEventListener('click', changeWhiteDarkMode);
    let colorSelector = document.getElementById('color-selector');
    colorSelector.addEventListener('change', changeFontColor);
    let fontSpacing = document.getElementById('line-height-param');
    fontSpacing.addEventListener('change', changeFontSpace);
    let fontSizing = document.getElementById('font-size-param');
    fontSizing.addEventListener('change', changeFontSize);
    let fontFamilySelector = document.querySelector('.font-selector');
    fontFamilySelector.addEventListener('click', changeFontFamily);

    function changeWhiteDarkMode(evt) {
        if (evt.target.checked === true) {
            document.body.style.color = 'White';
            document.body.style.backgroundColor = 'black';
            setUserPreferences('text-color', 'white');
            setUserPreferences('backgroundColor', 'black');
        } else {
            document.body.style.color = 'gray';
            document.body.style.backgroundColor = 'azure';
            setUserPreferences('text-color', 'gray');
            setUserPreferences('backgroundColor', 'azure');
        }
    }

    function changeFontColor (evt) {
        let optionIndex = evt.target.selectedIndex;
        let colorSelected = document.getElementsByTagName('option')[optionIndex].value;
        changeFontOfPageToDefaultColor(colorSelected);
        setUserPreferences('text-color', colorSelected);
    }

    function changeFontSpace () {
        let spaceTyped = document.getElementById('line-height-param').value;
        if (spaceTyped < "30") {
            message('Error: Space Value must be greater than 30px');
            return null;
        }
        message('');
        let text = document.querySelector('.text');
        text.style.lineHeight = spaceTyped + 'px';
        setUserPreferences('text-spacing', spaceTyped);
    }

    function changeFontSize () {
        let sizeTyped = document.getElementById('font-size-param').value;
        if (sizeTyped < "20") {
            message('Error: Font Value must be greater than 20px');
            return null;
        }
        message('');
        let text = document.querySelector('.text');
        text.style.fontSize = sizeTyped + 'px';
        setUserPreferences('text-sizing', sizeTyped);
    }

    function changeFontFamily (evt) {
        if (evt.target.checked === true) {
            let fontFamilyValue = evt.target.value;
            document.body.style.fontFamily = fontFamilyValue;
            setUserPreferences('text-font-family', fontFamilyValue);
        }
    }

    function changeFontOfPageToDefaultColor (color) {
        document.body.style.color = color;
        document.body.style.backgroundColor = 'azure';
        document.getElementById('dark-mode-selector').checked = false;
    }

    function message (msg) {
        let messageElement = document.getElementById('messages');
        messageElement.innerText = msg;
    }

    function setUserPreferences (key, value) {
        let previousPreference = getUserPreferences(key);
        if(previousPreference === null){
           localStorage.setItem(key, value);
        } else {
            localStorage.setItem(previousPreference.key, value);
        }
    }

    function getUserPreferences (key) {
        return localStorage.getItem(key);
    }
}