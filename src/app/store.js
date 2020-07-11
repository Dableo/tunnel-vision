import {configureEcsStore} from 'ecs'
import * as components from 'data'

export default configureEcsStore({
    components: Object.values(components)
})
