/* ======================================================================
   DIMORA AUREA — INTERAZIONI DEL SITO
   ----------------------------------------------------------------------
   Questo file gestisce:
   - lingua IT / EN;
   - header e menu mobile;
   - animazioni allo scroll;
   - gallery, filtri e lightbox;
   - modal delle camere;
   - FAQ accordion;
   - form WhatsApp / email;
   - cookie banner informativo.

   I contatti (telefono, WhatsApp, email, Google Maps) si modificano in
   BUILTIN_SITE_CONFIG, qui sotto.
====================================================================== */

(() => {
  "use strict";

  /* ======================================================================
     MODIFICA QUI: CONTATTI DEL SITO
     Questi dati alimentano tutti i link di telefono, WhatsApp, email e
     Google Maps, oltre ai pulsanti "Invia richiesta" del modulo.
     - whatsappNumber: SOLO cifre, con prefisso internazionale e senza "+"
     - phoneRaw: numero con "+" e senza spazi (usato nel link tel:)
     - instagramUrl / facebookUrl: se lasci "" l'icona viene nascosta
  ====================================================================== */
  const BUILTIN_SITE_CONFIG = {
    bnbName: "Le Suites di Donna Ada",
    location: "Salerno (SA)",
    fullAddress: "Via Principessa Sighelgaita 1, Salerno (SA)",
    phoneDisplay: "+39 393 170 3251",
    phoneRaw: "+393931703251",
    whatsappDisplay: "+39 393 170 3251",
    whatsappNumber: "393931703251",
    email: "info@donnaada.it",
    assistanceHoursIt: "Tutti i giorni · 08:00–21:00",
    assistanceHoursEn: "Every day · 08:00–21:00",
    instagramUrl: "",
    facebookUrl: "",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent("Via Principessa Sichelgaita 1, 84125 Salerno SA")
  };

  const BUILTIN_TRANSLATIONS = {
    "it": {
      "rooms.photoAlt": "Foto di una camera della dimora",
      "rooms.openPhoto": "Apri la foto a schermo intero",
      "whatsapp.defaultMessage": "Buongiorno, vorrei avere informazioni sulla disponibilità delle camere.",
      "request.emailSubject": "Richiesta di disponibilità",
      "request.greeting": "Buongiorno, vorrei richiedere la disponibilità per il seguente soggiorno:",
      "request.checkin": "Check-in",
      "request.checkout": "Check-out",
      "request.guests": "Ospiti",
      "request.room": "Camera",
      "request.name": "Nome",
      "request.email": "Email",
      "request.phone": "Telefono",
      "request.requests": "Richieste particolari",
      "request.noRequests": "Nessuna richiesta particolare",
      "request.closing": "Grazie, resto in attesa di una vostra risposta.",
      "request.adult": "adulto",
      "request.adults": "adulti",
      "request.child": "bambino",
      "request.children": "bambini",
      "validation.required": "Campo obbligatorio.",
      "validation.privacy": "Per continuare è necessario accettare l'informativa privacy.",
      "validation.fullName": "Inserisci nome e cognome.",
      "validation.email": "Inserisci un indirizzo email valido.",
      "validation.datePast": "La data di check-in non può essere nel passato.",
      "validation.checkoutAfter": "Il check-out deve essere successivo al check-in.",
      "validation.formError": "Controlla i campi evidenziati e riprova.",
      "validation.whatsappOpening": "Sto aprendo WhatsApp con la tua richiesta…",
      "validation.emailOpening": "Sto aprendo il tuo programma di posta con la richiesta…",
      "validation.quickCopied": "Date copiate nel modulo: completa i dati per inviare la richiesta.",
      "a11y.skipToContent": "Vai al contenuto principale",
      "nav.home": "Home",
      "nav.about": "La struttura",
      "nav.rooms": "Camere",
      "nav.gallery": "Gallery",
      "nav.services": "Servizi",
      "nav.contacts": "Contatti",
      "cta.checkAvailability": "Verifica disponibilità",
      "hero.kicker": "Affittacamere, Salerno, Italia",
      "hero.titleLine1": "Il lusso semplice",
      "hero.titleLine2": "di sentirsi a casa.",
      "hero.subtitle": "Una dimora intima, camere curate e il ritmo lento dell'ospitalità italiana.",
      "cta.discoverRooms": "Scopri le camere",
      "hero.scroll": "Scopri",
      "form.checkin": "Check-in",
      "form.checkout": "Check-out",
      "form.adults": "Adulti",
      "cta.checkNow": "Verifica ora",
      "trust.directTitle": "Contatto diretto",
      "trust.directText": "Assistenza personale, senza intermediari",
      "trust.quietTitle": "Atmosfera intima",
      "trust.quietText": "Poche camere, tempo e tranquillità",
      "trust.locationTitle": "Posizione ideale",
      "trust.locationText": "Vicino ai luoghi più autentici",
      "about.floatingNote": "un'accoglienza su misura",
      "about.kicker": "La nostra dimora",
      "about.title": "Un luogo autentico, pensato per rallentare.",
      "about.lead": "Le Suites di Donna Ada nasce dal desiderio di trasformare una casa italiana piena di luce in un rifugio intimo, dove ogni ospite possa sentirsi atteso.",
      "about.body": "Materiali naturali, colori caldi e dettagli artigianali accompagnano un'ospitalità discreta e attenta. Qui il comfort non è ostentazione, ma qualità del riposo, colazioni preparate con cura e consigli sinceri per scoprire il territorio.",
      "about.value1Title": "Cura personale",
      "about.value1Text": "Indicazioni, tempi e attenzioni pensati intorno al vostro soggiorno.",
      "about.value2Title": "Bellezza essenziale",
      "about.value2Text": "Spazi eleganti e rilassanti, senza eccessi e con materiali autentici.",
      "about.value3Title": "Territorio vissuto",
      "about.value3Text": "Luoghi, sapori e incontri selezionati come li consiglieremmo a un amico.",
      "about.discoverServices": "Scopri tutti i servizi",
      "rooms.kicker": "Le camere",
      "rooms.title": "Cinque modi di vivere la stessa quiete.",
      "rooms.intro": "Ambienti luminosi, tessuti naturali e dettagli scelti con cura. Ogni camera ha una personalità diversa, la stessa attenzione al comfort.",
      "rooms.deluxe.badge": "Più richiesta",
      "rooms.deluxe.name": "Amistà",
      "rooms.from": "da",
      "rooms.perNight": "/ notte",
      "rooms.deluxe.description": "Accogliente e luminosa, con letto king size, angolo lettura e una vista che invita a rallentare.",
      "rooms.guests2": "2 ospiti",
      "rooms.kingBed": "King size",
      "cta.discoverRoom": "Scopri la camera",
      "cta.checkAvailabilityShort": "Disponibilità",
      "rooms.superior.badge": "Vista panoramica",
      "rooms.superior.name": "Althea",
      "rooms.superior.description": "Spazi generosi, luce naturale e un balcone privato per iniziare la giornata con calma.",
      "rooms.guests3": "3 ospiti",
      "rooms.camera4.badge": "Eleganza e comfort",
      "rooms.camera4.name": "Anima",
      "rooms.camera4.description": "Inserisci qui la descrizione della quarta camera.",

      "rooms.camera5.badge": "Atmosfera esclusiva",
      "rooms.camera5.name": "Amore",
      "rooms.camera5.description": "Inserisci qui la descrizione della quinta camera.",
      "rooms.kingSofa": "King + divano",
      "rooms.suite.badge": "Esperienza completa",
      "rooms.suite.name": "Alchimia",
      "rooms.suite.description": "Camera e living separati, terrazza privata e dettagli esclusivi per soggiorni da ricordare.",
      "rooms.guests4": "4 ospiti",
      "rooms.priceNote": "I prezzi sono dimostrativi e possono variare in base al periodo, alla durata e al numero di ospiti.",
      "gallery.kicker": "La dimora, nei dettagli",
      "gallery.title": "Una storia fatta di luce, materia e silenzio.",
      "gallery.intro": "Esplora gli spazi, le camere e i piccoli rituali che rendono speciale il soggiorno.",
      "gallery.filterAll": "Tutte",
      "gallery.filterRooms": "Camere",
      "gallery.filterSpaces": "Spazi",
      "gallery.filterExperience": "Esperienza",
      "gallery.captionExterior": "Gli esterni",
      "gallery.captionBreakfast": "La colazione",
      "gallery.captionView": "Il panorama",
      "gallery.captionRoom": "Le camere",
      "gallery.captionBathroom": "I bagni",
      "gallery.captionDetails": "I dettagli",
      "gallery.captionRelax": "Il relax",
      "gallery.captionTerrace": "La terrazza",
      "services.kicker": "Servizi",
      "services.title": "Tutto ciò che serve. Nulla di superfluo.",
      "services.intro": "Abbiamo scelto servizi semplici ma accurati, pensati per rendere il soggiorno fluido dal primo messaggio fino alla partenza.",
      "services.askService": "Richiedi un servizio",
      "services.wifiTitle": "Wi-Fi gratuito",
      "services.wifiText": "Connessione veloce in camere e aree comuni.",
      "services.airTitle": "Climatizzazione",
      "services.airText": "Temperatura regolabile in ogni camera.",
      "services.cleaningTitle": "Pulizia giornaliera",
      "services.cleaningText": "Cura quotidiana degli ambienti e della biancheria.",
      "services.tvTitle": "Smart TV",
      "services.tvText": "Intrattenimento e servizi streaming personali.",
      "services.parkingTitle": "Parcheggio",
      "services.parkingText": "Disponibile o convenzionato, su richiesta.",
      "services.checkinTitle": "Check-in assistito",
      "services.checkinText": "Accoglienza personale e self check-in concordato.",
      "services.luggageTitle": "Deposito bagagli",
      "services.luggageText": "Prima del check-in e dopo il check-out.",
      "services.transferTitle": "Transfer",
      "services.transferText": "Stazione, aeroporto e destinazioni locali.",
      "experiences.kicker": "Vivere il territorio",
      "experiences.title": "Fuori dalla porta, l'Italia più autentica.",
      "experiences.intro": "Itinerari lenti, sapori locali e luoghi che raccontano il carattere della nostra terra. Saremo felici di aiutarvi a scegliere.",
      "experiences.historicTitle": "Il Centro Storico",
      "experiences.historicText": "Passeggiate tra botteghe, pietra chiara e piazze vissute.",
      "experiences.natureTitle": "Pompei",
      "experiences.natureText": "Oltre agli scavi archeologici, la città offre scorci suggestivi e un'atmosfera unica.",
      "experiences.hikeTitle": "Paestum",
      "experiences.hikeText": "I templi antichi e le spiagge circostanti offrono un'esperienza unica tra storia e natura.",
      "experiences.foodTitle": "La Costiera Amalfitana",
      "experiences.foodText": "Indirizzi selezionati, produttori e cucina locale sincera.",
      "reviews.kicker": "Parole degli ospiti",
      "reviews.title": "La sensazione più bella è voler tornare.",
      "reviews.review1Text": "“Il B&B di Donna Ada è fantastico, molto accogliente. La cosa più bella l'accoglienza del sig. Bruno, il proprietario, molto gentile ed è venuto incontro alle nostre esigenze. Consigliatissimo.”",
      "reviews.review1Name": "Carmine",
      "reviews.review1Stay": "Soggiorno di coppia",
      "reviews.review2Text": "“Bellissimo b&b.Proprietario gentilissimo e simpatico. Camera spaziosa e molto pulita. Non manca nulla. Servizi igienici brillanti. Parcheggio comodo grazie al titolare. Lo consiglio vivamente”",
      "reviews.review2Name": "Mario",
      "reviews.review2Stay": "Viaggio di lavoro",
      "reviews.review3Text": "“Il proprietario gentilissimo, ci ha offerto il parcheggio dell'auto e ci ha consigliato dove cenare. La camera del b&b pulita e molto accogliente. Vicinissimo al centro di salerno!”",
      "reviews.review3Name": "Vale",
      "reviews.review3Stay": "Vacanza in famiglia",
      "reviews.review4Text": "“Bruno è una persona molto a modo, disponibile e affabile. Le stanze sono bellissime e la cosa fondamentale la zona ė molto centrale per spostarsi a piedi. ”",
      "reviews.review4Name": "Vincenzo",
      "reviews.review4Stay": "Viaggio di famiglia",
      "reviews.disclaimer": "Le recensioni mostrate sono contenuti dimostrativi: sostituiscile con testimonianze reali e verificabili.",
      "availability.kicker": "Richiesta senza impegno",
      "availability.title": "Raccontaci il soggiorno che immagini.",
      "availability.lead": "Compila il modulo e scegli se inviare la richiesta via WhatsApp o email. Ti risponderemo personalmente con disponibilità e proposta.",
      "availability.benefit1Title": "Risposta personale",
      "availability.benefit1Text": "Nessun messaggio automatico: parli direttamente con la struttura.",
      "availability.benefit2Title": "Richiesta flessibile",
      "availability.benefit2Text": "Indica esigenze, orari, bambini o servizi speciali.",
      "availability.benefit3Title": "Nessun pagamento online",
      "availability.benefit3Text": "Questo modulo invia solo una richiesta: la prenotazione sarà confermata separatamente.",
      "availability.preferDirect": "Preferisci scriverci subito?",
      "form.title": "Dettagli della richiesta",
      "form.requiredNote": "I campi contrassegnati con * sono obbligatori.",
      "form.fullName": "Nome e cognome",
      "form.email": "Email",
      "form.phone": "Telefono",
      "form.children": "Bambini",
      "form.room": "Camera desiderata",
      "form.roomAny": "Qualsiasi camera disponibile",
      "form.message": "Messaggio / richieste particolari",
      "form.privacyPrefix": "Ho letto l'",
      "form.privacyLink": "informativa privacy",
      "form.privacySuffix": "e autorizzo il trattamento dei dati per rispondere alla richiesta.",
      "form.sendWhatsapp": "Invia richiesta via WhatsApp",
      "form.sendEmail": "Invia richiesta via Email",
      "form.technicalNote": "Il pulsante email apre il programma di posta del dispositivo tramite mailto:. Per invii automatici integra un backend, Formspree o EmailJS.",
      "faq.kicker": "Domande frequenti",
      "faq.title": "Informazioni utili prima di arrivare.",
      "faq.intro": "Non trovi la risposta? Scrivici: saremo felici di aiutarti a organizzare il soggiorno.",
      "faq.contactUs": "Contattaci",
      "faq.q1": "A che ora è il check-in?",
      "faq.a1": "Il check-in è normalmente disponibile dalle 15:00 alle 20:00. Orari diversi possono essere concordati in anticipo.",
      "faq.q2": "A che ora è il check-out?",
      "faq.a2": "Il check-out è previsto entro le 10:30. Il deposito bagagli può essere richiesto gratuitamente.",
      "faq.q3": "È disponibile il parcheggio?",
      "faq.a3": "È disponibile una soluzione di parcheggio privata o convenzionata. Contattaci prima dell'arrivo per ricevere indicazioni precise.",
      "faq.q4": "La colazione è inclusa?",
      "faq.a4": "Sì, salvo diversa indicazione nella proposta. Comunica in anticipo allergie, intolleranze o preferenze alimentari.",
      "faq.q5": "Sono ammessi animali?",
      "faq.a5": "L'accoglienza degli animali dipende dalla camera e dal periodo. Indicalo nella richiesta per verificare la soluzione migliore.",
      "faq.q6": "Come posso verificare la disponibilità?",
      "faq.a6": "Compila il modulo e invia la richiesta via WhatsApp o email. Riceverai una risposta diretta con disponibilità, prezzo e condizioni.",
      "contact.kicker": "Contatti",
      "contact.title": "Siamo qui per aiutarti a partire.",
      "contact.intro": "Scrivici per disponibilità, indicazioni, richieste speciali o semplicemente per capire quale camera è più adatta al tuo soggiorno.",
      "contact.tagline": "Ospitalità intima, eleganza naturale, Italia autentica.",
      "contact.addressLabel": "Indirizzo",
      "contact.phoneLabel": "Telefono",
      "contact.hoursLabel": "Assistenza",
      "contact.mapCardKicker": "Come raggiungerci",
      "contact.mapCardText": "Indicazioni dettagliate e informazioni su parcheggio e transfer saranno inviate prima dell'arrivo.",
      "contact.openMaps": "Apri in Google Maps",
      "finalCta.kicker": "Il tuo tempo, qui",
      "finalCta.title": "La prossima storia può iniziare da una camera piena di luce.",
      "finalCta.text": "Scrivici le date: ti risponderemo con la soluzione più adatta e tutti i dettagli.",
      "cta.sendRequest": "Invia una richiesta",
      "footer.description": "Una piccola dimora italiana dedicata a chi cerca quiete, autenticità e un'ospitalità curata.",
      "footer.explore": "Esplora",
      "nav.territory": "Territorio",
      "footer.contact": "Contatti",
      "footer.stayWithUs": "Soggiorna con noi",
      "footer.bookingText": "Scrivici direttamente per una proposta personalizzata.",
      "footer.rights": "Tutti i diritti riservati.",
      "footer.privacy": "Privacy Policy",
      "footer.cookie": "Cookie Policy",
      "footer.cookieSettings": "Preferenze cookie",
      "footer.credit": "Sito demo personalizzabile per strutture ricettive.",
      "floatingWhatsapp.label": "Scrivici",
      "cookie.title": "La tua privacy",
      "cookie.text": "Questo sito demo utilizza solo strumenti tecnici necessari. Se integrerai analytics o marketing, aggiorna banner e policy.",
      "cookie.more": "Maggiori informazioni",
      "cookie.technicalOnly": "Solo necessari",
      "cookie.accept": "Accetta",
      "roomModal.included": "Incluso nella camera",
      "form.fullNamePlaceholder": "Es. Mario Rossi",
      "form.emailPlaceholder": "nome@email.it",
      "form.phonePlaceholder": "+39 ...",
      "form.messagePlaceholder": "Orario di arrivo, esigenze alimentari, culla, transfer...",
      "brand.logoAlt": "Logo B&B",
      "about.imageAlt": "Interno elegante e luminoso del Bed & Breakfast",
      "rooms.deluxe.imageAlt": "Camera Deluxe con letto matrimoniale e vista",
      "rooms.superior.imageAlt": "Camera Superior elegante con ampie finestre",
      "rooms.suite.imageAlt": "Suite spaziosa con zona relax",
      "gallery.altExterior": "Esterni della dimora al tramonto",
      "gallery.altBreakfast": "Colazione italiana servita con cura",
      "gallery.altView": "Panorama sul territorio circostante",
      "gallery.altRoom": "Camera elegante con tessuti naturali",
      "gallery.altBathroom": "Bagno luminoso con vasca",
      "gallery.altDetails": "Dettagli artigianali e materiali naturali",
      "gallery.altRelax": "Area relax con vista",
      "gallery.altTerrace": "Terrazza panoramica arredata",
      "experiences.historicAlt": "Vicolo di un centro storico italiano",
      "experiences.natureAlt": "Paesaggio naturale con ulivi",
      "experiences.hikeAlt": "Sentiero panoramico sulla costa",
      "experiences.foodAlt": "Tavola con piatti e vino del territorio",
      "a11y.primaryNavigation": "Navigazione principale",
      "a11y.languageSwitcher": "Selezione lingua",
      "a11y.openMenu": "Apri il menu",
      "a11y.scrollToAbout": "Scorri per scoprire la struttura",
      "form.adultsAria": "Numero adulti",
      "a11y.trustHighlights": "Punti di forza",
      "rooms.deluxe.featuresAria": "Caratteristiche della Camera Deluxe",
      "rooms.superior.featuresAria": "Caratteristiche della Camera Superior",
      "rooms.suite.featuresAria": "Caratteristiche della Suite",
      "gallery.filtersAria": "Filtra la gallery",
      "gallery.openExterior": "Apri immagine: gli esterni",
      "gallery.openBreakfast": "Apri immagine: la colazione",
      "gallery.openView": "Apri immagine: il panorama",
      "gallery.openRoom": "Apri immagine: una delle camere",
      "gallery.openBathroom": "Apri immagine: il bagno",
      "gallery.openDetails": "Apri immagine: i dettagli",
      "gallery.openRelax": "Apri immagine: area relax",
      "gallery.openTerrace": "Apri immagine: la terrazza",
      "reviews.controlsAria": "Controlli recensioni",
      "reviews.prevAria": "Recensione precedente",
      "reviews.nextAria": "Recensione successiva",
      "reviews.fiveStars": "5 stelle",
      "contact.socialAria": "Profili social",
      "a11y.footerNavigation": "Navigazione footer",
      "a11y.whatsappFloating": "Contatta il B&B su WhatsApp",
      "cookie.bannerAria": "Informativa cookie",
      "a11y.closeGallery": "Chiudi la gallery",
      "a11y.previousImage": "Immagine precedente",
      "a11y.nextImage": "Immagine successiva",
      "a11y.closeRoom": "Chiudi dettagli camera",
      "contact.mapTitle": "Mappa della posizione del Bed & Breakfast",
      "a11y.closeMenu": "Chiudi il menu"
    },
    "en": {
      "rooms.photoAlt": "Photo of one of the rooms",
      "rooms.openPhoto": "Open photo full screen",
      "whatsapp.defaultMessage": "Hello, I would like some information about room availability.",
      "request.emailSubject": "Availability request",
      "request.greeting": "Hello, I would like to request availability for the following stay:",
      "request.checkin": "Check-in",
      "request.checkout": "Check-out",
      "request.guests": "Guests",
      "request.room": "Room",
      "request.name": "Name",
      "request.email": "Email",
      "request.phone": "Phone",
      "request.requests": "Special requests",
      "request.noRequests": "No special requests",
      "request.closing": "Thank you, I look forward to hearing from you.",
      "request.adult": "adult",
      "request.adults": "adults",
      "request.child": "child",
      "request.children": "children",
      "validation.required": "This field is required.",
      "validation.privacy": "You need to accept the privacy notice to continue.",
      "validation.fullName": "Please enter your full name.",
      "validation.email": "Please enter a valid email address.",
      "validation.datePast": "The check-in date cannot be in the past.",
      "validation.checkoutAfter": "Check-out must be after check-in.",
      "validation.formError": "Please check the highlighted fields and try again.",
      "validation.whatsappOpening": "Opening WhatsApp with your request…",
      "validation.emailOpening": "Opening your email app with your request…",
      "validation.quickCopied": "Dates copied into the form: complete your details to send the request.",
      "a11y.skipToContent": "Skip to main content",
      "nav.home": "Home",
      "nav.about": "The property",
      "nav.rooms": "Rooms",
      "nav.gallery": "Gallery",
      "nav.services": "Services",
      "nav.contacts": "Contact",
      "nav.territory": "Local area",
      "cta.checkAvailability": "Check availability",
      "cta.discoverRooms": "Discover the rooms",
      "cta.checkNow": "Check now",
      "cta.discoverRoom": "Discover the room",
      "cta.checkAvailabilityShort": "Availability",
      "cta.sendRequest": "Send a request",
      "hero.kicker": "Guesthouse, Salerno, Italy",
      "hero.titleLine1": "The simple luxury",
      "hero.titleLine2": "of feeling at home.",
      "hero.subtitle": "An intimate retreat, thoughtfully designed rooms and the slow rhythm of Italian hospitality.",
      "hero.scroll": "Discover",
      "form.checkin": "Check-in",
      "form.checkout": "Check-out",
      "form.adults": "Adults",
      "form.children": "Children",
      "form.fullName": "Full name",
      "form.email": "Email",
      "form.phone": "Phone",
      "form.room": "Preferred room",
      "form.roomAny": "Any available room",
      "form.message": "Message / special requests",
      "form.title": "Request details",
      "form.requiredNote": "Fields marked with * are required.",
      "form.privacyPrefix": "I have read the ",
      "form.privacyLink": "privacy policy",
      "form.privacySuffix": " and authorize the processing of my data to respond to this request.",
      "form.sendWhatsapp": "Send request via WhatsApp",
      "form.sendEmail": "Send request via Email",
      "form.technicalNote": "The email button opens your device’s mail app using mailto:. For automatic sending, integrate a backend, Formspree or EmailJS.",
      "trust.directTitle": "Direct contact",
      "trust.directText": "Personal assistance, with no intermediaries",
      "trust.quietTitle": "Intimate atmosphere",
      "trust.quietText": "Few rooms, time and tranquillity",
      "trust.locationTitle": "Ideal location",
      "trust.locationText": "Close to the most authentic places",
      "about.floatingNote": "with hospitality tailored to you",
      "about.kicker": "Our home",
      "about.title": "An authentic place, made for slowing down.",
      "about.lead": "Donna Ada Suites was born from the desire to turn a light-filled Italian home into an intimate retreat where every guest feels truly expected.",
      "about.body": "Natural materials, warm colours and handcrafted details accompany discreet, attentive hospitality. Here, comfort is not about excess, but about quality rest, carefully prepared breakfasts and genuine advice for discovering the area.",
      "about.value1Title": "Personal care",
      "about.value1Text": "Suggestions, timing and thoughtful details shaped around your stay.",
      "about.value2Title": "Essential beauty",
      "about.value2Text": "Elegant, relaxing spaces without excess, featuring authentic materials.",
      "about.value3Title": "A lived-in sense of place",
      "about.value3Text": "Places, flavours and encounters selected just as we would recommend them to a friend.",
      "about.discoverServices": "Discover all services",
      "rooms.kicker": "The rooms",
      "rooms.title": "Five ways to experience the same tranquillity.",
      "rooms.intro": "Bright spaces, natural fabrics and carefully selected details. Each room has its own personality, with the same attention to comfort.",
      "rooms.from": "from",
      "rooms.perNight": "/ night",
      "rooms.guests2": "2 guests",
      "rooms.guests3": "3 guests",
      "rooms.guests4": "4 guests",
      "rooms.kingBed": "King size",
      "rooms.kingSofa": "King + sofa",
      "rooms.priceNote": "Prices shown are indicative and may vary depending on the period, length of stay and number of guests.",
      "rooms.deluxe.badge": "Most requested",
      "rooms.deluxe.name": "Deluxe Room",
      "rooms.deluxe.description": "Welcoming and bright, with a king-size bed, reading corner and a view that invites you to slow down.",
      "rooms.superior.badge": "Panoramic view",
      "rooms.superior.name": "Superior Room",
      "rooms.superior.description": "Generous spaces, natural light and a private balcony for starting the day at an unhurried pace.",
      "rooms.camera4.badge": "Elegance and comfort",
      "rooms.camera4.name": "Anima",
      "rooms.camera4.description": "Enter the description of the fourth room here.",
      "rooms.camera5.badge": "Exclusive atmosphere",
      "rooms.camera5.name": "Amore",
      "rooms.camera5.description": "Enter the description of the fifth room here.",
      "rooms.suite.badge": "Complete experience",
      "rooms.suite.name": "Suite",
      "rooms.suite.description": "Separate bedroom and living area, private terrace and exclusive details for a stay to remember.",
      "gallery.kicker": "The property, in detail",
      "gallery.title": "A story of light, texture and silence.",
      "gallery.intro": "Explore the spaces, rooms and small rituals that make each stay special.",
      "gallery.filterAll": "All",
      "gallery.filterRooms": "Rooms",
      "gallery.filterSpaces": "Spaces",
      "gallery.filterExperience": "Experience",
      "gallery.captionExterior": "The exteriors",
      "gallery.captionBreakfast": "Breakfast",
      "gallery.captionView": "The view",
      "gallery.captionRoom": "The rooms",
      "gallery.captionBathroom": "The bathrooms",
      "gallery.captionDetails": "The details",
      "gallery.captionRelax": "Relaxation",
      "gallery.captionTerrace": "The terrace",
      "services.kicker": "Services",
      "services.title": "Everything you need. Nothing superfluous.",
      "services.intro": "We have chosen simple but thoughtful services designed to make your stay effortless, from the first message to departure.",
      "services.askService": "Request a service",
      "services.wifiTitle": "Free Wi-Fi",
      "services.wifiText": "Fast connection in rooms and common areas.",
      "services.airTitle": "Air conditioning",
      "services.airText": "Adjustable temperature in every room.",
      "services.cleaningTitle": "Daily housekeeping",
      "services.cleaningText": "Daily care of the rooms and linens.",
      "services.tvTitle": "Smart TV",
      "services.tvText": "Entertainment and access to your personal streaming services.",
      "services.parkingTitle": "Parking",
      "services.parkingText": "Available or arranged with a partner, on request.",
      "services.checkinTitle": "Assisted check-in",
      "services.checkinText": "Personal welcome and agreed self check-in.",
      "services.luggageTitle": "Luggage storage",
      "services.luggageText": "Before check-in and after check-out.",
      "services.transferTitle": "Transfer",
      "services.transferText": "Station, airport and local destinations.",
      "experiences.kicker": "Experience the local area",
      "experiences.title": "Beyond the door, the most authentic Italy.",
      "experiences.intro": "Slow itineraries, local flavours and places that tell the story of our land. We will be happy to help you choose.",
      "experiences.historicTitle": "The Historic Centre",
      "experiences.historicText": "Walks among small shops, pale stone and lively squares.",
      "experiences.natureTitle": "Pompei",
      "experiences.natureText": "Beyond the archaeological excavations, the city offers suggestive glimpses and a unique atmosphere.",
      "experiences.hikeTitle": "Paestum",
      "experiences.hikeText": "The ancient temples and surrounding beaches offer a unique experience between history and nature.",
      "experiences.foodTitle": "Amalfi Coast",
      "experiences.foodText": "Selected addresses, local producers and genuine regional cuisine.",
      "reviews.kicker": "Guest stories",
      "reviews.title": "The best feeling is wanting to return.",
      "reviews.review1Text": "“Donna Ada's B&B is fantastic and very welcoming. The best part was the welcome from Mr. Bruno, the owner; he was very kind and accommodated our needs. Highly recommended.”",
      "reviews.review1Name": "Carmine",
      "reviews.review1Stay": "Couples stay",
      "reviews.review2Text": "“A beautiful B&B. The owner is incredibly kind and friendly. The room is spacious and very clean; it has everything you need. The bathroom is spotless. Convenient parking, thanks to the owner. Highly recommended.”",
      "reviews.review2Name": "Mario",
      "reviews.review2Stay": "Business travel",
      "reviews.review3Text": "“The owner was extremely kind; he provided parking for our car and recommended places for dinner. The B&B room was clean and very cozy. It is very close to the center of Salerno!”",
      "reviews.review3Name": "Vale",
      "reviews.review3Stay": "Family stay",
      "reviews.review4Text": "“Bruno is a very polite, available and affable person. The rooms are beautiful and the most important thing is that the area is very central for getting around on foot.”",
      "reviews.review4Name": "Vincenzo",
      "reviews.review4Stay": "Family trip",
      "reviews.disclaimer": "The reviews shown are demo content: replace them with real, verifiable guest testimonials.",
      "availability.kicker": "No-obligation request",
      "availability.title": "Tell us about the stay you have in mind.",
      "availability.lead": "Fill in the form and choose whether to send your request via WhatsApp or email. We will personally reply with availability and an offer.",
      "availability.benefit1Title": "Personal reply",
      "availability.benefit1Text": "No automated messages: you speak directly with the property.",
      "availability.benefit2Title": "Flexible request",
      "availability.benefit2Text": "Tell us about requirements, arrival times, children or special services.",
      "availability.benefit3Title": "No online payment",
      "availability.benefit3Text": "This form only sends an enquiry: your booking will be confirmed separately.",
      "availability.preferDirect": "Prefer to message us now?",
      "faq.kicker": "Frequently asked questions",
      "faq.title": "Useful information before you arrive.",
      "faq.intro": "Can’t find the answer? Message us: we will be happy to help you plan your stay.",
      "faq.contactUs": "Contact us",
      "faq.q1": "What time is check-in?",
      "faq.a1": "Check-in is normally available from 3:00 pm to 8:00 pm. Different times can be arranged in advance.",
      "faq.q2": "What time is check-out?",
      "faq.a2": "Check-out is by 10:30 am. Complimentary luggage storage can be requested.",
      "faq.q3": "Is parking available?",
      "faq.a3": "A private or partner parking option is available. Contact us before arrival for precise directions.",
      "faq.q4": "Is breakfast included?",
      "faq.a4": "Yes, unless otherwise stated in your offer. Please let us know in advance about allergies, intolerances or dietary preferences.",
      "faq.q5": "Are pets allowed?",
      "faq.a5": "Pet accommodation depends on the room and period. Mention it in your request so we can check the best option.",
      "faq.q6": "How can I check availability?",
      "faq.a6": "Fill in the form and send your request via WhatsApp or email. You will receive a direct reply with availability, price and conditions.",
      "contact.kicker": "Contact",
      "contact.title": "We are here to help you get away.",
      "contact.intro": "Message us for availability, directions, special requests, or simply to understand which room best suits your stay.",
      "contact.tagline": "Intimate hospitality, natural elegance, authentic Italy.",
      "contact.addressLabel": "Address",
      "contact.phoneLabel": "Phone",
      "contact.hoursLabel": "Assistance",
      "contact.mapCardKicker": "How to reach us",
      "contact.mapCardText": "Detailed directions and information about parking and transfers will be sent before your arrival.",
      "contact.openMaps": "Open in Google Maps",
      "finalCta.kicker": "Your time, here",
      "finalCta.title": "Your next story can begin in a room filled with light.",
      "finalCta.text": "Send us your dates: we will reply with the best option and all the details.",
      "footer.description": "A small Italian retreat for those seeking tranquillity, authenticity and thoughtful hospitality.",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.stayWithUs": "Stay with us",
      "footer.bookingText": "Message us directly for a personalised offer.",
      "footer.rights": "All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.cookie": "Cookie Policy",
      "footer.cookieSettings": "Cookie preferences",
      "footer.credit": "Customisable demo website for hospitality properties.",
      "floatingWhatsapp.label": "Message us",
      "cookie.title": "Your privacy",
      "cookie.text": "This demo website only uses necessary technical tools. If you add analytics or marketing tools, update the banner and policies.",
      "cookie.more": "More information",
      "cookie.technicalOnly": "Necessary only",
      "cookie.accept": "Accept",
      "roomModal.included": "Included in the room",
      "form.fullNamePlaceholder": "E.g. John Smith",
      "form.emailPlaceholder": "name@email.com",
      "form.phonePlaceholder": "+44 ...",
      "form.messagePlaceholder": "Arrival time, dietary requirements, cot, transfer...",
      "brand.logoAlt": "B&B logo",
      "about.imageAlt": "Elegant, bright interior of the Bed & Breakfast",
      "rooms.deluxe.imageAlt": "Deluxe Room with double bed and view",
      "rooms.superior.imageAlt": "Elegant Superior Room with large windows",
      "rooms.suite.imageAlt": "Spacious Suite with relaxation area",
      "gallery.altExterior": "Exterior of the property at sunset",
      "gallery.altBreakfast": "Carefully served Italian breakfast",
      "gallery.altView": "View of the surrounding landscape",
      "gallery.altRoom": "Elegant room with natural fabrics",
      "gallery.altBathroom": "Bright bathroom with bathtub",
      "gallery.altDetails": "Handcrafted details and natural materials",
      "gallery.altRelax": "Relaxation area with a view",
      "gallery.altTerrace": "Furnished panoramic terrace",
      "experiences.historicAlt": "Lane in an Italian historic centre",
      "experiences.natureAlt": "Natural landscape with olive trees",
      "experiences.hikeAlt": "Panoramic coastal trail",
      "experiences.foodAlt": "Table with local dishes and wine",
      "a11y.primaryNavigation": "Primary navigation",
      "a11y.languageSwitcher": "Language selection",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "a11y.scrollToAbout": "Scroll to discover the property",
      "form.adultsAria": "Number of adults",
      "a11y.trustHighlights": "Highlights",
      "rooms.deluxe.featuresAria": "Deluxe Room features",
      "rooms.superior.featuresAria": "Superior Room features",
      "rooms.suite.featuresAria": "Suite features",
      "gallery.filtersAria": "Filter gallery",
      "gallery.openExterior": "Open image: exteriors",
      "gallery.openBreakfast": "Open image: breakfast",
      "gallery.openView": "Open image: view",
      "gallery.openRoom": "Open image: one of the rooms",
      "gallery.openBathroom": "Open image: bathroom",
      "gallery.openDetails": "Open image: details",
      "gallery.openRelax": "Open image: relaxation area",
      "gallery.openTerrace": "Open image: terrace",
      "reviews.controlsAria": "Review controls",
      "reviews.prevAria": "Previous review",
      "reviews.nextAria": "Next review",
      "reviews.fiveStars": "5 stars",
      "contact.socialAria": "Social profiles",
      "a11y.footerNavigation": "Footer navigation",
      "a11y.whatsappFloating": "Contact the B&B on WhatsApp",
      "cookie.bannerAria": "Cookie notice",
      "a11y.closeGallery": "Close gallery",
      "a11y.previousImage": "Previous image",
      "a11y.nextImage": "Next image",
      "a11y.closeRoom": "Close room details",
      "contact.mapTitle": "Map showing the Bed & Breakfast location"
    }
  };

  const SITE_CONFIG = window.BNB_SITE_CONFIG || BUILTIN_SITE_CONFIG;
  const TRANSLATIONS = window.BNB_TRANSLATIONS || BUILTIN_TRANSLATIONS;
  const ROOM_DATA = window.BNB_ROOM_DATA || {};

  const LANGUAGE_STORAGE_KEY = "bnbPreferredLanguage";
  const COOKIE_STORAGE_KEY = "bnbCookiePreference";
  const SUPPORTED_LANGUAGES = ["it", "en"];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentLanguage = "it";
  let currentRoomId = null;
  let currentGalleryIndex = 0;
  let visibleGalleryItems = [];
  let lastFocusedElement = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    validateConfiguration();
    setCurrentYear();
    initLanguageControls();
    initHeader();
    initSmoothAnchors();
    initRevealAnimations();
    initActiveNavigation();
    initDateFields();
    initQuickBooking();
    initAvailabilityForm();
    initRoomSelectionButtons();
    initRoomModal();
    initGallery();
    initReviews();
    initFaq();
    initCookieBanner();
    initLegalContent();
    warnAboutMissingTranslations();
  }

  /* ====================================================================
     INTERNATIONALISATION
  ==================================================================== */
  function initLanguageControls() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.language;
        if (SUPPORTED_LANGUAGES.includes(language)) {
          setLanguage(language, true);
        }
      });
    });

    const savedLanguage = safeStorageGet(LANGUAGE_STORAGE_KEY);
    setLanguage(SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : "it", false);
  }

  function setLanguage(language, persist = true) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n, language);
      if (value !== undefined) element.textContent = value;
    });

    applyTranslatedAttribute("data-i18n-placeholder", "placeholder", language);
    applyTranslatedAttribute("data-i18n-aria-label", "aria-label", language);
    applyTranslatedAttribute("data-i18n-alt", "alt", language);
    applyTranslatedAttribute("data-i18n-title", "title", language);

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    applySiteConfiguration(language);
    updateMetaContent(language);
    updateLegalContent(language);
    updateMenuButtonLabel();

    if (currentRoomId && isDialogOpen(document.getElementById("room-modal"))) {
      renderRoomModal(currentRoomId);
    }

    if (isDialogOpen(document.getElementById("gallery-lightbox"))) {
      renderLightboxImage();
    }

    if (persist) safeStorageSet(LANGUAGE_STORAGE_KEY, language);
    document.dispatchEvent(new CustomEvent("bnb:languagechange", { detail: { language } }));
  }

  function applyTranslatedAttribute(dataAttribute, targetAttribute, language) {
    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
      const value = t(element.getAttribute(dataAttribute), language);
      if (value !== undefined) element.setAttribute(targetAttribute, value);
    });
  }

  function t(key, language = currentLanguage) {
    const primary = getByPath(TRANSLATIONS[language], key);
    const fallback = getByPath(TRANSLATIONS.it, key);
    const value = primary ?? fallback;

    if (typeof value !== "string") return value;
    return interpolate(value);
  }

  function getByPath(object, path) {
    if (!object || !path) return undefined;
    if (Object.prototype.hasOwnProperty.call(object, path)) return object[path];
    return path.split(".").reduce((value, part) => value?.[part], object);
  }

  function interpolate(value) {
    if (typeof value !== "string") return value;
    return value.replace(/\{\{(\w+)\}\}/g, (_, property) => {
      return SITE_CONFIG[property] ?? `{{${property}}}`;
    });
  }

  function updateMetaContent(language) {
    const page = document.body.dataset.page || "home";
    const titleKey = page === "privacy" ? "meta.privacyTitle" : page === "cookie" ? "meta.cookieTitle" : "meta.homeTitle";
    const descriptionKey = page === "home" ? "meta.homeDescription" : page === "privacy" ? "legal.privacyIntro" : "legal.cookieIntro";

    const title = t(titleKey, language);
    const description = t(descriptionKey, language);

    if (title) document.title = title;
    setMetaAttribute('meta[name="description"]', "content", description);
    setMetaAttribute('meta[property="og:title"]', "content", title);
    setMetaAttribute('meta[property="og:description"]', "content", page === "home" ? t("meta.homeOgDescription", language) : description);
    setMetaAttribute('meta[property="og:locale"]', "content", language === "it" ? "it_IT" : "en_GB");
    const publicUrl = buildPublicPageUrl(page);
    setMetaAttribute('meta[property="og:url"]', "content", publicUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && publicUrl) canonical.href = publicUrl;
  }

  function buildPublicPageUrl(page) {
    const baseUrl = String(SITE_CONFIG.websiteUrl || "").trim();
    if (!baseUrl) return "";

    try {
      const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
      return page === "home" ? normalizedBaseUrl : new URL(`${page}.html`, normalizedBaseUrl).href;
    } catch (error) {
      console.warn("Controlla BNB_SITE_CONFIG.websiteUrl in js/config.js.", error);
      return baseUrl;
    }
  }

  function setMetaAttribute(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute(attribute, value);
  }

  function warnAboutMissingTranslations() {
    if (!window.console || typeof console.warn !== "function") return;

    const attributes = [
      "data-i18n",
      "data-i18n-placeholder",
      "data-i18n-aria-label",
      "data-i18n-alt",
      "data-i18n-title"
    ];

    const missing = new Set();
    attributes.forEach((attribute) => {
      document.querySelectorAll(`[${attribute}]`).forEach((element) => {
        const key = element.getAttribute(attribute);
        SUPPORTED_LANGUAGES.forEach((language) => {
          if (getByPath(TRANSLATIONS[language], key) === undefined) {
            missing.add(`${language}: ${key}`);
          }
        });
      });
    });

    if (missing.size) {
      console.warn("Traduzioni mancanti / Missing translations:\n" + [...missing].join("\n"));
    }
  }

  /* ====================================================================
     CONFIGURAZIONE CONTATTI
  ==================================================================== */
  function applySiteConfiguration(language = currentLanguage) {
    const translatedHours = language === "en" ? SITE_CONFIG.assistanceHoursEn : SITE_CONFIG.assistanceHoursIt;
    const textValues = {
      bnbName: SITE_CONFIG.bnbName,
      location: SITE_CONFIG.location,
      streetAddress: SITE_CONFIG.streetAddress,
      cityAddress: SITE_CONFIG.cityAddress,
      fullAddress: SITE_CONFIG.fullAddress,
      phoneDisplay: SITE_CONFIG.phoneDisplay,
      whatsappDisplay: SITE_CONFIG.whatsappDisplay,
      email: SITE_CONFIG.email,
      assistanceHours: translatedHours
    };

    document.querySelectorAll("[data-config-text]").forEach((element) => {
      const key = element.dataset.configText;
      if (textValues[key] !== undefined) element.textContent = textValues[key];
    });

    const defaultWhatsAppMessage = t("whatsapp.defaultMessage", language);
    const whatsappUrl = buildWhatsAppUrl(defaultWhatsAppMessage);
    const hrefValues = {
      phone: SITE_CONFIG.phoneRaw ? `tel:${SITE_CONFIG.phoneRaw}` : "#",
      email: SITE_CONFIG.email ? `mailto:${SITE_CONFIG.email}` : "#",
      whatsapp: whatsappUrl,
      instagram: SITE_CONFIG.instagramUrl || "#",
      facebook: SITE_CONFIG.facebookUrl || "#",
      directions: SITE_CONFIG.googleMapsDirectionsUrl || "#"
    };

    document.querySelectorAll("[data-config-href]").forEach((element) => {
      const key = element.dataset.configHref;
      if (hrefValues[key] !== undefined) element.setAttribute("href", hrefValues[key]);
    });

    ["instagram", "facebook"].forEach((key) => {
      if (hrefValues[key] && hrefValues[key] !== "#") return;
      document.querySelectorAll(`[data-config-href="${key}"]`).forEach((element) => {
        element.style.display = "none";
      });
    });

    document.querySelectorAll("[data-config-aria-label]").forEach((element) => {
      const key = element.dataset.configAriaLabel;
      if (key === "brandHomeLabel") {
        element.setAttribute("aria-label", `${SITE_CONFIG.bnbName} - Home`);
      }
    });

    const map = document.getElementById("google-map");
    if (map && SITE_CONFIG.googleMapsEmbedUrl && map.getAttribute("src") !== SITE_CONFIG.googleMapsEmbedUrl) {
      map.setAttribute("src", SITE_CONFIG.googleMapsEmbedUrl);
    }
  }

  function buildWhatsAppUrl(message) {
    const number = String(SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    return number ? `https://wa.me/${number}?text=${encodeURIComponent(message || "")}` : "#";
  }

  function validateConfiguration() {
    if (!SITE_CONFIG.whatsappNumber || !/^\d+$/.test(String(SITE_CONFIG.whatsappNumber))) {
      console.warn("BNB_SITE_CONFIG.whatsappNumber deve contenere soltanto cifre e il prefisso internazionale.");
    }

    if (!SITE_CONFIG.email || !String(SITE_CONFIG.email).includes("@")) {
      console.warn("Controlla BNB_SITE_CONFIG.email in js/config.js.");
    }
  }

  /* ====================================================================
     HEADER, MENU MOBILE E NAVIGAZIONE
  ==================================================================== */
  function initHeader() {
    const header = document.getElementById("site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (!header) return;

    let ticking = false;
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
    updateHeader();

    menuToggle?.addEventListener("click", () => {
      setMenuOpen(!document.body.classList.contains("nav-open"));
    });

    navigation?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("click", (event) => {
      if (!document.body.classList.contains("nav-open")) return;
      if (navigation?.contains(event.target) || menuToggle?.contains(event.target)) return;
      setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        setMenuOpen(false);
        menuToggle?.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    });
  }

  function setMenuOpen(open) {
    const menuToggle = document.querySelector(".menu-toggle");
    document.body.classList.toggle("nav-open", open);
    menuToggle?.setAttribute("aria-expanded", String(open));
    updateMenuButtonLabel();
  }

  function updateMenuButtonLabel() {
    const menuToggle = document.querySelector(".menu-toggle");
    if (!menuToggle) return;
    const isOpen = document.body.classList.contains("nav-open");
    menuToggle.setAttribute("aria-label", t(isOpen ? "a11y.closeMenu" : "a11y.openMenu"));
  }

  function initSmoothAnchors() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      setMenuOpen(false);
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });

      try {
        window.history.replaceState(null, "", href);
      } catch (_) {
        // File locali e browser molto restrittivi possono impedire replaceState.
      }
    });
  }

  function initActiveNavigation() {
    const links = [...document.querySelectorAll("[data-nav-link]")];
    if (!links.length) return;

    const entries = links
      .map((link) => {
        const selector = link.getAttribute("href");
        return { link, section: selector?.startsWith("#") ? document.querySelector(selector) : null };
      })
      .filter((entry) => entry.section);

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((observedEntries) => {
      const visible = observedEntries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) setActive(visible[0].target.id);
    }, {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.05, 0.15, 0.3, 0.6]
    });

    entries.forEach(({ section }) => observer.observe(section));
  }

  /* ====================================================================
     ANIMAZIONI ALLO SCROLL
  ==================================================================== */
  function initRevealAnimations() {
    const elements = [...document.querySelectorAll(".reveal")];
    if (!elements.length) return;

    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay || 0);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -7% 0px"
    });

    elements.forEach((element) => observer.observe(element));
  }

  /* ====================================================================
     DATE E QUICK BOOKING
  ==================================================================== */
  function initDateFields() {
    const pairs = [
      [document.getElementById("quick-checkin"), document.getElementById("quick-checkout")],
      [document.getElementById("checkin"), document.getElementById("checkout")]
    ];

    pairs.forEach(([checkin, checkout]) => {
      if (!checkin || !checkout) return;
      configureDatePair(checkin, checkout);
    });
  }

  function configureDatePair(checkin, checkout) {
    const today = startOfToday();
    checkin.min = toDateInputValue(today);
    checkout.min = toDateInputValue(addDays(today, 1));

    checkin.addEventListener("change", () => {
      checkin.setCustomValidity("");
      const selectedCheckin = parseDateInput(checkin.value);
      const minimumCheckout = selectedCheckin ? addDays(selectedCheckin, 1) : addDays(today, 1);
      checkout.min = toDateInputValue(minimumCheckout);

      const selectedCheckout = parseDateInput(checkout.value);
      if (selectedCheckout && selectedCheckout <= (selectedCheckin || today)) {
        checkout.value = toDateInputValue(minimumCheckout);
      }
      checkout.setCustomValidity("");
    });

    checkout.addEventListener("change", () => checkout.setCustomValidity(""));
  }

  function initQuickBooking() {
    const form = document.getElementById("quick-booking-form");
    const quickCheckin = document.getElementById("quick-checkin");
    const quickCheckout = document.getElementById("quick-checkout");
    const quickAdults = document.getElementById("quick-adults");

    if (!form || !quickCheckin || !quickCheckout) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      quickCheckout.setCustomValidity("");

      const checkinDate = parseDateInput(quickCheckin.value);
      const checkoutDate = parseDateInput(quickCheckout.value);

      if (!quickCheckin.value || !quickCheckout.value) {
        form.reportValidity();
        return;
      }

      if (!checkinDate || !checkoutDate || checkoutDate <= checkinDate) {
        quickCheckout.setCustomValidity(t("validation.checkoutAfter"));
        quickCheckout.reportValidity();
        return;
      }

      const mainCheckin = document.getElementById("checkin");
      const mainCheckout = document.getElementById("checkout");
      const mainAdults = document.getElementById("adults");

      if (mainCheckin) mainCheckin.value = quickCheckin.value;
      if (mainCheckout) {
        mainCheckout.min = toDateInputValue(addDays(checkinDate, 1));
        mainCheckout.value = quickCheckout.value;
      }
      if (mainAdults && quickAdults) mainAdults.value = quickAdults.value;

      showFormStatus(t("validation.quickCopied"), "success");
      document.getElementById("disponibilita")?.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });

      window.setTimeout(() => document.getElementById("guest-name")?.focus({ preventScroll: true }), prefersReducedMotion.matches ? 0 : 650);
    });
  }

  /* ====================================================================
     FORM DISPONIBILITÀ, WHATSAPP E EMAIL
  ==================================================================== */
  function initAvailabilityForm() {
    const form = document.getElementById("availability-form");
    if (!form) return;

    linkErrorMessagesToFields(form);

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      const eventName = field.matches("select, input[type='date'], input[type='checkbox']") ? "change" : "input";
      field.addEventListener(eventName, () => {
        clearFieldError(field);
        clearFormStatus();
      });
    });

    document.getElementById("send-whatsapp")?.addEventListener("click", () => {
      const data = validateAndCollectForm(form);
      if (!data) return;

      const message = buildAvailabilityMessage(data);
      const url = buildWhatsAppUrl(message);

      if (url === "#") {
        showFormStatus(t("validation.formError"), "error");
        return;
      }

      showFormStatus(t("validation.whatsappOpening"), "success");
      window.open(url, "_blank", "noopener,noreferrer");
    });

    document.getElementById("send-email")?.addEventListener("click", () => {
      const data = validateAndCollectForm(form);
      if (!data) return;

      const subject = `${t("request.emailSubject")} · ${data.checkin} → ${data.checkout}`;
      const body = buildAvailabilityMessage(data);
      const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      showFormStatus(t("validation.emailOpening"), "success");
      openMailClient(mailtoUrl);
    });
  }

  function openMailClient(mailtoUrl) {
    const link = document.createElement("a");
    link.href = mailtoUrl;
    link.hidden = true;
    link.setAttribute("aria-hidden", "true");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function linkErrorMessagesToFields(form) {
    form.querySelectorAll("[data-error-for]").forEach((errorElement) => {
      const fieldId = errorElement.dataset.errorFor;
      const field = document.getElementById(fieldId);
      if (!field) return;

      errorElement.id = `${fieldId}-error`;
      field.setAttribute("aria-describedby", errorElement.id);
    });
  }

  function validateAndCollectForm(form) {
    clearAllFormErrors(form);

    const name = form.elements.name;
    const email = form.elements.email;
    const checkin = form.elements.checkin;
    const checkout = form.elements.checkout;
    const adults = form.elements.adults;
    const room = form.elements.room;
    const privacy = form.elements.privacyConsent;
    const requiredFields = [name, email, checkin, checkout, adults, room, privacy];
    let firstInvalid = null;

    requiredFields.forEach((field) => {
      if (!field) return;
      const missing = field.type === "checkbox" ? !field.checked : !String(field.value || "").trim();
      if (missing) {
        setFieldError(field, field === privacy ? t("validation.privacy") : t("validation.required"));
        firstInvalid ||= field;
      }
    });

    if (name?.value.trim() && name.value.trim().length < 3) {
      setFieldError(name, t("validation.fullName"));
      firstInvalid ||= name;
    }

    if (email?.value && email.validity.typeMismatch) {
      setFieldError(email, t("validation.email"));
      firstInvalid ||= email;
    }

    const checkinDate = parseDateInput(checkin?.value);
    const checkoutDate = parseDateInput(checkout?.value);
    const today = startOfToday();

    if (checkinDate && checkinDate < today) {
      setFieldError(checkin, t("validation.datePast"));
      firstInvalid ||= checkin;
    }

    if (checkinDate && checkoutDate && checkoutDate <= checkinDate) {
      setFieldError(checkout, t("validation.checkoutAfter"));
      firstInvalid ||= checkout;
    }

    if (firstInvalid) {
      showFormStatus(t("validation.formError"), "error");
      firstInvalid.focus();
      return null;
    }

    clearFormStatus();
    const formData = new FormData(form);
    const selectedRoom = room.options[room.selectedIndex]?.textContent.trim() || room.value;

    return {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      checkin: String(formData.get("checkin") || ""),
      checkout: String(formData.get("checkout") || ""),
      adults: Number(formData.get("adults") || 1),
      children: Number(formData.get("children") || 0),
      room: selectedRoom,
      roomValue: String(formData.get("room") || "any"),
      message: String(formData.get("message") || "").trim()
    };
  }

  function buildAvailabilityMessage(data) {
    const adultsWord = data.adults === 1 ? t("request.adult") : t("request.adults");
    const childrenWord = data.children === 1 ? t("request.child") : t("request.children");
    const guestSummary = data.children > 0
      ? `${data.adults} ${adultsWord}, ${data.children} ${childrenWord}`
      : `${data.adults} ${adultsWord}`;

    const lines = [
      t("request.greeting"),
      "",
      `${t("request.checkin")}: ${formatDateForMessage(data.checkin)}`,
      `${t("request.checkout")}: ${formatDateForMessage(data.checkout)}`,
      `${t("request.guests")}: ${guestSummary}`,
      `${t("request.room")}: ${data.room}`,
      "",
      `${t("request.name")}: ${data.name}`,
      `${t("request.email")}: ${data.email}`
    ];

    if (data.phone) lines.push(`${t("request.phone")}: ${data.phone}`);

    lines.push(
      "",
      `${t("request.requests")}: ${data.message || t("request.noRequests")}`,
      "",
      t("request.closing")
    );

    return lines.join("\n");
  }

  function setFieldError(field, message) {
    if (!field) return;
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");

    const errorElement = document.querySelector(`[data-error-for="${field.id}"]`);
    if (errorElement) errorElement.textContent = message;
  }

  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");

    const errorElement = field.id ? document.querySelector(`[data-error-for="${field.id}"]`) : null;
    if (errorElement) errorElement.textContent = "";
  }

  function clearAllFormErrors(form) {
    form.querySelectorAll(".is-invalid").forEach((field) => clearFieldError(field));
    form.querySelectorAll("[data-error-for]").forEach((element) => { element.textContent = ""; });
  }

  function showFormStatus(message, type) {
    const status = document.getElementById("form-status");
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${type === "error" ? "is-error" : "is-success"}`;
  }

  function clearFormStatus() {
    const status = document.getElementById("form-status");
    if (!status) return;
    status.textContent = "";
    status.className = "form-status";
  }

  /* ====================================================================
     CAMERE E MODAL
  ==================================================================== */
  function initRoomSelectionButtons() {
    document.querySelectorAll(".js-select-room").forEach((button) => {
      button.addEventListener("click", () => selectRoomAndOpenForm(button.dataset.roomValue));
    });
  }

  function selectRoomAndOpenForm(roomId) {
    const select = document.getElementById("room");
    if (select && [...select.options].some((option) => option.value === roomId)) {
      select.value = roomId;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    document.getElementById("disponibilita")?.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start"
    });

    window.setTimeout(() => document.getElementById("checkin")?.focus({ preventScroll: true }), prefersReducedMotion.matches ? 0 : 650);
  }

  function initRoomModal() {
    const dialog = document.getElementById("room-modal");
    if (!dialog) return;

    document.querySelectorAll(".js-room-details").forEach((button) => {
      button.addEventListener("click", () => {
        const roomId = button.dataset.room;
        if (!ROOM_DATA[roomId]) return;
        lastFocusedElement = button;
        currentRoomId = roomId;
        renderRoomModal(roomId);
        openDialog(dialog);
      });
    });

    dialog.querySelector("[data-room-modal-close]")?.addEventListener("click", () => closeDialog(dialog));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", restoreLastFocus);

    document.getElementById("room-modal-book")?.addEventListener("click", () => {
      if (!currentRoomId) return;
      closeDialog(dialog);
      selectRoomAndOpenForm(currentRoomId);
    });
  }

  function renderRoomModal(roomId) {
    const room = ROOM_DATA[roomId];
    const content = room?.[currentLanguage] || room?.it;
    if (!room || !content) return;

    const image = document.getElementById("room-modal-image");
    const kicker = document.getElementById("room-modal-kicker");
    const title = document.getElementById("room-modal-title");
    const description = document.getElementById("room-modal-description");
    const facts = document.getElementById("room-modal-facts");
    const amenities = document.getElementById("room-modal-amenities");
    const price = document.getElementById("room-modal-price");

    if (image) {
      image.src = room.image;
      image.alt = content.imageAlt;
    }
    if (kicker) kicker.textContent = content.kicker;
    if (title) title.textContent = t(room.titleKey);
    if (description) description.textContent = content.description;
    if (price) price.textContent = room.price;

    if (facts) {
      facts.replaceChildren(...content.facts.map((fact) => {
        const item = document.createElement("span");
        item.className = "room-modal-fact";
        item.innerHTML = `<svg aria-hidden="true"><use href="#icon-${escapeHtml(fact.icon)}"></use></svg><span>${escapeHtml(fact.text)}</span>`;
        return item;
      }));
    }

    if (amenities) {
      amenities.replaceChildren(...content.amenities.map((amenity) => {
        const item = document.createElement("li");
        item.textContent = amenity;
        return item;
      }));
    }
  }

  /* ====================================================================
     GALLERY, FILTRI E LIGHTBOX
  ==================================================================== */
  function initGallery() {
    const galleryItems = [...document.querySelectorAll("[data-gallery-item]")];
    const filterButtons = [...document.querySelectorAll("[data-gallery-filter]")];
    const dialog = document.getElementById("gallery-lightbox");

    if (!galleryItems.length || !dialog) return;

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.galleryFilter;

        filterButtons.forEach((filterButton) => {
          const active = filterButton === button;
          filterButton.classList.toggle("is-active", active);
          filterButton.setAttribute("aria-pressed", String(active));
        });

        galleryItems.forEach((item) => {
          const matches = filter === "all" || item.dataset.category === filter;
          item.classList.toggle("is-hidden", !matches);
          item.setAttribute("aria-hidden", String(!matches));
          item.tabIndex = matches ? 0 : -1;
        });
      });
    });

    galleryItems.forEach((item) => {
      item.addEventListener("click", () => openLightbox(item));
    });

    dialog.querySelector("[data-lightbox-close]")?.addEventListener("click", () => closeDialog(dialog));
    dialog.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => showAdjacentLightboxImage(-1));
    dialog.querySelector("[data-lightbox-next]")?.addEventListener("click", () => showAdjacentLightboxImage(1));

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", restoreLastFocus);

    document.addEventListener("keydown", (event) => {
      if (!isDialogOpen(dialog)) return;
      if (event.key === "ArrowLeft") showAdjacentLightboxImage(-1);
      if (event.key === "ArrowRight") showAdjacentLightboxImage(1);
    });

    initLightboxSwipe(dialog);
  }

  function openLightbox(item) {
    const dialog = document.getElementById("gallery-lightbox");
    if (!dialog) return;

    visibleGalleryItems = [...document.querySelectorAll("[data-gallery-item]")]
      .filter((galleryItem) => !galleryItem.classList.contains("is-hidden"));
    currentGalleryIndex = Math.max(0, visibleGalleryItems.indexOf(item));
    lastFocusedElement = item;
    renderLightboxImage();
    openDialog(dialog);
  }

  function renderLightboxImage() {
    const item = visibleGalleryItems[currentGalleryIndex];
    if (!item) return;

    const sourceImage = item.querySelector("img");
    const lightboxImage = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const counter = document.getElementById("lightbox-counter");

    if (lightboxImage) {
      lightboxImage.src = item.dataset.src || sourceImage?.src || "";
      lightboxImage.alt = sourceImage?.alt || "";
    }
    if (caption) caption.textContent = t(item.dataset.captionKey) || sourceImage?.alt || "";
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${visibleGalleryItems.length}`;
  }

  function showAdjacentLightboxImage(direction) {
    if (!visibleGalleryItems.length) return;
    currentGalleryIndex = (currentGalleryIndex + direction + visibleGalleryItems.length) % visibleGalleryItems.length;
    renderLightboxImage();
  }

  function initLightboxSwipe(dialog) {
    let startX = null;

    dialog.addEventListener("touchstart", (event) => {
      startX = event.changedTouches[0]?.clientX ?? null;
    }, { passive: true });

    dialog.addEventListener("touchend", (event) => {
      if (startX === null) return;
      const endX = event.changedTouches[0]?.clientX ?? startX;
      const distance = endX - startX;
      startX = null;

      if (Math.abs(distance) < 55) return;
      showAdjacentLightboxImage(distance > 0 ? -1 : 1);
    }, { passive: true });
  }

  /* ====================================================================
     RECENSIONI
  ==================================================================== */
  function initReviews() {
    const track = document.getElementById("reviews-track");
    const previous = document.querySelector("[data-review-prev]");
    const next = document.querySelector("[data-review-next]");
    if (!track || !previous || !next) return;

    previous.addEventListener("click", () => scrollReviews(track, -1));
    next.addEventListener("click", () => scrollReviews(track, 1));
  }

  function scrollReviews(track, direction) {
    const firstCard = track.querySelector(".review-card");
    if (!firstCard) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const amount = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const nearStart = track.scrollLeft <= 4;
    const nearEnd = track.scrollLeft >= maxScroll - 4;

    if (direction > 0 && nearEnd) {
      track.scrollTo({ left: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    } else if (direction < 0 && nearStart) {
      track.scrollTo({ left: maxScroll, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    } else {
      track.scrollBy({ left: amount * direction, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    }
  }

  /* ====================================================================
     FAQ ACCORDION
  ==================================================================== */
  function initFaq() {
    const questions = [...document.querySelectorAll(".faq-question")];
    if (!questions.length) return;

    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const shouldOpen = question.getAttribute("aria-expanded") !== "true";
        questions.forEach((otherQuestion) => setFaqState(otherQuestion, false));
        setFaqState(question, shouldOpen);
      });
    });

    setFaqState(questions[0], true);
  }

  function setFaqState(question, open) {
    const answerId = question.getAttribute("aria-controls");
    const answer = answerId ? document.getElementById(answerId) : null;
    question.setAttribute("aria-expanded", String(open));
    if (answer) answer.hidden = !open;
  }

  /* ====================================================================
     COOKIE BANNER INFORMATIVO
  ==================================================================== */
  function initCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;

    const savedPreference = safeStorageGet(COOKIE_STORAGE_KEY);
    if (!savedPreference) {
      window.setTimeout(() => { banner.hidden = false; }, 900);
    }

    banner.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
      safeStorageSet(COOKIE_STORAGE_KEY, "accepted");
      banner.hidden = true;
    });

    banner.querySelector("[data-cookie-decline]")?.addEventListener("click", () => {
      safeStorageSet(COOKIE_STORAGE_KEY, "essential");
      banner.hidden = true;
    });

    document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
      button.addEventListener("click", () => {
        banner.hidden = false;
        banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  /* ====================================================================
     PAGINE LEGALI
  ==================================================================== */
  function initLegalContent() {
    updateLegalContent(currentLanguage);
  }

  function updateLegalContent(language) {
    document.querySelectorAll("[data-legal-content]").forEach((article) => {
      article.hidden = article.dataset.legalContent !== language;
    });
  }

  /* ====================================================================
     DIALOG E UTILITY
  ==================================================================== */
  function openDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      restoreLastFocus();
    }
  }

  function isDialogOpen(dialog) {
    return Boolean(dialog?.open || dialog?.hasAttribute("open"));
  }

  function restoreLastFocus() {
    if (lastFocusedElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  }

  function setCurrentYear() {
    const year = document.getElementById("current-year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function startOfToday() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function toDateInputValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function parseDateInput(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatDateForMessage(value) {
    const date = parseDateInput(value);
    if (!date) return value;

    return new Intl.DateTimeFormat(currentLanguage === "it" ? "it-IT" : "en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_) {
      // Il sito continua a funzionare anche se localStorage è disabilitato.
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
