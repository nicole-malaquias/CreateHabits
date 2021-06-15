import { Container, Content, Background, DivButton } from "./styled";
import { useHistory, Redirect } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../../components/Button";
import ImageExemplo from "../../assets/rafiki.png";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
const Home = ({ isLogin }) => {
  const history = useHistory();
  if (isLogin) {
    return <Redirect to="/dashboard"></Redirect>;
  }
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <div>
            <p>
              Be Kind is an app that helps you to improve your kindness towards
              yourself and others, by practicing daily acts of kindness 24 times
              you'll be creating a habit out of them. We also have groups that
              you can join in to perform volunteer work, Come join us and spread
              kindness!
            </p>
            <DivButton>
              <Button
                colorButton="purple"
                handleClick={() => history.push("/login")}
              >
                Login
              </Button>
              <Button
                colorButton="purplePink"
                handleClick={() => history.push("/register")}
              >
                Sign up
              </Button>
            </DivButton>
          </div>
          <Background />
        </Content>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={200}
          centerMode={false}
          className="Carrosel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          transitionDuration={2000}
          swipeable
        >
          <div>
            <img src={ImageExemplo} alt="exemplo" />
          </div>
          <div>
            <img src={ImageExemplo} alt="exemplo" />
          </div>
          <div>
            <img src={ImageExemplo} alt="exemplo" />
          </div>
          <div>
            <img src={ImageExemplo} alt="exemplo" />
          </div>
          <div>
            <img src={ImageExemplo} alt="exemplo" />
          </div>
        </Carousel>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
