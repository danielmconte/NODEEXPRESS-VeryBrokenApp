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

- What is continuous integration?
  Rather than putting all your code up at once, when an app is complete, changes are continually 'integrated' in to the code as the app develops.
- What is an environment variable and what are they used for?
  

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What are some differences between Web Sockets and HTTP?
  Web Sockets opens an exchange or 'tunnel', whereas  HTTP sends a single request and receives a single response at a time.  
- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  Flask because I thought the Flask portion was more in-depth in the curriculum.  Node Express was taught only through json responses in postman.  Node express seems 'messy'. Is that the technical term? 
