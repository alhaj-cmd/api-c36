const student = {
    name :'kodom Ali',
    money :5000,
    study :'math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.money)
    }
}
student.exam()