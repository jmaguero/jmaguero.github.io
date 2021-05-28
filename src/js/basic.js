const daysOutOfCigar = document.getElementById("daysOutOfCigar");
const quittingDate = new Date("2020/4/30");
const actualDate = new Date();
const noSmokingCount = actualDate.getTime() - quittingDate.getTime();
const daysNoSmokingCount = Math.round(noSmokingCount / (1000 * 3600 * 24));
daysOutOfCigar.innerHTML = daysNoSmokingCount;