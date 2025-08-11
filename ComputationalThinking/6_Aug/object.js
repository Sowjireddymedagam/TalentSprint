const person = {
    firstName : "Sowjanya",
    lastName : "Medagam",
    city : "vinukonda",
    isMarried : false,
    age : 22,

    address: {
        plot_no : 8-50,
        aptName : "XYZ"
    },
    hobbies : ['reading books', 'learning', 'music'],

    fullname: function()
    {
        return `${this.firstName} ${this.lastName}`
    }
};
console.log(person.fullname());
console.log(person.age);
console.log(person.hobbies);

const temp = JSON.stringify(person.address)
console.log(JSON.parse(temp));
console.log(person.firstName);

