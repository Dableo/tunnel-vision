// import { configureStore } from '@reduxjs/toolkit'
import {configureEntityStore} from 'ecs'
import {position, movement, solid, collision} from 'data'

export default configureEntityStore({
    components: [position, movement, solid, collision]
})
