function formatAmountString(inputnumber,format, precision) {
    
    precision = inputnumber.toString().split(".")[0].length + precision;    //get the precision i.e total number of digits to be displayed
    
    var num = inputnumber.toPrecision(precision);
    
    var numstr = num.toString().split(".");
    var characteristic = numstr[0];
    var mantissa = numstr[1];

    var formattednum = '';

    //When L ',' is inserted as 1,00,000 and When M ',' is inserted as 1,000,000
    for (var i = characteristic.length - 1, counter = 1; i >= 0; i--) {

        formattednum = formattednum + characteristic.charAt(i);

        if (format === 'L') {
            if (counter % 2 === 1 && counter != 1 && counter != characteristic.length)
                formattednum = formattednum + ',';
        }
        else if (format === 'M') {
            if (counter % 3 === 0 && counter != characteristic.length)
                formattednum = formattednum + ',';
        }
        
        counter++;
    }
    if (mantissa === undefined)
        return formattednum.split("").reverse().join("");
    else
        return formattednum.split("").reverse().join("") + '.' + mantissa;
}