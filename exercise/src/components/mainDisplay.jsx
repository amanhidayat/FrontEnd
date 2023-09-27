import "../index.css"

import { useRef } from "react"
import { useNavigate } from "react-router-dom";

function MainDisplay({setMessage}) {
    const textRef = useRef();
    const navigate = useNavigate();

    const onSubmit = () => {
        if (!textRef.current.value) {
            alert("Input cannot be empty")
        } else {
            setMessage(textRef.current.value);
            navigate("/chatDisplay")
        }
    };

    return (
        <section className="main-section">
            <div className="container main-container">
                <h3>Katakan Tolong pada Bot</h3>
                <div>
                    <div className="form-group">
                        <textarea className="form-input" placeholder="What's on your mind?" ref={textRef}>
                        </textarea>
                        <button type="submit" className="icon-div" onClick={onSubmit}>
                            <i class="ri-send-plane-2-line"></i>
                        </button>
                    </div>
                </div>
            </div>   
        </section>        
    )
}

export default MainDisplay;