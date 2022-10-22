// leetcode
// difficult: medium
// type: array
// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */

const garbageCollection = function(garbage, travel) {
	const info = {
		paperTruck: {
			destination: 0,
			workTime: 0,
		},
		glassTruck: {
			destination: 0,
					workTime: 0,
		},
		metalTruck: {
			destination: 0,
			workTime: 0,
		},
	};
	
	garbage.forEach((houseTrash, index) => {        
		for (const trash of houseTrash) {
			if (trash === "P") {
				info.paperTruck.destination = index;
				info.paperTruck.workTime += 1;
			}
					
			if (trash === "G") {
				info.glassTruck.destination = index;
				info.glassTruck.workTime += 1;
			}
					
			if (trash === "M") {
				info.metalTruck.destination = index;
				info.metalTruck.workTime += 1;
			}
		}
	});
    
	garbage.forEach((houseTrash, index) => {  
		let isVisitedPaperTruck = false;
		let isVisitedGlassTruck = false;
		let isVisitedMetalTruck = false;
		const time = index > 0 && travel[index - 1];
		
		for (const trash of houseTrash) {
			if (time && !isVisitedPaperTruck && index <= info.paperTruck.destination) {
					info.paperTruck.workTime += time;
					isVisitedPaperTruck = true;
			}
			
			if (time && !isVisitedGlassTruck && index <= info.glassTruck.destination) {
					info.glassTruck.workTime += time;
					isVisitedGlassTruck = true;
			}
			
			if (time && !isVisitedMetalTruck && index <= info.metalTruck.destination) {
					info.metalTruck.workTime += time;
					isVisitedMetalTruck = true;
			}
		}
	});
	
	let result = 0;
	
	for (const data of Object.entries(info)) {
		result += data[1].workTime;
	}
	
	return result;
};
