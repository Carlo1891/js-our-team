// Viene fornita una piccola tabella che rappresenta i membri di un team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
// Chiudete almeno una commit per milestone.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.

const teamList = [
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg',
    },

    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg',
    },

    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    },

    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },

    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },

    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },
];

const container = document.getElementById('cardContainer');

for (let i = 0; i < teamList.length; i++) {
    const currentMember = teamList [i];
    console.log (`${currentMember.name} ${currentMember.role} ${currentMember.img}`);
} 