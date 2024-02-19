import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const Host = () => {
//     const { id } = useParams();

//     return (
//         <div>
//             <Header />
//             <main>
//                 <h2>voici l&apos;id de la card séléctionnée : {id}</h2>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Host;


import dataHosts from "../data/base.json";
import { useState, useEffect } from "react"; 

const Host = () => {
    const { id } = useParams();
    const [hostData, setHostData] = useState(); 

    useEffect(() => {
        const selectedHost = dataHosts.find(host => host.id === id);
        setHostData(selectedHost);
    }, [id]);

    return (
        <div>
            <Header />
            <main>
                <h2>{hostData ? hostData.title : ""}</h2>
            </main>
            <Footer />
        </div>
    );
};

export default Host;
