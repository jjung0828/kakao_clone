const currentTime = document.querySelector('.time');

function timeShowing() {
  const date = new Date();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours > 12) {
    currentTime.innerHTML = `오후 ${hours - 12}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  } else if (hours === 0) {
    currentTime.innerHTML = `오전 ${hours + 12}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  } else if (hours === 12) {
    currentTime.innerHTML = `오후 ${hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  } else {
    currentTime.innerHTML = `오전 ${hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  }
}

setInterval(timeShowing, 1000);
timeShowing();
