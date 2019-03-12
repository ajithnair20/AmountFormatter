function formatAmountString(inputnumber) {
    var num = inputnumber.toString();
    var formattednum = '';

    for (var i = num.length-1, counter=1; i >= 0; i--) {
        
        formattednum = formattednum + num.charAt(i);
        if (counter % 2 === 1 && counter != 1 && counter != num.length)
            formattednum = formattednum + ',';
        counter++;
    }
    return formattednum.split("").reverse().join("");
}