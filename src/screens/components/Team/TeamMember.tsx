declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

// Import all photos in the '/assets/Team' folder so that it can work dynamically
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

const images = importAll(require.context('../../../assets/team', false, /\.(png|jpe?g|svg)$/));

// Create an array with all the team workers
interface SocialLinks{
  linkedin: string;
  x: string;
  facebook: string;
}

class TeamMember {
  name: string;
  title: string;
  image: string;
  socialLinks: SocialLinks;

  constructor(name: string, title: string, image: string, socialLinks: SocialLinks) {
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
      linkedin: "https://www.linkedin.com/in/danilo-kim-59706540/",
      x: "https://x.com/danilowhk2",
      facebook: "https://facebook.com"
    }
  ),
  new TeamMember(
    "Bryan Borck",
    "Co-Founder & CTO",
    images['bryan.png'],
    {
      linkedin: "https://www.linkedin.com/in/bryan-borck/",
      x: "https://x.com/BorckBryan",
      facebook: "https://facebook.com/example" 
    }
  ),
  new TeamMember(
    "Lovish",
    "Front-end Engineer",
    images['lovish.png'],
  {
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    facebook: "https://facebook.com"
  }
  ),
  new TeamMember(
    "Daniel Yuki",
    "Full Stack Intern",
    images['daniel.jpg'],
    {
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
      x: "https://x.com",
      facebook: "https://facebook.com"
    }
  ),
  new TeamMember(
    "Felipe Ribeiro",
    "Full Stack Intern",
    images['felipe.jpeg'],
    {
      linkedin: "https://www.linkedin.com/in/felipe-farias-ribeiro/",
      x: "https://x.com",
      facebook: "https://facebook.com"
    }
  )
]

export default teamMembers;