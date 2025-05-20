import { Metadata } from "next";
import Link from "next/link";
// npm install file-loader

export const metadata: Metadata = {
  title: "CV | Ricky Patel - Frontend Developer",
  description:
    "View or download the Curriculum Vitae of Ricky Patel, detailing skills, experience, and professional background.",
};

const CV_PUBLIC_PATH = "/dummy.pdf";

export default function CVPage() {
  return (
    <div className="flex flex-col gap-10 mx-auto px-4 py-10 md:py-16 min-h-screen items-center bg-white dark:bg-black">
      <header className="text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My Curriculum Vitae
        </h1>

        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          A summary of my professional journey, skills and achievements.
        </p>
      </header>

      <Link
        href={CV_PUBLIC_PATH}
        download="Ricky_Patel_CV"
        className="text-md lg:text-lg w-fit text-white md:w-auto md:px-6 md:py-2 relative overflow-hidden h-10 lg:h-11 px-6 py-1 lg:px-8 lg:py-4 flex justify-center items-center rounded-full bg-primary/90 hover:bg-primary  shadow-2xl hover:shadow-primary/30 transition-all"
      >
        Download CV
      </Link>

      <div className="w-full max-w-4xl max-h-[100vh] h-[100vh] bg-transparent rounded-lg overflow-hidden">
        <iframe
          src={`${CV_PUBLIC_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=fitH`} 
          title="Ricky Patel - Frontend Developer CV"
          className="w-full h-full"
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
                download the PDF
              </a>
              to view it.
            </p>
          </div>
        </iframe>
      </div>

      <footer className=" text-center">
        <p className="text-md text-gray-600 dark:text-gray-400 lg:text-md">
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
    </div>
  );
}
