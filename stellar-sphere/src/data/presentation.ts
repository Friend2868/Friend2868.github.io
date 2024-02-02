type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "manuel.strubegger@gmail.com",
  title: "Hi, I’m Manuel 👋",
  // profile: "/profile.webp",
  description:
    "Hello, i'm an austrian *software developer (soon)*.. I am currently working with *C#*. Outside of school I like learning different coding languages.",
  socials: [
    {
      label: "Discord",
      link: "https://discord.com/channels/@me",
    },
    {
      label: "Github",
      link: "https://github.com/Friend2868",
    },
  ],
};

export default presentation;
