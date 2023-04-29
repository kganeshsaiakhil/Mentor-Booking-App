import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/navbar";


export default function About() {
    return (
        <>

            {/* <Loading event="Loading..." /> */}
            <div className="container">
                <Head>
                    <title>Mentor Booking App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <main>
                    <h3 className="title">
                        About Us
                    </h3>

                    <div className="divContact">
                        <p>Welcome to My website! This is Mentor Booking Website, . This mentor booking website serves as a platform that connects mentors and mentees, provides tools for booking and scheduling mentoring sessions, facilitates communication and  ensures a secure and efficient experience for both mentors and mentees..</p>
                        <p> we are proud of our dedicated team of professionals who are passion. Our team members are committed to , such as delivering quality products/services, providing exceptional customer service, etc..</p>
                        <p>Our core values define who we are and guide our decisions and actions. We believe in organization's core values, such as integrity, innovation, teamwork, etc. in everything we do. These values shape our culture and are reflected in our interactions with our customers, partners, and the community.</p>
                        <p>.</p>
                    </div>
                </main>

                <style jsx>{`
          .container {
            min-height: 100vh;
            // padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }

          .title,
          .description {
            text-align: center;
          }
          .divContact{
            max-width:800px;
          }

          .subtitle {
            font-size: 2rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 394px) {
            .title {
              font-size: 2.5rem;
            }
            .subtitle {
              font-size: 1rem;
            }
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

                <style jsx global>{`
          html,
          body {
            height: 100vh;
            background: linear-gradient(135deg, greenyellow, #4070f4);
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
          //   @media only screen and (max-width: 600px) {
          //     h1{
          //         font-size:1rem;
          //     }
          // }
        `}</style>
            </div>
        </>
    );
}
