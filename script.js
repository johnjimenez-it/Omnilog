// Get the button element by its ID
var logNewMediaBtn = document.getElementById('logNewMediaBtn');
var logNewMediaBtn2 = document.getElementById('logNewMediaBtn2');
var myProfileBtn = document.getElementById('myProfileBtn');
var search = document.getElementById('search');

// Add a click event listener to the button
logNewMediaBtn.addEventListener('click', function() {
  
  window.location.href = 'Search'; 
});

logNewMediaBtn2.addEventListener('click', function() {
  
  window.location.href = 'Search'; 
});

myProfileBtn.addEventListener('click', function() {
  
  window.location.href = 'profile'; 
});

search.addEventListener('click', function() {
  
  window.location.href = 'Search'; 
});
