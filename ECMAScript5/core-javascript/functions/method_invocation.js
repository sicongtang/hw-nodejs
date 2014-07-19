var calculator = { // An object literal
operand1: 1,
operand2: 1,
add: function() {
        // Note the use of the this keyword to refer to this object.
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
console.log(calculator.result);
