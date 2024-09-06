document.addEventListener("DOMContentLoaded", function () {
    let currentLevel = 1;
    const totalLevels = document.querySelectorAll('.level').length;

    function showCurrentLevel() {
        let levels = document.querySelectorAll('.level');
        levels.forEach((level, index) => {
            if (index + 1 === currentLevel) {
                level.classList.add('active');
            } else {
                level.classList.remove('active');
            }
        });
    }

    showCurrentLevel();

    window.completeLevel = function (level) {
        if (level === currentLevel) {
            currentLevel++;
            if (currentLevel > totalLevels) {
                showCongratulations();
            } else {
                showCurrentLevel();
            }
        }
    };

    function showCongratulations() {
        let levels = document.querySelectorAll('.level');
        levels.forEach(level => level.classList.remove('active'));
        document.getElementById('congratulations').style.display = 'block';
    }
});