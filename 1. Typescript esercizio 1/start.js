"use strict";
// rivedere enum
// address e location interface
exports.__esModule = true;
exports.Gender = exports.Role = void 0;
var Role;
(function (Role) {
    Role["staff"] = "staff";
    Role["student"] = "student";
    Role["manager"] = "manager";
    Role["admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
    Gender["other"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
// obj dato
var obj = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.staff,
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
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
    ],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
};
// CODE HERE
