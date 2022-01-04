import React from 'react'

import { Text, View } from 'react-native';
import { ButtonCalc, ColorButton } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {
        number,
        lastNumber,
        clear,
        positiveNegative,
        removeLastNumber,
        addNumber,
        btnAdd,
        btnSubtract,
        btnMultiply,
        btnDivide,
        calculate,
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                (lastNumber !== '0') && (<Text style={styles.resultTiny}>{lastNumber}</Text>)
            }

            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalc text='C' color={ColorButton.Grey} action={clear} />
                <ButtonCalc text='+/-' color={ColorButton.Grey} action={positiveNegative} />
                <ButtonCalc text='del' color={ColorButton.Grey} action={removeLastNumber} />
                <ButtonCalc text='/' color={ColorButton.Orange} action={btnDivide} />
            </View>
            <View style={styles.row}>
                <ButtonCalc text='7' action={addNumber} />
                <ButtonCalc text='8' action={addNumber} />
                <ButtonCalc text='9' action={addNumber} />
                <ButtonCalc text='X' color={ColorButton.Orange} action={btnMultiply} />
            </View>
            <View style={styles.row}>
                <ButtonCalc text='4' action={addNumber} />
                <ButtonCalc text='5' action={addNumber} />
                <ButtonCalc text='6' action={addNumber} />
                <ButtonCalc text='-' color={ColorButton.Orange} action={btnSubtract} />
            </View>
            <View style={styles.row}>
                <ButtonCalc text='1' action={addNumber} />
                <ButtonCalc text='2' action={addNumber} />
                <ButtonCalc text='3' action={addNumber} />
                <ButtonCalc text='+' color={ColorButton.Orange} action={btnAdd} />
            </View>
            <View style={styles.row}>
                <ButtonCalc text='0' wide action={addNumber} />
                <ButtonCalc text='.' action={addNumber} />
                <ButtonCalc text='=' color={ColorButton.Orange} action={calculate} />
            </View>
        </View>
    )
}
