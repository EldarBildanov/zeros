module.exports = function zeros(expression) {
  let n_five = 0
  let n_two = 0
  if (expression.includes('*')){
    while (expression.length != 0 ){
      let n_str = ''
  
      for (let i = 0; i < expression.length; i++){
        n_str += expression.charAt(i)
        if (expression.charAt(i) == '*' || i+1 == expression.length){
          expression = expression.slice(i+1)
          break
        } 
      }

      // count number of '!'
      let imp = 0
      for (let k = 0; k < n_str.length; k++) if (n_str[k] == '!') imp += 1 

      let n = parseFloat(n_str)

      while (n > 1){
        let d = 2
        let k = n
        while (k > 1){
          while (k % d == 0){
            if (d == 2) n_two+=1
            if (d == 5) n_five+=1
            k = k / d
          }
          d +=1
        }
        n -=imp
      }
    }


  }
  else{ 
    // count number of '!'
    let imp = 0
    for (let k = 0; k < expression.length; k++) if (expression[k] == '!') imp += 1 

    let n = parseFloat(expression)

    while (n > 1){
      let d = 2
      let k = n
      while (k > 1){
        while (k % d == 0){
          if (d == 2) n_two+=1
          if (d == 5) n_five+=1
          k = k / d
        }
        d +=1
      }
      n -=imp
    }
  }

  if (n_two < n_five) return n_two
  return n_five

}