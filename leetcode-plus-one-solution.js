/**
 * @param {number[]} digits
  * @return {number[]}
   */
var plusOne = function (digits) {
    const n = digits.length;

    // Traverse the digits from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Increment the current digit by 1
        digits[i]++;

        // If the digit becomes 10, set it to 0 and carry over the 1 to the next digit
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            // If the digit is less than 10, no need to carry over, so we can return the digits
            return digits;
        }
    }

    // If all the digits were 9, we need to insert a new digit at the beginning of the array
    digits.unshift(1);

    return digits;
};
                                                                                                                                        