import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";


const Garndpa = ({asset}) => {
    return (
        <div>
            <h2>GrandPa</h2>
            <section className="flex">
                <Dad asset={asset} ></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Garndpa;