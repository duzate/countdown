const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');


const newAgeDate = new Date('18 Aug 2023');

setInterval(() => {
  const currentDate = new Date()
  const totalSeconds = (newAgeDate - currentDate) / 1000
  
  const days = Math.floor((totalSeconds / 3600) / 24)
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor((totalSeconds % 60) )
  
  daysText.innerText = String(days).padStart(2, '0')
  hoursText.innerText = String(hours).padStart(2, '0')
  minutesText.innerText = String(minutes).padStart(2, '0')
  secondsText.innerText = String(seconds).padStart(2, '0')

}, 1000)
