var _a, _b;
function getCuctomerBirthday(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
var cus = getCuctomerBirthday(1);
console.log((_b = (_a = cus === null || cus === void 0 ? void 0 : cus.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear()) === null || _b === void 0 ? void 0 : _b.toString());
