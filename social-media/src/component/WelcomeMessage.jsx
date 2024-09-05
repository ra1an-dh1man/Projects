const WelcomeMessage = ({onGetPostsClick}) => {
    return (
    <>
    <h1 className="welcomeMessage">Sorry, There are no Posts yet 🫤</h1>

        <button type="button" onClick={onGetPostsClick} className="btn btn-primary" >Get Posts From Server</button>
    </>
    )

}

export default WelcomeMessage;