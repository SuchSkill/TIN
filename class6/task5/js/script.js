class Student {
    constructor(id, name, surname,grades) {
        this.id = id;
        this.name = name;
        this.lastName = surname;
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
        console.log(this.name);
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