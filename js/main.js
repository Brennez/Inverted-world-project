import {subscribeToHellFireClube} from '../js/firebase/hellFireClub.js'; //importa o controller

const txtName = document.getElementById("txtName");

const txtEmail = document.getElementById("txtEmail");

const txtLevel = document.getElementById("txtLevel");

const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener('click', async ()=> {
    const subscription ={
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscriptionId = await subscribeToHellFireClube(subscription);
    console.log(`Inscrição concluida com sucesso: ${subscriptionId}`);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';

})



