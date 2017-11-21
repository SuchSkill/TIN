function Student(id, name, lastName, grades) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.grades = grades;
    this.print = function() {
        console.log(id);
        console.log(name);
        console.log(lastName);
        sum=0;
        for( var i = 0; i < grades.length; i++ ){
            sum += parseInt( grades[i], 10 ); //don't forget to add the base
        }

        var avg = sum/grades.length;
        console.log(avg);
    }
    this.getAvgGrade = function() {
        sum=0;
        for( var i = 0; i < grades.length; i++ ){
            sum += parseInt( grades[i], 10 ); //don't forget to add the base
        }

        var avg = sum/grades.length;
        return avg;
    }
    this.setFullName = function(firstName, lastName) {
        this.name = firstName;
        this.lastName = lastName;
    }
    this.getFullName = function() {
        return this.name + ' ' + this.lastName;
    }
}

Student.prototype.courses = ["English", "Math"];
var student1 = new Student(1, "Omar", "Black", [1,2,4,5,6]);
var student2 = new Student(2, "Sem", "Forsum", [5,2,4,1,1]);

student1.print();
student2.print();
console.log(student1.courses);