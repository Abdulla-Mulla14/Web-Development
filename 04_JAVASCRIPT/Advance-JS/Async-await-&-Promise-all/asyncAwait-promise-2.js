function postData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posting the data")
        }, 2000);
    })
}

function commentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Commenting the data")
        }, 4000);
    })
}

async function mergeData() {
    console.log("Fetching start...");
    // const postDatas = await postData()
    // const comData = await commentData()
    const [postDatas, comData] = await Promise.all([postData(), commentData()])
    console.log(postDatas);
    console.log(comData);
    console.log("Finished fetching");
    
}

mergeData()



