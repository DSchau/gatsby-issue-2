const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async function onCreateNode({ actions, cache, createContentDigest, node, store }) {
  if (node.internal.type === 'ImagesYaml') {
    try {
      const fileNode = await createRemoteFileNode({
        url: node.url,
        store,
        cache,
        createNode: actions.createNode,
        createNodeId: createContentDigest
      })

      node.localFile___NODE = fileNode.id
    } catch (e) {
      console.error(e)
    }
  }
  return;
}
