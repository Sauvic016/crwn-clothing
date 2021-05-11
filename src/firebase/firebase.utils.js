import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBrI4yJVdcG_E1O1mZjEtdjB6SDJYVdfJg",
	authDomain: "crwn-clothing-68ae4.firebaseapp.com",
	projectId: "crwn-clothing-68ae4",
	storageBucket: "crwn-clothing-68ae4.appspot.com",
	messagingSenderId: "854362619522",
	appId: "1:854362619522:web:8c1cad824e6d0a705afe9b",
	measurementId: "G-LE829R87P9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		// If there is no data create data from userAuth object
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user ", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
