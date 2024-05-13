import LoginForm from "../../Components/LoginForm"

const Admin = ({ authenticate }) => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
            <main className="flex justify-center items-center w-full px-2 md:px-20">
                <LoginForm authenticate={authenticate} />
            </main>
        </div>
    )
}

export default Admin