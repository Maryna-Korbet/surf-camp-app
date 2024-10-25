import Hero from "./_components/Hero/Hero";
import InfoBlock from "./_components/InfoBlock/InfoBlock";

export default function Home() {
  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  const infoBlockExperience = {
    headline: "the experience.",
    image: (
      <img src="/assets/home/info-blocks/experience.png" alt="tent on the seashore" className="info__image" />
    ),
    text: (
      <p className="copy">
        At Sam`s Surfcamp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike.
        Dive into the world of surfing with our expert instructors who have years of experience and a deep passion for the sport. Whether you're a first-time surfer looking to catch your first wave or a seasoned pro seeking to enhance your skills, our dedicated team is here to guide you every step of the way.
        Immerse yourself in the natural beauty of our surf camp's surroundings. Picture yourself waking up to the sound of crashing waves and feeling the warm sand beneath your feet. With pristine beaches and a vibrant coastal atmosphere, [Location] sets the perfect stage for your surf adventure.
      </p>
    ),
    button: (
      <button type="button" className="btn btn--medium btn--orange">BOOK NOW</button>
    ),
    reversed: false,
  };

  const infoBlockLessons = {
    headline: "the lessons.",
    image: (
      <img src="/assets/home/info-blocks/lessons.png" alt="people learn to surf" className="info__image" />
    ),
    text: (
      <p className="copy">
        Our surf camp offers a variety of comprehensive programs tailored to meet your individual needs and goals. From group lessons to private coaching sessions, we create a supportive and inclusive environment that fosters growth, learning, and a whole lot of fun.
        Safety is our top priority, and our highly trained instructors ensure a safe and controlled learning environment. We provide top-quality surf equipment, including boards and wetsuits, to ensure you have everything you need for a comfortable and enjoyable experience.
        Whether you're seeking an adrenaline rush, a chance to reconnect with nature, or simply an escape from the everyday routine, [Surf Camp Name] is the ultimate destination. Join us for an unforgettable journey of waves, friendships, and unforgettable memories.
        Ready to ride the waves? Contact us today to book your spot at [Surf Camp Name]. Get ready to experience the thrill of surfing and create memories that will last a lifetime!
      </p>
    ),
    button: (
      <button type="button" className="btn btn--medium btn--turquoise">CONTACT US</button>
    ),
    reversed: true,
  };


  return (
    <main>
      <Hero headline={heroHeadline} />
      <InfoBlock data={infoBlockExperience} />
      <InfoBlock data={infoBlockLessons} />
    </main>
  );
};