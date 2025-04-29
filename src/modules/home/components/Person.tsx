import Image from 'next/image';

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({ github, linkedin }: { github: string; linkedin: string }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" />
    </a>
  </div>
);

export default function Person() {
  return <></>;
}
