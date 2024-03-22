import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <header className="bg-prim">
                <div className="xl:container mx-auto">
                    <div className="mx-5 mb-6">
                        <Header></Header>
                    </div>
                </div>
            </header>
            <main className="xl:container mx-auto">
                <div className="mx-5 my-6">
                    <Outlet></Outlet>
                </div>
            </main>
            <footer className="bg-prim text-white">
                <div className="xl:container mx-auto">
                    <div className="mx-5 mt-6">
                        <Footer></Footer>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Root;