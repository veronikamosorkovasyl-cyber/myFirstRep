import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());          // крок 6
app.use(express.json());  // крок 5

const projects = [
  {
    id: 1,
    title: "Josuke Higashikata",
    image: "/imgs/OraDora_NPC_4_Josuke_1.png",
    text: "Josuke Higashikata (東方 仗助, Higashikata Jōsuke) is the protagonist of the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable, and the fourth JoJo of the series. He is the illegitimate son of Joseph Joestar and Tomoko Higashikata. He also appears as one of the protagonists in the spin-off manga Crazy Diamond's Demonic Heartbreak and the light novel Crazy Heartbreakers. Josuke is a Japanese first-year high school student residing in the town of Morioh. In the year 1999, he meets Jotaro Kujo, who informs him that he is Joseph's illegitimate son, making him a descendant of the Joestar Family. After his grandfather dies, Josuke takes it upon himself to protect his beloved town from malevolent Stand users. Josuke is a Stand user that wields Crazy Diamond, a Stand with the power to repair.",
  },
  {
    id: 2,
    title: "Koichi Hirose",
    image: "/imgs/OraDora_NPC_4_Koichi_1.png",
    text: "Koichi Hirose (広瀬 康一, Hirose Kōichi) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. He appears briefly as a tertiary ally in the fifth part, Vento Aureo, assisting Giorno Giovanna in the fight against Polpo's Stand, Black Sabbath. Koichi is also the protagonist of the light novel The Book ~jojo's bizarre adventure 4th another day~ and the one-shot Echoes ACT50. Koichi is a meek first-year highschooler who finds himself embroiled in the world of Stand users as he befriends Josuke Higashikata. He eventually becomes a Stand user himself and wields the sound-manipulating Stand, Echoes, becoming more courageous in the process.",
  },
  {
    id: 3,
    title: "Okuyasu Nijimura",
    image: "/imgs/OraDora_NPC_4_Okuyasu_1.png",
    text: "Okuyasu Nijimura (虹村 億泰, Nijimura Okuyasu) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. Introduced as a tertiary antagonist, Okuyasu quickly allies himself with Josuke Higashikata, becoming one of his closest friends. He is Keicho Nijimura's younger brother, and a Stand user wielding the space-erasing The Hand.",
  },
  {
    id: 4,
    title: "Jotaro Kujo",
    image: "/imgs/OraDora_NPC_4_Jotaro_1.png",
    text: "Jotaro Kujo (空条 承太郎, Kūjō Jōtarō) is the protagonist of the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders, and the third JoJo of the series. He also appears as a primary ally in Diamond is Unbreakable and Stone Ocean, and makes a brief appearance as a tertiary character in Vento Aureo. As a result of all his appearances, Jotaro is the most recurring protagonist in the series. Jotaro is a Japanese delinquent with Japanese roots from his father's side, and half-British half-Italian roots from his mother Holy's side. Jotaro lives an ordinary life until the Joestar Family's old nemesis, DIO, returns. After seeing Holy fall ill due to DIO's reawakening, Jotaro embarks on a journey across the world alongside his grandfather, Joseph Joestar, and a group of friends in order to save his mother and defeat the vampire once and for all. Wielding the all-powerful Star Platinum, Jotaro is the first JoJo introduced with a Stand, and is among the most well-known characters of the series. He is the ex-husband of an American woman and father of Jolyne Cujoh, the protagonist of Stone Ocean.",
  },
  {
    id: 5,
    title: "Rohan Kishibe",
    image: "/imgs/OraDora_Rohan_Unit_1.png",
    text: "Rohan Kishibe (岸辺 露伴, Kishibe Rohan) is a primary ally featured in the fourth part of the JoJo's Bizarre Adventure series, Diamond is Unbreakable. He is introduced as an antagonist in the 'Let's Go to the Manga Artist's House' story arc, but later becomes an ally and cooperates in the search for Yoshikage Kira. Rohan is also the protagonist of his own spin-off series, Thus Spoke Kishibe Rohan. Rohan is a successful professional manga artist, having created the series Pink Dark Boy in Weekly Shonen Jump. He is often roped into paranormal events while conducting research for his latest manga. He is the Stand user of Heaven's Door, which he uses to transform others into books and read them for inspiration.",
  },
];

// крок 3
app.get("/api/projects", (req, res) => res.json(projects));

// додаткове завдання
app.get("/api/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === Number(req.params.id));
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(project);
});

// крок 5
app.post("/api/contact", (req, res) => {
  console.log("Нове повідомлення:", req.body);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
