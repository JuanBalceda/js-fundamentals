function daysBetweenDates(date1, date2) {
    const DAY = 1000 * 60 * 60 * 24;
    const difference = Math.abs(date1 - date2);
    return Math.floor(difference / DAY);
}

const TODAY = new Date();
const BIRTHDAY = new Date(1992, 8, 27);

console.log(TODAY);
console.log(BIRTHDAY);
console.log(daysBetweenDates(TODAY, BIRTHDAY));

