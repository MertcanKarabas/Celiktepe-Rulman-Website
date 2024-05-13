const Notification = ({message, color}) => {
    return (
        <div className={`fixed top-4 left-4 ${color} text-white py-2 px-4 rounded-md shadow-md transition-opacity duration-500`}>
            {message}
        </div>
    )
}

export default Notification;