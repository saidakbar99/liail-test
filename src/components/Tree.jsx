import { fakeTree } from "../mock/fakeTree"

export const Tree = () => {
    const data = fakeTree.services

    const constructTree = (data) => {
        data.map(service => {
            if(service.node) {
                service.children = []
            }
        })

        data.map(service => {
            if (!service.node) {
                if (service.head) {
                    const parentService = data[service.head - 1]
                    parentService.children.push(service)
                }
            }
        })

        const filteredData = data.filter(service => service.node === 1 || service.head === null)

        filteredData.map(service => {
            if (service.head) {
                const parentService = data[service.head - 1]
                parentService.children.push(service)
            }
        })

        return filteredData.filter(service => service.head === null)
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