"use strict";
exports.__esModule = true;
var start_1 = require("../1. Typescript esercizio 1/start");
var User = /** @class */ (function () {
    function User(id, name, surname, age, dateOfBirth, address, role, username, profilePhotoUrl, companies, gender) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.role = role;
        this.username = username;
        this.profilePhotoUrl = profilePhotoUrl;
        this.companies = companies;
        this.gender = gender;
    }
    User.prototype.fullName = function () {
        return this.name + " " + this.surname;
    };
    return User;
}());
var obj1 = new User(3487, 'Mario', 'Rossi', 25, '1995-14-12', {
    city: 'Roma',
    street: 'Via roma 10',
    postalCode: '00100'
}, start_1.Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
'MarioRossi80', 'https://bit.ly/3yRngEP', [
    {
        id: 148979,
        name: 'Develhope',
        description: 'La migliore',
        location: {
            city: 'Palermo',
            street: 'Via Libertà 58',
            postalCode: '90139'
        }
    },
    {
        id: 123123,
        name: 'Apple',
        description: 'E insomma...',
        location: {
            city: 'Cupertino',
            street: 'One Apple Park Way',
            postalCode: '95014'
        }
    }
], start_1.Gender.male);
console.log(obj1.fullName());
