import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const categories = [
  { id: "all", label: "Усі" },
  { id: "jojo", label: "JoJo" },
  { id: "ally", label: "Союзники" },
];

const posters = [
  { id: 1, src: "/imgs/Part4Promo.jpg", alt: "PromoPart4" },
  { id: 2, src: "/imgs/Diamond-is-unbreakable-kv.jpg", alt: "DIUkv" },
  { id: 3, src: "/imgs/Animedia_Jan_2017_Poster_2.png", alt: "Poster_2017" },
  { id: 4, src: "/imgs/DiUVolume_1_(AnimeBlu-ray).jpg", alt: "DiUVolum1" },
  { id: 5, src: "/imgs/DiUVolume_8_(AnimeBlu-ray).png", alt: "DiUVolum8" },
  { id: 6, src: "/imgs/DiUVolume_13_(AnimeBlu-ray).png", alt: "DiUVolum13" },
  { id: 7, src: "/imgs/JoJoRealEscapeGame.jpg", alt: "ClorofulPoster" },
];

const characters = [
  {
    id: 1,
    title: "Josuke Higashikata",
    category: "jojo",
    image: "/imgs/OraDora_NPC_4_Josuke_1.png",
    text: "           <h6>Josuke Higashikata (東方 仗助, Higashikata Jōsuke) is the protagonist of the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable, and the fourth JoJo of the series. He is the illegitimate son of Joseph Joestar and Tomoko Higashikata. He also appears as one of the protagonists in the spin-off manga Crazy Diamond's Demonic Heartbreak and the light novel Crazy Heartbreakers. Josuke is a Japanese first-year high school student residing in the town of Morioh. In the year 1999, he meets Jotaro Kujo, who informs him that he is Joseph's illegitimate son, making him a descendant of the Joestar Family. After his grandfather dies, Josuke takes it upon himself to protect his beloved town from malevolent Stand users. Josuke is a Stand user that wields Crazy Diamond, a Stand with the power to repair.",
  },
  {
    id: 2,
    title: "Koichi Hirose",
    category: "ally",
    image: "/imgs/OraDora_NPC_4_Koichi_1.png",
    text: "           <h6>Koichi Hirose (広瀬 康一, Hirose Kōichi) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. He appears briefly as a tertiary ally in the fifth part, Vento Aureo, assisting Giorno Giovanna in the fight against Polpo's Stand, Black Sabbath. Koichi is also the protagonist of the light novel The Book ~jojo's bizarre adventure 4th another day~ and the one-shot Echoes ACT50. Koichi is a meek first-year highschooler who finds himself embroiled in the world of Stand users as he befriends Josuke Higashikata. He eventually becomes a Stand user himself and wields the sound-manipulating Stand, Echoes, becoming more courageous in the process.",
  },
  {
    id: 3,
    title: "Okuyasu Nijimura",
    category: "ally",
    image: "/imgs/OraDora_NPC_4_Okuyasu_1.png",
    text: "Okuyasu Nijimura (虹村 億泰, Nijimura Okuyasu) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. Introduced as a tertiary antagonist, Okuyasu quickly allies himself with Josuke Higashikata, becoming one of his closest friends. He is Keicho Nijimura's younger brother, and a Stand user wielding the space-erasing The Hand.",
  },
  {
    id: 4,
    title: "Jotaro Kujo",
    category: "jojo",
    image: "/imgs/OraDora_NPC_4_Jotaro_1.png",
    text: "Jotaro Kujo (空条 承太郎, Kūjō Jōtarō) is the protagonist of the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders, and the third JoJo of the series. He also appears as a primary ally in Diamond is Unbreakable and Stone Ocean, and makes a brief appearance as a tertiary character in Vento Aureo. As a result of all his appearances, Jotaro is the most recurring protagonist in the series. Jotaro is a Japanese delinquent with Japanese roots from his father's side, and half-British half-Italian roots from his mother Holy's side. Jotaro lives an ordinary life until the Joestar Family's old nemesis, DIO, returns. After seeing Holy fall ill due to DIO's reawakening, Jotaro embarks on a journey across the world alongside his grandfather, Joseph Joestar, and a group of friends in order to save his mother and defeat the vampire once and for all. Wielding the all-powerful Star Platinum, Jotaro is the first JoJo introduced with a Stand, and is among the most well-known characters of the series. He is the ex-husband of an American woman and father of Jolyne Cujoh, the protagonist of Stone Ocean.",
  },
  {
    id: 5,
    title: "Rohan Kishibe",
    category: "ally",
    image: "/imgs/OraDora_Rohan_Unit_1.png",
    text: "Rohan Kishibe (岸辺 露伴, Kishibe Rohan) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. He is introduced as an antagonist in the 'Let's Go to the Manga Artist's House' story arc, but later becomes an ally and cooperates in the search for Yoshikage Kira. Rohan is also the protagonist of his own spin-off series, Thus Spoke Kishibe Rohan. Rohan is a successful professional manga artist, having created the series Pink Dark Boy in Weekly Shonen Jump. He is often roped into paranormal events while conducting research for his latest manga. He is the Stand user of Heaven's Door, which he uses to transform others into books and read them for inspiration.",
  },
];

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />

        <Carousel wrapClass="posters" trackClass="carousel" interval={3000}>
          {posters.map((p) => (
            <img key={p.id} className="slide" src={p.src} alt={p.alt} />
          ))}
        </Carousel>

        <div className="header2">
          <h2>JoJo's Bizarre Adventure: Diamond is Unbreakable</h2>
        </div>
        <div className="content">
          <h4>My favorite anime is "JoJo's Bizarre Adventure: Diamond is Unbreakable." It is the fourth part of the JoJo's Bizarre Adventure series, created by Hirohiko Araki. The story follows Josuke Higashikata and his friends as they uncover the mysteries of their town, Morioh, and battle against Stand users with unique abilities. The anime is known for its unique art style, creative Stand abilities, and memorable characters. It has a mix of action, comedy, and supernatural elements that make it an engaging watch. The story explores themes of friendship, family, and the consequences of one's actions. Overall, "JoJo's Bizarre Adventure: Diamond is Unbreakable" is a captivating anime that has left a lasting impression on me. I highly recommend it to anyone who enjoys action-packed stories with intriguing characters and imaginative powers.</h4>
        </div>

        <div className="header3">
          <h3>Main characters</h3>
        </div>

        <Carousel wrapClass="poster2" wrapId="grad" trackClass="carousel2" trackId="box" interval={8000}>
          {characters.map((c) => (
            <Card key={c.id} {...c} />
          ))}
        </Carousel>

        <div className="trailer">
          <h1>Trailer</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t8WxJVBhiTY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3>Information</h3>
          <p>Japanese: ジョジョの奇妙な冒険 ダイヤモンドは砕けない</p>
          <p>Romaji: JoJo no Kimyō na Bōken Daiyamondo wa Kudakenai</p>
          <p>English: JoJo's Bizarre Adventure: Diamond is Unbreakable</p>
          <p>Episodes: 39</p>
          <p>Aired: Apr 2, 2016 to Dec 24, 2016</p>
          <p>Producers: Warner Bros. Japan, Shueisha, Dentsu, Fuji TV, VAP</p>
          <p>Licensors: Viz Media, Crunchyroll, Netflix</p>
          <p>Studios: David Production</p>
        </div>

        <div className="header4">
          <h3>Reasons why I like this anime</h3>
        </div>
        <div className="reasons">
          <p>The anime features a distinctive art style that sets it apart from other series, with bold character designs and vibrant colors. 
          The series is known for its intricate plotlines and unexpected twists that keep viewers engaged. 
          The animation quality is exceptional, with detailed backgrounds and smooth character movements. 
          The characters are well-developed and have unique personalities, making them relatable and memorable. 
          The concept of Stands, supernatural manifestations of a character's fighting spirit, adds an exciting and imaginative element to the battles. 
          The series explores themes of friendship, family, and personal growth, providing emotional depth that resonates with viewers. 
          JoJo's Bizarre Adventure has had a significant influence on pop culture, inspiring memes, fashion, and other media. 
          The series has been running for decades, with multiple parts and adaptations, showcasing its enduring popularity. 
          The music in the anime complements the action and emotional moments, enhancing the overall viewing experience. 
          The JoJo fan community is passionate and welcoming, providing a space for fans to discuss and share their love for the series.</p>
        </div>

        <Footer />
      </div>
    </>
  );
}
