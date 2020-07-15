import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={ messagesRef }>
                {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage key={n} author="Ghost" date="15/07/2020" content="Isso é uma Mensagem Enviada!"/>))}

                <ChannelMessage author="Usuário 1" date="21/06/2020" content={<><Mention>@Ghost</Mention> me invita aew no 7 days to die?</>} hasMention isBot />
            </Messages>

            

            <InputWrapper>
                <Input type="text" placeholder="Escreva uma mensagem ..." />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;

