$(document).ready(function () {
  function getRandomColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return color;
  }

  $('#generateBtn').click(function () {
    const newColor = getRandomColor();
    $('#colorBox').text('Generating...');
    setTimeout(() => {
    $('#colorBox').css('background-color', newColor).text(newColor);
    $('body').css('background-color', newColor)
    $('#colorCode').text(newColor);
    $('#colorBox').effect('bounce', { times: 2, distance: 20 }, 500); // <-- bounce!
    }, 2000);
  });

  $('#colorBox').click(function () {
    const color = $(this).text();
    navigator.clipboard.writeText(color);
    $(this).text('Copied!');
    setTimeout(() => {
      $(this).text(color);
    }, 1000);
  });

});
