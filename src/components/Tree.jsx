import { fakeTree } from "../mock/fakeTree"

export const Tree = () => {
    const data = fakeTree.services

    const constructTree = (data) => {
        const tree = []

        data.sort((a, b) => a.sorthead - b.sorthead)

        data.forEach(service => {
            service.children = []
        })

        data.forEach(service => {
            if (service.head !== null) {
                const parentService = data.find(parent => parent.id === service.head)

                if (parentService) {
                    parentService.children.push(service)
                }
            } else {
                tree.push(service)
            }
        })

        return tree
    }

    const renderTreeNodes = (nodes) => {
        return nodes.map(node => (
            <li key={node.id}>
                <p>
                    {node.name}
                    {node.price > 0 && (' (' + node.price + ')')}
                </p>
                {node.node === 1 && (
                    <ul style={{ paddingLeft: 20 }}>
                        {renderTreeNodes(node.children)}
                    </ul>
                )}
            </li>
        ))
    }

    return (
        <ul>
            {renderTreeNodes(constructTree(data))}
        </ul>
    )
}