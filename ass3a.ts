class Greeter {
	msg: string;

	constructor(msg:string){
		this.msg=msg;
	}
	greet(){
		console.log(`${this.msg} Welcomes everyone`);
	}
}
	var message = new Greeter('Angular2');
	message.greet();
	