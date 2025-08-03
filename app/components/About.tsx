import { CometCard } from "./ui/comet-card";
import Image from "next/image";


export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-2 mt-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Main Content - 50/50 Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hi, I'm <span className="text-blue-400">Lakshya Paliwal</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a love for creating innovative
                digital experiences. With expertise in modern web technologies, I bring
                ideas to life through clean code and thoughtful design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in software development began several years ago, and since then
                I've been dedicated to crafting solutions that make a difference. I enjoy
                working with cutting-edge technologies and constantly learning new skills
                to stay ahead in this ever-evolving field.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community. I believe in the power of collaboration and
                continuous growth.
              </p>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <CometCard>
                <button
                  type="button"
                  className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 p-2 md:my-20 md:p-4 shadow-lg shadow-blue-500/20"
                  aria-label="View invite F7RA"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full">
                      <Image
                        loading="lazy"
                        className="absolute inset-0 h-full w-full rounded-[16px] object-cover brightness-90 contrast-110"
                        alt="Invite background"
                        src="/laksh.jpg"
                        width={250}
                        height={250}
                        style={{
                          boxShadow: "rgba(59, 130, 246, 0.4) 0px 8px 25px 0px",
                          opacity: 1,
                        }}
                      />
                      <div className="absolute inset-0 bg-blue-500/10 rounded-[16px] mix-blend-overlay"></div>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs text-blue-100">Lakshya Paliwal</div>
                    <div className="text-xs text-blue-300/70">21/09/05</div>
                  </div>
                </button>
              </CometCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}