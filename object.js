const student = {
    name :'kodom Ali',
    money :5000,
    study :'math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.money  + 'This is value'
    },
    improveExam : function(subject){
        this.exam();
        return `${this.name} us takeing improvement ${subject}`
    },
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}
const output = student.exam();
console.log(output)

const subjectAll  =student.improveExam('math')
console.log(subjectAll);

const treaM = student.treatDey(10);
console.log(treaM);
