import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategory } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategory />
            </Category> 

            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="7-days-to-die"/>
            <ChannelButton channelName="conan-exiles"/>
            <ChannelButton channelName="resident-evil"/>
        </Container>
    );
};

export default ChannelList;

