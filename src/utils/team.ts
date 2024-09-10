interface SocialLinks {
  linkedin: string;
  x: string;
  facebook: string;
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
    "../../assets/team/danilo.png",
    {
      linkedin: "https://www.linkedin.com/in/danilo-kim-59706540/",
      x: "https://x.com/danilowhk2",
      facebook: "https://facebook.com",
    }
  ),
  new TeamMember(
    "Bryan Borck",
    "Co-Founder & CTO",
    "../../assets/team/bryan.png",
    {
      linkedin: "https://www.linkedin.com/in/bryan-borck/",
      x: "https://x.com/BorckBryan",
      facebook: "https://facebook.com/example",
    }
  ),
  new TeamMember(
    "Lovish",
    "Front-end Engineer",
    "../../assets/team/lovish.png",
    {
      linkedin: "https://www.linkedin.com",
      x: "https://x.com",
      facebook: "https://facebook.com",
    }
  ),
  new TeamMember(
    "Daniel Yuki",
    "Full Stack Intern",
    "../../assets/team/daniel.jpg",
    {
      linkedin: "https://www.linkedin.com/in/danielyukihiga/",
      x: "https://x.com",
      facebook: "https://facebook.com",
    }
  ),
  new TeamMember(
    "Felipe Ribeiro",
    "Full Stack Intern",
    "../../assets/team/felipe.jpeg",
    {
      linkedin: "https://www.linkedin.com/in/felipe-farias-ribeiro/",
      x: "https://x.com",
      facebook: "https://facebook.com",
    }
  ),
];

export default teamMembers;
