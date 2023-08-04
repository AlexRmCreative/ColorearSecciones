ChangeColor = (color) => {
    let container = document.querySelector('.container');
    let sidebar = document.querySelector('.sidebar');

    inputTags = document.getElementsByTagName('input');
    for (i = 0; i < inputTags.length; i++) {
        if (inputTags[i].type == 'radio' && inputTags[i].checked) {
            if (inputTags[i].value == 'bg') {
                container.classList.forEach(className => {
                    if (className.startsWith('bg-')) {
                        container.classList.remove(className);
                    }
                });
                container.classList.add(`bg-${color}`);
            } else {
                sidebar.classList.forEach(className => {
                    if (className.startsWith('bg-')) {
                        sidebar.classList.remove(className);
                    }
                });
                sidebar.classList.add(`bg-${color}`);
            }
        }
    }
}
