describe ("API testing - assertion", () => {


it ("TC01_POST isteği assertion", () =>{

const rq ={

method: 'POST',

url: "https://httpbin.org/post",
body: {
    name:"Mr.",
    role:"QA",
    age:30

    
},
failOnStatusCode: false
}    


cy.request (rq).then ((response)=> {

assert.equal(response.status, 200);

expect(response.status).to.eq(200);
cy.log ("response body ::::::::", JSON.stringify (response.body))

assert.equal(response.body.json.name, "Mr.");



})

});
})