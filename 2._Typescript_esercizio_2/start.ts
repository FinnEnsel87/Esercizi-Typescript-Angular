import { Company, Gender, Person, Role } from "../1. Typescript esercizio 1/start"

class User implements Person {
 
    fullName() {
        return `${this.name} ${this.surname}`
    }
    
    constructor(public id: number,
        public name: string,
        public surname: string,
        public age: number,
        public dateOfBirth: string,
        public address: { city: string; street: string; postalCode: string; },
        public role: Role,
        public username: string,
        public profilePhotoUrl: string,
        public companies: Company[],
        public gender: Gender){}
}

const mario = new User (3487,
    'Mario',
    'Rossi',
    25,
    '1995-14-12',
    {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    'staff', // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    'MarioRossi80',
    'https://bit.ly/3yRngEP',
    [
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
    Gender.male)

console.log(mario.fullName());
