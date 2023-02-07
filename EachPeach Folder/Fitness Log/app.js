const calculate = () => {
    //weight:
    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    //height:
    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    //bmi:
    var result = document.getElementById("result");
    let bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
    result.textContent = bmi;
    
    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "#1e23b3";   
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = "Healthy Weight";
        result.style.color = "#1eb34b"; 
    }
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        result.style.color = "#b3701e";     
    }
    else {
        category = "Obese";
        result.style.color = "#b31e1e";     
    }
    document.getElementById("category").textContent = category;
}

