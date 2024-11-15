import "./NotFound.css"
import errorImg from "../assets/404.png"

function NotFound() {
    return (
        <div className="not-found-div">
            <img src={errorImg} alt="404 error image" id="error-img" />
        </div>
    )
}

export default NotFound