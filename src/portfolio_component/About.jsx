import image from "../Assests/boy_image.avif"
import "./about.css"
const About = () => {
    return (
        <div className="container-About" id="About">
            <div className="img-1">
                <img src={image} alt="" srcset="" />
            </div>
            <div className="text-1">
                <p className="para-1">About me</p>
                <p className="para-2">There are many variations of passages ofLorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour,</p>
                <p className="para-3">Passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour,</p>
                <button className="btn-1">Contact me</button>
            </div>
        </div>
    )
}
export default About