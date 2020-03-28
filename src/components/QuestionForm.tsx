import React, { useContext } from 'react';

import Context from '../store/context';

// import CountrySelect from './CountrySelect'

// import { Button, Container, FormControl, Select, TextField, Typography } from '@material-ui/core/';
import { Container, FormControl, Select, TextField, Typography } from '@material-ui/core/';

export default function Questionnaire() {

    // const [state, setState] = React.useState<IQuestionnaire>({
    //     asylumProgress: '',
    //     visa: 'no',
    //     fingerprints: 'no',
    //     passport: 'no',
    //     nationality: '',
    //     under18: 'no',
    //     familyInGermany: 'no',
    //     familyElsewhere: 'no',
    //     adviceLocation: ''
    // })

    const {state, actions }: any = useContext(Context);


    console.log('State: ', state)

    // const handleChange = (e: React.ChangeEvent<{ name?: string; value: any }>) => {
    //     const name = e.target.name as keyof typeof state;
    //     e.preventDefault();
    //     setState({
    //         ...state,
    //         [name]: e.target.value,
    //     });
    //     // console.log(state);
    // };

    // const handleChange = (e) => actions({type:'setState', payload: {...state, value: e.target.value}})

    return(
        <div>
            <Container>
                <Typography>Example: {state.asylumProgress} </Typography>
                <form action='submit'>
                    <input 
                        value={state.asylumProgress}
                        onChange={(e) => actions({type:'setState', payload: {...state, asylumProgress: e.target.value}})}
                        type='text' />
                   
                </form>
                                    
                <TextField
                    value={state.visa}
                    onChange={(e) => actions({type: 'setState', payload: {...state, visa: e.target.value}})}
                    // inputProps={{
                    //     name: 'asylumProgress',
                    //     id: 'advice-progress'
                    // }}
                    variant="outlined"
                />
                {/* <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        How far are you in your asylum procedure?
                    </Typography>

                    <Select
                        native
                        value={state.asylumProgress}
                        onChange={(e) => actions({type: 'setState', payload: {...state, value: e.target.value}})}
                        // onChange={e => {console.log('Selected: ', e.target.value)}}

                        inputProps={{
                            name: 'asylumProgress',
                            id: 'aslum-progress'
                        }}
                        variant="outlined"
                        // input={<BootstrapInput />}
                    >
                        <option aria-label="None" value="" />
                        <option value={'begin'}>About to start</option>
                        <option value={'inProgress'}>In progress</option>
                        <option value={'rejected'}>Rejected</option>
                    </Select>
                </FormControl> */}

                

            </Container>
        </div>
    )
    
};



  