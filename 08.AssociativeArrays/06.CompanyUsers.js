function companyUsers(input){
    let companies = {};
    for (let data of input){
        let [companyName, employeeID] = data.split(" -> ");
        if (Object.keys(companies).includes(companyName)) {
            companies[companyName].add(employeeID);
        } else {
            companies[companyName] = new Set([employeeID]);
        }
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (let company of sorted){
        console.log(company[0]);
        Array.from(company[1]).forEach(element => console.log(`-- ${element}`));
    }
}

/* companyUsers(['SoftUni -> AA12345',
            'SoftUni -> BB12345',
            'Microsoft -> CC12345',
            'HP -> BB12345']); */

/* companyUsers(['SoftUni -> AA12345',
            'SoftUni -> CC12344',
            'Lenovo -> XX23456',
            'SoftUni -> AA12345',
            'Movement -> DD11111']); */