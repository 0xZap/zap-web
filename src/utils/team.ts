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
      telegram: "https://telegram.com",
      linkedin: "https://www.linkedin.com/in/danilo-kim-59706540/",
    }
  ),
  new TeamMember(
    "Bryan Borck",
    "Co-Founder & CTO",
    images['bryan.png'],
    {
      x: "https://x.com/BorckBryan",
      telegram: "https://telegram.com/example",
      linkedin: "https://www.linkedin.com/in/bryan-borck/",
    }
  ),
  new TeamMember(
    "Daniel Yuki",
    "Developer",
    images['daniel.jpg'],
    {
      x: "https://x.com",
      telegram: "https://telegram.com",
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
    }
  ),
  new TeamMember(
    "Artur Jacobina",
    "Developer",
    images['daniel.jpg'],
    {
      x: "https://x.com",
      telegram: "https://telegram.com",
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
    }
  ),
  new TeamMember(
    "Vinicios",
    "Developer",
    images['daniel.jpg'],
    {
      x: "https://x.com",
      telegram: "https://telegram.com",
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
    }
  ),
  new TeamMember(
    "Felipe Ribeiro",
    "Developer",
    images['felipe.jpeg'],
    {
      x: "https://x.com",
      telegram: "https://telegram.com",
      linkedin: "https://www.linkedin.com/in/felipe-farias-ribeiro/",
    }
  ),
];

export default teamMembers;
