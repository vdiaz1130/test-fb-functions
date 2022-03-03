# Test FB Functions

To reproduce issue:

1. Clone project
2. cd into functions directory
3. Review functions/src/index.ts
4. npm install packages
5. Replace "MY_FB_PROJECT" with your project ID
6. npm run serve
7. Visit emulators (http://localhost:4002/firestore/data)
8. Start "users" collection (note log in terminal)
   Says Beginning execution of "addUserToIndex"
9. Start "brands" collection (note log in terminal)
   Says Beginning execution of "addUserToIndex" should be addBrandToIndex
10. Edit users document (note log in terminal)
    Beginning execution of "addUserToIndex" should be updateUserIndex
11. Edit brands document (note log in terminal)
    Beginning execution of "addUserToIndex" should be updateBrandIndex
12. Delete users document (note log in terminal)
    Errors - should execute deleteUserFromIndex
13. Delete brands document (note log in terminal)
    Errors - should execute deleteBrandFromIndex
