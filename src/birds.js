const birdsData = [
  [       
    {
      id: 1,
      name: 'Raven',
      species: 'Corvus corax',
      description: 'The raven is a large bird. Their body length reaches 70 centimeters, and their wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that on the day when black crows fly away from the Tower, the monarchy will collapse.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    },
    {
      id: 2,
      name: 'Crane',
      species: 'Grus grus',
      description: 'Cranes are tall birds with long legs, necks and usually long bills. They resemble herons and egrets in body shape, but tend to have heavier bodies. ',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
    },
    {
      id: 3,
      name: 'Swallow',
      species: 'Delichon urbicum',
      description: 'Swallows are small birds with dark, glossy-blue backs, red throats, pale underparts and long tail streamers. They are extremely agile in flight and spend most of their time on the wing.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'Nightjar',
      species: 'Caprimulgus europaeus',
      description: 'The goat is an inconspicuous bird known for its voice. The song of the goat sounds like a monotonous trill similar to the rattle of a motorcycle. This rattling can be heard from dusk to dawn, its tone, frequency and volume varying.',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
    },
    {
      id: 5,
      name: 'Cuckoo',
      species: 'Cuculus canorus',
      description: 'The cuckoo is so named because of the peculiarities of its songs. The sonorous "cuckoo" cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos drop their eggs.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
    },
    {
      id: 6,
      name: 'Tomtit',
      species: 'Parus major',
      description: 'There are more than 40 different sound combinations in the chirping of tomtits. They sing practically all year round, quieting down a little only in winter. Tits are real forest sanitarians. One pair of tits during the nesting period protects dozens of trees from pests.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Sparrow',
      species: 'Passer domesticus',
      description: 'Sparrows are the best known and most recognizable birds. They are easily recognized by their colorful plumage and cheerful chirping. Sparrows are a synatropic species and settle close to human habitation.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 2,
      name: 'Rook',
      species: 'Corvus frugilegus',
      description: 'Rooks are very clever and intelligent birds. They use their beaks to create and use the simplest tools. Rooks have developed a reflex to the sound of a tractor. When they hear "rumbling", they fly to the sound - the tractor is plowing the land, which means that there is plenty of food in this place.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 3,
      name: 'Jackdaw',
      species: 'Coloeus monedula',
      description: `The Latin name of the jackdaw "monedula" is associated with the word monedula for the bird's love of shiny and bright things.`,
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 4,
      name: 'Mavis',
      species: 'Turdus philomelos',
      description: 'Mavis is the best singer of the passerines. The song consists only of beautiful sounding whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the whole nesting period.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 5,
      name: 'Magpie',
      species: 'Pica pica',
      description: 'The magpie is a very industrious bird. It builds up to eight nests and then chooses the best one. The entrance to a magpie`s nest always faces south to keep the dwelling warmer. Magpies are the only birds that recognize themselves in a mirror.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 6,
      name: 'Jay',
      species: 'Garrulus glandarius',
      description: 'When a jay gets excited, the tuft on its head ruffles. The bird is trying to create an intimidating sight. Jays can imitate the voices of other birds, animals, and the sounds humans make. They make large stores of acorns and nuts for the winter.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Finch',
      species: 'Fringilla coelebs',
      description: 'There are 450 species of finches in the wild. In winter, finches are gregarious. Sometimes sparrows can be seen in their families. Finches sing in spring, with the onset of the mating season. Their singing is a gaudy, multi-minute roulades.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Crossbill',
      species: 'Loxia curvirostra',
      description: 'Ticks are called "Christmas" birds. In natural conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones, clovers can fly 3500 km away from the nest.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name: 'Turtledove',
      species: 'Streptopelia turtur',
      description: 'The turtledove lives in mixed and broad-leaved forests, as well as in urban parks and settlements. Birds often choose places to live near humans and easily get used to people. Due to their melodic and pleasant singing, turtledoves are often bred for home breeding.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
    },
    {
      id: 4,
      name: 'Woodpecker',
      species: 'Dendrocopos major',
      description: 'The woodpecker is a conspicuous and noisy bird, often living near humans. From mid-January to the end of June one can hear the "drumming" of woodpeckers - a trill from the vibration of branches under the rapid beak strokes of the bird. In good weather, the drumming can be heard within a radius of 1.5 km.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name: 'Hoopoe',
      species: 'Upupa epops',
      description: 'Hoopoe prefer to live in open landscapes with individual trees or groves. The most convenient for the bird are forest-steppe and savannah. The hoopoe may choose places of residence near humans: pastures, vineyards, orchards.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 6,
      name: 'Swift',
      species: 'Apus apus',
      description: 'Swifts can be seen in almost every corner of the planet. They inhabit both forested areas and open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Lark',
      species: 'Alauda arvensis',
      description: 'Larks are migratory birds. From the beginning of September they fly south. They return in early March, regardless of whether the snow has melted or not. The arrival of skylarks was used to determine the onset of spring and the time when it was time to plow the land.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Nightingale',
      species: 'Luscinia luscinia',
      description: 'Nightingales sing from the beginning of May until the end of summer. Each nightingale`s song consists of 12 repeating elements, which are also called pitches. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name: 'Starling',
      species: 'Sturnus vulgaris',
      description: 'Starlings are migratory birds. The synchronized flight of large flocks of starlings is called murmuration. It is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate figures that shrink and enlarge in the sky.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name: 'Oriole',
      species: 'Oriolus oriolus',
      description: 'The melodiousness of the oriole`s voice is compared to the sound of a flute. It is difficult for humans to see the oriole, as it lives high up in the trees. The oriole is not only a very beautiful but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Waxwing',
      species: 'Bombycilla garrulus',
      description: 'The whistler has very tenacious claws, which helps the bird to stay on branches and nibble berries, which are the hardest to reach. During courtship, the male offers the female a berry or other treat. If the female accepts it, the birds form a pair.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Goldfinch',
      species: 'Carduelis carduelis',
      description: 'Goldfinchs sing beautifully and melodiously. Both in the wild and in captivity they chirp almost all year round. There are more than 20 iridescent trills in the singing of the chirp. They get used to people and may even return to their owners after they have been released into the wild',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Eagle',
      species: 'Aquila nipalensis',
      description: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, and their speed can reach 240 kilometers per hour. The illusion of slow movement is due to the height of flight - more than 700 meters',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Kite',
      species: 'Milvus migrans',
      description: 'Kites are large predators, they reach about half a meter in height, and the weight of adults reaches 1 kg. Their wings are narrow and long, with a wingspan of 1.5 meters. They often nest in large flocks and even form large colonies.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Harrier',
      species: 'Circus cyaneus',
      description: 'Harrier is a small falcon. It feeds mainly on rodents; its diet is based on voles, hamsters, and mice. The plumage of the harrier can be ash gray. The comparison "gray as a harrier" is associated with such a bird.',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name: 'Falcon',
      species: 'Falco peregrinus',
      description: 'The Latin name Falco falcon comes from the word "sickle" because of the sickle-shaped wings. The long and wide wings allow the falcon to fly high into the sky and soar freely. The falcon`s flight speed reaches 280-320 kilometers per hour.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name: 'Hawk',
      species: 'Accipiter gentilis',
      description: 'All hawks are characterized by broad and short wings. Another distinctive feature is the white "eyebrows" above the eyes. Slavic vigilantes placed the image of the hawk on their banners as a symbol of courage, power and ruthlessness to enemies.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name: 'Owl',
      species: 'Bubo bubo',
      description: 'The flight of the owl is noiseless and its eyesight is very sharp. These features make the bird an unrivaled night hunter. The owl has no natural enemies, no animals hunt adult birds. But the chicks are attacked by foxes and wolves.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Albatross',
      species: 'Diomedea exulans',
      description: 'The albatross is the largest flying bird in the world. Its wingspan reaches three and a half meters and its weight is ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances over the ocean expanses',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Gannet',
      species: 'Sula nebouxii',
      description: 'What makes the blue-footed booby special is not only the rich bright blue color of its feet, but also the fact that they are very warm. While other bird species warm their clutches with their bodies, the blue-footed booby does it with its legs',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },    
    {
      id: 3,
      name: 'Petrel',
      species: 'Puffinus griseus',
      description: 'The size of petrels varies. The smallest of them are up to 25 cm in length, the largest are up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air heralds a storm.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Pelican',
      species: 'Pelecanus',
      description: 'Pelicans are inhabitants of seas and rivers. They walk clumsily, but can fly and swim well. They feed mainly on fish and organize collective hunts - they line up in a semicircle and flap the water with their wings and beaks and drive frightened fish into shallow waters.',
      image: 'https://live.staticflickr.com/65535/49894505328_f771ff6091_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Penguin',
      species: 'Aptenodytes forsteri',
      description: 'The male emperor penguin reaches a height of 130 cm and its mass can approach 50 kg. Of all modern penguins, this species is the largest. The penguin`s diet consists of fish, squid and krill. The birds hunt in large groups in the ocean.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Gull',
      species: 'Larus argentatus',
      description: 'Gulls inhabit the shores of seas, lakes, rivers, reservoirs, marshes, often nesting on islands. Since the end of the last century gulls began to appear in large cities, where they make nests on the roofs of buildings. All gulls lead a colonial lifestyle.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];

export default birdsData;