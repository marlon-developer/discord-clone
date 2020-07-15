import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Props {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<Props> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={ isBot? 'bot' : '' } />

            <strong>{ nickname }</strong>

            { isBot && <span>Bot</span> }
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 3</Role>
            <UserRow nickname="Usuário 1"/>
            <UserRow nickname="Usuário 2" isBot/>
            <UserRow nickname="Usuário 3"/>

            <Role>Offline - 3</Role>
            <UserRow nickname="Usuário 4" isBot />
            <UserRow nickname="Usuário 5"/>
            <UserRow nickname="CasoNickSejaGrande 5"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
            <UserRow nickname="Usuário"/>
        </Container>
    );
};

export default UserList;

