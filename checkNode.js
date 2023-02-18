const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
console.log(NODE_MAJOR_VERSION)
if (NODE_MAJOR_VERSION < 12) {
  throw new Error('Requires Node 12 (or higher)');
}