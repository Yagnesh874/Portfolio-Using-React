import "./contact.css"
const Contact = () => {
    return (
        <div className="contact-container" id="Contact">
            <div className="text-3">
                <p className="address"><span className="add">Address: </span>A/8 Nidhi Park Society,Ahmedabad</p>
                <p className="phone-no"><span className="phone">Phone: </span>9737005722</p>
                <p className="e-mail"><span className="mail">mail: </span>bhuvayagnesh9610@gmail.com</p>
                <p className="website"><span className="web">Webiste: </span>Portfolio</p>
            </div>
            <div className="input-box">
                <input type="text" className="input-1" placeholder="Your Name" />
                <textarea name="Message" id="" className="text-area" placeholder="Your Message"></textarea>
            </div>
        </div>
    )
}
export default Contact