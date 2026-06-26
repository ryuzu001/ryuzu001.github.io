const rooms = [
  {
    name: "303 Escape",
    lat: 39.857120087493335,
    lng: -104.99476994404374,
    photoname: "303_",
    rooms: [
      { name:"Homicide Hotel: Room 303" },
      { name:"Homicide Hotel: Dark Heart of the Hotel" }
    ]
  },
  {
    name: "60 to Escape",
    lat: 42.04647380178185,
    lng: -88.03721495633631,
    photoname: "62_",
    rooms: [
      { name:"Lockbuster Video" },
      { name:"Mystery Manor" },
      { name:"Cheesie's Pizza Party" },
      { name:"Magic Heist" },
      { name:"Arctic Expedition" },
      { name:"Jurassic Outpost", index:11 }
    ]
  },
  {
    name: "60 to Escape",
    lat: 42.39157489044134,
    lng: -87.95835047116668,
    photoname: "62_",
    rooms: [
      { name:"Blast from the Past", index:6 },
      { name:"Museum Heist", index:7 },
      { name:"Containment", index:8 },
      { name:"Duke's Farm", index:9 },
      { name:"Hidden Temple", index:10 }
    ]
  },
  {
    name: "60 to Escape",
    lat: 42.94929211156928,
    lng: -88.0046402252281,
    photoname: "62_",
    rooms: [
      { name:"INVASION!", index:12 }
    ]
  },
  // melrose
  {
    name: "60out",
    lat: 34.08330181419082,
    lng: -118.34818307238706,
    photoname: "60out_",
    rooms: [
      { name:"Jumanji: Welcome to the Jungle" }
    ]
  },
  // ktown
  {
    name: "60out",
    lat: 34.072030193497724,
    lng: -118.30929976259493,
    photoname: "60out_",
    rooms: [
      { name:"Turing Test", index:2 }
    ]
  },
  // hhla
  {
    name: "60out",
    lat: 33.97756254348784,
    lng: -118.39112081919366,
    photoname: "60out_",
    rooms: [
      { name:"Hotel on Route 66", index:3 },
      { name:"The Smurfs", index:4 },
      { name:"Godzilla vs. Kong", index:5 },
      { name:"Titanic", index:6 }
    ]
  },
  // hollywood
  {
    name: "60out",
    lat: 34.09543182533093,
    lng: -118.30902156692697,
    photoname: "60out_",
    rooms: [
      { name:"Wizard's Treasure", index:7 },
      { name:"Big Brain Labs", index:9 }
    ]
  },
  // silver lake
  {
    name: "60out",
    lat: 34.06728216619852,
    lng: -118.25561734048456,
    photoname: "60out_",
    rooms: [
      { name:"Case '93", index:8 }
    ]
  },
  {
    name: "Abduction",
    lat: 43.25795674486781,
    lng: -2.933984060326666,
    photoname: "blue",
    rooms: [
      { name:"Abduction 3: The Exam" }
    ]
  },
  {
    name: "Appleseed Avenue",
    lat: 34.37906617325972,
    lng: -118.545165387459,
    photoname: "appleseed",
    rooms: [
      { name:"Election Day" }
    ]
  },
  {
    name: "Arcane Escape Room",
    lat: 34.37902946154018,
    lng: -118.54515372880611,
    photoname: "arcane",
    rooms: [
      { name:"The Hideout" },
      { name:"The Ghost of Mentryville" }
    ]
  },
  {
    name: "Arcanum",
    lat: 41.430430657358116,
    lng: 1.7856098562015057,
    photoname: "arcanum",
    rooms: [
      { name:"The Possession" }
    ]
  },
  {
    name: "Atrium Mortis",
    lat: 50.99996966503671,
    lng: 4.141436623251342,
    photoname: "atrium",
    rooms: [
      { name:"In Flander's Field" }
    ]
  },
  {
    name: "Back in Time",
    lat: 33.8101415610792,
    lng: -118.30802706468371,
    photoname: "backintime",
    rooms: [
      { name:"Inside Area 51" },
      { name:"The Sword of Hattori Hanzo", svg:1 },
      { name:"Salem Witch Hunt" }
    ]
  },
  {
    name: "Back in Time",
    lat: 33.84114808937347,
    lng: -118.2895763730477,
    photoname: "backintime",
    rooms: [
      { name:"Blackbeard's Lost Treasure", index:4 },
      { name:"The Vampire Slayers", index:5 },
      { name:"Special Ops: Fate of Agent Smith", index:8 }
    ]
  },
  {
    name: "Back in Time",
    lat: 33.82921240315172,
    lng: -118.34967175844896,
    photoname: "backintime",
    rooms: [
      { name:"Wanted: Dead or Alive?", index:6 },
      { name:"Operation: Santa's List", index:7 },
      { name:"Cabin 13", index:9 }
    ]
  },
  {
    name: "Baker Street Escapes",
    lat: 35.47588483144888,
    lng: -97.51262440675654,
    photoname: "bakerstreet",
    rooms: [
      { name:"The Time Travelers" }
    ]
  },
  {
    name: "Bite The Fly",
    lat: 40.379539296591965,
    lng: -3.628728443019064,
    photoname: "btf",
    rooms: [
      { name:"Bites Motel" },
      { name:"Tao Room Escape: Japanese Massage Parlor" }
    ]
  },
  {
    name: "Black Lake Escape Room",
    lat: 40.549393310676045,
    lng: -3.628649771437778,
    photoname: "blacklake",
    rooms: [
      { name:"The Bride" },
    ]
  },
  {
    name: "Boss Play",
    lat: 33.18609463123403,
    lng: -117.32731670121001,
    photoname: "bossplay",
    rooms: [
      { name:"Prohibition Ransom" },
      { name:"Chocolate Factory" }
    ]
  },
  {
    name: "Boxaroo",
    lat: 42.3593240861043,
    lng: -71.05902854441122,
    photoname: "boxaroo",
    rooms: [
      { name:"The Storyteller's Secret" }
    ]
  },
  {
    name: "Brain Games",
    lat: 33.73577692436871,
    lng: -118.29360960040654,
    photoname: "braingames",
    rooms: [
      { name:"Treasure Island" },
      { name:"20 Ghosts [of Christmas]" },
      { name:"Flynn's Arcade" }
    ]
  },
  {
    name: "Breaking Point Escape Rooms",
    lat: 34.108724696635505,
    lng: -117.57358680095075,
    photoname: "breakingpoint",
    rooms: [
      { name:"The Secret of Whitmore Estate" },
      { name:"Headcase" },
      { name:"Christmas: Help Wanted" },
      { name:"The Crystal Cave" }
    ]
  },
  {
    name: "Breakout Waikiki",
    lat: 21.2791756690241,
    lng: -157.83070915844297,
    photoname: "breakout",
    rooms: [
      { name:"Armory Ambush" }
    ]
  },
  {
    name: "Can Bruna",
    lat: 41.348174941880686,
    lng: 1.7045921864807403,
    photoname: "canbruna",
    rooms: [
      { name:"Cellular Odyssey" }
    ]
  },
  {
    name: "Chambers Escape Games",
    lat: 21.3027238690949,
    lng: -157.8604001716374,
    photoname: "chambers",
    rooms: [
      { name:"The Temple" }
    ]
  },
  {
    name: "Cinema Escape Room",
    lat: 33.80254248556098,
    lng: -118.057605701221,
    photoname: "cinema",
    rooms: [
      { name:"Ark of the Covenant" },
      { name:"Office Escape" },
      { name:"Strange Thing" },
      { name:"Home All Alone" }
    ]
  },
  {
    name: "Cityscape Games",
    lat: 47.20715775723151,
    lng: -122.48262601897335,
    photoname: "cityscape",
    rooms: [
      { name:"Zookeeper" },
      { name:"Rockstar" }
    ]
  },
  {
    name: "Cloud Escape",
    lat: 33.86042474578805,
    lng: -117.78771781352232,
    photoname: "cloudescape",
    rooms: [
      { name:"Edeline" },
      { name:"Cold Case" }
    ]
  },
  {
    name: "Code 258 Escape Room",
    lat: 40.279304287759714,
    lng: -3.7940625010664646,
    photoname: "code258_",
    rooms: [
      { name:"The Wine Cellar" }
    ]
  },
  {
    name: "Colors Escape Room",
    lat: 40.43612574745829,
    lng: -3.645692297170522,
    photoname: "colors",
    rooms: [
      { name:"The Mine" }
    ]
  },
  {
    name: "Confusion Escapes",
    lat: 34.062571857808095,
    lng: -117.28096614267346,
    photoname: "confusion",
    rooms: [
      { name:"The Treehouse" },
      { name:"The Last Job" },
      { name:"The Treehouse [Christmas Rescue]" },
      { name:"45 Lampkin Lane" },
      { name:"Undercooked - Kitchen Chaos" },
      { name:"A.R.I" }
    ]
  },
  {
    name: "Conundrum Escape Rooms",
    lat: 39.81208706040545,
    lng: -105.08091060075444,
    photoname: "conundrum",
    rooms: [
      { name:"Path of the Gods" },
      { name:"Experiment C-73" }
    ]
  },
  {
    name: "Cooperstown Escape Rooms",
    lat: 42.700206918545334,
    lng: -74.92428520176374,
    photoname: "cooperstown",
    rooms: [
      { name:"Curse of the Bambino", webm:1 }
    ]
  },
  {
    name: "Cross Roads Escape Games",
    lat: 33.85975558203144,
    lng: -117.8239304600006,
    photoname: "crossroads",
    rooms: [
      { name:"The Hex Room" },
      { name:"The Fun House" },
      { name:"The Weeping Witch" }
    ]
  },
  {
    name: "CruPont Legacy",
    lat: 41.53157569218075,
    lng: 2.1116408950250243,
    photoname: "crupont",
    rooms: [
      { name:"NightShift" }
    ]
  },
  {
    name: "Cryogenic",
    lat: 40.430272059060535,
    lng: -3.718858303745491,
    photoname: "cryogenic",
    rooms: [
      { name:"Cryogenic" }
    ]
  },
  {
    name: "CU Adventures in Time & Space",
    lat: 40.11542153178706, 
    lng: -88.2062576178847,
    photoname: "cu_",
    rooms: [
      { name:"Wizard's Curse" },
      { name:"Game Night" },
      { name:"The Forest of Fables" },
      { name:"Scrooge's Christmas Trap" },
      { name:"Revenge of the Cabin" },
      { name:"Calling All Villians" },
      { name:"Rise of the Icarus" }
    ]
  },
  {
    name: "CubicEscape",
    lat: 37.385617095078864, 
    lng: -121.86139525872935,
    photoname: "cubic",
    rooms: [
      { name:"Room 2217" },
      { name:"Memento" }
    ]
  },
  {
    name: "Cubick Escape Room",
    lat: 41.53290235382192, 
    lng: 2.4440235418892566,
    photoname: "cubick",
    rooms: [
      { name:"The Interview" }
    ]
  },
  {
    name: "Dare 2 Escape",
    lat: 28.333602664608946,
    lng: -81.48618520081963,
    photoname: "D2E",
    rooms: [
      { name:"At the Hop Ice Cream Shoppe" }
    ]
  },
  {
    name: "De Gouden Kooi",
    lat: 51.02641972913938,
    lng: 4.475530513087133,
    photoname: "goudenkooi",
    rooms: [
      { name:"The Secret of Saint Rumoldus" },
      { name:"Han's Revenge" }
    ]
  },
  {
    name: "Deadline Escape Rooms",
    lat: 39.46156738372914,
    lng: -119.78329468670667,
    photoname: "deadline",
    rooms: [
      { name:"Camp Ruby Lake [Lady of the Lake]" },
      { name:"Dead Silence" },
      { name:"Witch Doctor" },
      { name:"Noir [Ep. 1]" }
    ]
  },
  {
    name: "Deceptive Games",
    lat: 33.67579058886421,
    lng: -117.67247818545991,
    photoname: "dg",
    rooms: [
      { name:"Return to Coulrophobia" },
      { name:"The Butcher" },
      { name:"SEV3N" }
    ]
  },
  {
    name: "Doldrick's Escape Room",
    lat: 28.33513250825666,
    lng: -81.47839300059266,
    photoname: "doldricks",
    rooms: [
      { name:"Crazy Train: The Ballad of Skeemin' Plotz" },
      { name:"Captain Spoopy Bones and the Magnificent Quest For Some Other Pirate's Treasure" }
    ]
  },
  {
    name: "Dragonborn Escape Room",
    lat: 42.846935644483885,
    lng: -2.6843540591424166,
    photoname: "dragonborn",
    rooms: [
      { name:"The Innkeeper's Son" }
    ]
  },
  {
    name: "EDscapade Games",
    lat: 37.38228489361553,
    lng: -121.8950713721245,
    photoname: "edscapade",
    rooms: [
      { name:"Hostage" }
    ]
  },
  {
    name: "Elements Escape Room",
    lat: 41.37022947072293,
    lng: 2.135730691858175,
    photoname: "elements",
    rooms: [
      { name:"Exodus" }
    ]
  },
  {
    name: "Eleventh Hour Enigma",
    lat: 36.15226705602854, 
    lng: -95.97426373012377,
    photoname: "11thhour",
    rooms: [
      { name:"Winchester's Widow" },
      { name:"Tulsa Time" },
      { name:"The Cairo Connection" }
    ]
  },
  {
    name: "Enigmik",
    lat: 41.40983385033988,
    lng: 2.1795700834764946,
    photoname: "enigmik",
    rooms: [
      { name:"The Brewery" }
    ]
  },
  {
    name: "Entangled Escape Room",
    lat: 33.80592339117554,
    lng: -117.86671439957861,
    photoname: "entangled",
    rooms: [
      { name:"The Manor" }
    ]
  },
  {
    name: "Entered",
    lat: 51.00554619256848,
    lng: 5.602888970297285,
    photoname: "entered",
    rooms: [
      { name:"Demise of the Gricers [Extended]" }
    ]
  },
  {
    name: "Escapade Games",
    lat: 33.8707544299847,
    lng: -117.90829517207513,
    photoname: "escapade",
    rooms: [
      { name:"The Invention Room" },
      { name:"Rockband" },
      { name:"Zoe Reborn" }
    ]
  },
  {
    name: "Escaparium",
    lat: 45.585921125459805,
    lng: -73.76837873000281,
    photoname: "escaparium",
    rooms: [
      { name:"The Forgotten Cathedral" },
      { name:"Magnifico" },
      { name:"Wardrobe for Sale" },
      { name:"The Lost Island of the Voodoo Queen" },
      { name:"Wardrobe for Sale" },
      { name:"The Forgotten Cathedral" },
      { name:"Control Alt Reboot" },
      { name:"Magnifico", index:9 }
    ]
  },
  {
    name: "Escape Again",
    lat: 29.588086420538254,
    lng: -95.59850780060374,
    photoname: "escapeagain",
    rooms: [
      { name:"Wizard" }
    ]
  },
  {
    name: "Escape Barcelona",
    lat: 41.448964789929065,
    lng: 2.2092611801990523,
    photoname: "escapebarcelona",
    rooms: [
      { name:"K.O.N.G Protocol" }
    ]
  },
  {
    name: "Escape Chronicles",
    lat: 34.170131667482615,
    lng: -118.36189656510982,
    photoname: "escapechronicles",
    rooms: [
      { name:"Testing Facility", webm:1 },
      { name:"Smugglers Tunnels", webm:1 }
    ]
  },
  {
    name: "Escape Factor",
    lat: 41.87943836821833,
    lng: -87.80619207808513,
    photoname: "factor",
    rooms: [
      { name:"Ghost in the Graveyard" },
      { name:"The Treehouse Raid at Fort Knocks" }
    ]
  },
  {
    name: "Escape Hour",
    lat: 30.435994042420738,
    lng: -97.68518360743106,
    photoname: "escapehour",
    rooms: [
      { name:"The Crypt" }
    ]
  },
  {
    name: "Escape Hour",
    lat: 40.30852196958094,
    lng: -111.7368698037209,
    photoname: "escapehour",
    rooms: [
      { name:"Rogue's Cove", index:2 }
    ]
  },
  {
    name: "Escape on 13th",
    lat: 40.74196815934961,
    lng: -111.90179454137224,
    photoname: "on13th_",
    rooms: [
      { name:"Arcadia" },
      { name:"Species Unknown" }
    ]
  },
  {
    name: "Escape Room 66",
    lat: 33.621625916296516,
    lng: -117.71893813374068,
    photoname: "er66_",
    rooms: [
      { name:"Prison Break" },
      { name:"Wicked Wonderland", index:4 },
      { name:"The DogHouse", index:5 }
    ]
  },
  {
    name: "Escape Room 66",
    lat: 34.052146968016494,
    lng: -118.3758888009355,
    photoname: "er66_",
    rooms: [
      { name:"Inksidious", index:2 },
      { name:"The Mush Room", index:3 }
    ]
  },
  {
    name: "Escape Room 831",
    lat: 36.61330832329757,
    lng: -121.90184200841824,
    photoname: "831_",
    rooms: [
      { name:"Alice's Dream" }
    ]
  },
  {
    name: "Escape Room 831",
    lat: 36.61612433737992,
    lng: -121.90177758823899,
    photoname: "831_",
    rooms: [
      { name:"Submergency", index:2 }
    ]
  },
  {
    name: "Escape Room Era",
    lat: 33.86087534098102,
    lng: -117.85036949172668,
    photoname: "era",
    rooms: [
      { name:"The Overgrown: Zombie Edition" },
      { name:"Christmas at Franklin's" },
      { name:"The Hide" },
      { name:"Principal's Office" },
      { name:"Christmas Escape Room - Who done it?" }
    ]
  },
  {
    name: "Escape Room Era",
    lat: 33.63332408119732,
    lng: -117.71456672980018,
    photoname: "era",
    rooms: [
      { name:"Ghost Hunter", index:6 }
    ]
  },
  {
    name: "Escape Room LA",
    lat: 34.041932456628416,
    lng: -118.25270640079268,
    photoname: "erla",
    rooms: [
      { name:"The Pyramid" },
      { name:"The Pyramid" },
      { name:"Black Dragon" },
      { name:"Here, Kitty Kitty" }
    ]
  },
  {
    name: "Escape Room Witten [Gloomworks Department]",
    lat: 51.44055038089808, 
    lng: 7.336280398400906,
    photoname: "witten",
    rooms: [
      { name:"Kuriosum: Artifact of Darkness" }
    ]
  },
  {
    name: "Escape Rush",
    lat: 50.81957640745651,
    lng: 4.388938708899385,
    photoname: "rush",
    rooms: [
      { name:"Botanist Manor" },
      { name:"Tokyo Lab" }
    ]
  },
  {
    name: "Escape Stories",
    lat: 51.27168218417503,
    lng: 7.210127738612185,
    photoname: "escapestories",
    rooms: [
      { name:"The Dark Forest" },
      { name:"Asylum of Fear" }
    ]
  },
  {
    name: "Escape The Arcade",
    lat: 33.97759665526108,
    lng: -117.3779739723359,
    photoname: "escapethearcade",
    rooms: [
      { name:"Code Samurai" }
    ]
  },
  {
    name: "Escape Utah",
    lat: 40.60610715664254,
    lng: -111.89111501276044,
    photoname: "escapeutah",
    rooms: [
      { name:"Dragon's Quest" }
    ]
  },
  {
    name: "Escapement Rooms",
    lat: 33.74928378420152,
    lng: -117.81180410117874,
    photoname: "escapement",
    rooms: [
      { name:"Art in Our Time" },
      { name:"The Tipsy Tailor" }
    ]
  },
  {
    name: "EscapeX Rooms",
    lat: 33.68952616583343,
    lng: -117.8633712300544,
    photoname: "escapex",
    rooms: [
      { name:"Mafia Heist" },
      { name:"Curse of the Black Knight" },
      { name:"Curse of the Black Knight" }
    ]
  },
  {
    name: "Escaping Belgium",
    lat: 51.26467308268533,
    lng: 5.074839187258823,
    photoname: "eb",
    rooms: [
      { name:"Erzsébet" },
      { name:"Le Prince" }
    ]
  },
  {
    name: "Escapology",
    lat: 33.309464680829045,
    lng: -111.74359432951971,
    photoname: "escapology",
    rooms: [
      { name:"Scooby-Doo and The Spooky Castle Adventure" }
    ]
  },
  {
    name: "Escapology",
    lat: 33.98681725815001,
    lng: -118.44158207233508,
    photoname: "escapology",
    rooms: [
      { name:"Haunted House", index:2 },
      { name:"7 Deadly Sins and The Curse of Crickley Church", index:3 },
      { name:"Who Stole Mona", index:4 }
    ]
  },
  {
    name: "Exit Game",
    lat: 34.06267129465794,
    lng: -118.13449889126767,
    photoname: "exit",
    rooms: [
      { name:"The AI" }
    ]
  },
  {
    name: "Exit Game",
    lat: 33.8475731146073,
    lng: -117.86104567232844,
    photoname: "exit",
    rooms: [
      { name:"13th Basement", index:2 },
      { name:"Meow! I'm a cat.", index:3 }
    ]
  },
  {
    name: "Exodus Escape Room",
    lat: 33.858599028117375,
    lng: -117.79121515866738,
    photoname: "exodus",
    rooms: [
      { name:"Villains Vendetta" },
      { name:"Olympus" },
      { name:"deFROSTed", index:7 },
      { name:"Elixir", index:8 }
    ]
  },
  {
    name: "Exodus Escape Room",
    lat: 33.73281067950992,
    lng: -117.83633865893543,
    photoname: "exodus",
    rooms: [
      { name:"Clark's Crazy Christmas", index:3 },
      { name:"Ink and Ashes", index:6 }
    ]
  },
  {
    name: "Exodus Escape Room",
    lat: 34.08509078942917,
    lng: -117.57104883008576,
    photoname: "exodus",
    rooms: [
      { name:"KnightFall", index:4 },
      { name:"Inside Job", index:5 }
    ]
  },
  {
    name: "FRIKI Escape Room",
    lat: 40.37979602426114,
    lng: -3.6049626013626934,
    photoname: "friki",
    rooms: [
      { name:"STAB" }
    ]
  },
  {
    name: "Golden Pop",
    lat: 41.39092744823459,
    lng: 2.175977225128887,
    photoname: "goldenpop",
    rooms: [
      { name:"Jurassic" },
      { name:"Catacombs" }
    ]
  },
  {
    name: "Great Room Escape",
    lat: 41.07610923833348,
    lng: -111.97580001553595,
    photoname: "gre",
    rooms: [
      { name:"Ghost Hotel", index:2 },
      { name:"Vampire", index:3 }
    ]
  },
  {
    name: "Great Room Escape",
    lat: 33.42141172076369,
    lng: -111.96554551733753,
    photoname: "gre",
    rooms: [
      { name:"Spellbound" }
    ]
  },
  {
    name: "Hall of Shadows Mystery Games",
    lat: 34.056293567904525,
    lng: -117.18124529832325,
    photoname: "hos",
    rooms: [
      { name:"Looking Glass" },
      { name:"Malevolent", index:1 }
    ]
  },
  {
    name: "Hatch Escapes",
    lat: 34.03929054041106,
    lng: -118.32032562275671,
    photoname: "hatch",
    rooms: [
      { name:"Lab Rat" },
      { name:"Lab Rat" },
      { name:"The Nest" },
      { name:"The Ladder" },
      { name:"The Nest" }
    ]
  },
  {
    name: "Hidden Donkey",
    lat: 33.691211888075536,
    lng: -117.86192339869622,
    photoname: "hiddendonkey",
    rooms: [
      { name:"Irvine School of Wizardry and the Dragon Wand" },
      { name:"Irvine School of Wizardry and the Goblin's Secrets" }
    ]
  },
  {
    name: "Himitsu Station",
    lat: 40.76314055001625,
    lng: -111.89444665300861,
    photoname: "himitsu",
    rooms: [
      { name:"The Forgotten Markets" }
    ]
  },
  {
    name: "Hostal 83",
    lat: 42.034567975678186,
    lng: 1.8800059176818493,
    photoname: "hostal83_",
    rooms: [
      { name:"Inmortum 2" }
    ]
  },
  {
    name: "Hourglass Escapes",
    lat: 47.61832644226349,
    lng: -122.3576640132686,
    photoname: "hourglass",
    rooms: [
      { name:"Evil Dead 2" },
      { name:"Mystery At Innsmouth" }
    ]
  },
  {
    name: "Illusion Escape Room",
    lat: 40.28295880798009,
    lng: -3.78858615168538,
    photoname: "illusion",
    rooms: [
      { name:"Descendants of Sokar" }
    ]
  },
  {
    name: "Immersia",
    lat: 45.62211185661392,
    lng: -73.83019367799689,
    photoname: "immersia",
    rooms: [
      { name:"Project R.E.S.E.T." },
      { name:"Salutem Medicina Institute" },
      { name:"The Grand Immersia Hotel" }
    ]
  },
  {
    name: "In Search of an Exit",
    lat: 45.534979434669424,
    lng: -122.62076148983225,
    photoname: "insearch",
    rooms: [
      { name:"Lombino's Casino" },
      { name:"Operation Gryaznayavoda" }
    ]
  },
  {
    name: "Infinity Escape",
    lat: 33.87132342394387,
    lng: -117.92370113206208,
    photoname: "infinity",
    rooms: [
      { name:"The Magic Cottage: Sister's Curse" },
      { name:"Dr. Jorg's Zombie Lab" }
    ]
  },
  {
    name: "Inland Empire Escape Rooms",
    lat: 33.940216895304076,
    lng: -117.3943141640707,
    photoname: "ieescaperoom",
    rooms: [
      { name:"Panic Room" },
      { name:"Heist" }
    ]
  },
  {
    name: "Insomnia Corporation",
    lat: 42.065471063682,
    lng: 1.9003610449872466,
    photoname: "insomnia",
    rooms: [
      { name:"The House" }
    ]
  },
  {
    name: "International Room Escape",
    lat: 33.32896347304114,
    lng: -111.79528508262862,
    photoname: "international",
    rooms: [
      { name:"Save Escapy" },
      { name:"Amazon Rainforest" }
    ]
  },
  {
    name: "Intrepid Escape Room",
    lat: 33.72016020172224,
    lng: -117.82573019751356,
    photoname: "intrepid",
    rooms: [
      { name:"The Terminal" },
      { name:"Jewel of the Sea" },
      { name:"The Stolen Relic" },
      { name:"The Haunted Terminal" },
      { name:"The Tipsy Tailor" }
    ]
  },
  {
    name: "Kadabra Escape Room",
    lat: 41.53289790908626,
    lng: 2.4364339447317334,
    photoname: "kadabra",
    rooms: [
      { name:"The Secret of Jaipur" },
      { name:"Poison" }
    ]
  },
  {
    name: "Kalon Escape",
    lat: 40.23603610551897,
    lng: -3.755797241358916,
    photoname: "kalon",
    rooms: [
      { name:"The Collector" }
    ]
  },
  {
    name: "Keystone Escape Games",
    lat: 39.52800891817756,
    lng: -119.83499887988916,
    photoname: "keystone",
    rooms: [
      { name:"Blood of the Original" },
      { name:"Dragon Alley" }
    ]
  },
  {
    name: "King's Eye Escape",
    lat: 33.76046830203585,
    lng: -118.01045700215951,
    photoname: "kingseye",
    rooms: [
      { name:"The Xtraction" }
    ]
  },
  {
    name: "Krematorium Escape Rooms",
    lat: 41.35638195605146,
    lng: 2.108653819432603,
    photoname: "krematorium",
    rooms: [
      { name:"Malum" }
    ]
  },
  {
    name: "La Clau",
    lat: 41.725111178054696,
    lng: 1.8207947005262577,
    photoname: "laclau",
    rooms: [
      { name:"Game-On" }
    ]
  },
  {
    name: "Limbus Escape Center",
    lat: 51.33714567820558,
    lng: 6.564371643142237,
    photoname: "limbus",
    rooms: [
      { name:"Panzerknacker - The Art of Stealing" }
    ]
  },
  {
    name: "Limitless Escape Games",
    lat: 37.689852076973224,
    lng: -121.80516063315281,
    photoname: "limitless",
    rooms: [
      { name:"Wizard School" }
    ]
  },
  {
    name: "Locurio",
    lat: 47.65015781338505,
    lng: -122.35026413920069,
    photoname: "locurio",
    rooms: [
      { name:"The Vanishing Act" },
      { name:"The Storykeeper" }
    ]
  },
  {
    name: "Mad Land",
    lat: 40.59505512328402, 
    lng: -3.5444494633662047,
    photoname: "madland",
    rooms: [
      { name:"Magic Universe" }
    ]
  },
  {
    name: "Maine Escape Games",
    lat: 43.629424562976574,
    lng: -70.32875414687979,
    photoname: "maine",
    rooms: [
      { name:"Uncle Ned's Cabin" }
    ]
  },
  {
    name: "Mayto Kingdom",
    lat: 42.874475064008166,
    lng: -2.6495426221854643,
    photoname: "mayto",
    rooms: [
      { name:"A Legendary Adventure" },
      { name:"You'll Dream Too" }
    ]
  },
  {
    name: "Maze Rooms",
    lat: 33.95892612293634,
    lng: -118.39560376649727,
    photoname: "maze",
    rooms: [
      { name:"Cyberpunk Samurai", index:2 }
    ]
  },
  {
    name: "Maze Rooms",
    lat: 34.07222417065293,
    lng: -118.29127027010314,
    photoname: "maze",
    rooms: [
      { name:"Lunar Mission", index:5 },
      { name:"Sky Odyssey", index:6 },
      { name:"Twisted Matrix", index:8 }
    ]
  },
  {
    name: "Maze Rooms",
    lat: 34.04187996075995,
    lng: -118.46094112124018,
    photoname: "maze",
    rooms: [
      { name:"Whatever Happened to the Garretts" }
    ]
  },
  {
    name: "Maze Rooms",
    lat: 34.06077253482947,
    lng: -118.3833241933435,
    photoname: "maze",
    rooms: [
      { name:"Ghost Hunters", index:3 },
      { name:"Avalanche", index:4 },
      { name:"The Temple of Lost Gold", index:7 }
    ]
  },
  {
    name: "Mile High Escape Ops",
    lat: 39.98576769459823,
    lng: -104.79266968061383,
    photoname: "milehigh",
    rooms: [
      { name:"Dragon Realm" },
      { name:"Contamination" }
    ]
  },
  {
    name: "Mindfox Escape",
    lat: 32.89049330514817,
    lng: -117.16291739163813,
    photoname: "mindfox",
    rooms: [
      { name:"Black & White Cafe" },
      { name:"Moriarty's Manor" }
    ]
  },
  {
    name: "MindTrap Escape Room",
    lat: 33.57782899795934,
    lng: -117.20011047817586,
    photoname: "mindtrap",
    rooms: [
      { name:"OZ" },
      { name:"Excalibur", index:4 },
      { name:"Winnie The Pooh", index:5 }
    ]
  },
  {
    name: "MindTrap Escape Room",
    lat: 33.51099803832726,
    lng: -117.1507661525463,
    photoname: "mindtrap",
    rooms: [
      { name:"Conspiracy", index:2 },
      { name:"40 Thieves", index:3 }
    ]
  },
  {
    name: "Missing at the Mortuary",
    lat: 34.15819494528286,
    lng: -118.14206969882831,
    photoname: "matm",
    rooms: [
      { name:"Missing at the Mortuary" }
    ]
  },
  {
    name: "Mission Escape Games",
    lat: 33.805306388301986,
    lng: -117.91176992339383,
    photoname: "mission",
    rooms: [
      { name:"Operation: End of Days" },
      { name:"Escape the Darkest Hour" },
      { name:"Escape the Hydeout" },
      { name:"Ultimate Bank Heist" },
      { name:"Escape the Nemesis" }
    ]
  },
  {
    name: "Mystery Avenue",
    lat: 50.82160131264632,
    lng: 3.2564388144503944,
    photoname: "mysteryave",
    rooms: [
      { name:"Houdini's Workshop" }
    ]
  },
  {
    name: "Mystery Maui",
    lat: 20.888986382844003,
    lng: -156.5026235638629,
    photoname: "mysterymaui",
    rooms: [
      { name:"The Ramen Shop" },
      { name:"Stella Superstar!" }
    ]
  },
  {
    name: "Mystic Escape Room",
    lat: 39.612382600089674,
    lng: -105.01981443624797,
    photoname: "mystic",
    rooms: [
      { name:"The Book of Souls" }
    ]
  },
  {
    name: "Nerdy By Nature",
    lat: 33.61438083195932,
    lng: -117.68094304924256,
    photoname: "nbn",
    rooms: [
      { name:"Hijinx at Joffre Manor" },
      { name:"The Lost Treasure of Captian Blackbeard" },
      { name:"The Initiation" }
    ]
  },
  {
    name: "Next Level Escape",
    lat: 51.43641889435105,
    lng: 5.481276778750794,
    photoname: "nextlevel",
    rooms: [
      { name:"Catch Me if you Can" }
    ]
  },
  {
    name: "No. 1 Escapes",
    lat: 33.687979067855224,
    lng: -117.85818635515531,
    photoname: "no1_",
    rooms: [
      { name:"Revolution" },
      { name:"Devlin Manor" },
      { name:"Battleship: The Pirate Edition" },
      { name:"SEV3N" },
      { name:"The Fortune Teller" }
    ]
  },
  {
    name: "Nodus 805",
    lat: 34.178233786091255,
    lng: -118.86670602891333,
    photoname: "nodus",
    rooms: [
      { name:"The Light Room" }
    ]
  },
  {
    name: "North Valley Escape Room",
    lat: 33.86829324723474,
    lng: -112.15196686674888,
    photoname: "northvalley",
    rooms: [
      { name:"Arizona Steampunk Railway" },
      { name:"ZZ's Big Top Circus" },
      { name:"Escape From Alcatraz" }
    ]
  },
  {
    name: "Not Another Escape Room",
    lat: 33.9167818717212,
    lng: -117.91206702927288,
    photoname: "naer",
    rooms: [
      { name:"Battleship" },
      { name:"Time Machine" }
    ]
  },
  {
    name: "NW Escape Experience",
    lat: 45.67793455398321,
    lng: -122.65657933034343,
    photoname: "nwescape",
    rooms: [
      { name:"CSI: North Pole" }
    ]
  },
  {
    name: "Off The Couch",
    lat: 37.362152536277485,
    lng: -121.95305149999268,
    photoname: "otc",
    rooms: [
      { name:"Occam's Apartment" },
      { name:"Norcross Art Gallery", index:1 },
      { name:"The Morgue", index:1 },
      { name:"Excalibur", index:2 }
    ]
  },
  {
    name: "Omescape",
    lat: 37.3810691685062,
    lng: -121.99952883015374,
    photoname: "omescape",
    rooms: [
      { name:"Forsaken Temple" },
      { name:"Kingdom of Cat-tastrophy" },
      { name:"Undercooked" },
      { name:"Robotopia" },
      { name:"Chaos in the Galleria" },
      { name:"Midnight in Hong Kong" },
      { name:"Haunting at Haruka High" }
    ]
  },
  {
    name: "Omescape",
    lat: 37.31470577874567,
    lng: -121.8516810298611,
    photoname: "omescape",
    rooms: [
      { name:"Motel Molly", index:8 },
      { name:"Witchly Ever After", index:9 }
    ]
  },
  {
    name: "Open Door Escape Games",
    lat: 34.06571046516934,
    lng: -117.20495374835643,
    photoname: "opendoor",
    rooms: [
      { name:"Far-Fetched" },
      { name:"Pillow Palace" },
      { name:"Inheritance" },
      { name:"The Trials" }
    ]
  },
  {
    name: "Open Mind Room Escape",
    lat: 41.363531403793246,
    lng: 2.0752354106971924,
    photoname: "openmind",
    rooms: [
      { name:"11S" },
      { name:"Sweneey Tott" }
    ]
  },
  {
    name: "Outline Escape Room",
    lat: 41.355796265038435,
    lng: 2.0832538284731337,
    photoname: "outline",
    rooms: [
      { name:"Outline" }
    ]
  },
  {
    name: "Palace Games",
    lat: 37.80323546438481,
    lng: -122.44931083290925,
    photoname: "palace",
    rooms: [
      { name:"The Edison Escape Room" },
      { name:"The Roosevelt Escape Room" },
      { name:"The Great Houdini Escape Room" },
      { name:"The Attraction" },
      { name:"The Attraction" },
      { name:"The Edison Escape Room" },
    ]
  },
  {
    name: "PanIQ",
    lat: 33.771086864054126,
    lng: -118.19259016239928,
    photoname: "paniq",
    rooms: [
      { name:"Pirates of Tortuga" }
    ]
  },
  {
    name: "Paradiso Escape Room",
    lat: 40.328654592438745,
    lng: -3.7644185120964995,
    photoname: "paradiso",
    rooms: [
      { name:"Project DCrisis" }
    ]
  },
  {
    name: "Paragon Escape Games",
    lat: 33.28388849453015,
    lng: -111.6409845145584,
    photoname: "paragon",
    rooms: [
      { name:"Return of the Pharaohs" }
    ]
  },
  {
    name: "Petra Escape Room",
    lat: 43.25473380785946,
    lng: -2.918620692250591,
    photoname: "petra",
    rooms: [
      { name:"Petra, The Lost Kingdom [Full Expedition]" }
    ]
  },
  {
    name: "Planet Escape Room",
    lat: 33.80464550710915,
    lng: -118.32601621061762,
    photoname: "planetescape",
    rooms: [
      { name:"Wise Guys" },
      { name:"Game of Swords" },
      { name:"Ctrl-Alt-Reality" },
      { name:"Black Cat" }
    ]
  },
  {
    name: "Pop Up Escape",
    lat: 33.8389886350355,
    lng: -117.95871960064491,
    photoname: "popup",
    rooms: [
      { name:"Death and Taxes" }
    ]
  },
  {
    name: "Project Omega",
    lat: 41.55958910913814,
    lng: 2.0141571844414874,
    photoname: "projectomega",
    rooms: [
      { name:"Project Omega" }
    ]
  },
  {
    name: "Puzzle Corp",
    lat: 28.438574992152716,
    lng: -81.47025494213455,
    photoname: "puzzlecorp",
    rooms: [
      { name:"Bigfoot: Secrets of the Swamp" }
    ]
  },
  {
    name: "Quest Room",
    lat: 34.09114129103195,
    lng: -118.30989918110745,
    photoname: "questroom",
    rooms: [
      { name:"Red Giant" },
      { name:"Perfumer", index:5 },
      { name:"Project Minotaur", index:6 },
      { name:"Cannibal's Den", index:7 }
    ]
  },
  {
    name: "Quest Room",
    lat: 34.0716707900312,
    lng: -118.30897481375156,
    photoname: "questroom",
    rooms: [
      { name:"Da Vinci's Challenge", index:2 }
    ]
  },
  {
    name: "Quest Room",
    lat: 34.03271248293171,
    lng: -118.3563095682502,
    photoname: "questroom",
    rooms: [
      { name:"Amnesia", index:10 },
      { name:"Pirates: Wanted!", index:11 },
      { name:"Greedy", index:12 },
    ]
  },
  {
    name: "Quest Room",
    lat: 33.871702653731624,
    lng: -118.35605809522471,
    photoname: "questroom",
    rooms: [
      { name:"Resurrection", index:3 },
      { name:"Warlocked", index:4 },
      { name:"Kablam", index:8 },
      { name:"Polar Station", index:9 },
    ]
  },
  {
    name: "Quest Tavern",
    lat: 34.10817524000258,
    lng: -117.74775578651075,
    photoname: "questtavern",
    rooms: [
      { name:"The Last Supper" },
      { name:"The Witch's Cauldron" },
      { name:"The Bridge Between" },
      { name:"Through the Sugar Glass" },
    ]
  },
  {
    name: "Quicksand Escape Games",
    lat: 32.797172032838674,
    lng: -117.25145287124799,
    photoname: "quicksand",
    rooms: [
      { name:"Speakeasy Nouveau" },
      { name:"Chinatown" },
      { name:"The Diner" },
      { name:"The Family Cabin" }
    ]
  },
  {
    name: "Rabbit Hole Recreation Services",
    lat: 39.96077389359148,
    lng: -105.16667682263319,
    photoname: "rabbithole",
    rooms: [
      { name:"Ruins of the Mystic Temple" },
      { name:"Paradox | The Incredible Time Machine" },
      { name:"Frost Base Z" }
    ]
  },
  {
    name: "Rare Moon Escape Room",
    lat: 34.11972247895865,
    lng: -117.51277800885615,
    photoname: "raremoon",
    rooms: [
      { name:"The Grinch" },
      { name:"Rave Escape" }
    ]
  },
  {
    name: "Real Escape Game [SCRAP]",
    lat: 35.70887942949726,
    lng: 139.80032765872525,
    photoname: "reg",
    rooms: [
      { name:"Escape from The RED ROOM" },
      { name:"A Challenge from the Crafting Genius" }
    ]
  },
  {
    name: "Real Escape Game [SCRAP]",
    lat: 35.72757550484229,
    lng: 139.7122598653584,
    photoname: "reg",
    rooms: [
      { name:"Escape from The BLUE ROOM", index:3 }
    ]
  },


// Red Door Escape Room
// Red Lantern Escape Room
// Rätselraum Ruhrpott
// Saga Escape Rooms
// Salzufler Unterwelt
// Scenario Escape Room
// Shock Creations
// Side Quest Escape Games
// Solve The Sherlock Home
// Stash House
// Steal and Escape
// Strange Bird Immersive
// Studio Escape
// Surf City Escapes
// Tales of Torchdale
// Terror Stories
// The 13th Room
// The Bureau
// The City Escape Room
// The Code Agency
// The Escape Game
// The Escape Revolution
// The Escape Ventures
// The Exit Games
// The Experience Machine
// The Immersive Machine
// The Ministry Of Peculiarities
// The Missing Link
  {
    name: "The Nemesis Club",
    lat: 33.6762402714731,
    lng: -111.9654508795286,
    photoname:"nemesis",
    rooms: [
      { name:"Mogollon Monster" },
      { name:"EVIL Robots" }
    ]
  },
// The Push Mystery Rooms
// The Sanctuary Escape Games
// TheStart
// TIMEBREAK
// Tokyo Mystery Circus [SCRAP]
// Top Tier Escape Room
// Trapology Boston
// Trapped! Escape Room
  {
    name: "Trivium Games",
    lat: 37.8302581228411,
    lng: -122.27935550417024,
    photoname: "trivium",
    rooms: [
      { name:"Ghost Patrol" },
      { name:"Ghost Patrol" },
      { name:"Ghost Patrol" }
    ]
  },
// Two Trees Escape
// Unlockables
// UNLOCKED OC
// Unreal Room Escape
// Wild Goose
// Will to Escape
// Wizards and Wires














]





