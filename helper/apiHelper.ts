import request from "supertest";

(async function GET(){
    let res=await request("https://reqres.in/api/users?page=2")
    .get("https://reqres.in/api/users?page=2")
    console.log(`${JSON.stringify(res)}`);
})()