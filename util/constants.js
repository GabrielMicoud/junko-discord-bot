const MESSAGES = {
    COMMANDS: {
        SADMIN: {
            EVAL: {
                name: 'eval',
                description: 'Renvoie un code Javascript testé. Cette commande n\'est accessible que pour Gaby#6272, le créateur du bot.',
                argsNeeded: true,
                usage: "<code à tester>",
                cooldown: 3,
                category: 'sadmin',
                isUserAdmin: true,
                permissions: false,
            },
            MOONREPLY: {
                name: 'moonreply',
                description: 'Ajoute une réponse au mot Lune dans la base de données. Cette commande n\'est accessible que pour Gaby#6272, le créateur du bot.',
                argsNeeded: true,
                usage: "<réponse>",
                cooldown: 3,
                category: 'sadmin',
                isUserAdmin: true,
                permissions: false,
            },
            JOINMESSAGE: {
                name: 'joinmessage',
                description: 'Ajoute un message de bienvenue dans la base de données. Cette commande n\'est accessible que pour Gaby#6272, le créateur du bot.',
                argsNeeded: true,
                usage: "<message>",
                cooldown: 3,
                category: 'sadmin',
                isUserAdmin: true,
                permissions: false,
            },
            LEAVEMESSAGE: {
                name: 'leavemessage',
                description: 'Ajoute un message d\'adieu dans la base de données. Cette commande n\'est accessible que pour Gaby#6272, le créateur du bot.',
                argsNeeded: true,
                usage: "<message>",
                cooldown: 3,
                category: 'sadmin',
                isUserAdmin: true,
                permissions: false,
            },
        },
        ADMIN: {
            CONFIG: {
                name: 'config',
                description: 'Modifie les paramètres du bot sur ce serveur. Cette commande n\'est accessible que pour les membres ayant la permission \`Gérer les messages\`. \n\nUtilisez-la sans les champs optionnels pour plus de détails.',
                argsNeeded: false,
                usage: "<commande de config (optionnel)> <valeur (optionnel)>.",
                cooldown: 3,
                category: 'admin',
                isUserAdmin: true,
                permissions: false,
            },
        },
        MISC: {
            HELP: {
                name: 'help',
                description: 'Renvoie une liste de commandes ou des informations sur une commande précise.',
                argsNeeded: false,
                usage: "<nom de la commande (optionnel)>",
                cooldown: 3,
                category: 'misc',
                isUserAdmin: false,
                permissions: false,
            },
            EMBED: {
                name: 'embed',
                description: 'Crée un embed, un message plus classe.',
                argsNeeded: false,
                usage: "",
                cooldown: 10,
                category: 'misc',
                isUserAdmin: false,
                permissions: false,
            },
            PING: {
                name: "ping",
                description: "Teste la connexion du bot en renvoyant 'Pong !'.",
                argsNeeded: false,
                usage: "",
                cooldown: 10,
                category: 'misc',
                isUserAdmin: false,
                permissions: false,
            },
        },
    },
    EVENTS: {
        PRESSF: {
            name: "press F",
            description: "Réagit aux messages contenant 'press F' avec l'emoji F",
        },
        DI: {
            name: "di-",
            description: "Répète le contenu des messages commençant par 'di-'",
        },
        MOON: {
            name: "moon",
            description: "Réagit aux messages contenant le mot 'Lune'",
        },
        JOIN: {
            name: "join",
            description: "Ajoute un message de bienvenue, dans le salon de bienvenue",
        },
        LEAVE: {
            name: "leave",
            description: "Ajoute un message d'adieu, dans le salon spécifié",
        },
    },
}

exports.MESSAGES = MESSAGES;