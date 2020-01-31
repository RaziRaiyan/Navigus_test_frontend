
async function getResults() {
    const res = await axios.get('localhost:3000/products');
    console.log(res);
}

getResults();