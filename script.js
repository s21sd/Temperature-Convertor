let inputValue = document.getElementById("inputDegree");
let selectInputDegreeType = document.getElementById("selectInputDegreeType");
let selectConversionType = document.getElementById("selectConversionType");

let result = document.querySelector(".result");
let degree = document.getElementById("degree");

let convertedUnit = document.getElementById("convertedUnit");


let submitBtn = document.querySelector(".convertBt");

function celciusToFaherhiet(numberValue) {

    return (numberValue * (9 / 5) + 32);

}
function celciusToKalvin(numberValue) {

    return (numberValue + 273.15);

}
function farehhietTocelcius(numberValue) {
    return ((numberValue - 32) * (5 / 9));

}
function farehhietToKalvin(numberValue) {
    return ((numberValue + 459.67) * (5 / 9));
}

function KalvinToFarehiet(numberValue) {
    return ((numberValue - 273.15) * (9 / 5) + 32);
}
function KalvinToCelcius(numberValue) {
    return ((numberValue - 273.15))
}

submitBtn.addEventListener("click", (e) => {
    // first of all I want to  check the input value and  then I want to check which degree sysmbol I am getting from the 

    let numberValue = parseInt(inputValue.value);
    let selectInputDegreeValue = selectInputDegreeType.value;
    let selectConversionValue = selectConversionType.value;


    if (selectInputDegreeValue === selectConversionValue) {
        result.innerHTML = numberValue;
        convertedUnit.innerHTML = selectConversionValue;
    }
    else if (selectInputDegreeValue === 'C' && selectConversionValue === 'F') {
        let res = celciusToFaherhiet(numberValue)
        result.innerHTML = res;
        convertedUnit.innerHTML = selectConversionValue;


    }
    else if (selectInputDegreeValue === 'C' && selectConversionValue === 'K') {
        let res1 = celciusToKalvin(numberValue)
        result.innerHTML = res1;
        convertedUnit.innerHTML = selectConversionValue;
    }
    else if (selectInputDegreeValue === 'F' && selectConversionValue === 'C') {
        let res2 = farehhietTocelcius(numberValue)
        result.innerHTML = res2;
        convertedUnit.innerHTML = selectConversionValue;

    }
    else if (selectInputDegreeValue === 'F' && selectConversionValue === 'K') {
        let res3 = farehhietToKalvin(numberValue)
        result.innerHTML = res3;
        convertedUnit.innerHTML = selectConversionValue;
    }

    else if (selectInputDegreeValue === 'K' && selectConversionValue === 'C') {
        let res4 = KalvinToCelcius(numberValue)
        result.innerHTML = res4;
        convertedUnit.innerHTML = selectConversionValue;
    }
    else if (selectInputDegreeValue === 'K' && selectConversionValue === 'F') {
        let res5 = KalvinToFarehiet(numberValue)
        result.innerHTML = res5;
        convertedUnit.innerHTML = selectConversionValue;
    }

    e.preventDefault()
})
