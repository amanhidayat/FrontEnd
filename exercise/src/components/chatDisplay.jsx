import "../index.css"

function ChatDisplay ({ message }) {
    return (
        <section className="main-section">
        <div className="container main-container">
            <h3>Katakan Tolong pada Bot</h3>
            <div>
                <div className="form-group">
                    <div className="icon-div">
                        <i class="ri-user-line"></i>
                    </div>
                    <div className="chat-output">{ message }</div>
                </div>
            </div>
        </div>    
    </section>        
    )
}

export default ChatDisplay;