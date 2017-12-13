//JASMINE UNIT TESTING



var earth = {
	isRound: true,
	numberFromSun: 3
}


describe("Earth", function(){
	it("is round", function(){
		expect(earth.isRound).toBe(true)
	});
	it("is the third planet from the sun", function(){
		expect(earth.numberFromSun).toBe(3)
	});
});


//Examples:

describe("Jasmine Matchers", function(){
	it("allows for === and deep equality", function(){
		expect(1+1).toBe(2);
		expect([1,2,3]).toEqual([1,2,3]);
	});
	it("allows for easy precision checking", function(){
		expect(3.1415).toBeCloseTo(3.13,2);
	});

	it("allows for easy truthy / falsey checking", function(){
		expect(0).toBeFalsy();
		expect([]).toBeTruthy();
	});
	it("allows for checking contents of an object", function() {
		expect([1,2,3]).toContain(1);
		expect({name:'Elie'}).toEqual(jasmine.objectContaining({name:"<Elie></Elie>"}))
	});
	it("allows for easy type checking", function(){
		expect([]).toEqual(jasmine.any(Array));
		expect(function(){}).toEqual(jasmine.any(Function));
	});
});




//HOOKS

describe("Arrays", function(){
	var arr;
	beforeEach(function(){
		arr=[1,2,3];
	});

	it("adds element to an array", function(){
		arr.push(7);
		expect(arr).toEqual([1,2,3,7]);
	});

	it("return the new length of the array", function(){
		expect(arr.push(7).toBe(4));
	});

	it("adds anything into the array", function(){
		expect(arr.push({})).toBe(4);
	});

});




