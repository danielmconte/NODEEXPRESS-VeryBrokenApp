function hourHelper(hourNumber){
    const hours = {
        '00': "twelve",
        '01': "one",
        '02': "two",
        '03': "three",
        '04': "four",
        '05': "five",
        '06': "six",
        '07': "seven",
        '08': "eight",
        '09': "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "one",
        14: "two",
        15: "three",
        16: "four",
        17: "five",
        18: "six",
        19: "seven",
        20: "eight",
        21: "nine",
        22: "ten",
        23: "eleven"
    }
    let wordHour = hours[hourNumber];
    return wordHour;
}



function minuteHelper(minNumber){
    if(minNumber > 10 && minNumber < 20){
        minTeens = {
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        }
        let minutes = minTeens[minNumber];
        console.log(minutes);
        return minutes;
    }
    
    let minTime = minNumber.split('')
    const minTens = {
        0: 'oh',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty'
    }
    const minSingles = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    let tens = minTens[minTime[0]];
    let singles = minSingles[minTime[1]];
    let minuteTime = tens.concat(" " + singles);
    return minuteTime;
}


function timeWord(time){
    let amPM = ""
    let hours = ""
    let minutes = ""
    let hoursMins = time.split(':')
    if(hoursMins[0] == '00' && hoursMins[1] == '00'){
        hours = 'midnight'
    }else if(hoursMins[0] == '12' && hoursMins[1] == '00'){
        hours = 'noon'
    }else {
        hours = hourHelper(hoursMins[0]);
    }
    if(hoursMins[1] !== "00"){
        minutes = minuteHelper(hoursMins[1]);
    }
    let theTime = hours.concat(" " + minutes); 
    if(hoursMins[0] < 12){
        amPM = " AM"
    }else{
        amPM = " PM"
    }
    let theFullTime = theTime.concat(amPM);
    console.log(theFullTime);
}

module.exports = {timeWord, minuteHelper, hourHelper};