export default function KnowMe() {
  return (
    <div className="flex flex-col gap-5 text-justify">
      <div className="flex flex-col gap-7 animate-slide-in-top">
        <h1 className="text-2xl sm:text-4xl font-light">
          I believe in a user centered development approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h1>
        <p>This is me.</p>
      </div>
      <span className="h-px w-full bg-teal-400 opacity-20"></span>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row animate-slide-in-right">
        <h1 className="w-full sm:w-2/5 text-2xl sm:text-5xl">Hi, I'm José.</h1>
        <p className="w-full sm:w-3/5 font-light">
          I'm a Full Stack Web Engineer dedicated to turning ideas into creative
          solutions. I specialize in creating seamless and intuitive user
          experiences.
          <br />
          <br />
          I'm passionate about creating pixel-perfect experiences that not only
          look great but are meticulously built for scalability and
          high-performance. (I hate loading screens!)
          <br />
          <br />
          With 8+ years of experience, I've had the opportunity to develop
          software across a variety of settings — from old school software
          houses and new-gen large corporations to start-ups and single-person
          digital products.
          <br />
          <br />
          In my spare time, I’m usually hitting the gym, watching Anime, hanging
          out with my girlfriend and two cats, or immersed in multi-player
          online video games.
        </p>
      </div>
    </div>
  );
}
