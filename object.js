const student = {
    name :'kodom Ali',
    money :5000,
    study :'math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.money + 'This is value'
    }
}
const output = student.exam();
console.log(output)