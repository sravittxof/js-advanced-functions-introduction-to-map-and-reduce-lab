// Your code here
const mapToNegativize = function(sourceArray){
    let negativized = [];
    for (const numberElem of sourceArray) {
        negativized.push(numberElem * -1);
        // if (numberElem < 0) {
        //     negativized.push(numberElem);
        // } else {
        //     negativized.push(numberElem * -1); }
    }
    return negativized;
};

const mapToNoChange = function(sourceArray){
    return sourceArray;
}

const mapToDouble = function(sourceArray){
    let doubled = [];
    for (const numberElem of sourceArray) {
        doubled.push(numberElem * 2);
    }
    return doubled;
}

const mapToSquare = function(sourceArray){
    let squared = [];
    for (const numberElem of sourceArray) {
        squared.push(numberElem ** 2);
    }
    return squared;
}

const reduceToTotal = function(sourceArray, startingPoint=0){
    let accum = startingPoint;
    for (const elem of sourceArray) {
        accum = accum + elem;
    }
    return accum;
}

const reduceToAllTrue = function(sourceArray){
    for (const elem of sourceArray) {
        if (!!elem === false) {
            return false;
        }
    }
    return true;
}

const reduceToAnyTrue = function(sourceArray){
    for (const elem of sourceArray) {
        if (!!elem === true){
            return true;
        }
    }
    return false;
}
