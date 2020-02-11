let timerValues = process.argv.slice(2);
console.log(timerValues);
// timerValues.push('\n');
//timerValues += '\n';
console.log(timerValues);
let wait = 0;
// wait increments on every for loop iteration and decrements on setTimout function callback passes
let timer = (timeArray) => {   
    for (let number of timeArray) {
     
      if (typeof number !== NaN && number >= 0) {
        wait += 1
      setTimeout(() => { 
          process.stdout.write('\x07' + number +  ' seconds ');
          wait -= 1
          if (wait === 0)-console.log();
      }, number * 1000 );
    }
    }
 }


timer(timerValues);
