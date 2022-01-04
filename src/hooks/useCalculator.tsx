import { useRef, useState } from "react";

enum Operators {
    Add,
    Subtract,
    Divide,
    Multiply
}

export const useCalculator = () => {

    const [lastNumber, setLastNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setLastNumber('0');
    }

    const addNumber = (numberText: string) => {

        // Do not accept multiple dots
        if (number.includes('.') && numberText === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Decimal dot
            if (numberText === '.') {
                setNumber(number + numberText);
                // Evaluate if there is 0 and some dot
            } else if (numberText === '0' && number.includes('.')) {
                setNumber(number + numberText);
                // Evaluate if it is different from 0 and does not have a dot
            } else if (numberText !== '0' && !number.includes('.')) {
                setNumber(numberText);
                // Skip 0000.0
            } else if (numberText === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + numberText);
            }

        } else {
            setNumber(number + numberText);
        }

    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const removeLastNumber = () => {
        let negative = '';
        let numberTemp = number;

        if (number.includes('-')) {
            negative = '-';
            numberTemp = number.substring(1);
        }

        if (numberTemp.length > 1) {
            setNumber(negative + numberTemp.slice(0, -1));
        } else {
            setNumber('0');
        }

    }

    const changeNumberToPrevious = () => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0, -1));
        } else {
            setLastNumber(number);
        }
        setNumber('0');
    }

    const btnAdd = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.Add
    }

    const btnSubtract = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.Subtract
    }

    const btnDivide = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.Divide
    }

    const btnMultiply = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.Multiply
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(lastNumber);

        switch (lastOperation.current) {
            case Operators.Add:
                setNumber(`${num1 + num2}`)
                break;
            case Operators.Subtract:
                setNumber(`${num2 - num1}`)
                break;
            case Operators.Multiply:
                setNumber(`${num1 * num2}`)
                break;
            case Operators.Divide:
                setNumber(`${num2 / num1}`)
                break;
        }

        setLastNumber('0')
    }

    return {
        number,
        lastNumber,
        clear,
        addNumber,
        positiveNegative,
        removeLastNumber,
        btnAdd,
        btnSubtract,
        btnDivide,
        btnMultiply,
        calculate
    }

}
