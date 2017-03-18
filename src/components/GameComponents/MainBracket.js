import React from 'react';
import Container from '../Container';
import RegionA1 from './RegionA1';
import RegionA2 from './RegionA2';
import RegionB1 from './RegionB1';
import RegionB2 from './RegionB2';

class MainBracket extends React.Component {

    render() {
        return (
            <Container>

                <RegionA1/>
                <RegionB1/>
                <RegionA2/>
                <RegionB2/>

            </Container>
        );
    }
}

export default MainBracket;
