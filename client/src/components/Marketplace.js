import Searcher from "./Searcher";
import Cards from "./Cards";

function Marketplace({context}) {
  return (
    <div>
      <Searcher context={context}></Searcher>
      <Cards context={context}></Cards>
    </div>
  );
}

export default Marketplace