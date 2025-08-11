function user (firstName, lastName)
{
    this.x = firstName;
    this.y = lastName;
}
const user1 = new user('sowjanya' , 'medagam');
const user2 = new user('anusha' , 'medagam');

console.log(user1);
console.log(user2.y);
