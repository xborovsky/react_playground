export const getAllContacts = () => {
    return [
        {
            id: 1,
            name : 'James King',
            position : 'President and CEO',
            phone : '123456789',
            mobile : '9876545321',
            email : 'james.king@test.com'
        },
        {
            id: 2,
            name : 'Julie Taylor',
            position : 'VP of Marketing',
            phone : '4565789123',
            mobile : '6545987321',
            email : 'julie.taylor@test.com'
        },
        {
            id: 3,
            name : 'Eugene Lee',
            position : 'CFO',
            phone : '321789456',
            mobile : '987456123',
            email : 'james.king@test.com'
        },
        {
            id: 4,
            name : 'Paul Jones',
            position : 'QA Manager',
            phone : '111222333',
            mobile : '333222111',
            email : 'paul.jones@test.com'
        }
    ];
};

export const getContactById = (id) => {
    return getAllContacts().find((contact) => {
        return contact.id === parseInt(id, 10);
    });
};