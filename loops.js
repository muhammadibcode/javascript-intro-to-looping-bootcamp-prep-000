
function forLoop(looparray) {
for (var i = 0; i < 25; i++) {
  if (i != 1 ) {
     looparray.push(`I am ${i} strange loops.`)
  } else {
     looparray.push(`I am ${i} strange loop.`)
         }
  }
  return looparray;
}

console.log(Math.random())