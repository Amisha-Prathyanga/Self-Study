function Solution(text){
    const charFreq = {};

    for(let i=0; i<text.length; i++){
        let char = text[i];

        if(!charFreq[char]){
            charFreq[char] = 1
        }
        else{
            charFreq++;
        }
    }

    let maxChar = null;
    let maxFreq = 0;

    for(let char in charFreq){
        if(charFreq[char]> maxFreq){
            maxChar = char;
            maxFreq = charFreq[char];
        }
    }

    return maxChar;

}