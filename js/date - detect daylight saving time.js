/*
detect daylight savings time

in new york timezone:
start: 2nd sunday of march    at 02:00 am (clocks move 1 hour forward to 03:00, making a 23-hour day)
end:   1st sunday of november at 02:00 am (clocks move 1 hour back    to 01:00, making a 25-hour day)


notes:
pre-2007, dst started in april
a future us law could change things

*/

// get new york dst dates
function getNewYorkDstDates(year) {
  const nthSunday = (month, n) => {
    const date = new Date(Date.UTC(year, month-1, 1)); // start at 1st day of month
    const day = date.getUTCDay(); // 0=sunday,1=monday,...
    const delta = (7 - day) % 7; // days until first sunday
    const firstSunday = 1 + delta;
    return new Date(Date.UTC(year, month-1, firstSunday + 7 * (n - 1))); // nth Sunday
  }
  const dstStart = nthSunday(3, 2);
  const dstEnd = nthSunday(11, 1);
	dstStart.setUTCHours(7); // 02:00 am ny local = 07:00 utc
	dstEnd.setUTCHours(6);   // 02:00 am ny local = 06:00 utc
  return {dstStart, dstEnd};
}
const {dstStart, dstEnd} = getNewYorkDstDates(2025);
dstStart.toUTCString() // 'Sun, 09 Mar 2025 07:00:00 GMT'
dstEnd.toUTCString()   // 'Sun, 02 Nov 2025 06:00:00 GMT'



// detect nth sunday of month
function isNthSundayOfMonth(dateTuple, nthSunday) {
	const date = new Date(Date.UTC(...dateTuple));
	if (nthSunday < 1 || nthSunday > 5) throw Error('nthSunday must be between 1 and 5');
	const isSunday = date.getUTCDay() === 0;
	if (!isSunday) return false;
	// determine which sunday it is by counting from start of month
	const dayOfMonth = date.getUTCDate();
	const sundayNumber = Math.floor((dayOfMonth - 1) / 7) + 1;
	return sundayNumber === nthSunday;
}
isNthSundayOfMonth([2025,2,9], 2)  // true  (march 9th 2025 is 2nd sunday)
isNthSundayOfMonth([2025,2,2], 1)  // true  (1st sunday)
isNthSundayOfMonth([2025,2,16], 3) // true  (3rd sunday)
isNthSundayOfMonth([2025,2,23], 4) // true  (4th sunday)
isNthSundayOfMonth([2025,2,30], 5) // true  (5th sunday)
isNthSundayOfMonth([2025,2,30], 4) // false (30th is 5th sunday)
