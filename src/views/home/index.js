import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
    {
        src: require("assets/img/jogandocast-02.png"),
        altText: "Slide 1",
        caption: "Membro do jogando cast"
    },
    {
        src: require("assets/img/jogandocast-01.png"),
        altText: "Slide 2",
        caption: "Jogandocast"
    },
];
const carouselItems2 = [
    {
        src: require("assets/img/deividsabinogames-01.png"),
        altText: "Slide 1",
        caption: "Streamer Afiliado da Twitch"
    },
];
const carouselItems3 = [
    {
        src: require("assets/img/skate-01.jpg"),
        altText: "Slide 1",
        caption: "Skatista"
    },
    {
        src: require("assets/img/skate-02.jpg"),
        altText: "Slide 1",
        caption: "Ollie"
    },
    {
        src: require("assets/img/skate-03.jpg"),
        altText: "Slide 1",
        caption: "Flip"
    },
];

let ps = null;

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 1
        };
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
        document.body.classList.toggle("profile-page");
    }
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };
    render() {
        return (
            <>
                <ExamplesNavbar />
                <div className="wrapper">
                    <div className="page-header">
                        <img
                            alt="..."
                            className="dots"
                            src={require("assets/img/dots.png")}
                        />
                        <img
                            alt="..."
                            className="path"
                            src={require("assets/img/path4.png")}
                        />
                        <Container className="align-items-center">
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">Quem eu sou?</h1>
                                    <h5 className="text-on-back"><i className="tim-icons icon-single-02"></i></h5>
                                    <p className="profile-description">
                                        Olá, bom eu sou programador web, tenho 27 anos, cursei sistemas de informação, hoje
                                        em dia trabalho como programador front-end, mas já atuei como desenvolvedor fullstack.
                                        Atualmente trabalho com as linguagens REACTJS,VUEJS no front-end e na parte de back-end tenho
                                        conhecimento em c#, laravel, e um pouco de nodejs.
                                        Além de programador, sou streamer afiliado da twitch, onde faço lives de games diariamente, é uma
                                        paixão que tenho desde do pequeno, e hoje uso as lives pra tirar meu tempo de lazer.
                                    </p>
                                    <div className="btn-wrapper profile pt-3">
                                        <Button
                                            className="btn-icon btn-round"
                                            color="twitter"
                                            href="https://twitter.com/odeividsabino"
                                            id="tooltip639225725"
                                            target="_blank"
                                        >
                                            <i className="fab fa-twitter" />
                                        </Button>
                                        <UncontrolledTooltip delay={0} target="tooltip639225725">
                                            Twitter
                                        </UncontrolledTooltip>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="facebook"
                                            href="https://www.facebook.com/deividsabinogames"
                                            id="tooltip982846143"
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook-square" />
                                        </Button>
                                        <UncontrolledTooltip delay={0} target="tooltip982846143">
                                            Página no facebook
                                        </UncontrolledTooltip>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="dribbble"
                                            href="https://instagram.com/odeividsabino"
                                            id="tooltip951161181"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Button>
                                        <UncontrolledTooltip delay={0} target="tooltip951161181">
                                            Instagram
                                        </UncontrolledTooltip>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="github"
                                            href="https://github.com/dualshockmaster"
                                            id="tooltip9511611855"
                                            target="_blank"
                                        >
                                            <i className="fab fa-github" />
                                        </Button>
                                        <UncontrolledTooltip delay={0} target="tooltip9511611855">
                                            Github
                                        </UncontrolledTooltip>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="twitch"
                                            href="https://github.com/dualshockmaster"
                                            id="tooltip951161185"
                                            target="_blank"
                                        >
                                            <i className="fab fa-twitch" />
                                        </Button>
                                        <UncontrolledTooltip delay={0} target="tooltip951161185">
                                            Twitch
                                        </UncontrolledTooltip>
                                    </div>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="4" md="6">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid rounded-circle"
                                                src={require("assets/img/deivid-331.png")}
                                            />
                                            <h4 className="title">Deivid Sabino</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <TabContent
                                                className="tab-subcategories"
                                                activeTab={"tab" + this.state.tabs}
                                            >

                                                <TabPane tabId="tab1">
                                                    <Table className="tablesorter text-center" responsive>
                                                        <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">Informações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><b>Cidade:</b> Piracicaba - SP</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Programador Front-end</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Button className="btn-simple"
                                                                    href="https://github.com/dualshockmaster"
                                                                    color="dribbble"
                                                                ><i className="fab fa-github"></i> Github</Button></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Row className="justify-content-between align-items-center">
                                        <UncontrolledCarousel items={carouselItems} />
                                    </Row>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">Podcast</h1>
                                    <h5 className="text-on-back"><i className="fab fa-spotify"/></h5>
                                    <p className="profile-description text-left">
                                        Em 2019 inicie um Podcast junto de amigos chamado Jogandocast, onde falamos sobre games,
                                        desde de jogos novos até mais antigos e abordamos tudo sobre o universo, além disso também falamos sobre filmes,séries e músicas
                                    </p>
                                    <div className="btn-wrapper pt-3">
                                        <Button
                                            className="btn-simple"
                                            color="success"
                                            href="https://open.spotify.com/show/4yLxjDRmjCMuMtdUxgvHxb?si=kZK6QwJCS9i0YJv539eS5w"
                                        >
                                            <i className="fab fa-spotify" /> Spotify
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="5">
                                    <h1 className="profile-title text-left">Lives na Twitch</h1>
                                    <h5 className="text-on-back"><i className="fab fa-twitch" /></h5>
                                    <p className="profile-description text-left">
                                        2018 onde tudo começou, sempre gostei de assistir tranmissões de jogos,
                                        desde jogos casuais e competitivos, e foi ai que tive a ideia de começar
                                        a colocar toda a minha experiencia com games ao vivo.
                                    </p>
                                    <p className=" text-left">
                                        Atualmente sou afiliado da Twitch e faço lives na plataforma de segunda à sábado,
                                        onde jogos diversos games,
                                        minha preferencia e com jogos que tem modo história, pego as franquinhas e trago sempre
                                        do primeiro titulo e por ai vou jogando.
                                    </p>
                                    <div className="btn-wrapper pt-3">
                                        <Button
                                            className="btn-simple"
                                            color="dribbble"
                                            href="https://www.twitch.tv/deividsabinogames"
                                        >
                                            <i className="fab fa-twitch" /> Twitch
                                        </Button>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <Row className="justify-content-between align-items-center">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/dslogo.png")}
                                        />
                                    </Row>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                    <div className="section mb-5">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Row className="justify-content-between align-items-center">
                                        <UncontrolledCarousel items={carouselItems3} />
                                    </Row>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">Skateboard</h1>
                                    <h5 className="text-on-back"><i className="tim-icons icon-alert-circle-exc" /></h5>
                                    <p className="profile-description text-left">
                                        Comecei a andar de skate com meus 14 anos de idades mais ou menos, sempre
                                    </p>
                                    <p className=" text-left">
                                        Atualmente sou afiliado da Twitch e faço lives na plataforma de segunda à sábado,
                                        onde jogos diversos games,
                                        minha preferencia e com jogos que tem modo história, pego as franquinhas e trago sempre
                                        do primeiro titulo e por ai vou jogando.
                                    </p>
                                </Col>


                            </Row>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default ProfilePage;
