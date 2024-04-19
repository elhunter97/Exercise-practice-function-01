function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert('Before call function result = '+result);
result = addNumbers();
alert('After call function result = '+result);