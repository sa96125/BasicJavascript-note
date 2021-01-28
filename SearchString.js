function searchString(str1, str2) {
    let cnt = 0;

    for (let i; i < str1.length; i++) {
        for (let j; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) break;
            if (j === str2.length) cnt++;
        }
    }

    return cnt;
}

searchString("lllllpoplpoplolipopop", "lol");

