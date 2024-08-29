import { useState, useEffect } from "react";
import jacobPic from "../assets/jacob_pic.jpg";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

// import "./App.css";

function Card({ content, title }: any) {
  //removed publicApiKey

  return (
    <>
      <div>
        <div>{title}</div>
        <br></br>
        <div>{content}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </>
  );
}

function App() {
  const projects = [
    { itemId: 1, content: "text", title: "title" },
    { itemId: 2, content: "text", title: "title" },
    { itemId: 3, content: "text", title: "title" },
    { itemId: 4, content: "text", title: "title" },
    { itemId: 5, content: "text", title: "title" },
  ];
  const [currProjects, setCurrProjects] = useState([]);
  console.log(currProjects);
  const [lines, setLines] = useState<string[]>([]);

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
  console.log(currProjects);
  // https://api.github.com/users/jwaldor/repos
  return (
    <>
      {/* <Fade duration = {1000} damping = {0}> */}
      <h1>Jacob Waldor</h1>
      <a href="https://github.com/jwaldor">GitHub</a>
      <br></br>

      <a href="https://www.linkedin.com/in/jacob-waldor/">LinkedIn</a>
      <br></br>
      <div>
        <img
          src={jacobPic}
          style={{ height: "24em", padding: "1.5em" }}
          alt="Picture"
        />
      </div>

      <h1>Discover Jacob!</h1>
      <div>
        Hey there! My name is Jacob Waldor. I'm developing skills to be a
        full-stack software engineer at Fractal Bootcamp. Previously, I worked
        at two tech companies in data science and machine learning roles, both
        crafting prompts for LLM's and developing machine learning models.
        Before that, I studied mathematics at Pomona College. A fun fact about
        me is that I almost became a Buddhist monk. The first reason I code is
        that I love coding, the second reason is that I love learning, and the
        third is that I want to build technologies thta ignite humanity's full
        potential.
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Sed efficitur eros eu magna efficitur, nec
        laoreet risus gravida. Nullam ac lorem id elit pretium varius non sit
        amet augue. Curabitur et purus a turpis cursus vulputate. Duis tempor,
        justo in sollicitudin gravida, tortor ex dictum est, id ultrices lorem
        sapien ut eros. Suspendisse potenti. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Sed
        accumsan eros ut nisl ullamcorper, nec blandit odio vehicula. Aenean
        sagittis orci at lectus vestibulum, et scelerisque metus dapibus. Mauris
        interdum, sapien at pretium suscipit, justo ipsum elementum magna, nec
        hendrerit dui felis sit amet purus. Cras id efficitur odio, non faucibus
        odio. Morbi ultricies, justo sed varius auctor, metus est fringilla
        orci, id vestibulum mauris felis id ante. Quisque tempor mi in lectus
        maximus, et iaculis ligula euismod. Integer auctor orci ut nisi laoreet,
        et lacinia quam suscipit. Nulla facilisi. Sed sagittis tortor et tortor
        interdum, non ultricies risus cursus. Sed ultricies viverra risus, id
        interdum ex varius at. Nam lacinia augue a orci vehicula, et
        pellentesque elit condimentum. Duis iaculis ut eros sed feugiat. Donec
        scelerisque lectus vel lectus auctor, ac egestas justo ornare. Aliquam
        erat volutpat. Sed a nisi auctor, vulputate dolor eget, vehicula metus.
        Aenean sit amet nunc vitae dolor fermentum auctor. Nulla facilisi. In
        tincidunt sapien non arcu convallis, in sodales lorem varius. Mauris
        egestas nec odio vel tincidunt. Nam et dui velit. Phasellus vestibulum
        velit eu mauris vestibulum, a luctus sem facilisis. Vestibulum ut quam
        justo. Integer varius massa eu libero consectetur, ac vehicula orci
        ullamcorper. Nunc at tortor id purus facilisis suscipit. Cras lobortis,
        odio ut cursus gravida, urna lorem consequat urna, vel cursus lectus
        sapien at felis. Donec convallis augue sed efficitur cursus. In
        condimentum leo vitae gravida euismod. Suspendisse potenti. Fusce
        condimentum ante ut lectus consequat, non volutpat elit varius.
        Curabitur convallis nisl nec velit sollicitudin, ac auctor nisl aliquet.
        Ut ultricies, risus a condimentum facilisis, nisl velit ultricies lacus,
        vel aliquam sapien orci eget eros. Vivamus tempor, mauris non volutpat
        pretium, odio libero vehicula nisl, eu tristique lorem nunc vitae
        ligula. Cras fermentum eros ut libero dictum, eget dapibus tortor
        sagittis. Duis vel dolor sit amet ipsum rutrum venenatis. Vestibulum
        eget orci convallis, vulputate sem eu, convallis dolor. Integer sit amet
        dui id dolor commodo auctor. Pellentesque at velit ac eros viverra
        viverra et a sapien. Maecenas vel nunc id nisl cursus convallis. Integer
        aliquam nisi at ex fermentum, eget rhoncus nisl feugiat. Nullam id urna
        nec lectus fermentum malesuada. Praesent ac gravida libero. Sed
        vestibulum viverra ex vel scelerisque. Phasellus in massa auctor, cursus
        nulla in, pellentesque lacus. Ut non consectetur erat. Integer vitae
        augue velit. Mauris accumsan malesuada velit, non viverra libero.
      </div>
      <h1>Projects</h1>
      {/* </Fade> */}
      <ScrollMenu>
        {lines.map((url) => (
          <div>
            <div style={{ resize: "both" }}>
              <a href={url}>{url}</a>
            </div>
            <iframe src={url} frameborder="0"></iframe>
          </div>

          // <div className="">
          //   <div className="">

          //   </div>
          // </div>
        ))}
      </ScrollMenu>
      <h2>Connect</h2>
    </>
  );
}

export default App;
