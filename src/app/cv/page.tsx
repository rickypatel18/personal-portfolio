"use client";

import Link from "next/link";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  Link as PdfLink,
} from "@react-pdf/renderer";

const name = "Ricky_Resume";

const Invoice = () => {
  const InvoicePdf = () => (
    <Document title={name}>
      <Page
        size="A4"
        style={{
          backgroundColor: "#fff",
          color: "#262626",
          fontSize: "10px",
          padding: "20px 35px",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              RICKY PATEL
            </Text>
            <Text>Undach, Bilimora</Text>
            <Text>
              <PdfLink
                src="tel:+918866467330"
                style={{
                  color: "#262626",
                  textDecoration: "none",
                }}
              >
                (+91) 8866467330
              </PdfLink>{" "}
              -{" "}
              <PdfLink
                src="mailto:patelricky184@gmail.com"
                style={{
                  color: "#262626",
                  textDecoration: "none",
                }}
              >
                patelricky184@gmail.com
              </PdfLink>{" "}
              -{" "}
              <PdfLink
                src="https://www.linkedin.com/in/ricky-patel-b91727278?utm_source=share&utm_campaign=share_via&utm_content=profilr&utm_medium=android_app"
                style={{
                  color: "#262626",
                  textDecoration: "none",
                }}
              >
                {" "}
                LinkedIn
              </PdfLink>{" "}
              -{" "}
              <PdfLink
                src="https://personal-portfolio-gamma-woad.vercel.app/"
                style={{
                  color: "#262626",
                  textDecoration: "none",
                }}
              >
                {" "}
                Portfolio
              </PdfLink>
            </Text>
          </View>
        </View>

        {/* EDUCATION Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderBottomStyle: "solid",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            EDUCATION
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
              paddingLeft: "10px",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Government Engineering College, Dahod
            </Text>
            <Text>2020 - 2024</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <Text style={{ paddingLeft: "10px" }}>
              B.E in Computer Engineering
            </Text>
            <Text>CGPA: 8.1</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
              marginTop: "5px",
              paddingLeft: "10px",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>AB School Chikhli </Text>
            <Text>2020</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <Text style={{ paddingLeft: "10px" }}>Science</Text>
            <Text>Percentage: 64.1</Text>
          </View>
        </View>

        {/* PROJECTS Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginTop: "25px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderBottomStyle: "solid",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            PROJECTS
          </Text>
          <View
            style={{ display: "flex", flexDirection: "column", gap: "6px" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "10px",
                fontSize: "11px",
              }}
            >
              TrailerVerse (React)
            </Text>
            <Text style={{ paddingLeft: "20px", textAlign: "justify" }}>
              Trailerverse is a React-based, fully responsive application
              designed to bring the latest and most popular movies and TV shows
              to your fingertips. Built using React.js, Tailwind CSS, and Redux,
              it offers a seamless and visually appealing experience across all
              devices. Powered by the TMDB (The Movie Database) API, the app
              provides access to trailers, detailed insights about directors,
              cast, genres, release dates, runtime, and more. Whether
              you&apos;re a movie buff or a casual viewer, this is your ultimate
              platform for exploring and enjoying entertainment.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginTop: "10px",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "10px",
                fontSize: "11px",
              }}
            >
              Admin Dashboard (Next)
            </Text>
            <Text style={{ paddingLeft: "20px", textAlign: "justify" }}>
              This Admin Dashboard developed using Next.js, TypeScript, Tailwind
              CSS, Shadcn/ui, and Recharts, offers a streamlined solution for
              managing application data and visualizing key performance
              indicators. The platform combines the server-side rendering
              capabilities of Next.js with TypeScript&apos;s strong typing for a
              robust and efficient backend interaction. Its responsive and
              aesthetically pleasing user interface is achieved through Tailwind
              CSS and the versatile components from Shadcn/ui. Insightful
              analytics are presented via interactive Recharts, allowing
              administrators to effectively monitor and act upon crucial data
              points.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginTop: "10px",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "10px",
                fontSize: "11px",
              }}
            >
              Blog Posting Website (Next)
            </Text>
            <Text style={{ paddingLeft: "20px", textAlign: "justify" }}>
              This dynamic Blog Platform, built with Next.js, TypeScript,
              Tailwind CSS, and powered by Sanity Studio for content management,
              provides a seamless and engaging experience for both writers and
              readers. Users can securely authenticate to create personalized
              profiles and contribute their thoughts through an intuitive
              posting section. Published articles are elegantly displayed for
              easy discovery, leading to detailed post pages where readers can
              immerse themselves in the content and see its popularity via a
              live views counter. Leveraging Next.js for optimal performance,
              TypeScript for robust development, Tailwind CSS for a responsive
              and modern aesthetic, and Sanity Studio for flexible, headless
              content authoring.
            </Text>
          </View>
        </View>

        {/* INTERNSHIP Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginTop: "25px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderBottomStyle: "solid",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            INTERNSHIP
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "3px",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: "10px",
                fontSize: "11px",
              }}
            >
              Frontend Internship
            </Text>
            <Text style={{ paddingLeft: "20px", textAlign: "justify" }}>
              During my 4 months of frontend internship at Techreale, I successfully completed various tasks
              that allowed me to further develop my expertise in HTML, CSS, JS, TS
              and REACT, NEXT and more. During this I created CareDac project with a team, Not
              only did I gain valuable knowledge in these areas, but I also had
              the opportunity to enhance my skills.
            </Text>
            {/* <Text style={{ paddingLeft: "20px", textAlign: 'justify', paddingTop: "5px" }}>During my previous traning at Elaunch solution,I have finally observed and learned how they code for production-ready applications. I have gained insights into project structure, various designs and animations. Additionally, I have learned Next.js, Framer Motion, and TypeScript at this company. I also had the opportunity to write code for a live project, although it was limited to a few sections and issues. Now, I am nearly fully adhering to the company&apos;s project structure.</Text> */}
          </View>
        </View>

        {/* TECHNICAL SKILL Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginTop: "25px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderBottomStyle: "solid",
              fontSize: "13px",
              marginBottom: "3px",
            }}
          >
            TECHNICAL SKILL
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "3px",
              paddingLeft: "20px",
            }}
          >
            <Text>Java, Python</Text>
            <Text>Html, CSS</Text>
            <Text>JavaScript, TypeScript</Text>
            <Text>Bootstrap, Tailwind CSS</Text>
            <Text>React js, Next js</Text>
            <Text>Material UI, Shadcn, Heroui</Text>
            <Text>Git, GitHub</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="max-w-4xl mx-auto pt-10">
      <header className="text-center">
        <h1 className="text-page-heading font-bold font-[montserrat] text-gray-900 dark:text-white">
          My Curriculum Vitae
        </h1>

        <p className="mt-2 text-sm lg:text-[16px] font-[delius] font-bold text-gray-600 dark:text-gray-400">
          A summary of my professional journey, skills and achievements.
        </p>
      </header>

      <div className="my-10 flex justify-center items-center">
        <PDFDownloadLink document={<InvoicePdf />} fileName="Ricky_Resume.pdf">
          <button className="text-sm md:text-[16px] xl:text-lg w-fit text-white md:w-auto md:px-6 md:py-2 relative overflow-hidden h-10 lg:h-11 px-6 py-1 lg:px-8 lg:py-4 flex justify-center items-center rounded-full bg-primary/90 hover:bg-primary  shadow-2xl hover:shadow-primary/30 transition-all">
            Download
          </button>
        </PDFDownloadLink>
      </div>

      <div className="w-full h-[65vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[95vh] 2xl:h-[100vh] flex justify-center items-center rounded-lg shadow-lg overflow-hidden">
        <PDFViewer width="90%" height="100%" showToolbar={false}>
          <InvoicePdf />
        </PDFViewer>
      </div>

      <footer className="text-center flex flex-col gap-5 mt-5 mb-10">
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
    </div>
  );
};

export default Invoice;
