import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: ColorButton;
    wide?: boolean;
    action: (numberText: string) => void;
}

export enum ColorButton {
    Grey,
    GreyDark,
    Orange,
}

export const ButtonCalc = ({ text, color = ColorButton.GreyDark, wide = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}>
            <View
                style={{
                    ...stylesButton.button,
                    backgroundColor: backgroundColor(color),
                    width: (wide) ? 180 : 80
                }}>
                <Text style={{
                    ...stylesButton.buttonText,
                    color: textColor(color)
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const backgroundColor = (colorButton: ColorButton) => {
    switch (colorButton) {
        case ColorButton.Grey:
            return '#9B9B9B';
        case ColorButton.Orange:
            return '#FF9427';
        default:
            return '#2D2D2D';
    }
}

const textColor = (colorButton: ColorButton) => {
    switch (colorButton) {
        case ColorButton.Grey:
            return 'black';
        default:
            return 'white';
    }
}

const stylesButton = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300'
    }
});