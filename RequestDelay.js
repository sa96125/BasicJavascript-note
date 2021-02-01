const input = document.querySelector('input');

const fetchData = async (term) => {
    const res = await axios.get('', {
        prams: {
            key: '',
            s: term
        }
    })
};

let timeId = null;
const onInput = event => {
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(fetchData(event.target.value), 1000);
};

input.addEventListener('input', onInput);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.querySelector('input');

const fetchData = async (term) => {
    const res = await axios.get('', {
        prams: {
            key: '',
            s: term
        }
    })
};

// *******changed*********
// 리유저블한 코드로 바꾸고 코드를 깔끔하게 만들었지만, 좀 더 도전적인 코드다 ㅠㅠ 
// 이걸 완벽히 이해하면 한단계 성장 쌉가능!
const debounce = (callback) => {
    let timeId = null;
    // 콜백함수의 인자를 다 받아 넘긴다.
    // 여기서는 input 이벤트를 넘긴거겠지? 계속봐야할듯.
    return (...args) => {
        if (timeId) clearTimeout(timeId);
        timeId = setTimeout(callback.apply(null, args), 1000);
    }
}

const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput));
