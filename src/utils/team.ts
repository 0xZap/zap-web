declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

// Import all the photos from 'src/assets/team' folder
type WebpackRequireContext = {
  keys(): string[];
  (id: string): string;
  <T>(id: string): T;
};

declare function require(id: string): any;
declare namespace require {
  function context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): WebpackRequireContext;
}

const importAll = (r: WebpackRequireContext) => {
  const images: { [key: string]: string } = {};
  r.keys().forEach((item: string) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('../assets/team', false, /\.(png|jpe?g|svg)$/));

// Strucutre each team's persona
interface SocialLinks {
  linkedin: string;
  x: string;
  telegram: string;
}

class TeamMember {
  name: string;
  title: string;
  image: string;
  socialLinks: SocialLinks;

  constructor(
    name: string,
    title: string,
    image: string,
    socialLinks: SocialLinks
  ) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.socialLinks = socialLinks;
  }
}

const teamMembers: TeamMember[] = [
  new TeamMember(
    "Danilo Kim",
    "Co-Founder & CEO",
    images['danilo.png'],
    {
      x: "https://x.com/danilowhk2",
      telegram: "https://t.me/danilo1080",
      linkedin: "https://www.linkedin.com/in/danilo-kim-59706540/",
    }
  ),
  new TeamMember(
    "Bryan Borck",
    "Co-Founder & CTO",
    images['bryan.png'],
    {
      x: "https://x.com/BorckBryan",
      telegram: "https://t.me/bryanborck",
      linkedin: "https://www.linkedin.com/in/bryan-borck/",
    }
  ),
  new TeamMember(
    "Daniel Yuki",
    "Developer",
    images['daniel.jpg'],
    {
      x: "https://x.com/danielyukihiga",
      telegram: "https://t.me/DanielYukiHiga",
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
    }
  ),
  new TeamMember(
    "Artur Jacobina",
    "Developer",
    images['arthur.jpeg'],
    {
      x: "https://x.com/Arthur1Jacobina",
      telegram: "https://t.me/arthurjacobina",
      linkedin: "https://www.linkedin.com/in/arthur-jacobina",
    }
  ),
];

export default teamMembers;
