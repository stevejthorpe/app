import React, { useContext } from 'react';
import questionImg from '../ui/QuestionairePicture.jpg';

import ArticlePreview from '../components/ArticlePreview'

import { Card, CardMedia, CardHeader } from '@material-ui/core/';

import Context from '../store/context';
import { render } from '@testing-library/react';


export default function Overview() {
    const {state}:any = useContext(Context);
    console.log('Overview State: ', state)

    

    return(
        <>
            <CardMedia src={questionImg} component='img' ></CardMedia>
            <Card>
                <CardHeader title="Your overview"/>
            </Card> 
            {state.asylumProgress !== 'rejected' ? 
                <>
                    <Card>
                        <CardHeader title='Asylum Application!'>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader title='The Hearing!'>
                        </CardHeader>
                    </Card>
                </>
                : 
                console.log('Rejected asylum')
            }
            {state.finderprints !== 'No' ? 
                <Card>
                    <CardHeader title='Dublin!!'>
                    </CardHeader>
                </Card>    
                : 
                <Card>
                    <CardHeader title='No fingerprints'>
                    </CardHeader>
                </Card>
            }
        </>
    )
}