import { mergeResolvers } from "@graphql-tools/merge"
import { loadFilesSync } from "@graphql-tools/load-files"
import { join } from "path"

const resolversArray = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'))
const resolversDefs = mergeResolvers(resolversArray)

export default resolversDefs
