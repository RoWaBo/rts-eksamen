import EventsOfTheMonth from '../components/EventsOfTheMonth'
import MailSubscribe from '../components/MailSubscribe'
import MainOffers from '../components/MainOffers'
import NightClubGallery from '../components/NightClubGallery'
import Testimonials from '../components/Testimonials'

const Home = () => {
	return (
		<>
			<MainOffers />
			<EventsOfTheMonth />
			<NightClubGallery />
			<Testimonials />
			<MailSubscribe />
		</>
	)
}

export default Home
