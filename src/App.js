import {Tree} from "./components/Tree"
import { fakeTree } from "./mock/fakeTree"

function App() {
    return (
        <div>
            <Tree data={fakeTree.services} />
        </div>
    )
}

export default App
