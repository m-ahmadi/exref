describe("calculator addition", function () {
	var calc;
	beforeEach(function () {
		calc = new Calculator();
	});
	it("can add positive integers", function () {
		expect(calc.add(2, 3)).toEqual(5);
	});
	it("can subtract positive integers", function () {
		expect(calc.sub(8, 5)).toEqual(3);
	});
	it("can multiply positive integers", function () {
		expect(calc.mult(4, 3)).toEqual(12);
	});
	it("can divide positive integers", function () {
		expect(calc.div(12, 4)).toEqual(3);
	});
});