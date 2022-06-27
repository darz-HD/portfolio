import { Row, Col, Card, CardTitle } from "reactstrap";

import classes from "./Skills.module.css";

const Dummy_Skills = [
  {
    id: "1",
    title: "PHP",
    image: "https://pbs.twimg.com/media/EKdH0WYXUAAlSgf.png",
  },
  {
    id: "2",
    title: "SQL",
    image:
      "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-part-azure-sql-database-with-azure-active-directory-17.png",
  },
  {
    id: "3",
    title: "HTML",
    image:
      "https://cdn-icons-png.flaticon.com/512/174/174854.png?w=360",
  },
  {
    id: "4 ",
    title: "CSS",
    image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    id: "5",
    title: "JAVASCRIPT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png",
  },
  {
    id: "6",
    title: "REACT",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: "7",
    title: "JQUERY",
    image:
      "https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png",
  },
  {
    id: "8",
    title: "REDUX",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU",
  },
  {
    id: "9",
    title: "CODEIGNITER",
    image:
      "https://www.joykal.com/wp-content/uploads/2019/09/codeigniter-icon-512.png",
  },
  {
    id: "10",
    title: "LARAVEL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
  },
  {
    id: "11",
    title: "NODEJS",
    image:
      "https://logo-download.com/wp-content/data/images/png/Node.js-logo.png",
  },
  {
    id: "12",
    title: "EXPRESSJS",
    image: "https://miro.medium.com/max/800/1*9AbbVli10NreTXCpiVYEOQ.png",
  },
  {
    id: "13",
    title: "MONGODB",
    image: "https://www.joykal.com/wp-content/uploads/2019/09/mongodb.jpg",
  },
  {
    id: "14",
    title: "MYSQL",
    image: "https://www.elearningworld.org/wp-content/uploads/2017/05/mysql_logo.jpg",
  },
  {
    id: "15",
    title: "NEXTJS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
  },
  {
    id: "16",
    title: "SOLIDITY",
    image: "https://docs.soliditylang.org/en/v0.8.15/_images/logo.svg",
  },
  {
    id: "17",
    title: "PACT",
    image: "https://cryptologos.cc/logos/kadena-kda-logo.png",
  },
  {
    id: "18",
    title: "BOOTSTRAP",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
  },
  {
    id: "18",
    title: "WORDPRESS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png",
  },
  {
    id: "18",
    title: "MATERIALIZE",
    image: "https://www.nicepng.com/png/full/169-1696332_materialize-logo-materialize-css-logo.png",
  },
];

function Skills() {
  const skillList = Dummy_Skills.map((skills) => (
    <Col xs="3" lg="1" style={{ marginTop: "10px" }}>
      <Card>
        <CardTitle className={classes["skill-title"]}>{skills.title}</CardTitle>
        <img
          className={classes["skill-img"]}
          alt={skills.title}
          src={skills.image}
        />
      </Card>
    </Col>
  ));
  return (
    <Row style={{ padding: "10px", justifyContent: "center" }}>
      <Col xs="12" lg="12" style={{ marginTop: "5px" }}>
        <div className={classes["skill-banner"]}>
            TOOLS AND SKILLS
        </div>
      </Col>
      {skillList}
    </Row>
  );
}

export default Skills;
