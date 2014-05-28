module.exports = function(number, titles){
  return titles[(number%100>4 && number%100<20) ?  2 : ([2, 0, 1, 1, 1, 2])[Math.min(number%10, 5)]].replace('%s', number)
}
