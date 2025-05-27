import ClientAnimationWrapper from "@/components/ClientAnimationWrapper";
import Link from "next/link";
import { Metadata } from "next";
// npm install file-loader

export const metadata: Metadata = {
  title: "CV | Ricky Patel - Frontend Developer",
  description:
    "View or download the Curriculum Vitae of Ricky Patel, detailing skills, experience, and professional background.",
};

const CV_PUBLIC_PATH = "/Ricky_Resume.pdf";

export default function CVPage() {
  return (
    <section className="cv-wrapper flex flex-col gap-10 px-4 pt-10 md:py-16 min-h-screen items-center bg-white dark:bg-black container max-w-7xl mx-auto">
      <header className="text-center">
        <h1 className="text-page-heading font-bold font-[montserrat] text-gray-900 dark:text-white">
          My Curriculum Vitae
        </h1>

        <p className="mt-2 text-sm lg:text-[16px] font-[delius] font-bold text-gray-600 dark:text-gray-400">
          A summary of my professional journey, skills and achievements.
        </p>
      </header>

      <Link
        href={CV_PUBLIC_PATH}
        download="Ricky_Patel_CV"
        className="text-sm md:text-[16px] xl:text-lg w-fit text-white md:w-auto md:px-6 md:py-2 relative overflow-hidden h-10 lg:h-11 px-6 py-1 lg:px-8 lg:py-4 flex justify-center items-center rounded-full bg-primary/90 hover:bg-primary  shadow-2xl hover:shadow-primary/30 transition-all"
      >
        <ClientAnimationWrapper>Download CV</ClientAnimationWrapper>
      </Link>

      <main className="w-full max-w-4xl bg-transparent overflow-hidden">
        <iframe
          src={`${CV_PUBLIC_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=fitH`}
          title="Ricky Patel - Frontend Developer CV"
          className="w-full h-[40vh] sm:h-[80vh] md:h-[100vh] "
          loading="eager"
          aria-label="PDF document viewer"
        >
          <div className="p-8 text-center text-gray-700 dark:text-gray-300 flex flex-col items-center justify-center h-full">
            <p className="mb-4 text-lg">
              It seems your browser doesn&apos;t support embedding PDFs
              directly.
            </p>
            <p>
              No worries! You can{" "}
              <a
                href={CV_PUBLIC_PATH}
                download="Ricky_Patel_CV"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                download the PDF or go to &quot;/resume&quot; route
              </a>
              to view it.
            </p>
          </div>
        </iframe>
      </main>

      <footer className="text-center flex flex-col gap-5">
        <p className="text-sm lg:text-[16px] text-gray-600 dark:text-gray-400 lg:text-md font-[delius] font-bold">
          I&apos;ve just updated my resume! It now includes my skills,
          education, project experience, details about my previous employers,
          and some personal information. I&apos;m currently open to new job
          opportunities or have recently joined Company X. Feel free to reach
          out for more details!🙂
        </p>
        <p className="text-sm lg:text-md text-gray-600 dark:text-gray-400 lg:text-md font-[delius] font-bold">
          Open to new opportunities or collaborations? Feel free to{" "}
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            get in touch
          </Link>
          .
        </p>
      </footer>
    </section>
  );
}
