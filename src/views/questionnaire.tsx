import React, { MouseEventHandler } from 'react';
import questionImg from '../ui/QuestionairePicture.jpg';

import CountrySelect from '../components/CountrySelect'

import { Button, CardMedia, Container, FormControl, Select, TextField, Typography } from '@material-ui/core/';


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

export interface QuestionnaireProps {
    onClick: MouseEventHandler<any>;
}

export default function Questionnaire(props: QuestionnaireProps) {

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
        // console.log(state);
    };

    return(
        <>
            <CardMedia src={questionImg} component='img' ></CardMedia>

            <Container>
                <Typography variant="h5" align='center' color="textPrimary" gutterBottom={true}>
                    Get and overview of your asylum proceedure by answering a few
                </Typography>
                

                <Typography variant="h5" align='center' color="textPrimary" gutterBottom={true}>
                    Why answer questions?
                </Typography>

                <Typography variant="body1" color="textPrimary" paragraph={true}>
                    By answering the following questions Asylum Advice can give you a general overview of what will be important in your asylum procedure and where you can find frther help. If you can't answer of of the questions or feel uncomfortable to do so, please skip that question.
                </Typography>
            </Container>
            
            <Container>
                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        How far are you in your asylum procedure?
                    </Typography>

                    <Select
                        native
                        value={state.asylumProgress}
                        onChange={handleChange}
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
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Do you have a visa or asylum status in this country?
                    </Typography>

                    <Select
                        native
                        value={state.visa}
                        // name='asylumProgress'
                        onChange={handleChange}
                        inputProps={{
                            name: 'visa',
                            id: 'visa'
                        }}
                        variant="outlined"
                        // input={<BootstrapInput />}
                    >
                        <option aria-label="None" value="" />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Did you leave fingerprints in different EU country?
                    </Typography>

                    <Select
                        native
                        value={state.fingerprints}
                        onChange={handleChange}
                        inputProps={{
                            name: 'fingerprints',
                            id: 'fingerprints'
                        }}
                        variant="outlined"
                    >
                        <option aria-label="None" value="" />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Do you have your passport with you?
                    </Typography>

                    <Select
                        native
                        value={state.passport}
                        onChange={handleChange}
                        inputProps={{
                            name: 'passport',
                            id: 'passport'
                        }}
                        variant="outlined"
                    >
                        <option aria-label="None" value="" />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        What is your nationality??
                    </Typography>
                    
                    <CountrySelect
                        // value={state.nationality}
                        // onChange={handleChange}
                        // inputProps={{
                        //     name: 'nationality',
                        //     id: 'nationality'
                        // }}
                        // input={<BootstrapInput />}
                    />

                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Are you under 18?
                    </Typography>

                    <Select
                        native
                        value={state.under18}
                        onChange={handleChange}
                        inputProps={{
                            name: 'under18',
                            id: 'under18'
                        }}
                        variant="outlined"
                    >
                        <option aria-label="None" value='' />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Have you come here with members of your family or do you have relatives already in Germany?
                    </Typography>

                    <Select
                        native
                        value={state.familyInGermany}
                        onChange={handleChange}
                        inputProps={{
                            name: 'familyInGermany',
                            id: 'family-germany'
                        }}
                        variant="outlined"
                    >
                        <option aria-label="None" value="" />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Are your clode family members still in your home country or somewhere else?
                    </Typography>

                    <Select
                        native
                        value={state.familyElsewhere}
                        onChange={handleChange}
                        inputProps={{
                            name: 'familyElsewhere',
                            id: 'family-elsewhere'
                        }}
                        variant="outlined"
                    >
                        <option aria-label="None" value="" />
                        <option value={'No'}>No</option>
                        <option value={'Yes'}>Yes</option>
                    
                    </Select> 
                </FormControl>

                <FormControl>
                    <Typography variant="body1" color="textPrimary" component="p">
                        In which location are you looking for legal aid?
                    </Typography>

                    <TextField
                        value={state.adviceLocation}
                        onChange={handleChange}
                        inputProps={{
                            name: 'adviceLocation',
                            id: 'advice-location'
                        }}
                        variant="outlined"
                    />
                </FormControl>



                <Button 
                    variant='contained'
                    color='primary' 
                    type='submit'
                    onClick={props.onClick}
                >
                    Submit
                </Button>
            </Container>
        </>
    );
}