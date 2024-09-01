const point = parseInt("i");

console.log("Your point: "+point);

if(point>=90 && point<=100){
    console.log("Your Grade is (A+).");
}
else if(point>=80 && point<=89){
    console.log("Your Grade is (A).");
}
else if(point>=70 && point<=79){
    console.log("Your Grade is (A-).");
}
else if(point>=60 && point<=69){
    console.log("Your Grade is (B)");
}
else if(point>=0 && point<=59){
    console.log("You are failed.");
}
else if(point<=-1  || point>=101){
    console.log("Your type is wrong number.");
}
else{
    console.log("Invalid type.");
}

