const nums = document.querySelectorAll('.num');
const replay = document.querySelector('.replay');


runAnimation();

function resetDom() {
    replay.style.opacity = "0";

    nums.forEach(num => {
        num.classList.value = 'num';
    });

    nums[0].classList.add('in');
};

function runAnimation() {

    nums.forEach((num, index) => {
        const lastNumIndex = nums.length - 1;
        // console.log(lastNumIndex);

        num.addEventListener('animationend', (e) => {

            if (e.animationName === 'fadeIn' && index !== lastNumIndex) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if (e.animationName === 'slideDown' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } else {
                replay.style.opacity = "1";
            }

        });
    });
};


replay.addEventListener('click', () => {
    resetDom();
    runAnimation();
});