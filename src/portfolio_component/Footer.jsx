import "./footer.css";

const Footer = () => {
    return (
        <div className="container-2">
            <div className="box-1">
                <p>Colorlib</p>
                <p className="copyright"><small>© 2019</small></p>
            </div>
            <div className="box-2">
                <p className="box-2-p">Customers</p>
                <p className="box-2-p1">Buyer</p>
                <p className="box-2-p1">Supplier</p>
            </div>
            <div className="box-3">
                <p className="box-3-p">Company</p>
                <p className="box-3-p1">About us</p>
                <p className="box-3-p1">Careers</p>
                <p className="box-3-p1">Contact us</p>
            </div>
            <div className="box-4">
                <p className="box-4-p">Further Information</p>
                <p className="box-4-p1">Terms & Conditions</p>
                <p className="box-4-p1">Privacy Policy</p>
            </div>
            <div className="social-media">
                <p>Follows On</p>
                <ul>
                    <li>
                        <a href="https://www.f  acebook.com/"><span className="fa fa-facebook"></span></a>
                    </li>
                    <li>
                        <a href="https://x.com/?lang=en"><span className="fa fa-twitter"></span></a>
                    </li>
                    <li>
                        <a href="https://in.linkedin.com/"><span className="fa fa-linkedin"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
