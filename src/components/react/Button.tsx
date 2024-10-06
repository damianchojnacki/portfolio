import type { FunctionComponent } from "preact";

const Button: FunctionComponent = ({ children }) => {
    return (
        <button className="px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-black hover:bg-opacity-50 transition">
            {children}
        </button>
    );
};

export default Button;
