import Hero from '../components/sections/Hero/Hero';
import Benefits from '../components/sections/Benefits/Benefits';
import Pricing from '../components/sections/Pricing/Pricing';
import Studio from '../components/sections/Studio/Studio';
import SpecialOffers from '../components/sections/SpecialOffers/SpecialOffers';
import Reviews from '../components/sections/Reviews/Reviews';
import Contacts from '../components/sections/Contacts/Contacts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Pricing />
      <Studio />
      <SpecialOffers />
      <Reviews />
      <Contacts />
    </>
  );
}
