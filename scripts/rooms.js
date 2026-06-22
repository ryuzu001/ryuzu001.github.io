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
    name: "Himitsu Station",
    lat: 40.76314055001625,
    lng: -111.89444665300861,
    photoname: "himitsu",
    rooms: [
      { name:"The Forgotten Markets" }
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
    name: "The Nemesis Club",
    lat: 33.6762402714731,
    lng: -111.9654508795286,
    photoname:"nemesis",
    rooms: [
      { name:"Mogollon Monster" },
      { name:"EVIL Robots" }
    ]
  },
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
]




// Escapade Games
// Escaparium
// Escape Again
// Escape Barcelona
// Escape Chronicles
// Escape Factor
// Escape Hour
// Escape on 13th

// Escape Room 66
// Escape Room 831
// Escape Room Era
// Escape Room LA
// Escape Room Witten [Gloomworks Department]
// Escape Rush
// Escape Stories
// Escape The Arcade
// Escape Utah
// Escapement Rooms
// EscapeX Rooms
// Escaping Belgium
// Escapology
// Exit Game
// Exodus Escape Room
// FRIKI Escape Room
// Golden Pop
// Great Room Escape
// Hall of Shadows Mystery Games
// Hatch Escapes
// Hatch Escapes [Scout Expedition Co.]
// Hidden Donkey
// Himitsu Station
// Hostal 83
// Hourglass Escapes
// Illusion Escape Room
// Immersia
// In Search of an Exit
// Infinity Escape
// Inland Empire Escape Rooms
// Insomnia Corporation
// International Room Escape
// Intrepid Escape Room
// Kadabra Escape
// Kadabra Escape Room
// Kalon Escape
// Keystone Escape Games
// King's Eye Escape
// Krematorium Escape Rooms
// La Clau
// Limbus Escape Center
// Limitless Escape Games
// Locurio
// Mad Land
// Maine Escape Games
// Mayto Kingdom
// Maze Room
// Maze Rooms
// Mile High Escape Ops
// Mindfox Escape
// MindTrap Escape Room
// Missing at the Mortuary
// Mission Escape Games
// Mystery Avenue
// Mystery Maui
// Mystic Escape Room
// Nerdy By Nature
// Next Level Escape
// No. 1 Escapes
// Nodus 805
// North Valley Escape Room
// Not Another Escape Room
// NW Escape Experience
// Off The Couch
// Omescape
// Open Door Escape Games
// Open Mind Room Escape
// Outline Escape Room
// Palace Games
// PanIQ
// Paradiso Escape Room
// Paragon Escape Games
// Petra Escape Room
// Planet Escape Room
// Pop Up Escape
// Project Omega
// Puzzle Corp
// Quest Room
// Quest Tavern
// Quicksand Escape Games
// Rabbit Hole Recreation Services
// Rare Moon Escape Room
// Real Escape Game [SCRAP]
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
// The Nemesis Club
// The Push Mystery Rooms
// The Sanctuary Escape Games
// TheStart
// TIMEBREAK
// Tokyo Mystery Circus [SCRAP]
// Top Tier Escape Room
// Trapology Boston
// Trapped! Escape Room
// Trivium Games
// Two Trees Escape
// Unlockables
// UNLOCKED OC
// Unreal Room Escape
// Wild Goose
// Will to Escape
// Wizards and Wires