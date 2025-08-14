import { BiLogoPostgresql } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiKeras,
  SiTensorflow,
  SiCplusplus,
  SiBun,
  SiC,
  SiPython,
  SiHtml5,
  SiFlask,
  SiLangchain,
  SiFastapi,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiCloudflare,
  SiPnpm,
  SiPytorch,
  SiFigma,
  SiAmazonwebservices,
  SiGithub
} from "react-icons/si";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  TypeScript: { Icon: SiTypescript, className: "text-blue-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-sky-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
  "C++": { Icon: SiCplusplus, className: "text-blue-500" },
  CSS: { Icon: SiCss3, className: "text-blue-500" },
  C: { Icon: SiC, className: "text-sky-400" },
  Python: { Icon: SiPython, className: "text-yellow-300" },
  HTML: { Icon: SiHtml5, className: "text-orange-600" },
  Vercel: { Icon: SiVercel, className: "text-black" },
  Cloudflare: { Icon: SiCloudflare, className: "text-blue-400" },
  Figma: { Icon: SiFigma, className: "text-pink-500" },
  AWS: { Icon: SiAmazonwebservices, className: "text-orange-500" },
  Github: { Icon: SiGithub, className: "text-gray-500" },
};

export const BACKEND_STACKS = {
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Firebase: { Icon: SiFirebase, className: "text-yellow-500" },
  "Generative AI": { Icon: BsRobot, className: "text-rose-500" },
  Nginx: { Icon: SiNginx, className: "text-green-500" },
  Express: { Icon: SiExpress, className: "" },
  TensorFlow: { Icon: SiTensorflow, className: "text-orange-600" },
  Keras: { Icon: SiKeras, className: "text-red-600" },
  Bun: { Icon: SiBun, className: "text-yellow-50" },
  Flask: { Icon: SiFlask, className: "text-neutral-200" },
  MongoDB: { Icon: SiMongodb, className: "text-green-400" },
  FastAPI: { Icon: SiFastapi, className: "text-blue-400" },
  Langchain: { Icon: SiLangchain, className: "text-blue-400" },
  Supabase: { Icon: SiSupabase, className: "text-blue-400" },
  Pnpm: { Icon: SiPnpm, className: "text-blue-400" },
  Pytorch: { Icon: SiPytorch, className: "text-red-500" },
};