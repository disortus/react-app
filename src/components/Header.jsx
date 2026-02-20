import logo from "/vite.svg";

const now = new Date();

function Header(){
    return(
    <header>
        <img src={logo} alt="logo"/>
        <h1 className="text-2xl font-bold text-center mb-4">Todo</h1>
        <span>now: {now.toTimeString()}</span>
    </header>
    );
}

export default Header;