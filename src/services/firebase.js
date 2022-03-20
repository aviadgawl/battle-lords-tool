import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import firebaseConfig from '../../configs/firebase-config';

initializeApp(firebaseConfig);

export const createPlayer = (playerData) => {
    const db = getDatabase();
    const reference = ref(db);
    set(reference, playerData);
}

export const checkPlayerNameValidity = (playerName) => {

}

export const updatePlayer = (playerData) => {
    const db = getDatabase();
    const reference = ref(db);
    set(reference, playerData);
}
