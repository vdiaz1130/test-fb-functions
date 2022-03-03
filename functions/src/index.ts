import * as functions from "firebase-functions";

export const addUserToIndex = functions.firestore.document('users/{itemId}').onCreate((snapshot, context) => {
  console.log('addUserToIndex: ', `users/{itemId}`);
  return 'addUserToIndex';
});

export const updateUserIndex = functions.firestore.document('users/{itemId}').onUpdate((change, context) => {
  console.log('updateUserIndex: ', `users/{itemId}`);
  return 'updateUserIndex';
});

export const deleteUserFromIndex = functions.firestore.document('users/{itemId}').onDelete((snapshot, context) => {
  console.log('deleteUserFromIndex: ', `users/{itemId}`);
  return 'deleteUserFromIndex';
});

export const addBrandToIndex = functions.firestore.document('brands/{itemId}').onCreate((snapshot, context) => {
  console.log('addBrandToIndex: ', `brands/{itemId}`);
  return 'addBrandToIndex';
});

export const updateBrandIndex = functions.firestore.document('brands/{itemId}').onUpdate((change, context) => {
  console.log('updateBrandIndex: ', `brands/{itemId}`);
  return 'updateBrandIndex';
});

export const deleteBrandFromIndex = functions.firestore.document('brands/{itemId}').onDelete((snapshot, context) => {
  console.log('deleteBrandFromIndex: ', `brands/{itemId}`);
  return 'deleteBrandFromIndex';
});
