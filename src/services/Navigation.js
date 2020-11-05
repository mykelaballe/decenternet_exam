import React, {createRef} from 'react'

const ref = createRef()

const navigate = (routeName, params) => {
    ref.current.navigate(routeName, params)
}

export default {
    ref,
    navigate
}