const kodomALi = {
    name : 'kodom Ali',
    money : 5000,
    study : 'math', 
    subjects:['calculus', 'algebra', 'geometry'],
    exam:function(){
        return this.name + 'is participating in an exam';
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

const result = kodomALi.exam();

const badam = {
    name:'kacha badam',
    money : 8000
}

const result2 = kodomALi.exam.call(exam)
console.log(result2);