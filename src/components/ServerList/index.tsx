import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';


const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton/>

            <Separator/>

            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton mentions={3}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotification/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={50}/>
        </Container>
    )
};

export default ServerList;