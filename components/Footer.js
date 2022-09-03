export const Footer = () => {
    return (
        <footer className="flex flex-col items-center absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
            <p>Copyright &copy; {new Date().getFullYear()} | Dhruvkanth Puli</p>
            <p>This website is created for learning purposes</p>
        </footer>
    )
}