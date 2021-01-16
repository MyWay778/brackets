module.exports = function check(str, bracketsConfig) {
  str = str.split('')
  let output = false
  
  for (let z = 0; z < bracketsConfig.length; z++) {
    let complete = false
    let count = 1
    while (!complete) {
      let initLength = str.length
      let open
      let close
      
      for (let i = 0; i < str.length; i++) {
        if (str[i] === bracketsConfig[z][0] && str[i+count] === bracketsConfig[z][1]) {
          open = i
          close = i + count
        }
      }
      if ( (close === undefined || open === undefined)){
        if (count > initLength) {
          complete = true
        } else {
          count += 2
        }
        continue
      }
      count = 1
      str.splice(open, 1)
      str.splice(close - 1, 1)
      if (str.length === initLength) {
        complete = true
      }
      if (str.length === 0) {
        complete = true
        output = true
      }
    }
  } 
  return output
} 

