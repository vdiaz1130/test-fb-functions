# Test FB Functions

To reproduce issue:

1. Clone project
2. cd into functions directory
3. npm install packages
4. Replace
5. npm run serve
6. Visit emulators (http://localhost:4002/firestore/data)
7. Start "users" collection (note log in terminal)
   Says Beginning execution of "addUserToIndex"
8. Start "brands" collection (note log in terminal)
   Says Beginning execution of "addUserToIndex"
9. Edit users document (note log in terminal)
   Beginning execution of "addUserToIndex"
10. Edit brands document (note log in terminal)
    Beginning execution of "addUserToIndex"
11. Delete users document (note log in terminal)
    Errors
12. Delete brands document (note log in terminal)
    Errors
