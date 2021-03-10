module.exports = function reverse (n) {
    let new_number = 0;
    let whole_part = n < 0 ? -n : n;
  while (whole_part > 0){
    let remainder = whole_part % 10;
    new_number = (new_number * 10) + remainder;
    whole_part = Math.trunc(whole_part/10);
  }
  return new_number
}
