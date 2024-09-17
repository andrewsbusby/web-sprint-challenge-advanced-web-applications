# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
    A token is used as an identifier for authentication. I is something that is randomly generated for someone.
2. What steps can you take in your web apps to keep your data secure?
    You can create a login form with username and password that has to be authenticated. Have privateroutes set up that will only allow useres who are logged in to view private pages or items.
3. Describe how web servers work.
    Web servers are where data for a website can be held. It is where someone request information using a domain name. 
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    C is for create so we could use axios.create().
    R is for read so we would use axios.get().
    U is for update and we use axios.put() to make updates.
    D is for delete and axios.delete() is used. You need to make sure with put and delete that specific id's are being used so the correct things are updated or deleted.