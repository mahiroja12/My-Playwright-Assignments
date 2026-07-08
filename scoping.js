let genderType = "female"
//let genderType = "male"
function printGender()
{
    let colour = "brown"
    if (genderType == "female"){
        var age = 30
        let colour = "pink"
        console.log("The colour inside the if block = ", colour)
    }
    console.log("the age outside if block = ", age)
}
printGender();
console.log("The genderType is ", genderType)