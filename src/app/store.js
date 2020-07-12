import {configureEcsStore} from 'ecs'
import * as components from 'data'
import {gameSlice} from 'features/game/gameSlice'

export default configureEcsStore(Object.values(components), [gameSlice])
