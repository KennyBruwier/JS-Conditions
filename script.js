var gewicht = prompt("Wat is je gewicht?");
var lengte = prompt("Wat is jou lengte");
var BMI = gewicht / (lengte*2);

if (BMI < 18.5) 
    var resultaat = "ondergewicht";
else if (BMI < 24)
    var resultaat = "gezond gewicht";
else if (BMI < 30)
    var resultaat = "overgewicht";
else 
    var resultaat = "obesitas";

var ternary = BMI < 18.5 ? "ondergewicht" : BMI < 24 ? "gezond gewicht" : BMI < 30 ? "overgewicht" : "obesitas";

switch (true)
{
    case BMI < 18.5:
        var switchResult = "ondergewicht";
        break;
    case BMI < 24: 
        var switchResult = "gezond gewicht";
        break;
    case BMI < 30:
        var switchResult = "overgewicht";
        break;
    case BMI > 30:
        var switchResult = "obesitas";
        break;
}    

console.log("met IF's: U heeft", resultaat);
console.log("met ternary: U heeft", ternary);
console.log("met switch: U heeft", switchResult);
