// create an n-node graph with no links
class Graph {
	constructor(n=0) {
		this.nodes = [...Array(n)].map((v, i) => {
			return { id: i+1 };
		});
	}
}