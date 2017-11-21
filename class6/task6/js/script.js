class Person{
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

class Student extends Person{
    constructor(id, name, surname,grades) {
        super(name, surname);
        this.id = id;
        this.grades = grades;
    }
    // Getter
    get getAvgGrade() {
        var sum=0;
        for( var i = 0; i < this.grades.length; i++ ){
            sum += parseInt( this.grades[i], 10 ); //don't forget to add the base
        }

        var avg = sum/this.grades.length;
        return avg;
    }
    set setFullName(FullName) {
        var split = FullName.split(" ");
        this.name = split[0];
        this.lastName = split[1];
    }
    get getFullName(){
        return this.name + ' ' + this.lastName;
    }
    // Method
    print(){
        console.log(this.id);
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.getAvgGrade);
    }

}


Student.prototype.courses = ["English", "Math"];
var student1 = new Student(1, "Omar", "Black", [1,2,4,5,6]);
var student2 = new Student(2, "Sem", "Forsum", [5,2,4,1,1]);

student1.print();
student2.print();
console.log(student1.courses);