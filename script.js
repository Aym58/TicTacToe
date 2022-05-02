"use strict";
const buttonNewEl = document.querySelector(".btn--new");
let fieldMatrix = ["", "", "", "", "", "", "", "", ""];
let currentMove = 0;
let moveCounter;
let selectFirstMove;
let isThereWin;

const moveGen = function (side) {
	let generateMove;
	let oppSide;
	if (side === 1) {
		oppSide = 0;
	} else if (side === 0) {
		oppSide = 1;
	}
	console.log(oppSide);
	if (fieldMatrix[0] === side && fieldMatrix[1] === side) {
		generateMove = 2;
	} else if (fieldMatrix[1] === side && fieldMatrix[2] === side) {
		generateMove = 0;
	} else if (fieldMatrix[0] === side && fieldMatrix[2] === side) {
		generateMove = 1;
	} else if (fieldMatrix[3] === side && fieldMatrix[4] === side) {
		generateMove = 5;
	} else if (fieldMatrix[4] === side && fieldMatrix[5] === side) {
		generateMove = 3;
	} else if (fieldMatrix[3] === side && fieldMatrix[5] === side) {
		generateMove = 4;
	} else if (fieldMatrix[6] === side && fieldMatrix[7] === side) {
		generateMove = 8;
	} else if (fieldMatrix[7] === side && fieldMatrix[8] === side) {
		generateMove = 6;
	} else if (fieldMatrix[6] === side && fieldMatrix[8] === side) {
		generateMove = 7;
	} else if (fieldMatrix[0] === side && fieldMatrix[3] === side) {
		generateMove = 6;
	} else if (fieldMatrix[3] === side && fieldMatrix[6] === side) {
		generateMove = 0;
	} else if (fieldMatrix[0] === side && fieldMatrix[6] === side) {
		generateMove = 3;
	} else if (fieldMatrix[1] === side && fieldMatrix[4] === side) {
		generateMove = 7;
	} else if (fieldMatrix[4] === side && fieldMatrix[7] === side) {
		generateMove = 1;
	} else if (fieldMatrix[1] === side && fieldMatrix[7] === side) {
		generateMove = 4;
	} else if (fieldMatrix[2] === side && fieldMatrix[5] === side) {
		generateMove = 8;
	} else if (fieldMatrix[5] === side && fieldMatrix[8] === side) {
		generateMove = 2;
	} else if (fieldMatrix[2] === side && fieldMatrix[8] === side) {
		generateMove = 5;
	} else if (fieldMatrix[0] === side && fieldMatrix[4] === side) {
		generateMove = 8;
	} else if (fieldMatrix[4] === side && fieldMatrix[8] === side) {
		generateMove = 0;
	} else if (fieldMatrix[0] === side && fieldMatrix[8] === side) {
		generateMove = 4;
	} else if (fieldMatrix[2] === side && fieldMatrix[4] === side) {
		generateMove = 6;
	} else if (fieldMatrix[4] === side && fieldMatrix[6] === side) {
		generateMove = 2;
	} else if (fieldMatrix[2] === side && fieldMatrix[6] === side) {
		generateMove = 4;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[1] === oppSide) {
		generateMove = 2;
	} else if (fieldMatrix[1] === oppSide && fieldMatrix[2] === oppSide) {
		generateMove = 0;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[2] === oppSide) {
		generateMove = 1;
	} else if (fieldMatrix[3] === oppSide && fieldMatrix[4] === oppSide) {
		generateMove = 5;
	} else if (fieldMatrix[4] === oppSide && fieldMatrix[5] === oppSide) {
		generateMove = 3;
	} else if (fieldMatrix[3] === oppSide && fieldMatrix[5] === oppSide) {
		generateMove = 4;
	} else if (fieldMatrix[6] === oppSide && fieldMatrix[7] === oppSide) {
		generateMove = 8;
	} else if (fieldMatrix[7] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 6;
	} else if (fieldMatrix[6] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 7;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[3] === oppSide) {
		generateMove = 6;
	} else if (fieldMatrix[3] === oppSide && fieldMatrix[6] === oppSide) {
		generateMove = 0;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[6] === oppSide) {
		generateMove = 3;
	} else if (fieldMatrix[1] === oppSide && fieldMatrix[4] === oppSide) {
		generateMove = 7;
	} else if (fieldMatrix[4] === oppSide && fieldMatrix[7] === oppSide) {
		generateMove = 1;
	} else if (fieldMatrix[1] === oppSide && fieldMatrix[7] === oppSide) {
		generateMove = 4;
	} else if (fieldMatrix[2] === oppSide && fieldMatrix[5] === oppSide) {
		generateMove = 8;
	} else if (fieldMatrix[5] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 2;
	} else if (fieldMatrix[2] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 5;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[4] === oppSide) {
		generateMove = 8;
	} else if (fieldMatrix[4] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 0;
	} else if (fieldMatrix[0] === oppSide && fieldMatrix[8] === oppSide) {
		generateMove = 4;
	} else if (fieldMatrix[2] === oppSide && fieldMatrix[4] === oppSide) {
		generateMove = 6;
	} else if (fieldMatrix[4] === oppSide && fieldMatrix[6] === oppSide) {
		generateMove = 2;
	} else if (fieldMatrix[2] === oppSide && fieldMatrix[6] === oppSide) {
		generateMove = 4;
	} else generateMove = Math.trunc(Math.random() * 9);
	while (moveCounter < 9) {
		if (
			!document
				.getElementById(`cell--${generateMove}`)
				.classList.contains(`active--0`) &&
			!document
				.getElementById(`cell--${generateMove}`)
				.classList.contains(`active--1`)
		) {
			console.log(generateMove);
			return generateMove;
		} else if (moveCounter < 9) {
			generateMove = Math.trunc(Math.random() * 9);
		}
	}
};

const winChecker = (side) => {
	if (
		fieldMatrix[0] === side &&
		fieldMatrix[1] === side &&
		fieldMatrix[2] === side
	) {
		winHandler(0, 1, 2, side);
		isThereWin = true;
	} else if (
		fieldMatrix[3] === side &&
		fieldMatrix[4] === side &&
		fieldMatrix[5] === side
	) {
		winHandler(3, 4, 5, side);
		isThereWin = true;
	} else if (
		fieldMatrix[6] === side &&
		fieldMatrix[7] === side &&
		fieldMatrix[8] === side
	) {
		winHandler(6, 7, 8, side);
		isThereWin = true;
	} else if (
		fieldMatrix[6] === side &&
		fieldMatrix[7] === side &&
		fieldMatrix[8] === side
	) {
		winHandler(6, 7, 8, side);
		isThereWin = true;
	} else if (
		fieldMatrix[0] === side &&
		fieldMatrix[3] === side &&
		fieldMatrix[6] === side
	) {
		winHandler(0, 3, 6, side);
		isThereWin = true;
	} else if (
		fieldMatrix[1] === side &&
		fieldMatrix[4] === side &&
		fieldMatrix[7] === side
	) {
		winHandler(1, 4, 7, side);
		isThereWin = true;
	} else if (
		fieldMatrix[2] === side &&
		fieldMatrix[5] === side &&
		fieldMatrix[8] === side
	) {
		winHandler(2, 5, 8, side);
		isThereWin = true;
	} else if (
		fieldMatrix[0] === side &&
		fieldMatrix[4] === side &&
		fieldMatrix[8] === side
	) {
		winHandler(0, 4, 8, side);
		isThereWin = true;
	} else if (
		fieldMatrix[2] === side &&
		fieldMatrix[4] === side &&
		fieldMatrix[6] === side
	) {
		winHandler(2, 4, 6, side);
		isThereWin = true;
	}
};

const winHandler = (cell1, cell2, cell3, side) => {
	document.getElementById(`cell--${cell1}`).classList.add(`won--${side}`);
	document.getElementById(`cell--${cell2}`).classList.add(`won--${side}`);
	document.getElementById(`cell--${cell3}`).classList.add(`won--${side}`);
};

const computerMove = function (side) {
	let generateMove = moveGen(side);
	fieldMatrix[generateMove] = side;
	for (let i = 0; i < 9; i++) {
		if (side === 0) {
			const cellElement = document.getElementById(`cell--${generateMove}`);
			cellElement.classList.add(`active--0`);
			winChecker(side);
			currentMove = 1;
		} else if (side === 1) {
			const cellElement = document.getElementById(`cell--${generateMove}`);
			cellElement.classList.add(`active--1`);
			winChecker(side);
			currentMove = 0;
		}
	}
};

const init = function () {
	currentMove = 0;
	moveCounter = 0;
	isThereWin = false;
	fieldMatrix = ["", "", "", "", "", "", "", "", ""];
	selectFirstMove = Math.round(Math.random());
	for (let i = 0; i < 9; i++) {
		const cellElement = document.getElementById(`cell--${i}`);
		for (let i = 0; i < 2; i++) {
			cellElement.classList.remove(`active--${i}`);
			cellElement.classList.remove(`won--${i}`);
		}
	}
	if (selectFirstMove === 0) {
		computerMove(selectFirstMove);
		moveCounter++;
	}
};
init();

for (let i = 0; i < 9; i++) {
	let selectedCell = document.getElementById(`cell--${i}`);
	selectedCell.addEventListener("click", function () {
		if (
			!selectedCell.classList.contains(`active--0`) &&
			!selectedCell.classList.contains(`active--1`) &&
			!isThereWin &&
			moveCounter < 9
		) {
			fieldMatrix[i] = currentMove;
			selectedCell.classList.add(`active--${currentMove}`);
			winChecker(currentMove);
			moveCounter++;
			currentMove === 0 ? (currentMove = 1) : (currentMove = 0);
			if (!isThereWin && moveCounter < 9) {
				computerMove(currentMove);
				moveCounter++;
			}
		}
	});
}

buttonNewEl.addEventListener("click", init);
