
import Email from "./Email";
import EmailAccount from "./EmailAccount";
import Human from "./Human";

export default class DB {
    static getHuman(username, password) {
        return new Human(username, password, 'Anil Bandara')
    }

    static getEmailAccountList(human) {
        return [
            new EmailAccount('bandara-a-3912@mail.lk', 'Private Citizen'),
            new EmailAccount('bandara-a-3912@slxy.gov.lk', 'Employee of the SLXY'),
            new EmailAccount('chair@slxy.gov.lk', 'Chairperson of the SLXY'),
        ]
    }

    static getEmailIdx() {
        return {
            'bandara-a-3912@mail.lk': [new Email(
                'bandara-a-3912@mail.lk',
                'bill@ceb.lk',
                'Utility Bill - 2024 September',
                'Please find attached the utility bill for the month of September 2024.',
            )],
            'bandara-a-3912@slxy.gov.lk': [],
            'chair@slxy.gov.lk': [],
        }
    }
}