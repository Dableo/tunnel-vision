import {configureEntityStore} from 'ecs'
import * as components from 'data'

export default configureEntityStore({
    components: Object.values(components)
})
