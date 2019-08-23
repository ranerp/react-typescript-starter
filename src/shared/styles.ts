import { css } from 'styled-components';

export const mixins = {
    inputWrapper: css`
        background-color: ${props => props.theme.colors.inputBackgroundColor};
        border: 1px solid transparent;
        border-radius: ${props => props.theme.sizes.borderRadius}px;
        height: ${props => props.theme.sizes.inputHeight}px;

        select,
        textarea,
        input {
            background-color: transparent;
            box-shadow: none;
            color: ${props => props.theme.colors.inputColor};
            border: 0;
            border-radius: 0;
            outline: 0;
        }

        select[disabled],
        textarea[disabled],
        input[disabled] {
            opacity: 0.25;
        }
    `,
    coverPage: css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    `,
    flexXY: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    horizontalScroller: css`
        display: flex;
        white-space: nowrap;
        overflow: auto;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    hideScrollbar: css`
        ::-webkit-scrollbar {
            display: none;
        }
    `,
    clearButton: css`
        background-color: transparent;
        border: 0;
        outline: 0;

        :focus,
        :hover {
            cursor: pointer;
            outline: none;
            text-decoration: none;
        }
    `,
    hideTextOverflowEllipsis: css`
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    `,
};
