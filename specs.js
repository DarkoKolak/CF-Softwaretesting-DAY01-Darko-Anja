describe("Hello", function(){

	it("should Return Hello", function(){

		expect(hello()).toEqual("Hello");
	});
});

describe("Sum", function(){

	it("should return the sum", function(){

		expect(cal(3,5)).toEqual(10);
	});
});

describe("Divison", function(){

	it("should return the divison", function(){

		expect(divide(10,5)).toEqual(2);
	});
});
