const randomNumbers = (length, min, max)=> {
    const randomNumbers = [];
    while(randomNumbers.length < length) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if(randomNumbers.includes(randomNum)){
            continue;
        }
        randomNumbers.push(randomNum);
    }

    return randomNumbers;

}

export default randomNumbers;