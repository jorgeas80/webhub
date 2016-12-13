describe("app", function() {

    beforeEach(module('app'));

    describe("Ctrl1", function() {

        var Ctrl1;

        beforeEach(inject(function($controller) {
            Ctrl1 = $controller("Ctrl1");
        }));

        it("should start with message", function() {
            expect(Ctrl1.obj.msg).toBe('This is template 1');
        });
    });
});
