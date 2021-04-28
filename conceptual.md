### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  It is an token used for authenticating API routes

- What is the signature portion of the JWT?  What does it do?
    The payload of the tokens are signed using a secret key so that it can be validated later. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, that's why secret info should not be kept in payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
    The JWT is maintained on the client-side, so they do not need to be accessed via database and server-side operations

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test a single function, Integrations tests involve testing multiple functions/modules and how they interact with each other, End-to-End tests test the complete app, everything.

- What is a mock? What are some things you would mock?
  Often used with unit testing, to test something the might be out of developer's control.  Testing an AJAX request for a (possibly) slow external API, for instance, or a random number, create a dummy function that will 'mock' the original.

- What is continuous integration?
  Rather than putting all your code up at once, when an app is complete, changes are continually 'integrated' in to the code as the app develops.

- What is an environment variable and what are they used for?
  A variable located outside the app itself, and good for secret passwords/keys.  This way I can have a password I don't want to share with everyone, without hardcoding it where everyone can see.

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development.  Tests are written first, and everything is written to fit and pass the tests before continuing development.  The benefits are you will hopefully have less bugs in the end.  The drawbacks are that you are constantly writing tests, slowing the development of features for the app (although maybe it ultimately saves time). 

- What is the value of using JSONSchema for validation?
      You use sample data to generate validation to make sure all JSON is formatted correctly. 

- What are some ways to decide which code to test?
    In general test API rather than the database.

- What are some differences between Web Sockets and HTTP?
  Web Sockets opens an exchange or 'tunnel', whereas  HTTP sends a single request and receives a single response at a time.  

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  Flask because I thought the Flask portion was more in-depth in the curriculum.  Node Express was taught only through json responses in postman.  Node express seems 'messy'. Is that the technical term? 
