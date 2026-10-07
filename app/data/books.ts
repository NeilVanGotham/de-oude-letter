export interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
  price: number;
  genre: string;
  cover: string;
}

// Bestsellers van Standaard Boekhandel (top 10 fictie, non-fictie, jeugd en e-books
// + nieuw en pre-orders op de homepage), stand van 6 oktober 2026.
// Prijzen en ISBN's zijn die van de papieren editie op standaardboekhandel.be.
export const books: Book[] = [
  // Fictie
  {
    isbn: "9789044662368",
    title: "Johnnie Walker",
    author: "Connie Palmen",
    description:
      "'De barman begroette me licht geamuseerd met de vraag wat hij kon betekenen voor de jongedame.' De nieuwe roman van Connie Palmen.",
    price: 23.99,
    genre: "Literatuur",
    cover: "/images/covers/9789044662368.jpg",
  },
  {
    isbn: "9789022343135",
    title: "Bankgeheim",
    author: "Jonas Boets, Pieter Aspe",
    description:
      "Op een ochtend blijken de bankrekeningen van de klanten van het Gemeentekrediet tot de laatste cent leeggehaald. De verdwenen bankdirecteur Peter Daelemans lijkt de spil van een minutieus geplande fraude.",
    price: 22.5,
    genre: "Thrillers",
    cover: "/images/covers/9789022343135.jpg",
  },
  {
    isbn: "9789403139135",
    title: "Agrippa",
    author: "Robert Harris",
    description:
      "Julius Caesar is dood, en de levens van twee jonge mannen zullen hierdoor voorgoed veranderen: Caesars neef en erfgenaam Octavius, en diens beste vriend Marcus Agrippa.",
    price: 24.99,
    genre: "Thrillers",
    cover: "/images/covers/9789403139135.jpg",
  },
  {
    isbn: "9789028454040",
    title: "Yesteryear",
    author: "Caro Claire Burke",
    description:
      "Een aangrijpende, zinderende thriller, beklemmend en vol zwarte humor. Yesteryear is een indringende visie op traditie, roem, geloof en de inspanningen die het vraagt om vrouw te zijn.",
    price: 24.99,
    genre: "Romans",
    cover: "/images/covers/9789028454040.jpg",
  },
  {
    isbn: "9789049211363",
    title: "De vrouw van mijn echtgenoot",
    author: "Carla Kovach",
    description:
      "Na de zelfmoord van haar echtgenoot Hugo begint Eva een nieuw leven met hun tienjarige zoon en haar nieuwe man Zach. Ze verhuist naar de kust en begint aan haar nieuwe baan als weddingplanner.",
    price: 22.99,
    genre: "Thrillers",
    cover: "/images/covers/9789049211363.jpg",
  },
  {
    isbn: "9789049211967",
    title: "Geheimen van Rosewell Castle",
    author: "Corina Bomann",
    description:
      "Verstopt in de Schotse Hooglanden huist een prestigieuze butleracademie: Rosewell Castle. Tussen de eeuwenoude muren schuilt een keiharde wereld waarin alles tot in perfectie moet kloppen.",
    price: 22.99,
    genre: "Romans",
    cover: "/images/covers/9789049211967.jpg",
  },
  {
    isbn: "9789402719727",
    title: "De kreeftenvrouwen",
    author: "Beatrix Gerstberger",
    description:
      "Wanneer Mina's broer overlijdt, stort haar leven in. Ze besluit terug te gaan naar de laatste plek waar ze gelukkig was: Eagle Island, Maine.",
    price: 23.99,
    genre: "Literatuur",
    cover: "/images/covers/9789402719727.jpg",
  },
  {
    isbn: "9789029553568",
    title: "Lord M.",
    author: "Arthur Japin",
    description:
      "Het Engeland ten tijde van de jonge koningin Victoria. Twee vrouwen en een staatsman: het ware verhaal van ontluikende liefde, spectaculair overspel en onvoorwaardelijke trouw.",
    price: 26.99,
    genre: "Literatuur",
    cover: "/images/covers/9789029553568.jpg",
  },
  {
    isbn: "9789402720426",
    title: "Stille geheimen",
    author: "Karin Slaughter",
    description:
      "Welkom in North Falls: een kleine stad met grote geheimen. De woning aan Iris Drive 1601 ziet er net zo uit als de andere huizen in de buurt.",
    price: 24.99,
    genre: "Thrillers",
    cover: "/images/covers/9789402720426.jpg",
  },
  {
    isbn: "9789057208201",
    title: "Beduveld - Limited edition",
    author: "Christian De Coninck",
    description:
      "Graaf Hippolyte de Saint-Marc, CEO van een bekende holding, wordt op een ochtend dood aangetroffen in zijn thuiskantoor. De huisarts stelt een natuurlijk overlijden vast, maar volgens de weduwe is er meer aan de hand.",
    price: 27.99,
    genre: "Thrillers",
    cover: "/images/covers/9789057208201.jpg",
  },
  {
    isbn: "9789049209780",
    title: "Zusje onder de trap",
    author: "Steena Holmes",
    description:
      "Twaalf jaar geleden verdween Jess spoorloos. Sindsdien ontvangt haar tweelingzus Paige elk jaar een bos bloemen met een briefje waarop alleen staat: 'Het spijt me.'",
    price: 20.99,
    genre: "Thrillers",
    cover: "/images/covers/9789049209780.jpg",
  },
  {
    isbn: "9789026370182",
    title: "Verkeerde afslag",
    author: "Nicci French",
    description:
      "Welkom in Brookstead, een idyllisch Engels dorp. Maar sommige inwoners hebben veel te verbergen. Amy Barton heeft ogenschijnlijk alles: een fijn gezin, een mooi huis en een leuke baan.",
    price: 24.99,
    genre: "Thrillers",
    cover: "/images/covers/9789026370182.jpg",
  },
  {
    isbn: "9789046835326",
    title: "Wat ik je niet heb verteld",
    author: "Emma Robinson",
    description:
      "Een huwelijk. Twee leugens. Welke zal ons breken? Een rollercoaster aan plottwists die je niet ziet aankomen.",
    price: 9.99,
    genre: "Romans",
    cover: "/images/covers/9789046835326.jpg",
  },
  {
    isbn: "9789026371356",
    title: "De stalker",
    author: "Helen Fields",
    description:
      "Hij observeert je. Altijd. En overal. Connie Woolwine en brigadier Lively zijn terug in deze bloedstollende thriller.",
    price: 22.99,
    genre: "Thrillers",
    cover: "/images/covers/9789026371356.jpg",
  },
  {
    isbn: "9789021056531",
    title: "Het ultieme geheim",
    author: "Dan Brown",
    description:
      "Robert Langdon reist naar Praag voor een lezing van zijn vriendin Katherine Solomon, maar hun verblijf ontaardt in chaos door een brute moord.",
    price: 29.99,
    genre: "Thrillers",
    cover: "/images/covers/9789021056531.jpg",
  },
  {
    isbn: "9789493547148",
    title: "De Resten",
    author: "Toni Coppers, Annick Lambert",
    description:
      "Vijf jaar geleden verdween Elise op een wijnfeest in een Limburgs dorpje. Wat van haar teruggevonden werd, tart alle verbeelding en maakt haar verdwijning tot de bekendste cold case van het land.",
    price: 24.99,
    genre: "Thrillers",
    cover: "/images/covers/9789493547148.jpg",
  },
  {
    isbn: "9789400520486",
    title: "Grote kleine waarheid",
    author: "Liane Moriarty",
    description:
      "Op een school in een paradijselijke kustplaats bij Sydney treft de rector een afgehakte vinger aan in zijn post. Alle ouders zijn geschokt, maar vijf vriendinnen hebben andere dingen aan hun hoofd.",
    price: 26.99,
    genre: "Literatuur",
    cover: "/images/covers/9789400520486.jpg",
  },

  // Non-fictie
  {
    isbn: "9789048874002",
    title: "Zwanenzang. Diana, mijn zus",
    author: "Charles Spencer",
    description:
      "Bijna dertig jaar na zijn grafrede in Westminster Abbey vertelt Charles Spencer openhartig over het opgroeien met zijn zus Diana en over de tragische week van haar dood.",
    price: 29.99,
    genre: "Biografie",
    cover: "/images/covers/9789048874002.jpg",
  },
  {
    isbn: "9789059960800",
    title: "Murdoku",
    author: "Manuel Garand",
    description:
      "Help, er is een moord gepleegd! Aan jou om de dader te ontmaskeren in 80 crime scenes, waaronder een bakkerij, een casino, een schaaktoernooi en een opera.",
    price: 19.99,
    genre: "Puzzels",
    cover: "/images/covers/9789059960800.jpg",
  },
  {
    isbn: "9789059968042",
    title: "Cum fraude",
    author: "Laurens Kindt",
    description:
      "In januari 2024 leggen 166 kandidaat-magistraten het gevreesde schriftelijke examen af. Een onderzoek naar hoe dat examen gecompromitteerd werd, en wat dat betekent voor de integriteit van het gerecht.",
    price: 24.99,
    genre: "True crime",
    cover: "/images/covers/9789059968042.jpg",
  },
  {
    isbn: "9789059966529",
    title: "De slimste keuken",
    author: "Pascale Naessens",
    description:
      "Waarom blijven we geloven dat overgewicht te maken heeft met een gebrek aan wilskracht? Pascale Naessens zet de klassieke voedingsleer op zijn kop.",
    price: 29.99,
    genre: "Koken",
    cover: "/images/covers/9789059966529.jpg",
  },
  {
    isbn: "9789465303703",
    title: "WinWin",
    author: "Xavier Taveirne",
    description:
      "Het boek bij het consumentenprogramma op Radio 2 en VRT 1. Xavier Taveirne helpt je je leven betaalbaarder te maken met concrete tips en waardevol advies.",
    price: 24.5,
    genre: "Zelfhulp",
    cover: "/images/covers/9789465303703.jpg",
  },
  {
    isbn: "9789465305592",
    title: "Dwars door de Pyreneeën",
    author: "Arnout Hauben",
    description:
      "Van de woeste golven van de Atlantische Oceaan tot de zonovergoten stranden van de Middellandse Zee loopt een ruwe ruggengraat tussen Frankrijk en Spanje: de Pyreneeën.",
    price: 27,
    genre: "Reizen",
    cover: "/images/covers/9789465305592.jpg",
  },
  {
    isbn: "9789464044263",
    title: "Even simpel",
    author: "Yotam Ottolenghi",
    description:
      "135 nieuwe recepten voor ontbijt, lunch, diner en dessert: klaar in minder dan 30 minuten, in één pan, of vooraf te bereiden.",
    price: 34.99,
    genre: "Koken",
    cover: "/images/covers/9789464044263.jpg",
  },
  {
    isbn: "9789464107302",
    title: "Abbondanza",
    author: "Olga Leyers, Giancarlo Angeletti",
    description:
      "Olga Leyers en Giancarlo Angeletti gunnen ons een blik in hun keuken, met hun smakelijkste aperitiefhapjes, lekkerste pasta's en feestelijkste gerechten.",
    price: 29.99,
    genre: "Koken",
    cover: "/images/covers/9789464107302.jpg",
  },
  {
    isbn: "9789401492683",
    title: "Murdle",
    author: "G.T. Karber",
    description:
      "Wie plande de gruwelijke moord? Welk wapen gebruikte de dader? Waar werd het slachtoffer omgebracht? Los de moordmysteries op met deductie.",
    price: 17.99,
    genre: "Puzzels",
    cover: "/images/covers/9789401492683.jpg",
  },
  {
    isbn: "9789059964761",
    title: "Hangmatbelegger voor het leven",
    author: "Tim Nijsmans, Yoran Brondsema",
    description:
      "Antwoorden op 164 concrete vragen van beleggers, van je eerste inleg en de keuze van een broker tot beleggen voor je kinderen en je pensioen.",
    price: 25.99,
    genre: "Geld & beleggen",
    cover: "/images/covers/9789059964761.jpg",
  },
  {
    isbn: "9789465305707",
    title: "Altijd honger! 2",
    author: "Louise Goedefroy",
    description:
      "Na het succes van haar eerste kookboek dook Louise Goedefroy opnieuw de keuken in voor een tweede portie onweerstaanbare gerechten.",
    price: 27,
    genre: "Koken",
    cover: "/images/covers/9789465305707.jpg",
  },

  // Jeugd
  {
    isbn: "9789464106121",
    title: "Het C.R.U.I.S.E. complot",
    author: "Timon Verbeeck",
    description:
      "Timon Verbeeck geniet van een typische vakantie. Als hij een brief in een fles vindt, gaat hij op zoek naar de schrijver van de mysterieuze boodschap.",
    price: 18.99,
    genre: "Kinderboeken",
    cover: "/images/covers/9789464106121.jpg",
  },
  {
    isbn: "9789048323593",
    title: "De pompoendief",
    author: "Alice Hemming",
    description:
      "Met een beetje hulp van Vogel heeft Eekhoorn prachtige pompoenen gekweekt. Maar elke keer als hij niet kijkt... verdwijnt er een pompoen!",
    price: 14.99,
    genre: "Prentenboeken",
    cover: "/images/covers/9789048323593.jpg",
  },
  {
    isbn: "9789030511731",
    title: "Rutger, Thomas & Paco - Het Waterpark",
    author: "Rutger Vink",
    description:
      "Rutger, Thomas en Paco dromen van een waterpark waar honden óók welkom zijn. Samen bedenken ze Paqualand, het coolste zwemparadijs ooit!",
    price: 19.99,
    genre: "Kinderboeken",
    cover: "/images/covers/9789030511731.jpg",
  },
  {
    isbn: "9789047718246",
    title: "Gruffaloma",
    author: "Julia Donaldson",
    description:
      "'Kind,' zei de Gruffalo. 'Dit wordt genieten. Jouw Gruffaloma komt op visite.' Het derde prentenboek met de Gruffalo en de muis.",
    price: 15.99,
    genre: "Prentenboeken",
    cover: "/images/covers/9789047718246.jpg",
  },
  {
    isbn: "9789025781897",
    title: "Schiet op, schildpadjes",
    author: "Rachel Bright",
    description:
      "Een spannend prentenboek vol vaart over moed en keuzes maken. De pas uitgekomen schildpadjes racen naar de zee, maar Dodo moet kiezen tussen winnen en haar verdwaalde broertje helpen.",
    price: 16.99,
    genre: "Prentenboeken",
    cover: "/images/covers/9789025781897.jpg",
  },
  {
    isbn: "9789062229802",
    title: "Alex en de gemene tweelingbroer",
    author: "Alex Klein, Jelmer Jepsen",
    description:
      "Als Alex hoort dat hij een geheime tweelingbroer heeft, kan hij zijn oren niet geloven. Axel is ontstaan uit een geheim experiment van een gekke professor.",
    price: 16.99,
    genre: "Kinderboeken",
    cover: "/images/covers/9789062229802.jpg",
  },
  {
    isbn: "9789043944892",
    title: "De Zoete Zusjes stelen de show",
    author: "Hanneke de Zoete",
    description:
      "Terwijl Bram oefent voor de klasmusical, organiseren Saar en Janna hun eigen talentenshow. De hele buurt mag meedoen, van ballet tot goocheltrucs.",
    price: 16.5,
    genre: "Prentenboeken",
    cover: "/images/covers/9789043944892.jpg",
  },
  {
    isbn: "9789493521407",
    title: "Ik mis je",
    author: "Anky De Frangh, Julie Vangeel",
    description:
      "Soms moet je afscheid nemen. Aan de schoolpoort, aan de deur van de klas, of gewoon voor een paar uurtjes. En dat kan, voor kind én ouder, best spannend zijn.",
    price: 17.99,
    genre: "Kinderboeken",
    cover: "/images/covers/9789493521407.jpg",
  },
  {
    isbn: "9789047700135",
    title: "Raad eens hoeveel ik van je hou",
    author: "Sam McBratney",
    description:
      "Hazeltje en Grote Haas willen elkaar graag laten zien hoeveel ze van elkaar houden.",
    price: 12.99,
    genre: "Prentenboeken",
    cover: "/images/covers/9789047700135.jpg",
  },
  {
    isbn: "9789026177422",
    title: "Partypooper",
    author: "Jeff Kinney",
    description:
      "Bram is jarig! Hij kijkt uit naar een groot feest vol cadeaus, vrienden en lol. Maar zijn ouders blijken zijn verjaardag te zijn vergeten...",
    price: 18.5,
    genre: "Kinderboeken",
    cover: "/images/covers/9789026177422.jpg",
  },
];
