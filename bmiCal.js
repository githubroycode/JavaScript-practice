const bmi = 60 /(1.71)**2;

console.log("BMI: "+bmi);

if(bmi<18.5){
    console.log("You are underweight.");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal.");
}
else if(bmi >= 25 && bmi <=29.9){
    console.log("You are overweight.");
}
else{
    console.log("You are obese.");
}


