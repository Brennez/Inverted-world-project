import app from "../firebase/app.js"

// Importa os módulos do serviço que estamos usando neste caso o firestore
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellFireClube(subscription){
    //Pega o banco de dados e passa como parametro o app e retorna o banco 
    const db = getFirestore(app); 
    //função que pega como parametro o banco e a collection que foi criada no firebase e retorna a collection
    const hellFireClubCollection = collection(db, "hellfire-club");

    // Adiciona um documento passando a collection onde irá ser salva, e a subscription q é a coisa que vai 
    // ser salva e retorna uma promisse com a referencia pro documento que foi salvo
    const docRef = await addDoc(hellFireClubCollection, subscription); 

    return docRef.id;
}   


export async function getHellFireClubColletctions(){
        const db = getFirestore(app);
        const hellFireClubCollection = collection(db, "hellfire-club");
        const subscriptions = hellFireClubCollection.docs.map(doc => doc.data());
        return subscriptions;
}

