import Garndpa from "./Garndpa";
import './FamilyTree.css'
const FamilyTree = () => {
    const asset = 'diamond'
    return (
        <div className="family-tree">
            <h1>Family Tree</h1>
            <Garndpa asset={asset}></Garndpa>
        </div>
    );
};

export default FamilyTree;