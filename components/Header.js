import {User} from "./User";

export const Header = () => {
    return (
        <header className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
            <div className="flex space-x-4 items-center">
                <p className="nav-item">About Me</p>
                <p className="nav-item">Store</p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="nav-item">Mail</p>
                <p className="nav-item">Images</p>
                <User/>
            </div>
        </header>
    )
}