describe ("API testing", () => {

it ("TC01_GET isteği", () =>{

cy.request ("https://httpbin.org/get").then ((response)=> {

assert.equal(response.status, 200);
expect(response.status).to.eq(200);

})

});

it ("TC02_GET isteği", () =>{

const rq ={

method: 'GET',

url: "https://httpbin.org/get",
failOnStatusCode: false

}    


cy.request (rq).then ((response)=> {


assert.equal(response.status, 200);

expect(response.status).to.eq(200);

console.log ("response ::::::::", response)

cy.log ("response ::::::::", JSON.stringify (response))
cy.log ("response body ::::::::", JSON.stringify (response.body))
cy.log ("response headers ::::::::", JSON.stringify (response.headers))
cy.log ("response status ::::::::", JSON.stringify (response.status))
cy.log ("response statusText::::::::", JSON.stringify (response.statusText))
cy.log ("response duration ::::::::", JSON.stringify (response.duration))
})
});
it ("TC03_GET isteği QS", () =>{

const rq ={

method: 'GET',

url: "https://httpbin.org/get",
qs:{
id:"1",
name: "Mr"
},
failOnStatusCode: false

}    


cy.request (rq).then ((response)=> {


assert.equal(response.status, 200);

expect(response.status).to.eq(200);
cy.log ("response body ::::::::", JSON.stringify (response.body))

})
});
it ("TC04_POST isteği Body", () =>{

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

})
});
it ("TC05_POST isteği Body", () =>{

const body ={
name:"Mr.",
    role:"QA",
    age:30

}
const rq ={

method: 'POST',

url: "https://httpbin.org/post",
body: body,
failOnStatusCode: false

}    


cy.request (rq).then ((response)=> {


assert.equal(response.status, 200);

expect(response.status).to.eq(200);
cy.log ("response body ::::::::", JSON.stringify (response.body))

})
});
it ("TC06_POST isteği with Body", () =>{

const body ={
name:"Mr.",
    role:"QA",
    age:30

}
const rq ={

method: 'POST',

url: "https://httpbin.org/post",
body: body,
headers: {
"content-Type":"application/json",
"conection":"keep-alive",
"user-agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
},
failOnStatusCode: false

}    


cy.request (rq).then ((response)=> {


assert.equal(response.status, 200);

expect(response.status).to.eq(200);
cy.log ("response body ::::::::", JSON.stringify (response.body))
cy.log ("response body ::::::::", JSON.stringify (response.headers))
})
});


})