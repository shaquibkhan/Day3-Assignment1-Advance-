var Greeter = (function () {
    function Greeter(msg) {
        this.msg = msg;
    }
    Greeter.prototype.greet = function () {
        console.log(this.msg + " Welcomes everyone");
    };
    return Greeter;
}());
var message = new Greeter('Angular2');
message.greet();
