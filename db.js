export const people = [
    {
        id: "0",
        name: "nicholas",
        age: 18,
        gender: "male"
    },
    {
        id: "1",
        name: "kevin",
        age: 26,
        gender: "male"
    },
    {
        id: "2",
        name: "dongha",
        age: 27,
        gender: "male"
    },
    {
        id: "3",
        name: "chanmin",
        age: 28,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id) );
    return filteredPeople[0]
}