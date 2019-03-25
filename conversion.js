// functions to convert the miles to km and vice versa
function toMiles (km)
{
    return Math.round((km * 0.62137) * 100)/100;
}

function toKM (mi)
{
    return Math.round((mi * 1.60934) * 100)/100;
}


// 2 seperate reports, for each function in order to get the page
// to display miles = km and km = miles properly
var report1 = function (miles, kilometers) {
    document.getElementById("result").innerHTML =
        miles + " miles = " + kilometers + " km";
}

var report2 = function (kilometers, miles) {
    document.getElementById("result").innerHTML =
        kilometers + " km = " + miles + " miles";
};



// conversion functions to get the user value
document.getElementById("mi_to_km").onclick = function () {
    var mi = document.getElementById("conversion").value;
    if (isNaN(mi))
        {
            window.alert('You have to enter a number!');
        }
    else if (mi == 0)
        {
            window.alert('0 is 0, choose an actual number!');
        }
    else
        {
            var km = toKM(mi);
            report1(mi, km);
        }
};

document.getElementById("km_to_mi").onclick = function () {
    var km = document.getElementById("conversion").value;
    if(isNaN(km))
        {
            window.alert('You have to enter a number!');
        }
    else if (km == 0)
        {
            window.alert('0 is 0, choose an actual number!');
        }
    else
        {
            var mi = toMiles(km);
            report2(km, mi);
        }
};