import React from 'react';
import styled from 'styled-components';
import HistoryContainer from '../../../logic/History';
import Item from './Item';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    @media (max-width: 600px) {
        flex-direction:column;
    }      
`;

const Title = styled.div`
    display:flex;
    @media (max-width: 600px) {
        margin-bottom:10px;
    }         
`;

const ItemsWrapper = styled.div`
    display:flex;   
    flex-wrap: wrap; 
`;

const HistorySection = (props) => {
    return (
        <HistoryContainer {...props}> 
            {({history,onClick}) => {

                return history && history.length > 0 ? (
                    <Wrapper>
                        <Title>Choose your favorite category:</Title>
                        <ItemsWrapper>
                            {history.map((itemName,index) => (
                                <Item key={index} itemName={itemName} onClick={onClick} />
                            ))}
                        </ItemsWrapper>
                    </Wrapper>
                ) : false;
            }}
        </HistoryContainer>
    )
};

export default HistorySection;