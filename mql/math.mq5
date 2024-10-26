MathSrand(7);       // must set seed first
int n = MathRand(); // get rand int

// rand int between min & max
int RandInt(int min, int max) {
	return (MathRand() / 32767.0) * ((max-min) + min);
}
