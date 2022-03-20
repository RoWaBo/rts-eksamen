# Projektdokumentation

#### Navn: Robert Watt Boolsen

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

## Teknologi-stack

-   HTML
-   CSS
-   JavaScript
-   React

---

### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

#### Emotion

-   Css/SASS styling direktig i js. Igennem css funktionen kan der skrives css på samme måde som i en css eller sass fil. Funktionen generer automatisk et klassenavn, så man undgår at bruge tid op at finde på unikke navne med systemer som BEM. Der kan desuden kaldes funktioner og variabler direktig i css, hvilket gør dynamisk styling mere tilgængeligt.

#### React Router

-   Udfra URL styrer React Router hvilke pages der bliver renderet uden page refresh, da React er en single-page application. Jeg bruger deres hook "useLocation" til at finde sidens pathname og rendere Hero sektionen conditionally.

#### Axios

-   Afløser fetch og henter data udfra en url. Det er ligesom fetch, men en smule mere strømlignet og return-objektet er struktureret pænere.

#### React icons

-   Bibliotek af ikoner som nemt kan importeres ind i react. Meget brugbart i alle projekter!

#### Framer motion

-   Animations Bibliotek/API som kan rendere avancerede physics-based animationer.

#### Swiperjs

-   En touch slider som jeg bruger til alle karussel-slidere og lightbox galleriet. Swiperjs gør det hurtigt og nemt at sætte en slider op. Den animerer slide-transitions og understøtter mere avancerede funktioner som autoplay.

#### React Hook Form

-   Et hook-system som indsamler og validere form data. Den gør det nemere at rendere cutom fejlmeddelelse med deres error-map.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

Det har været frustrende ikke at have et figma eller XD design at hente design data fra. Derfor har jeg truffet nogle selvstændige valg i forhold til design. Disse valg har jeg gjort på baggrund af opgavebeskrivelsen og hvilke data der har været tilgængelig i nightclub-API'et. Morks, demo videoer og beskrivelser har alle været forkellige, så det har været ret forvirrende. Funktionalitet er dog bibeholdt, så jeg vurdere, at jeg har løst opgaven udemærket.

---

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg har arbejdet fint, men har stresset unødigt...
Alt i alt har jeg ikke været i tvivl om hvordan, jeg skulle kode projektet. Animationerne har dog været en udfordring, men er kommet rimelig tæt på demo videoerne.

---

### En beskrivelse af særlige punkter til bedømmelse

Nedenfor fremhæver jeg to dokumenter: MainOffers.js og BookTable.js

#### **Animationsstyring via conditional rendering**

Med Framer motion kan man styre forskellige animationsstadier med conditional rendering og animationsvarianter:

-   **initial:** er et objekt med animationsværdier der bliver eksekveret når komponentet mountes.
-   **animate:** Eksekveres mens komponentet er synligt i dommen.
-   **exit:** Eksekveres når komponentet unmountes.

```js
// ANIMATION VARIANT IN FRAMER MOTION:
const headingAnimation = {
	initial: {
		opacity: 0,
		scale: 0.6,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.7 },
	},
	exit: {
		opacity: 0,
		scale: 0.6,
	},
}
```

Dette er smart fordi animationer kan styres med conditional rendering. Jeg gemmer sektionens index nummer i en state på hover. Animationskomponenter bliver renderet hvis sektionens index er ens med det gemte state index. Med \<AnimatePresence> eksekeveres komponentets exit animation før det bliver unmounted:

### **OBS!** se hele komponentet under src/components/MainOffers.js

```js
// SAVING INDEX IN STATE
const [hoverItemIndex, setHoverItemIndex] = useState(null)

// MAPPING OVER THE SECTIONS
{
	mainOffers.map((offer, i) => (
		<motion.section
			key={i}
			css={mainOfferStyle}
			style={{
				backgroundImage: `url(${offer.imgUrl})`,
			}}
			onHoverStart={() => setHoverItemIndex(i)}
			onHoverEnd={() => setHoverItemIndex(null)}>
			<AnimatePresence>
				{hoverItemIndex === i && (
					<>
						<Overlay key='overlay' opacity={1} />
						<motion.div
							key='icon'
							className='icon'
							variants={iconAnimation}
							initial='initial'
							animate='animate'
							exit='exit'>
							{offer.icon}
						</motion.div>
						<motion.h2
							className='mainOfferHeading'
							variants={headingAnimation}
							initial='initial'
							animate='animate'
							exit='exit'>
							{offer.heading}
						</motion.h2>
						<motion.p
							className='description'
							variants={descriptionAnimation}
							initial='initial'
							animate='animate'
							exit='exit'>
							'Lorem ipsum...'
						</motion.p>
					</>
				)}
			</AnimatePresence>
		</motion.section>
	))
}
```

---

### **Book Table med ekstra validering af bordpladser og antal gæster**

### **OBS!** se hele komponentet under src/pages/BookTable.js

Jeg erklærer en const med et map for hver bordvariation:

```js
// TABLES
const smallTable = {
	imgUrl: './assets/table/table_1.png',
	seats: 4,
}
const mediumTable = {
	imgUrl: './assets/table/table_2.png',
	seats: 6,
}
const largeTable = {
	imgUrl: './assets/table/table_3.png',
	seats: 8,
}
const tableRow = [smallTable, smallTable, mediumTable, smallTable, largeTable]
const allTables = [...tableRow, ...tableRow, ...tableRow]
```

Jeg generer et bord-id via det index nummer som er tilgængeligt under hver itteration i map-funktionens callback funktion. I bordets onClick funktion bliver bordets id og siddepladser passeret som argumenter til **handleTableClick**:

```js
allTables.map(({ imgUrl, seats }, i) => (
	<li
		key={i}
		css={[tableItemStyle, selectedTable?.id === i + 1 && activeTableItemStyle]}
		onClick={() => handleTableClick(i + 1, seats)}>
		<img src={imgUrl} alt='table' />
		<span>{i + 1}</span>
	</li>
))
```

**HandleTableClick** ændrer derefter inputs i formen til bordets id og gemmer id og siddepladser i en **selectedTable state**:

```js
const handleTableClick = (tableID, tableSeats) => {
	setValue('table', tableID)
	setSelectedTable({ id: tableID, seats: tableSeats })
}
```

Under form validering refererer jeg til **selectedTable staten** og smider en fejl hvis antallet af gæster overstiger siddepladser:

```js
<FieldRHF
	css={inputStyle}
	placeholder='Number of Guests'
	type='number'
	min={1}
	max={8}
	errorMessage={errors.numberOfGuests?.message}
	onChange={() => clearErrors()}
	{...register('numberOfGuests', {
		required: 'number of guests is required',
		min: {
			value: 1,
			message: 'number of guests is required',
		},
		max: {
			value: selectedTable?.seats,
			message: `selected table can't seat that number of guests`,
		},
	})}
/>
```
