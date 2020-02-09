function Asad() {
	if ( this instanceof Asad ) {
		alert('Called with new');
		this.foo = 3;
	}
	
	return 2;
}

Asad()     // 2

new Asad() // Asad {foo: 3}