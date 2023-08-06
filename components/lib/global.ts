type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "#home",
          leavesWebsite: false,
        },
        {
          name: "About",
          link: "#about",
          leavesWebsite: false,
        },
        {
          name: "Skills",
          link: "#skills",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "#projects",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "#contact",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Email",
          link: "mailto:RanaReebaal@gmail.com",
          icon: "/icons/mail-f.svg",
          leavesWebsite: true,
        },
        {
          name: "GitHub",
          link: "https://github.com/RanaReebaal",
          icon: "/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/RanaReebaal",
          icon: "/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/RanaReebaal",
          icon: "/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/RanaReebaal",
          icon: "/icons/twitter-f.svg",
          leavesWebsite: true,
        }
      ],
    },
  ],
  support: {
    buymeacoffee: "RanaReebaal",
    message: "I appreciate your support very much! 💙",
  },
};
