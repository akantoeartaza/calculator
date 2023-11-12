document.addEventListener('DOMContentLoaded', function () {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('#calculator button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.dataset.value;
            const operator = this.dataset.operator;
            const action = this.dataset.action;

            if (value) {
                resultInput.value += value;
            } else if (operator) {
                resultInput.value += operator;
            } else if (action === 'clear') {
                resultInput.value = '';
            } else if (action === 'calculate') {
                try {
                    resultInput.value = eval(resultInput.value);
                } catch (error) {
                    resultInput.value = 'Error';
                }
            }
        });
    });
});
