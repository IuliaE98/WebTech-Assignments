function calculateFrequencies(input, dictionary){
    if(typeof input!=='string'){
        throw new Error(`Input should be a string`);
    }
    for(let i=0;i<dictionary.length;i++){
        if(typeof dictionary[i]!=='string'){
            throw new Error('Invalid dictionary format');
        }
    }
    
}

const app = {
    calculateFrequencies
};

module.exports = app;