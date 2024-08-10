import image from "../Assests/boy_image.avif"
import "./home.css"
const Home = () => {
    return (
        <div className="container" id="Home">
            <div className="text">
                <p className="p-1">Hello , Welcome</p>
                <h1 className="h-1">I'm yagnesh Bhuva</h1>
                <p className="p-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <button className="btn">Contact me</button>
            </div>
            <div className="image">
                <img src={image} alt="" srcset="" />
            </div>
        </div>
    )
}
export default Home;