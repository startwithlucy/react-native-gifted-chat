import { Component } from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import { IMessage } from './Models';
export interface SystemMessageProps<TMessage extends IMessage> {
    currentMessage?: TMessage;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    androidWorkaround?: boolean;
}
export default class SystemMessage<TMessage extends IMessage = IMessage> extends Component<SystemMessageProps<TMessage>> {
    static defaultProps: {
        currentMessage: {
            system: boolean;
        };
        containerStyle: {};
        wrapperStyle: {};
        textStyle: {};
        androidWorkaround: boolean;
    };
    static propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
        wrapperStyle: PropTypes.Requireable<number | boolean | object>;
        textStyle: PropTypes.Requireable<number | boolean | object>;
        androidWorkaround: PropTypes.Requireable<boolean>;
    };
    render(): JSX.Element | null;
}
