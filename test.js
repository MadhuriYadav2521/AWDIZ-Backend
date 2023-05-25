// let, const, var, hoisting, clouser
// function hoisting(){
//     console.log(studentName,"student");
//     var studentName = "Swaraj"
// }
// hoisting();


// hoisting
// var sname  = "abc"  //declaration
// var sname = "Swaraj"
// console.log(sname);
// let lname = "let";
// // let lname = "let";
// console.log(lname);
// const awdizkey = "awdiz123"
// var cname;
// cname = "cname"
// console.log(cname);

// let      reassign the value              hoisting not applicable     redeclaration is not possible
// const    can't reassign the value        hoisting not applicable     redeclaration is not possible
// var     reassign the value               hoisting                    redeclaration possible
                // re assign                    hoisting                    redeclaration

// clouser - inner function can access outer functions scope - lexical scoping , its members

function outerFunction(){
    var myName = 'Awdiz'
    function innerFunction(){
        console.log(myName);
    }
    return innerFunction()
}
var myFun = outerFunction();
console.log(myFun);


