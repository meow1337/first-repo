function getSum(prices, discount) {
    let sum = 0;
    
    for (const price of prices) {
        sum += price;
    }

    const discountRes = (discount / 100) * sum;

    return sum - discountRes;
}

console.log(getSum([100, 200, 300], 30)) // 420 
console.log(getSum([150, 250, 150], 10)) // 495 
console.log(getSum([1000], 50)) // 500 
