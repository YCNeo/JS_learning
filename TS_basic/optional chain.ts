type Customer = {
    birthDate?: Date
}

function getCuctomerBirthday(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthDate: new Date() };
}


let cus = getCuctomerBirthday(1);
console.log(cus?.birthDate?.getFullYear()?.toString());