// import { firestore } from '../../config/index';
// import {
//     collection,
//     getDoc,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     doc,
//     DocumentReference,
//     DocumentData
// } from 'firebase/firestore';

// const collectionRef = collection(firestore, 'react-media-database');

// export const addMovie = async (item: any) => {
//     return await addDoc(collectionRef, { category: 'movie', content: item });
// }

// export const addTelevisionShow = async (item: any) => {
//     return await addDoc(collectionRef, { category: 'tv', content: item });
// }

// export const addVideoGame = async (item: any) => {
//     return await addDoc(collectionRef, { category: 'game', content: item });
// }

// export const getAllMedia = async () => {
//     const snapshot = await getDoc(collectionRef);
//     return (snapshot as any)?.docs?.map((doc: any) => ({ id: doc.id, ...doc.data() }));
// }

// export const updateMedia = async (id: any, updatedMedia: any) => {
//     const itemDoc = doc(firestore, 'media', id);
//     return await updateDoc(itemDoc, updatedMedia);
// }

// export const deleteMedia = async (id: any) => {
//     const itemDoc = doc(firestore, 'media', id);
//     return await deleteDoc(itemDoc);
// }

export const service = {};
