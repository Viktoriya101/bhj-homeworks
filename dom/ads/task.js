document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let index = 0;

        const rotate = () => {
            const current = cases[index];
            current.classList.remove('rotator__case_active');

            index = (index + 1) % cases.length;
            const next = cases[index];

            next.classList.add('rotator__case_active');
            next.style.color = next.dataset.color;

            setTimeout(rotate, next.dataset.speed);
        };

        const activeCase = rotator.querySelector('.rotator__case_active');
        if (activeCase) {
            activeCase.style.color = activeCase.dataset.color;
        }

        const initialSpeed = activeCase ? activeCase.dataset.speed : 1000;
        setTimeout(rotate, initialSpeed);
    });
});