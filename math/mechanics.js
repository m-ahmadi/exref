function kgForcePerMeter(boardWeight=0, beamLength=0, numberOfBoards=0, numberOfBeams=0) {
	let weightOfAllBoards = boardWeight * numberOfBoards;
	return (weightOfAllBoards / beamLength) / numberOfBeams;
}

kgForcePerMeter(7, 1.2, 1, 1)   // 5.833333333333334
kgForcePerMeter(5.5, 1.2, 1, 1) // 4.583333333333334
kgForcePerMeter(5.5, 3, 5, 3)   // 3.0555555555555554
