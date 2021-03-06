data_environment_asphyxie = [    
    {
        title: "Asphyxie",
        icon: "drowning",
        subtitle: "Retenir sa respiration",
        description: "Vous pouvez retenir votre respiration pendant un nombre de minutes égal à 1 + modificateur de Constitution",
        reference: "MDR, pg. 274.",
        bullets: [
            "Quand une créature n’a plus d’air ou qu’elle est en train d’étouffer, elle peut survivre un nombre de rounds égal à son modificateur de Constitution (avec un minimum de 1 round)",
			"Au début du round suivant, son nombre de point de vie est réduit à 0 et elle agonise. Elle ne peut pas regagner de point de vie ou être stabilisée tant qu’elle ne peut pas respirer."
        ]
    }
]

data_environment_obscurance = [
    {
        title: "Visibilité réduite",
        icon: "bleeding-eye",
        subtitle: "Désavantage de Perception",
        description: "Une zone faiblement éclairée, une brume légêre ou une végétation clairsemée",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures sont <b>désavantagées lors des tests de Sagesse (Perception)</b> liés à la perception visuelle."
        ]
    },
    {
        title: "Visibilité nulle",
        icon: "lightning-tear",
        subtitle: "Champ de vision entiêrement bloqué",
        description: "Obsurité, un épais brouillard ou une végétation dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature est considée comme sujette à <b>l'état spécial aveuglé</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumiêre vive",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "La plupart de créatures voient normalement",
        reference: "PHB, pg. 183.",
        bullets: [
            "Même quand le temps est couvert, la lumiêre est considérée comme vive. C'est le cas des zones éclairées par des torches, des feux ou autres sources de lumiêre qui illuminent un périmêtre donné."
        ]
    },
    {
        title: "Lumiêre faible",
        icon: "semi-closed-eye",
        subtitle: "Visibilité réduite",
        description: "Visibilité réduite, appelée également pénombre",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une zone faiblement éclairée se situe généralement entre une zone de lumiêre vive, et les ténébres qui se trouvent au-delà.",
            "La lumiêre de l'aube et du crépuscule est considérée comme une lumiêre de faible intensité, de même pour une pleine lune brillante."
        ]
    },
    {
        title: "Ténébres",
        icon: "worried-eyes",
        subtitle: "Visibilité nulle",
        description: "Les ténébres créent une zone de visibilité nulle",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les personnages sont dans les ténébres quand ils se trouvent à l'extérieur en pleine nuit (incluant les nuits éclairées par la lune), dans un donjon ou autres endroits sans source de lumiêre.",
			"Une zone de ténébres magiques est également considérée comme de visibilité nulle."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        icon: "one-eyed",
        subtitle: "Voir sans perception visuelle",
        description: "Percevoir son environnement sur une certaine distance sans perception visuelle",
        reference: "PHB, pg. 184.",
        bullets: [
            "Certaines créatures dépourvues d'yeux, telles que les vases, possédent ce sens. C'est le cas également des créatures dotées de la capacité d'écholocalisation ou de sens particuliêrement aiguisés, comme les chaves-souris et les dragons véritables."
        ]
    },
    {
        title: "Vision dans le noir",
        icon: "semi-closed-eye",
        subtitle: "Voir dans le noir",
        description: "Capacité de voir dans le noir sur une certaine distance",
        reference: "PHB, pg. 185.",
        bullets: [
            "Une créature peut voir dans une zone faiblement éclairée comme s'il s'agissait d'une <b>zone de lumiêre vive</b>, et dans les ténébres comme s'il s'agissait d'une zone de <b>lumiêre faible</b>.",
            "Une créature ne peut pas distinguer les couleurs dans les ténébres, seulement des nuances de gris."           
        ]
    },
    {
        title: "Vision parfaite",
        icon: "eye-shield",
        subtitle: "Voir dans les ténébres",
        description: "Une créature peut voir parfaitement dans les ténébres",
        reference: "PHB, pg. 185.",
        bullets: [
            "Une créature peut voir dans les ténébres et les ténébres magiques. Elle peut également voir les créatures et les objets invisibles, détecter à coup sÃ»r les illusions visuelles et réussir automatiquement son jet de sauvegarde contre celles-ci.",
            "De plus, elle peut percevoir la forme d'origine d'un métamorphe ou d'une créature transformée par magie et voir dans le plan éthéré."
        ]
    }
]

data_environment_cover = [
    {
        title: "Abri partiel",
        icon: "broken-shield",
        subtitle: "Couvert à 50%",
        description: "Une cible est en abri partiel si elle est couverte à 50% par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Un obstacle de type muret, une grand meuble, protêge au moins la moitié de son corps.",
            "Une cible qui bénéficie de cet abri dispose d'un <b>bonus de +2 à sa CA et à ses jets de sauvagarde de Dextérité</b>.",
            "Si la créature bénéficie de plusieurs types de couvertures, prendre celle qui la protége le plus."
        ]
    },
    {
        title: "Abri important",
        icon: "cracked-shield",
        subtitle: "Couvert à 75%",
        description: "Une cible est en abri important si elle est couverte à 75% par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Un obstacle de type herse, un tronc d'arbre, protêge au moins les trois quarts de son corps.",
            "Une cible qui bénéficie de cet abri dispose d'un <b>bonus de +5 à sa CA et à ses jets de sauvagarde de Dextérité</b>.",
            "Si la créature bénéficie de plusieurs types de couvertures, prendre celle qui la protége le plus."
        ]
    },
    {
        title: "Abri total",
        icon: "shield",
        subtitle: "Couvert à 100%",
        description: "Une cible est en abri total si elle est couverte à 100% par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Une cible en abri total <b>ne peut être ciblée directement </b> par une attaque ou par un sort, mais certains sorts disposant d'une zone d'effet peuvent toucher une créature en abri total.",
            "Si la créature bénéficie de plusieurs types de couvertures, prendre celle qui la protége le plus."
        ]
    }
]