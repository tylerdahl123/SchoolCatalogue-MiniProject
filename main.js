class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    };
    getName(){
        return this._name;
    };
    getLevel(){
        return this._level;
    };
    getNumberOfStudents(){
        return this._numberOfStudents;
    };
    quickFacts(){
       console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    };
    static pickSubstituteTeacher(substituteTeachers) {
       let myIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[myIndex];
    };
    setNumberOfStudents(){
        if (typeof numberOfStudents === Number){
            this._numberOfStudents = numberOfStudents;
        }
        else{
            'Invalid input: numberOfStudents must be set to a Number!'
        }
    };

};

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    };

    getPickupPolicy (){
        return this._pickupPolicy;
    };

};

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    };
    getSportsTeams(){
        return this._sportsTeams; 
    }
}