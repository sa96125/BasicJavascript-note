const btn = document.querySelector('button');

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if (elRight + amount > bodyBoundary) {
            onFailure();
        }
        else {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
        }
    }, delay);
};

// 콜백 지옥 (스파게티 코드)
// 성공 콜백, 실패 콜백을 처리하면 코드는 2배!!
moveX(
    btn,
    300,
    1000,
    () => {
        moveX(
            btn,
            300,
            1000,
            () => {
                moveX(
                    btn,
                    300,
                    1000,
                    () => {
                        moveX(
                            btn,
                            300,
                            1000,
                            () => {
                                moveX(
                                    btn,
                                    300,
                                    1000,
                                    () => {
                                        alert('YOU HAVE A WIDE SCREEN!');
                                    },
                                    () => {
                                        alert('CANNOT MOVE FURTHER!');
                                    }
                                );
                            },
                            () => {
                                alert('CANNOT MOVE FURTHER!');
                            }
                        );
                    },
                    () => {
                        alert('CANNOT MOVE FURTHER!');
                    }
                );
            },
            () => {
                alert('CANNOT MOVE FURTHER!');
            }
        );
    },
    () => {
        alert('CANNOT MOVE FURTHER!');
    }
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// promise는 object이다.
// method them, reject를 콜백함수로 재정의 가능하도록 돕는다.
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({ bodyBoundary, elRight, amount });
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
};

// 콜백함수로 계속 재귀적으로 함수를 재사용할 수 있다.
// 이렇게 깔끔하게 사용할 수 있는 이유는 이미 정의된 promise를 사용함으로서 콜백 메서드는 사용할 수 있기 때문에다.
const btn = document.querySelector('button');
moveX(btn, 100, 1000)
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .catch(({ bodyBoundary, amount, elRight }) => {
        console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
        console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
    });
