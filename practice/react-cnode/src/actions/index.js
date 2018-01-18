import Fetch from '../utils/fetch'

Fetch.getRequest("https://phodal.github.io/growth-api-gitbook/api.json", null, (data) => {
    console.log(data);
},(error) =>{
    console.log(error)
});

Fetch.getRequest("/api/v1/topics", null, (data) => {
    console.log(data);
},(error) =>{
    console.log(error)
});

