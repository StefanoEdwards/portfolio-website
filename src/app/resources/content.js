import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Stefano",
  lastName: "Edwards",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tinkerer & Builder",
  avatar: "/myfile/profilepic.jpg",
  location: "Canada/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/StefanoEdwards",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/stefano-edwards",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "stefanoedwards@icloud.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing some project's I've built as a ${person.role}`,
  headline: <>Tinkerer & Builder</>,
  subline: (
    <>
      I'm Stefano, a student passionate about <InlineCode>robotics</InlineCode>, and <InlineCode>computer vision</InlineCode>.
      <br /> In my spare time, I build cool projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/stefanoedwards/one-on-one-meeting",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Stefano is a Toronto-based student with a passion for computer vision, CAD
        and robotics. He is proficient in many programming lanuages as well as
        design and maufacturing software.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "FIRST Robotics",
        timeframe: "2019 - Present",
        role: "Mechanical Design",
        achievements: [
          <>
            Started in 5th grade building lego robots, now designing in Fusion 360 for a 
            world class FRC team.
          </>,
          <>
            Designed mechanisms from the ground up and managed in-house fabrication on our 
            CNC router and fleet of 3D printers.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/myfile/2024bot.jpeg",
            alt: "My team's 2024 FRC robot",
            width: 16,
            height: 9,
          },
          {
            src: "/myfile/2025bot.jpeg",
            alt: "My team's 2024FRC robot",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Community Mentor",
        timeframe: "2021 - Present",
        role: "Teaching STEM",
        achievements: [
          <>
            Spent 160+ hours mentoring FLL students from grades 5-8, teaching them programming, 
            CAD, and presentation skills.
          </>,
          <>
            Taught programming sessions at the last three Ontario FLL Provincial Kickoffs and
            lead robotics workshops empowering underserved youth in the Jane and Finch area of Toronto. 
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/myfile/usingdrill.png",
            alt: "My team's 2024FRC robot",
            width: 16,
            height: 9,
          },
          {
            src: "/myfile/ctrlz1.jpg",
            alt: "My team's 2024FRC robot",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bayview Glen Independent School",
        description: <>Focused on an advanced curriculum in science, computer science, and mathematics, fostering analytical thinking and problem-solving skills.</>,
      },
      {
        name: "The Knowledge Society",
        description: <>Selected for a global innovation program where I explore frontier technologies like AI, nanotech, and synthetic biology, while developing real-world problem-solving and entrepreneurial skills.</>,
      },
      {
        name: "SHAD Canada",
        description: <>Attending a nationally recognized summer engineering and entrepreneurship program, collaborating with top students across the country to tackle real-world design challenges.</>,
      },    
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Fusion 360",
        description: <>Able to prototype in Fusion 360 with speed and efficiency.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/myfile/LS4bar.png",
            alt: "Project image",
            width: 16,
            height: 13,
          },
          {
            src: "/myfile/gearboxside.png",
            alt: "Project image",
            width: 16,
            height: 13,
          },
        ],
      },
      {
        title: "Computer Vision Frameworks",
        description: <>Building awesome proects with Tensorflow, Open CV and YOLO.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/myfile/cvgif.gif",
            alt: "My team's 2024 FRC robot",
            width: 32,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "A gallery",
  description: `A photo collection of my projects`,
  // My images
  images: [
    {
      src: "/images/gallery/g1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g7.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g8.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g9.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g10.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g11.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g12.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g13.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g14.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g15.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/g16.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g17.mp4",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
