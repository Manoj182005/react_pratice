function discountCalculator(totalAmount) {
  
  let answer;

    if (totalAmount >= 100) {
        answer = totalAmount - totalAmount * 0.1;
        console.log(answer);
    }
    else if (totalAmount >= 50 && totalAmount < 100) {
          answer = totalAmount - totalAmount * 0.05;
        console.log(answer);
      
    } else if (totalAmount < 50) {
        console.log('no discount');
  }
  return answer;
}
discountCalculator(49);
