import { useState, useEffect } from "react";
import jacobPic from "../assets/jacob_pic.jpg";
import { useRef } from "react";

// import "./App.css";

function App() {

  const [lines, setLines] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll amount as needed
  }
};

const scrollRight = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll amount as needed
  }
};


  useEffect(() => {
    // Fetch the text file content
    fetch("https://api.github.com/gists/610572f5715f2b78618f774a274bb8d4")
      .then((response) => response.json()) // Read as plain text
      .then((object) => {
        // Split the content by newline characters to create an array of lines
        console.log(object["files"]["projects.txt"]["content"].split(/\r?\n/));
        setLines(object["files"]["projects.txt"]["content"].split(/\r?\n/));
      })
      // .then((text) => {
      //   // Split the content by newline characters to create an array of lines
      //   const linesArray = text.split(/\r?\n/);
      //   setLines(linesArray);
      // })
      .catch((error) => console.error("Error loading the text file:", error));
  }, []);
  // useEffect(() => {
  //   axios.get("https://api.github.com/users/jwaldor/repos").then((response) => {
  //     console.log(response.data);
  //     setCurrProjects(
  //       response.data.map((proj: object) => proj.homepage)
  //       // .filter((url: string) => url.length !== 0)
  //     );
  //   });
  // }, []);

  // https://api.github.com/users/jwaldor/repos
  return (
    <>
      {/* <Fade duration = {1000} damping = {0}> */}
      <div className="flex flex-col items-center text-center mx-8"> {/* Added mx-4 for left and right margins */}
        <h1 className="text-4xl font-bold mb-4">Jacob Waldor</h1>
        <div className="space-x-4">
          <a href="https://github.com/jwaldor" className="text-blue-900 hover:text-blue-700 transition duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/jacob-waldor/" className="text-blue-900 hover:text-blue-700 transition duration-300">LinkedIn</a>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col place-items-center mx-4"> {/* Added mx-4 for left and right margins */}
        <img
          className="shadow-md mb-2"
          src={jacobPic}
          style={{ height: "12em",  }}
          alt="Picture"
        />
      </div>

      <h1></h1>
      <div className="text-slate-800 mx-8 mt-3"> 
        Hey there! My name is Jacob Waldor. I'm developing skills to be a
        full-stack software engineer at Fractal Bootcamp. Previously, I worked
        at two tech companies in data science and machine learning roles, both
        crafting prompts for LLM's and developing machine learning models.
        Before that, I studied mathematics at Pomona College. The first reason I code is
        that I love coding, the second reason is that I love learning, and the
        third is that I want to build technologies that ignite humanity's full
        potential.
      </div>
      <br></br>
      <div>
      {/* </Fade> */}

      <div className="flex flex-col justify-center place-items-center">

      <div className="flex flex-row  mx-4">
      <div className="flex flex-col justify-center place-items-center">
      <div className="flex flex-row mb-2 italic mx-4 self-start">Projects</div>
      <div className="flex flex-row">
      <button className="p-0 bg-transparent border-none rounded-sm text-red-500 text-2xl mx-2" onClick={scrollLeft}>←</button>

        <div className="carousel rounded-box" ref={carouselRef}>
          {lines.map((url) => (
            <div className="carousel-item mx-2"> {/* Added mx-2 for horizontal margin */}
              <div className="flex flex-col">
              <a
                    href={url}
                    className="btn bg-black h-fit p-3 rounded-xl mb-2 w-32 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500 font-bold hover:underline mr-1"
                  >
                <div className="">
                  
                    Visit site
                  
                </div>
                </a>
                <div style={{ resize: "both" }}></div>
                <iframe className="h-96 w-full" src={url}></iframe>
              </div>
              
            </div>
          ))}
          


        </div>
        <button className="p-0 bg-transparent border-none rounded-sm text-red-500 text-2xl mx-2" onClick={scrollRight}>→</button>

        </div>
        </div>
        </div>

{/*         
        <div className="flex flex-row justify-between w-full">
        </div> */}
      </div>
      </div>
      <h2>Connect</h2>
    </>
  );
}




export default App;
