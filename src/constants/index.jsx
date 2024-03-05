import { 
  people01, 
  people02, 
  people03,   
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: <span className="text-black">Home</span>,
  },
  {
    id: "product",
    title: <span className="text-black">Product</span>,
  },
  {
    id: "features",
    title: <span className="text-black">Features</span>,
  },
  {
    id: "contact",
    title: <span className="text-black">Contact</span>,
  },
];


export const features = [
  {
    id: "feature-1",
    icon: star,
    // Apply inline style to set text color to black
    title: <h3 style={{ color: 'black' }}>Rewards</h3>,
    // Apply inline style to set text color to black
    content: (
      <p style={{ color: 'black' }}>
        The best credit cards offer some tantalizing combinations of promotions and prizes
      </p>
    ),
  },
  {
    id: "feature-2",
    icon: shield,
    // Apply inline style to set text color to black
    title: <h3 style={{ color: 'black' }}>100% Secured</h3>,
    // Apply inline style to set text color to black
    content: (
      <p style={{ color: 'black' }}>
        We take proactive steps make sure your information and transactions are secure.
      </p>
    ),
  },
  {
    id: "feature-3",
    icon: send,
    // Apply inline style to set text color to black
    title: <h3 style={{ color: 'black' }}>Balance Transfer</h3>,
    // Apply inline style to set text color to black
    content: (
      <p style={{ color: 'black' }}>
        A balance transfer credit card can save you a lot of money in interest charges.
      </p>
    ),
  },
];



export const feedback = [
  {
    id: "feedback-1",
    content:
      <p style={{ color: 'black' }}>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>,
    name: <span style={{ color: 'black' }}>Herman Jensen</span>,
    title: <span style={{ color: 'black' }}>Founder & Leader</span>,
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      <p style={{ color: 'black' }}>Money makes your life easier. If you're lucky to have it, you're lucky.</p>,
    name: <span style={{ color: 'black' }}>Steve Mark</span>,
    title: <span style={{ color: 'black' }}>Founder & Leader</span>,
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      <p style={{ color: 'black' }}>It is usually people in the money business, finance, and international trade that are really rich.</p>,
    name: <span style={{ color: 'black' }}>Kenn Gallagher</span>,
    title: <span style={{ color: 'black' }}>Founder & Leader</span>,
    img: people03,
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
