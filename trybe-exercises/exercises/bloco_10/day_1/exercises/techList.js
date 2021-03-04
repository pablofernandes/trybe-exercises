function techList(techsArray, name) {
    if (!techsArray || techsArray.length === 0) {
        return "Vazio!";
    }
    const techListWithName = [];
    const sortedTechsArray = techsArray.sort();
    sortedTechsArray.forEach((tech) => {
        const techObj = {};
        techObj.name = name;
        techObj.tech = tech;
        techListWithName.push(techObj);
    });
    return techListWithName;
}

module.exports = techList;