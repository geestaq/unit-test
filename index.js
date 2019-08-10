const formatDate = (timeInSeconds) => {
  let seconds = timeInSeconds || 0;

  //godziny
  let hours = 0;
  if(seconds > 3600) {
    hours = parseInt(seconds / 3600);
    seconds -= hours * 3600;
  }
  hours = (hours > 0) ? `${hours}h` : '';

  //minuty
  let minutes = 0;
  if(seconds > 60) {
    minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
  }
  minutes = (minutes > 0) ? ` ${minutes}m` : '';

  //sekundy
  seconds = (seconds > 0
    || (seconds + minutes + hours) == 0) ? ` ${seconds}s` : '';

  return `${hours}${minutes}${seconds}`.trim();
  //a
}

module.exports = formatDate;
