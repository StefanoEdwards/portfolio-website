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
        description: <>Studying science, com sci and math.</>,
      },
      {
        name: "The Knowledge Society",
        description: <>Learning about cutting edge tech and AI.</>,
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
            src: "/myfile/MShandoff.png",
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
            src: "/myfile/cvpic.png",
            alt: "Project image",
            width: 16,
            height: 12,
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
  title: "A photo gallery",
  description: `A photo collection from pexels.com`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
