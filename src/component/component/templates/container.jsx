/* @flow */
/* @jsx jsxDom */

import { type RenderOptionsType } from '../../parent';

export function defaultContainerTemplate({ id, tag, context, CLASS, outlet, jsxDom, dimensions : { width, height } } : RenderOptionsType) : HTMLElement {

    return (
        <div id={ id } class={ `${ CLASS.XCOMPONENT } ${ CLASS.XCOMPONENT }-tag-${ tag } ${ CLASS.XCOMPONENT }-context-${ context }` }>
            <style>
                {`
                    #${ id } > .${ CLASS.OUTLET } {
                        display: inline-block;
                        width: ${ width };
                        height: ${ height };
                        position: relative;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transition: opacity .2s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
                        opacity: 1;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
                        opacity: 0;
                    }
                `}
            </style>

            { outlet }
        </div>
    );
}
