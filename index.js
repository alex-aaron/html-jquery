document.addEventListener("DOMContentLoaded", () => {
  console.log('page loaded!');

  
});

const names = [
  'Alex',
  'Kyle',
  'Stan',
  'Steph',
  'Vickie',
  'Stan, R'
];


names.forEach(name => {
  var el = document.createElement('li');
  el.innerText = name;
  $("#unordered-list").append(el);
})