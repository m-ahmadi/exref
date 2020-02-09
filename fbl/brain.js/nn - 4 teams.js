const net = new brain.NeuralNetwork();
const l = console.log

// 4 footbal teams play with each other. (output: index of the winner team)
const data = [
	{ input: [1,2], output: [1] }, // team 2 wins
	{ input: [1,3], output: [1] }, // team 3 wins
	{ input: [2,3], output: [0] }, // team 2 wins
	{ input: [2,4], output: [1] }, // team 4 wins
	{ input: [1,2], output: [0] }, // team 1 wins
	{ input: [1,3], output: [0] }, // team 1 wins
	{ input: [3,4], output: [0] }  // team 3 wins
];
/* stats: G=games, W=win, L=loss, D=draw, S=score
.        G W L D  S
team 1:  4 2 2 0  6
team 2:  4 2 2 0  6
team 3:  4 2 2 0  6
team 4:  2 1 1 0  3
*/

net.train(data);

// probability of who wins the next match between 2 teams:

// output closer to 0: team 1 wins
// output closer to 1: team 4 wins
l(  net.run([1,4])  ) // 0.49 (50% chance of winning for both teams)

l(  net.run([2,4])  ) // 0.96 (weird right?)
l(  net.run([3,4])  ) // 0.01
l(  net.run([1,2])  ) // 0.48