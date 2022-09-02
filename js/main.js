import {getHellFireClubColletctions, subscribeToHellFireClube} from '../js/firebase/hellFireClub.js'; //importa o controller

const txtName = document.getElementById("txtName");

const txtEmail = document.getElementById("txtEmail");

const txtLevel = document.getElementById("txtLevel");

const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");

const subscriptionList = document.getElementById("subscriptions");

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

async function loadData(){
    const subscriptions = await getHellFireClubColletctions();

    // subscriptionList.innerHTML = subscriptions.map(sub => `
    //     <li>
    //         ${sub.name}
    //     </li>
    // `).join(" ")
    // console.log(subscriptions);
}

loadData();


