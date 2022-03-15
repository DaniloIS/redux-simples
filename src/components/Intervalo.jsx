import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { alterNumberMin, alterNumberMax } from '../store/actions/numbers'

import './Intervalo.css'

function Intervalor(props) {

    const { min, max } = props;

    return (
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterMin(e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterMax(e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapActionCreatorsToProps(dispatch) {
    return {
        alterMin(newNumber) {
            const action = alterNumberMin(newNumber)
            dispatch(action)
        },
        alterMax(newNumber) {
            const action = alterNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalor);