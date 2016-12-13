describe("app", function() {

    beforeEach(module('app'));

    describe("Ctrl2", function() {

        var Ctrl2;

        beforeEach(inject(function($controller) {
            Ctrl2 = $controller("Ctrl2");
        }));

        it("should start with message", function() {
            expect(Ctrl2.obj.msg).toBe('This is template 2');
        });
    });
});
