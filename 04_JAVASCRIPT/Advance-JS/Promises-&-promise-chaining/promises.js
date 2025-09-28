function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success = false;
            if (success) {
                resolve(`Data fetched successfully`)
            } else {
                reject(`Error fetching data`)
            }
        }, 3000);
    })
}

fetchData()
    .then((data) => console.log(data))
    // .then((data) => {
    //     console.log(data);
    // })
    .catch((error) => console.log(error))