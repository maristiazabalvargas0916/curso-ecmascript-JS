function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 13;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser();
newUser('David', 2, 'MX');

function newAdmin(name = 'Oscar', age = '12', country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Pepe', 23, 'PE')