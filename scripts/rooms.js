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
      { name:"The Time Travelers"}
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
  {    name: "Locurio",
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


// Bite The Fly
// Black Lake Escape Room
// Boss Play
// Boxaroo
// Brain Games
// Breaking Point Escape Rooms
// Breakout Waikiki
// Can Bruna
// Chambers Escape Games
// Cinema Escape Room
// Cityscape Games
// Cloud Escape
// Code 258 Escape Room
// Colors Escape Room
// Confusion Escapes
// Confusion Escapes [Saber Room Escape]
// Conundrum Escape Rooms
// Cooperstown Escape Rooms
// Cross Roads Escape Games
// CruPont Legacy
// Cryogenic
// CU Adventures in Time & Space
// CubicEscape
// Cubick Escape Room
// Dare 2 Escape
// De Gouden Kooi
// Deadline Escape Rooms
// Deceptive Games
// Doldrick's Escape Room
// Dragonborn Escape Room
// EDscapade Games
// Elements Escape Room
// Eleventh Hour Enigma
// Enigmik
// Entangled Escape Room
// Entered
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