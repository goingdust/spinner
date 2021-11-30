const spinnerchars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

const printSpinner = function(array) {
  let i = 0;
  intervalId = setInterval(() => {
    process.stdout.write('\r' + array[i++] + '     ');
    if (i > array.length - 1) {
      process.stdout.write('\n');
      clearInterval(intervalId);
    }
  }, 200); 
};

printSpinner(spinnerchars);