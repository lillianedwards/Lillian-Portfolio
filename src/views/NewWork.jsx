import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MenuMatch from "../assets/workImages/mmMobile.png";
import Horrors from "../assets/workImages/lshMobile.png";
import Blurb from "../assets/workImages/bMobile.png";




// function NewWork() {
//   return (
//     <div className="newWorkContain">
//       <div>
//       <div className="row">
//         <div className="col-lg-4 col-md-4 col-12 mb-4">
//           <Card style={{ width: "18rem" }} className="projCard">
//             <div style={{ maxHeight: "300px", overflow: "auto" }}>
//               <Card.Img variant="top" src={MenuMatch} />
//             </div>
//             <Card.Body>
//               <Card.Title>Menu Match: September 2023</Card.Title>
//               <div style={{ maxHeight: "100px", overflow: "auto" }}>
//                 <Card.Text>
//                   Menu Match is a front-end web app that uses bootstrap and
//                   jquery to integrate third-party APIs and create a cohesive
//                   experience organizing food & drink recipes for hosts and
//                   entertainers.
//                 </Card.Text>
//               </div>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item>
//                 Save and manage favorite recipes from two third-party API's.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Add ingredients from recipes to an in-app shopping list.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Sort items on the shopping list to match your grocery store path
//                 and delete items once you've purchased them.
//               </ListGroup.Item>
//             </ListGroup>
//             <Card.Body>
//               <Card.Link
//                 href="https://jkellogg01.github.io/menu-match/index.html#"
//                 target="_blank"
//               >
//                 Deployed Site
//               </Card.Link>
//               <Card.Link
//                 href="https://github.com/jkellogg01/menu-match"
//                 target="_blank"
//               >
//                 GitHub Repo
//               </Card.Link>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-4 col-md-4 col-12 mb-4">
//           <Card style={{ width: "18rem" }} className="projCard">
//             <div style={{ maxHeight: "300px", overflow: "auto" }}>
//               <Card.Img variant="top" src={Horrors} />
//             </div>
//             <Card.Body>
//               <Card.Title>Little Site of Horrors: October 2023</Card.Title>
//               <div style={{ maxHeight: "100px", overflow: "auto" }}>
//                 <Card.Text>
//                   Little Site of Horrors is a full-stack application using
//                   Node.js and Express, MySQL, JavaScript, and Handlebars.js. The
//                   application leverages a scary movie database to suggest new
//                   spooky movies for users.
//                 </Card.Text>
//               </div>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item>
//                 Create an account and log in to personalize a Halloween themed
//                 profile.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Choose a profile graphic to personalize your spooky online
//                 persona.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Favorite 5 movies from the database to show other users your
//                 spooky scale and top picks.
//               </ListGroup.Item>
//             </ListGroup>
//             <Card.Body>
//               <Card.Link
//                 href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/"
//                 target="_blank"
//               >
//                 Deployed Site
//               </Card.Link>
//               <Card.Link
//                 href="https://github.com/ljkahn/littleSiteOfHorrors"
//                 target="_blank"
//               >
//                 GitHub Repo
//               </Card.Link>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-lg-4 col-md-4 col-12 mb-4">
//           <Card style={{ width: "18rem" }} className="projCard">
//             <div style={{ maxHeight: "300px", overflow: "auto" }}>
//               <Card.Img variant="top" src={Blurb} />
//             </div>
//             <Card.Body>
//               <Card.Title>Blurb: November 2023</Card.Title>
//               <div style={{ maxHeight: "100px", overflow: "auto" }}>
//                 <Card.Text>
//                   (MERNG-Stack) Blurb is a social media application utilizing
//                   React, MongoDB, GraphQL, Node and Express. This is a
//                   demonstration of CRUD capabilities with this tech stack
//                 </Card.Text>
//               </div>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item>
//                 Create an account and log in to create blurbs and interact with
//                 other user's blurbs through likes and comments.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Upload and edit a profile picture. Update your profile
//                 information or the email and password you signed up with.
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Explore popular Blurbs on the flame page and navigate to users
//                 profiles to follow or unfollow them.
//               </ListGroup.Item>
//             </ListGroup>
//             <Card.Body>
//               <Card.Link
//                 href="https://blurb4-web-6d7dbae39646.herokuapp.com/"
//                 target="_blank"
//               >
//                 Deployed Site
//               </Card.Link>
//               <Card.Link href="https://github.com/ljkahn/Blurb" target="_blank">
//                 GitHub Repo
//               </Card.Link>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       </div>
//     </div>
//   );
// }



const cardStyle = {
  width: '18rem',
  height: '35rem'
};

const imageContainerStyle = {
  maxHeight: '300px',
  overflow: 'auto',
};

// const textContainerStyle = {
//   maxHeight: '100px',
//   overflow: 'auto',
// };

function ProjectCard({ title, date, imageSrc, description, siteLink, repoLink }) {
  return (
    <div className="col-lg-4 col-md-4 col-12 mb-4">
      <Card style={cardStyle} className="projCard">
        <div style={imageContainerStyle}>
          <Card.Img variant="top" src={imageSrc} alt={title} />
        </div>
        <Card.Body>
          <Card.Title className="projTitle">{title}</Card.Title>
          <Card.Title className="projDate">
            {date}
          </Card.Title>
          <div>
            <Card.Text>{description}</Card.Text>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* List items here */}
        </ListGroup>
        <Card.Body >
          <Card.Link className="links" href={siteLink} target="_blank">
            Deployed Site
          </Card.Link>
          <Card.Link className="links" href={repoLink} target="_blank">
            Repository
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

function NewWork() {
  return (
    <div className="newWorkContain">
      <div className="row">
        <ProjectCard
          title="Menu Match"
          date="September 2023"
          imageSrc={MenuMatch}
          description="Menu Match is a front-end web app that uses bootstrap and jquery to integrate third-party APIs and create a cohesive experience organizing food & drink recipes for hosts and entertainers."
          siteLink="https://jkellogg01.github.io/menu-match/index.html#"
          repoLink="https://github.com/jkellogg01/menu-match"
        />
        <ProjectCard
          title="Little Site of Horrors"
          date="October 2023"
          imageSrc={Horrors}
          description="Little Site of Horrors is a full-stack application using Node.js and Express, MySQL, JavaScript, and Handlebars.js. This is a demonstration of building an API."
          siteLink="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/"
          repoLink="https://github.com/ljkahn/littleSiteOfHorrors"
        />
        <ProjectCard
          title="Blurb"
          date="November 2023"
          imageSrc={Blurb}
          description="(MERNG-Stack) Blurb is a social media application utilizing React, MongoDB, GraphQL, Node and Express. This is a demonstration of CRUD capabilities with this tech stack"
          siteLink="https://blurb4-web-6d7dbae39646.herokuapp.com/"
          repoLink="https://github.com/ljkahn/Blurb"
        />
      </div>
    </div>
  );
}
export default NewWork;
