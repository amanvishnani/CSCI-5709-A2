let addresses = {
    1: {
        id: 1,
        name: "Aman Vishnani",
        mobile: "410-430-0955",
        street: "2990  Harron Drive, Cockeysville, Maryland, 21030",
    },
    2: {
        id: 2,
        name: "Aman Vishnani",
        mobile: "706-796-7507",
        street: "1803  Riverside Drive, Augusta, Georgia, 30906",
    }
}


async function getAllAddresses() {
    return Object.values(addresses)
}

async function getAddressById(id) {
    return addresses[id];
}

export {
    getAllAddresses,
    getAddressById
}