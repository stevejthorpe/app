import React from 'react';
import questionImg from '../ui/QuestionairePicture.jpg';
import '../App.css';

import { Button, CardMedia, FormControl, Select, TextField, Typography } from '@material-ui/core/';

interface IQuestionnaire {
    asylumProgress: string, 
    visa: string, 
    fingerprints: string, 
    passport: string, 
    nationality: string, 
    under18: string,
    familyInGermany: string,
    familyElsewhere: string,
    adviceLocation: string
}

export default function Questionnaire() {

    const [state, setState] = React.useState<IQuestionnaire>({
        asylumProgress: '',
        visa: 'no',
        fingerprints: 'no',
        passport: 'no',
        nationality: '',
        under18: 'no',
        familyInGermany: 'no',
        familyElsewhere: 'no',
        adviceLocation: ''
    })

    const handleChange = (e: React.ChangeEvent<{ name?: string; value: any }>) => {
        const name = e.target.name as keyof typeof state;
        e.preventDefault();
        setState({
            ...state,
            [name]: e.target.value,
        });
        console.log(state);
    };

    return(
        <div>
            <CardMedia src={questionImg} component='img'></CardMedia>
            
            <Typography variant='h4' gutterBottom>
                Get and overview of your asylum proceedure by answering a few
            </Typography>
            

            <Typography variant='h4' gutterBottom>
                Why answer questions?
            </Typography>

            <Typography variant='body1' gutterBottom>
                By answering the following questions Asylum Advice can give you a general overview of what will be important in your asylum procedure and where you can find frther help. If you can't answer of of the questions or feel uncomfortable to do so, please skip that question.
            </Typography>

            

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    How far are you in your asylum procedure?
                </Typography>

                <Select
                    native
                    value={state.asylumProgress}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'asylumProgress',
                        id: 'aslum-progress'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'begin'}>About to start</option>
                    <option value={'inProgress'}>In progress</option>
                    <option value={'rejected'}>Rejected</option>
                </Select>
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Do you have a visa or asylum status in this country?
                </Typography>

                <Select
                    native
                    value={state.asylumProgress}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'visa',
                        id: 'visa'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Did you leave fingerprints in different EU country?
                </Typography>

                <Select
                    native
                    value={state.fingerprints}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'fingerprints',
                        id: 'fingerprints'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Do you have your passport with you?
                </Typography>

                <Select
                    native
                    value={state.passport}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'passport',
                        id: 'passport'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    What is your nationality??
                </Typography>

                <TextField
                    value={state.nationality}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'nationality',
                        id: 'nationality'
                    }}
                /> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Are you inder 18?
                </Typography>

                <Select
                    native
                    value={state.under18}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'under18',
                        id: 'under18'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Have you come here with members of your family or do you have relatives already in Germany?
                </Typography>

                <Select
                    native
                    value={state.familyInGermany}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'familyInGermany',
                        id: 'family-germany'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    Are your clode family members still in your home country or somewhere else?
                </Typography>

                <Select
                    native
                    value={state.familyElsewhere}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'familyElsewhere',
                        id: 'family-elsewhere'
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={'No'}>No</option>
                    <option value={'Yes'}>Yes</option>
                   
                </Select> 
            </FormControl>

            <FormControl>
                <Typography variant='body1' gutterBottom>
                    In which location are you looking for legal aid?
                </Typography>

                <TextField
                    value={state.adviceLocation}
                    // name='asylumProgress'
                    onChange={handleChange}
                    inputProps={{
                        name: 'adviceLocation',
                        id: 'advice-location'
                    }}
                />
            </FormControl>



            <Button 
                color='primary' 
                type='submit' 
                >Submit
            </Button>
        </div>
    );
}