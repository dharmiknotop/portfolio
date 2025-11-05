import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass, FaCss3Alt, FaReact, FaAws } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiGraphql,
  SiSvelte,
  SiTailwindcss,
  SiAwslambda,
  SiAmazonsqs,
  SiAmazonapigateway,
  SiNodedotjs,
  SiMongodb,
  SiVitest,
} from "react-icons/si";

import { GiDualityMask } from "react-icons/gi";

export const skills = [
  {
    link: "https://www.w3schools.com/js/",
    icon: <IoLogoJavascript />,
    name: "JavaScript",
  },
  {
    link: "https://legacy.reactjs.org/docs/getting-started.html",
    icon: <FaReact />,
    name: "React",
  },
  {
    link: "https://nextjs.org/",
    icon: <SiNextdotjs />,
    name: "NextJs",
  },
  {
    link: "https://svelte.dev/",
    icon: <SiSvelte />,
    name: "Svelte",
  },
  {
    link: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    link: "https://nodejs.org/en/docs",
    icon: <SiNodedotjs />,
    name: "NodeJs",
  },
  {
    link: "https://expressjs.com/",
    icon: <SiExpress />,
    name: "Express",
  },
  {
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    link: "https://git-scm.com/",
    icon: <AiFillGithub />,
    name: "Git",
  },
  {
    link: "https://graphql.org/",
    icon: <SiGraphql />,
    name: "GraphQl",
  },

  {
    link: "https://aws.amazon.com/lambda/",
    icon: <SiAwslambda />,
    name: "AWS Lambda",
  },
  {
    link: "https://aws.amazon.com/sqs/",
    icon: <SiAmazonsqs />,
    name: "AWS SQS",
  },
  {
    link: "https://aws.amazon.com/apigateway/",
    icon: <SiAmazonapigateway />,
    name: "AWS API Gateway",
  },
  {
    link: "https://aws.amazon.com/eventbridge/",
    icon: <FaAws />,
    name: "AWS EventBridge",
  },
  {
    link: "https://playwright.dev/",
    icon: <GiDualityMask />,
    name: "Playwright",
  },
  {
    link: "https://vitest.dev/",
    icon: <SiVitest />,
    name: "Vitest",
  },
];
