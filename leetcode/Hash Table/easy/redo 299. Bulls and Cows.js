var getHint = function(secret, guess) {
    let bullCount = 0;
    let cowCount = 0;
    const secretMap = {};

    for (let i = 0; i < secret.length; i ++) {
        if (secret[i] === guess[i]) {
            bullCount ++;
        } else {
            secretMap[secret[i]] = ~~secretMap[secret[i]] + 1;
        }
    }

    for (let i = 0; i < guess.length; i ++) {
        if (secret[i] !== guess[i] && secretMap[guess[i]]) {
            cowCount ++;
            secretMap[guess[i]] --;
        }
    }

    return `${bullCount}A${cowCount}B`;
};
