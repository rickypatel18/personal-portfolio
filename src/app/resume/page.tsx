import { Metadata } from "next";
import Link from "next/link";
// npm install file-loader

export const metadata: Metadata = {
  title: "CV | Ricky Patel - Frontend Developer",
  description:
    "View or download the Curriculum Vitae of Ricky Patel, detailing skills, experience, and professional background.",
};

const CV_PUBLIC_PATH = "/RickyDoc.pdf";

export default function CVPage() {
  return (
    <div className="flex flex-col gap-10 mx-auto px-4 py-10 md:py-16 min-h-screen  items-center bg-white dark:bg-black">
      <header className="text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My Curriculum Vitae
        </h1>

        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          A summary of my professional journey, skills, and achievements.
        </p>
      </header>

      <Link
        href={CV_PUBLIC_PATH}
        download="Ricky_Patel_CV"
        className="text-md lg:text-lg w-fit text-white bg-primary hover:bg-red-500 md:w-auto  px-5 py-1 md:px-6 md:py-2 lg:px-7 lg:py-3 rounded-lg"
      >
        Download CV
      </Link>

      <div className="w-full max-w-4xl h-[62vh] sm:h-[87vh] md:h-[116vh] lg:h-[118vh] bg-white dark:bg-black rounded-lg overflow-hidden ">
        <iframe
          src={CV_PUBLIC_PATH}
          title="Ricky Patel - CV"
          className="w-full h-full border-0"
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
