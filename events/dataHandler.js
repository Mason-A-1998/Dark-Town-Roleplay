async function createCmd(client) {
    const data = [
        {},
        {
            name: 'leden',
            description: 'Bekijk de aantal serverleden.',
        },
        {
            name: 'avatar',
            description: 'Bekijk je eigen of iemand anders ze avatar.',
            options: [
                {
                    name: 'persoon',
                    description: 'Tag de persoon waarvan jij zijn avatar wilt zien.',
                    type: 'USER',
                    required: true
                },
            ]
        },
        {
            name: 'userinfo',
            description: 'Bekijk de informatie van een persoon.',
            options: [
                {
                    name: 'persoon',
                    description: 'Tag de persoon waarvan jij de informatie wilt zien.',
                    type: 'USER',
                    required: true
                },
            ]
        },
        {
            name: 'review',
            description: 'Laat uw review achter via deze command.',
            options: [
                {
                    name: 'aantal-sterren',
                    description: 'Voer hier het aantal sterren in! (Max 5)',
                    type: 'NUMBER',
                    required: true
                },
                {
                    name: 'jouw-review',
                    description: 'Vul hier de tekst in!',
                    type: 'STRING',
                    required: true
                }
            ]
        },
        {
            name: 'say',
            description: 'Verstuur een bericht met de bot.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Selecteer het kanaal waarin je het bericht wilt verzenden',
                    type: 'CHANNEL',
                    required: true
                },
                {
                    name: 'bericht',
                    description: 'Voer het bericht in dat je wilt verzenden.',
                    type: 'STRING',
                    required: true
                }
            ]
        },
        {
            name: 'sayembed',
            description: 'Verstuur een gepersonaliseerd bericht in een embed.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Selecteer het kanaal waarin je het bericht wilt verzenden',
                    type: 'CHANNEL',
                    required: true
                },
                {
                    name: 'titel',
                    description: 'Voer de titel in van de embed.',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'bericht',
                    description: 'Voer het bericht in dat je wilt verzenden.',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'footer',
                    description: 'Voer de footer in, dit is de tekst die onderaan komt te staan. (Bijv je server naam)',
                    type: 'STRING',
                    required: true
                }
            ]
        },
        {
            name: 'setup-review',
            description: 'Stel een kanaal in wat u wilt gebruiken voor de reviews.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Tag het kanaal dat u als review-kanaal wilt gebruiken.',
                    type: 'CHANNEL',
                    required: true,
                },
            ]
        },
        {
            name: 'setup-suggestie',
            description: 'Stel een kanaal in wat u wilt gebruiken voor de suggesties.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Tag het kanaal dat u als suggestie-kanaal wilt gebruiken.',
                    type: 'CHANNEL',
                    required: true,
                },
            ]
        },
        {
            name: 'setup-bugs',
            description: 'Stel een kanaal in wat u wilt gebruiken voor de bugs.',
            options: [
                {
                    name: 'kanaal',
                    description: 'Tag het kanaal dat u als bug-kanaal wilt gebruiken.',
                    type: 'CHANNEL',
                    required: true,
                },
            ]
        },
        {
            name: 'setup-logs',
            description: 'Stel alle log kanalen in.',
            options: [
                {

                },
                {
                    name: 'timeout-logs',
                    description: 'Tag het kanaal dat u wilt gebruiken voor de timeout-logs.',
                    type: 'CHANNEL',
                    required: true,
                },
            ]
        },
        {
            name: 'suggestie',
            description: 'Dien een suggestie in.',
            options: [
                {
                    name: 'suggestie',
                    description: 'Dien je suggestie in..',
                    type: 'STRING',
                    required: true
                },
            ]
        },
        {
            name: 'bug',
            description: 'Meld een bug.',
            options: [
                {
                    name: 'bug',
                    description: 'Vul je bug in.',
                    type: 'STRING',
                    required: true
                },
            ]
        },
        {
            name: 'timeout',
            description: 'Timeout een persoon.',
            options: [
                {
                    name: 'persoon',
                    description: 'Tag de gebruiker die je een timeout wilt geven.',
                    type: 'MENTIONABLE',
                    required: true
                },
                {
                    name: 'tijd',
                    description: 'Hoelang de timeout moet duren.',
                    type: 'STRING',
                    required: true
                },
                {
                    name: 'reden',
                    description: 'Geef een reden op.',
                    type: 'STRING',
                    required: true
                },
            ]
        },
    ]
    await client.application?.commands.set(data);
}

module.exports = { createCmd }