const what = document.getElementById('what');
const who = document.getElementById('who');
const why = document.getElementById('why');
const team = document.getElementById('team');
const diy = document.getElementById('diy');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 4 / 5;
    const whatTop = what.getBoundingClientRect().top;
    const whoTop = who.getBoundingClientRect().top;
    const whyTop = why.getBoundingClientRect().top;
    if (whyTop <= trigger) {
        diy.style.transform = 'translate(0, -203%)';
    } else if  (whoTop <= trigger) {
        diy.style.transform = '';
        team.style.transform = 'translate(0, -101%)';
    } else {
        diy.style.transform = '';
        team.style.transform = '';
    }
})