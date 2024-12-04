const AuthLayout = ({ children }) => {
    return (
        <div>
            <nav className="bg-red-600 text-white">
                This is our nav bar
            </nav>
            {children}
        </div>
    );
}

export default AuthLayout