const avatar = document.querySelector('#player');

// 키보드 이벤트로 케릭터 무빙
window.addEventListener('keyup', (e) => {
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		//아바타가 	top으로 부터 +50px
		if (!avatar.style.top) avatar.style.top = "100px";
		const currentPos = (parseInt(avatar.style.top.slice(0, -2)) + 50);
		avatar.style.top = `${currentPos}px`;
	}
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		//아바타가 	top으로 부터 -50px
		if (!avatar.style.top) avatar.style.top = "100px";
		const currentPos = (parseInt(avatar.style.top.slice(0, -2)) - 50);
		avatar.style.top = `${currentPos}px`;
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		//아바타가 	left으로 부터 +50px
		if (!avatar.style.left) avatar.style.left = "100px";
		const currentPos = parseInt(avatar.style.left.slice(0, -2)) + 50;
		avatar.style.left = `${currentPos}px`;
		avatar.style.transform = 'scale(1,1)';
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		//아바타가 	left으로 부터 -50px
		if (!avatar.style.left) avatar.style.left = "100px";
		const currentPos = parseInt(avatar.style.left.slice(0, -2)) - 50;
		avatar.style.left = `${currentPos}px`;
		avatar.style.transform = 'scale(-1,1)';
	}

	// 코인을 랜덤으로 재할당하는 함수.
	if (isTouching(avatar, coin)) {
		const x = Math.floor(Math.random() * window.innerWidth);
		const y = Math.floor(Math.random() * window.innerHeight);
		coin.style.top = `${y}px`;
		coin.style.left = `${x}px`;
	}
});

