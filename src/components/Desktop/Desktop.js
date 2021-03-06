import React from 'react';
import {media} from '../../modules/helpers'
import OptionalRenderer from "../OptionalRenderer/OptionalRenderer";

export default function Desktop({children}){
    return (<OptionalRenderer when={!window.matchMedia(media.mobile).matches}>
        {children}
    </OptionalRenderer>)
}