const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async function onCreateNode({ actions, cache, createNode, createNodeId, node, store }) {
  if (node.internal.type === 'ImagesYaml') {
    try {
      const fileNode = createRemoteFileNode({
        url: node.url,
        store,
        cache,
        createNode,
        createNodeId
      })

      node.localFile___NODE = fileNode.id
    } catch (e) {
      console.error(e)
    }
  }
  return;
}
