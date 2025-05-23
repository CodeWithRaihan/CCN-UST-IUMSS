
function toggleInfo(button, type) {
const card = button.closest('.student-card');
 const sections = card.querySelectorAll('.card-info');
 sections.forEach(sec => sec.style.display = 'none');

const target = card.querySelector(`.card-info.${type}`);
if (target) {
 target.style.display = 'block';
 }
}
