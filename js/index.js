window.onscroll = function() {
  let headRoom = window.pageYOffset;
  console.log(headRoom);
  if (headRoom < 3801) {
    document.querySelector('.six').classList.remove('notApparent');
  }
  if (headRoom > 3800) {
    document.querySelector('.six').classList.add('notApparent');
  }
  if (headRoom < 2924) {
    document.querySelector('.three').classList.remove('notApparent');
  }
  if (headRoom > 2925) {
    document.querySelector('.three').classList.add('notApparent');
  }
  if (headRoom < 1199) {
    document.querySelector('.two').classList.remove('notApparent');
  }
  if (headRoom > 1200) {
    document.querySelector('.two').classList.add('notApparent');
  }
  if (headRoom > 110) {
    document.querySelector('.one').classList.add('notApparent');
  }
  if (headRoom < 109) {
    document.querySelector('.one').classList.remove('notApparent');
  }
};
