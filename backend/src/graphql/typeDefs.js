import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { join } from 'path'

const typeArray = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typeArray)

export default typeDefs
