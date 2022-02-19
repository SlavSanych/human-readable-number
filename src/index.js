module.exports = function toReadable (number) {

// const number = 99;

    function convertOnes (digit) {
        switch ( digit ) {
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        }
    }

    function convertFirstTen (digit) {
        switch ( digit ) {
            case '1': return 'eleven';
            case '2': return 'twelve';
            case '3': return 'thirteen';
            case '4': return 'fourteen';
            case '5': return 'fifteen';
            case '6': return 'sixteen';
            case '7': return 'seventeen';
            case '8': return 'eighteen';
            case '9': return 'nineteen';
            case '0': return 'ten';
        }
    }        

    function convertTens (digit) {
        switch ( digit ) {
            case '2': return 'twenty';
            case '3': return 'thirty';
            case '4': return 'forty';
            case '5': return 'fifty';
            case '6': return 'sixty';
            case '7': return 'seventy';
            case '8': return 'eighty';
            case '9': return 'ninety';
        }
    }    

    if (number === 0) {return 'zero';}

    const numAsStr = number.toString();
    const numStrLength = numAsStr.length;
    let result = '';

    if (number > 99) {
        result += convertOnes( numAsStr[0] ) + ' hundred';
        
        if (numAsStr[1] === '1') { 
            result = result.trim() + ' ' + convertFirstTen( numAsStr[2] );
        } else {
            result = result.trim() + ' ' + (convertTens( numAsStr[1] ) || '');
            result = result.trim() + ' ' + (convertOnes( numAsStr[2] ) || '');
        }
    } else if (number > 19) {
        result = convertTens( numAsStr[0] );
        result = result.trim() + ' ' + (convertOnes( numAsStr[1] ) || '');
    } else if (number > 9) {
        result = convertFirstTen( numAsStr[1] );
    } else {
        result = convertOnes( numAsStr[0] ) || '';
    }    

    result = result.trim();

    return result;
}
